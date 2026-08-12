#!/usr/bin/env node
/**
 * Overwrite the template's placeholder images with the real ones from the
 * reference site, in place, before the Next.js build reads them.
 *
 * Why a prebuild step instead of committing the images: the template imports
 * images statically (`import img from '@public/images/ns-img-1.jpg'`), so the
 * bundler resolves every path at build time and reads each file's real
 * intrinsic width/height. Overwriting the bytes *before* the build means the
 * true dimensions land in the layout. Deleting a file instead would break the
 * build outright with `Module not found`.
 *
 * Rules this script follows, in priority order:
 *   1. Never break the build. Any network or filesystem failure leaves the
 *      existing file untouched and the process still exits 0.
 *   2. Never write a non-image. Every response is checked by magic bytes, so an
 *      HTML error page can never be saved as a .jpg.
 *   3. Never touch video or font files. Only image extensions under
 *      public/images are considered.
 *
 * Override the source with REAL_IMAGES_ORIGIN, e.g.
 *   REAL_IMAGES_ORIGIN=https://example.com node scripts/fetch-real-images.mjs
 *
 * Local note: Node's built-in fetch ignores HTTPS_PROXY unless you run with
 * NODE_USE_ENV_PROXY=1 (Node >= 22.21). Vercel's build has direct egress, so
 * nothing extra is needed there.
 */

import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const ORIGIN = (process.env.REAL_IMAGES_ORIGIN || 'https://next-saas-next.vercel.app').replace(
  /\/+$/,
  ''
);
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const CONCURRENCY = Number(process.env.REAL_IMAGES_CONCURRENCY || 8);
const TIMEOUT_MS = Number(process.env.REAL_IMAGES_TIMEOUT_MS || 15000);
const RETRIES = Number(process.env.REAL_IMAGES_RETRIES || 2);
const DISABLED = /^(1|true|yes)$/i.test(process.env.REAL_IMAGES_SKIP || '');

/**
 * Hard ceiling on the whole pass. A build that hangs is just as broken as a
 * build that fails, so if the origin is slow or unreachable we stop walking and
 * let the existing files through rather than stalling the deployment.
 */
const MAX_MS = Number(process.env.REAL_IMAGES_MAX_MS || 180000);
const startedAt = Date.now();
const outOfTime = () => Date.now() - startedAt > MAX_MS;

/** Extensions we are willing to overwrite. Deliberately excludes video/font. */
const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.avif',
  '.svg',
  '.ico',
]);

const md5 = (buf) => createHash('md5').update(buf).digest('hex');

/**
 * Identify an image by its leading bytes. Returns a short type name, or null if
 * the buffer is not a recognisable image. This is the guard that stops an HTML
 * error page from being written over a real asset.
 */
function sniffImageType(buf) {
  if (buf.length < 12) return null;

  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpeg';
  if (
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47 &&
    buf[4] === 0x0d &&
    buf[5] === 0x0a &&
    buf[6] === 0x1a &&
    buf[7] === 0x0a
  )
    return 'png';

  const head6 = buf.subarray(0, 6).toString('latin1');
  if (head6 === 'GIF87a' || head6 === 'GIF89a') return 'gif';

  if (buf.subarray(0, 4).toString('latin1') === 'RIFF' && buf.subarray(8, 12).toString('latin1') === 'WEBP')
    return 'webp';

  // ISO-BMFF container: AVIF / HEIC share the `ftyp` box layout.
  if (buf.subarray(4, 8).toString('latin1') === 'ftyp') {
    const brand = buf.subarray(8, 12).toString('latin1');
    if (brand.startsWith('avif') || brand.startsWith('avis')) return 'avif';
    if (brand.startsWith('heic') || brand.startsWith('heix') || brand.startsWith('mif1'))
      return 'heic';
    return null;
  }

  if (buf[0] === 0x00 && buf[1] === 0x00 && buf[2] === 0x01 && buf[3] === 0x00) return 'ico';

  return sniffSvg(buf) ? 'svg' : null;
}

/**
 * SVG is text, so it needs its own check: it must look like XML/SVG and must
 * not be an HTML document that merely happens to contain an inline <svg>.
 */
function sniffSvg(buf) {
  const head = buf.subarray(0, 1024).toString('utf8').trim().toLowerCase();
  if (head.startsWith('<!doctype html') || head.startsWith('<html')) return false;
  if (!head.startsWith('<?xml') && !head.startsWith('<svg') && !head.startsWith('<!--')) return false;
  return buf.subarray(0, 4096).toString('utf8').toLowerCase().includes('<svg');
}

/** Map a file extension to the sniffed type it should normally produce. */
function expectedType(ext) {
  if (ext === '.jpg' || ext === '.jpeg') return 'jpeg';
  return ext.slice(1);
}

async function walk(dir) {
  const found = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return found;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await walk(full)));
    } else if (entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      found.push(full);
    }
  }
  return found;
}

