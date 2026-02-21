import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="lg:max-w-[455px] w-full lg:ml-auto">
      <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 py-4 px-5 sm:px-6 bg-gray-50/50">
          <h3 className="pl-3 border-l-4 border-[#FF0000] font-semibold text-lg text-dark">
            Order Summary
          </h3>
        </div>

        <div className="pt-4 pb-6 px-5 sm:px-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-500">Product</span>
            <span className="text-sm font-medium text-gray-500">Subtotal</span>
          </div>

          {cartItems.map((item, key) => (
            <div
              key={key}
              className="flex items-center justify-between py-4 border-b border-gray-100"
            >
              <p className="text-dark text-sm line-clamp-1 pr-2">{item.title}</p>
              <p className="text-[#FF0000] font-semibold text-sm flex-shrink-0">
                ₹{(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>
          ))}

          <div className="flex items-center justify-between pt-5 pb-6">
            <span className="font-semibold text-dark">Total</span>
            <span className="font-semibold text-lg text-[#FF0000]">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            href="/checkout"
            className="w-full flex justify-center font-medium text-white bg-[#FF0000] py-3 px-6 rounded-full transition-all duration-200 hover:bg-[#CC0000] hover:shadow-lg hover:shadow-[#FF0000]/25"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
