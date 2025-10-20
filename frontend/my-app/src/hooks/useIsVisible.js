"use client";
import { useEffect, useState } from "react";

export const useIsVisible = ({ endpoint = 768 }) => {
  if (typeof window === "undefined") return null;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= endpoint) setIsVisible(true);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [endpoint, window.innerWidth]);
  return isVisible;
};
