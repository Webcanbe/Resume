//Customer Hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32" aria-label="customer hero section">
      <div className="main-container">
        {/* Hero content */}
        <div className="text-center space-y-4 pb-20 lg:pb-28">
          <RevealAnimation delay={0.1}>
            <h1 className="font-normal lg:text-heading-2">Customer stories</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/60 dark:text-accent/60 lg:max-w-[518px] lg:mx-auto">
              Discover case studies on how Supabase is being used around the world to quickly create outstanding
              products and set new industry standards.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
