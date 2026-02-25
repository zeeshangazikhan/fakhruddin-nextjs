"use client";
import React from "react";
import BackToTop from "@/components/back-to-top";
import ThemeSetting from "@/components/theme-setting";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
  showThemeSetting?: boolean;
}

const Wrapper = ({ children, showBackToTop=true, showThemeSetting=true }: WrapperProps) => {
  return (
    <React.Fragment>
      {children}
      {showBackToTop && <BackToTop />}
      {showThemeSetting && <ThemeSetting />}
    </React.Fragment>
  );
};

export default Wrapper;
