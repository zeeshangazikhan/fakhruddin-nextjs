import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuThree } from "@/components/svg";
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";

type IHeaderTenProps = {
  /** When provided, offcanvas state is managed externally (no internal MobileOffcanvasTwo rendered) */
  externalOpenOffcanvas?: boolean;
  externalSetOpenOffcanvas?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderTen({ externalOpenOffcanvas, externalSetOpenOffcanvas }: IHeaderTenProps = {}) {
  const [internalOpen, setInternalOpen] = React.useState(false);

  // Use external state if provided, otherwise fall back to internal
  const isExternallyControlled = externalOpenOffcanvas !== undefined && externalSetOpenOffcanvas !== undefined;
  const openOffCanvas = isExternallyControlled ? externalOpenOffcanvas! : internalOpen;
  const setOpenOffcanvas = isExternallyControlled ? externalSetOpenOffcanvas! : setInternalOpen;

  return (
    <>
    <header className="tp-header-height z-index-5">
      <div className="tp-inner-header-area tp-inner-header-style-3 tp-inner-header-mob-space pt-40 pl-80 pr-80">
        <div className="container container-1800">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="tp-inner-header-logo tp-header-logo">
                <Link href="/">
                  <Image 
                    src="/assets/fakhruddin-img/fakhruddin-logo-svg.svg" 
                    alt="Fakhruddin Properties Logo" 
                    width={160} 
                    height={50} 
                    priority
                    style={{filter: 'brightness(0) invert(1)', width: 'auto', height: 'auto'}} 
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
                        <button onClick={() => setOpenOffcanvas(true)} className="tp-offcanvas-open-btn">
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
      </div>
    </header>

     {/* off canvas — only rendered here when state is managed internally (home-1, home-2, etc.) */}
     {!isExternallyControlled && (
       <MobileOffcanvasTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffcanvas} />
     )}
    </>
  );
}
