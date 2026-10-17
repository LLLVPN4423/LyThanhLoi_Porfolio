"use client";

import { timeline } from "@/data/timeline";
import { SciFiVideo } from "./SciFiVideo";

const YGG_VIDEO = "/assets/videos/yggdrasil-neon.mp4";

/** Full-bleed neon Yggdrasil video + timeline node overlay; SVG fallback */
export function YggdrasilTree() {
  const n = timeline.length;

  const svgFallback = (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/assets/yggdrasil-commons.svg"
      alt=""
      className="yggdrasil-art mx-auto h-full w-full max-w-none object-contain opacity-90"
    />
  );

  return (
    <div
      className="yggdrasil-wrap relative sticky top-24 hidden min-h-[min(85vh,640px)] w-full md:block"
      aria-hidden
    >
      <div className="absolute inset-0 overflow-hidden">
        <SciFiVideo
          src={YGG_VIDEO}
          className="yggdrasil-video-bleed absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center yggdrasil-video-grade scale-[1.15]"
          fallback={<div className="flex h-full items-center justify-center px-2">{svgFallback}</div>}
        />
        <div className="pointer-events-none absolute inset-0 yggdrasil-edge-fade" />
      </div>

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {timeline.map((entry, i) => {
          const y = 12 + (i / Math.max(n - 1, 1)) * 76;
          return (
            <g key={entry.id}>
              <circle
                cx="50"
                cy={y}
                r="2.8"
                className="ygg-node-pulse"
                fill="#07080f"
                stroke="#22d3ee"
                strokeWidth="0.8"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
              <line
                x1="58"
                y1={y}
                x2="92"
                y2={y}
                stroke="#34d399"
                strokeOpacity="0.35"
                strokeWidth="0.4"
                strokeDasharray="1.5 1.5"
              />
            </g>
          );
        })}
      </svg>

      <p className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] pb-1 text-center font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-emerald-400/60">
        Yggdrasil · chronicle map
      </p>
    </div>
  );
}
