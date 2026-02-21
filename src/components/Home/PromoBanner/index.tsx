import React from "react";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-16 sm:py-20 bg-[#0f0f0f]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Main banner: red gradient, diagonal split feel */}
        <div
          className="relative z-1 overflow-hidden rounded-3xl mb-10"
          style={{
            background: "linear-gradient(120deg, #8B0000 0%, #B22222 35%, #DC143C 100%)",
            boxShadow: "0 25px 50px -12px rgba(255, 0, 0, 0.25)",
          }}
        >
          <div className="relative py-14 lg:py-20 xl:py-24 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-[520px] w-full relative z-10">
              <span className="inline-block font-semibold text-white/90 text-sm uppercase tracking-widest mb-3">
                Electronics, Books, Stationery & Fashion
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] text-white leading-tight mb-4">
                Up to 30% off — everything under ₹10,000
              </h2>
              <p className="text-white/80 text-base lg:text-lg mb-8 max-w-md">
                Smart gadgets, books, stationery, and apparel. Great quality, honest prices, delivered across India.
              </p>
              <Link
                href="/shop"
                className="inline-flex font-semibold text-custom-sm bg-white text-[#FF0000] py-3.5 px-8 rounded-xl shadow-lg transition-all duration-200 hover:bg-gray-100 hover:scale-[1.02]"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] shrink-0 lg:absolute lg:right-12 lg:bottom-0">
              <Image
                src="/images/HomePageImages/6.webp"
                alt="Promo"
                fill
                className="object-contain object-right-bottom drop-shadow-2xl"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 320px"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* Left: big typography focus */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-100 py-12 xl:py-16 px-8 sm:px-12 transition-all duration-300 hover:border-[#FF0000]/40 hover:shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div>
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#FF0000] leading-none">20%</span>
                <p className="text-dark font-semibold text-lg mt-2">Books & Stationery</p>
                <p className="text-dark-3 text-custom-sm mt-1">Office & study essentials — all under ₹10,000</p>
                <Link href="/shop" className="inline-flex font-semibold text-custom-sm text-white bg-[#FF0000] py-2.5 px-6 rounded-lg mt-4 transition-all duration-200 hover:bg-[#CC0000]">
                  Shop Now
                </Link>
              </div>
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0">
                <Image src="/images/HomePageImages/7.webp" alt="Books & Stationery" fill className="object-contain transition-transform duration-300 group-hover:scale-110" sizes="176px" />
              </div>
            </div>
          </div>

          {/* Right: stacked card with image emphasis */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 py-12 xl:py-16 px-8 sm:px-12 transition-all duration-300 hover:border-[#FF0000]/40 hover:shadow-xl">
            <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between gap-8">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 rounded-2xl overflow-hidden bg-white shadow-inner">
                <Image src="/images/HomePageImages/5.webp" alt="Fashion" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="192px" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF0000]">Fashion</span>
                <h2 className="font-bold text-xl lg:text-2xl text-dark mt-1 mb-2">
                  Up to <span className="text-[#FF0000]">40%</span> off
                </h2>
                <p className="text-dark-3 text-custom-sm mb-4 max-w-[220px]">Men, Women & Kids — quality fabric, great fits.</p>
                <Link href="/shop" className="inline-flex font-semibold text-custom-sm text-[#FF0000] border-2 border-[#FF0000] py-2.5 px-6 rounded-lg transition-all duration-200 hover:bg-[#FF0000] hover:text-white">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
