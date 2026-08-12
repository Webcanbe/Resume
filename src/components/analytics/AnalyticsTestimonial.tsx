import avatar5 from '@public/images/ns-avatar-5.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const AnalyticsTestimonial = () => {
  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="mx-auto flex w-[95%] max-w-[950px] flex-col space-y-14">
        <div className="space-y-3">
          <RevealAnimation delay={0.1}>
            <h2>What our users say</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/60">
              “Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership.”
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.2}>
          <div className="bg-secondary dark:bg-background-8 flex flex-col space-y-6 rounded-[20px] p-8">
            <RevealAnimation delay={0.2}>
              <figure>
                <Image
                  src={avatar5}
                  alt="author"
                  className="inline-block size-14 rounded-full bg-linear-[156deg,#ffffff_0%,#83E7EE_100%]"
                />
              </figure>
            </RevealAnimation>
            <div>
              <p className="dark:text-accent/60 text-white">
                “Workflow Automation helped us eliminate hours of manual work each week. Now, our ops team can focus on
                strategic initiatives instead of button-clicking.”
              </p>
            </div>
            <div>
              <p className="text-lg leading-[150%] font-medium text-white">John Smith</p>
              <p className="text-accent/60 text-tagline-2">Lorem ipsum</p>
            </div>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <div className="w-fit">
            <LinkButton href="/testimonial" btnClass="btn-xl-v2 btn-primary-v2 group-hover/btn-v2:btn-secondary-v2">
              Get started
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

AnalyticsTestimonial.displayName = 'AnalyticsTestimonial';
export default AnalyticsTestimonial;
