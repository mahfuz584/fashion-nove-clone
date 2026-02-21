"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import { secondary_nav } from "./constants";

const SecondaryNav = () => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [visibleId, setVisibleId] = useState<string | null>(null);

  const isOpen = Boolean(activeId);

  const active_menu_items = secondary_nav.find(
    (item) => item.id === visibleId,
  )?.content;

  useGSAP(
    () => {
      const panel = panelRef.current;
      const backdrop = backdropRef.current;
      if (!panel || !backdrop) return;

      gsap.killTweensOf([panel, backdrop]);

      if (isOpen) {
        const tl = gsap.timeline();
        tl.to(backdrop, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.25,
          ease: "power3.out",
        }).fromTo(
          panel,
          { opacity: 0, y: -12, height: 100 },
          {
            opacity: 1,
            y: 0,
            height: 300,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.15",
        );
      } else {
        const tl = gsap.timeline({
          onComplete: () => setVisibleId(null),
        });

        tl.to(panel, {
          height: 0,
          opacity: 0,
          y: -12,
          duration: 0.3,
          // delay: 0.12,
          ease: "power2.in",
        }).to(
          backdrop,
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.25,
            ease: "power2.in",
          },
          "-=0.15",
        );
      }
    },
    { dependencies: [isOpen] },
  );

  return (
    <>
      <div
        ref={backdropRef}
        className="fixed left-0 right-0 bottom-0 top-31.5 bg-black/15 backdrop-blur-[2px] opacity-0 pointer-events-none"
      />

      <div
        onMouseLeave={() => setActiveId(null)}
        className="relative z-50 w-full max-w-6xl mx-auto rounded-lg mb-2 mt-4"
      >
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg">
          {secondary_nav.map((item) => (
            <p
              key={item.id}
              onMouseEnter={() => {
                setActiveId(item.id);
                setVisibleId(item.id);
              }}
              className={cn(
                "cursor-pointer body-5 font-medium border py-1.5 px-3 rounded-lg transition-colors duration-200 bg-muted",
                activeId === item.id && "hover:bg-muted",
              )}
            >
              {item.label}
            </p>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-full h-2" />

        <div
          ref={panelRef}
          className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-fit rounded-md bg-background shadow-xl overflow-hidden h-0 opacity-0 -translate-y-3"
        >
          <div className="flex justify-between h-full">
            <div className="flex">
              {active_menu_items?.columns.map((column) => (
                <div key={column.id} className="border-r h-full p-8 min-w-65">
                  <p className="mb-4 body-6 font-semibold">{column.title}</p>
                  <div className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <Button
                        key={link.href}
                        component="link"
                        variant="link"
                        href={link.href}
                        className="body-5 font-normal justify-start h-fit p-0 px-3 w-fit"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex py-8 justify-center px-10">
              {active_menu_items?.promo && (
                <Image
                  src={active_menu_items.promo.image}
                  alt={active_menu_items.promo.label}
                  width={500}
                  height={100}
                  priority
                  className="object-center object-cover rounded-md w-80 shrink-0 aspect-video"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryNav;
