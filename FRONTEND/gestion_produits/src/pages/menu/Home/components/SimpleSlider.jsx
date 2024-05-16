// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../../../../assets/images/banner/banner_1.png";
import banner2 from "../../../../assets/images/banner/banner_2.jpg";
import banner3 from "../../../../assets/images/banner/banner_3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const SimpleSlider = () => {
  return (
    <div className="swiper">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper border-2"
      >
        <SwiperSlide>
          <img src={banner1} alt="Image Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Image Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Image Banner 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
