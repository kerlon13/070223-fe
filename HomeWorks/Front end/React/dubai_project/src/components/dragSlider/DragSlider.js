import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './DragSlider.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

import image from "../../assets/drag_slider/1.svg"
import image2 from "../../assets/drag_slider/2.svg"
import image3 from "../../assets/drag_slider/3.svg"
export default function DragSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image}></img></SwiperSlide>
        <SwiperSlide><img src={image2}></img></SwiperSlide>
        <SwiperSlide ><img src={image3}></img></SwiperSlide>
        <SwiperSlide><img src={image}></img></SwiperSlide>
        <SwiperSlide><img src={image}></img></SwiperSlide>
        <SwiperSlide><img src={image2}></img></SwiperSlide>
        <SwiperSlide ><img src={image3}></img></SwiperSlide>
        <SwiperSlide><img src={image}></img></SwiperSlide>
        <SwiperSlide><img src={image}></img></SwiperSlide>
        <SwiperSlide><img src={image2}></img></SwiperSlide>
        <SwiperSlide ><img src={image3}></img></SwiperSlide>
        <SwiperSlide><img src={image}></img></SwiperSlide>
      </Swiper>
    </>
  );
}
