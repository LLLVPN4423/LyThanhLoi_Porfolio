"use client";

import { useEffect, useRef, useState } from "react";
import type { SkillGroup } from "@/data/skills";

type Props = {
  group: SkillGroup;
  index: number;
};

export function HudSkillCard({ group, index }: Props) {
  const ref = useRef<HTMLElement>(null);
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
    <article
      ref={ref}
      className={`hud-card hud-skill-card group relative w-full overflow-hidden border bg-void-elevated/80 p-5 text-left transition-all duration-500 ${shown ? "hud-card-visible border-cyan-glow/35" : "hud-card-hidden border-panel-border"}`}
    >
      <span className="hud-neon-rail pointer-events-none absolute inset-y-3 left-0 w-[3px]" aria-hidden />

      <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-cyan-glow/50" aria-hidden />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-violet-glow/40" aria-hidden />

      <div className="pointer-events-none absolute inset-0 opacity-[0.06] scanline-overlay" aria-hidden />

      <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-cyan-glow/80">
        hud_module_{String(index + 1).padStart(2, "0")}
      </p>
      <span className="mt-2 block text-2xl text-violet-glow/80" aria-hidden>
        {group.rune}
      </span>
      <h3 className="mt-2 text-base font-medium text-text-primary">{group.title}</h3>

      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item.name}
            className="rounded-md border border-panel-border bg-panel/80 px-3 py-1.5 text-xs text-text-primary"
          >
            {item.name}
            {item.note ? <span className="ml-1 text-text-muted">({item.note})</span> : null}
          </li>
        ))}
      </ul>

      <div className="mt-4 h-0.5 w-full bg-panel-border">
        <div
          className="hud-bar h-full bg-gradient-to-r from-cyan-glow to-violet-glow"
          style={{ animationDelay: `${index * 0.15}s` }}
        />
      </div>
    </article>
  );
}
