import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Cap from "../assets/Cap.jpg";
import EarringSwiper from "../assets/EarringSwiper.jpg";
import Ring from "../assets/Ring.jpg";

export default function MySwiper() {

  return (
    <div className="">
      <SwiperComponent
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[600px]">
          <img src={EarringSwiper} alt="Earring" />
        </SwiperSlide>
        <SwiperSlide className="h-[600px]">
          <img src={Cap} alt="Cap" />
        </SwiperSlide>
        <SwiperSlide className="h-[600px]">
          <img src={Ring} alt="Ring" />
        </SwiperSlide>
      </SwiperComponent>
    </div>
  );
}
