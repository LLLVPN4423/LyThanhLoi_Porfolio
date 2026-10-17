"use client";

import { profile } from "@/data/profile";

export function LaboratoryCapsule() {
  return (
    <div className="capsule-wrap relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
      <div className="capsule-float relative rounded-2xl border border-cyan-glow/35 bg-void-elevated/90 p-1 shadow-[0_0_40px_-8px_rgba(34,211,238,0.35)]">
        <div className="rounded-xl border border-panel-border bg-gradient-to-b from-panel/80 to-void p-4">
          <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-cyan-glow/90">
            <span>Specimen capsule</span>
            <span className="neon-flicker-text text-emerald-400/90">stable</span>
          </div>

          <div className="relative mt-4 aspect-[3/4] overflow-hidden rounded-lg border border-violet-glow/30 bg-void">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-glow/10 via-transparent to-violet-glow/10" />
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-cyan-glow/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-void to-transparent" />

            <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-glow/40 bg-panel/60 text-3xl text-violet-glow">
                ✦
              </div>
              <p className="mt-4 font-[family-name:var(--font-display)] text-lg text-text-primary">
                {profile.nameDisplay}
              </p>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] text-text-muted">
                ID · {profile.githubHandle}
              </p>
              <ul className="mt-4 space-y-1 font-[family-name:var(--font-mono)] text-[10px] text-cyan-glow/80">
                <li>vitals: nominal</li>
                <li>role: developer / lead</li>
                <li>sector: vietnam–japan institute</li>
              </ul>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen scanline-overlay" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-1">
            {["bio", "edu", "sync"].map((label) => (
              <div
                key={label}
                className="rounded border border-panel-border bg-panel/50 py-1 text-center font-[family-name:var(--font-mono)] text-[9px] uppercase text-text-muted"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-center font-[family-name:var(--font-mono)] text-[10px] text-text-muted lg:text-left">
        Laboratory capsule · character profile loaded
      </p>
    </div>
  );
}
