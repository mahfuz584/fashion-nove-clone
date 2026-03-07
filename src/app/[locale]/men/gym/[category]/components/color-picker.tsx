import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CircleCheckIcon } from "lucide-react";
import { ColorPickerProps } from "./types";

const ColorPicker = ({
  item,
  checked,
  onChange,
  classes,
}: ColorPickerProps) => {
  return (
    <Label className={cn("flex items-center gap-2", classes?.labelRoot)}>
      <CheckboxPrimitive.Root
        checked={checked}
        onCheckedChange={() => onChange(item.id)}
        aria-label={`Color ${item.color}`}
        className={cn(
          "peer size-5 shrink-0 rounded-full cursor-pointer",
          classes?.root,
          item.className,
        )}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            "flex items-center justify-center transition-none",
            classes?.indicator,
          )}
        >
          <CircleCheckIcon
            className={cn("size-4.5 fill-white", classes?.icon)}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span className={cn("text-xs", classes?.label)}>{item.label}</span>
    </Label>
  );
};

export default ColorPicker;
