"use client";

import ClientRating from "@/app/[locale]/components/client-rating";
import ProductInfoAccordion from "@/app/[locale]/components/primary-product-card/product-info-accordion";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Van } from "lucide-react";
import { useState } from "react";
import ColorPicker from "../../components/color-picker";
import { checkboxData } from "../../components/filter-sidebar/color-filter";
import { lengthOptions, sizedOptions } from "./constant";

const DetailsPanel = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const selectColor = (id: string) => {
    setSelectedColor(id);
  };
  return (
    <div className="flex justify-between col-span-4">
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <p className="body-8 mb-1">
              Clark Striped Knit Button Up Shirt - Blue/combo
            </p>
            <div className="flex items-center gap-1 mb-2">
              <p className="flex items-center gap-1.25 body-3 font-semibold text-tertiary-foreground">
                <span>TK</span>
                199
              </p>
              <p className="flex items-center gap-0.5 body-8 font-normal line-through">
                <span>TK</span> 555
              </p>
            </div>
            <p className="body-8 font-semibold text-tertiary-foreground mb-3">
              Up To 70% Off Sitewide! Prices as Marked
            </p>
          </div>
          <div className="flex h-fit items-center gap-1 -mt-1.25">
            <ClientRating rating={4.5} size={14} />
            <p className="body-8 mt-0.75 ">
              (<span className="underline">32</span>)
            </p>
          </div>
        </div>
        <p className="body-7 font-semibold mb-1">Black/combo</p>
        <div className="flex items-center gap-2">
          {checkboxData.map((item) => (
            <ColorPicker
              key={item.id}
              item={item}
              checked={selectedColor === item.id}
              onChange={selectColor}
              classes={{
                root: "size-6",
                label: "hidden",
                icon: "size-5.5",
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 mt-4 mb-1.5">
          <p className="body-7 font-semibold">Size</p>
          <div className="flex items-center gap-1">
            {sizedOptions.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground w-10"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="body-7 font-semibold">Length</p>
          <div className="flex items-center gap-1">
            {lengthOptions.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground w-10"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <Button className="w-full flex-1 text-sm rounded-full" size="lg">
            Add to Cart
          </Button>
          <Button
            variant="outline"
            component="link"
            href="/wishlist"
            size="icon-lg"
            startIcon={
              <Heart className="size-5 text-primary group-hover:text-white" />
            }
            className="group w-10 border-primary hover:bg-primary"
          />
        </div>
        <div className="flex gap-2 mt-4">
          <Van className="size-4" strokeWidth={1.5} />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <p className="body-8 font-semibold">International Standard</p>
              <Clock className="size-3.5" strokeWidth={1.25} />
            </div>
            <p className="body-8">Free shipping USD $125+</p>
            <p className="body-8">
              Estimated Delivery:
              <span className="font-semibold ml-1">Friday, Mar 20</span>
            </p>
          </div>
        </div>
        <ProductInfoAccordion />
      </div>
    </div>
  );
};

export default DetailsPanel;
