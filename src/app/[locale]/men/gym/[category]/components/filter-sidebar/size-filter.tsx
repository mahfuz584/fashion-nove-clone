import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SIZE_FILTERS } from "@/lib/enums";
import { MensGymCategoryProps } from "../types";

const SizeFilter = ({ category }: { category: MensGymCategoryProps }) => {
  const sizeConfig = SIZE_FILTERS[category];

  switch (sizeConfig.type) {
    case "alpha":
      return (
        <Accordion type="single" collapsible defaultValue="size">
          <AccordionItem value="size">
            <AccordionTrigger>Size</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-4 gap-0.75">
                {sizeConfig.options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

    case "numeric":
      return (
        <Accordion type="single" collapsible defaultValue="size">
          <AccordionItem value="size">
            <AccordionTrigger>{`Size (${sizeConfig.system})`}</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-4 gap-0.75">
                {sizeConfig.options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

    case "alpha+inseam":
      return (
        <div className="flex flex-col gap-3.5">
          <Accordion type="single" collapsible defaultValue="size">
            <AccordionItem value="size">
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-4 gap-0.75">
                  {sizeConfig.options.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="length">
              <AccordionTrigger>Length</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-0.75">
                  {sizeConfig.inseam.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      );

    default:
      return null;
  }
};

export default SizeFilter;
