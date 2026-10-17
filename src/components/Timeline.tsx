"use client";

import { useCallback, useId, useState } from "react";
import { timeline, type TimelineEntry } from "@/data/timeline";
import { Reveal } from "./Reveal";

const kindLabel = {
  education: "Academy",
  work: "Field Ops",
  milestone: "Signal",
} as const;

function spinePath(activeIndex: number, count: number): string {
  if (count <= 1) return "M 28 2 L 28 98";
  const t = activeIndex / (count - 1);
  const y = 4 + t * 92;
  const bend = 8;
  const x = 28;
  const cx = 58;
  return [
    `M ${x} 2`,
    `L ${x} ${Math.max(2, y - bend)}`,
    `Q ${cx} ${y} ${x} ${Math.min(98, y + bend)}`,
    `L ${x} 98`,
  ].join(" ");
}

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const glowId = useId().replace(/:/g, "");
  const active = timeline[activeIndex] ?? timeline[0];
  const count = timeline.length;

  const setActive = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, count - 1)));
  }, [count]);

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

        <div
          className="chronicle-stage relative mt-12 min-h-[420px] md:min-h-[480px]"
          onMouseLeave={() => setActive(0)}
        >
          <div className="grid gap-10 md:grid-cols-[minmax(200px,240px)_1fr] md:gap-12 lg:grid-cols-[260px_1fr]">
            <nav
              className="chronicle-rail relative"
              aria-label="Timeline entries"
            >
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 80 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <filter id={`chronicle-glow-${glowId}`} x="-80%" y="-8%" width="260%" height="116%">
                    <feGaussianBlur stdDeviation="1.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id={`chronicle-stroke-${glowId}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
                    <stop offset="45%" stopColor="#22d3ee" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <path
                  d="M 28 2 L 28 98"
                  fill="none"
                  stroke="#1e2433"
                  strokeWidth="0.6"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  key={activeIndex}
                  d={spinePath(activeIndex, count)}
                  fill="none"
                  stroke={`url(#chronicle-stroke-${glowId})`}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className="chronicle-spine-active"
                  filter={`url(#chronicle-glow-${glowId})`}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <ol className="relative flex h-full min-h-[320px] flex-col justify-between py-1">
                {timeline.map((entry, i) => (
                  <li key={entry.id} className="relative">
                    <button
                      type="button"
                      className={`chronicle-node group flex w-full items-start gap-3 text-left transition-[transform,padding] duration-500 ease-out ${
                        i === activeIndex ? "chronicle-node-active translate-x-3 md:translate-x-5" : "translate-x-0"
                      }`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      aria-current={i === activeIndex ? "true" : undefined}
                    >
                      <span
                        className={`relative mt-1.5 shrink-0 rounded-full transition-all duration-500 ${
                          i === activeIndex
                            ? "chronicle-dot-active relative h-3.5 w-3.5 bg-cyan-glow shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                            : "h-2.5 w-2.5 bg-violet-glow/70 shadow-[0_0_6px_rgba(167,139,250,0.5)] group-hover:bg-cyan-glow/80"
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`min-w-0 font-[family-name:var(--font-mono)] transition-all duration-300 ${
                          i === activeIndex
                            ? "opacity-100"
                            : "opacity-45 group-hover:opacity-75"
                        }`}
                      >
                        <span className="block text-[10px] tracking-wide text-text-muted uppercase">
                          {entry.period}
                        </span>
                        <span
                          className={`mt-0.5 block leading-snug transition-all duration-300 ${
                            i === activeIndex
                              ? "text-sm text-cyan-glow"
                              : "text-xs text-text-primary/90"
                          }`}
                        >
                          {kindLabel[entry.kind]}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="chronicle-focus relative flex min-h-[280px] items-center justify-center md:min-h-[420px]">
              <div
                className="chronicle-focus-glow pointer-events-none absolute inset-0 rounded-2xl opacity-80"
                aria-hidden
              />
              <ChronicleFocusCard entry={active} activeKey={active.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChronicleFocusCard({ entry, activeKey }: { entry: TimelineEntry; activeKey: string }) {
  return (
    <article
      key={activeKey}
      className="chronicle-focus-card relative z-[1] w-full max-w-2xl px-2 text-center md:px-6"
    >
      <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-cyan-glow/90 uppercase md:text-sm">
        {entry.period} · {kindLabel[entry.kind]}
      </p>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight text-text-primary md:text-4xl lg:text-[2.75rem]">
        {entry.title}
      </h3>
      <p className="mt-3 text-base text-cyan-glow md:text-lg">{entry.org}</p>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-text-muted md:text-base md:leading-relaxed">
        {entry.description}
      </p>
    </article>
  );
}
