import confluence from '@public/images/icons/confluence.svg';
import edge from '@public/images/icons/edge.svg';
import figma from '@public/images/icons/figma.svg';
import framer from '@public/images/icons/framer.svg';
import gmail from '@public/images/icons/gmail.svg';
import googleMeet from '@public/images/icons/google-meet.svg';
import google from '@public/images/icons/google.svg';
import marvel from '@public/images/icons/marvel.svg';
import microsoft from '@public/images/icons/microsoft.svg';
import msYammer from '@public/images/icons/ms_yammer.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import vlWhite from '@public/images/icons/vl-white.svg';
import vl from '@public/images/icons/vl.svg';
import gradient16 from '@public/images/ns-img-508.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Integration = () => {
  return (
    <section className="dark:bg-background-6 relative z-10 mx-auto my-14 w-[95%] overflow-hidden rounded-4xl bg-white px-10 py-[70px] md:my-20 md:min-h-[740px] md:px-[75px] lg:my-[100px] xl:my-[200px] 2xl:max-w-[1440px]">
      {/* bottom gradient */}
      <RevealAnimation delay={0.7} offset={120}>
        <figure className="pointer-events-none absolute bottom-[-206px] left-[-17%] -z-10 h-full w-full -translate-x-1/2 -rotate-[96deg] select-none max-md:h-[500px] max-md:w-[400px] sm:-bottom-[150px] sm:left-[40%] sm:-rotate-[30deg] md:-bottom-[250px]">
          <Image src={gradient16} alt="bg" className="h-[224%] w-[115%]" />
        </figure>
      </RevealAnimation>

      {/* content  */}
      <div className="relative z-10 mx-auto w-fit space-y-[25px] text-center">
        <RevealAnimation delay={0.2}>
          <span className="badge badge-cyan mb-5">Integration</span>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <h2 className="mb-3">Templates & tools</h2>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <p className="mx-auto mb-14 max-w-[490px] px-5 md:px-0">
            Make setup simple with ready-to-use templates for various projects, ensuring you can hit the ground running
            without any hassle. Whether you&apos;re launching a new website
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div>
            <LinkButton
              href="/pricing"
              btnClass="btn-md-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 "
              className="mx-auto inline-block w-[90%] md:mx-0 md:w-auto">
              See it in Action
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>

      <div className="hidden md:absolute md:top-0 md:left-0 md:block md:w-1/2 lg:max-w-[400px] xl:max-w-[520px] 2xl:max-w-[582px]">
        <div className="relative flex h-full flex-row flex-wrap gap-5 py-[70px] md:flex-col md:gap-[40px] 2xl:pl-[70px]">
          <div className="flex md:ml-5 lg:ml-[60px] xl:ml-[100px]">
            <RevealAnimation delay={0.1}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={googleMeet} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:ml-5 md:gap-8 md:self-start lg:ml-4 lg:gap-[50px] xl:ml-0 xl:gap-[75px]">
            <RevealAnimation delay={0.2}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={gmail} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={marvel} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:ml-5 md:gap-8 lg:ml-[60px] lg:gap-[50px] xl:ml-[100px] xl:gap-[75px]">
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={confluence} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={framer} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:ml-5 md:gap-8 lg:ml-[100px] lg:gap-[50px] xl:ml-[185px] xl:gap-[75px]">
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={vl} alt="integration icon" className="size-12 object-contain dark:hidden" />
                  <Image src={vlWhite} alt="integration icon" className="hidden size-12 object-contain dark:block" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={edge} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
      <div className="hidden md:absolute md:top-0 md:right-0 md:block md:w-1/2 lg:max-w-[400px] xl:max-w-[520px] 2xl:max-w-[582px]">
        <div className="relative flex h-full flex-row flex-wrap gap-5 py-[70px] md:flex-col md:gap-[40px] 2xl:pr-[70px]">
          <div className="flex md:mr-5 md:self-end lg:mr-[60px] xl:mr-[100px]">
            <RevealAnimation delay={0.1}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={confluence} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="mr-4 flex gap-8 md:self-end lg:gap-[50px] xl:mr-0 xl:gap-[75px]">
            <RevealAnimation delay={0.1}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={slack} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={snapchat} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-8 md:mr-5 md:self-end lg:mr-[60px] lg:gap-[50px] xl:mr-[100px] xl:gap-[75px]">
            <RevealAnimation delay={0.3}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={google} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={msYammer} alt="integration icon" className="size-12 object-cover" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-8 self-end md:mr-5 lg:mr-[100px] lg:gap-[50px] xl:mr-[185px] xl:gap-[75px]">
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={microsoft} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px]">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-6 xl:size-[100px]">
                  <Image src={figma} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
