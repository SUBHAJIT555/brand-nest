import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#FAF9F7] text-dark-2 border-t border-gray-200">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-16 xl:justify-between pt-14 xl:pt-20 pb-12 xl:pb-16">
          {/* Brand */}
          <div className="max-w-[300px] w-full">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo/logo.svg"
                alt={siteConfig.brand.name}
                width={180}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-dark-3 text-sm leading-relaxed mb-5">
              {siteConfig.brand.name} is India&apos;s trusted store for electronics, books, stationery, and garments
              all under ₹10,000. Honest prices, fast delivery, and support made for Indian shoppers.
            </p>
            <div className="h-1 w-10 rounded-full bg-[#FF0000]" aria-hidden />
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-auto">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF0000]">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/cart">
                  Cart
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/faqs">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full sm:w-auto">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF0000]">
              Legal
            </h2>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/cookie-policy">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/terms-of-use">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="text-dark-2 hover:text-[#FF0000] transition-colors duration-200 text-sm" href="/refund-policy">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-auto">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF0000] lg:text-right">
              Contact
            </h2>
            <div className="flex flex-col gap-3 lg:text-right">
              <p className="text-dark-3 text-sm leading-relaxed">
                {siteConfig.brand.address.street}<br />
                {siteConfig.brand.address.city}, {siteConfig.brand.address.state} {siteConfig.brand.address.zip}
              </p>
              <div className="flex items-center gap-2.5 lg:justify-end">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FF0000]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF0000]">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                  </svg>
                </span>
                <span className="text-dark-2 text-sm">{siteConfig.brand.address.location}</span>
              </div>
              <div className="flex items-center gap-2.5 lg:justify-end">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FF0000]/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF0000]">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM7.7609 4.34237C7.24855 3.61773 6.32812 3.57449 5.80528 4.12493L4.23568 5.77743C3.90429 6.12632 3.73042 6.52621 3.75185 6.92552C3.83289 8.43533 4.48307 11.8776 8.35919 15.9584C12.4234 20.2373 16.1676 20.3581 17.6026 20.2165C17.8864 20.1885 18.1783 20.031 18.4574 19.7373L19.8779 18.2417C20.4907 17.5965 20.3301 16.4342 19.5092 15.9618L17.5987 14.8621C17.086 14.567 16.4854 14.6582 16.1 15.064L15.6445 15.5435L15.1174 15.0428C15.6445 15.5435 15.6438 15.5442 15.6432 15.545L15.6417 15.5464L15.6388 15.5495L15.6324 15.556L15.6181 15.5701C15.6078 15.5801 15.5959 15.591 15.5825 15.6028C15.5556 15.6264 15.5223 15.6533 15.4824 15.6816C15.4022 15.7384 15.2955 15.8009 15.1606 15.8541C14.8846 15.963 14.5201 16.0214 14.0699 15.9483C13.1923 15.8058 12.0422 15.1755 10.5194 13.5722C8.99202 11.9642 8.40746 10.7645 8.27675 9.87234C8.21022 9.41827 8.26346 9.05468 8.36116 8.78011C8.40921 8.64508 8.46594 8.53742 8.51826 8.45566C8.54435 8.41489 8.56922 8.38075 8.5912 8.35298C8.60219 8.33909 8.61246 8.32678 8.62182 8.31603L8.63514 8.30104L8.64125 8.29441L8.64415 8.2913L8.64556 8.2898C8.64625 8.28907 8.64694 8.28835 9.17861 8.79333L8.64695 8.28834L8.93376 7.98637C9.3793 7.51731 9.44403 6.72292 9.02189 6.12586L7.7609 4.34237Z" fill="currentColor" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-dark-2 text-sm font-medium">{siteConfig.brand.phone}</span>
                  {siteConfig.brand.businessHours && (
                    <span className="text-dark-4 text-xs">{siteConfig.brand.businessHours}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 xl:py-6 border-t border-gray-200 bg-white/60">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-6 flex-wrap items-center justify-between">
            <p className="text-dark-4 text-sm">
              &copy; {year} {siteConfig.brand.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-dark-4 text-sm font-medium">We accept:</p>
              <div className="flex flex-wrap items-center gap-4 opacity-70">
                <span className="cursor-pointer" aria-label="Visa">
                  <Image src="/images/payment/payment-01.svg" alt="Visa" width={48} height={16} className="h-4 w-auto" />
                </span>
                <span className="cursor-pointer" aria-label="PayPal">
                  <Image src="/images/payment/payment-02.svg" alt="PayPal" width={18} height={21} className="h-5 w-auto" />
                </span>
                <span className="cursor-pointer" aria-label="Mastercard">
                  <Image src="/images/payment/payment-03.svg" alt="Mastercard" width={33} height={24} className="h-5 w-auto" />
                </span>
                <span className="cursor-pointer" aria-label="Apple Pay">
                  <Image src="/images/payment/payment-04.svg" alt="Apple Pay" width={53} height={22} className="h-5 w-auto" />
                </span>
                <span className="cursor-pointer" aria-label="Google Pay">
                  <Image src="/images/payment/payment-05.svg" alt="Google Pay" width={56} height={22} className="h-5 w-auto" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
