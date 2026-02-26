"use client";

import { Input } from "@/components/ui/input";
import { BiSearchAlt2 } from "react-icons/bi";
const SearchProducts = () => {
  return (
    <div>
      <Input
        placeholder="Search products"
        startIcon={<BiSearchAlt2 />}
        classes={{
          root: "rounded-4xl w-105",
          startIcon: "[&_svg]:size-5",
        }}
      />
    </div>
  );
};

export default SearchProducts;
