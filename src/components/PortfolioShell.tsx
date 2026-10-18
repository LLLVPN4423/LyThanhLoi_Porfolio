"use client";

import { useCallback, useEffect, useState } from "react";
import { PORTFOLIO_INTRO_STORAGE_KEY, PortfolioIntro } from "./PortfolioIntro";

type Props = {
  children: React.ReactNode;
};

function shouldSkipIntro(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  return sessionStorage.getItem(PORTFOLIO_INTRO_STORAGE_KEY) === "1";
}

export function PortfolioShell({ children }: Props) {
  const [phase, setPhase] = useState<"pending" | "intro" | "done">("pending");
  const [unveil, setUnveil] = useState(false);

  useEffect(() => {
    setPhase(shouldSkipIntro() ? "done" : "intro");
  }, []);

  useEffect(() => {
    if (phase !== "done") return;
    const id = window.requestAnimationFrame(() => setUnveil(true));
    return () => window.cancelAnimationFrame(id);
  }, [phase]);

  const onIntroComplete = useCallback(() => setPhase("done"), []);

  const introDone = phase === "done";
  const showIntro = phase === "intro";

  return (
    <>
      {showIntro ? <PortfolioIntro onComplete={onIntroComplete} /> : null}
      <div
        className={`portfolio-unveil-root transition-opacity duration-700 ease-out ${introDone ? "opacity-100" : "opacity-0"} ${unveil ? "portfolio-unveil-active" : ""}`}
        aria-hidden={!introDone}
      >
        {children}
      </div>
    </>
  );
}
