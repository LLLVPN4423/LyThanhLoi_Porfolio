"use client";

import { useEffect, useRef, useState } from "react";
import type { SkillGroup } from "@/data/skills";

type Props = {
  group: SkillGroup;
  index: number;
  onSelect: (g: SkillGroup) => void;
};

export function HudSkillCard({ group, index, onSelect }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          window.setTimeout(() => setShown(true), index * 120);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onSelect(group)}
      className={`hud-card group relative w-full overflow-hidden border bg-void-elevated/80 p-5 text-left transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-glow ${shown ? "hud-card-visible border-cyan-glow/35" : "hud-card-hidden border-panel-border"}`}
    >
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-cyan-glow/70" aria-hidden />
      <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-cyan-glow/70" aria-hidden />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-violet-glow/60" aria-hidden />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-violet-glow/60" aria-hidden />

      <div className="pointer-events-none absolute inset-0 opacity-[0.07] scanline-overlay" aria-hidden />

      <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-cyan-glow/80">
        hud_module_{String(index + 1).padStart(2, "0")}
      </p>
      <span className="mt-2 block text-2xl text-violet-glow/80" aria-hidden>
        {group.rune}
      </span>
      <h3 className="mt-2 text-sm font-medium text-text-primary">{group.title}</h3>
      <p className="mt-2 text-xs text-text-muted">{group.items.map((s) => s.name).join(" · ")}</p>
      <div className="mt-3 h-0.5 w-full bg-panel-border">
        <div className="hud-bar h-full bg-gradient-to-r from-cyan-glow to-violet-glow" style={{ animationDelay: `${index * 0.15}s` }} />
      </div>
    </button>
  );
}
