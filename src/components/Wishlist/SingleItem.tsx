import React from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeItemFromWishlist } from "@/redux/features/wishlist-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item.id));
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  const imgSrc = item.img ?? item.imgs?.thumbnails?.[0];

  return (
    <div className="flex items-center border-t border-gray-100 py-5 px-5 sm:px-6 hover:bg-gray-50/50 transition-colors duration-200">
      <div className="min-w-[83px]">
        <button
          onClick={handleRemoveFromWishlist}
          aria-label="Remove from wishlist"
          className="flex items-center justify-center rounded-xl w-10 h-10 border border-gray-200 bg-gray-50/50 text-gray-500 transition-all duration-200 hover:bg-red-50 hover:border-red-200 hover:text-red-500"
        >
          <svg
            className="fill-current w-5 h-5"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.19509 8.22222C8.92661 7.95374 8.49131 7.95374 8.22282 8.22222C7.95433 8.49071 7.95433 8.92601 8.22282 9.1945L10.0284 11L8.22284 12.8056C7.95435 13.074 7.95435 13.5093 8.22284 13.7778C8.49133 14.0463 8.92663 14.0463 9.19511 13.7778L11.0006 11.9723L12.8061 13.7778C13.0746 14.0463 13.5099 14.0463 13.7784 13.7778C14.0469 13.5093 14.0469 13.074 13.7784 12.8055L11.9729 11L13.7784 9.19451C14.0469 8.92603 14.0469 8.49073 13.7784 8.22224C13.5099 7.95376 13.0746 7.95376 12.8062 8.22224L11.0006 10.0278L9.19509 8.22222Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0007 1.14587C5.55835 1.14587 1.14648 5.55773 1.14648 11C1.14648 16.4423 5.55835 20.8542 11.0007 20.8542C16.443 20.8542 20.8548 16.4423 20.8548 11C20.8548 5.55773 16.443 1.14587 11.0007 1.14587ZM2.52148 11C2.52148 6.31713 6.31774 2.52087 11.0007 2.52087C15.6836 2.52087 19.4798 6.31713 19.4798 11C19.4798 15.683 15.6836 19.4792 11.0007 19.4792C6.31774 19.4792 2.52148 15.683 2.52148 11Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="min-w-[387px]">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-xl bg-gray-100 border border-gray-100 max-w-[80px] w-full h-[70px] overflow-hidden flex-shrink-0">
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={item.title}
                width={200}
                height={200}
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" aria-hidden />
            )}
          </div>
          <Link href="/shop" className="min-w-0">
            <h3 className="text-dark font-medium transition-colors duration-200 hover:text-[#FF0000] line-clamp-2">
              {item.title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="min-w-[205px]">
        <p className="font-semibold text-[#FF0000]">₹{item.discountedPrice.toLocaleString("en-IN")}</p>
      </div>

      <div className="min-w-[265px]">
        <div className="flex items-center gap-2">
          {item.status === "out of stock" || item.status === "unavailable" ? (
            <>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-red-500"
                >
                  <path
                    d="M9.99935 14.7917C10.3445 14.7917 10.6243 14.5119 10.6243 14.1667V9.16669C10.6243 8.82151 10.3445 8.54169 9.99935 8.54169C9.65417 8.54169 9.37435 8.82151 9.37435 9.16669V14.1667C9.37435 14.5119 9.65417 14.7917 9.99935 14.7917Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.99935 5.83335C10.4596 5.83335 10.8327 6.20645 10.8327 6.66669C10.8327 7.12692 10.4596 7.50002 9.99935 7.50002C9.53911 7.50002 9.16602 7.12692 9.16602 6.66669C9.16602 6.20645 9.53911 5.83335 9.99935 5.83335Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium text-red-500">Out of stock</span>
            </>
          ) : (
            <>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-emerald-600"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium text-emerald-600">In stock</span>
            </>
          )}
        </div>
      </div>

      <div className="min-w-[150px] flex justify-end">
        <button
          onClick={handleAddToCart}
          disabled={item.status === "out of stock" || item.status === "unavailable"}
          className="inline-flex font-medium text-sm py-2.5 px-5 rounded-full border-2 border-[#FF0000]/40 text-[#FF0000] bg-white transition-all duration-200 hover:bg-[#FF0000] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#FF0000]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
