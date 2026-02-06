"use client";

import { Input } from "@/components/ui/input";
import { CgSearch } from "react-icons/cg";

const SearchProducts = () => {
  return (
    <div>
      <Input
        placeholder="Search products"
        startIcon={<CgSearch />}
        classes={{
          root: "rounded-4xl w-105",
        }}
      />
    </div>
  );
};

export default SearchProducts;
