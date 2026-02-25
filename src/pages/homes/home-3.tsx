"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import HeroBannerThirteen from "@/components/hero-banner/hero-banner-thirteen";
import FooterThirteen from "@/layouts/footers/footer-thirteen";
import HeaderFourteen from "@/layouts/headers/header-fourteen";
import AboutOne from "@/components/about/about-one";
import VideoTwo from "@/components/video/video-two";
import Space from "@/components/ui/space";
// animation
import { bounceAnimation, heroBgAnimation, heroTitleAnim, revelAnimationTwo } from "@/utils/title-animation";
import { videoAnimOne, videoAnimTwo } from "@/utils/video-anim";
import { panelTwoAnimation } from "@/utils/panel-animation";
import { aboutAnim } from "@/utils/about-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { serviceMarqueAnim, awardMarqueAnim } from "@/utils/scroll-marque";
import { projectThreeAnimation } from "@/utils/project-anim";
import VideOne from "@/components/video/video-one";
import ServiceThree from "@/components/service/service-three";
import ServiceOne from "@/components/service/service-one";
import LineTextTwo from "@/components/line-text/line-text-2";
import ProjectThree from "@/components/project/project-three";
import AwardSlider from "@/components/award/award-slider";
import BlogOne from "@/components/blog/blog-one";
import ProjectFour from "@/components/project/project-four";
import VideoThree from "@/components/video/video-three";
import AwardOne from "@/components/award/award-one";
import PortfolioSliderHomeFourteen from "@/components/portfolio/slider/portfolio-slider-home-fourteen";

const HomeFourteenMain = () => {
  useScrollSmooth();
  const [headerVisible, setHeaderVisible] = React.useState(false);
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      heroTitleAnim();
      heroBgAnimation();
      // about animation
      aboutAnim()
      // panel & portfolio reveal animations (make ProjectThree behave like home-3)
      panelTwoAnimation();
      revelAnimationTwo();
      // bounce animation
      bounceAnimation();
      // video anim (support both video-one and video-two variants)
      videoAnimOne();
      videoAnimTwo();
      hoverBtn();
      // service marque animation for ServiceThree
      serviceMarqueAnim();
      // award marque animation for AwardSlider
      awardMarqueAnim();
      // project four animation
      projectThreeAnimation();
    }, 100)
    return () => clearTimeout(timer);
  });

  

  return (
    <Wrapper showThemeSetting={false}>
      {/* header area start */}
    <HeaderFourteen visible={headerVisible} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>


             <PortfolioSliderHomeFourteen onIntroComplete={() => setHeaderVisible(true)} />
            {/* portfolio slider end */}


             


       

                 <div id="about-section"><AboutOne /></div>

                   <VideoTwo />
                   {/* <VideOne /> */}

                  <Space height={80} />

                  <ServiceOne />


                      {/* marquee text */}
                              <LineTextTwo />
                              {/* marquee text */}
                  
                              {/* portfolio area */}
                              <ProjectThree />
                              {/* portfolio area */}

                                {/* service area start */}
                                          {/* <ServiceThree /> */}
                                          {/* service area end */}


  <div id="slider-next-section"><AwardOne /></div>
                                   


                                           <ProjectFour />
                                            <VideoThree />
                                           <Space height={120} />

                                              <BlogOne />
          </main>

          {/* footer area */}
          <FooterThirteen />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourteenMain;
