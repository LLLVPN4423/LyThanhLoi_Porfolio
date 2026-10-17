"use client";

import { timeline } from "@/data/timeline";

const YGG_ART = "/assets/yggdrasil-cosmic.png";

/** Full-bleed cosmic Yggdrasil art + timeline node overlay */
export function YggdrasilTree() {
  const n = timeline.length;

  return (
    <div
      className="yggdrasil-wrap relative sticky top-24 hidden min-h-[min(85vh,640px)] w-full md:block"
      aria-hidden
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={YGG_ART}
          alt=""
          className="yggdrasil-png-bleed absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center scale-[1.08]"
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
