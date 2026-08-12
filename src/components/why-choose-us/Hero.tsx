// why choose us hero

import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[170px] lg:pt-[140px] pt-[100px] xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <div className="space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="font-normal">
              Comprehensive compliance platform. <br className="max-md:hidden" />
              World class expertise.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Get compliant, mitigate risk, and use security as a differentiator – all with the support you need.</p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
