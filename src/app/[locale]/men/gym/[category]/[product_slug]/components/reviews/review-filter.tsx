"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { IoMdStar } from "react-icons/io";
import { ratingOptions, ratingSortOptions } from "../product-gallery/constants";

const ReviewFilter = () => {
  return (
    <div className="mt-5 flex items-center justify-between">
      <p className="body-8 text-accent-foreground">Showing 3 of 607 reviews</p>
      <div className="flex items-center gap-5 pr-2">
        <Select defaultValue="all">
          <SelectTrigger className="border-none shadow-none p-0 body-8 flex items-center">
            FILTER BY RATING
            <span className="font-bold ml-1">
              <SelectValue />
            </span>
          </SelectTrigger>
          <SelectContent>
            {ratingOptions.map((option) => (
              <SelectItem key={option.value} value={String(option.value)}>
                <div className="flex items-center gap-1">
                  <span className="body-8">{option.label}</span>
                  {option.value !== "all" && (
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IoMdStar
                          key={i}
                          className={cn(
                            "text-zinc-300 size-3",
                            i < Number(option.value) &&
                              "text-[rgb(255,188,11)]",
                          )}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="highest">
          <SelectTrigger className="border-none shadow-none p-0 body-8 flex items-center">
            SORT
            <span className="font-bold ml-1">
              <SelectValue />
            </span>
          </SelectTrigger>
          <SelectContent>
            {ratingSortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ReviewFilter;
