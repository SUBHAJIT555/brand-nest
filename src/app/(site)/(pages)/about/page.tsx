import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Brand Nest",
  description: "Learn about Brand Nest — your trusted store for electronics, stationery, books, and garments across India.",
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main >
  );
};

export default AboutPage;
