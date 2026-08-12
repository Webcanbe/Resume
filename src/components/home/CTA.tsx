import line1 from '@public/images/ns-img-336.svg';
import line2 from '@public/images/ns-img-337.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
const CTA = () => {
  return (
    <section className="py-16 lg:py-22 xl:py-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-12 relative z-0 mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden rounded-4xl px-5 py-28 text-center">
            <RevealAnimation delay={0.3} direction="left" offset={90} useSpring duration={2.4}>
              <figure className="pointer-events-none absolute -bottom-10 -left-[10%] select-none md:-left-[5%] lg:left-0">
                <Image src={line1} alt="cta image" className="pointer-events-none select-none max-sm:scale-75" />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="right" offset={90} useSpring duration={2.4}>
              <figure className="pointer-events-none absolute top-0 -right-[16%] select-none md:-right-[10%] lg:right-0">
                <Image src={line2} alt="cta image" className="pointer-events-none select-none max-sm:scale-75" />
              </figure>
            </RevealAnimation>

            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h2 className="text-center font-normal">Get noticed. get hired. get started.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  Create a resume that’s tailored, professional, and ready to
                  <br className="hidden lg:block" />
                  impress—powered by NestSaaS.
                </p>
              </RevealAnimation>
            </div>
            <ul className="mx-auto flex flex-col items-center justify-center gap-4 max-md:w-full md:mx-0 md:w-auto md:flex-row">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <div className="w-[90%] list-none sm:w-auto">
                  <LinkButton href="/login" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                    Get started now
                  </LinkButton>
                </div>
              </RevealAnimation>
            </ul>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
