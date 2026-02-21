import TermsOfUse from "@/components/TermsOfUse";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use | Brand Nest",
  description: "Terms and conditions for using Brand Nest — electronics, stationery, books, and garments across India.",
};

const TermsOfUsePage = () => {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
};

export default TermsOfUsePage;
