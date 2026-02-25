'use client';
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";

const hero_data = [
  {
    id: 2,
    bg: "https://www.fakhruddinproperties.com/wp-content/uploads/2026/01/Treppan-Living-PRIVE-GeneralView.webp",
    subtitle: "A fully serviced wellness residence",
    title: "Treppan Living Privé",
  },
  {
    id: 3,
    bg: "https://www.fakhruddinproperties.com/wp-content/uploads/2025/12/Exterior-09.webp",
    subtitle: "The first longevity living project with 53 amenities on Dubai Islands",
    title: "Treppan Serenique",
  },
  {
    id: 4,
    bg: "https://www.fakhruddinproperties.com/wp-content/uploads/2026/01/Copy-of-3BHK-Living-Area.webp",
    subtitle: "A family and community focused project in JVT with 2 floors of amenities",
    title: "Treppan Tower",
  },
  {
    id: 6,
    bg: "https://www.fakhruddinproperties.com/wp-content/uploads/2025/12/Podium-Aerial-Shot-Evening-Shot_10.webp",
    subtitle: "Experience Elevated Living in the heart of JVC",
    title: "Maimoon Gardens",
  },
];

export default function HeroBannerThirteen() {
  const progressBar = useRef<HTMLSpanElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const slider_setting: SwiperOptions = {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#paginations",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        const zero = total > 9 ? "" : "0";
        const index = zero + current;
        const all = zero + total;
        const html = `<div class="shop-slider-pagination">
                  <span>${index}</span>
                  <span>${all}</span>
                </div>`;
        return html;
      },
    },
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="tp-shop-slider-area p-relative">
      <div className="shop-slider-wrapper">
        <Swiper
          {...slider_setting}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="swiper-container tp-shop-slider-active"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onAutoplayTimeLeft={(s, time, progress) => {
            progressBar.current && (progressBar.current.style.transform = `scaleX(calc(1 - ${progress}))`);
          }}
        >
          <div className="tp-shop-slider-arrow-box">
            <button
              ref={nextRef}
              className="tp-shop-next"
              onClick={handlePrev}
            >
              <i className="fa-light fa-angle-left"></i>
            </button>
            <button
              ref={prevRef}
              className="tp-shop-prev"
              onClick={handleNext}
            >
              <i className="fa-light fa-angle-right"></i>
            </button>
          </div>

          {hero_data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="tp-shop-slider-bg tp-shop-slider-ovarlay">
                <div
                  className="tp-shop-slider-thumb"
                  data-background="assets/img/inner-shop/home/slider-1.jpg"
                  style={{ backgroundImage: `url(${item.bg})` }}
                ></div>
                <div className="container container-1300">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="tp-shop-slider-content z-index">
                        <div className="tp-shop-slider-title-box">
                          <span className="tp-shop-slider-subtitle">
                            {item.subtitle}
                          </span>
                          <h2
                            className="tp-shop-slider-title"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h2>
                        </div>
                        <div className="tp-shop-slider-btn-box">
                          <Link className="tp-shop-btn" href="#">
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="fraction-wrapper d-none d-lg-block">
            <div id="paginations"></div>
            <div className="shop-slider-progress-bar">
              <span ref={progressBar}></span>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
