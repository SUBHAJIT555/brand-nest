import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="h-full flex flex-col bg-white/95 rounded-2xl border-l-4 border-[#FF0000] py-8 px-6 sm:px-8 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-0.5 mb-4 shrink-0">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1l1.5 4.5L13 6l-3.5 3.2L11 14l-4-2.5L3 14l1-4.8L.5 6l4.5-.5L7 1z" />
          </svg>
        ))}
      </div>

      <p className="text-dark-2 mb-6 flex-1 min-h-0 text-[15px] leading-relaxed italic">&ldquo;{testimonial.review}&rdquo;</p>

      <div className="flex items-center gap-4 shrink-0 pt-4 border-t border-gray-200">
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#FF0000]/30 flex-shrink-0">
          <Image
            src={testimonial.authorImg}
            alt={testimonial.authorName}
            className="w-full h-full object-cover"
            width={56}
            height={56}
          />
        </div>
        <div>
          <h3 className="font-bold text-dark text-base">{testimonial.authorName}</h3>
          <p className="text-custom-sm text-[#FF0000] font-medium">{testimonial.authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
