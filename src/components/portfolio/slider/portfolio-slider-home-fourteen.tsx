"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface Props {
  onIntroComplete?: () => void;
}

// CSS keyframes injected once
const keyframes = `
@keyframes logoClipReveal {
  0% { clip-path: inset(0 100% 0 0); opacity: 0; }
  15% { opacity: 1; }
  100% { clip-path: inset(0 0% 0 0); opacity: 1; }
}
@keyframes logoGlow {
  0% { filter: brightness(0) invert(1) drop-shadow(0 0 0px rgba(255,255,255,0)); }
  50% { filter: brightness(0) invert(1) drop-shadow(0 0 25px rgba(255,255,255,0.15)); }
  100% { filter: brightness(0) invert(1) drop-shadow(0 0 0px rgba(255,255,255,0)); }
}
@keyframes propLetterIn {
  0% { opacity: 0; transform: translateY(18px); filter: blur(4px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
@keyframes lineExpand {
  0% { width: 0; opacity: 0; }
  100% { width: 140px; opacity: 1; }
}
@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(35px); filter: blur(3px); }
  60% { filter: blur(0px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
@keyframes btnReveal {
  0% { opacity: 0; transform: translateY(20px) scaleX(0.85); }
  100% { opacity: 1; transform: translateY(0) scaleX(1); }
}
@keyframes introFadeOut {
  0% { opacity: 1; transform: scale(1) translateY(0); }
  100% { opacity: 0; transform: scale(1.04) translateY(-15px); }
}
@keyframes scrollIndicator {
  0%, 100% { opacity: 0.4; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(8px); }
}
`;

const PROPERTIES_LETTERS = "Properties".split("");

