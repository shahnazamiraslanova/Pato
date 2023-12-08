import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Welcome.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
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
        <SwiperSlide
          style={{
            background:
              "url('https://preview.colorlib.com/theme/pato/images/slide1-01.jpg.webp')",
          }}
        >
          <div className="welcome">
            <p style={{
                fontFamily: 'Courgette'
            }}>Welcome</p>
            <h1>PATO PLACE</h1>
            <button>
              <NavLink to="menu">Look Menu</NavLink>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              "url('https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp')",
          }}
        >
          <div className="welcome">
            <p>Welcome</p>
            <h1>PATO PLACE</h1>
            <button>
              <NavLink to="menu">Look Menu</NavLink>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              "url('https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp')",
          }}
        >
          <div className="welcome">
            <p>Welcome</p>
            <h1>PATO PLACE</h1>
            <button>
              <NavLink to="menu">Look Menu</NavLink>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
