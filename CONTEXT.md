# Project Context — LyThanhLoi Portfolio (2D + Mythos 3D)

> **Agents: read this file first.** Prefer this over scanning the whole repo.  
> After every meaningful change, append an entry under [Change log](#change-log).

## What this project is

- **2D site:** Next.js 15 (App Router) + React 19 + Tailwind 4 — fantasy × tech personal portfolio.
- **3D experience:** static Mythos Nexus scene at `/3d/index.html` (Three.js 0.147 single HTML file + GLBs).
- **Live:** https://ly-thanh-loi-porfolio.vercel.app/  
  **3D:** https://ly-thanh-loi-porfolio.vercel.app/3d/index.html  
- **GitHub:** `LLLVPN4423/LyThanhLoi_Porfolio` · Vercel project `ly-thanh-loi-porfolio`

Visitors switch modes: Hero CTA **Enter 3D Mythos** ↔ Mythos boot/end **2D Portfolio**.

## Repo map (read these, not everything)

| Path | Role |
|------|------|
| `src/app/` | Next routes / layout |
| `src/components/` | UI (Hero, Contact, projects, etc.) |
| `src/data/` | Content: `profile.ts`, `projects.ts`, `timeline.ts`, skills, dossiers |
| `public/3d/` | **Shipped** Mythos build (`index.html` + slim `assets/mythos/models/**`) |
| `scripts/sync-mythos-3d.mjs` | Sync allowlisted GLBs + HTML from Mythos workspace → `public/3d` |
| `next.config.ts` | Next config (keep `/3d` simple — avoid trailing-slash redirect loops) |

### Mythos authoring workspace (outside this git repo)

- Edit source here: `D:\repos\lythanhloi porfolio 3d\ver3\ltl-portfolio-final\index-mythos.html`
- Do **not** overwrite that folder’s `index.html` with Mythos.
- After Mythos edits: `node scripts/sync-mythos-3d.mjs` then commit `public/3d`.

## Architecture notes

### 2D
- Content-driven: change copy in `src/data/*`, not hardcode in components when possible.
- `profile.mythosUrl` → `/3d/index.html` (use this path; `/3d/` can 308-loop with redirects).

### 3D (`public/3d/index.html`)
- One CONFIG block at top: profile, skills, projects, chronicle, contacts, models.
- Scroll progress `pr` → camera keyframes `K`, beat weights (`skillW`, `archW`, `chronW`, `warnW`, `ko`, `wakeW`).
- HUD panels = CanvasTexture holograms (`mkTex` / `tx` / `txProfile` / `txSkillCard` / `paintChronicle`) + shader `hp()`.
- Asset load: queued (`_lq`), critical planet/airlock first → unlock Enter; heavy hull/wreck `late:1` after enter; beats 1–3 on enter/scroll (not all at boot).
- Do **not** reuse identifier `_q` (already used for `?q=` quality). Load queue is `_lq`.
- Default `CONFIG.quality:'dev'`; bloom/HDRI mainly for `#q=cinematic`.

### Deploy size
- Only ~17 allowlisted GLBs in `public/3d` (~60MB+). Never copy full Mythos `assets/` (~445MB).

## Hard constraints

- Never commit secrets / `.env` with credentials.
- Don’t invent portfolio facts — sync from `src/data` / Mythos CONFIG / verified GitHub.
- Prefer small, focused diffs; update this CONTEXT change log when done.
- Windows: this clone may need `git -c safe.directory=...` if ownership is “dubious”; don’t rewrite global git config unless the user asks.

## Agent workflow (token-saving)

1. Read **this file** (+ only files listed for the task).
2. Do the change.
3. Append a **Change log** entry (date, what, why, key paths).
4. If Mythos: edit workspace HTML → run sync script → commit `public/3d`.
5. Commit/push only when the user asks (unless they already asked in the same turn).

## Change log

### 2026-11-05 — Add agent CONTEXT + always-on Cursor rule
- Added `CONTEXT.md` (project brief + map + constraints + this log).
- Added `.cursor/rules/project-context.mdc` (`alwaysApply: true`) so agents must read/update this file.
- **Why:** Cut token burn from full-repo rediscovery on every agent session.

### 2026-11-02 — Mythos on same repo + readability / boot fixes (summary)
- Shipped slim Mythos under `public/3d/`; Hero CTA; cross-links 2D↔3D.
- Boot crash fix: rename load queue `_q` → `_lq`.
- Faster boot (crit-first queue, defer heavy GLBs); lower particles/DPR for less lag.
- HUD text pass: higher canvas supersample, Segoe UI bold, stronger contrast, shorter archive cards, less fog on HUD beats, more frontal camera.
- Paths: `public/3d/index.html`, `src/components/Hero.tsx`, `src/data/profile.ts`, `scripts/sync-mythos-3d.mjs`.
