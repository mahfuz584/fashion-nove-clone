import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";
import RenderSize from "./render-size";
import { AddToCartProps } from "./types";

const AddToCart = ({ open, onOpenChange }: AddToCartProps) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[88%] rounded-full text-base absolute -translate-x-1/2 left-1/2 top-81 h-11.5 z-20 opacity-0 group-hover/addToCart:opacity-100 transition-all duration-300 ease-in-out"
        >
          Add to cart
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="center"
        sideOffset={-48}
        onPointerDownOutside={(e) => {
          e.stopPropagation();
        }}
        onInteractOutside={(e) => {
          e.stopPropagation();
        }}
      >
        <PopoverHeader className="flex justify-between">
          <PopoverTitle>Select Size</PopoverTitle>
          <Button
            size="icon-sm"
            variant="ghost"
            startIcon={<X />}
            onClick={() => onOpenChange(false)}
            className="p-0 size-6.5"
          />
        </PopoverHeader>
        <RenderSize />
      </PopoverContent>
    </Popover>
  );
};

export default AddToCart;
