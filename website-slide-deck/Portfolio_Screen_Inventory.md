# Portfolio Screen Inventory

**Source website (production):** https://ly-thanh-loi-porfolio.vercel.app  
**Source codebase:** `D:\download\LyThanhLoi_Porfolio\src`  
**Deck generated:** `D:\download\LyThanhLoi_Porfolio\website-slide-deck\Portfolio_Current_Version.pptx`  
**Comparison date:** 2026-10-17  

## Production vs local code

| Check | Status |
|--------|--------|
| Section order (Hero → About → Skills → Projects → Timeline → Contact → Footer) | **Verified** — matches `src/app/page.tsx` and live DOM |
| Navigation labels (Entrance … Portal) | **Verified** — code + live |
| Project count (6) and names | **Verified** — code + live |
| Live Demo only on AWS Internship Report Site | **Verified** — live |
| Vercel URL | **Verified** — README + deployment history |

No drift observed between production and repository at generation time.

## Slide map (18 slides)

| Slide ID | Represents | Verification |
|----------|------------|--------------|
| S01 | Desktop hero (#hero), nav **Entrance** active, scroll progress low, grid background, portal card | Code + live (hero copy) |
| S02 | **About Me** — Summary + Attributes cards | Code + live |
| S03 | **Skill Modules** — default (no inline detail panel) | Code + live |
| S04 | **Skill Modules** — detail panel open (Programming Languages) | Code (Skills.tsx); live interaction **observed** via button roles |
| S05 | **Projects** — cards 1–4 (CrayonNote … AWS) | Code + live |
| S06 | **Projects** — cards 5–6 (TaskManager, Music Player) | Code + live |
| S07 | **Projects** — CrayonNote card **hover** (cyan border) | Code (`hover:border-cyan-glow/30`); hover **not re-recorded on video** — layout from code |
| S08 | **Before modal** — user clicks project card | Code (Projects.tsx) |
| S09 | **Project modal open** — CrayonNote full panel | Code + live structure (modal not opened in automated pass) |
| S10 | **Timeline** entries 1–4 | Code + live |
| S11 | **Timeline** entries 5–7 | Code + live |
| S12 | **Connect** + **Footer** | Code + live |
| S13 | **Mobile** hero stacked (`md:` breakpoint) | Code (Tailwind responsive); **not pixel-verified** on device |
| S14 | **Mobile** nav menu open | Code (Navigation.tsx) |
| S15 | **Mobile** modal bottom sheet (`items-end`) | Code (ProjectDetailPanel.tsx) |
| S16 | Storyboard — scroll **Reveal** | Code (`Reveal.tsx`, `globals.css`) |
| S17 | Storyboard — project modal flow | Code |
| S18 | Storyboard — scroll progress bar | Code (`ScrollProgress.tsx`) |

## Website sections not given separate slides

| Item | Reason |
|------|--------|
| Full-page single screenshot | Excluded per task (no screenshot-only slides) |
| Each of 6 project modals | One representative modal (CrayonNote) matches all panel layouts |
| Nav active state for every section | Shown via nav on section slides; scroll-spy behavior documented in animation spec |
| `prefers-reduced-motion` | Documented only (no separate slide) |
| Parallax | **Not present** in codebase — not slide-decked |

## Editable vs static in PPTX

| Editable in PowerPoint / Canva | Notes |
|--------------------------------|--------|
| All text boxes | Real text, not rasterized |
| Rectangles / roundRects (cards, nav, buttons, modal) | Separate shapes; fill + line colors match CSS hex |
| Grid lines (hero) | Separate line shapes; optional to hide |
| Storyboard frames S16–S18 | Documentation slides; dark background shape + text |

| Limitation | Notes |
|------------|--------|
| Font rendering | Deck uses **Georgia / Calibri / Consolas** as stand-ins for **Cinzel / DM Sans / JetBrains Mono** |
| Backdrop blur on nav | Approximated as semi-transparent fill (no true blur in PPTX) |
| `glow-ring` box-shadow | Approximated with border color only |
| Gradient accent on project cards | Semi-transparent accent rectangle overlay |

## Reference assets (not slide content)

- `slide_manifest.json` — machine-readable slide list from generator
- `generate_deck.mjs` — regenerate deck after content changes in `src/data/*`

## Regenerate deck

```bash
cd D:\download\LyThanhLoi_Porfolio\website-slide-deck
npm run generate
```

Then re-export PDF (PowerPoint: **File → Save As → PDF**) if `Portfolio_Current_Version_Reference.pdf` must be updated.
