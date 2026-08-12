import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/team-details/Contact';
import Details from '@/components/team-details/Details';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team Details - AI Resume Builder || NextSaaS',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Details slug={slug} />
      <Contact />
      <CTA
        className="bg-secondary dark:bg-background-5 py-28"
        ctaHeading="Join the future of cloud software"
        headingClass="text-accent"
        description="Start your free trial today and experience the power of NexSaaS—where efficiency meets innovation."
        descriptionClass="max-w-[530px] text-accent/60"
        ctaBtnText="Get started"
        listTextClass="text-tagline-2 text-accent dark:text-accent/60"
        inputFieldClass="border-0 px-[18px] shadow-1 h-12 py-3 placeholder:text-accent/60 rounded-full focus:outline-1 text-accent focus:outline-primary-600 dark:focus:outline-primary-400 bg-accent/5 lg:max-w-[340px] md:w-[71%] w-full dark:border-stroke-7 dark:placeholder:text-accent/60 placeholder:font-normal font-normal"
        checkListVariant="gray"
      />
    </main>
  );
};

export default page;
