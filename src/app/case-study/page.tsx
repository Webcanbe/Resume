import CaseStudy from '@/components/case-study/CaseStudy';
import Feature from '@/components/case-study/Feature';
import Success from '@/components/case-study/Success';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Study - AI Resume Builder || NextSaaS',
};

const CaseStudyPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudy />
      <Success />
      <Feature />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Get started"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;
