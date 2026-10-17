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

  return (
    <div
      className={`lab-intro fixed inset-0 z-[100] flex items-center justify-center bg-void ${phase === "done" ? "lab-intro-exit" : ""}`}
      role="dialog"
      aria-label="Laboratory entry sequence"
    >
      <button
        type="button"
        onClick={skip}
        className="absolute top-24 right-4 z-10 rounded-md border border-panel-border px-3 py-1.5 text-xs text-text-muted hover:text-cyan-glow md:top-28 md:right-8"
      >
        Skip entry
      </button>

      <div className="relative h-[min(85vh,640px)] w-[min(94vw,920px)]">
        {/* Side panels */}
        <div className="lab-panel lab-panel-left absolute top-8 bottom-8 left-0 w-[22%] rounded-lg border border-panel-border bg-void-elevated/90 p-3">
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
              <div key={i} className="h-6 rounded border border-panel-border/80 bg-panel/50 neon-blink" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
        <div className="lab-panel lab-panel-right absolute top-8 bottom-8 right-0 w-[22%] rounded-lg border border-panel-border bg-void-elevated/90 p-3">
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

        {/* Door frame */}
        <div className="absolute top-6 bottom-6 left-[22%] right-[22%] rounded-xl border-2 border-cyan-glow/30 bg-panel/40 shadow-[inset_0_0_60px_rgba(34,211,238,0.08)]">
          <div className="absolute inset-x-4 top-3 flex justify-between font-[family-name:var(--font-mono)] text-[10px] text-cyan-glow/90">
            <span>entry_sequence</span>
            <span className="neon-flicker-text">authorized</span>
          </div>

          <LabAirlockScene
            doorOpen={phase === "opening" || phase === "smoke"}
            smokeActive={phase === "smoke" || phase === "opening"}
          />

          <p className="absolute bottom-4 left-0 right-0 text-center font-[family-name:var(--font-mono)] text-xs text-text-muted">
            {phase === "idle" && "Initializing laboratory interface…"}
            {(phase === "opening" || phase === "smoke") && "Opening archive chamber…"}
          </p>
        </div>
      </div>
    </div>
  );
}
