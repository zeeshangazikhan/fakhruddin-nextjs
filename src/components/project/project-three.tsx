"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import port_1 from "@/assets/img/home-04/portfolio/port-1.jpg";
import port_2 from "@/assets/img/home-04/portfolio/port-2.jpg";
import port_3 from "@/assets/img/home-04/portfolio/port-3.jpg";
import port_4 from "@/assets/img/home-04/portfolio/port-4.jpg";

// portfolio data
const portfolio_data = [
  {
    id: 1,
    title: "Treppan Living Privé",
    category: "Residential",
    img: port_1,
  },
  {
    id: 2,
    title: "Treppan Serenique Residences",
    category: "Luxury Living",
    img: port_2,
  },
  {
    id: 3,
    title: "Treppan Tower",
    category: "Commercial",
    img: port_3,
  },
  {
    id: 4,
    title: "Hatimi Residences",
    category: "Architecture",
    img: port_4,
  },
];

export default function ProjectThree() {
  return (
    <div
      className="tp-project-4-area pb-120 project-panel-area"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {portfolio_data.map((item, index) => (
              <div
                key={item.id}
                className="tp-project-4-bg project-panel"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Link href="#" style={{ display: "block", height: "100%" }}>
                  {/* Image */}
                  <div className="tp-project-4-thumb" style={{ height: "100%" }}>
                    <Image
                      src={item.img}
                      alt="port-thumb"
                      style={{ height: "100%", width: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      // Reduced overlay darkness
                      background: "rgba(0,0,0,0.20)",
                      zIndex: 1,
                    }}
                  />

                  {/* Index number top-right */}
                  <div
                    style={{
                      position: "absolute",
                      top: "30px",
                      right: "40px",
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "3px",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid rgba(255,255,255,0.30)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      ↗
                    </div>
                  </div>

                  {/* Text content — centered */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "40px 60px",
                    }}
                  >
                    {/* Category tag */}
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.60)",
                        marginBottom: "16px",
                        borderBottom: "1px solid rgba(255,255,255,0.25)",
                        paddingBottom: "12px",
                      }}
                    >
                      {item.category}
                    </span>

                    {/* Title */}
                    <h4
                      className="tp_reveal_anim-2"
                      style={{
                        fontSize: "clamp(22px, 3vw, 48px)",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        letterSpacing: "-0.3px",
                        color: "#ffffff",
                        fontFamily: "var(--tp-ff-marcellus)",
                        margin: 0,
                        maxWidth: "700px",
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
