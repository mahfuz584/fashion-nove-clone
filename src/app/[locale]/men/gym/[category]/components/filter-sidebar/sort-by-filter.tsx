"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "best-sellers", label: "Best Sellers" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];

const SortByFilter = () => {
  const [value, setValue] = useState("price-low-high");

  return (
    <Accordion type="single" collapsible defaultValue="sort">
      <AccordionItem value="sort">
        <AccordionTrigger>Sort By</AccordionTrigger>
        <AccordionContent>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="w-full" size="sm">
              <SelectValue placeholder="Select sort option" />
            </SelectTrigger>
            <SelectContent position="popper">
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SortByFilter;
