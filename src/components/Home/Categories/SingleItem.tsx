import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <Link href={`/shop?category=${item.slug}`} className="group flex flex-col items-center">
      <div className="max-w-[130px] w-full h-32.5 rounded-2xl flex items-center justify-center mb-4 bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-[#FF0000]/30 transition-all duration-300 my-4 relative overflow-hidden">
        <Image src={item.img} alt="Category" width={82} height={62} className="transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="flex justify-center">
        <h3 className="font-medium text-center text-dark text-sm transition-colors duration-300 group-hover:text-[#FF0000]">
          {item.title}
        </h3>
      </div>
    </Link>
  );
};

export default SingleItem;
