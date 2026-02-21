import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop | Brand Nest",
  description: "Shop electronics, stationery, books, and garments at Brand Nest — all under ₹10,000.",
};

const ShopWithSidebarPage = () => {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <main>
      <ShopWithSidebar products={products} />
    </main>
  );
};

export default ShopWithSidebarPage;
