import Benefits from '@/components/pricing/Benefits';
import Contact from '@/components/pricing/Contact';
import Features from '@/components/pricing/Features';
import Pricing from '@/components/pricing/Pricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Pricing />
      <Benefits />
      <Features />
      <Contact />
      <CTA
        className="dark:bg-background-7 bg-background-3"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
