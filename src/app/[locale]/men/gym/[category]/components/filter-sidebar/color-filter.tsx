"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

const isLight = (hex: string) => {
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness > 186;
};

const colorsFilter = [
  { bg: "#000000", label: "Black" },
  { bg: "#2563EB", label: "Blue" },
  { bg: "#DC2626", label: "Red" },
  { bg: "#FFFFFF", label: "White" },
  { bg: "#FACC15", label: "Yellow" },
];

export default function ColorFilter() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((v) => v !== label) : [...prev, label],
    );
  };

  return (
    <Accordion type="single" collapsible defaultValue="color">
      <AccordionItem value="color">
        <AccordionTrigger>Color</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3">
            {colorsFilter.map((color) => {
              const checked = selected.includes(color.label);
              const tickColor = isLight(color.bg) ? "#000000" : "#FFFFFF";

              return (
                <div
                  key={color.label}
                  onClick={() => toggle(color.label)}
                  className="flex items-center gap-1.5 cursor-pointer"
                >
                  <div
                    className="relative size-4 rounded-xs flex items-center justify-center border"
                    style={{ backgroundColor: color.bg }}
                  >
                    {checked && (
                      <GiCheckMark
                        className="size-2.5"
                        style={{ color: tickColor }}
                      />
                    )}
                  </div>
                  <span className="text-xs">{color.label}</span>
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => toggle(color.label)}
                    className="hidden"
                  />
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
