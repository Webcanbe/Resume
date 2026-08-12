import CTA from '@/components/shared/cta/CTA';
import Client from '@/components/testimonial/Client';
import Integration from '@/components/testimonial/Integration';
import Reviews from '@/components/testimonial/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Testimonial - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Reviews
        badgeClass="badge-green"
        className="bg-background-1 dark:bg-background-6 py-[100px] md:py-[100px] lg:py-[200px]"
      />
      <Client />
      <Integration />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-green"
        badgeText="Get started"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
