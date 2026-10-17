"use client";

import { SciFiVideo } from "./SciFiVideo";

type Props = {
  doorOpen: boolean;
  smokeActive: boolean;
  fullBleed?: boolean;
};

const AIRLOCK_VIDEO = "/assets/videos/airlock-door.mp4";

/** Hailuo airlock clip full-bleed; SVG fallback when motion reduced */
export function LabAirlockScene({ doorOpen, smokeActive, fullBleed = true }: Props) {
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
    <div
      className={
        fullBleed
          ? "pointer-events-none absolute inset-0 overflow-hidden"
          : "relative mx-auto h-full w-full overflow-hidden"
      }
    >
      <SciFiVideo
        src={AIRLOCK_VIDEO}
        className="lab-video-bleed absolute inset-0 h-full w-full min-h-full min-w-full object-cover lab-video-grade scale-[1.12]"
        fallback={svgFallback}
      />

      <div
        className={`pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-void/90 via-void/15 to-void/50 ${doorOpen ? "opacity-50" : "opacity-70"}`}
      />

      {!doorOpen ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <span className="rounded border border-cyan-glow/40 bg-void/80 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.35em] text-cyan-glow uppercase">
            airlock sealed
          </span>
        </div>
      ) : null}

      <div
        className={`lab-smoke pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[55%] ${smokeActive ? "lab-smoke-active" : ""}`}
      />
    </div>
  );
}
