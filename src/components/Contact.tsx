import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Contact() {
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-panel-border bg-panel/50 p-5 transition hover:border-cyan-glow/35"
            >
              <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted uppercase">
                Email
              </p>
              <p className="mt-2 text-sm text-cyan-glow">{profile.email}</p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-panel-border bg-panel/50 p-5 transition hover:border-violet-glow/35"
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
