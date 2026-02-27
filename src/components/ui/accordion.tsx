"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group bg-accordion-trigger focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4  body-7 py-1.25 px-2.5 text-left font-semibold cursor-pointer transition-all outline-none  rounded-lg focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 h-7  data-[state=open]:bg-accordion-trigger",
          className,
        )}
        {...props}
      >
        {children}
        <div className="relative">
          <Plus className="group-data-[state=open]:hidden text-accent-foreground size-3.5 mt-0.5" />
          <Minus className="hidden group-data-[state=open]:block text-accent-foreground size-3.5 mt-0.5" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm px-2.75 "
      {...props}
    >
      <div className={cn("py-1.5 border-l pl-1.5", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
