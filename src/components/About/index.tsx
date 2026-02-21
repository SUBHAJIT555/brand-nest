import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const About = () => {
  const values = [
    "Built for real needs—products and service designed for our customers",
    "Quality and value—curated range, all under ₹10,000",
    "Transparency and trust—clear pricing, no hidden charges",
    "Reliable delivery and easy returns across India",
  ];

  const whyUs = [
    {
      title: "Quality Guaranteed",
      text: "Every product is curated for you—electronics, stationery, books, and garments that meet our quality standards.",
    },
    {
      title: "Easy Returns",
      text: "Shop with confidence—our 7-day return policy and simple process are designed for your peace of mind.",
    },
    {
      title: "Delivery Across India",
      text: "We ship nationwide. Free delivery on orders above ₹499 so you get more value with every order.",
    },
    {
      title: "Secure Payments",
      text: "Pay safely with UPI, cards, and other methods. Your payment data is protected with secure encryption.",
    },
    {
      title: "Customer Support",
      text: "Our support team is here to help. Reach out anytime for orders, returns, or any questions.",
    },
    {
      title: "Honest Prices, Under ₹10,000",
      text: "Everything we sell is under ₹10,000. No inflated prices—just fair value for every customer.",
    },
  ];

  return (
    <>
      <Breadcrumb title={"About Us"} pages={["About Us"]} />

      {/* Hero: full-bleed dark, editorial */}
      <section className="relative overflow-hidden bg-[#0d0d0d] text-white py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 relative z-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF0000] mb-6">Who we are</p>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-6">
            We’re here to make everyday shopping simple.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.brand.name} is your trusted store for electronics, stationery, books, and garments—all under ₹10,000. Quality, honest pricing, reliable service.
          </p>
        </div>
      </section>

      {/* Story: split layout, no cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="inline-block text-[#FF0000] font-bold text-7xl sm:text-8xl lg:text-9xl leading-none mb-4">01</span>
              <h2 className="font-bold text-2xl sm:text-3xl text-dark mb-2">Our Story</h2>
              <p className="text-dark-3 text-lg">
                How we started and why we do what we do.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-dark-3 text-base sm:text-lg leading-relaxed">
              <p>
                {siteConfig.brand.name} started with a simple idea: a one-stop shop for everyday needs—electronics, stationery, books, and fashion—at honest prices under ₹10,000. We built our catalog and service around what Indian customers want: quality products, clear pricing, and a team that puts customers first.
              </p>
              <p>
                We partner with trusted suppliers to offer mobile accessories, smart gadgets, computer and home electronics, books, stationery, and apparel for the whole family. Every item is selected with Indian homes and budgets in mind, so you get real value without compromise.
              </p>
              <p>
                {siteConfig.brand.name} is built for India: reliable delivery nationwide, straightforward returns, secure payments including UPI and cards, and support when you need it. We&apos;re here to serve you, one order at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Values: single strip, bold */}
      <section className="py-16 sm:py-24 bg-[#FAF9F7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-[#FF0000] font-bold text-5xl sm:text-6xl leading-none block mb-4">Mission</span>
              <p className="text-dark text-lg sm:text-xl leading-relaxed">
                To be your trusted everyday store—offering quality electronics, stationery, books, and garments under ₹10,000, with honest pricing, safe payments, and service that puts customers first.
              </p>
            </div>
            <div>
              <span className="text-dark font-bold text-2xl sm:text-3xl block mb-6">What we stand for</span>
              <ul className="space-y-4">
                {values.map((line, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF0000] mt-0.5" aria-hidden />
                    <span className="text-dark-2 text-base sm:text-lg">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose: bento-style grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#FF0000] font-semibold text-sm uppercase tracking-widest mb-2">Why us</p>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-dark">
              Why choose {siteConfig.brand.name}?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="group p-6 sm:p-8 rounded-2xl border-2 border-gray-100 bg-white hover:border-[#FF0000]/30 hover:bg-[#FF0000]/[0.02] transition-all duration-300"
              >
                <span className="inline-block text-3xl sm:text-4xl font-black text-gray-200 group-hover:text-[#FF0000]/20 mb-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-dark-3 text-sm sm:text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact: single CTA strip */}
      <section className="py-16 sm:py-24 bg-[#0d0d0d] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 text-center">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">Get in touch</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
            We&apos;d love to hear from you. The {siteConfig.brand.name} team is here to help—reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            <a
              href={`mailto:${siteConfig.brand.email.general}`}
              className="text-white font-semibold hover:text-[#FF0000] transition-colors text-lg"
            >
              {siteConfig.brand.email.general}
            </a>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/50" aria-hidden />
            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s/g, "")}`}
              className="text-white font-semibold hover:text-[#FF0000] transition-colors text-lg"
            >
              {siteConfig.brand.phone}
            </a>
          </div>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            {siteConfig.brand.address.full} · {siteConfig.brand.businessHours}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-semibold text-white bg-[#FF0000] py-3.5 px-8 rounded-xl hover:bg-[#CC0000] transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
