import CTA from '@/components/why-choose-us/CTA';
import Counter from '@/components/why-choose-us/Counter';
import Feature from '@/components/why-choose-us/Feature';
import Hero from '@/components/why-choose-us/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Why Choose Us - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-5 bg-white">
      <Hero />
      <Counter />
      <Feature />
      <CTA />
    </main>
  );
};

export default page;
