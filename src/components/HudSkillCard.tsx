"use client";

import type { SkillGroup } from "@/data/skills";

type Props = {
  group: SkillGroup;
  index: number;
  revealed: boolean;
};

export function HudSkillCard({ group, index, revealed }: Props) {
  return (
    <article
      className={`hud-card hud-skill-card group relative w-full overflow-hidden border bg-void-elevated/80 p-5 text-left ${
        revealed ? "hud-skill-revealed border-cyan-glow/35" : "hud-skill-pending border-panel-border"
      }`}
      style={revealed ? { animationDelay: `${index * 40}ms` } : undefined}
    >
      <span
        className={`hud-neon-rail pointer-events-none absolute inset-y-3 left-0 w-[3px] ${revealed ? "hud-neon-flicker" : "opacity-30"}`}
        aria-hidden
      />

      <span
        className={`pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 ${revealed ? "hud-corner-flicker border-cyan-glow/70" : "border-cyan-glow/25"}`}
        aria-hidden
      />
      <span
        className={`pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 ${revealed ? "hud-corner-flicker hud-corner-flicker-delay border-violet-glow/60" : "border-violet-glow/20"}`}
        aria-hidden
      />

      {revealed ? (
        <span className="hud-skill-sweep pointer-events-none absolute inset-y-0 right-0 w-1/3" aria-hidden />
      ) : null}

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
          className={`hud-bar h-full bg-gradient-to-r from-cyan-glow to-violet-glow ${revealed ? "hud-bar-lit" : "w-0"}`}
        />
      </div>
    </article>
  );
}
