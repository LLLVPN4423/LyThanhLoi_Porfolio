import Link from "next/link";
import { personalDossiers } from "@/data/personalDossiers";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

const attributes = [
  { label: "Identity", value: profile.nameDisplay },
  { label: "Date of birth", value: profile.birthDate },
  { label: "Institute", value: profile.education.program },
  { label: "Academy", value: profile.education.school },
  { label: "Cycle", value: profile.education.period },
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

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal delayMs={100}>
            <div className="rounded-xl border border-panel-border bg-panel/50 p-6">
              <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
                Summary
              </h3>
              <div className="mt-4 space-y-5">
                {profile.aboutSummary.map((block) => (
                  <div key={block.title}>
                    <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-wide text-cyan-glow/90 uppercase">
                      {block.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={180}>
            <div className="flex flex-col gap-6">
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

              <div className="rounded-xl border border-panel-border bg-panel/40 p-6">
                <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
                  Personal interests
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  Open a dossier — each topic will grow into its own themed space.
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {personalDossiers.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/dossier/${d.slug}`}
                        className="group flex items-center gap-3 rounded-lg border border-panel-border bg-void/50 px-4 py-3 text-left transition-colors hover:border-cyan-glow/35 hover:bg-panel/50"
                      >
                        <span
                          className="text-lg text-cyan-glow/80 transition-transform group-hover:scale-110"
                          aria-hidden
                        >
                          {d.glyph}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-text-primary">
                            {d.label}
                          </span>
                          <span className="mt-0.5 block text-[11px] leading-snug text-text-muted">
                            {d.hint}
                          </span>
                        </span>
                        <span className="shrink-0 font-[family-name:var(--font-mono)] text-[10px] tracking-wide text-cyan-glow/70 uppercase opacity-0 transition-opacity group-hover:opacity-100">
                          Open
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
