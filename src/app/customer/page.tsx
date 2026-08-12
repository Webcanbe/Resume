import CTA from '@/components/customer/CTA';
import Hero from '@/components/customer/Hero';
import SuccessStories from '@/components/customer/SuccessStories';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Customers - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <SuccessStories />
      <CTA />
    </main>
  );
};

export default page;
