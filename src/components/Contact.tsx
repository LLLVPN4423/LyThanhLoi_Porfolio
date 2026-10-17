"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SciFiPortal } from "./SciFiPortal";

type Channel = "email" | "github" | "phone" | "facebook" | null;

const cardClass = (active: Channel, id: Channel, accent: "cyan" | "violet" | "emerald") => {
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
  return `contact-card rounded-xl border bg-panel/50 p-5 transition ${on ? border : `border-panel-border ${hover}`}`;
};

export function Contact() {
  const [active, setActive] = useState<Channel>(null);
  const clear = () => setActive(null);

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
          <div className="mt-10 flex flex-col items-center gap-8">
            <SciFiPortal active={active} className="max-w-[280px]" />

            <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                onMouseEnter={() => setActive("email")}
                onFocus={() => setActive("email")}
                onMouseLeave={clear}
                onBlur={clear}
                className={cardClass(active, "email", "cyan")}
              >
                <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted uppercase">
                  Email
                </p>
                <p className="mt-2 text-sm text-cyan-glow break-all">{profile.email}</p>
              </a>

              <a
                href={`tel:+84${profile.phone.replace(/^0/, "")}`}
                onMouseEnter={() => setActive("phone")}
                onFocus={() => setActive("phone")}
                onMouseLeave={clear}
                onBlur={clear}
                className={cardClass(active, "phone", "emerald")}
              >
                <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted uppercase">
                  Phone
                </p>
                <p className="mt-2 text-sm text-emerald-400">{profile.phone}</p>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive("github")}
                onFocus={() => setActive("github")}
                onMouseLeave={clear}
                onBlur={clear}
                className={cardClass(active, "github", "violet")}
              >
                <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted uppercase">
                  GitHub
                </p>
                <p className="mt-2 text-sm text-text-primary">@{profile.githubHandle}</p>
              </a>

              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive("facebook")}
                onFocus={() => setActive("facebook")}
                onMouseLeave={clear}
                onBlur={clear}
                className={cardClass(active, "facebook", "violet")}
              >
                <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted uppercase">
                  Facebook
                </p>
                <p className="mt-2 text-sm text-violet-glow/90">ly.loi.235603</p>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
