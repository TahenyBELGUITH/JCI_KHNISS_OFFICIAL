import React from "react";
import "./Event.css";
import EventWave from "../../Images/Decor/eventWave.svg";

import { introTable } from "../../Data/Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Event = () => {
  return (
    <div id="event">
      {/* <img src={EventWave} /> */}
      <h1 className="intro-span event-heading">Discover Our Activities</h1>

      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {introTable.map((introImage, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={introImage.src} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
      <a
        href="https://www.facebook.com/JCI-Khniss-318957112019536"
        target="_blank"
      >
        <button type="button">Discover more events!</button>
      </a>
    </div>
  );
};

export default Event;
