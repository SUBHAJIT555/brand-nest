import Home from "@/components/Home";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Nest | Online Shopping for Electronics, Books, Stationery, and Garments",
  description: "Brand Nest is India's trusted store for electronics, books, stationery, and garments all under ₹10,000. Honest prices, fast delivery, and support for Indian shoppers.",
};

export default function HomePage() {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <>
      <Home products={products} />
    </>
  );
}
