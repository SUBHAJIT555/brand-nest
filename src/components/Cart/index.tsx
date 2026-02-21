"use client";
import React from "react";
import Discount from "./Discount";
import OrderSummary from "./OrderSummary";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeAllItemsFromCart } from "@/redux/features/cart-slice";
import SingleItem from "./SingleItem";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector((state) => state.cartReducer.items);

  const handleClearCart = () => {
    dispatch(removeAllItemsFromCart());
  };

  return (
    <>
      <section>
        <Breadcrumb title={"Cart"} pages={["Cart"]} />
      </section>
      {cartItems.length > 0 ? (
        <section className="overflow-hidden py-16 sm:py-20">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex flex-wrap items-center justify-between gap-5 mb-6">
              <h2 className="pl-3 border-l-4 border-[#FF0000] font-semibold text-dark text-xl sm:text-2xl">
                Your Cart
              </h2>
              <button
                type="button"
                onClick={handleClearCart}
                className="text-sm font-medium text-gray-500 hover:text-[#FF0000] transition-colors duration-200"
              >
                Clear cart
              </button>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[1170px]">
                  {/* table header */}
                  <div className="grid grid-cols-[minmax(400px,1fr)_180px_275px_200px_50px] items-center py-4 px-5 sm:px-6 bg-gray-50/80 border-b border-gray-100">
                    <div>
                      <p className="text-sm font-semibold text-dark text-left">Product</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark text-left">Price</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark text-left">Quantity</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark text-left">Subtotal</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark text-right">Action</p>
                    </div>
                  </div>

                  {cartItems.length > 0 &&
                    cartItems.map((item, key) => (
                      <SingleItem item={item} key={key} />
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 xl:gap-10 mt-8">
              <Discount />
              <OrderSummary />
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-24">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
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
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark text-lg mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm mb-6">Add items from the shop to get started.</p>
              <Link
                href="/shop"
                className="inline-flex font-medium text-white bg-[#FF0000] py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#CC0000] hover:shadow-lg hover:shadow-[#FF0000]/25"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
