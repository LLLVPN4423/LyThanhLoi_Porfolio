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
    id: "work-shopeefood",
    period: "02/2025 – Present",
    title: "Delivery Partner (Part-time)",
    org: "ShopeeFood",
    description:
      "Part-time shipper: deliver food and goods across districts in Ho Chi Minh City.",
    kind: "work",
  },
  {
    id: "milestone-vua-cafe",
    period: "06/2026",
    title: "Professional Barista Training",
    org: "VUA CAFÉ SẠCH — CaPheNguyenChat.vn",
    description:
      "Certificate of completion — Professional Practical Barista Training (Pha chế thực chiến chuyên nghiệp), completed with excellence. Certificate no. VCS-2026-0003. Program motto: real learning, real practice, real business.",
    kind: "milestone",
  },
  {
    id: "work-fsi",
    period: "10/2024 – 11/2024",
    title: "Data Digitizer",
    org: "FSI",
    description:
      "Scanning and data entry: convert physical documents into digital records for National Archives Center No. 2 (Trung tâm Lưu trữ Quốc gia II). Project duration approximately two months.",
    kind: "work",
  },
  {
    id: "work-gs25",
    period: "03/2024 – 08/2024",
    title: "Sales Associate",
    org: "GS25 Vietnam",
    description:
      "Cashier, customer service, and in-store merchandising — product layout and shelf organization.",
    kind: "work",
  },
  {
    id: "work-family-business",
    period: "2010 – Present",
    title: "Family Business Operations",
    org: "Wholesale & inter-province delivery (Southern Vietnam)",
    description:
      "Inventory and purchasing, order picking, motorcycle deliveries and assisting truck loads, invoicing and payment collection. Ship general merchandise — snacks, consumer goods, corrugated cartons — across Southern Vietnam provinces.",
    kind: "work",
  },
];
