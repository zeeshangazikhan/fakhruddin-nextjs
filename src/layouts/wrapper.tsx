"use client";
import React, { useEffect } from "react";
import BackToTop from "@/components/back-to-top";
import ThemeSetting from "@/components/theme-setting";

// Load jQuery and Bootstrap
if (typeof window !== "undefined") {
  try {
    const jq = require("jquery");
    (window as any).jQuery = jq;
    (window as any).$ = jq;
  } catch (e) {
    // jQuery will be loaded from CDN
  }
  try {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  } catch (e) {
    // Bootstrap not available
  }
}

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
  showThemeSetting?: boolean;
}

const Wrapper = ({ children, showBackToTop=true, showThemeSetting=true }: WrapperProps) => {
  useEffect(() => {
    // Ensure jQuery is available globally from CDN
    if (typeof window !== "undefined" && !(window as any).jQuery) {
      const script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-4.0.0.min.js';
      script.async = true;
      script.onload = () => {
        if (typeof window !== "undefined" && (window as any).jQuery) {
          (window as any).$ = (window as any).jQuery;
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <React.Fragment>
      {children}
      {showBackToTop && <BackToTop />}
      {showThemeSetting && <ThemeSetting />}
    </React.Fragment>
  );
};

export default Wrapper;