export default function PortfolioSliderHomeFourteen({ onIntroComplete }: Props) {
  const [phase, setPhase] = useState<"init" | "logo" | "properties" | "hold" | "fadeout" | "reveal">("init");

  useEffect(() => {
    // Start logo animation immediately (no delay)
    setPhase("logo");
  }, []);

  useEffect(() => {
    if (phase === "logo") {
      // Logo clip-reveal plays for ~1.6s, then show properties
      const t1 = setTimeout(() => setPhase("properties"), 2000);
      return () => clearTimeout(t1);
    }
    if (phase === "properties") {
      // Properties letter animation (~1s) + hold time
      const t2 = setTimeout(() => setPhase("hold"), 1600);
      return () => clearTimeout(t2);
    }
    if (phase === "hold") {
      // Hold the brand mark, then start fading it out
      const t3 = setTimeout(() => {
        setPhase("fadeout");
      }, 1000);
      return () => clearTimeout(t3);
    }
    if (phase === "fadeout") {
      // Wait for logo to fully disappear (1.2s fadeout + 600ms breathing room)
      // then show header + text together, slowly and elegantly
      const t4 = setTimeout(() => {
        setPhase("reveal");
        onIntroComplete?.();
      }, 1800);
      return () => clearTimeout(t4);
    }
  }, [phase, onIntroComplete]);

  const handleDiscoverMore = () => {
    const target = document.getElementById("about-section");
    if (target) {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: { y: target, offsetY: 0 },
        ease: "power3.inOut",
        overwrite: "auto",
      });
    }
  };

  const isIntroVisible = phase !== "reveal";
  const isIntroFading = phase === "fadeout";
  const showLogo = phase === "logo" || phase === "properties" || phase === "hold";
  const showProps = phase === "properties" || phase === "hold";

  return (
    <div
      id="port-showcase-slider-main"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          transition: "transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: phase === "reveal" ? "scale(1.05)" : "scale(1)",
        }}
      >
        <source
          src="/assets/video/Treppan%20Living%20Priv%C3%A9%20-%20Fakhruddin%20Properties.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay — same on both slides (reduced darkness) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.22) 50%, rgba(0,0,0,0.28) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content layer */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        {/* ═══ INTRO: Logo + Properties ═══ */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none",
            animation: isIntroFading ? "introFadeOut 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
            opacity: phase === "init" ? 0 : (phase === "reveal" ? 0 : undefined),
          }}
        >
          {/* Logo — clip-path reveal from left to right */}
          <div
            style={{
              animation: showLogo
                ? "logoClipReveal 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards, logoGlow 3s ease-in-out 1.6s 1"
                : "none",
              opacity: phase === "init" ? 0 : undefined,
            }}
          >
            <Image
              src="/assets/fakhruddin-img/fakhruddin-logo-svg.svg"
              alt="Fakhruddin Properties Logo"
              width={520}
              height={160}
              priority
              className="portfolio-slider-logo"
              style={{
                filter: "brightness(0) invert(1)",
                width: "520px",
                height: "auto",
                maxWidth: "520px",
              }}
            />
          </div>

          {/* "Properties" — letter-by-letter staggered animation */}
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "center",
              gap: "0px",
              minHeight: "35px",
            }}
          >
            {PROPERTIES_LETTERS.map((letter, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  fontSize: "clamp(14px, 2vw, 24px)",
                  fontWeight: 300,
                  letterSpacing: "10px",
                  textTransform: "uppercase",
                  fontFamily: "var(--tp-ff-marcellus)",
                  color: "rgba(255,255,255,0.92)",
                  animation: showProps
                    ? `propLetterIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s forwards`
                    : "none",
                  opacity: 0,
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Decorative line */}
          <div
            style={{
              marginTop: "20px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              animation: showProps
                ? "lineExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards"
                : "none",
              width: "0px",
              opacity: 0,
            }}
          />
        </div>

        {/* ═══ MAIN SLIDE: Title + Button ═══ */}
        <div
          style={{
            pointerEvents: phase === "reveal" ? "auto" : "none",
            opacity: phase === "reveal" ? 1 : 0,
            transition: "opacity 0.01s",
          }}
        >
          {/* Line 1 */}
          <span
            style={{
              display: "block",
              fontSize: "clamp(26px, 4.2vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              textTransform: "uppercase",
              fontFamily: "var(--tp-ff-marcellus)",
              color: "#ffffff",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
              animation: phase === "reveal"
                ? "fadeSlideUp 1.6s cubic-bezier(0.33, 1, 0.68, 1) 0.2s forwards"
                : "none",
              opacity: 0,
            }}
          >
            Creating Living
          </span>

          {/* Line 2 */}
          <span
            style={{
              display: "block",
              fontSize: "clamp(26px, 4.2vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              textTransform: "uppercase",
              fontFamily: "var(--tp-ff-marcellus)",
              color: "#ffffff",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
              animation: phase === "reveal"
                ? "fadeSlideUp 1.6s cubic-bezier(0.33, 1, 0.68, 1) 0.5s forwards"
                : "none",
              opacity: 0,
            }}
          >
            Works of Art
          </span>

          {/* Discover More button */}
          <button
            onClick={handleDiscoverMore}
            style={{
              marginTop: "40px",
              padding: "13px 38px",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.35)",
              cursor: "pointer",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              fontFamily: "var(--tp-ff-marcellus)",
              backdropFilter: "blur(3px)",
              animation: phase === "reveal"
                ? "btnReveal 1.4s cubic-bezier(0.33, 1, 0.68, 1) 0.9s forwards"
                : "none",
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
              e.currentTarget.style.letterSpacing = "5px";
              e.currentTarget.style.padding = "13px 44px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.letterSpacing = "3.5px";
              e.currentTarget.style.padding = "13px 38px";
            }}
          >
            Discover More
          </button>
        </div>

        {/* Scroll indicator — bottom of screen */}
        {phase === "reveal" && (
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              animation: "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards",
              opacity: 0,
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--tp-ff-marcellus)",
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: "1px",
                height: "30px",
                background: "rgba(255,255,255,0.3)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "1px",
                  height: "12px",
                  background: "rgba(255,255,255,0.8)",
                  animation: "scrollIndicator 1.8s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
