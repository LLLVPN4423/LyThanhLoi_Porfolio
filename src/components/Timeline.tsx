import { timeline } from "@/data/timeline";
import { Reveal } from "./Reveal";

const kindLabel = {
  education: "Academy",
  work: "Field Ops",
  milestone: "Signal",
} as const;

export function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-24 border-t border-panel-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-cyan-glow/80 uppercase">
            Experience & Timeline
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            Chronicle
          </h2>
        </Reveal>

        <ol className="relative mt-10 space-y-0 border-l border-panel-border pl-6 md:pl-8">
          {timeline.map((entry, i) => (
            <Reveal key={entry.id} delayMs={i * 50} as="li">
              <div className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-violet-glow md:-left-[calc(2rem+5px)]"
                  aria-hidden
                />
                <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted">
                  {entry.period} · {kindLabel[entry.kind]}
                </p>
                <h3 className="mt-1 text-lg text-text-primary">{entry.title}</h3>
                <p className="text-sm text-cyan-glow/80">{entry.org}</p>
                <p className="mt-2 max-w-2xl text-sm text-text-muted">{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
