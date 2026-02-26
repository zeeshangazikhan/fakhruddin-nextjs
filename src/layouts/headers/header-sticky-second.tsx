'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuThree } from "@/components/svg";
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";

export default function HeaderStickySecond() {
  const [visible, setVisible] = useState(false);
  const [openOffCanvas, setOpenOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the hero/slider section and show sticky header only after it ends
      const heroSection =
        document.getElementById("port-showcase-slider-main") ||
        document.querySelector(".tp-shop-slider-area");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Show when hero/slider bottom edge scrolls above viewport top
        setVisible(heroBottom <= 0);
      } else {
        // Fallback: show after scrolling 600px if no section found
        setVisible(window.scrollY > 600);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`tp-sticky-second-header ${visible ? "tp-sticky-second-visible" : ""}`}
      >
        <div className="container container-1800">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="tp-inner-header-logo tp-header-logo">
                <Link href="/">
                  <Image
                    src="/assets/fakhruddin-img/fakhruddin-logo-f.webp"
                    alt="Fakhruddin Properties Logo"
                    width={160}
                    height={50}
                    priority
                    style={{ maxWidth: "60px", width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-6 col-6">
              <div className="tp-inner-header-right-wrap d-flex align-items-center justify-content-end">
                <div className="tp-inner-header-right-action">
                  <ul>
                    <li>
                      <div className="tp-inner-bar">
                        <button
                          onClick={() => setOpenOffcanvas(true)}
                          className="tp-offcanvas-open-btn"
                        >
                          <span>
                            <MenuThree />
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvasTwo
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffcanvas}
      />
      {/* off canvas */}
    </>
  );
}
