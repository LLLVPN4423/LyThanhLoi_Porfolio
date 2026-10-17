import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pptxgen from "pptxgenjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PPTX = path.join(__dirname, "Portfolio_Current_Version.pptx");

const C = {
  void: "07080F",
  voidElevated: "0E1019",
  panel: "12151F",
  border: "1E2433",
  cyan: "22D3EE",
  violet: "A78BFA",
  text: "E8EAF0",
  muted: "9499AB",
  amber: "FBBF24",
  emerald: "34D399",
};

const FONT_DISPLAY = "Georgia";
const FONT_BODY = "Calibri";
const FONT_MONO = "Consolas";
const NAV = ["Entrance", "Profile", "Abilities", "Archive", "Timeline", "Portal"];

const PROFILE = {
  name: "Ly Thanh Loi",
  monoTag: "digital_grimoire.init()",
  headline:
    "Information Technology student bridging infrastructure, analytical thinking, and Generative AI to build reliable software systems.",
  career:
    "Leveraging IT infrastructure, analytical thinking, and Generative AI to optimize operational processes and data — creating tangible value while growing skills in coordinating comprehensive software systems.",
  intro:
    "Fourth-year student at HUTECH (Vietnam–Japan Institute). I combine backend development, cross-platform apps, and AI integration with a focus on accurate data flow, standardized processes, and operational performance.",
  direction:
    "Building a solid foundation in system operations and administration, combining development logic with enterprise-oriented solutions and cloud infrastructure.",
  email: "ltl2004123@gmail.com",
  github: "@LLLVPN4423",
};

const ATTRIBUTES = [
  ["Identity", "Ly Thanh Loi"],
  ["Institute", "Information Technology — Vietnam–Japan Institute"],
  ["Academy", "Ho Chi Minh City University of Technology (HUTECH)"],
  ["Cycle", "2022 – 2026"],
  ["Status", "Fourth-year student"],
  ["Focus", "Backend Developer · Team Lead · UI/UX Optimization"],
];

const SKILL_GROUPS = [
  ["◈", "Programming Languages", "C# · Java · JavaScript"],
  ["⬡", "Frameworks & Platforms", ".NET MAUI · ASP.NET Core · Spring Boot (J2EE) · WinForms"],
  ["◇", "Databases", "SQL Server · MySQL · SQLite · Firebase"],
  ["✦", "Architecture & Patterns", "MVVM · Repository Pattern · Dependency Injection · RESTful API"],
  ["◎", "Testing & Quality", "NUnit · Gauge Framework"],
  ["⎔", "Tools, AI & Platforms", "Git / GitHub · Adobe XD · GitHub Copilot · Gemini, ChatGPT, Claude · Google Workspace"],
];

const PROJECTS = [
  ["violet", "✎", "CrayonNote", "Cross-platform note-taking app (.NET MAUI) with AI-powered speech-to-text.", [".NET MAUI", "C#", "SQLite (ORM)", "OpenAI Whisper API"], true],
  ["cyan", "文", "MiniHongo", "Mobile app for Japanese vocabulary and Kanji learning across platforms.", [".NET MAUI", "C#", "SQLite", "RESTful API"], false],
  ["amber", "☽", "Bé Tabby Tarot (Pet Tarot)", "Bilingual (VI/EN) pet-themed tarot web app — 22 Major Arcana with shuffle and journal.", ["TypeScript", "React", "Next.js"], false],
  ["emerald", "☁", "AWS Internship Report Site", "Bilingual Hugo site documenting AWS Vietnam FCJ Cloud Engineer internship.", ["Hugo", "GitHub Actions", "GitHub Pages"], true],
  ["cyan", "☑", "Task Management System", "Online task management and team collaboration with permissions and progress tracking.", ["Java Spring Boot", "MySQL", "Spring Security", "RESTful API"], false],
  ["violet", "♫", "Music Player (Desktop)", "Windows multimedia player with modern UI, playlists, and multiple formats.", ["C#", "WinForms", ".NET", "NUnit"], false],
];

