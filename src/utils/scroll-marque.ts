import { gsap } from "gsap";

const getJQ = () => typeof window !== "undefined" ? (window as any).jQuery || (window as any).$ : null;

function teamMarqueAnim() {
  const teamItem = document.querySelector(".tp-team-item");
  if (teamItem) {
    gsap.set(".tp-team-item.marque", {
      x: "25%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".tp-team-area ",
          start: "-1000 10%",
          end: "bottom 20%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".tp-team-item.marque ", {
        x: "-100%",
      });
  }
}

function serviceMarqueAnim() {
  const serviceItem = document.querySelector(".tp-service-4-item");
  if (serviceItem) {
    gsap.set(".tp-team-item", {
      x: "25%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".tp-service-4-area",
          start: "-1000 10%",
          end: "1000 30%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".tp-service-4-item ", {
        x: "-200%",
      });
  }
}



// home 5 hero 
function heroScrollTextAnim() {
  const $ = getJQ();
  let ht = gsap.matchMedia();
  ht.add("(min-width: 576px)", () => {

    /* portfolio animation start */
    if ($('.tp-hero-5-area').length > 0) {

      gsap.timeline({
        scrollTrigger: {
          trigger: '.tp-hero-5-area ',
          start: 'top 30%',
          end: 'bottom 20%',
          scrub: true,
          invalidateOnRefresh: true
        }
      })
        .to('.tp-hero-5-title ', {
          x: '-25%'
        });
      gsap.set('.tp-hero-5-title', {
        x: '18%'
      });

    }

  });
};


function movingImageSlider() {
  let mv = gsap.matchMedia();
  mv.add("(min-width: 768px)", () => {
    // Moving Gallery		
    gsap.utils.toArray('.moving-gallery').forEach((section: any, index: number) => {
      const w = section.querySelector('.wrapper-gallery');
      const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        }
      });
    });
  });
}

function awardMarqueAnim() {
  const awardItem = document.querySelector(".tp-award-item");
  if (awardItem) {
    gsap.set(".tp-award-item", {
      x: "25%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".tp-award-area",
          start: "-1000 10%",
          end: "1000 30%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".tp-award-item", {
        x: "-200%",
      });
  }
}

export { teamMarqueAnim, serviceMarqueAnim, heroScrollTextAnim, movingImageSlider, awardMarqueAnim };
