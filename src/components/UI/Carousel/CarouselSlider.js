// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
export default function CarouselSlider(props) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/1920x600" alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/1920x600" alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/1920x600" alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/1920x600" alt="slide4" />
      </SwiperSlide>
    </Swiper>
  );
}