const TIMELINE = [
  ["2022 – 2026 · Academy", "Information Technology", "HUTECH — Vietnam–Japan Institute", "Fourth-year student; focus on software systems, backend, and cross-platform development."],
  ["04/2024 – 06/2024 · Field Ops", "Technician", "Viet Nghiep Electronics Technology Co., Ltd.", "Manufacturing circuit boards, programming, and completing electronic products."],
  ["2024 – Present · Field Ops", "Tour Guide", "APEX Vietnam Travel Corporation", "Lead student groups; communicate in Japanese and English per project schedule."],
  ["— · Field Ops", "Personal Trainer", "TODAY FITNESS", "Plan training schedules, support trainees, and digitize training progress records."],
  ["04/2026 – 07/2026 · Signal", "FCJ Cloud Engineer Intern", "AWS Vietnam — First Cloud AI Journey", "Hands-on cloud training; network infrastructure, servers, large-scale databases; Jira task management and data-flow optimization."],
  ["03/2026 · Signal", 'Webinar "Beyond Code"', "FPT Software", "Enterprise solutions and low-code trends; leadership beyond pure technology."],
  ["10/2025 · Signal", "TechTogether", "Bosch Vietnam", "Industry 4.0 experience and career guidance from experts."],
];

const manifest = [];

function accentColor(name) {
  return { cyan: C.cyan, violet: C.violet, amber: C.amber, emerald: C.emerald }[name] || C.cyan;
}

function metaNote(slide, id, label) {
  slide.addText(`[${id}] ${label} — editable mock; fonts: Georgia≈Cinzel, Calibri≈DM Sans, Consolas≈JetBrains Mono`, {
    x: 0.25,
    y: 7.05,
    w: 12.8,
    h: 0.35,
    fontSize: 8,
    fontFace: FONT_MONO,
    color: C.muted,
  });
}

function viewportBg(slide, grid = true) {
  slide.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.void }, line: { width: 0 } });
  slide.addShape("rect", {
    x: 0.35,
    y: 0.2,
    w: 12.63,
    h: 6.75,
    fill: { color: C.void },
    line: { color: C.border, width: 1 },
  });
  if (grid) {
    for (let i = 0; i < 14; i++) {
      slide.addShape("line", {
        x: 0.35 + i * 0.45,
        y: 0.55,
        w: 0,
        h: 6.15,
        line: { color: C.border, width: 0.35, transparency: 60 },
      });
    }
    for (let j = 0; j < 8; j++) {
      slide.addShape("line", {
        x: 0.35,
        y: 0.55 + j * 0.45,
        w: 12.63,
        h: 0,
        line: { color: C.border, width: 0.35, transparency: 60 },
      });
    }
  }
}

function scrollProgress(slide, barW) {
  slide.addShape("rect", { x: 0.35, y: 0.2, w: 12.63, h: 0.04, fill: { color: C.voidElevated }, line: { width: 0 } });
  slide.addShape("rect", {
    x: 0.35,
    y: 0.2,
    w: barW,
    h: 0.04,
    fill: { color: C.cyan },
    line: { width: 0 },
  });
}

