import type { Project } from "./projects";

export type ProjectTheme = {
  frame: string;
  corner: string;
  tag: string;
  scan: string;
  label: string;
};

/** Distinct sci-fi / cyberpunk card skins per artifact */
export const projectThemes: Record<Project["id"], ProjectTheme> = {
  crayonnote: {
    label: "NEON NOTES / AI SCRIBE",
    frame: "border-violet-glow/40 shadow-[inset_0_0_30px_rgba(167,139,250,0.12)]",
    corner: "before:border-violet-glow/50",
    tag: "bg-violet-glow/15 text-violet-glow border-violet-glow/30",
    scan: "from-violet-glow/20",
  },
  minihongo: {
    label: "KANJI RELAY / MOBILE NET",
    frame: "border-cyan-glow/45 shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)]",
    corner: "before:border-cyan-glow/60",
    tag: "bg-cyan-glow/10 text-cyan-glow border-cyan-glow/35",
    scan: "from-cyan-glow/25",
  },
  "aiko-tarot": {
    label: "ORACLE deck / PET SIGIL",
    frame: "border-amber-400/40 shadow-[inset_0_0_40px_rgba(251,191,36,0.08)]",
    corner: "before:border-amber-400/50",
    tag: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    scan: "from-amber-400/20",
  },
  "aws-report": {
    label: "CLOUD LOG / FCJ STREAM",
    frame: "border-emerald-400/40 shadow-[0_0_20px_-4px_rgba(52,211,153,0.4)]",
    corner: "before:border-emerald-400/55",
    tag: "bg-emerald-400/10 text-emerald-300 border-emerald-400/35",
    scan: "from-emerald-400/22",
  },
  taskmanager: {
    label: "OPS GRID / TEAM SYNC",
    frame: "border-cyan-glow/35 border-dashed",
    corner: "before:border-cyan-glow/40",
    tag: "bg-panel text-cyan-glow border-panel-border",
    scan: "from-cyan-glow/15",
  },
  "music-player": {
    label: "AUDIO VAULT / DESKTOP RX",
    frame: "border-violet-glow/35 shadow-[4px_4px_0_0_rgba(167,139,250,0.15)]",
    corner: "before:border-violet-glow/45",
    tag: "bg-violet-glow/10 text-violet-glow border-violet-glow/25",
    scan: "from-violet-glow/18",
  },
};
