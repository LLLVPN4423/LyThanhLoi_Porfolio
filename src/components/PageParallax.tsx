"use client";

import { useEffect } from "react";

/** Drives site-wide parallax via CSS variables on scroll */
export function PageParallax() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      root.style.setProperty("--scroll-y", "0px");
      root.style.setProperty("--scroll-y-slow", "0px");
      root.style.setProperty("--scroll-y-fast", "0px");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      root.style.setProperty("--scroll-y", `${y}px`);
      root.style.setProperty("--scroll-y-slow", `${y * 0.22}px`);
      root.style.setProperty("--scroll-y-mid", `${y * 0.12}px`);
      root.style.setProperty("--scroll-y-fast", `${y * 0.38}px`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
