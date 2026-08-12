'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import templateImg1 from '@public/images/ns-img-341.svg';
import templateImg2V2 from '@public/images/ns-img-342.svg';
import templateImg2V3 from '@public/images/ns-img-343.svg';
import templateImg2 from '@public/images/ns-img-344.svg';
import templateImg3V2 from '@public/images/ns-img-345.svg';
import templateImg3 from '@public/images/ns-img-346.svg';
import templateImg4V2 from '@public/images/ns-img-347.svg';
import templateImg4V3 from '@public/images/ns-img-348.svg';
import templateImg4 from '@public/images/ns-img-349.svg';
import templateImg5 from '@public/images/ns-img-350.png';
import templateImg6 from '@public/images/ns-img-351.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Templates = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section className="bg-background-3 overflow-hidden py-24 lg:py-32 xl:py-43.5" aria-labelledby="templates-heading">
      <div className="main-container">
        <div className="space-y-12 sm:space-y-16 lg:space-y-19">
          {/* Header Section */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-14">
            <div className="space-y-4 sm:space-y-6">
              <RevealAnimation delay={0.1}>
                <span
                  className="badge badge-gray-light-v2 mx-auto flex w-[150px] items-center justify-center font-normal lg:mx-0"
                  style={{ textTransform: 'capitalize' }}
                  aria-label="Section category">
                  Impressive templates
                </span>
              </RevealAnimation>
              <div className="space-y-3 sm:space-y-4">
                <RevealAnimation delay={0.2}>
                  <h2 id="templates-heading" className="mx-auto text-center lg:mx-0 lg:max-w-[818px] lg:text-left">
                    Professionally designed resume templates that get results
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto text-center lg:mx-0 lg:max-w-[450px] lg:text-left">
                    Choose from 15+ customizable, ATS-friendly templates that are elegant, readable, and
                    conversion-focused.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <div className="flex justify-center lg:justify-start">
                <div className="group w-[90%] sm:w-auto">
                  <LinkButton href="/services" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                    Get started now
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          </div>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-2" aria-label="Template feature cards">
            {/* Left Column */}
            <div className="space-y-4 lg:space-y-2">
              {/* Card 1: A4 and US Letter formats */}
              <RevealAnimation delay={0.2}>
                <div
                  className="group border-stroke-1 relative min-h-[420px] w-full rounded-[20px] border bg-white px-6 py-8 sm:h-[420px] sm:px-8 sm:py-10.5"
                  aria-labelledby="card1-heading">
                  <span
                    className="bg-ns-green flex size-12 items-center justify-center rounded-full sm:size-14"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={22}
                      viewBox="0 0 20 22"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-5 sm:w-5">
                      <path
                        d="M10.45 0.910156L4.16797 12.7283H9.55257V20.9102L15.8346 9.09196H10.45V0.910156Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <figure className="mx-auto w-full max-w-[300px] transition-all duration-500 ease-in-out group-hover:scale-105">
                    <Image
                      src={templateImg1}
                      alt="A4 and US Letter format resume template preview"
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="absolute bottom-[-9%] left-0 h-[229px] w-full blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  <div className="relative z-20 mt-28 space-y-1 sm:mt-0">
                    <h3 id="card1-heading" className="text-heading-5 text-[#0d0d12]/90">
                      A4 and US Letter formats
                    </h3>
                    <p className="max-w-[320px]">
                      A4 and US Letter formats are two of the most commonly used paper sizes
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 2: Customization */}
              <RevealAnimation delay={0.3} start="top 100%">
                <div
                  className="group border-stroke-1 relative min-h-[500px] w-full rounded-[20px] border bg-white px-6 py-8 sm:h-[750px] sm:px-8 sm:py-10.5"
                  aria-labelledby="card2-heading">
                  <span
                    className="bg-ns-green flex size-12 items-center justify-center rounded-full sm:size-14"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-5 sm:w-5">
                      <path
                        d="M5.34114 13.6987C5.60291 14.2347 5.92926 14.7346 6.31598 15.179M5.34114 13.6987C5.59731 14.2385 5.92609 14.7363 6.31598 15.179M5.34114 13.6987L4.84476 15.0994M5.34114 13.6987L6.82129 13.899M6.31598 15.179C6.70155 15.622 7.14708 16.0098 7.64841 16.3229M6.31598 15.179C6.70351 15.619 7.1514 16.0046 7.64841 16.3229M7.64841 16.3229C8.65247 16.9501 9.83978 17.2526 11.0198 17.2458C12.1998 17.239 13.3542 16.8968 14.3512 16.2582C15.3482 15.6196 16.1477 14.7103 16.6584 13.634M16.6584 13.634L17.1548 15.0347M16.6584 13.634L15.1783 13.8344M21 10.9102C21 16.433 16.5228 20.9102 11 20.9102C5.47716 20.9102 1 16.433 1 10.9102C1 5.38731 5.47716 0.910156 11 0.910156C16.5228 0.910156 21 5.38731 21 10.9102ZM9.49096 8.63757C9.49096 10.6324 8.95192 12.2495 8.28701 12.2495C7.62207 12.2495 7.08303 10.6324 7.08303 8.63757C7.08303 6.64281 7.62207 5.02569 8.28701 5.02569C8.95192 5.02569 9.49096 6.64281 9.49096 8.63757ZM14.9087 8.63757C14.9087 10.6324 14.3697 12.2495 13.7047 12.2495C13.0398 12.2495 12.5008 10.6324 12.5008 8.63757C12.5008 6.64278 13.0398 5.02569 13.7047 5.02569C14.3697 5.02569 14.9087 6.64278 14.9087 8.63757Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="relative h-[300px] w-full max-w-[549.58px] transition-all duration-500 ease-in-out group-hover:scale-105 sm:h-[412px]">
                    <figure className="border-stroke-1 absolute inset-0 left-1/2 mx-auto mt-8 h-[300px] w-full max-w-[272.5px] -translate-x-1/2 overflow-hidden rounded-xl border sm:mt-12 sm:h-[412px]">
                      <Image
                        src={templateImg2}
                        alt="Customizable resume template with multiple fonts, colors, and background styles"
                        className="object-cover"
                        loading="lazy"
                      />
                    </figure>
                    {/* right img  */}
                    <RevealAnimation delay={0.4} duration={2.5} direction="right" useSpring={true}>
                      <figure className="absolute top-[35%] right-[3%] w-full max-w-[251px] rotate-[-6deg] overflow-hidden rounded-[11px]">
                        <Image
                          src={templateImg2V2}
                          alt="Customizable resume template with multiple fonts, colors, and background styles"
                          className="object-cover"
                          loading="lazy"
                        />
                      </figure>
                    </RevealAnimation>
                    {/* left img  */}
                    <RevealAnimation delay={0.5} duration={2.5} direction="left" useSpring={true}>
                      <figure className="border-stroke-1 absolute top-1/2 left-[3%] z-[-1] w-full max-w-[251px] rotate-[12deg] overflow-hidden rounded-[11px] border">
                        <Image
                          src={templateImg2V3}
                          alt="Customizable resume template with multiple fonts, colors, and background styles"
                          className="object-cover"
                          loading="lazy"
                        />
                      </figure>
                    </RevealAnimation>
                  </div>
                  {/* overlay  */}
                  <div
                    className="absolute bottom-[5%] left-0 h-[229px] w-full blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  <div className="absolute bottom-[41px] z-20 mt-8 space-y-1 sm:mt-13.5">
                    <h3 id="card2-heading" className="text-heading-5 max-w-[250px] text-[#0d0d12]/90">
                      9 fonts, unlimited colors, 20+ background styles
                    </h3>
                    <p className="max-w-[350px]">Customize every detail to match your unique style.</p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 3: Smart Prompt suggestions */}
              <RevealAnimation delay={0.4}>
                <div
                  className="group border-stroke-1 relative min-h-[420px] w-full rounded-[20px] border bg-white px-6 py-8 sm:h-[420px] sm:px-8 sm:py-10.5"
                  aria-labelledby="card3-heading">
                  <span
                    className="bg-ns-green flex size-12 items-center justify-center rounded-full sm:size-14"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={22}
                      viewBox="0 0 20 22"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-5 sm:w-5">
                      <path
                        d="M10.45 0.910156L4.16797 12.7283H9.55257V20.9102L15.8346 9.09196H10.45V0.910156Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* img  */}
                  <div className="bg-secondary/5 mx-auto mt-2 mb-4 w-full max-w-[342px] overflow-hidden rounded-2xl p-2 transition-all duration-500 ease-in-out group-hover:scale-105 sm:mt-[5.5px] sm:mb-[17px]">
                    <figure className="border-stroke-1 w-full max-w-[327px] overflow-hidden rounded-xl border">
                      <Image
                        src={templateImg3V2}
                        alt="Smart prompt suggestions feature preview"
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  {/* overlay img  */}
                  <RevealAnimation delay={0.9} duration={1.5} direction="right" useSpring={true}>
                    <figure className="absolute top-[35%] right-[15%] w-[80px] sm:top-[37%] sm:right-[19%] sm:w-[102px]">
                      <Image
                        src={templateImg3}
                        alt="Smart prompt suggestions overlay preview"
                        className="object-cover"
                        loading="lazy"
                      />
                    </figure>
                  </RevealAnimation>
                  {/* overlay  */}
                  <div
                    className="absolute bottom-[2%] left-0 h-[229px] w-full blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  <div className="relative z-20 mt-6 space-y-1 sm:mt-8">
                    <h3 id="card3-heading" className="text-heading-5 text-[#0d0d12]/90">
                      Smart Prompt suggestions
                    </h3>
                    <p className="max-w-[320px]">
                      Access your files from any device with secure cloud synchronization.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            {/* Right Column */}
            <div className="space-y-4 lg:space-y-2">
              {/* Card 4: Adjustable spacing */}
              <RevealAnimation delay={0.2}>
                <div
                  ref={sceneRef as React.RefObject<HTMLDivElement>}
                  className="border-stroke-1 relative min-h-[500px] w-full rounded-[20px] border bg-white px-6 py-8 sm:h-[750px] sm:px-8 sm:py-10.5"
                  aria-labelledby="card4-heading">
                  {/* icon  */}
                  <span
                    className="bg-ns-green flex size-12 items-center justify-center rounded-full sm:size-14"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-5 sm:w-5">
                      <path
                        d="M20.7218 8.09907C19.6304 5.47075 17.0547 3.62421 14.0511 3.62421C10.059 3.62421 6.8228 6.88624 6.8228 10.9102C6.8228 14.9341 10.059 18.1961 14.0511 18.1961C17.0547 18.1961 19.6304 16.3496 20.7218 13.7212C19.5169 17.8756 15.7091 20.9102 11.1982 20.9102C5.71909 20.9102 1.27734 16.433 1.27734 10.9102C1.27734 5.38731 5.71909 0.910156 11.1982 0.910156C15.7091 0.910156 19.5169 3.94471 20.7218 8.09907Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* overlay img one  */}
                  <figure
                    className="parallax-effect absolute top-[28%] right-[15%] w-[60px] sm:top-[31%] sm:right-[20%] sm:w-[80px]"
                    data-parallax-value="0.1"
                    data-parallax-y={7}
                    data-parallax-x={4}
                    aria-hidden="true">
                    <Image
                      src={templateImg4V2}
                      alt="Decorative overlay element"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay img two  */}
                  <figure
                    className="parallax-effect absolute top-[40%] left-[5%] w-[150px] sm:top-[44%] sm:left-[8%] sm:w-[192px]"
                    data-parallax-value="-0.1"
                    data-parallax-y={7}
                    data-parallax-x={4}
                    aria-hidden="true">
                    <Image
                      src={templateImg4V3}
                      alt="Decorative overlay element"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* img  */}
                  <figure className="border-stroke-1 mx-auto mt-8 h-[350px] w-full max-w-[350px] overflow-hidden rounded-[10px] border px-3 py-4 sm:mt-[43px] sm:h-[450px] sm:max-w-[390px] sm:px-4 sm:py-6">
                    <Image
                      src={templateImg4}
                      alt="Resume template with adjustable spacing, margins, and line height customization"
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="absolute bottom-[-10%] left-0 h-[229px] w-full blur-[37px] sm:bottom-[5%]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  {/* text  */}
                  <div className="absolute bottom-8 left-6 z-20 space-y-1 sm:bottom-10.5 sm:left-8">
                    <h3 id="card4-heading" className="text-heading-5 max-w-[300px] text-[#0d0d12]/90">
                      Adjustable spacing, margins, and line height.
                    </h3>
                    <p className="max-w-[250px]">Customize your resume look with diverse, modern backgrounds.</p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 5: PDF and TXT downloads */}
              <RevealAnimation delay={0.3} start="top 100%">
                <div
                  className="group border-stroke-1 relative min-h-[420px] w-full rounded-[20px] border bg-white px-6 py-8 sm:h-[420px] sm:px-8 sm:py-10.5"
                  aria-labelledby="card5-heading">
                  {/* icon  */}
                  <span
                    className="bg-ns-green relative flex size-12 items-center justify-center rounded-full sm:size-14"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-5 sm:w-5">
                      <path
                        d="M18.3346 10.9095C18.3346 15.5119 14.6037 19.2428 10.0013 19.2428M18.3346 10.9095C18.3346 6.30713 14.6037 2.57617 10.0013 2.57617M18.3346 10.9095H1.66797M10.0013 19.2428C5.39893 19.2428 1.66797 15.5119 1.66797 10.9095M10.0013 19.2428V2.57617M10.0013 19.2428C12.2367 19.2428 14.3823 15.5119 14.3823 10.9095C14.3823 6.30713 12.2367 2.57617 10.0013 2.57617M10.0013 19.2428C7.76586 19.2428 5.62035 15.5119 5.62035 10.9095C5.62035 6.30713 7.76586 2.57617 10.0013 2.57617M1.66797 10.9095C1.66797 6.30713 5.39893 2.57617 10.0013 2.57617"
                        stroke="#1A1A1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* img  */}
                  <figure className="absolute top-[60px] left-1/2 w-[200px] -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:scale-105 sm:top-[70px] sm:w-[240px]">
                    <Image
                      src={templateImg5}
                      alt="PDF and TXT download feature preview"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="absolute bottom-[-7%] left-0 h-[229px] w-full blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  {/* text  */}
                  <div className="absolute bottom-8 left-6 z-20 space-y-1 sm:bottom-10.5 sm:left-8">
                    <h3 id="card5-heading" className="text-heading-5 max-w-[300px] text-[#0d0d12]/90">
                      PDF and TXT downloads.
                    </h3>
                    <p className="max-w-[200px]">Download your content as PDF or TXT in one click.</p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 6: Template categories */}
              <RevealAnimation delay={0.4} start="top 100%">
                <div
                  className="group border-stroke-1 relative min-h-[420px] w-full rounded-[20px] border bg-white px-6 py-8 sm:h-[420px] sm:px-8 sm:py-10.5"
                  aria-labelledby="card6-heading">
                  {/* icon  */}
                  <span
                    className="bg-ns-green flex size-12 items-center justify-center rounded-full sm:size-14"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-5 sm:w-5">
                      <path
                        d="M6.3798 6.28995C5.14908 5.05924 5.14908 3.06389 6.3798 1.83318C7.61051 0.60248 9.60589 0.60248 10.8366 1.83318L11 1.9966M6.3798 6.28995C5.14908 5.05924 3.15373 5.05924 1.92303 6.28995C0.692324 7.52067 0.692324 9.51605 1.92303 10.7467L2.08644 10.9102M6.3798 6.28995L11 10.9102M11 1.9966L11.1634 1.83318C12.3941 0.60248 14.3895 0.60248 15.6202 1.83318C16.8509 3.06389 16.8509 5.05924 15.6202 6.28995M11 1.9966V19.8237M2.08644 10.9102L1.92303 11.0736C0.692324 12.3043 0.692324 14.2996 1.92303 15.5303C3.15373 16.7611 5.14908 16.7611 6.3798 15.5303M2.08644 10.9102H19.9135M11 10.9102L15.6202 6.28995M11 10.9102L6.3798 15.5303M11 10.9102L15.6202 15.5303M15.6202 6.28995C16.8509 5.05924 18.8462 5.05924 20.077 6.28995C21.3077 7.52067 21.3077 9.51605 20.077 10.7467L19.9135 10.9102M6.3798 15.5303C5.14908 16.7611 5.14908 18.7564 6.3798 19.9871C7.61051 21.2178 9.60589 21.2178 10.8366 19.9871L11 19.8237M15.6202 15.5303C16.8509 16.7611 18.8462 16.7611 20.077 15.5303C21.3077 14.2996 21.3077 12.3043 20.077 11.0736L19.9135 10.9102M15.6202 15.5303C16.8509 16.7611 16.8509 18.7564 15.6202 19.9871C14.3895 21.2178 12.3941 21.2178 11.1634 19.9871L11 19.8237"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* img  */}
                  <figure className="absolute top-[70px] left-1/2 w-[200px] -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:scale-105 sm:top-[80px] sm:w-[239px]">
                    <Image
                      src={templateImg6}
                      alt="Template categories feature preview"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="absolute bottom-[-10%] left-0 h-[250px] w-full blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  {/* text  */}
                  <div className="absolute bottom-8 left-6 z-20 space-y-1 sm:bottom-10.5 sm:left-8">
                    <h3 id="card6-heading" className="text-heading-5 max-w-[300px] text-[#0d0d12]/90">
                      Template categories
                    </h3>
                    <p className="max-w-[320px]">
                      Deliver a seamless experience across every screen no extra effort required.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Templates.displayName = 'Templates';
export default Templates;
