"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import HeaderTen from "@/layouts/headers/header-ten";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
import ThemeSetting from "@/components/theme-setting";
import AboutOne from "@/components/about/about-one";
import AwardOne from "@/components/award/award-one";
import TeamOne from "@/components/team/team-one";
// internal imports

const HomeElevenMain = () => {
  useScrollSmooth();
  return (
    <div>
      {/* header area start */}
      {/* <HeaderTen /> */}
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio slider start */}
            {/* <PortfolioSliderHomeEleven /> */}
            {/* portfolio slider end */}


               {/* <div id="slider-next-section"><AwardOne /></div> */}
            {/* award area */}

       
         <p>Home 11</p>
           
          </main>
             
        </div>
      
      </div>

      {/* theme switcher */}
   
      {/* theme switcher */}
    </div>
  );
};

export default HomeElevenMain;
