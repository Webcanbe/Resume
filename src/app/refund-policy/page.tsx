import RefundPolicyContent from '@/components/refund-policy/RefundPolicyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Refund Policy - AI Resume Builder || NextSaaS',
};

const RefundPolicy = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <RefundPolicyContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Get Started"
        ctaHeading="Ready to start earning with NextSaaS?"
        description="If you have any questions, feel free to reach out to our team."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default RefundPolicy;
