import Link from "next/link";
import { notFound } from "next/navigation";
import { getDossierBySlug, personalDossiers } from "@/data/personalDossiers";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return personalDossiers.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dossier = getDossierBySlug(slug);
  if (!dossier) return { title: "Dossier — Ly Thanh Loi" };
  return {
    title: `${dossier.label} — Personal Dossier`,
    description: dossier.hint,
  };
}

export default async function DossierPage({ params }: Props) {
  const { slug } = await params;
  const dossier = getDossierBySlug(slug);
  if (!dossier) notFound();

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 md:px-6 md:py-28">
      <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-violet-glow/80 uppercase">
        Personal dossier
      </p>
      <div className="mt-4 flex items-start gap-4">
        <span className="text-4xl" aria-hidden>
          {dossier.glyph}
        </span>
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            {dossier.label}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{dossier.hint}</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-panel-border bg-panel/30 p-6">
        <p className="font-[family-name:var(--font-mono)] text-xs text-cyan-glow uppercase">
          Status
        </p>
        <p className="mt-2 text-sm text-text-muted">
          This space is reserved for a themed personal archive — visuals, notes, and media for
          this interest. Content coming soon.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/#about"
          className="rounded-lg border border-cyan-glow/40 bg-panel/60 px-4 py-2 text-sm text-cyan-glow hover:bg-panel"
        >
          ← Back to Profile
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-panel-border px-4 py-2 text-sm text-text-muted hover:text-text-primary"
        >
          Entrance
        </Link>
      </div>
    </div>
  );
}
