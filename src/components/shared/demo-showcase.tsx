'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ApiDemoItem {
  id: number;
  title: string;
  url: string;
  image: string;
  newRelease: boolean;
  tags: string;
}

export default function DemoShowcase({ activeDemoId }: Readonly<{ activeDemoId: number }>) {
  const [isOpen, setIsOpen] = useState(false);
  const [demoShowcaseList, setDemoShowcaseList] = useState<ApiDemoItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDemoList = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://nextsaas-api.vercel.app/api/nextjs-demo');
        if (!response.ok) {
          throw new Error('Failed to fetch demo list');
        }
        const data: ApiDemoItem[] = await response.json();

        setDemoShowcaseList(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // Error is handled via setError state
      } finally {
        setIsLoading(false);
      }
    };

    fetchDemoList();
  }, []);

  useEffect(() => {
    if (globalThis.window !== undefined) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }

    // Cleanup on unmount
    return () => {
      if (globalThis.window !== undefined) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const getCardClassName = (href: string, id: number) => {
    const isActive = id === activeDemoId;
    return `demo-card block border cursor-pointer transition-all duration-300 ease-in-out max-w-[500px] mx-auto rounded-[36px] p-2 ${
      isActive ? 'border-primary-500 border-2' : 'border-stroke-3 group hover:border-primary-400'
    }`;
  };

  return (
    <>
      <button
        style={{ writingMode: 'sideways-lr', textOrientation: 'mixed' }}
        onClick={handleOpen}
        className="text-accent text-tagline-1 fixed right-0 bottom-1/2 z-[99999] flex translate-y-1/2 cursor-pointer items-center gap-4 rounded-l-xl bg-[#DE4A40] pt-4 pb-1 font-medium sm:pr-1 sm:pl-1">
        <span className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M10 44C4.47715 44 0 39.5228 0 34L0 0L44 0L44 44L10 44Z" fill="#1A1A1C" fillOpacity="0.1" />
            <path d="M16.1728 24.1932L14 21.9995L16.1728 19.8059L18.3456 21.9995L16.1728 24.1932Z" fill="#F5F5F7" />
            <path d="M23.2157 12.6936L25.3886 10.5L27.5614 12.6936L25.3886 14.8873L23.2157 12.6936Z" fill="#F5F5F7" />
            <path
              d="M19.2456 27.2955L17.0728 25.1018L19.2456 22.9082L21.4184 25.1018L19.2456 27.2955Z"
              fill="#F5F5F7"
            />
            <path
              d="M20.1429 15.7959L22.3157 13.6023L24.4885 15.7959L22.3157 17.9895L20.1429 15.7959Z"
              fill="#F5F5F7"
            />
            <path
              d="M22.3184 30.3977L20.1456 28.2041L22.3184 26.0105L24.4912 28.2041L22.3184 30.3977Z"
              fill="#F5F5F7"
            />
            <path
              d="M17.0701 18.8982L19.2429 16.7045L21.4157 18.8982L19.2429 21.0918L17.0701 18.8982Z"
              fill="#F5F5F7"
            />
            <path d="M25.3912 33.5L23.2184 31.3064L25.3912 29.1127L27.564 31.3064L25.3912 33.5Z" fill="#F5F5F7" />
            <path
              d="M20.1429 22.0005L22.3157 19.8068L24.4885 22.0005L22.3157 24.1941L20.1429 22.0005Z"
              fill="#F5F5F7"
            />
            <path d="M25.6544 22.0005L27.8272 19.8068L30 22.0005L27.8272 24.1941L25.6544 22.0005Z" fill="#F5F5F7" />
          </svg>
        </span>
        <span>
          {' '}
          {demoShowcaseList.length > 0 ? `${demoShowcaseList.length}+ Pre built demos` : '38+ Pre built demos'}
        </span>
      </button>

      <div
        className={`fixed top-0 left-0 z-[99999] h-screen w-full origin-center transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-[transform,opacity,filter] backface-hidden ${
          isOpen ? 'opacity-100 blur-none' : 'opacity-0 blur-[22px]'
        }`}
        style={{
          transform: isOpen ? 'translateX(0) scale(1) rotateY(0deg)' : 'translateX(100%) scale(0.65) rotateY(20deg)',
        }}
        data-lenis-prevent="true">
        <button
          onClick={handleClose}
          className="bg-secondary fixed top-5 right-5 z-[999999] flex cursor-pointer items-center justify-center rounded-[80px] border-6 border-white p-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.15)] lg:top-10 lg:right-10 lg:border-8 lg:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-white">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div
          className="bg-background-12 fixed top-0 left-0 h-screen w-full overflow-y-auto pt-14 pb-16"
          style={{
            touchAction: 'pan-y',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
          }}>
          <div className="mx-auto max-w-[1560px] min-[1880px]:!px-0 md:px-4">
            <div className="mb-12 text-center">
              <h2 className="text-secondary text-center font-normal">
                {demoShowcaseList.length > 0
                  ? `${demoShowcaseList.length}+ Pre-built websites`
                  : '38+ Pre-built websites'}
              </h2>
            </div>

            <div className="grid grid-cols-12 gap-y-5 sm:gap-3 xl:gap-6">
              {isLoading ? (
                <div className="col-span-12 py-12 text-center">
                  <p className="text-secondary">Loading demos...</p>
                </div>
              ) : error ? (
                <div className="col-span-12 py-12 text-center">
                  <p className="text-secondary">Error loading demos: {error}</p>
                </div>
              ) : (
                demoShowcaseList.map((item) => (
                  <div key={item.id} className="col-span-12 md:col-span-6 xl:col-span-4">
                    <Link href={item.url} target="_blank" className={getCardClassName(item.url, item.id)}>
                      <div className="rounded-[28px] bg-white p-2 shadow-[0_1px_4px_0_rgba(16,24,40,0.10)] transition-all duration-400 ease-in-out group-hover:shadow-[0_8px_6px_0_rgba(16,24,40,0.16)]">
                        <figure className="max-h-[351px] overflow-hidden rounded-[20px]">
                          <img src={item.image} alt="Demo Showcase" className="h-full w-full object-cover" />
                        </figure>

                        <h2 className="text-secondary flex items-center justify-center gap-2 py-4 text-center text-lg leading-[150%] font-medium">
                          {item.title}{' '}
                          {item.newRelease && (
                            <span className="text-secondary bg-ns-green text-tagline-2 rounded-[35px] px-5 py-[5px]">
                              New
                            </span>
                          )}
                        </h2>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
