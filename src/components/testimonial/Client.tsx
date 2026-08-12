import clientLogo10Dark from '@public/images/icons/client-logo-10-dark.svg';
import clientLogo10 from '@public/images/icons/client-logo-10.svg';
import clientLogo6Dark from '@public/images/icons/client-logo-6-dark.svg';
import clientLogo6 from '@public/images/icons/client-logo-6.svg';
import clientLogo7Dark from '@public/images/icons/client-logo-7-dark.svg';
import clientLogo7 from '@public/images/icons/client-logo-7.svg';
import clientLogo8Dark from '@public/images/icons/client-logo-8-dark.svg';
import clientLogo8 from '@public/images/icons/client-logo-8.svg';
import clientLogo9Dark from '@public/images/icons/client-logo-9-dark.svg';
import clientLogo9 from '@public/images/icons/client-logo-9.svg';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import gradient6Img from '@public/images/ns-img-498.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Client = () => {
  return (
    <section>
      <RevealAnimation delay={0.2}>
        <div className="main-container bg-background-3 dark:bg-background-5 relative -z-0 overflow-hidden rounded-4xl py-[100px] text-center">
          <div
            className="pointer-events-none absolute -top-[164%] -left-[35%] -z-10 h-full w-full rotate-[21deg] select-none"
            aria-hidden="true">
            <Image src={gradient6Img} alt="Decorative gradient background overlay" className="scale-[60%]" />
          </div>
          {/* Customer Testimonial */}
          <article className="space-y-4 pb-10 text-center">
            {/* Customer Avatars */}
            <div className="flex cursor-pointer justify-center -space-x-2.5" aria-label="Customer avatars">
              <Image
                className="ring-accent bg-ns-yellow inline-block size-[38px] rounded-full ring-2 dark:ring-black"
                src={avatar1Img}
                alt="Customer avatar 1"
                width={38}
                height={38}
              />
              <Image
                className="ring-accent bg-ns-red inline-block size-[38px] rounded-full ring-2 dark:ring-black"
                src={avatar2Img}
                alt="Customer avatar 2"
                width={38}
                height={38}
              />
              <Image
                className="ring-accent bg-ns-green relative z-0 inline-block size-[38px] rounded-full ring-2 dark:ring-black"
                src={avatar3Img}
                alt="Customer avatar 3"
                width={38}
                height={38}
              />
              <div className="bg-ns-cyan ring-accent text-secondary/80 dark:text-accent/80 text-tagline-3 relative z-10 inline-flex size-[38px] items-center justify-center rounded-full font-medium ring-2 dark:ring-black">
                99+
              </div>
            </div>
            {/* Trust Metrics */}
            <div>
              <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Tushed by 20k+</p>
              <p className="text-tagline-3">Customers Across the Globe</p>
            </div>
          </article>
          {/* Client Logos */}
          <div className="relative mx-auto max-w-[1130px]">
            <div className="from-background-3 dark:from-background-5 absolute top-5 left-0 z-40 h-full w-[7%] bg-gradient-to-r to-transparent" />
            <div className="from-background-3 dark:from-background-5 absolute top-5 right-0 z-40 h-full w-[7%] bg-gradient-to-l to-transparent" />
            <Marquee autoFill speed={60}>
              <div className="border-secondary/10 dark:border-accent/10 flex items-center justify-center gap-8 border-t pt-10">
                <figure className="ml-8 min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo6}
                    alt="Client company logo 1"
                    className="inline-block lg:w-auto dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo6Dark}
                    alt="Client company logo 1"
                    className="hidden lg:w-auto dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo7}
                    alt="Client company logo 2"
                    className="inline-block lg:w-auto dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo7Dark}
                    alt="Client company logo 2"
                    className="hidden lg:w-auto dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo8}
                    alt="Client company logo 3"
                    className="inline-block lg:w-auto dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo8Dark}
                    alt="Client company logo 3"
                    className="hidden lg:w-auto dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo9}
                    alt="Client company logo 4"
                    className="inline-block lg:w-auto dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo9Dark}
                    alt="Client company logo 4"
                    className="hidden lg:w-auto dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo10}
                    alt="Client company logo 5"
                    className="inline-block lg:w-auto dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo10Dark}
                    alt="Client company logo 5"
                    className="hidden lg:w-auto dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
              </div>
            </Marquee>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Client;
