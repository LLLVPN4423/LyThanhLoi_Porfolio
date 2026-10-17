import { profile } from "@/data/profile";
import { LaboratoryCapsule } from "./LaboratoryCapsule";
import { Reveal } from "./Reveal";

const attributes = [
  { label: "Identity", value: profile.nameDisplay },
  { label: "Institute", value: profile.education.program },
  { label: "Academy", value: profile.education.school },
  { label: "Cycle", value: profile.education.period },
  { label: "Status", value: profile.education.status },
  { label: "Focus", value: profile.roles.join(" · ") },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-panel-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-violet-glow/80 uppercase">
            Character Profile
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            About Me
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(240px,340px)_1fr] lg:items-start">
          <Reveal delayMs={80}>
            <LaboratoryCapsule />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal delayMs={100}>
              <div className="rounded-xl border border-panel-border bg-panel/50 p-6">
                <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
                  Summary
                </h3>
                <p className="mt-4 text-text-muted leading-relaxed">{profile.intro}</p>
                <p className="mt-4 text-sm text-text-muted/90">{profile.currentDirection}</p>
              </div>
            </Reveal>

            <Reveal delayMs={180}>
              <div className="rounded-xl border border-panel-border bg-void-elevated p-6">
                <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
                  Attributes
                </h3>
                <dl className="mt-4 space-y-3">
                  {attributes.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[7rem_1fr] gap-2 border-b border-panel-border/60 pb-3 text-sm last:border-0"
                    >
                      <dt className="text-text-muted">{row.label}</dt>
                      <dd className="text-text-primary">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
