import { skillGroups } from "@/data/skills";
import { HudSkillCard } from "./HudSkillCard";
import { Reveal } from "./Reveal";

export function Skills() {
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
            Verified skills from my profile — all module nodes loaded.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <HudSkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
