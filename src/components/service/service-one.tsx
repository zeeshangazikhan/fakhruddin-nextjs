import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

// service data
const service_data = [
  {
    id: 1,
    title: "A Legacy since 1963",
    desc: "Fakhruddin Properties is part of Fakhruddin Holdings, a UAE-born conglomerate with a diverse portfolio spanning multiple industries.",
    icon: s_1,
  },
  {
    id: 2,
    title: "Industry Leader in Sustainable Developments",
    desc: "Renowned for sustainability, Fakhruddin Properties has won 20+ awards and was twice recognized by Forbes Middle East among the region’s most impactful real estate leaders.",
    icon: s_2,
  },
  {
    id: 3,
    title: "Wellness-Focused Projects",
    desc: "Every project is designed to enhance well-being, integrating features and amenities that elevate health, wellness, comfort, and community living.",
    icon: s_3,
  },
  {
    id: 4,
    title: "Revolutionary AI-enabled Infrastructure",
    desc: "Pioneering AI-enabled infrastructure, our smart communities anticipate residents’ needs, combining convenience, connectivity, and futuristic living.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp-char-animation">
                <span className="hide-on-mobile">into every blueprint.</span>
              </span>
              <h4 className="tp-section-title tp-char-animation">
                Award-winning
 

 
<br />
                <span>ecosystem</span>
              </h4>
            </div>


          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="#">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
