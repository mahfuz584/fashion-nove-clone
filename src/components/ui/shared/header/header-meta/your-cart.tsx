import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShoppingCart } from "lucide-react";

const YourCart = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          startIcon={<ShoppingCart className="size-5" />}
          className="hover:bg-accent hover:text-accent-foreground"
        />
      </TooltipTrigger>
      <TooltipContent className="w-97 mr-2 px-4 py-6" sideOffset={12}>
        <p className="body-2 font-bold text-center">Start Shopping</p>
        <p className="text-center font-medium pt-1">
          Have an account? Sign in to view your bag
        </p>
        <div className="flex items-center gap-3 pt-6">
          <Button
            variant="outline"
            className="rounded-full text-xs w-[49%] h-11"
          >
            Start Shopping
          </Button>
          <Button className="rounded-full text-xs w-[49%] h-11">
            Checkout
          </Button>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default YourCart;
