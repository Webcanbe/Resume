import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <section className="xl:py-[140px] lg:py-[100px] py-14">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="py-6 bg-secondary dark:bg-background-6 rounded-2xl px-5">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center flex-col gap-6 flex-1/3 py-[22px]">
                <div className="px-14.5 py-3.5 bg-ns-green rounded-full w-fit">
                  <p className="text-heading-4 lg:text-heading-3 text-secondary flex items-center">
                    <NumberAnimation number={200} speed={2000} interval={100} rooms={3} />
                    <span>+</span>
                  </p>
                </div>
                <p className="text-white text-heading-6 text-center">Integrations</p>
              </div>
              <div className="flex items-center justify-center flex-col gap-6 flex-1/3 py-[22px]">
                <div className="px-14.5 py-3.5 bg-ns-green rounded-full w-fit">
                  <p className="text-heading-4 lg:text-heading-3 text-secondary flex items-center">
                    <NumberAnimation number={30} speed={2000} interval={100} rooms={2} />
                    <span>+</span>
                  </p>
                </div>
                <p className="text-white text-heading-6 text-center">Compliance experts and former auditors</p>
              </div>
              <div className="flex items-center justify-center flex-col gap-6 flex-1/3 py-[22px]">
                <div className="px-14.5 py-3.5 bg-ns-green rounded-full w-fit">
                  <p className="text-heading-4 lg:text-heading-3 text-secondary flex items-center">
                    <NumberAnimation number={79} speed={2000} interval={100} rooms={2} />
                    <span>M</span>
                  </p>
                </div>
                <p className="text-white text-heading-6 text-center">In funding</p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Counter.displayName = 'Counter';
export default Counter;
