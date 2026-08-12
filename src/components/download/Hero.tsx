import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[170px] pt-[140px] xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <RevealAnimation delay={0.1} instant>
          <h1 className="text-center font-normal">Download Page</h1>
        </RevealAnimation>
      </div>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
