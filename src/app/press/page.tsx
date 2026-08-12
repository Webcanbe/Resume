import Awards from '@/components/press/Awards';
import Client from '@/components/press/Client';
import Hero from '@/components/press/Hero';
import SaasInnovation from '@/components/press/SaasInnovation';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Press - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-12 dark:bg-background-5">
      <Hero />
      <Client />
      <SaasInnovation />
      <Awards />
    </main>
  );
};

export default page;
