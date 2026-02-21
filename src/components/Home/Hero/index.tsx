import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Dark hero: red-tinted gradient, diagonal feel */}
      <div
        className="relative pt-60 sm:pt-54 lg:pt-60 pb-16 sm:pb-20 lg:pb-24"
        style={{
          background:
            "linear-gradient(145deg, #1a0a0a 0%, #2d1515 40%, #1a0a0a 100%)",
          backgroundImage: `
            linear-gradient(145deg, #1a0a0a 0%, #2d1515 40%, #1a0a0a 100%),
            radial-gradient(ellipse 90% 60% at 80% 10%, rgba(255, 0, 0, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 10% 90%, rgba(255, 80, 80, 0.12) 0%, transparent 50%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")" }} />
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative z-1">
          <div className="rounded-3xl overflow-hidden  ">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Feature strip: single dark bar, icons in a row with dividers */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
