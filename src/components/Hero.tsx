"use client";

import { useCallback, useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { LabDoorIntro } from "./LabDoorIntro";
import { Reveal } from "./Reveal";

export function Hero() {
  const [introDone, setIntroDone] = useState(false);
  const [neonBoot, setNeonBoot] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ltl-lab-intro-seen")) setIntroDone(true);
  }, []);

  const onIntroComplete = useCallback(() => {
    setIntroDone(true);
    setNeonBoot(true);
    window.setTimeout(() => setNeonBoot(false), 2800);
  }, []);

  return (
    <>
      <LabDoorIntro onComplete={onIntroComplete} />

      <section
        id="hero"
        className={`relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-24 pb-16 transition-opacity duration-700 ${introDone ? "opacity-100" : "opacity-0"}`}
      >
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-glow/10 blur-3xl"
          aria-hidden
        />

        {neonBoot ? (
          <div className="pointer-events-none absolute inset-x-0 top-20 flex justify-center gap-3" aria-hidden>
            {["cyan", "violet", "emerald"].map((c) => (
              <span key={c} className={`neon-boot-lamp neon-boot-${c} h-1 w-12 rounded-full`} />
            ))}
          </div>
        ) : null}

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:items-center">
          <div>
            <Reveal>
              <p
                className={`font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase ${neonBoot ? "neon-grimoire-boot text-cyan-glow" : "text-cyan-glow/80"}`}
              >
                digital_grimoire.init()
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-wide md:text-6xl">
                {profile.nameDisplay}
              </h1>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="mt-4 max-w-xl text-lg text-text-muted">{profile.headline}</p>
            </Reveal>
            <Reveal delayMs={240}>
              <p className="mt-3 max-w-xl text-sm text-text-muted/90">{profile.careerGoal}</p>
            </Reveal>

            <Reveal delayMs={320}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="glow-ring rounded-lg bg-panel px-5 py-2.5 text-sm font-medium text-text-primary transition hover:bg-panel/80"
                >
                  Explore My World
                </a>
                <a
                  href="#projects"
                  className="rounded-lg border border-panel-border px-5 py-2.5 text-sm text-text-muted transition hover:border-cyan-glow/40 hover:text-text-primary"
                >
                  View Projects
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-panel-border px-5 py-2.5 text-sm text-text-muted transition hover:text-cyan-glow"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={200} className="flex justify-center md:justify-end">
            <div
              className="relative aspect-square w-full max-w-sm rounded-2xl border border-panel-border bg-void-elevated p-6 glow-ring"
              aria-hidden
            >
              <div className="absolute inset-4 rounded-xl border border-dashed border-violet-glow/30" />
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="font-[family-name:var(--font-display)] text-5xl text-violet-glow/90">
                  ✦
                </span>
                <p className="mt-4 font-[family-name:var(--font-mono)] text-[10px] tracking-widest text-text-muted uppercase">
                  Core Module
                </p>
                <p className="mt-2 text-sm text-cyan-glow/90">Fantasy × Tech Portal</p>
                <ul className="mt-6 space-y-1 font-[family-name:var(--font-mono)] text-[11px] text-text-muted">
                  <li>status: online</li>
                  <li>focus: systems + AI</li>
                  <li>archive: {profile.githubHandle}</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
