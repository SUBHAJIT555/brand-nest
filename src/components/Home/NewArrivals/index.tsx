import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import { Product } from "@/types/product";

interface NewArrivalProps {
  products: Product[];
}

const NewArrival = ({ products }: NewArrivalProps) => {
  return (
    <section className="overflow-hidden py-16 sm:py-20 bg-white relative">
      {/* Thick red vertical stripe on the right */}
      <div className="absolute top-0 right-0 w-2 sm:w-3 h-full" aria-hidden />
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FF0000] text-white text-xs font-semibold uppercase tracking-wide mb-3">
              This Week
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl xl:text-heading-4 text-dark leading-tight">
              New<br />Arrivals
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex font-medium text-custom-sm py-2.5 px-6 rounded-lg bg-dark text-white transition-all duration-200 hover:bg-[#FF0000] w-fit"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
          {products.map((item, key) => (
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
