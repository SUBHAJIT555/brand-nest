"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("formType", "contact");
      formData.append("name", `${data.firstName} ${data.lastName}`);
      formData.append("email", data.email);
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      if (data.subject) formData.append("subject", data.subject);
      if (data.phone) formData.append("phone", data.phone);
      if (data.message) formData.append("message", data.message);

      const res = await fetch("/api/submit.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full py-3 px-0 bg-transparent border-0 border-b-2 border-gray-200 outline-none transition-colors placeholder:text-gray-400 focus:border-[#FF0000]";
  const inputError = "border-red-400 focus:border-red-400";

  return (
    <>
      <Breadcrumb title={"Contact"} pages={["contact"]} />

      {/* Hero: minimal, no card */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-[720px] mx-auto px-4 sm:px-8 text-center">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-3">
            Get in touch
          </h1>
          <p className="text-dark-3 text-lg">
            Have a question or feedback? Send us a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Main: form left, contact right - editorial style */}
      <section className="overflow-hidden py-14 sm:py-20 bg-[#FAF9F7]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form - left, full width on mobile */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-dark-3 mb-2">
                      First name <span className="text-[#FF0000]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
                      id="firstName"
                      placeholder="John"
                      className={`${inputBase} ${errors.firstName ? inputError : ""}`}
                    />
                    {errors.firstName && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-dark-3 mb-2">
                      Last name <span className="text-[#FF0000]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      id="lastName"
                      placeholder="Doe"
                      className={`${inputBase} ${errors.lastName ? inputError : ""}`}
                    />
                    {errors.lastName && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-dark-3 mb-2">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    id="email"
                    placeholder="you@example.com"
                    className={`${inputBase} ${errors.email ? inputError : ""}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-dark-3 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      id="subject"
                      placeholder="What's this about?"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-dark-3 mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      {...register("phone")}
                      id="phone"
                      placeholder="Your number"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-dark-3 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    placeholder="Your message..."
                    className={`${inputBase} resize-y min-h-[100px] border-b-2 border-gray-200 focus:border-[#FF0000] outline-none transition-colors py-3`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                {success && (
                  <p className="text-sm text-green-600 font-medium">Message sent successfully. We&apos;ll be in touch soon.</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex font-semibold text-white bg-[#FF0000] py-3.5 px-8 rounded-xl transition-all duration-200 hover:bg-[#CC0000] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>

            {/* Contact info - right, minimal list style */}
            <div className="lg:col-span-5 lg:pl-8 lg:border-l-2 lg:border-gray-200">
              <h2 className="font-bold text-xl sm:text-2xl text-dark mb-6">
                Contact information
              </h2>
              <ul className="space-y-6">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark-3 mb-1">Email</p>
                  <a
                    href={`mailto:${siteConfig.brand.email.general}`}
                    className="text-dark font-medium hover:text-[#FF0000] transition-colors break-all"
                  >
                    {siteConfig.brand.email.general}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark-3 mb-1">Phone</p>
                  <a
                    href={`tel:${siteConfig.brand.phone.replace(/\s/g, "")}`}
                    className="text-dark font-medium hover:text-[#FF0000] transition-colors"
                  >
                    {siteConfig.brand.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark-3 mb-1">Address</p>
                  <p className="text-dark leading-relaxed">
                    {siteConfig.brand.address.full}
                  </p>
                  {siteConfig.brand.businessHours && (
                    <p className="text-dark-3 text-sm mt-1">{siteConfig.brand.businessHours}</p>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
