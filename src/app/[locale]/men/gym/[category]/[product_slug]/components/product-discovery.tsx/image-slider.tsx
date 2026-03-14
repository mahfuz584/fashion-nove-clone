"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageSliderProps } from "../types";

const ImageSlider = ({ images, title, classes }: ImageSliderProps) => {
  return (
    <div className={cn(classes?.root)}>
      <div className="flex justify-between mb-3">
        <p className="body-6 font-extrabold">{title}</p>
        <Button
          variant="link"
          component="link"
          href="#"
          className="p-0 h-fit hover:border-none border-none hover:text-tertiary-foreground underline"
        >
          View All
        </Button>
      </div>
      <Swiper
        freeMode
        loop
        speed={1000}
        grabCursor
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 5 },
        }}
        modules={[FreeMode, Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt="slider-image"
              width={500}
              height={500}
              className="object-cover w-full aspect-4/6"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
