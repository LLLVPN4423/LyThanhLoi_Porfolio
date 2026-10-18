"use client";

import { useEffect, useRef, useState } from "react";
import { skillGroups } from "@/data/skills";
import { HudSkillCard } from "./HudSkillCard";
import { Reveal } from "./Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const CAPSULE_VIDEO = "/assets/videos/capsule-csc7x.mp4";
const CAPSULE_LEAD_MS = 900;
const MODULE_STAGGER_MS = 220;

export function Skills() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);
  const [capsuleLive, setCapsuleLive] = useState(false);
  const [visibleModules, setVisibleModules] = useState(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (reduced) {
      setInView(true);
      setCapsuleLive(true);
      setVisibleModules(skillGroups.length);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!inView || reduced) return;
    const t = window.setTimeout(() => setCapsuleLive(true), 120);
    return () => window.clearTimeout(t);
  }, [inView, reduced]);

  useEffect(() => {
    if (!capsuleLive || reduced) return;
    const t0 = window.setTimeout(() => {
      let count = 0;
      const tick = () => {
        count += 1;
        setVisibleModules(count);
        if (count < skillGroups.length) {
          window.setTimeout(tick, MODULE_STAGGER_MS);
        }
      };
      tick();
    }, CAPSULE_LEAD_MS);
    return () => window.clearTimeout(t0);
  }, [capsuleLive, reduced]);

  return (
    <section id="skills" className="scroll-mt-24 border-t border-panel-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-cyan-glow/80 uppercase">
            Technical Abilities
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            Skill Modules
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            Verified skills from my profile — capsule sync, then module deploy.
          </p>
        </Reveal>

        <div
          ref={stageRef}
          className="skills-capsule-stage relative mt-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-6 xl:gap-10"
        >
          <div
            className={`skills-capsule-bleed relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none ${capsuleLive ? "skills-capsule-live" : ""}`}
            aria-hidden
          >
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

          <div className="skills-modules-rail relative mt-8 flex flex-col gap-3 sm:gap-4 lg:mt-0">
            {skillGroups.map((group, i) => (
              <HudSkillCard
                key={group.id}
                group={group}
                index={i}
                revealed={visibleModules > i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
