"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { projectThemes } from "@/data/projectThemes";
import { ProjectDetailPanel } from "./ProjectDetailPanel";
import { Reveal } from "./Reveal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-panel-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-violet-glow/80 uppercase">
            Project Archive
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            Verified Artifacts
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            Projects sourced from my CV and public GitHub repositories — each links to the original repo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => {
            const theme = projectThemes[project.id];
            return (
              <Reveal key={project.id} delayMs={i * 70}>
                <article
                  className={`project-theme-card group relative overflow-hidden rounded-xl border bg-panel/30 transition hover:scale-[1.01] ${theme.frame}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.scan} to-transparent opacity-90`}
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.06] scanline-overlay" aria-hidden />

                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="relative w-full p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-glow"
                  >
                    <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-widest text-text-muted uppercase">
                      {theme.label}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-3">
                      <span className="text-3xl" aria-hidden>
                        {project.glyph}
                      </span>
                      <span className="font-[family-name:var(--font-mono)] text-[10px] text-text-muted uppercase">
                        Open record
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium">{project.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-text-muted">
                      {project.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className={`rounded border px-2 py-0.5 text-[10px] ${theme.tag}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </button>
                  <div className="relative flex gap-2 border-t border-panel-border/80 px-5 py-3">
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-glow hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-400/90 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectDetailPanel project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
