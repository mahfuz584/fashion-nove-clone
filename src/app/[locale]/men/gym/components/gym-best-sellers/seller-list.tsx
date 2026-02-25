"use client";

import BestSellerCard from "@/app/[locale]/components/best-seller-card";
import { menBestSellers } from "../constants";

const SellerLists = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {menBestSellers.map((category) => (
        <BestSellerCard key={category.id} cardItem={category} />
      ))}
    </div>
  );
};

export default SellerLists;
