"use client";

import type { Project } from "@/data/projects";
import { projectThemes } from "@/data/projectThemes";

type Props = {
  project: Project;
  onBack?: () => void;
};

const accentBorder: Record<Project["accent"], string> = {
  cyan: "border-cyan-glow/30",
  violet: "border-violet-glow/30",
  amber: "border-amber-400/30",
  emerald: "border-emerald-400/30",
};

/** Inline project detail (right pane — not a modal). */
export function ProjectDetailView({ project, onBack }: Props) {
  const theme = projectThemes[project.id];

  return (
    <article
      key={project.id}
      className={`project-detail-view relative overflow-hidden rounded-xl border bg-void-elevated ${accentBorder[project.accent]}`}
      aria-labelledby="project-detail-title"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.scan} to-transparent opacity-40`}
        aria-hidden
      />
      <div className="relative border-b border-panel-border px-5 py-4 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden>
              {project.glyph}
            </span>
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-text-muted uppercase">
                {theme.label}
              </p>
              <h2 id="project-detail-title" className="text-xl font-medium sm:text-2xl">
                {project.name}
              </h2>
            </div>
          </div>
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="shrink-0 rounded-md border border-panel-border px-3 py-1 text-xs text-text-muted hover:text-text-primary"
            >
              Grid view
            </button>
          ) : null}
        </div>
      </div>

      <div className="relative max-h-[min(70vh,640px)] space-y-6 overflow-y-auto p-5 sm:p-6">
        <section>
          <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
            Overview
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.shortDescription}</p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
            Problem & Purpose
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.purpose}</p>
        </section>

        {project.role ? (
          <section>
            <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
              Contribution
            </h3>
            <p className="mt-2 text-sm text-text-primary">{project.role}</p>
          </section>
        ) : null}

        <section>
          <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
            Features
          </h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-text-muted">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
            Technology Stack
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className={`rounded-md border px-2 py-1 text-xs ${theme.tag}`}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-panel px-4 py-2 text-sm text-cyan-glow hover:bg-panel/80"
          >
            {project.sourceRepos?.length
              ? "Source — Mai Yen Vy"
              : "View Source (GitHub)"}
          </a>
          {project.sourceRepos?.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-panel/60 px-4 py-2 text-sm text-cyan-glow/90 hover:bg-panel/80"
            >
              Source — {repo.label}
            </a>
          ))}
          {project.liveDemos?.map((demo) => (
            <a
              key={demo.url}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-panel-border px-4 py-2 text-sm text-text-primary hover:border-emerald-400/40"
            >
              Live — {demo.label}
              {project.demoVerified ? "" : " (unverified)"}
            </a>
          ))}
          {!project.liveDemos?.length && project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-panel-border px-4 py-2 text-sm text-text-primary hover:border-emerald-400/40"
            >
              Live Demo
              {project.demoVerified ? "" : " (unverified)"}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
