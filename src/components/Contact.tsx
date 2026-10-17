"use client";

import { useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SciFiPortal } from "./SciFiPortal";

export type ContactChannel = "email" | "github" | "phone" | "facebook";

type Channel = ContactChannel | null;

type Accent = "cyan" | "violet" | "emerald";

type ContactLink = {
  id: ContactChannel;
  label: string;
  href: string;
  value: string;
  accent: Accent;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    accent: "cyan",
  },
  {
    id: "phone",
    label: "Phone",
    href: `tel:+84${profile.phone.replace(/^0/, "")}`,
    value: profile.phone,
    accent: "emerald",
  },
  {
    id: "github",
    label: "GitHub",
    href: profile.github,
    value: `@${profile.githubHandle}`,
    accent: "violet",
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: profile.facebook,
    value: "ly.loi.235603",
    accent: "violet",
    external: true,
  },
];

function cardClass(active: Channel, id: ContactChannel, accent: Accent) {
  const on = active === id;
  const border =
    accent === "cyan"
      ? "border-cyan-glow shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)]"
      : accent === "violet"
        ? "border-violet-glow shadow-[0_0_24px_-4px_rgba(167,139,250,0.5)]"
        : "border-emerald-400 shadow-[0_0_24px_-4px_rgba(52,211,153,0.45)]";
  const hover =
    accent === "cyan"
      ? "hover:border-cyan-glow/35"
      : accent === "violet"
        ? "hover:border-violet-glow/35"
        : "hover:border-emerald-400/35";
  const valueTone =
    accent === "cyan"
      ? "text-cyan-glow"
      : accent === "violet"
        ? "text-violet-glow/90"
        : "text-emerald-400";
  return { shell: `contact-card rounded-xl border bg-panel/50 p-4 transition sm:p-5 ${on ? border : `border-panel-border ${hover}`}`, valueTone };
}

/** Evenly place cards on an ellipse around center (portal stays at 50%,50%). */
function orbitPosition(index: number, total: number) {
  const start = -Math.PI / 2;
  const angle = start + (2 * Math.PI * index) / total;
  const rx = 42;
  const ry = 40;
  const x = Math.cos(angle) * rx;
  const y = Math.sin(angle) * ry;
  return {
    left: `calc(50% + ${x}%)`,
    top: `calc(50% + ${y}%)`,
    transform: "translate(-50%, -50%)",
  } as const;
}

export function Contact() {
  const [active, setActive] = useState<Channel>(null);
  const clear = () => setActive(null);
  const count = contactLinks.length;

  const orbitSize = useMemo(() => {
    if (count <= 4) return "min(92vw, 520px)";
    if (count <= 6) return "min(94vw, 580px)";
    return "min(96vw, 640px)";
  }, [count]);

  return (
    <section id="contact" className="scroll-mt-24 border-t border-panel-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-violet-glow/80 uppercase">
            The Portal
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            Connect
          </h2>
          <p className="mt-3 max-w-xl text-sm text-text-muted">
            Open a channel for collaboration, internships, or project discussions.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <div
            className="contact-orbit relative mx-auto mt-10"
            style={{
              width: orbitSize,
              height: orbitSize,
              maxWidth: "100%",
            }}
          >
            <div
              className="pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-panel-border/80 opacity-60"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-[12%] rounded-full border border-cyan-glow/10 opacity-40"
              aria-hidden
            />

            <div className="contact-orbit-portal pointer-events-none absolute left-1/2 top-1/2 z-[2] w-[min(38vw,220px)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(34vw,240px)]">
              <SciFiPortal active={active} className="w-full" />
            </div>

            {contactLinks.map((link, index) => {
              const { shell, valueTone } = cardClass(active, link.id, link.accent);
              const pos = orbitPosition(index, count);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setActive(link.id)}
                  onFocus={() => setActive(link.id)}
                  onMouseLeave={clear}
                  onBlur={clear}
                  className={`${shell} absolute z-[3] w-[min(40vw,11.5rem)] sm:w-[min(36vw,12.5rem)]`}
                  style={pos}
                >
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-text-muted uppercase sm:text-xs">
                    {link.label}
                  </p>
                  <p className={`mt-1.5 text-xs break-all sm:mt-2 sm:text-sm ${valueTone}`}>
                    {link.value}
                  </p>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
