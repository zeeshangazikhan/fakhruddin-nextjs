'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';

const AboutOne = () => {

  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">
                About Fakhruddin Properties
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image width={301} height={376} src={"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"} alt="Dubai skyline" unoptimized />
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image style={{width:"100%", height:"auto"}} width={221} height={278}  src={"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80"} alt="Burj Khalifa" unoptimized />
                <span className="tp-about-2-thumb-text">BUILDING LEGACIES, CREATING FUTURES</span>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              <span>Heritage. Innovation. Community.</span>
              <p className="mb-30">
                Born from the enduring legacy of Fakhruddin Holdings, founded in 1963, Fakhruddin Properties carries forward a tradition rooted in entrepreneurship, integrity, and a deep sense of community, now, has grown into one of the Middle East’s most forward thinking property developers.
              </p>
              <p className="mb-0">
                What started as structures soon became stories of trust, of purpose, of homes that nurture as much as they impress. Every space we build is shaped by a belief that architecture should do more than occupy land; it should enhance life, foster connection, and leave the world a little better than it was found. Today, with a presence spanning the UAE, the UK, and Uganda, Fakhruddin Properties continues to evolve - guided by the same principles that began it all: innovation grounded in responsibility, sustainability shaped by soul, and design that places people at its heart.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutOne;