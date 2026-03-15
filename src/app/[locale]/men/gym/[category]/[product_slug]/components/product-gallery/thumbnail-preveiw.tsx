"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { ThumbnailPreviewProps } from "../types";

gsap.registerPlugin(useGSAP);

const ThumbnailPreview = ({ selectedImage }: ThumbnailPreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);

  const moveX = useRef<gsap.QuickToFunc | null>(null);
  const moveY = useRef<gsap.QuickToFunc | null>(null);

  const zoom = 8;
  const lensSize = 150;

  useGSAP(() => {
    if (!lensRef.current) return;

    moveX.current = gsap.quickTo(lensRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    moveY.current = gsap.quickTo(lensRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });
  });

  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const lens = lensRef.current;
    if (!container || !lens) return;

    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const img = container.querySelector("img");
    if (!img) return;

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    const containerRatio = rect.width / rect.height;
    const imageRatio = naturalWidth / naturalHeight;

    let renderedWidth = rect.width;
    let renderedHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imageRatio > containerRatio) {
      renderedWidth = rect.height * imageRatio;
      offsetX = (renderedWidth - rect.width) / 2;
    } else {
      renderedHeight = rect.width / imageRatio;
      offsetY = (renderedHeight - rect.height) / 2;
    }

    const correctedX = x + offsetX;
    const correctedY = y + offsetY;

    const xPercent = (correctedX / renderedWidth) * 100;
    const yPercent = (correctedY / renderedHeight) * 100;

    const clampedX = clamp(x - lensSize / 2, 0, rect.width - lensSize);
    const clampedY = clamp(y - lensSize / 2, 0, rect.height - lensSize);

    moveX.current?.(clampedX);
    moveY.current?.(clampedY);

    lens.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseEnter={() => gsap.to(lensRef.current, { opacity: 1 })}
      onMouseLeave={() => gsap.to(lensRef.current, { opacity: 0 })}
      className="relative w-[78%] aspect-5/6 overflow-hidden cursor-zoom-in"
    >
      <Image
        src={selectedImage}
        alt="cloth"
        width={1000}
        height={1000}
        className="w-full h-full object-cover object-center"
      />
      <div
        ref={lensRef}
        style={{
          width: lensSize,
          height: lensSize,
          backgroundImage: `url(${selectedImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${zoom * 100}%`,
          opacity: 0,
        }}
        className="pointer-events-none absolute top-0 left-0 border border-border bg-background"
      />
    </div>
  );
};

export default ThumbnailPreview;
