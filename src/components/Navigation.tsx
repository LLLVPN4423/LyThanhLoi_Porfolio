"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Entrance" },
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Abilities" },
  { href: "#projects", label: "Archive" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Portal" },
];

export function Navigation() {
  const [active, setActive] = useState("#hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = "#hero";
      for (const section of sections) {
        if (section.offsetTop <= y) current = `#${section.id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-panel-border/80 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#hero"
          className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-cyan-glow/90 uppercase"
        >
          LTL Archive
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-xs tracking-wide uppercase transition-colors ${
                active === link.href
                  ? "bg-panel text-cyan-glow"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-panel-border px-3 py-1.5 text-xs text-text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-panel-border bg-void-elevated px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm text-text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
