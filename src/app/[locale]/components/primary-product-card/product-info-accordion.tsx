"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PiToolbox } from "react-icons/pi";
import { TbHanger } from "react-icons/tb";
import { productDetails } from "./constants";

const ProductInfoAccordion = () => {
  return (
    <Accordion
      type="multiple"
      className="w-full border rounded-lg mt-8.5"
      defaultValue={["product-details", "material"]}
    >
      <AccordionItem value="product-details">
        <AccordionTrigger
          className="flex items-center gap-2 py-4 bg-transparent data-[state=open]:bg-transparent h-12"
          iconType="chevron"
        >
          <div className="flex items-center gap-2">
            <TbHanger className="size-5 shrink-0" />
            <span className="body-7">Product Details</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-4 border-l-0">
          <ul className="flex flex-col gap-0.5 pl-9 body-8 list-[square] ">
            {productDetails.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="material">
        <AccordionTrigger
          className="flex items-center gap-2 py-4 bg-transparent data-[state=open]:bg-transparent h-12"
          iconType="chevron"
        >
          <div className="flex items-center gap-2">
            <PiToolbox className="size-4.5 shrink-0" />
            <span className="body-7">Material</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-4 border-l-0">
          <p className="pl-5 body-8">100% Premium Cotton Fabric</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductInfoAccordion;
