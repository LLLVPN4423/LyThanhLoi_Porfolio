"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Props = {
  src: string;
  className?: string;
  fallback: React.ReactNode;
};

/** Decorative loop video; falls back when prefers-reduced-motion */
export function SciFiVideo({ src, className = "", fallback }: Props) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <>{fallback}</>;
  }

  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
      {fallback}
    </video>
  );
}
