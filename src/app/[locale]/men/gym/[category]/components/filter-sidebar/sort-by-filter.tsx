"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "best-sellers", label: "Best Sellers" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];

const SortByFilter = () => {
  // const [value, setValue] = useState("price-low-high");

  return (
    <Accordion type="single" collapsible defaultValue="sort">
      <AccordionItem value="sort">
        <AccordionTrigger>Sort By</AccordionTrigger>
        <AccordionContent>
          {/* <Select value={value} onValueChange={setValue}>
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
          </Select> */}
          <RadioGroup defaultValue="featured" className="w-fit">
            {sortOptions.map((option) => (
              <div
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="text-xs font-normal cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SortByFilter;
