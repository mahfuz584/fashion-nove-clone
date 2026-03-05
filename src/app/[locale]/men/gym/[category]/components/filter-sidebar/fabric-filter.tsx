import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { fabricOptions } from "./constants";

const FabricFilter = () => {
  return (
    <Accordion type="single" collapsible defaultValue="nylon">
      <AccordionItem value="nylon">
        <AccordionTrigger>Fabrics</AccordionTrigger>
        <AccordionContent>
          <RadioGroup defaultValue="nylon" className="w-fit">
            {fabricOptions.map((option) => (
              <div
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FabricFilter;
