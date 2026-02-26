"use client";

import BestSellerCard from "@/app/[locale]/components/best-seller-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, HashNavigation, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSliderProps } from "./types";

const ProductSlider = ({ sliderItems }: ProductSliderProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevHandler = () => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  };

  return (
    <>
      <Swiper
        freeMode
        speed={500}
        grabCursor
        hashNavigation={{ watchState: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        onSwiper={(swiper) => {
          setSwiperRef(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[FreeMode, Navigation, HashNavigation]}
      >
        {sliderItems.map((category) => (
          <SwiperSlide key={category.id}>
            <BestSellerCard cardItem={category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-end gap-2.5 mt-5">
        <Button
          size="icon-lg"
          onClick={prevHandler}
          disabled={isBeginning}
          className="border rounded-full"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <Button
          size="icon-lg"
          onClick={nextHandler}
          disabled={isEnd}
          className="border rounded-full"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </>
  );
};

export default ProductSlider;
