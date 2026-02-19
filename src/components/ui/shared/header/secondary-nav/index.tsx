"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { secondary_nav } from "./constants";

const SecondaryNav = () => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(secondary_nav[0].id);

  const isOpen = Boolean(activeId);
  const active_menu_items = secondary_nav.find(
    (item) => item.id === activeId,
  )?.content;

  console.log(active_menu_items);

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
          { opacity: 0, y: -12, height: 0 },
          {
            opacity: 1,
            y: 0,
            height: 300,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.15",
        );
      } else {
        const tl = gsap.timeline();
        tl.to(panel, {
          height: 0,
          opacity: 0,
          y: -12,
          duration: 0.3,
          delay: 0.12,
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
        className="fixed left-0 right-0 bottom-0 top-31.5 bg-black/15 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none"
      />
      <div
        className="relative z-50 w-full max-w-6xl mx-auto rounded-lg mb-2 mt-4"
        // onMouseLeave={() => setActiveId(null)}
      >
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg">
          {secondary_nav.map((item) => (
            <p
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              className={`cursor-pointer body-5 font-medium border py-1.5 px-3 rounded-lg transition-colors duration-200 ${
                activeId === item.id ? "bg-muted" : "hover:bg-muted"
              }`}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="absolute left-0 right-0 top-full h-2" />
        <div className="absolute -top-1 size-3 bg-background  -translate-x-1/2 transition-[left] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        <div
          ref={panelRef}
          className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-fit rounded-md bg-background shadow-xl overflow-hidden"
        >
          <div className="flex justify-between gap-12 h-full">
            <div className="flex ">
              {active_menu_items?.columns.map((column) => (
                <div
                  key={column.id}
                  className="min-w-[180px] border-r h-full p-8"
                >
                  <p className="mb-4 font-semibold text-sm uppercase whitespace-nowrap">
                    {column.title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {active_menu_items?.promo && (
              <div className="w-full">
                <Image
                  src={active_menu_items.promo.image}
                  alt={active_menu_items.promo.label}
                  width={500}
                  height={100}
                  priority
                  className="object-center object-cover rounded-md w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryNav;
