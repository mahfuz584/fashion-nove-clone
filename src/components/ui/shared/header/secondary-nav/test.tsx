"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { secondary_nav } from "./constants";

const SecondaryNav = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLParagraphElement | null>>({});

  const [isOpen, setIsOpen] = useState(false);
  const [arrowX, setArrowX] = useState(0);

  const handleHover = (id: string) => {
    const button = buttonRefs.current[id];
    const wrapper = wrapperRef.current;
    const panel = panelRef.current;

    if (!button || !wrapper || !panel) return;

    const buttonRect = button.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();

    const panelWidth = panel.offsetWidth;
    const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
    const panelLeft = wrapperCenter - panelWidth / 2;

    const buttonCenter = buttonRect.left + buttonRect.width / 2;
    const newArrowX = buttonCenter - panelLeft;

    setArrowX(newArrowX);
    setIsOpen(true);
  };

  return (
    <>
      <div
        className={cn(
          "fixed left-0 right-0 bottom-0 top-25 bg-black/20 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen && "opacity-100 pointer-events-auto",
        )}
      />

      <div
        onMouseLeave={() => setIsOpen(false)}
        className="relative z-50 w-fit mx-auto"
      >
        <div
          ref={wrapperRef}
          className="flex items-center justify-center gap-6 py-3 px-3 cursor-pointer"
        >
          {secondary_nav.map((item) => (
            <p
              key={item.id}
              ref={(el) => {
                buttonRefs.current[item.id] = el;
              }}
              onMouseEnter={() => handleHover(item.id)}
              className="cursor-pointer body-5 font-medium"
            >
              {item.label}
            </p>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-full h-2" />
        <div
          ref={panelRef}
          className={cn(
            "absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-5xl rounded-lg bg-background shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 origin-top -translate-y-4 scale-95",
            isOpen && "opacity-100 translate-y-0 scale-100",
          )}
        >
          <div
            style={{ left: arrowX }}
            className="absolute -top-1 size-3 bg-background rotate-45 -translate-x-1/2 transition-[left] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-t border-muted"
          />
          <div
            className={cn(
              "p-6 transition-all duration-500 opacity-0 translate-y-3",
              isOpen && "opacity-100 translate-y-0",
            )}
          >
            <p className="text-sm text-muted-foreground bg-red-300">
              Dropdown content goes here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryNav;
