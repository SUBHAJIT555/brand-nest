import CookiePolicy from "@/components/CookiePolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Brand Nest",
  description: "How Brand Nest uses cookies and similar technologies on our website.",
};

const CookiePolicyPage = () => {
  return (
    <main>
      <CookiePolicy />
    </main>
  );
};

export default CookiePolicyPage;
