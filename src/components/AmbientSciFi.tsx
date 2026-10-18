"use client";

/** Subtle site-wide neon + overgrown garden atmosphere (parallax layers) */
export function AmbientSciFi() {
  return (
    <div className="ambient-scifi pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="ambient-parallax-slow absolute inset-0">
        <div className="neon-strip neon-strip-a" />
        <div className="neon-strip neon-strip-b" />
        <div className="garden-vine garden-vine-left" />
        <div className="garden-vine garden-vine-right" />
      </div>
      <div className="ambient-parallax-fast absolute inset-0">
        <div className="absolute top-[18%] left-[8%] h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl" />
        <div className="absolute bottom-[22%] right-[6%] h-32 w-32 rounded-full bg-cyan-glow/5 blur-3xl" />
      </div>
    </div>
  );
}
