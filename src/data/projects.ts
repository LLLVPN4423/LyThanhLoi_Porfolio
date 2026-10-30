export type ProjectLink = { label: string; url: string };

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  purpose: string;
  features: string[];
  technologies: string[];
  status?: string;
  role?: string;
  repositoryUrl: string;
  sourceRepos?: ProjectLink[];
  demoUrl?: string;
  demoVerified?: boolean;
  liveDemos?: ProjectLink[];
  accent: "cyan" | "violet" | "amber" | "emerald";
  glyph: string;
};

/** Content verified from profile PDF and public GitHub README where available. */
export const projects: Project[] = [
  {
    id: "crayonnote",
    name: "CrayonNote",
    shortDescription:
      "Cross-platform note-taking app (.NET MAUI) with AI-powered speech-to-text.",
    purpose:
      "Optimize digitization of audio recordings and multimedia data management on mobile devices.",
    features: [
      "Cross-platform .NET MAUI client",
      "Local data with SQLite ORM",
      "Speech-to-text via OpenAI Whisper API",
      "Azure OpenAI integration",
      "MVVM architecture",
    ],
    technologies: [
      ".NET MAUI",
      "C#",
      "SQLite (ORM)",
      "OpenAI Whisper API",
      "Azure OpenAI",
      "MVVM",
    ],
    role: "End-to-end development",
    repositoryUrl: "https://github.com/LLLVPN4423/CrayonNote",
    accent: "violet",
    glyph: "✎",
  },
  {
    id: "minihongo",
    name: "MiniHongo",
    shortDescription:
      "Mobile app for Japanese vocabulary and Kanji learning across platforms.",
    purpose:
      "Interactive learning tool that manages a large vocabulary database seamlessly on multiple platforms.",
    features: [
      "Vocabulary and Kanji study flows",
      "SQLite local storage",
      "RESTful API backend",
      "MVVM pattern",
      "UI/UX optimization",
    ],
    technologies: [".NET MAUI", "C#", "SQLite", "RESTful API", "MVVM"],
    role: "Team lead, Backend-dev, UI/UX Optimization",
    repositoryUrl: "https://github.com/LLLVPN4423/miNihongo",
    accent: "cyan",
    glyph: "文",
  },
  {
    id: "aiko-tarot",
    name: "Bé Aiko Tarot (Pet Tarot)",
    shortDescription:
      "Bilingual (VI/EN) pet-themed tarot web app — 22 Major Arcana with shuffle and journal.",
    purpose:
      "Warm, accessible tarot readings starring Aiko — celestial cat deck with animations and a local reading journal.",
    features: [
      "1 / 3 / 5 card spreads with themes",
      "Upright & reversed meanings (VI + EN)",
      "Shuffle and flip animations",
      "Reading journal in browser (localStorage)",
      "Next.js / TypeScript frontend",
    ],
    technologies: ["TypeScript", "React", "Next.js"],
    role: "Sole developer",
    repositoryUrl: "https://github.com/LLLVPN4423/Aiko_Tarot_web",
    demoUrl: "https://pet-tarot-rose.vercel.app",
    demoVerified: true,
    accent: "amber",
    glyph: "☽",
  },
  {
    id: "study-desk",
    name: "Study Desk",
    shortDescription:
      "Bilingual study workspace — desk for PDF/MP3, deadlines, and JP (JLPT) + EN (IELTS/CEFR) paths with FSRS reviews.",
    purpose:
      "Combine a personal learning desk (files, audio, tasks, Pomodoro) with placement-driven Japanese and English study tracks seeded from open datasets — unofficial JLPT/IELTS practice.",
    features: [
      "Upload PDF/MP3, folders/tags, tasks, Pomodoro, desk themes, study-room links",
      "JP: OpenJLPT vocab/grammar/kanji, placement, roadmap, timed mocks, culture modules",
      "EN: CEFR-J vocabulary & grammar, placement, roadmap, SRS, timed mocks",
      "FSRS reviews, highlight→flashcard, JSON backup; freemium path flags (local session)",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenJLPT",
      "CEFR-J",
      "howler.js",
    ],
    role: "Sole developer",
    repositoryUrl: "https://github.com/LLLVPN4423/Study_Desk",
    demoUrl: "https://study-desk-livid.vercel.app",
    demoVerified: true,
    accent: "cyan",
    glyph: "机",
  },
  {
    id: "pt-coach",
    name: "PT Desk (PT Coach)",
    shortDescription:
      "Personal workout & meal-plan coach — onboarding, InBody macros, exercise library, and daily check-ins.",
    purpose:
      "Self-hosted fitness desk for training and nutrition planning with clear medical disclaimers — not a substitute for professional PT or medical advice.",
    features: [
      "Health onboarding with constraints, red flags, and clearance disclaimers",
      "Manual InBody → TDEE/macros and age-group training plans",
      "~367 exercises from free-exercise-db with swap-by-muscle-group and form video links",
      "Meal plans from foods catalog + Open Food Facts barcode lookup",
      "Daily workout/meal/water check-in, body metrics history, JSON export/import",
    ],
    technologies: ["Next.js", "TypeScript", "localStorage", "Open Food Facts API"],
    role: "Sole developer",
    repositoryUrl: "https://github.com/LLLVPN4423/pt-coach-webapp",
    demoUrl: "https://pt-coach-webapp.vercel.app",
    demoVerified: true,
    accent: "emerald",
    glyph: "⚡",
  },
  {
    id: "trang-tran-hair",
    name: "Trang Tran Hair Salon — Website",
    shortDescription:
      "Full-stack salon site: portfolio, service pricing, Moroccanoil shop, SePay checkout, bookings, loyalty, and admin portal.",
    purpose:
      "Production web platform for Trang Tran Hair Salon (Sóc Trăng) — customer-facing storefront plus back-office operations.",
    features: [
      "Hero, artist profile, lookbook, and configurable hair gallery",
      "Service catalog, cart, and SePay bank-transfer checkout",
      "Customer sign-up (email + Google), loyalty points, and promotions",
      "Booking requests stored in database with account tracking",
      "Admin portal (services, products, orders, appointments, customers)",
      "Deployed on Cloudflare Pages with API on Google Cloud Run",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      ".NET",
      "Firebase",
      "Cloudflare Pages",
      "Google Cloud Run",
    ],
    role: "Sole developer",
    repositoryUrl: "https://github.com/LLLVPN4423/Trang_Tran_Web",
    demoUrl: "https://trangtran-hair.pages.dev",
    demoVerified: true,
    accent: "violet",
    glyph: "✂",
  },
  {
    id: "client-portfolios",
    name: "Client Personal Portfolios",
    shortDescription:
      "Three custom portfolio sites for individual clients — layout, content structure, and production deploy.",
    purpose:
      "Deliver polished personal-brand sites for clients (distinct from full product builds like the salon platform). Each site is tailored to the person’s profile and hosted on GitHub Pages or Vercel.",
    features: [
      "Mai Yen Vy — personal portfolio (GitHub Pages)",
      "Trần Dan Dan — personal portfolio (GitHub Pages)",
      "Trang Tran — stylist / brand portfolio (Vercel); pairs with the salon commerce platform as a lighter showcase site",
      "Responsive sections, client-driven content, and verified live URLs",
    ],
    technologies: [
      "HTML / CSS",
      "JavaScript",
      "Responsive UI",
      "GitHub Pages",
      "Vercel",
    ],
    role: "Sole developer (design & implementation)",
    repositoryUrl: "https://github.com/LLLVPN4423/MaiYenVy_Portfolio",
    sourceRepos: [
      {
        label: "Trần Dan Dan",
        url: "https://github.com/LLLVPN4423/porfolio_Tran_Dan_Dan",
      },
      {
        label: "Trang Tran",
        url: "https://github.com/LLLVPN4423/Trang_Tran_Porfolio",
      },
    ],
    liveDemos: [
      {
        label: "Mai Yen Vy",
        url: "https://lllvpn4423.github.io/MaiYenVy_Portfolio/",
      },
      {
        label: "Trần Dan Dan",
        url: "https://lllvpn4423.github.io/porfolio_Tran_Dan_Dan/",
      },
      {
        label: "Trang Tran",
        url: "https://trang-tran-portfolio.vercel.app/",
      },
    ],
    demoVerified: true,
    accent: "emerald",
    glyph: "◉",
  },
  {
    id: "aws-report",
    name: "AWS Internship Report Site",
    shortDescription:
      "Bilingual Hugo site documenting AWS Vietnam FCJ Cloud Engineer internship.",
    purpose:
      "Structured internship report with automated deploy to GitHub Pages.",
    features: [
      "Hugo static site with hugo-theme-learn",
      "English & Vietnamese content",
      "GitHub Actions CI/CD",
      "GitHub Pages hosting",
    ],
    technologies: ["Hugo", "GitHub Actions", "GitHub Pages"],
    repositoryUrl: "https://github.com/LLLVPN4423/aws-internship-report-site",
    demoUrl: "https://LLLVPN4423.github.io/aws-internship-report-site/",
    demoVerified: true,
    accent: "emerald",
    glyph: "☁",
  },
  {
    id: "taskmanager",
    name: "Task Management System",
    shortDescription:
      "Online task management and team collaboration with permissions and progress tracking.",
    purpose:
      "Support teams with role-based access, task tracking, and collaboration workflows.",
    features: [
      "User permission management",
      "Task and progress tracking",
      "RESTful API",
      "Spring Security",
    ],
    technologies: [
      "Java Spring Boot",
      "MySQL",
      "Spring Security",
      "Hibernate (JPA)",
      "RESTful API",
    ],
    role: "Team lead, Backend-dev",
    repositoryUrl: "https://github.com/LLLVPN4423/TaskManager",
    accent: "cyan",
    glyph: "☑",
  },
  {
    id: "music-player",
    name: "Music Player (Desktop)",
    shortDescription:
      "Windows multimedia player with modern UI, playlists, and multiple formats.",
    purpose:
      "Desktop playback experience with playlist management and tested quality workflows.",
    features: [
      "Playlist management",
      "Multiple audio formats",
      "Modern WinForms UI",
      "Automated testing (Gauge, NUnit)",
    ],
    technologies: ["C#", "WinForms", ".NET", "NUnit", "Gauge", "Adobe XD"],
    role: "Team lead, Backend-dev, UI/UX Design",
    repositoryUrl: "https://github.com/LLLVPN4423/MusicProject_FinalCCPM",
    accent: "violet",
    glyph: "♫",
  },
];
