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
