"use client";

import React from "react";
import { BackImage, CarouselWrap, SwiperBox } from "./carousel.s";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import backImg from "@/assets/trash/carousel-back.png";

const imgs = [
  { img: backImg },
  { img: backImg },
  { img: backImg },
  { img: backImg },
];

export const Carousel = () => {
  return (
    <CarouselWrap>
      <SwiperBox>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {imgs.map(({ img }, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <BackImage
                src={img.src}
                width={689}
                height={460}
                alt="carousel-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperBox>
    </CarouselWrap>
  );
};
