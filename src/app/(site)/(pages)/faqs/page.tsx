import FAQs from "@/components/FAQs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQs | Brand Nest",
  description: "Frequently asked questions about shopping, delivery, returns, and support at Brand Nest.",
};

const FAQsPage = () => {
  return (
    <main>
      <FAQs />
    </main>
  );
};

export default FAQsPage;