function addNav(slide, active, { mobile = false, menuOpen = false } = {}) {
  slide.addShape("rect", {
    x: 0.35,
    y: 0.24,
    w: 12.63,
    h: 0.55,
    fill: { color: C.void, transparency: 20 },
    line: { color: C.border, width: 1 },
  });
  slide.addText("LTL ARCHIVE", {
    x: 0.55,
    y: 0.34,
    w: 2.2,
    h: 0.35,
    fontSize: 11,
    fontFace: FONT_DISPLAY,
    color: C.cyan,
    charSpacing: 3,
  });
  if (mobile && !menuOpen) {
    slide.addShape("roundRect", {
      x: 11.85,
      y: 0.34,
      w: 0.85,
      h: 0.32,
      fill: { color: C.void },
      line: { color: C.border, width: 1 },
    });
    slide.addText("Menu", { x: 11.85, y: 0.36, w: 0.85, h: 0.28, fontSize: 9, color: C.muted, align: "center" });
  } else if (!mobile) {
    let x = 3.2;
    for (const link of NAV) {
      const isActive = link === active;
      slide.addShape("roundRect", {
        x,
        y: 0.34,
        w: 1.05,
        h: 0.32,
        fill: { color: isActive ? C.panel : C.void },
        line: { color: isActive ? C.panel : C.void, width: 0 },
      });
      slide.addText(link.toUpperCase(), {
        x,
        y: 0.36,
        w: 1.05,
        h: 0.28,
        fontSize: 8,
        color: isActive ? C.cyan : C.muted,
        align: "center",
      });
      x += 1.12;
    }
  }
  if (mobile && menuOpen) {
    slide.addShape("rect", {
      x: 0.35,
      y: 0.79,
      w: 12.63,
      h: 1.55,
      fill: { color: C.voidElevated },
      line: { color: C.border, width: 1 },
    });
    let y = 0.9;
    for (const link of NAV) {
      slide.addText(link, { x: 0.65, y, w: 3, h: 0.22, fontSize: 11, color: C.text });
      y += 0.22;
    }
  }
}

function sectionHeading(slide, top, eyebrow, title, eyebrowColor) {
  slide.addText(eyebrow.toUpperCase(), {
    x: 0.65,
    y: top,
    w: 5,
    h: 0.25,
    fontSize: 9,
    fontFace: FONT_MONO,
    color: eyebrowColor,
    charSpacing: 2,
  });
  slide.addText(title, {
    x: 0.65,
    y: top + 0.28,
    w: 8,
    h: 0.45,
    fontSize: 28,
    fontFace: FONT_DISPLAY,
    color: C.text,
  });
}

function addProjectCard(slide, x, y, w, h, accent, glyph, name, desc, tags, hover, demo) {
  slide.addShape("roundRect", {
    x,
    y,
    w,
    h,
    fill: { color: C.panel, transparency: 30 },
    line: { color: hover ? C.cyan : C.border, width: 1 },
  });
  slide.addShape("rect", {
    x,
    y,
    w,
    h: h * 0.45,
    fill: { color: accentColor(accent), transparency: 85 },
    line: { width: 0 },
  });
  slide.addText(
    [
      { text: `${glyph}                    OPEN RECORD\n`, options: { fontSize: 10, color: C.muted } },
      { text: `${name}\n`, options: { fontSize: 14, color: C.text, bold: true } },
      { text: `${desc}\n\n${tags.join(" · ")}`, options: { fontSize: 9, color: C.muted } },
    ],
    { x: x + 0.15, y: y + 0.12, w: w - 0.3, h: h - 0.45, valign: "top" },
  );
  slide.addShape("rect", {
    x,
    y: y + h - 0.35,
    w,
    h: 0.35,
    fill: { color: C.void, transparency: 30 },
    line: { color: C.border, width: 1 },
  });
  slide.addText(demo ? "GitHub    Live Demo" : "GitHub", {
    x: x + 0.15,
    y: y + h - 0.3,
    w: w - 0.2,
    h: 0.25,
    fontSize: 9,
    color: C.cyan,
  });
}

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Ly Thanh Loi";
pres.title = "Portfolio Current Version — Slide Deck";

