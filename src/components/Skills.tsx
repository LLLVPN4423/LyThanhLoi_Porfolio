"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { skillGroups } from "@/data/skills";
import { HudSkillCard } from "./HudSkillCard";
import { Reveal } from "./Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const CAPSULE_VIDEO = "/assets/videos/capsule-csc7x.mp4";
const CAPSULE_LEAD_MS = 850;
const PAIR_STAGGER_MS = 260;

const LEFT_MODULES = skillGroups.slice(0, 3);
const RIGHT_MODULES = skillGroups.slice(3, 6);

export function Skills() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);
  const [capsuleLive, setCapsuleLive] = useState(false);
  /** 0–3: each step reveals left[i] + right[i] together */
  const [revealedPairs, setRevealedPairs] = useState(0);

  const pairCount = useMemo(
    () => Math.max(LEFT_MODULES.length, RIGHT_MODULES.length),
    [],
  );

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (reduced) {
      setInView(true);
      setCapsuleLive(true);
      setRevealedPairs(pairCount);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced, pairCount]);

  useEffect(() => {
    if (!inView || reduced) return;
    const t = window.setTimeout(() => setCapsuleLive(true), 100);
    return () => window.clearTimeout(t);
  }, [inView, reduced]);

  useEffect(() => {
    if (!capsuleLive || reduced) return;
    const timers: number[] = [];
    const t0 = window.setTimeout(() => {
      let step = 0;
      const tick = () => {
        step += 1;
        setRevealedPairs(step);
        if (step < pairCount) {
          timers.push(window.setTimeout(tick, PAIR_STAGGER_MS));
        }
      };
      tick();
    }, CAPSULE_LEAD_MS);
    timers.push(t0);
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [capsuleLive, reduced, pairCount]);

  return (
    <section id="skills" className="scroll-mt-24 border-t border-panel-border py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="skills-section-intro relative z-10">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-cyan-glow/80 uppercase">
              Technical Abilities
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              Skill Modules
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-text-muted">
              Verified skills from my profile — capsule sync, modules deploy to both wings.
            </p>
          </Reveal>
        </div>

        <div ref={stageRef} className="skills-orbit-stage relative mt-14 lg:mt-20">
          <div className="skills-wing-left flex flex-col gap-2.5 lg:items-end lg:justify-center lg:gap-2">
            {LEFT_MODULES.map((group, i) => (
              <HudSkillCard
                key={group.id}
                group={group}
                index={i}
                side="left"
                revealed={revealedPairs > i}
              />
            ))}
          </div>

          <div
            className={`skills-capsule-core ${capsuleLive ? "skills-capsule-live" : ""}`}
            aria-hidden
          >
            <div className="skills-capsule-backdrop" />
            <div className="skills-capsule-video-mask">
              <video
                className="skills-capsule-video pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={CAPSULE_VIDEO} type="video/mp4" />
              </video>
            </div>
            <div className="skills-capsule-edge-feather" aria-hidden />
          </div>

          <div className="skills-wing-right flex flex-col gap-2.5 lg:items-start lg:justify-center lg:gap-2">
            {RIGHT_MODULES.map((group, i) => (
              <HudSkillCard
                key={group.id}
                group={group}
                index={i + 3}
                side="right"
                revealed={revealedPairs > i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
