import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { discountOptions } from "./constants";

const DiscountFilter = () => {
  return (
    <Accordion type="single" collapsible defaultValue="discount">
      <AccordionItem value="discount">
        <AccordionTrigger>Discount</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-4 gap-0.75">
            {discountOptions.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DiscountFilter;
