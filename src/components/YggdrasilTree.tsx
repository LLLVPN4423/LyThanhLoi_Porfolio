"use client";

import { timeline } from "@/data/timeline";

/** Yggdrasil world tree — Wikimedia CC BY 3.0 + timeline node sync */
export function YggdrasilTree() {
  const n = timeline.length;

  return (
    <div className="yggdrasil-wrap relative hidden min-h-[420px] w-full max-w-[220px] md:block" aria-hidden>
      <div className="relative h-full min-h-[420px] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/yggdrasil-commons.svg"
          alt=""
          className="yggdrasil-art mx-auto h-[88%] w-full max-w-[200px] object-contain opacity-90"
        />
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-0 h-full w-full"
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
      </div>
      <p className="mt-2 text-center font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-emerald-400/60">
        Yggdrasil · chronicle map
      </p>
      <p className="sr-only">Tree image: Wikimedia Yggdrasil.svg (CC BY 3.0)</p>
    </div>
  );
}
