"use client";

import type { SkillGroup } from "@/data/skills";

type Props = {
  group: SkillGroup;
  index: number;
  side: "left" | "right";
  revealed: boolean;
};

export function HudSkillCard({ group, index, side, revealed }: Props) {
  const revealedClass =
    side === "left" ? "hud-skill-revealed-left" : "hud-skill-revealed-right";
  const sweepClass = side === "left" ? "hud-skill-sweep-left" : "hud-skill-sweep-right";

  return (
    <article
      className={`hud-card hud-skill-card group relative w-full max-w-[min(100%,300px)] overflow-hidden border bg-void-elevated/80 p-3 text-left sm:max-w-[min(100%,320px)] sm:p-3.5 ${
        revealed ? `${revealedClass} border-cyan-glow/35` : "hud-skill-pending border-panel-border"
      } ${side === "left" ? "lg:ml-auto" : "lg:mr-auto"}`}
    >
      <span
        className={`hud-neon-rail pointer-events-none absolute inset-y-2 left-0 w-[3px] ${revealed ? "hud-neon-flicker" : "opacity-30"}`}
        aria-hidden
      />

      <span
        className={`pointer-events-none absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 ${revealed ? "hud-corner-flicker border-cyan-glow/70" : "border-cyan-glow/25"}`}
        aria-hidden
      />
      <span
        className={`pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 ${revealed ? "hud-corner-flicker hud-corner-flicker-delay border-violet-glow/60" : "border-violet-glow/20"}`}
        aria-hidden
      />

      {revealed ? (
        <span
          className={`hud-skill-sweep pointer-events-none absolute inset-y-0 w-2/5 ${sweepClass}`}
          aria-hidden
        />
      ) : null}

      <div className="pointer-events-none absolute inset-0 opacity-[0.05] scanline-overlay" aria-hidden />

      <div className="flex items-start gap-2">
        <span className="text-lg leading-none text-violet-glow/80 sm:text-xl" aria-hidden>
          {group.rune}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-widest text-cyan-glow/75 sm:text-[9px]">
            hud_module_{String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-0.5 text-xs font-medium leading-snug text-text-primary sm:text-sm">
            {group.title}
          </h3>
        </div>
      </div>

      <ul className="mt-2 flex flex-wrap gap-1">
        {group.items.map((item) => (
          <li
            key={item.name}
            className="rounded border border-panel-border/90 bg-panel/80 px-1.5 py-0.5 text-[10px] leading-snug text-text-primary sm:text-[11px]"
          >
            {item.name}
            {item.note ? <span className="text-text-muted"> ({item.note})</span> : null}
          </li>
        ))}
      </ul>

      <div className="mt-2 h-0.5 w-full bg-panel-border">
        <div
          className={`hud-bar h-full bg-gradient-to-r from-cyan-glow to-violet-glow ${revealed ? "hud-bar-lit" : "w-0"}`}
        />
      </div>
    </article>
  );
}
