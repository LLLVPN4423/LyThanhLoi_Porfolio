"use client";

import { timeline } from "@/data/timeline";

/** Stylized world-tree aligned to timeline entry count */
export function YggdrasilTree() {
  const n = timeline.length;
  const nodeYs = timeline.map((_, i) => 8 + (i / Math.max(n - 1, 1)) * 84);

  return (
    <div className="yggdrasil-wrap relative hidden h-full min-h-[420px] w-full max-w-[200px] md:block" aria-hidden>
      <svg viewBox="0 0 120 100" className="h-full w-full text-violet-glow/80" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="ygg-trunk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
          </linearGradient>
          <filter id="ygg-glow">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Roots — post-apocalyptic garden */}
        <path
          d="M60 92 Q45 88 30 95 M60 92 Q75 88 90 95 M60 92 L60 100"
          fill="none"
          stroke="#34d399"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />
        <path
          d="M60 25 Q25 35 15 55 Q35 45 40 65 M60 25 Q95 35 105 50 Q85 42 78 62 M60 25 L60 92"
          fill="none"
          stroke="url(#ygg-trunk)"
          strokeWidth="2.2"
          filter="url(#ygg-glow)"
        />
        {nodeYs.map((y, i) => (
          <g key={timeline[i].id}>
            <circle cx="60" cy={y} r="3.2" fill="#07080f" stroke="#22d3ee" strokeWidth="1" className="ygg-node-pulse" style={{ animationDelay: `${i * 0.35}s` }} />
            <line x1="60" y1={y} x2="95" y2={y} stroke="#1e2433" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.8" />
          </g>
        ))}
        <circle cx="60" cy="18" r="5" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.7" className="ygg-node-pulse" />
      </svg>
      <p className="absolute bottom-0 left-0 right-0 text-center font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-emerald-400/60">
        Yggdrasil · chronicle map
      </p>
    </div>
  );
}
