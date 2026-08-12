import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import Faq from '@/components/home/Faq';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Services from '@/components/home/Services';
import Templates from '@/components/home/Templates';
import Testimonial from '@/components/shared/testimonial/Testimonial';
import VideoModal from '@/components/shared/VideoModal';

import ModalProvider from '@/context/ModalContext';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Resume Builder - NextSaaS',
};

const page = () => {
  return (
    <ModalProvider>
      <main className="bg-white">
        <Hero />
        <Clients />
        <Services />
        <Templates />
        <HowItWorks />
        <Testimonial title="Testimonials" />
        <Faq />
        <CTA />
        <VideoModal />
      </main>
    </ModalProvider>
  );
};

export default page;
