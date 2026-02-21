import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Brand Nest",
  description: "How Brand Nest collects, uses, and protects your personal information when you shop with us.",
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;
