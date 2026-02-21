import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuoteFormData } from "@/lib/schemas";

interface BillingProps {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

const Billing = ({ register, errors }: BillingProps) => {
  return (
    <div className="mt-9">
      <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
        Billing details
      </h2>

      <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label htmlFor="firstName" className="block mb-2.5">
              First Name <span className="text-red">*</span>
            </label>

            <input
              type="text"
              {...register("firstName")}
              id="firstName"
              placeholder="First name"
              className={`rounded-md border ${errors.firstName ? "border-red" : "border-gray-3"
                } bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red">{errors.firstName.message}</p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="lastName" className="block mb-2.5">
              Last Name <span className="text-red">*</span>
            </label>

            <input
              type="text"
              {...register("lastName")}
              id="lastName"
              placeholder="Last name"
              className={`rounded-md border ${errors.lastName ? "border-red" : "border-gray-3"
                } bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="address" className="block mb-2.5">
            Street Address
            <span className="text-red">*</span>
          </label>

          <input
            type="text"
            {...register("address")}
            id="address"
            placeholder="Street address"
            className={`rounded-md border ${errors.address ? "border-red" : "border-gray-3"
              } bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary`}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red">{errors.address.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="town" className="block mb-2.5">
            Town/ City <span className="text-red">*</span>
          </label>

          <input
            type="text"
            {...register("town")}
            id="town"
            placeholder="Town/City"
            className={`rounded-md border ${errors.town ? "border-red" : "border-gray-3"
              } bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary`}
          />
          {errors.town && (
            <p className="mt-1 text-sm text-red">{errors.town.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="state" className="block mb-2.5">
            State/ Country
          </label>

          <input
            type="text"
            {...register("state")}
            id="state"
            placeholder="State/Country"
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="postcode" className="block mb-2.5">
            Postcode/ ZIP
          </label>

          <input
            type="text"
            {...register("postcode")}
            id="postcode"
            placeholder="Postcode/ZIP"
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5">
            Email <span className="text-red">*</span>
          </label>

          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Email"
            className={`rounded-md border ${errors.email ? "border-red" : "border-gray-3"
              } bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-5.5">
          <label htmlFor="phone" className="block mb-2.5">
            Phone <span className="text-red">*</span>
          </label>

          <input
            type="text"
            {...register("phone")}
            id="phone"
            placeholder="Phone"
            className={`rounded-md border ${errors.phone ? "border-red" : "border-gray-3"
              } bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus-ring-primary`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red">{errors.phone.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Billing;