async function fetchBuffer(url) {
  let lastError;
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(TIMEOUT_MS),
        redirect: 'follow',
        headers: {
          // Some hosts return an HTML challenge page to unknown agents.
          'user-agent': 'Mozilla/5.0 (compatible; fetch-real-images/1.0)',
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
      });
      if (!res.ok) {
        // 4xx means the asset genuinely is not there; retrying will not help.
        if (res.status >= 400 && res.status < 500) {
          return { error: `HTTP ${res.status}`, retryable: false };
        }
        lastError = `HTTP ${res.status}`;
        continue;
      }
      return { buffer: Buffer.from(await res.arrayBuffer()) };
    } catch (err) {
      lastError = err?.name === 'TimeoutError' ? 'timeout' : err?.message || String(err);
    }
  }
  return { error: lastError || 'unknown error', retryable: true };
}

async function processFile(file, stats) {
  const relFromPublic = path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
  const url = `${ORIGIN}/${relFromPublic}`;
  const label = relFromPublic;

  if (outOfTime()) {
    stats.skipped++;
    return;
  }

  const { buffer, error } = await fetchBuffer(url);
  if (!buffer) {
    stats.failed++;
    console.log(`  failed    ${label} (${error}) — kept existing file`);
    return;
  }

  const type = sniffImageType(buffer);
  if (!type) {
    stats.rejected++;
    const preview = buffer.subarray(0, 24).toString('latin1').replace(/[^\x20-\x7e]/g, '.');
    console.log(`  rejected  ${label} (not an image: "${preview}") — kept existing file`);
    return;
  }

  let existing;
  try {
    existing = await fs.readFile(file);
  } catch {
    existing = null;
  }

  if (existing && md5(existing) === md5(buffer)) {
    stats.unchanged++;
    console.log(`  unchanged ${label}`);
    return;
  }

  const ext = path.extname(file).toLowerCase();
  const mismatch = type !== expectedType(ext) ? ` [served ${type} for ${ext}]` : '';

  try {
    await fs.writeFile(file, buffer);
  } catch (err) {
    stats.failed++;
    console.log(`  failed    ${label} (write: ${err.message}) — kept existing file`);
    return;
  }

  stats.replaced++;
  const before = existing ? `${existing.length}B` : 'missing';
  console.log(`  replaced  ${label} (${before} -> ${buffer.length}B)${mismatch}`);
}

async function runPool(items, worker) {
  let cursor = 0;
  const runners = Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      await worker(items[index]);
    }
  });
  await Promise.all(runners);
}

async function main() {
  console.log(`[fetch-real-images] origin: ${ORIGIN}`);

  if (DISABLED) {
    console.log('[fetch-real-images] REAL_IMAGES_SKIP is set — leaving all images untouched.');
    return;
  }

  const files = (await walk(IMAGES_DIR)).sort();
  if (files.length === 0) {
    console.log(`[fetch-real-images] no images found under ${IMAGES_DIR} — nothing to do.`);
    return;
  }

  console.log(`[fetch-real-images] ${files.length} image(s) to check, concurrency ${CONCURRENCY}`);

  // Preflight: one cheap request decides whether the origin is reachable at all.
  // Without this, an unreachable host would burn every file's full timeout
  // budget and could push the deployment past its own build limit.
  const probeTarget = path.relative(PUBLIC_DIR, files[0]).split(path.sep).join('/');
  const probe = await fetchBuffer(`${ORIGIN}/${probeTarget}`);
  if (!probe.buffer && probe.retryable) {
    console.log(
      `[fetch-real-images] origin unreachable (${probe.error}) — skipping the refresh entirely ` +
        `and building with the images already in the repo.`
    );
    console.log(
      `[fetch-real-images] summary: 0 replaced, 0 unchanged, 0 rejected, 0 failed, ` +
        `${files.length} skipped, ${files.length} total`
    );
    return;
  }

  const stats = { replaced: 0, unchanged: 0, failed: 0, rejected: 0, skipped: 0 };
  await runPool(files, (file) => processFile(file, stats));

  if (stats.skipped > 0) {
    console.log(
      `[fetch-real-images] time budget of ${MAX_MS}ms exhausted — ${stats.skipped} file(s) left as-is.`
    );
  }

  console.log(
    `[fetch-real-images] summary: ${stats.replaced} replaced, ${stats.unchanged} unchanged, ` +
      `${stats.rejected} rejected, ${stats.failed} failed, ${stats.skipped} skipped, ` +
      `${files.length} total`
  );

  if (stats.replaced === 0 && stats.unchanged > 0 && stats.failed === 0 && stats.rejected === 0) {
    console.log(
      '[fetch-real-images] every file matched the origin byte-for-byte — the reference site is ' +
        'serving the same assets this repo already has.'
    );
  }
  if (stats.failed > 0 || stats.rejected > 0) {
    console.log(
      '[fetch-real-images] some files could not be refreshed; their existing bytes were kept ' +
        'so the build can continue.'
    );
  }
}

main()
  .catch((err) => {
    // A crash here must never take the deployment down with it.
    console.log(`[fetch-real-images] aborted: ${err?.message || err} — all files left untouched.`);
  })
  .finally(() => {
    process.exitCode = 0;
  });
