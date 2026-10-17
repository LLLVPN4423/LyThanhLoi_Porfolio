import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-panel-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-text-muted md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {year} {profile.nameDisplay} — Digital Archive
        </p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer">
          <a href="#projects" className="hover:text-text-primary">
            Projects
          </a>
          <a href={profile.github} className="hover:text-cyan-glow" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#hero" className="hover:text-text-primary">
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
