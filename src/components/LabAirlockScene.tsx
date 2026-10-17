"use client";

import { SciFiVideo } from "./SciFiVideo";

type Props = {
  doorOpen: boolean;
  smokeActive: boolean;
};

const AIRLOCK_VIDEO = "/assets/videos/airlock-door.mp4";

/** Hailuo airlock clip + SVG fallback; smoke + optional door panels */
export function LabAirlockScene({ doorOpen, smokeActive }: Props) {
  const svgFallback = (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/semiotic-bulkhead.svg"
          alt=""
          className="h-full w-auto max-w-full object-contain lab-semiotic-tint"
        />
      </div>
      <div className={`lab-door-wrap relative h-full w-full ${doorOpen ? "lab-door-open" : ""}`}>
        <div className="lab-door lab-door-left absolute inset-y-0 left-0 z-10 w-1/2 overflow-hidden border-r border-cyan-glow/50 bg-void-elevated/95" />
        <div className="lab-door lab-door-right absolute inset-y-0 right-0 z-10 w-1/2 overflow-hidden border-l border-cyan-glow/50 bg-void-elevated/95" />
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto mt-10 h-[70%] w-[78%] overflow-hidden rounded-lg border border-cyan-glow/20 bg-void">
      <SciFiVideo
        src={AIRLOCK_VIDEO}
        className="absolute inset-0 h-full w-full object-cover lab-video-grade"
        fallback={svgFallback}
      />

      <div
        className={`pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-void via-transparent to-void/40 ${doorOpen ? "opacity-60" : "opacity-90"}`}
      />

      {!doorOpen ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <span className="rounded border border-cyan-glow/40 bg-void/80 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.35em] text-cyan-glow uppercase">
            airlock sealed
          </span>
        </div>
      ) : null}

      <div className={`lab-smoke pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[55%] ${smokeActive ? "lab-smoke-active" : ""}`} />
    </div>
  );
}
