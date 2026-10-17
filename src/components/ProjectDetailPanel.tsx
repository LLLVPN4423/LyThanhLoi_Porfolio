"use client";

import { useEffect } from "react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

const accentBorder: Record<Project["accent"], string> = {
  cyan: "border-cyan-glow/30",
  violet: "border-violet-glow/30",
  amber: "border-amber-400/30",
  emerald: "border-emerald-400/30",
};

export function ProjectDetailPanel({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onClick={onClose}
    >
      <div
        className={`max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border bg-void-elevated sm:rounded-2xl ${accentBorder[project.accent]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-panel-border bg-void-elevated/95 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>
              {project.glyph}
            </span>
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-text-muted uppercase">
                Artifact record
              </p>
              <h2 id="project-detail-title" className="text-lg font-medium">
                {project.name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-panel-border px-3 py-1 text-xs text-text-muted hover:text-text-primary"
          >
            Close
          </button>
        </div>

        <div className="space-y-6 p-5">
          <section>
            <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
              Overview
            </h3>
            <p className="mt-2 text-sm text-text-muted">{project.shortDescription}</p>
          </section>

          <section>
            <h3 className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
              Problem & Purpose
            </h3>
            <p className="mt-2 text-sm text-text-muted">{project.purpose}</p>
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
                  className="rounded-md border border-panel-border bg-panel px-2 py-1 text-xs"
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
              View Source (GitHub)
            </a>
            {project.demoUrl ? (
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
      </div>
    </div>
  );
}
