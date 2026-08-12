import Client from '@/components/white-paper/Client';
import Hero from '@/components/white-paper/Hero';
import Research from '@/components/white-paper/Researchs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepaper - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <Hero />
      <Research />
      <Client />
    </main>
  );
};

export default page;
