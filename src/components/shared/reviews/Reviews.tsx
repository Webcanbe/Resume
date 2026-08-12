'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import reviews from '@/data/json/testimonials/testimonials.json';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientOverlay from './GradientOverlay';

const GRADIENTS = [
  'bg-linear-[156deg,_#FFF_32.92%,_#FFB9A2_91%]',
  'bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%]',
  'bg-linear-[156deg,_#FFF_32.92%,_#C6F56F_91%]',
  'bg-linear-[156deg,_#FFF_32.92%,_#FFD6A5_91%]',
];
const pickGradient = (i: number) => GRADIENTS[i % GRADIENTS.length];

type Review = {
  id?: string | number;
  name: string;
  title?: string;
  quote: string;
  avatar?: string;
  position?: string;
};

const Reviews = () => {
  return (
    <section className="py-16 md:py-[90px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge-cyan badge mb-5">Customer Success</span>
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <h2>Real people. Real results.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[472px] md:w-full">
                “Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership.”
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                navigation={false}
                pagination={false}
                scrollbar={false}
                className="swiper reviews-swiper">
                <div className="swiper-wrapper">
                  {reviews.map((review: Review, i: number) => {
                    const figureBg = pickGradient(i);

                    return (
                      <SwiperSlide className="swiper-slide" key={review.id ?? `${review.name}-${i}`}>
                        <div className="dark:bg-background-6 relative z-0 flex flex-col gap-y-8 overflow-hidden rounded-[20px] bg-white p-8">
                          {/* Gradient overlay for active slide */}
                          <GradientOverlay />

                          <figure className={`inline-block size-14 rounded-full ${figureBg} relative overflow-hidden`}>
                            <Image
                              src={review.avatar ?? 'images-v2/avatar-1.png'}
                              alt={review.name ?? 'avatar'}
                              className="max-w-full"
                              width={56}
                              height={56}
                            />
                          </figure>

                          <p className="text-secondary/60 dark:text-accent/60 review-text line-clamp-2">{`"${review.quote}"`}</p>

                          <div>
                            <p className="text-secondary dark:text-accent review-name text-lg leading-[1.5] font-medium">
                              {review.name}
                            </p>
                            {review.position && (
                              <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                                {review.position}
                              </p>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-10 text-center lg:mt-14">
            <LinkButton
              href="/testimonial"
              btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-md-v2 w-full ">
              View all reviews
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
