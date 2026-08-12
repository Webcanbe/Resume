/* hero section  */
'use client';
import { useModalContext } from '@/context/ModalContext';
import avatar20 from '@public/images/ns-avatar-20.png';
import heroBg from '@public/images/ns-img-339.png';
import hero from '@public/images/ns-img-340.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import HeroBottomOverlay from './HeroBottomOverlay';
import HeroDivider from './HeroDivider';
import HeroRating from './HeroRating';
const Hero = () => {
  const { videoModal } = useModalContext();
  return (
    <section className="relative overflow-hidden pt-[112px] pb-[80px] md:pb-[112px] lg:pt-[180px] lg:pb-[60px] xl:pt-[236px] xl:pb-0 2xl:pb-15">
      <RevealAnimation delay={0.1} offset={50} instant>
        <figure className="absolute inset-0 h-full w-full min-[2550px]:!h-[calc(100%-1px)]">
          <Image src={heroBg} alt="hero bg banner" className="h-full w-full object-cover" />
        </figure>
      </RevealAnimation>
      {/* section overlay for md devices  */}
      <div className="absolute left-1/2 size-full w-[120%] -translate-x-1/2 bg-linear-to-t from-white from-58% to-transparent blur-[18px] md:hidden" />
      <div className="main-container">
        <div className="relative w-full space-y-10 md:space-y-0">
          {/* hero img */}
          <RevealAnimation delay={0.1} offset={50} instant>
            <figure className="lp:!max-w-[1290px] lp:!h-[925px] bg-accent/40 mx-auto w-full max-w-[900px] overflow-hidden rounded-[20px] p-2 md:h-[384px] lg:h-[580px] xl:max-w-[1140px]">
              <Image src={hero} alt="hero" className="rounded-[16px] object-cover" />
            </figure>
          </RevealAnimation>
          {/* hero content  */}
          <div className="lp:!max-w-[1290px] lp:!bottom-[90px] bottom-[-25%] z-1 mx-auto w-full max-w-[900px] md:absolute md:left-1/2 md:-translate-x-1/2 lg:bottom-[-9%] xl:bottom-[66px] xl:max-w-[1140px]">
            <div className="space-y-8 xl:space-y-10.5">
              {/* text + btn  */}
              <div className="space-y-7 xl:space-y-14">
                <div className="space-y-3 text-center md:text-left">
                  <RevealAnimation delay={0.2} offset={50} instant>
                    <h1>Your resume, perfected by AI</h1>
                  </RevealAnimation>

                  <RevealAnimation delay={0.3} offset={50} instant>
                    <p className="max-w-[400px] text-center text-[18px] leading-[150%] font-normal md:max-w-[612px] md:text-left">
                      NestSaaS helps you create tailored, keyword-rich resumes that pass ATS filters and impress
                      recruiters—fast, accurate, and stress-free.
                    </p>
                  </RevealAnimation>
                </div>
                {/* btns */}
                <ul className="flex flex-col items-center justify-start gap-x-4 gap-y-3 md:flex-row md:gap-y-0">
                  <RevealAnimation delay={0.4} direction="left" offset={50} instant>
                    <li className="w-[90%] list-none md:w-auto">
                      <LinkButton href="/login" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                        Get started
                      </LinkButton>
                    </li>
                  </RevealAnimation>

                  <RevealAnimation delay={0.5} direction="left" offset={50} instant>
                    <li className="group w-[90%] list-none md:w-auto" onClick={videoModal.openModal}>
                      <div
                        className="group-hover:bg-secondary border-stroke-7 text-secondary group-hover:text-accent text-tagline-1 mx-auto inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#EAECEB] px-6 py-2.5 text-center font-normal text-nowrap lowercase transition-all duration-500 ease-in-out group-hover:scale-101 md:mx-0 md:w-auto md:px-8 md:py-3.5"
                        aria-label="Watch a demo">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                          Watch a demo
                        </span>
                        <div className="relative size-6 overflow-hidden">
                          {/* one  */}
                          <span className="absolute inset-0 -translate-x-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                          {/* two  */}
                          <span className="absolute -translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                              <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                              <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                              <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                              <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                              <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                              <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                              <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                              <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                              <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
              {/* divider  */}
              <HeroDivider className="bg-stroke-1 hidden w-0 origin-center lg:block" />
              {/* review image  */}
              <div className="mr-0 ml-0 hidden w-full max-w-[676px] items-center justify-center gap-x-2 lg:flex xl:mr-0 xl:ml-auto">
                <RevealAnimation delay={0.4} direction="right" offset={100}>
                  <figure className="h-[89px] w-[142px] overflow-hidden rounded-full">
                    <Image src={avatar20} alt="hero-image" className="size-full object-cover" />
                  </figure>
                </RevealAnimation>
                <div className="flex items-center justify-center">
                  <RevealAnimation delay={0.5} direction="right" offset={100}>
                    <div className="space-y-2">
                      <blockquote className="text-secondary text-heading-6 font-inter-tight max-w-[352px] leading-[150%] font-normal">
                        “I landed 3 interviews within a week thanks to NextSaaS!”
                      </blockquote>
                      <span className="text-tagline-2 font-inter-tight text-secondary/60 inline-block font-normal">
                        – Sarah M.
                      </span>
                    </div>
                  </RevealAnimation>

                  <RevealAnimation delay={0.6} direction="right" offset={100}>
                    <div className="border-l-stroke-1 w-full max-w-[142px] space-y-2 border-l px-4 text-start">
                      <HeroRating />
                      <p className="font-inter-tight text-tagline-1 text-secondary w-[100px]">Rated 4.9/5 by users</p>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section overlay for md or upper   */}

      <HeroBottomOverlay />
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