// S01 Hero
{
  const slide = pres.addSlide();
  viewportBg(slide);
  scrollProgress(slide, 1.2);
  addNav(slide, "Entrance");
  metaNote(slide, "S01", "Initial load — Hero viewport (desktop)");
  slide.addShape("ellipse", {
    x: 7.5,
    y: 2.2,
    w: 2.2,
    h: 2.2,
    fill: { color: C.violet, transparency: 85 },
    line: { width: 0 },
  });
  slide.addText(PROFILE.monoTag.toUpperCase(), { x: 0.65, y: 1.15, w: 4, h: 0.2, fontSize: 9, fontFace: FONT_MONO, color: C.cyan });
  slide.addText(PROFILE.name, { x: 0.65, y: 1.45, w: 6.5, h: 0.7, fontSize: 36, fontFace: FONT_DISPLAY, color: C.text });
  slide.addText(PROFILE.headline, { x: 0.65, y: 2.25, w: 6.2, h: 0.9, fontSize: 14, color: C.muted });
  slide.addText(PROFILE.career, { x: 0.65, y: 3.15, w: 6.2, h: 0.75, fontSize: 11, color: C.muted });
  [["Explore My World", true], ["View Projects", false], ["GitHub", false]].forEach(([label, primary], i) => {
    slide.addShape("roundRect", {
      x: 0.65 + i * 1.85,
      y: 4.05,
      w: 1.65,
      h: 0.38,
      fill: { color: primary ? C.panel : C.void },
      line: { color: primary ? C.cyan : C.border, width: 1 },
    });
    slide.addText(label, {
      x: 0.65 + i * 1.85,
      y: 4.1,
      w: 1.65,
      h: 0.32,
      fontSize: 10,
      color: primary ? C.text : C.muted,
      align: "center",
    });
  });
  slide.addShape("roundRect", {
    x: 8.2,
    y: 1.5,
    w: 3.8,
    h: 3.8,
    fill: { color: C.voidElevated },
    line: { color: C.border, width: 1 },
  });
  slide.addShape("roundRect", {
    x: 8.55,
    y: 1.85,
    w: 3.1,
    h: 3.1,
    fill: { color: C.voidElevated },
    line: { color: C.violet, width: 1, dashType: "dash" },
  });
  slide.addText("✦", { x: 9.35, y: 2.5, w: 1.5, h: 0.6, fontSize: 40, color: C.violet, align: "center" });
  slide.addText("CORE MODULE\nFantasy × Tech Portal", {
    x: 8.7,
    y: 3.2,
    w: 3.5,
    h: 0.5,
    fontSize: 10,
    fontFace: FONT_MONO,
    color: C.cyan,
    align: "center",
  });
  slide.addText("status: online\nfocus: systems + AI\narchive: LLLVPN4423", {
    x: 8.55,
    y: 4.0,
    w: 3.1,
    h: 0.9,
    fontSize: 9,
    fontFace: FONT_MONO,
    color: C.muted,
    align: "center",
  });
  manifest.push({ id: "S01", section: "hero", verified: "code + https://ly-thanh-loi-porfolio.vercel.app" });
}

// S02 About
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 4.5);
  addNav(slide, "Profile");
  metaNote(slide, "S02", "About Me");
  sectionHeading(slide, 1.05, "Character Profile", "About Me", C.violet);
  slide.addShape("roundRect", {
    x: 0.65,
    y: 1.85,
    w: 5.9,
    h: 3.2,
    fill: { color: C.panel, transparency: 50 },
    line: { color: C.border, width: 1 },
  });
  slide.addText(`SUMMARY\n\n${PROFILE.intro}\n\n${PROFILE.direction}`, {
    x: 0.85,
    y: 2.05,
    w: 5.5,
    h: 2.8,
    fontSize: 11,
    color: C.muted,
    valign: "top",
  });
  slide.addShape("roundRect", {
    x: 6.75,
    y: 1.85,
    w: 5.9,
    h: 3.2,
    fill: { color: C.voidElevated },
    line: { color: C.border, width: 1 },
  });
  const attrText = "ATTRIBUTES\n\n" + ATTRIBUTES.map(([k, v]) => `${k}: ${v}`).join("\n");
  slide.addText(attrText, { x: 6.95, y: 2.05, w: 5.5, h: 2.8, fontSize: 10, color: C.text, valign: "top" });
  manifest.push({ id: "S02", section: "about", verified: "code" });
}

