import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[200px] pt-[140px] xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h1 className="font-normal text-center">Security and compliance at NextSaaS</h1>
        </RevealAnimation>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
