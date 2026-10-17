"use client";

import { useCallback, useEffect, useState } from "react";
import { LabAirlockScene } from "./LabAirlockScene";

const STORAGE_KEY = "ltl-lab-intro-seen";

type Phase = "idle" | "opening" | "smoke" | "done";

type Props = {
  onComplete: () => void;
};

export function LabDoorIntro({ onComplete }: Props) {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY);
    if (seen) {
      onComplete();
      return;
    }
    setVisible(true);
    const t1 = window.setTimeout(() => setPhase("opening"), 600);
    const t2 = window.setTimeout(() => setPhase("smoke"), 2200);
    const t3 = window.setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
      onComplete();
    }, 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const skip = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
    onComplete();
  }, [onComplete]);

  if (!visible) return null;

  const doorOpen = phase === "opening" || phase === "smoke";

  return (
    <div
      className={`lab-intro fixed inset-0 z-[100] overflow-hidden bg-void ${phase === "done" ? "lab-intro-exit" : ""}`}
      role="dialog"
      aria-label="Laboratory entry sequence"
    >
      <LabAirlockScene doorOpen={doorOpen} smokeActive={doorOpen} fullBleed />

      <div className="pointer-events-none absolute inset-0 z-[8] bg-gradient-to-r from-void/75 via-transparent to-void/75" />
      <div className="pointer-events-none absolute inset-0 z-[8] bg-gradient-to-b from-void/40 via-transparent to-void/85" />

      <button
        type="button"
        onClick={skip}
        className="absolute top-24 right-4 z-20 rounded-md border border-panel-border bg-void/60 px-3 py-1.5 text-xs text-text-muted backdrop-blur-sm hover:text-cyan-glow md:top-28 md:right-8"
      >
        Skip entry
      </button>

      <div className="lab-panel lab-panel-left pointer-events-none absolute top-8 bottom-24 left-4 z-10 w-[min(22vw,200px)] rounded-lg border border-panel-border/60 bg-void/45 p-3 backdrop-blur-md md:left-8">
        <div className="space-y-2 font-[family-name:var(--font-mono)] text-[9px] text-cyan-glow/70 uppercase tracking-wider">
          <p>sector 07 / lab-b</p>
          <div className="h-1 w-full bg-panel-border">
            <div className="lab-bar-pulse h-full w-2/3 bg-cyan-glow/60" />
          </div>
          <p className="text-text-muted normal-case">pressure: stable</p>
          <p className="text-text-muted normal-case">archive: sealed</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-6 rounded border border-panel-border/80 bg-panel/50 neon-blink"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      <div className="lab-panel lab-panel-right pointer-events-none absolute top-8 bottom-24 right-4 z-10 w-[min(22vw,200px)] rounded-lg border border-panel-border/60 bg-void/45 p-3 backdrop-blur-md md:right-8">
        <div className="font-[family-name:var(--font-mono)] text-[9px] text-violet-glow/80 uppercase tracking-wider">
          <p>containment</p>
          <p className="mt-2 text-text-muted normal-case">grimoire lock: armed</p>
        </div>
        <div className="mt-6 space-y-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center gap-2 text-[10px] text-text-muted">
              <span className="neon-dot h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              relay {n} online
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-6 z-10 flex justify-between px-6 font-[family-name:var(--font-mono)] text-[10px] text-cyan-glow/90 md:px-12">
        <span>entry_sequence</span>
        <span className="neon-flicker-text">authorized</span>
      </div>

      <p className="pointer-events-none absolute bottom-8 left-0 right-0 z-10 text-center font-[family-name:var(--font-mono)] text-xs text-text-muted">
        {phase === "idle" && "Initializing laboratory interface…"}
        {doorOpen && "Opening archive chamber…"}
      </p>
    </div>
  );
}
