import Content from '@/components/whitepaper-details/Content';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const whitepapers = getMarkDownData('src/data/whitepaper');
  return whitepapers.map((whitepaper) => ({
    slug: whitepaper.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepaper Details - AI Resume Builder || NextSaaS',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="dark:bg-background-5 bg-white">
      <Content slug={slug} />
    </main>
  );
};

export default page;
