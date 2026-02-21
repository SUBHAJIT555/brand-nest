"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { removeAllItemsFromWishlist } from "@/redux/features/wishlist-slice";
import SingleItem from "./SingleItem";
import Link from "next/link";

export const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  const handleClearWishlist = () => {
    dispatch(removeAllItemsFromWishlist());
  };

  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />
      <section className="overflow-hidden py-16 sm:py-20">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {wishlistItems.length > 0 ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-5 mb-6">
                <h2 className="pl-3 border-l-4 border-[#FF0000] font-semibold text-dark text-xl sm:text-2xl">
                  Your Wishlist
                </h2>
                <button
                  type="button"
                  onClick={handleClearWishlist}
                  className="text-sm font-medium text-gray-500 hover:text-[#FF0000] transition-colors duration-200"
                >
                  Clear wishlist
                </button>
              </div>

              <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
                <div className="w-full overflow-x-auto">
                  <div className="min-w-[1170px]">
                    <div className="flex items-center py-4 px-5 sm:px-6 bg-gray-50/80 border-b border-gray-100">
                      <div className="min-w-[83px]" aria-hidden />
                      <div className="min-w-[387px]">
                        <p className="text-sm font-semibold text-dark">Product</p>
                      </div>
                      <div className="min-w-[205px]">
                        <p className="text-sm font-semibold text-dark">Unit Price</p>
                      </div>
                      <div className="min-w-[265px]">
                        <p className="text-sm font-semibold text-dark">Stock Status</p>
                      </div>
                      <div className="min-w-[150px]">
                        <p className="text-sm font-semibold text-dark text-right">Action</p>
                      </div>
                    </div>

                    {wishlistItems.map((item, key) => (
                      <SingleItem item={item} key={key} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-gray-200/80 bg-gray-50/30 max-w-lg mx-auto p-10 sm:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center">
                <svg
                  className="text-[#FF0000]"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark text-lg mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500 text-sm mb-6">Save items you like so you can buy them later.</p>
              <Link
                href="/shop"
                className="inline-flex font-medium text-white bg-[#FF0000] py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#CC0000] hover:shadow-lg hover:shadow-[#FF0000]/25"
              >
                Browse Shop
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
