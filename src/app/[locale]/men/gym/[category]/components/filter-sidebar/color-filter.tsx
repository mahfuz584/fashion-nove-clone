"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import ColorPicker from "../color-picker";

export const checkboxData = [
  {
    id: "1",
    color: "#ef4444",
    label: "Red",
    className: "bg-red-500 data-[state=checked]:text-red-500",
  },
  {
    id: "2",
    color: "#3b82f6",
    label: "Blue",
    className: "bg-blue-500 data-[state=checked]:text-blue-500",
  },
  {
    id: "3",
    color: "#22c55e",
    label: "Green",
    className: "bg-green-500 data-[state=checked]:text-green-500",
  },
  {
    id: "4",
    color: "#eab308",
    label: "Yellow",
    className: "bg-yellow-400 data-[state=checked]:text-yellow-400",
  },
  {
    id: "5",
    color: "#a855f7",
    label: "Purple",
    className: "bg-purple-500 data-[state=checked]:text-purple-500",
  },
  {
    id: "6",
    color: "#f97316",
    label: "Orange",
    className: "bg-orange-500 data-[state=checked]:text-orange-500",
  },
  {
    id: "7",
    color: "#06b6d4",
    label: "Cyan",
    className: "bg-cyan-500 data-[state=checked]:text-cyan-500",
  },
  {
    id: "8",
    color: "#ec4899",
    label: "Pink",
    className: "bg-pink-500 data-[state=checked]:text-pink-500",
  },
];

const ColorFilter = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const toggleColor = (id: string) => {
    setSelectedColors((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };
  return (
    <Accordion type="single" collapsible defaultValue="color">
      <AccordionItem value="color">
        <AccordionTrigger>Color</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2">
            {checkboxData.map((item) => (
              <ColorPicker
                key={item.id}
                item={item}
                onChange={toggleColor}
                checked={selectedColors.includes(item.id)}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorFilter;
