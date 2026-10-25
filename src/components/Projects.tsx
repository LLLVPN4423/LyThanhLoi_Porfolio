"use client";

import { useCallback, useEffect, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { projectThemes } from "@/data/projectThemes";
import { ProjectDetailView } from "./ProjectDetailPanel";
import { Reveal } from "./Reveal";

function activate(project: Project, setActiveId: (id: string) => void) {
  setActiveId(project.id);
}

function ProjectListCard({
  project,
  compact,
  isActive,
  onActivate,
}: {
  project: Project;
  compact: boolean;
  isActive: boolean;
  onActivate: () => void;
}) {
  const theme = projectThemes[project.id];

  if (compact) {
    return (
      <button
        type="button"
        onClick={onActivate}
        className={`project-list-compact group relative w-full overflow-hidden rounded-lg border bg-panel/40 p-3 text-left transition-all duration-400 ease-out ${
          isActive
            ? "border-cyan-glow/50 bg-panel/70 shadow-[0_0_20px_-6px_rgba(34,211,238,0.35)]"
            : "border-panel-border hover:border-cyan-glow/25"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl opacity-90" aria-hidden>
            {project.glyph}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-text-primary">{project.name}</p>
            <p className="truncate font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wide text-text-muted">
              {theme.label}
            </p>
          </div>
        </div>
      </button>
    );
  }

  return (
    <article
      className={`project-theme-card group relative overflow-hidden rounded-xl border bg-panel/30 transition-all duration-500 ease-out hover:scale-[1.01] ${theme.frame} ${isActive ? "ring-1 ring-cyan-glow/40" : ""}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.scan} to-transparent opacity-90`}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] scanline-overlay" aria-hidden />

      <button
        type="button"
        onClick={onActivate}
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
        <p className="mt-2 line-clamp-2 text-sm text-text-muted">{project.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className={`rounded border px-2 py-0.5 text-[10px] ${theme.tag}`}>
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
        {project.liveDemos?.length ? (
          <span
            className="text-xs text-emerald-400/90"
            onClick={(e) => e.stopPropagation()}
          >
            {project.liveDemos.length} live sites
          </span>
        ) : project.demoUrl ? (
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
  );
}

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const split = activeId !== null;
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  const clearSplit = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!split) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") clearSplit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [split, clearSplit]);

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

        <div className={`project-archive-stage mt-10 ${split ? "is-split" : ""}`}>
          <div className={`project-archive-list ${split ? "is-split" : "is-grid"}`}>
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={split ? "" : ""}
                style={split ? undefined : { animationDelay: `${i * 40}ms` }}
              >
                <ProjectListCard
                  project={project}
                  compact={split}
                  isActive={activeId === project.id}
                  onActivate={() => activate(project, setActiveId)}
                />
              </div>
            ))}
          </div>

          <div className={`project-archive-detail ${split && activeProject ? "is-visible" : ""}`}>
            {activeProject ? (
              <ProjectDetailView project={activeProject} onBack={clearSplit} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
