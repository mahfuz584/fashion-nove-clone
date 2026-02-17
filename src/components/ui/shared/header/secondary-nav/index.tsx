"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { secondary_nav } from "./constants";

const SecondaryNav = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLParagraphElement | null>>({});

  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(true);
  };

  useGSAP(
    () => {
      const panel = panelRef.current;
      const backdrop = backdropRef.current;

      if (!panel || !backdrop) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (isOpen) {
        tl.to(backdrop, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.25,
        }).fromTo(
          panel,
          { opacity: 0, y: -12, height: 0 },
          {
            opacity: 1,
            y: 0,
            height: 300,
            duration: 0.45,
          },
          "-=0.15",
        );
      } else {
        tl.to(panel, {
          height: 0,
          duration: 0.35,
        })
          .to(
            panel,
            {
              y: -12,
              opacity: 0,
              duration: 0.25,
              ease: "power2.in",
            },
            "-=0.15",
          )
          .to(
            backdrop,
            {
              opacity: 0,
              pointerEvents: "none",
              duration: 0.25,
            },
            "-=0.2",
          );
      }
    },
    { dependencies: [isOpen] },
  );

  return (
    <>
      <div
        ref={backdropRef}
        className="fixed left-0 right-0 bottom-0 top-31.5 bg-black/20 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none"
      />
      <div
        onMouseLeave={() => setIsOpen(false)}
        className="relative z-50 w-full max-w-4xl mx-auto rounded-lg mb-2 mt-4"
      >
        <div
          ref={wrapperRef}
          className="flex items-center justify-center px-3 cursor-pointer rounded-lg h-full"
        >
          {secondary_nav.map((item) => (
            <p
              key={item.id}
              ref={(el) => {
                buttonRefs.current[item.id] = el;
              }}
              onMouseEnter={handleHover}
              className="cursor-pointer body-5 font-medium border py-3.5 px-3 rounded-lg transition-colors duration-200 hover:bg-muted"
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="absolute left-0 right-0 top-full h-2" />
        <div
          ref={panelRef}
          className="absolute left-0 top-[calc(100%+8px)] w-full rounded-lg bg-background shadow-xl opacity-0"
        >
          <div className="p-6">
            <p>Dropdown content goes here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryNav;
