import React from "react";

const Discount = () => {
  return (
    <div className="lg:max-w-[670px] w-full">
      <form>
        <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 py-4 px-5 sm:px-6 bg-gray-50/50">
            <h3 className="pl-3 border-l-4 border-[#FF0000] font-semibold text-dark">
              Have a discount code?
            </h3>
          </div>

          <div className="py-6 px-5 sm:px-6">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex-1 min-w-[200px]">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Enter coupon code"
                  className="rounded-xl border border-gray-200 bg-gray-50/50 placeholder:text-gray-400 w-full py-3 px-4 outline-none transition-all duration-200 focus:bg-white focus:border-[#FF0000] focus:ring-2 focus:ring-[#FF0000]/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex font-medium text-white bg-[#FF0000] py-3 px-6 rounded-full transition-all duration-200 hover:bg-[#CC0000] hover:shadow-lg hover:shadow-[#FF0000]/25"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discount;
