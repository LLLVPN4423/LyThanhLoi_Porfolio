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
    id: "edu-hutech",
    period: "2022 – 2026",
    title: "Information Technology",
    org: "HUTECH — Vietnam–Japan Institute",
    description: "Fourth-year student; focus on software systems, backend, and cross-platform development.",
    kind: "education",
  },
  {
    id: "work-viet-nghiep",
    period: "04/2024 – 06/2024",
    title: "Technician",
    org: "Viet Nghiep Electronics Technology Co., Ltd.",
    description:
      "Manufacturing circuit boards, programming, and completing electronic products.",
    kind: "work",
  },
  {
    id: "work-apex",
    period: "2024 – Present",
    title: "Tour Guide",
    org: "APEX Vietnam Travel Corporation",
    description:
      "Lead student groups; communicate in Japanese and English per project schedule.",
    kind: "work",
  },
  {
    id: "work-trainer",
    period: "—",
    title: "Personal Trainer",
    org: "TODAY FITNESS",
    description:
      "Plan training schedules, support trainees, and digitize training progress records.",
    kind: "work",
  },
  {
    id: "aws-intern",
    period: "04/2026 – 07/2026",
    title: "FCJ Cloud Engineer Intern",
    org: "AWS Vietnam — First Cloud AI Journey",
    description:
      "Hands-on cloud training; network infrastructure, servers, large-scale databases; Jira task management and data-flow optimization.",
    kind: "milestone",
  },
  {
    id: "webinar-fpt",
    period: "03/2026",
    title: 'Webinar "Beyond Code"',
    org: "FPT Software",
    description:
      "Enterprise solutions and low-code trends; leadership beyond pure technology.",
    kind: "milestone",
  },
  {
    id: "bosch-tech",
    period: "10/2025",
    title: "TechTogether",
    org: "Bosch Vietnam",
    description: "Industry 4.0 experience and career guidance from experts.",
    kind: "milestone",
  },
];
