"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

type AddToCartProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AddToCart = ({ open, onOpenChange }: AddToCartProps) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[85%] rounded-full text-base absolute -translate-x-1/2 left-1/2 top-81 h-11.5 z-20 opacity-0 group-hover/addToCart:opacity-100 transition-all duration-300 ease-in-out"
        >
          sdas
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="center"
        className=""
        onPointerDownOutside={(e) => {
          e.stopPropagation();
        }}
        onInteractOutside={(e) => {
          e.stopPropagation();
        }}
      >
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description text here.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
};

export default AddToCart;
