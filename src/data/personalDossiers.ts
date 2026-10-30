export type PersonalDossier = {
  slug: string;
  label: string;
  hint: string;
  glyph: string;
};

/** Personal interest dossiers — each button opens a dedicated route (content TBD). */
export const personalDossiers: PersonalDossier[] = [
  {
    slug: "fitness",
    label: "Strength & fitness training",
    hint: "Training chronicle, discipline, long-term gym log",
    glyph: "⚡",
  },
  {
    slug: "scholar",
    label: "Theories, philosophy & science",
    hint: "Physics, chemistry, biology, archaeology, and ideas that shape how I think",
    glyph: "✦",
  },
  {
    slug: "languages-design",
    label: "Languages & publication design",
    hint: "Learning languages and applying them to print and digital publications",
    glyph: "文",
  },
  {
    slug: "electronics",
    label: "Electronics & devices",
    hint: "Hardware, gadgets, and hands-on electronics curiosity",
    glyph: "⎔",
  },
];

export function getDossierBySlug(slug: string): PersonalDossier | undefined {
  return personalDossiers.find((d) => d.slug === slug);
}