// S03 Skills default
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 3.8);
  addNav(slide, "Abilities");
  metaNote(slide, "S03", "Skills — default");
  sectionHeading(slide, 1.05, "Technical Abilities", "Skill Modules", C.cyan);
  slide.addText("Verified skills from my profile — select a module to inspect nodes.", {
    x: 0.65,
    y: 1.72,
    w: 10,
    h: 0.3,
    fontSize: 11,
    color: C.muted,
  });
  const pos = [
    [0.65, 2.15],
    [4.55, 2.15],
    [8.45, 2.15],
    [0.65, 3.55],
    [4.55, 3.55],
    [8.45, 3.55],
  ];
  SKILL_GROUPS.forEach(([rune, title, preview], idx) => {
    const [x, y] = pos[idx];
    slide.addShape("roundRect", {
      x,
      y,
      w: 3.65,
      h: 1.15,
      fill: { color: C.panel, transparency: 40 },
      line: { color: C.border, width: 1 },
    });
    slide.addText(`${rune}\n${title}\n${preview}`, { x: x + 0.12, y: y + 0.1, w: 3.4, h: 1, fontSize: 9, color: C.text });
  });
  manifest.push({ id: "S03", section: "skills", state: "default", verified: "code" });
}

// S04 Skills expanded
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 3.8);
  addNav(slide, "Abilities");
  metaNote(slide, "S04", "Skills — Programming Languages detail");
  sectionHeading(slide, 1.05, "Technical Abilities", "Skill Modules", C.cyan);
  const pos = [
    [0.65, 2.15],
    [4.55, 2.15],
    [8.45, 2.15],
    [0.65, 3.55],
    [4.55, 3.55],
    [8.45, 3.55],
  ];
  SKILL_GROUPS.forEach(([rune, title, preview], idx) => {
    const [x, y] = pos[idx];
    slide.addShape("roundRect", {
      x,
      y,
      w: 3.65,
      h: 1.15,
      fill: { color: C.panel, transparency: 40 },
      line: { color: title === "Programming Languages" ? C.cyan : C.border, width: 1 },
    });
    slide.addText(`${rune}\n${title}\n${preview}`, { x: x + 0.12, y: y + 0.1, w: 3.4, h: 1, fontSize: 9, color: C.text });
  });
  slide.addShape("roundRect", {
    x: 0.65,
    y: 4.95,
    w: 11.95,
    h: 1.35,
    fill: { color: C.voidElevated },
    line: { color: C.cyan, width: 1 },
  });
  slide.addText("MODULE DETAIL — Programming Languages\nDismiss\n\n[C# (.NET 9 / 10)]  [Java]  [JavaScript (React)]", {
    x: 0.85,
    y: 5.1,
    w: 11.5,
    h: 1.1,
    fontSize: 10,
    color: C.text,
  });
  manifest.push({ id: "S04", section: "skills", state: "expanded", verified: "code" });
}

function projectsSlide(id, start, hoverIdx) {
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 5.2);
  addNav(slide, "Archive");
  metaNote(slide, id, `Projects cards ${start + 1}–${Math.min(start + 4, 6)}`);
  sectionHeading(slide, 1.05, "Project Archive", "Verified Artifacts", C.violet);
  slide.addText("Projects sourced from my CV and public GitHub repositories — each links to the original repo.", {
    x: 0.65,
    y: 1.72,
    w: 10,
    h: 0.35,
    fontSize: 11,
    color: C.muted,
  });
  const coords = [
    [0.65, 2.2],
    [6.75, 2.2],
    [0.65, 4.05],
    [6.75, 4.05],
  ];
  PROJECTS.slice(start, start + 4).forEach((p, i) => {
    const [accent, glyph, name, desc, tags, demo] = p;
    const [x, y] = coords[i];
    addProjectCard(slide, x, y, 5.85, 1.65, accent, glyph, name, desc, tags, hoverIdx === start + i, demo);
  });
  manifest.push({ id, section: "projects", verified: "code" });
}

