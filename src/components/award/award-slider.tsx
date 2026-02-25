"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

// import award images
import award_1 from "@/assets/fakhruddin-img/awards/award-1.webp";
import award_2 from "@/assets/fakhruddin-img/awards/award-2.webp";
import award_3 from "@/assets/fakhruddin-img/awards/award-3.webp";
import award_4 from "@/assets/fakhruddin-img/awards/award-4.webp";
import award_5 from "@/assets/fakhruddin-img/awards/award-5.webp";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  autoplay: false,
  spaceBetween: 40,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};

// award data
const award_data = [
  {
    id: 1,
    image: award_1,
  },
  {
    id: 2,
    image: award_2,
  },
  {
    id: 3,
    image: award_3,
  },
  {
    id: 4,
    image: award_4,
  },
  {
    id: 5,
    image: award_5,
  },
  {
    id: 6,
    image: award_1,
  },
];

export default function AwardSlider() {
  return (
    <div
      className="tp-award-area pt-120 pb-120 fix"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="tp-award-title-wrap">
          <div className="tp-award-title-box tp_fade_bottom">
            <h4 className="tp-award-title">
              Awards & Recognition
            </h4>
          </div>
        </div>
      </div>
      <div className="tp-award-wrap">
        <Swiper
          {...slider_setting}
          className="swiper-container tp-award-slider-active"
        >
          {award_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="tp-award-item"
                style={{
                  backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
                }}
              >
                <div className="tp-award-image">
                  <Image 
                    src={item.image} 
                    alt="award" 
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
