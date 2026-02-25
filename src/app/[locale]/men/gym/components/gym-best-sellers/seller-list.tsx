"use client";

import BestSellerCard from "@/app/[locale]/components/best-seller-card";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, HashNavigation, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { menBestSellers } from "../constants";

const SellerLists = () => {
  return (
    <Swiper
      draggable
      freeMode={true}
      grabCursor={true}
      navigation={true}
      modules={[FreeMode, Navigation, HashNavigation]}
      hashNavigation={{
        watchState: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {menBestSellers.map((category) => (
        <SwiperSlide key={category.id}>
          <BestSellerCard cardItem={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SellerLists;