projectsSlide("S05", 0, null);
projectsSlide("S06", 4, null);
projectsSlide("S07", 0, 0);

// S08 before modal
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 5.2);
  addNav(slide, "Archive");
  metaNote(slide, "S08", "Before project modal open");
  addProjectCard(slide, 0.65, 2.2, 5.85, 1.65, "violet", "✎", PROJECTS[0][2], PROJECTS[0][3], PROJECTS[0][4], false, true);
  slide.addText("User clicks card → modal opens (S09)", { x: 7, y: 3, w: 5, h: 0.4, fontSize: 11, color: C.muted });
  manifest.push({ id: "S08", section: "project_modal", state: "before", verified: "code" });
}

// S09 modal open
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 5.2);
  addNav(slide, "Archive");
  metaNote(slide, "S09", "Project modal — CrayonNote open");
  slide.addShape("rect", {
    x: 0.35,
    y: 0.24,
    w: 12.63,
    h: 6.71,
    fill: { color: "000000", transparency: 30 },
    line: { width: 0 },
  });
  slide.addShape("roundRect", {
    x: 2.4,
    y: 0.85,
    w: 8.5,
    h: 5.85,
    fill: { color: C.voidElevated },
    line: { color: C.violet, width: 1 },
  });
  const feat = [
    "Cross-platform .NET MAUI client",
    "Local data with SQLite ORM",
    "Speech-to-text via OpenAI Whisper API",
    "Azure OpenAI integration",
    "MVVM architecture",
  ]
    .map((f) => `• ${f}`)
    .join("\n");
  slide.addText(
    `ARTIFACT RECORD — ✎ CrayonNote — Close\n\nOVERVIEW\n${PROJECTS[0][3]}\n\nPROBLEM & PURPOSE\nOptimize digitization of audio recordings and multimedia data management on mobile devices.\n\nCONTRIBUTION\nEnd-to-end development\n\nFEATURES\n${feat}\n\nTECHNOLOGY STACK\n[.NET MAUI] [C#] [SQLite (ORM)] [OpenAI Whisper API] [Azure OpenAI] [MVVM]\n\nView Source (GitHub)`,
    { x: 2.65, y: 1.0, w: 8, h: 5.5, fontSize: 10, color: C.muted, valign: "top" },
  );
  manifest.push({ id: "S09", section: "project_modal", state: "open", project: "CrayonNote", verified: "code" });
}

function timelineSlide(id, start, count) {
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 6.8);
  addNav(slide, "Timeline");
  metaNote(slide, id, `Timeline entries ${start + 1}–${start + count}`);
  sectionHeading(slide, 1.05, "Experience & Timeline", "Chronicle", C.cyan);
  slide.addShape("rect", { x: 0.85, y: 1.85, w: 0.03, h: 4.8, fill: { color: C.border }, line: { width: 0 } });
  let y = 1.95;
  TIMELINE.slice(start, start + count).forEach((entry) => {
    slide.addShape("ellipse", {
      x: 0.78,
      y,
      w: 0.12,
      h: 0.12,
      fill: { color: C.violet },
      line: { width: 0 },
    });
    slide.addText(`${entry[0]}\n${entry[1]}\n${entry[2]}\n${entry[3]}`, {
      x: 1.15,
      y: y - 0.05,
      w: 11,
      h: 0.85,
      fontSize: 10,
      color: C.muted,
    });
    y += 0.95;
  });
  manifest.push({ id, section: "timeline", verified: "code" });
}

timelineSlide("S10", 0, 4);
timelineSlide("S11", 4, 3);

