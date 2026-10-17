"use client";

type Props = {
  doorOpen: boolean;
  smokeActive: boolean;
};

/** Semiotic Standard airlock + bulkhead (CC BY 4.0) in laboratory frame */
export function LabAirlockScene({ doorOpen, smokeActive }: Props) {
  return (
    <div className="relative mx-auto mt-10 h-[70%] w-[78%]">
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/semiotic-bulkhead.svg"
          alt=""
          className="h-full w-auto max-w-full object-contain lab-semiotic-tint"
        />
      </div>

      <div className={`lab-door-wrap relative h-full w-full ${doorOpen ? "lab-door-open" : ""}`}>
        <div className="lab-door lab-door-left absolute inset-y-0 left-0 z-10 w-1/2 overflow-hidden border-r border-cyan-glow/50 bg-void-elevated/95">
          <div className="absolute inset-2 flex items-center justify-end pr-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/semiotic-airlock.svg"
              alt=""
              className="h-[85%] w-auto object-contain lab-semiotic-tint opacity-90"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-glow/10 to-transparent" />
        </div>
        <div className="lab-door lab-door-right absolute inset-y-0 right-0 z-10 w-1/2 overflow-hidden border-l border-cyan-glow/50 bg-void-elevated/95">
          <div className="absolute inset-2 flex items-center justify-start pl-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/semiotic-airlock.svg"
              alt=""
              className="h-[85%] w-auto scale-x-[-1] object-contain lab-semiotic-tint opacity-90"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-violet-glow/10 to-transparent" />
        </div>
        {!doorOpen ? (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <span className="rounded border border-cyan-glow/40 bg-void/80 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.35em] text-cyan-glow uppercase">
              airlock sealed
            </span>
          </div>
        ) : null}
      </div>

      <div className={`lab-smoke pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[55%] ${smokeActive ? "lab-smoke-active" : ""}`} />
    </div>
  );
}
