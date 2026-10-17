"use client";

import { profile } from "@/data/profile";

export function LaboratoryCapsule() {
  return (
    <div className="capsule-wrap relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
      <div className="capsule-float relative rounded-2xl border border-cyan-glow/35 bg-void-elevated/90 p-1 shadow-[0_0_40px_-8px_rgba(34,211,238,0.35)]">
        <div className="rounded-xl border border-panel-border bg-gradient-to-b from-panel/80 to-void p-3">
          <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-cyan-glow/90">
            <span>CSC-7X · Specimen capsule</span>
            <span className="neon-flicker-text text-emerald-400/90">active</span>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-lg border border-cyan-glow/25 bg-void">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/cryogenic-chamber-csc7x.png"
              alt="Cryogenic specimen chamber schematic"
              className="w-full object-contain capsule-chamber-art"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-void/40" />
            <div className="pointer-events-none absolute inset-0 opacity-25 scanline-overlay" />
            <div className="absolute bottom-3 left-3 right-3 rounded border border-panel-border/80 bg-void/85 px-3 py-2 backdrop-blur-sm">
              <p className="font-[family-name:var(--font-display)] text-sm text-text-primary">
                {profile.nameDisplay}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-cyan-glow/90">
                ID · {profile.githubHandle} · -196°C nominal
              </p>
            </div>
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