// S12 Contact + footer
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  scrollProgress(slide, 11.5);
  addNav(slide, "Portal");
  metaNote(slide, "S12", "Contact + Footer");
  sectionHeading(slide, 1.05, "The Portal", "Connect", C.violet);
  slide.addText("Open a channel for collaboration, internships, or project discussions.", {
    x: 0.65,
    y: 1.72,
    w: 8,
    h: 0.3,
    fontSize: 11,
    color: C.muted,
  });
  [
    ["EMAIL", PROFILE.email, C.cyan],
    ["GITHUB", PROFILE.github, C.text],
  ].forEach(([label, value, col], i) => {
    slide.addShape("roundRect", {
      x: 0.65 + i * 3.2,
      y: 2.2,
      w: 2.95,
      h: 1.1,
      fill: { color: C.panel, transparency: 50 },
      line: { color: C.border, width: 1 },
    });
    slide.addText(`${label}\n${value}`, { x: 0.8 + i * 3.2, y: 2.35, w: 2.7, h: 0.9, fontSize: 11, color: col });
  });
  slide.addShape("rect", {
    x: 0.35,
    y: 6.35,
    w: 12.63,
    h: 0.55,
    fill: { color: C.void },
    line: { color: C.border, width: 1 },
  });
  slide.addText("© 2026 Ly Thanh Loi — Digital Archive          Projects    GitHub    Back to top", {
    x: 0.55,
    y: 6.45,
    w: 12,
    h: 0.35,
    fontSize: 10,
    color: C.muted,
  });
  manifest.push({ id: "S12", section: "contact_footer", verified: "code" });
}

// S13 mobile hero
{
  const slide = pres.addSlide();
  viewportBg(slide);
  scrollProgress(slide, 0.8);
  addNav(slide, "Entrance", { mobile: true });
  metaNote(slide, "S13", "Mobile hero stacked layout");
  slide.addText(PROFILE.monoTag.toUpperCase(), { x: 0.65, y: 1.05, w: 5, h: 0.2, fontSize: 9, fontFace: FONT_MONO, color: C.cyan });
  slide.addText(PROFILE.name, { x: 0.65, y: 1.35, w: 11.5, h: 0.55, fontSize: 30, fontFace: FONT_DISPLAY, color: C.text });
  slide.addText(PROFILE.headline, { x: 0.65, y: 2.0, w: 11.5, h: 0.8, fontSize: 13, color: C.muted });
  slide.addShape("roundRect", {
    x: 2.5,
    y: 3.0,
    w: 8.3,
    h: 2.8,
    fill: { color: C.voidElevated },
    line: { color: C.border, width: 1 },
  });
  slide.addText("✦\nCORE MODULE\nFantasy × Tech Portal", {
    x: 2.5,
    y: 3.4,
    w: 8.3,
    h: 2,
    fontSize: 14,
    color: C.violet,
    align: "center",
  });
  manifest.push({ id: "S13", section: "responsive_mobile_hero", verified: "code (Tailwind md: breakpoints)" });
}

// S14 mobile menu
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  addNav(slide, "Entrance", { mobile: true, menuOpen: true });
  metaNote(slide, "S14", "Mobile navigation open");
  manifest.push({ id: "S14", section: "responsive_mobile_nav", verified: "code" });
}

// S15 mobile modal sheet
{
  const slide = pres.addSlide();
  viewportBg(slide, false);
  addNav(slide, "Archive", { mobile: true });
  metaNote(slide, "S15", "Mobile modal bottom sheet");
  slide.addShape("rect", {
    x: 0.35,
    y: 0.24,
    w: 12.63,
    h: 6.71,
    fill: { color: "000000", transparency: 30 },
    line: { width: 0 },
  });
  slide.addShape("roundRect", {
    x: 0.35,
    y: 3.2,
    w: 12.63,
    h: 3.75,
    fill: { color: C.voidElevated },
    line: { color: C.violet, width: 1 },
  });
  slide.addText("ARTIFACT RECORD — CrayonNote\n(full width, rounded top — items-end on mobile)", {
    x: 0.65,
    y: 3.5,
    w: 12,
    h: 1,
    fontSize: 11,
    color: C.text,
  });
  manifest.push({ id: "S15", section: "responsive_mobile_modal", verified: "code" });
}

