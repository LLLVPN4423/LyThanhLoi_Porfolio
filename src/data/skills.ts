export type SkillGroup = {
  id: string;
  title: string;
  rune: string;
  items: { name: string; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    rune: "◈",
    items: [
      { name: "C#", note: ".NET 9 / 10" },
      { name: "Java" },
      { name: "JavaScript", note: "React" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Platforms",
    rune: "⬡",
    items: [
      { name: ".NET MAUI" },
      { name: "ASP.NET Core" },
      { name: "Spring Boot (J2EE)" },
      { name: "WinForms" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    rune: "◇",
    items: [
      { name: "SQL Server" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Firebase" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Patterns",
    rune: "✦",
    items: [
      { name: "MVVM" },
      { name: "Repository Pattern" },
      { name: "Dependency Injection" },
      { name: "RESTful API" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    rune: "◎",
    items: [
      { name: "NUnit" },
      { name: "Gauge Framework" },
    ],
  },
  {
    id: "tools",
    title: "Tools, AI & Platforms",
    rune: "⎔",
    items: [
      { name: "Git / GitHub" },
      { name: "Adobe XD", note: "UI/UX" },
      { name: "GitHub Copilot" },
      { name: "Gemini, ChatGPT, Claude", note: "Prompt engineering" },
      { name: "Google Workspace" },
    ],
  },
];
