"use client";

import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";

export const SplineWrapper = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return isDesktop ? (
    <div className="sticky top-0 h-screen">
      <Spline
        // scene="https://prod.spline.design/EnrrqgBMC0Dgrjos/scene.splinecode"
        scene="https://prod.spline.design/oH19N8SNWFZLV8gb/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  ) : null;
};
