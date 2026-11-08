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
  { label: "Recognition", href: "/#recognition" },
  { label: "Resume", href: "/resume" },
];

export const socialLinks: NavLink[] = [
  { label: "Email", href: "mailto:priyankaahuja0532@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyankaahuja0107/" },
  { label: "GitHub", href: "https://github.com/Priyankaahuja01" },
  // Instagram to be added once Pri shares the handle.
];

export type CaseStudyStatus = "live" | "in-progress" | "gated";

/** Card background tint, drives the warm editorial rhythm on the work grid. */
export type CaseStudyTint = "sage" | "blush" | "forest";

export type CaseStudyMeta = {
  slug: string;
  index: string; // "01", "02", ..., display order
  title: string;
  short: string; // short label for the orbit hero node
  category: string; // short domain label, shown as the accent eyebrow
  summary: string;
  role: string;
  year: string;
  tags: string[];
  tint: CaseStudyTint;
  status: CaseStudyStatus;
  gated?: boolean;
  featured?: boolean; // render as the wide feature tile
  image?: string; // /public path to the tile image; placeholder if absent
};

/**
 * Order matters, this drives the homepage "selected work" order.
 * See CLAUDE.md "Case study lineup".
 */
export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "wyoming-hay",
    index: "01",
    title: "Wyoming Emergency Hay Assistance",
    short: "Wyoming Hay",
    category: "Crisis Response",
    summary:
      "When wildfire burned the grass out from under Wyoming ranchers, I designed and built a crisis-response platform in 48 hours, a public board that let neighbors offer and find emergency hay directly. Launched statewide with University of Wyoming Extension.",
    role: "Design & build (end-to-end)",
    year: "2025",
    tags: ["Crisis response", "0→1", "Full-stack", "48-hour build"],
    tint: "forest",
    status: "live",
    image: "/work/wyoming/01-hero.jpg",
  },
  {
    slug: "gestation-calculator",
    index: "02",
    title: "Livestock Gestation Calculator",
    short: "Gestation Calc",
    category: "iOS Concept",
    summary:
      "I shipped the real tool in React. This study reimagines it as a HIG-fluent iPhone and Apple Watch app: offline-first for the field, widgets, complications, Dynamic Type, and haptics.",
    role: "Product & interaction design",
    year: "2024",
    tags: ["iOS / watchOS", "HIG", "Interaction craft", "Figma"],
    tint: "blush",
    status: "in-progress",
  },
  {
    slug: "jackson-laboratory",
    index: "03",
    title: "The Jackson Laboratory",
    short: "Jackson Lab",
    category: "Genomic Research",
    summary:
      "Research-driven work across mobile pricing and a legal facet panel where both tested designs failed, and the failure became the insight that shaped the third, shipped direction.",
    role: "UX design & research",
    year: "2022",
    tags: ["Research", "Enterprise", "Design systems"],
    tint: "sage",
    status: "gated",
    gated: true,
    image: "/work/jackson/lf-final.jpg",
  },
  {
    slug: "greenstand",
    index: "04",
    title: "Greenstand",
    short: "Greenstand",
    category: "Ecology / Non-profit",
    summary:
      "A token wallet and design system for a global tree-planting nonprofit, turning field data into a trustworthy, verifiable record of impact.",
    role: "Product design & design systems",
    year: "2021",
    tags: ["Fintech", "Design system", "Figma"],
    tint: "blush",
    status: "in-progress",
    image: "/work/greenstand/wallet-duo.jpg",
  },
  {
    slug: "uw-extension",
    index: "05",
    title: "Modernizing the 4-H State Website",
    short: "4-H State",
    category: "Public Sector",
    summary:
      "Transformed a fragmented 76-page educational ecosystem into a scalable, user-centered platform designed to improve navigation, accessibility, and youth engagement across Wyoming.",
    role: "UX / Product Designer",
    year: "2025",
    tags: ["Information architecture", "Accessibility", "UX survey", "Figma"],
    tint: "sage",
    status: "live",
    image: "/work/4h/hero.jpg",
  },
];

export function getCaseStudy(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

/** Awards & mentorship recognition, shown on the homepage and About. */
export type RecognitionItem = {
  title: string;
  issuer: string;
  year: string;
  detail?: string;
  cert: string; // /public path to the certificate image
};

export const recognitions: RecognitionItem[] = [
  {
    title: "Top 10 UX Testing Mentor",
    issuer: "ADPList",
    year: "Jul–Sep 2026",
    detail: "Ranked in the global mentor community",
    cert: "/awards/adplist.png",
  },
  {
    title: "ACE Bronze Award",
    issuer: "Association for Communication Excellence",
    year: "2026",
    detail: "Education Technology & Design, Website",
    cert: "/awards/ace.jpg",
  },
  {
    title: "UXPA Mentor",
    issuer: "UXPA International",
    year: "Spring 2026",
    detail: "Certificate of Recognition, mentorship program",
    cert: "/awards/uxpa.jpg",
  },
];
