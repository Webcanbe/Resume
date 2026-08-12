import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import StepCard, { StepCardProps } from './StepCard';
import StepDirection from './StepDirection';

const HowItWorks = () => {
  const stepCardData: StepCardProps[] = [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Sign up',
      description: 'Get started for free in just a few seconds!',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Import or start fresh',
      description: 'Upload your resume or paste your LinkedIn profile.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Paste the job details',
      description: 'Let AI help you jazz up your resume!',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Apply & track',
      description: 'Submit applications and track your progress all in one place.',
    },
  ];

  return (
    <section
      className="pt-16 pb-12 md:pb-16 lg:pt-22 lg:pb-22 xl:pt-39 xl:pb-28"
      aria-labelledby="how-it-works-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 id="how-it-works-heading" itemProp="name">
                How it works
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-[#323A44]" itemProp="description">
                Step-by-step Flow
              </p>
            </RevealAnimation>
          </div>
          {/* cards  */}
          <div
            className="relative flex items-center justify-center gap-x-3 gap-y-6 max-xl:flex-wrap"
            aria-label="Step-by-step process to use NextSaaS">
            {/* card one  */}
            {stepCardData.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left">
                <StepCard key={step.id} {...step} className={cn(index % 2 === 0 ? 'bg-background-3' : 'bg-ns-green')} />
              </RevealAnimation>
            ))}

            {/* -> line 1  */}
            <RevealAnimation delay={0.6} direction="left">
              <StepDirection className="left-[23.5%] md:block" />
            </RevealAnimation>
            {/* -> line 2  */}
            <RevealAnimation delay={0.4} direction="left">
              <StepDirection className="left-1/2 -translate-x-1/2 lg:block" />
            </RevealAnimation>
            {/* -> line 3  */}
            <RevealAnimation delay={0.8} direction="left">
              <StepDirection className="right-[23.5%] md:block" />
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.1}>
          <div className="mt-14 flex items-center justify-center text-center">
            <div className="w-[90%] sm:w-auto">
              <LinkButton href="/signup" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                Get started now
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

HowItWorks.displayName = 'HowItWorks';
export default HowItWorks;
