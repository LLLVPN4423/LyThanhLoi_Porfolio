"use client";

import { SciFiVideo } from "./SciFiVideo";

type Channel = "email" | "github" | null;

type Props = {
  active: Channel;
  className?: string;
};

const PORTAL_VIDEO = "/assets/videos/portal-stargate.mp4";

/** Stargate-style portal video + SVG fallback */
export function SciFiPortal({ active, className = "" }: Props) {
  const tone =
    active === "email"
      ? "sci-fi-portal-cyan"
      : active === "github"
        ? "sci-fi-portal-violet"
        : "sci-fi-portal-idle";

  const svgFallback = (
    <div className="absolute inset-[6%] sci-fi-portal-spin">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/stargate-portal.svg"
        alt=""
        className="h-full w-full object-contain sci-fi-portal-art"
        draggable={false}
      />
    </div>
  );

  return (
    <div className={`relative aspect-square w-full ${className}`} aria-hidden>
      <div className={`sci-fi-portal-glow absolute inset-0 rounded-full ${tone}`} />
      <SciFiVideo
        src={PORTAL_VIDEO}
        className="absolute inset-[2%] h-[96%] w-[96%] rounded-full object-cover portal-video-grade"
        fallback={svgFallback}
      />
      {active === null ? (
        <div className="pointer-events-none absolute inset-[22%] rounded-full border border-dashed border-cyan-glow/25 sci-fi-portal-inner-spin" />
      ) : null}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-text-muted drop-shadow-md">
          Link portal
        </span>
        <p className="mt-1 max-w-[8rem] text-xs text-cyan-glow/90 drop-shadow-md">
          {active === "email"
            ? "Routing · mail"
            : active === "github"
              ? "Routing · git"
              : "Select channel"}
        </p>
      </div>
    </div>
  );
}
