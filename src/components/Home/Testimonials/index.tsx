"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import testimonialsData from "./testimonialsData";

import "swiper/css/navigation";
import "swiper/css";
import SingleItem from "./SingleItem";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden py-20 sm:py-24 bg-[#1a1a2e]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="swiper testimonial-carousel common-carousel">
          <div className="mb-12 text-center">
            <span className="text-5xl sm:text-6xl font-serif text-white/20 leading-none select-none">"</span>
            <h2 className="font-bold text-2xl sm:text-3xl xl:text-heading-4 text-white mt-2 mb-2">
              What Our Customers Say
            </h2>
            <p className="text-white/60 text-custom-sm">Real reviews from real shoppers</p>
          </div>

          <div className="flex items-center gap-2 justify-center mb-8">
            <button
              onClick={handlePrev}
              className="swiper-button-prev flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white border border-white/20 hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="swiper-button-next flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white border border-white/20 hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z" />
              </svg>
            </button>
          </div>

            <Swiper
              ref={sliderRef}
              className="testimonial-swiper-equal"
              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 2,
                  // spaceBetween: 4,
                },
                // when window width is >= 768px
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonialsData.map((item, key) => (
                <SwiperSlide key={key} className="h-full">
                  <SingleItem testimonial={item} />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
