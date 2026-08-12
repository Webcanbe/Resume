import avatar from '@public/images/ns-avatar-6.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Comment = () => {
  return (
    <RevealAnimation delay={0.2}>
      <article className="mx-auto mt-10 max-w-[850px] md:mt-[72px]">
        <div className="mb-[70px] space-y-4">
          <h5 className="text-heading-4">Comments</h5>
          <div className="flex items-center gap-3">
            <figure className="size-14 overflow-hidden rounded-2xl bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%]">
              <Image
                src={avatar}
                className="object-cover object-center"
                alt="Esther Howard's avatar"
                width={56}
                height={56}
                loading="lazy"
              />
            </figure>
            <div>
              <h3 className="text-tagline-1 font-medium">Esther Howard</h3>
              <time
                dateTime="2024-04-17"
                className="text-tagline-2 text-secondary/60 dark:text-accent/60 flex items-center gap-2 font-normal">
                Apr 17, 2024
              </time>
            </div>
          </div>
          <p>
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
            though it looks like nothing.
          </p>
          <h6 className="text-tagline-1">Reply</h6>
        </div>
        <div className="dark:bg-background-8 max-w-[850px] rounded-[20px] bg-white px-4 py-6 md:w-full md:p-6 lg:p-[42px]">
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
                className="placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:text-accent border-stroke-3 dark:border-stroke-6 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
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
                className="placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:text-accent border-stroke-3 dark:border-stroke-6 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
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
                className="placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:text-accent border-stroke-3 dark:border-stroke-6 focus-visible:outline-primary-500 min-h-[120px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                aria-required="true"
                defaultValue={''}
              />
            </fieldset>
            {/* terms and conditions checkbox */}
            <fieldset className="mb-4 flex items-center gap-2">
              <label htmlFor="agree-terms" className="flex cursor-pointer items-center gap-x-3">
                <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">
                  I agree with the{' '}
                  <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                    terms and conditions
                  </Link>
                </span>
              </label>
            </fieldset>
            {/* submit button */}
            <button
              type="submit"
              className="btn btn-secondary dark:btn-accent btn-md hover:btn-primary w-full first-letter:uppercase before:content-none"
              aria-label="Submit contact form">
              Submit
            </button>
          </form>
        </div>
      </article>
    </RevealAnimation>
  );
};

export default Comment;
