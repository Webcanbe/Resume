{
  /* =========================
Contact section
===========================*/
}
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[650px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Contact</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Let us know how we can assist you</h2>
            </RevealAnimation>
          </div>
        </div>
        {/* contact form  */}
        <RevealAnimation delay={0.4}>
          <div className="dark:bg-background-8 mx-auto max-w-[850px] rounded-[20px] bg-white p-6 md:w-full lg:p-[42px]">
            <form action="#" method="post">
              {/* name field  */}
              <fieldset className="mb-8 flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="Enter your name"
                  className="dark:text-accent placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:bg-background-6 border-stroke-3 dark:border-stroke-7 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                  aria-required="true"
                />
              </fieldset>
              {/* email field  */}
              <fieldset className="mb-8 flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Enter your email"
                  className="dark:text-accent placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:bg-background-6 border-stroke-3 dark:border-stroke-7 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                  aria-required="true"
                />
              </fieldset>
              {/* message field  */}
              <fieldset className="mb-4 flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Message
                </label>
                <textarea
                  name="messages"
                  id="messages"
                  required
                  placeholder="Enter your message"
                  className="placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:bg-background-6 border-stroke-3 dark:border-stroke-7 focus-visible:outline-primary-500 dark:text-accent min-h-[120px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                  aria-required="true"
                  defaultValue={''}
                />
              </fieldset>
              {/* terms and conditions checkbox */}
              <fieldset className="mb-4 flex items-center gap-2">
                <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                  <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                  <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                </label>
                <label
                  htmlFor="agree-terms"
                  className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                  I agree with the{' '}
                  <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                    terms and conditions
                  </Link>
                </label>
              </fieldset>
              {/* submit button */}
              <button
                type="submit"
                className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md w-full first-letter:uppercase before:content-none"
                aria-label="Submit contact form">
                Submit
              </button>
            </form>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Contact;
