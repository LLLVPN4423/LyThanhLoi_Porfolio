"use client";

type Channel = "email" | "github" | null;

type Props = {
  active: Channel;
  className?: string;
};

/** Stargate ring asset (Wikimedia) with sci-fi glow + rotation */
export function SciFiPortal({ active, className = "" }: Props) {
  const tone =
    active === "email"
      ? "sci-fi-portal-cyan"
      : active === "github"
        ? "sci-fi-portal-violet"
        : "sci-fi-portal-idle";

  return (
    <div className={`relative aspect-square w-full ${className}`} aria-hidden>
      <div className={`sci-fi-portal-glow absolute inset-0 rounded-full ${tone}`} />
      <div className="absolute inset-[6%] sci-fi-portal-spin">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/stargate-portal.svg"
          alt=""
          className="h-full w-full object-contain sci-fi-portal-art"
          draggable={false}
        />
      </div>
      <div className="absolute inset-[22%] rounded-full border border-dashed border-cyan-glow/25 sci-fi-portal-inner-spin" />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-text-muted">
          Link portal
        </span>
        <p className="mt-1 max-w-[8rem] text-xs text-cyan-glow/90">
          {active === "email"
            ? "Routing · mail"
            : active === "github"
              ? "Routing · git"
              : "Select channel"}
        </p>
      </div>
    </div>
  );
}
