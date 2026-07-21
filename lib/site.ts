/**
 * Single source of truth for site-wide navigation, identity, and the
 * case-study lineup. Keeping links here prevents the broken/wrong-target
 * links the old Wix site shipped (footer "Resume" was dead text, Greenstand
 * card linked to Mobile Pricing, © linked to Instagram).
 */

export const site = {
  name: "Priyanka Ahuja",
  title: "Product Designer who ships code",
  email: "priyankaahuja0532@gmail.com",
  url: "https://www.ahujapriyanka.com",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
];

export const socialLinks: NavLink[] = [
  { label: "Email", href: "mailto:priyankaahuja0532@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyankaahuja01/" },
  { label: "GitHub", href: "https://github.com/Priyankaahuja01" },
];

export type CaseStudyStatus = "live" | "in-progress" | "gated";

export type CaseStudyMeta = {
  slug: string;
  index: string; // "01", "02", ... — display order
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  status: CaseStudyStatus;
  gated?: boolean;
};

/**
 * Order matters — this drives the homepage "selected work" order.
 * See CLAUDE.md "Case study lineup".
 */
export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "wyoming-hay",
    index: "01",
    title: "Wyoming Emergency Hay Assistance",
    summary:
      "A crisis-response platform designed and built in days to connect ranchers with emergency hay during a statewide shortage. Rolled out statewide with recognition from the Governor of Wyoming.",
    role: "Design & build (end-to-end)",
    year: "2023",
    tags: ["Crisis response", "Public sector", "0→1", "Full-stack"],
    status: "in-progress",
  },
  {
    slug: "gestation-calculator",
    index: "02",
    title: "Livestock Gestation Calculator — native iOS concept",
    summary:
      "I shipped the real tool in React. This study reimagines it as a HIG-fluent iPhone and Apple Watch app: offline-first for the field, widgets, complications, Dynamic Type, and haptics.",
    role: "Product & interaction design",
    year: "2024",
    tags: ["iOS / watchOS", "HIG", "Interaction craft", "Concept"],
    status: "in-progress",
  },
  {
    slug: "jackson-laboratory",
    index: "03",
    title: "The Jackson Laboratory",
    summary:
      "Research-driven work across mobile pricing and a legal facet panel where both tested designs failed — and the failure became the insight that shaped the third, shipped direction.",
    role: "UX design & research",
    year: "2022",
    tags: ["Research", "Enterprise", "Design systems"],
    status: "gated",
    gated: true,
  },
  {
    slug: "greenstand",
    index: "04",
    title: "Greenstand",
    summary:
      "A token wallet and design system for a global tree-planting nonprofit — turning field data into a trustworthy, verifiable record of impact.",
    role: "Product design & design systems",
    year: "2021",
    tags: ["Fintech", "Design system", "Nonprofit"],
    status: "in-progress",
  },
  {
    slug: "uw-extension",
    index: "05",
    title: "4-H & UW Extension",
    summary:
      "Public-sector web work for University of Wyoming Extension and 4-H — accessible, content-heavy sites serving rural communities across the state.",
    role: "UX & front-end",
    year: "2022",
    tags: ["Public sector", "Accessibility", "Web"],
    status: "in-progress",
  },
];

export function getCaseStudy(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
