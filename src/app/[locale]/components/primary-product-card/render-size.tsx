"use client";

import { Button } from "@/components/ui/button";
import { SIZE_FILTERS } from "@/lib/enums";
import { useParams } from "next/navigation";
import { MensGymCategoryProps } from "../../men/gym/[category]/components/types";

const RenderSize = () => {
  const { category } = useParams<{ category: MensGymCategoryProps }>();
  const sizeConfig = SIZE_FILTERS[category];

  switch (sizeConfig.type) {
    case "alpha":
      return (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium">Size</p>

          <div className="grid grid-cols-5 gap-0.75">
            {sizeConfig.options.map((option) => (
              <Button
                key={option}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground text-[11px]"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      );

    case "numeric":
      return (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium">Size ({sizeConfig.system})</p>

          <div className="grid grid-cols-5 gap-0.75">
            {sizeConfig.options.map((option) => (
              <Button
                key={option}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground text-[10px]"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      );

    case "alpha+inseam":
      return (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium">Size</p>

            <div className="grid grid-cols-5 gap-0.75">
              {sizeConfig.options.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground text-[10px]"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium">Length</p>

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
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default RenderSize;
