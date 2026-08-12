import Content from '@/components/legal-notice/Content';
import Hero from '@/components/legal-notice/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Legal - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <Content />
    </main>
  );
};
export default page;
