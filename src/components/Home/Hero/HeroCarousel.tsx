"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex-col-reverse sm:flex-row gap-8 sm:gap-0">
          <div className="flex-1 min-w-0 py-10 sm:py-12 lg:py-16 pl-6 sm:pl-10 lg:pl-14 pr-6 sm:pr-8">
            <div className="flex items-baseline gap-3 mb-5 sm:mb-6">
              <span className="font-bold text-4xl sm:text-5xl lg:text-6xl text-indigo-300 tracking-tight">
                Under
              </span>
              <span className="font-semibold text-xl sm:text-2xl text-white/90">
                ₹10,000
                <br />
                <span className="text-lg sm:text-xl font-medium text-white/70">Store</span>
              </span>
            </div>
            <h1 className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight">
              Electronics, Stationery, Books & Garments
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-md mb-8">
              Everything you need—gadgets, study supplies, books and fashion—all under ₹10,000. Quality products at great prices for India.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center font-medium text-indigo-600 bg-white text-custom-sm rounded-full py-3.5 px-8 shadow-lg transition-all duration-200 hover:bg-indigo-50 hover:scale-[1.02]"
            >
              Go To Shop
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-end w-full min-h-[240px] sm:min-h-0 pr-6 sm:pr-10 lg:pr-14 py-6 sm:py-0">
            <div className="relative w-full max-w-[320px] lg:max-w-[420px] h-[240px] sm:h-[320px] lg:h-[360px]">
              <Image
                src="/images/HomePageImages/1.webp"
                alt="headphone"
                fill
                className="object-contain object-center drop-shadow-2xl"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 420px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex-col-reverse sm:flex-row gap-8 sm:gap-0">
          <div className="flex-1 min-w-0 py-10 sm:py-12 lg:py-16 pl-6 sm:pl-10 lg:pl-14 pr-6 sm:pr-8">
            <div className="flex items-baseline gap-3 mb-5 sm:mb-6">
              <span className="font-bold text-4xl sm:text-5xl lg:text-6xl text-indigo-300 tracking-tight">
                30%
              </span>
              <span className="font-semibold text-xl sm:text-2xl text-white/90">
                Sale
                <br />
                <span className="text-lg sm:text-xl font-medium text-white/70">Off</span>
              </span>
            </div>
            <h1 className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight">
              Electronics, Books, Stationery & More
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-md mb-8">
              Shop electronics, stationery, books, garments and more—all under ₹10,000. Best deals for the Indian market.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center font-medium text-indigo-600 bg-white text-custom-sm rounded-full py-3.5 px-8 shadow-lg transition-all duration-200 hover:bg-indigo-50 hover:scale-[1.02]"
            >
              Go To Shop
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-end w-full min-h-[240px] sm:min-h-0 pr-6 sm:pr-10 lg:pr-14 py-6 sm:py-0">
            <div className="relative w-full max-w-[320px] lg:max-w-[420px] h-[240px] sm:h-[320px] lg:h-[360px]">
              <Image
                src="/images/HomePageImages/2.webp"
                alt="Shopping bag"
                fill
                className="object-contain object-center drop-shadow-2xl"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 420px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
