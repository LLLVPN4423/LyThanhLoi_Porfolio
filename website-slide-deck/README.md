# Website slide deck (current portfolio version)

Editable **16:9** mock of https://ly-thanh-loi-porfolio.vercel.app for design edits in PowerPoint or Canva.

## Files

| File | Purpose |
|------|---------|
| `Portfolio_Current_Version.pptx` | Editable slide deck (18 slides) |
| `Portfolio_Current_Version_Reference.pdf` | PDF preview of all slides |
| `Portfolio_Screen_Inventory.md` | Slide ↔ website mapping + verification |
| `Portfolio_Interaction_and_Animation_Spec.md` | Motion and interaction reference |
| `generate_deck.mjs` | Regenerate PPTX from embedded copy of site content |

## Regenerate PPTX

```bash
npm install
npm run generate
```

Re-export PDF in PowerPoint: **File → Save As → PDF** → `Portfolio_Current_Version_Reference.pdf`.

## Import into Canva

1. Open [Canva](https://www.canva.com) → **Create a design** → **Import file**.
2. Upload `Portfolio_Current_Version.pptx`.
3. Canva converts slides to editable pages (some font/spacing drift is normal).
4. Replace fonts with **Cinzel** (headings), **DM Sans** (body), **JetBrains Mono** (labels) if available.
5. Edit shapes and text per slide; keep slide IDs in notes (footer meta line) for handback.

## Send edits back for website update

1. Export from Canva as **PPTX** or **PDF** (plus optional written notes).
2. List changed **slide IDs** (S01–S18) and what changed (colors, copy, layout).
3. Share the file — developer updates `src/components/*` and `src/data/*` to match (separate task).

**Do not** expect automatic sync from Canva to the live site; handoff is manual by design.
