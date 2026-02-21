"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.07,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
