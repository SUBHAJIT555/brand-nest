import React from "react";
import SingleItem from "./SingleItem";
import Link from "next/link";
import { Product } from "@/types/product";

interface BestSellerProps {
  products: Product[];
}

const BestSeller = ({ products }: BestSellerProps) => {
  return (
    <section className="overflow-hidden py-16 sm:py-20 bg-[#F3F4F6]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF0000] text-white">
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L12.09 7.26L17 7.86L13 11.77L14.18 17.02L10 14.77L5.82 17.02L7 11.77L3 7.86L7.91 7.26L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FF0000]">This Month</p>
              <h2 className="font-bold text-xl xl:text-heading-5 text-dark mt-0.5">
                Best Sellers
              </h2>
            </div>
          </div>
          <Link
            href="/shop"
            className="inline-flex font-medium text-custom-sm py-2.5 px-6 rounded-lg bg-white border-2 border-gray-200 text-dark hover:border-[#FF0000] hover:text-[#FF0000] transition-all duration-200"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
