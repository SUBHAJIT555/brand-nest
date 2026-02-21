import RefundPolicy from "@/components/RefundPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Refund Policy | Brand Nest",
  description: "Brand Nest return and refund policy — 7-day returns, eligibility, and how to request a refund.",
};

const RefundPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefundPolicyPage;
