"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import Link from "next/link";
import {addEvents, slideNextTransitionStart,slidePrevTransitionStart, verTextFragment} from "@/utils/webgl-anim";
import { WebGL } from "@/plugins";
import type { Swiper as SwiperClass } from 'swiper';
// slider data
const slider_data = [
  {
    id: 1,
    subtitle: "",
    title: "Twenty Years of <br/> Imaging the <br/> Impossibility",
    fontSize: "clamp(42px, 5.5vw, 80px)",
    image: "https://www.fakhruddinproperties.com/wp-content/uploads/2026/02/Treppan-Living-Home-Banner.webp",
  },
  {
    id: 2,
    subtitle: "",
    title: "Creating Living <br/> Works of Art",
    fontSize: "clamp(58px, 8.5vw, 110px)",
    image: "https://www.fakhruddinproperties.com/wp-content/uploads/2026/01/Treppan-Living-PRIVE-GeneralView.webp",
  },
  {
    id: 3,
    subtitle: "",
    title: "DISCOVER THE <br/> IMPOSSIBLE",
    fontSize: "clamp(48px, 7vw, 95px)",
    image: "https://www.fakhruddinproperties.com/wp-content/uploads/2025/12/Exterior-09.webp",
  },

];

// slider setting
const slider_setting: SwiperOptions = {
  direction: "horizontal",
  loop: false,
  slidesPerView:1,
  touchStartPreventDefault: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  simulateTouch: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".tp-slider-dot",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div className="' + className + '"></div>';
    },
  },
};
export default function PortfolioSliderHomeEleven() {
  const webGLContainerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<SwiperClass | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slider_data.length;
  const isThrottledRef = useRef(false);

  // Manually capture wheel events — throttled slide nav, natural release on last/first slide
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const swiper = swiperInstanceRef.current;
      if (!swiper) return;

      // While a slide transition is in progress, block EVERYTHING (page + swiper)
      // so fast scroll can't bleed through to the page
      if (isThrottledRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const onLast  = swiper.activeIndex === totalSlides - 1;
      const onFirst = swiper.activeIndex === 0;

      // On last slide scrolling down — release to page naturally
      if (onLast && e.deltaY > 0) return;
      // On first slide scrolling up — release to page naturally
      if (onFirst && e.deltaY < 0) return;

      // Block page scroll while navigating slides
      e.preventDefault();
      e.stopPropagation();

      // Lock for longer than the slide animation so rapid scroll stays on the correct slide
      isThrottledRef.current = true;
      setTimeout(() => { isThrottledRef.current = false; }, 1100);

      if (e.deltaY > 0) swiper.slideNext();
      else swiper.slidePrev();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [totalSlides]);

  useEffect(() => {
    if (webGLContainerRef.current) {

      const webGL = new WebGL( {
        vertex: verTextFragment().vertex,
			  fragment: verTextFragment().fragment,
      });

      // Instantiate WebGL
      addEvents(webGL)
      // Append renderer element to container
      webGLContainerRef.current.appendChild(webGL.renderer.domElement);

      // Clean up function
      return () => {
        // Stop WebGL rendering
        webGL.stop();
      };
    }
  }, []);
  return (
    <div id="port-showcase-slider-main" ref={sliderRef}>
      {/* Fixed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/assets/video/Treppan%20Living%20Priv%C3%A9%20-%20Fakhruddin%20Properties.mp4" type="video/mp4" />
      </video>
      {/* Overlay to darken video for better text readability */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(0,0,0,0.45)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="port-showcase-slider-spaces p-relative" style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        <div
          className="port-showcase-slider-wrap tp-slider-parallax fix"
          id="showcase-slider-holder"
          data-pattern-img="/assets/img/webgl/1.jpg"
          style={{ background: 'transparent' }}
        >
          <div
            className="swiper-container parallax-slider-active p-relative"
            id="showcase-slider"
          >
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              touchStartPreventDefault={false}
              speed={800}
              effect="fade"
              loop={false}                 
              mousewheel={false}
              simulateTouch={true}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              pagination={{
                el: '.tp-slider-dot',
                clickable: true,
              }}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              onSwiper={(swiper) => { swiperInstanceRef.current = swiper; }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              onSlidePrevTransitionStart={slidePrevTransitionStart}
              onSlideNextTransitionStart={slideNextTransitionStart}
              id="trigger-slides"
            >
              {slider_data.map((item,i) => (
                <SwiperSlide key={item.id}>
                  <div className={`slide-wrap ${i === 0 ? 'active' : ''}`} data-slide={i}></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="port-showcase-slider-item">
                          <div className="port-showcase-slider-content">
                            <span className="port-showcase-slider-subtitle" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px', display: 'none' }}>
                              {item.subtitle}
                            </span>
                            <h4 className="port-showcase-slider-title" style={{ fontSize: item.fontSize, fontWeight: 300, lineHeight: 1.1, letterSpacing: '-2.5px', marginTop: '0px', textTransform: 'uppercase', fontFamily: 'var(--tp-ff-marcellus)', color: '#ffffff', textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'}}>
                              <Link
                                href="#"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="tp-showcase-arrow-box">
              <button className="tp-showcase__button-next swiper-next">
                <i className="fa-light fa-angle-up"></i>
              </button>
              <button className="tp-showcase__button-prev swiper-prev">
                <i className="fa-light fa-angle-down"></i>
              </button>
            </div>
            <div className="tp-slider-dot d-none d-md-block"></div>
            <div className="port-showcase-slider-social tp-hover-btn-wrapper d-none d-md-block" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              <Link className="tp-hover-btn-item" href="#" title="Facebook" style={{ marginBottom: '15px' }}>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link className="tp-hover-btn-item" href="#" title="Instagram" style={{ marginBottom: '15px' }}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link className="tp-hover-btn-item" href="#" title="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  canvas slider - hidden for video background */}
      <div id="canvas-slider" className="canvas-slider" ref={webGLContainerRef} style={{ display: 'none' }}>
        {slider_data.map((item, index) => (
        <div key={index} className="slider-img" data-slide={index}>
          <Image
            className="slide-img"
            src={item.image}
            alt={item.title}
            width={1920}
            height={1080}
            style={{ height: "auto" }}
          />
        </div>
        ))}
      </div>
      {/* canvas slider  */}
    </div>
  );
}
