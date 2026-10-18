"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const PORTFOLIO_INTRO_STORAGE_KEY = "ltl-portfolio-intro-seen";

const INTRO_SRC = "/assets/videos/portfolio-intro.mp4";
const INTRO_DURATION_MS = 5000;
const FADE_MS = 700;

type Props = {
  onComplete: () => void;
};

export function PortfolioIntro({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);
  const [exiting, setExiting] = useState(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    sessionStorage.setItem(PORTFOLIO_INTRO_STORAGE_KEY, "1");
    setExiting(true);
    window.setTimeout(onComplete, FADE_MS);
  }, [onComplete]);

  useEffect(() => {
    document.body.classList.add("portfolio-intro-active");
    return () => document.body.classList.remove("portfolio-intro-active");
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => finish();
    video.addEventListener("ended", onEnded);

    const play = () => {
      video.play().catch(() => {
        /* autoplay blocked — timer still dismisses */
      });
    };
    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });

    const timer = window.setTimeout(finish, INTRO_DURATION_MS + 120);

    return () => {
      video.removeEventListener("ended", onEnded);
      window.clearTimeout(timer);
    };
  }, [finish]);

  return (
    <div
      className={`portfolio-intro z-[999] flex items-center justify-center overflow-hidden bg-void ${exiting ? "portfolio-intro-exit" : ""}`}
      role="dialog"
      aria-label="Portfolio opening sequence"
    >
      <video
        ref={videoRef}
        className="portfolio-intro-video absolute inset-0 h-full w-full"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={INTRO_SRC} type="video/mp4" />
      </video>

      <div className="portfolio-intro-vignette pointer-events-none absolute inset-0" aria-hidden />

      <button
        type="button"
        onClick={finish}
        className="absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(5.5rem,calc(env(safe-area-inset-top)+4.5rem))] z-10 rounded-md border border-panel-border/80 bg-void/70 px-3 py-1.5 text-xs text-text-muted backdrop-blur-sm hover:text-cyan-glow"
      >
        Skip intro
      </button>
    </div>
  );
}