// S16 reveal storyboard
{
  const slide = pres.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.void }, line: { width: 0 } });
  metaNote(slide, "S16", "Storyboard — scroll reveal");
  slide.addText("Storyboard: Section Reveal (IntersectionObserver)", {
    x: 0.5,
    y: 0.35,
    w: 12,
    h: 0.4,
    fontSize: 18,
    fontFace: FONT_DISPLAY,
    color: C.text,
  });
  [
    ["Frame A — Initial", "opacity: 0\ntranslateY: 20px\n(.reveal-hidden)", C.border],
    ["Frame B — Trigger", "threshold: 0.12\nrootMargin: 0px 0px -8% 0px", C.cyan],
    ["Frame C — Visible", "opacity: 1, translateY: 0\n650ms cubic-bezier(0.22,1,0.36,1)\n+ delayMs stagger", C.violet],
  ].forEach(([label, body, col], i) => {
    slide.addShape("roundRect", {
      x: 0.65 + i * 4.1,
      y: 1.2,
      w: 3.7,
      h: 4.5,
      fill: { color: C.panel },
      line: { color: col, width: 1 },
    });
    slide.addText(`${label}\n\n${body}`, {
      x: 0.8 + i * 4.1,
      y: 1.4,
      w: 3.4,
      h: 4.1,
      fontSize: 11,
      color: C.text,
    });
  });
  manifest.push({ id: "S16", section: "storyboard_reveal", verified: "code" });
}

// S17 modal storyboard
{
  const slide = pres.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.void }, line: { width: 0 } });
  metaNote(slide, "S17", "Storyboard — project modal");
  slide.addText("Storyboard: Project Detail Panel", { x: 0.5, y: 0.35, w: 12, h: 0.4, fontSize: 18, fontFace: FONT_DISPLAY, color: C.text });
  slide.addShape("roundRect", {
    x: 0.65,
    y: 1.2,
    w: 11.9,
    h: 4.8,
    fill: { color: C.panel },
    line: { color: C.border, width: 1 },
  });
  slide.addText(
    "1. Click project card → setSelected(project)\n2. Overlay bg-black/70\n3. Panel: bottom sheet (mobile) / centered (sm:)\n4. document.body overflow hidden\n5. Escape key → onClose\n6. Click overlay → onClose",
    { x: 0.85, y: 1.5, w: 11.5, h: 4.2, fontSize: 14, color: C.muted },
  );
  manifest.push({ id: "S17", section: "storyboard_modal", verified: "code" });
}

// S18 scroll progress storyboard
{
  const slide = pres.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.void }, line: { width: 0 } });
  metaNote(slide, "S18", "Storyboard — scroll progress");
  slide.addText("Storyboard: Scroll Progress Indicator", { x: 0.5, y: 0.35, w: 12, h: 0.4, fontSize: 18, fontFace: FONT_DISPLAY, color: C.text });
  [1.0, 4.0, 8.0].forEach((w, i) => {
    const y = 1.3 + i * 1.6;
    slide.addShape("rect", { x: 0.65, y, w: 11.9, h: 0.05, fill: { color: C.voidElevated }, line: { width: 0 } });
    slide.addShape("rect", { x: 0.65, y, w, h: 0.05, fill: { color: C.cyan }, line: { width: 0 } });
    slide.addText(`scrollY ratio ≈ ${Math.round((w / 11.9) * 100)}% — transition width 150ms`, {
      x: 0.65,
      y: y + 0.12,
      w: 10,
      h: 0.35,
      fontSize: 12,
      color: C.muted,
    });
  });
  manifest.push({ id: "S18", section: "storyboard_scroll_progress", verified: "code" });
}

await pres.writeFile({ fileName: OUT_PPTX });
fs.writeFileSync(path.join(__dirname, "slide_manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`Wrote ${OUT_PPTX} (${manifest.length} slides)`);
