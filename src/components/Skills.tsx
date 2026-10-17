"use client";

import { useState } from "react";
import { skillGroups, type SkillGroup } from "@/data/skills";
import { HudSkillCard } from "./HudSkillCard";
import { Reveal } from "./Reveal";

export function Skills() {
  const [active, setActive] = useState<SkillGroup | null>(null);

  return (
    <section id="skills" className="scroll-mt-24 border-t border-panel-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-cyan-glow/80 uppercase">
            Technical Abilities
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            Skill Modules
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            Verified skills from my profile — select a module to inspect nodes.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <HudSkillCard key={group.id} group={group} index={i} onSelect={setActive} />
          ))}
        </div>

        {active ? (
          <div
            className="mt-6 rounded-xl border border-cyan-glow/25 bg-void-elevated p-5 hud-detail-in"
            role="region"
            aria-label={`${active.title} details`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
                  Module detail
                </p>
                <h3 className="mt-1 text-lg">{active.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-xs text-text-muted hover:text-text-primary"
              >
                Dismiss
              </button>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {active.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-md border border-panel-border bg-panel px-3 py-1.5 text-xs text-text-primary"
                >
                  {item.name}
                  {item.note ? (
                    <span className="ml-1 text-text-muted">({item.note})</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
