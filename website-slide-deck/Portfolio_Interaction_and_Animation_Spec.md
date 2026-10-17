# Portfolio Interaction and Animation Spec

**Scope:** Current production portfolio only (no proposed features).  
**Production URL:** https://ly-thanh-loi-porfolio.vercel.app  
**Primary code paths:** `src/components/*`, `src/app/globals.css`

Legend: **Code** = verified in source. **Live** = observed on Vercel. **Estimate** = behavior inferred, not measured in browser.

---

## Global

| Component | Effect | Trigger | Duration / easing | Properties | Order | Responsive | Source |
|-----------|--------|---------|-------------------|------------|-------|------------|--------|
| `html` | Smooth scroll to `#` anchors | Click in-page links | Browser default smooth scroll | `scroll-behavior: smooth` | — | Same | **Code** |
| `html` (reduced motion) | Disable smooth scroll | `prefers-reduced-motion: reduce` | Instant | `scroll-behavior: auto` | — | Same | **Code** |
| `body` | Base theme | — | — | bg `#07080F`, text `#E8EAF0`, DM Sans | — | Same | **Code** |
| `::selection` | Highlight color | Text selection | — | cyan mix 35% | — | Same | **Code** |

---

## ScrollProgress

| Component | Effect | Trigger | Duration / easing | Properties | Order | Responsive | Source |
|-----------|--------|---------|-------------------|------------|-------|------------|--------|
| Top bar | Width grows with scroll depth | `window.scroll` | `transition-[width] duration-150` (**150ms**, easing default) | Gradient cyan → violet; height 2px (`h-0.5`); `z-index` 60 | — | Same | **Code** |
| Progress value | `(scrollY / (scrollHeight - clientHeight)) * 100` | scroll | Updated each scroll event | `width: ${progress}%` | — | Same | **Code** |

---

## Navigation

| Component | Effect | Trigger | Duration / easing | Properties | Order | Responsive | Source |
|-----------|--------|---------|-------------------|------------|-------|------------|--------|
| Header | Fixed top, blur backdrop | — | — | `bg-void/80`, `backdrop-blur-md`, border bottom | — | Same | **Code** |
| Desktop links | Active pill background | Scroll past section tops (`scrollY + 120`) | `transition-colors` (duration not specified → browser default) | Active: `bg-panel text-cyan-glow`; inactive: `text-text-muted` | Last matching section wins | Hidden `< md` | **Code** |
| Desktop links | Hover | `:hover` | `transition-colors` | Muted → primary text | — | — | **Code** |
| Mobile **Menu** button | Toggle drawer | Click | — | Shows vertical link list | — | `md:hidden` only | **Code** |
| Mobile drawer | Open / close | Menu click; link click closes (`setOpen(false)`) | — | `bg-void-elevated`, border top | — | **Code** |

**Not present:** animated hamburger icon, slide-in animation for drawer (instant show/hide via conditional render).

---

## Reveal (scroll into view)

| Component | Effect | Trigger | Duration / easing | Properties | Order | Responsive | Source |
|-----------|--------|---------|-------------------|------------|-------|------------|--------|
| Wrapped blocks | Fade + rise | `IntersectionObserver` `isIntersecting` | **650ms** `cubic-bezier(0.22, 1, 0.36, 1)` | From: opacity 0, `translateY(20px)` → visible | Per-element `delayMs` prop (stagger) | Same | **Code** |
| Observer options | — | Enter viewport | — | `threshold: 0.12`, `rootMargin: 0px 0px -8% 0px` | — | Same | **Code** |
| Reduced motion | Skip animation | `prefers-reduced-motion: reduce` | Immediate visible | No observer animation | — | **Code** |
| Hero | Staggered reveals | On load / scroll into hero | 0, 80, 160, 240, 320 ms delays on children | — | Top to bottom | Same | **Code** |
| Skills grid | Stagger | Scroll | `i * 60` ms per card | — | Left→right grid order | Same | **Code** |
| Projects grid | Stagger | Scroll | `i * 70` ms per card | — | — | Same | **Code** |
| Timeline items | Stagger | Scroll | `i * 50` ms | — | — | Same | **Code** |

**Not present:** parallax on Reveal layers.

---

## Hero decorative layers

