export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  description: string;
  kind: "education" | "work" | "milestone";
};

export const timeline: TimelineEntry[] = [
  {
    id: "work-trang-tran-platform",
    period: "09/2026 – Present",
    title: "Platform Admin",
    org: "Trang Tran Hair Salon — Web & digital channels",
    description:
      "Own the salon website, API uptime, and remote digital presence while the in-salon team handles day-to-day DM, Zalo, and bookings. Daily (async): monitor site/API health, fix booking, login, or shop issues, and share revenue plus orders or appointments that need action. Weekly: one-page report (revenue, backlog, top services) and CSV exports on request. Monthly: summary reporting, SEO checklist (Google Search Console, sitemap), pricing and web content updates, and Zalo/call support for contract or loyalty-point errors. Google Business Profile: hours, address, photos, website links, reviews and Q&A (target 1–2 day response); public Fanpage replies when access is granted. Advise on Meta/Google ads and support setup or optimization when the salon allocates budget.",
    kind: "work",
  },
  {
    id: "aws-fcj-intern",
    period: "04/2026 – 07/2026",
    title: "Intern",
    org: "AWS Vietnam — First Cloud AI Journey",
    description:
      "Participate in hands-on cloud computing training. Gain a thorough understanding of network infrastructure architecture, servers, and large-scale database systems. Manage development tasks through Jira and optimize data flow across the system.",
    kind: "work",
  },
  {
    id: "work-viet-nghiep",
    period: "04/2024 – 06/2024",
    title: "Technician",
    org: "Viet Nghiep Electronics Technology Co., Ltd.",
    description:
      "We manufacture circuit boards, program code, and complete electronic products.",
    kind: "work",
  },
  {
    id: "work-apex",
    period: "—",
    title: "Tour Guide",
    org: "APEX Vietnam Travel Corporation",
    description:
      "Lead student groups, communicating in Japanese and English according to the project schedule.",
    kind: "work",
  },
  {
    id: "work-trainer",
    period: "04/2026 – 07/2026",
    title: "Personal Trainer",
    org: "TODAY FITNESS",
    description:
      "Plan and optimize training schedules, listen to, share with, and understand the psychology of trainees, and closely monitor, record, and digitize training progress.",
    kind: "work",
  },
  {
    id: "work-other",
    period: "2024 – Present",
    title: "Other Experiences",
    org: "GS25 · FSI · ShopeeFood · King of Clean Coffee",
    description:
      "Salesperson (GS25), Data Digitizer (FSI), Shipper (ShopeeFood), Barista (King of Clean Coffee) — demonstrates dynamism and the ability to work under high pressure.",
    kind: "work",
  },
];
