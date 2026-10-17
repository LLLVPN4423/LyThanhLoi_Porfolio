"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

type Channel = "email" | "github" | null;

export function Contact() {
  const [active, setActive] = useState<Channel>(null);

  const portalClass =
    active === "email"
      ? "portal-glow-cyan"
      : active === "github"
        ? "portal-glow-violet"
        : "portal-glow-idle";

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
          <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_minmax(200px,280px)_1fr]">
            <a
              href={`mailto:${profile.email}`}
              onMouseEnter={() => setActive("email")}
              onFocus={() => setActive("email")}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              className={`contact-card order-2 rounded-xl border bg-panel/50 p-5 transition lg:order-1 ${active === "email" ? "border-cyan-glow shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)]" : "border-panel-border hover:border-cyan-glow/35"}`}
            >
              <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted uppercase">
                Email
              </p>
              <p className="mt-2 text-sm text-cyan-glow">{profile.email}</p>
            </a>

            <div
              className={`portal-core relative order-1 mx-auto flex aspect-square w-full max-w-[260px] flex-col items-center justify-center rounded-full border-2 bg-void-elevated/80 transition-all duration-500 lg:order-2 ${portalClass}`}
              aria-hidden
            >
              <div className="absolute inset-2 rounded-full border border-dashed border-cyan-glow/30 portal-ring" />
              <span className="font-[family-name:var(--font-display)] text-3xl text-violet-glow/90">◎</span>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-text-muted">
                Link portal
              </p>
              <p className="mt-1 text-xs text-cyan-glow/80">
                {active === "email" ? "Routing · mail" : active === "github" ? "Routing · git" : "Select channel"}
              </p>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive("github")}
              onFocus={() => setActive("github")}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              className={`contact-card order-3 rounded-xl border bg-panel/50 p-5 transition ${active === "github" ? "border-violet-glow shadow-[0_0_24px_-4px_rgba(167,139,250,0.5)]" : "border-panel-border hover:border-violet-glow/35"}`}
            >
              <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted uppercase">
                GitHub
              </p>
              <p className="mt-2 text-sm text-text-primary">@{profile.githubHandle}</p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
