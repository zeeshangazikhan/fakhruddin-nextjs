"use client";
import React from "react";
import Image from "next/image";

// award images
import a_1 from "@/assets/fakhruddin-img/awards/award-1.webp";
import a_2 from "@/assets/fakhruddin-img/awards/award-2.webp";
import a_3 from "@/assets/fakhruddin-img/awards/award-3.webp";
import a_4 from "@/assets/fakhruddin-img/awards/award-4.webp";
import a_5 from "@/assets/fakhruddin-img/awards/award-5.webp";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    img: a_1,
    subtitle: "x2",
    title: "FWA, Site of the Day",
    date: "Jun 24, 2024",
  },
  {
    id: 2,
    img: a_2,
    subtitle: "x3",
    title: "Awwwards Interior Excellence",
    date: "Nov 24, 2022",
  },
  {
    id: 3,
    img: a_3,
    subtitle: "x1",
    title: "Architectural Design Excellence",
    date: "May 24, 2023",
  },
  {
    id: 4,
    img: a_4,
    subtitle: "x1",
    title: "Best Luxury Real Estate Developer",
    date: "Sep 10, 2023",
  },
  {
    id: 5,
    img: a_5,
    subtitle: "x2",
    title: "Premium Construction & Innovation Award",
    date: "Jun 12, 2023",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({cls="pt-125 pb-125",abStyle=false}: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);

  const handleAccordionToggle = (id: number) => {
    setOpenAccordion(prev => (prev === id ? null : id));
  };

  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Awards <br /> <span>& Recognitions</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Awards
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="list-thumb"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  className={`tp-award-accordion-wrapper ${openAccordion === item.id ? 'tp-award-accordion-open' : ''}`}
                >
                  <div
                    onMouseEnter={() => setActiveThumb(item.id)}
                    onClick={() => handleAccordionToggle(item.id)}
                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                    rel={`tp-award-list-thumb-${item.id}`}
                  >
                    <div className="tp-award-list-content-left d-flex align-items-center">
                      <span>{item.subtitle}</span>
                      <p>{item.title}</p>
                    </div>
                    <div className="tp-award-list-content-right d-flex align-items-center">
                      <span>{item.date}</span>
                      <i className="tp-award-accordion-arrow fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  {/* Mobile accordion image */}
                  <div className="tp-award-accordion-body">
                    <div className="tp-award-accordion-img">
                      <Image src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
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

export default AwardOne;
