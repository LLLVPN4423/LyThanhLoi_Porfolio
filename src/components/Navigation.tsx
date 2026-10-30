"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { hash: "#hero", label: "Entrance" },
  { hash: "#about", label: "Profile" },
  { hash: "#skills", label: "Abilities" },
  { hash: "#projects", label: "Archive" },
  { hash: "#timeline", label: "Timeline" },
  { hash: "#contact", label: "Portal" },
];

export function Navigation() {
  const [active, setActive] = useState("#hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.hash))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

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
        <Link
          href="/#hero"
          className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-cyan-glow/90 uppercase"
        >
          LTL Archive
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={`/${link.hash}`}
              className={`rounded-md px-3 py-1.5 text-xs tracking-wide uppercase transition-colors ${
                active === link.hash
                  ? "bg-panel text-cyan-glow"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
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
              <li key={link.hash}>
                <Link
                  href={`/${link.hash}`}
                  className="block py-2 text-sm text-text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