| Component | Effect | Trigger | Duration / easing | Properties | Order | Source |
|-----------|--------|---------|-------------------|------------|-------|--------|
| `.grid-bg` | Static grid + radial mask | — | — | 48px grid, mask ellipse | Behind content | **Code** |
| Violet blob | Static blur decoration | — | — | `bg-violet-glow/10 blur-3xl` | No scroll-linked motion | **Code** |
| Primary CTA | Hover background | `:hover` | `transition` on button | `hover:bg-panel/80` | — | **Code** |
| Secondary buttons | Hover border/text | `:hover` | `transition` | Border cyan / text primary or cyan | — | **Code** |

---

## Skills

| Component | Effect | Trigger | Duration / easing | Properties | Order | Source |
|-----------|--------|---------|-------------------|------------|-------|--------|
| Module card | Hover | `:hover` | `transition` | `hover:border-cyan-glow/35`, `hover:bg-panel/70` | — | **Code** |
| Module card | Focus visible | Keyboard focus | — | Outline cyan 2px offset | — | **Code** |
| Detail panel | Inline expand below grid | Click card → `setActive(group)` | **Instant** (no CSS enter animation) | Border cyan/25, chips for items | — | **Code** |
| Dismiss | Close panel | Click **Dismiss** | Instant | `setActive(null)` | — | **Code** |

---

## Projects

| Component | Effect | Trigger | Duration / easing | Properties | Order | Source |
|-----------|--------|---------|-------------------|------------|-------|--------|
| Card | Hover border | `:hover` | `transition` | `hover:border-cyan-glow/30` | — | **Code** |
| Card button | Open modal | Click card (not footer links) | Instant state change | `setSelected(project)` | — | **Code** |
| Footer **GitHub** / **Live Demo** | Navigate away | Click (stopPropagation) | — | External links | — | **Code** |
| Accent gradient | Static overlay | — | — | `bg-gradient-to-br` per accent color at ~15% opacity | Under text | **Code** |

---

## ProjectDetailPanel (modal)

| Component | Effect | Trigger | Duration / easing | Properties | Order | Responsive | Source |
|-----------|--------|---------|-------------------|------------|-------|------------|--------|
| Overlay | Dim background | Modal open | **Instant** | `bg-black/70`, fixed inset | — | Same | **Code** |
| Panel | Appears over overlay | Modal open | **No CSS transition defined** — instant mount | `max-w-2xl`, scroll inside | — | **Estimate:** appears immediately |
| Mobile layout | Bottom-aligned sheet | Viewport `< sm` | — | `items-end`, `rounded-t-2xl` | — | **Code** |
| Desktop layout | Centered | `sm:` breakpoint | — | `sm:items-center`, `sm:rounded-2xl`, padding | — | **Code** |
| Close | Button, overlay click, **Escape** | User action | Instant | Restores `body overflow`, removes key listener | — | **Code** |
| Open side effect | Lock scroll | Modal open | — | `document.body.style.overflow = hidden` | — | **Code** |

**Not verified on live:** exact motion curve for panel (no transition classes in component).

---

## About, Timeline, Contact, Footer

| Component | Effect | Trigger | Source |
|-----------|--------|---------|--------|
| Section headings + cards | Reveal on scroll | IntersectionObserver via `Reveal` | **Code** |
| Contact cards | Hover border | `:hover` border cyan/violet | **Code** |
| Footer links | Hover text color | `:hover` | **Code** |

---

## Storyboard slides in deck

| Deck slide | Documents |
|------------|-----------|
| S16 | Reveal hidden → visible (3 frames) |
| S17 | Modal open/close sequence |
| S18 | Scroll progress at ~8%, ~32%, ~67% bar width (**illustrative** ratios) |

---

## Not in current website

- Route transitions (single page)
- Page load splash / loader
- Parallax scroll on background
- Continuous particle animations
- Project modal enter/exit CSS animations
- GitHub API live fetch

---

## Handback workflow (for design edits)

1. Edit shapes/text in `Portfolio_Current_Version.pptx` (or Canva import).
2. Export optional PDF for review.
3. Send updated PPTX/PDF + short change notes (which slide IDs changed).
4. Developer maps slide groups back to `src/components/*` and `src/data/*` — **out of scope for this deliverable**.
