"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas";

const Newsletter = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("formType", "newsletter");
      formData.append("email", data.email);

      const res = await fetch("/api/submit.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to subscribe");
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

  return (
    <section className="overflow-hidden py-16 sm:py-20 bg-white">
      <div className="max-w-[720px] mx-auto px-4 sm:px-8 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl xl:text-heading-4 text-dark mb-2">
          Don&apos;t miss out
        </h2>
        <p className="text-dark-3 text-custom-sm mb-8">
          Get the latest offers and discount codes in your inbox.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className={`flex-1 w-full bg-gray-1 border-2 ${
              errors.email ? "border-red" : "border-gray-200"
            } outline-none rounded-full placeholder:text-dark-4 py-3.5 px-5 text-center sm:text-left focus:border-[#FF0000] transition-colors`}
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex justify-center py-3.5 px-8 text-white bg-[#FF0000] font-semibold rounded-full ease-out duration-200 hover:bg-[#CC0000] disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
          >
            {submitting ? "Subscribing..." : success ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
        {errors.email && (
          <p className="mt-2 text-sm text-red">{errors.email.message}</p>
        )}
        {error && (
          <p className="mt-2 text-sm text-red">{error}</p>
        )}
        {success && (
          <p className="mt-2 text-sm text-green">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
