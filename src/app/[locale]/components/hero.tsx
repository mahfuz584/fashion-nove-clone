"use client";

import { Button } from "@/components/ui/button";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function VideoHero() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/3127278/"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center flex-col justify-center h-full gap-4">
        <p className="promo-title text-white">UP TO 50% OFF</p>
        <Button
          component="link"
          href="/shop"
          endIcon={<IoIosArrowDroprightCircle className="size-6.5" />}
          className="py-6 px-5 bg-tansparent border border-white hover:border-transparent text-2xl uppercase rounded-none"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
}
