import type { Metadata } from "next";
import { socialLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Priyanka Ahuja, a product designer and web developer with 6+ years across public sector, environmental fintech, scientific e-commerce, and banking.",
};

const PDF = "/Priyanka-Ahuja-Resume.pdf";

const competencies = [
  "End-to-end Product Design",
  "Problem Framing & Product Thinking",
  "UX Research & Usability Testing",
  "Design Systems",
  "Interaction & Visual Design",
  "Rapid Prototyping",
  "Data-informed Design",
  "Accessibility (WCAG)",
  "Cross-functional Collaboration",
  "Front-end Development (ReactJS)",
  "AI-assisted Design Workflows",
  "Mentoring",
];

const experience = [
  {
    role: "Web Developer / Designer",
    org: "University of Wyoming Extension & College of Agriculture",
    place: "Laramie, Wyoming",
    dates: "Jan 2025 – Present",
    context: "24+ statewide platforms · 80K+ annual users · Public sector & agriculture",
    bullets: [
      "Lead design and development for 24+ high-visibility platforms across UW Extension and the College of Agriculture, serving 80K+ annual users. Act as the primary UX and development authority, defining strategy, architecture, and accessibility while keeping platforms consistent across distributed teams.",
      "Built a scalable UX system of reusable layouts, page templates, and content architectures that cut time-to-launch by 34% across major initiatives, including Wyoming State 4-H, Harvest Wyoming, the Senior Nutrition Blog, Homestead Conference, Ag & Art Tour, and Wyoming Bee College, all to WCAG standards.",
      "Led crisis-response delivery for the Wyoming Emergency Hay Assistance platform after the 2025 wildfires, launching within 48 hours to match hay donors with ranchers statewide (20+ offer and request listings); publicly recognized by the Governor of Wyoming and cited by multiple news outlets.",
      "Used AI-assisted workflows (Claude) to audit and restructure large-scale nutrition content, defining taxonomy, improving searchability, and cutting manual content processing time by 100+ hours.",
      "Ran a 44-response reader survey for UW AgNews (80% of readers 55+, 43% arriving via Google) and used the findings to consolidate 8 categories into 6 and flag 530+ of 589 tags as unused, improving findability and SEO.",
      "Design, build, and ship custom tools, including a livestock gestation calculator in ReactJS for lambing-season planning, reducing design-to-engineering rework by 32%.",
      "Received the ACE Professional Conference Bronze Award for the Homestead Conference website, and mentor a web design intern and part-time staff on UX and accessibility standards.",
    ],
  },
  {
    role: "Product Designer / Researcher",
    org: "Greenstand",
    place: "Remote, USA",
    dates: "Apr 2023 – Dec 2024",
    context: "Global tree-tracking & environmental fintech · Accessibility-first design system",
    bullets: [
      "Led product design and research for core workflows (tree capture, matching, monitoring, and verification), shaping end-to-end flows for globally distributed contributor groups.",
      "Improved tree-planting and monitoring efficiency by 28% with a data-rich web mapping experience that streamlined search, comparison, and decision-making.",
      "Designed a digital wallet for gifting and managing tree tokens, prioritizing clarity and trust to support adoption.",
      "Designed and scaled an accessibility-tested design system, standardizing typography, color, and components across products.",
      "Supervised 2 part-time team members, providing design direction and feedback.",
    ],
  },
  {
    role: "UX Design / Research Co-op",
    org: "The Jackson Laboratory",
    place: "Bar Harbor, Maine",
    dates: "Jul 2022 – Dec 2022",
    context: "Enterprise scientific e-commerce · 1.5M+ global users",
    bullets: [
      "Worked with stakeholders on research, requirements, and pain-points assessment to improve the search and pricing experience for experimental mice, resulting in a 35% increase in user satisfaction.",
      "Built comprehensive user flows for mobile pricing screens for 1.5M+ users globally, letting people browse mouse pricing on the go.",
      "Used Maze and Figma to analyze behavior and inform product requirements and UI, communicated to senior executives and stakeholders.",
    ],
  },
  {
    role: "UI/UX Designer (Freelance)",
    org: "Remote",
    place: "",
    dates: "Apr 2019 – Jul 2021",
    context: "B2B/B2C manufacturing platform · Building-materials e-commerce",
    bullets: [
      "Owned end-to-end UX and UI for a B2B/B2C manufacturing platform and a building-materials e-commerce client, turning business requirements into production-ready designs.",
      "Increased conversion by up to 30% by optimizing checkout flows and product discovery, validated through usability testing.",
      "Ran WCAG accessibility audits and turned findings into prioritized design improvements.",
    ],
  },
  {
    role: "Deputy Manager, Digital Banking",
    org: "ICICI Bank",
    place: "New Delhi, India",
    dates: "Jun 2016 – Aug 2018",
    context: "Mobile banking & internal financial systems",
    bullets: [
      "Supported UX research and usability testing for mobile banking and internal financial systems, drawing on user feedback, behavioral data, and relationships with 350+ clients to find usability gaps.",
      "Implemented research-driven interface improvements across key flows, increasing user satisfaction by 36%.",
    ],
  },
];

const skills = [
  { group: "Design", items: "Figma, FigJam, Adobe XD, Illustrator, Axure, Webflow, Miro, Mural" },
  { group: "Research & Testing", items: "Interviews, usability studies, A/B testing, contextual inquiry, journey & affinity mapping, thematic analysis, heuristic evaluation, personas; UserTesting, Maze, Pendo" },
  { group: "Data & Accessibility", items: "Google Analytics, Siteimprove, WAVE, WCAG" },
  { group: "Development", items: "ReactJS, HTML5, CSS3, Python, SQL, WordPress, Elementor, GitHub" },
  { group: "AI Tools", items: "Claude & Claude Design, Figma AI, Cursor, ChatGPT Codex, Replit, Lovable, NotebookLM" },
];

const education = [
  { degree: "M.S. Information Systems", school: "Northeastern University, Boston", years: "2021 – 2023" },
  { degree: "MBA, Finance & Marketing", school: "Jaipuria Institute of Management, India", years: "2014 – 2016" },
  { degree: "B.Tech, Electronics & Communication", school: "United College of Engineering & Research, India", years: "2009 – 2013" },
];

const awards = [
  "Bronze Award, ACE Professional Conference, for the Homestead Conference website.",
  "Public recognition from the Governor of Wyoming for the Wyoming Emergency Hay Assistance platform, cited across multiple news outlets.",
];

const certs = [
  "UX Design Certificate, Google · 2021",
  "Enterprise Design Thinking Practitioner, IBM · 2022",
  "Mentor, UXPA (User Experience Professionals Association) · 2025 – Present",
  "Mentor, ADPList · 2026 – Present",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 border-b border-line pb-3 font-display text-2xl text-ink">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-eyebrow uppercase text-accent">Résumé</p>
          <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            Priyanka Ahuja
          </h1>
          <p className="mt-3 text-eyebrow uppercase text-muted">
            Product Designer · UX Research · Design Systems · Accessibility
          </p>
        </div>
        <a
          href={PDF}
          download
          className="inline-flex items-center gap-2 rounded-full bg-btn px-6 py-3 text-sm font-medium text-on-btn transition-opacity hover:opacity-90"
        >
          Download PDF
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
          </svg>
        </a>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-eyebrow uppercase text-muted">
        <span>Laramie, WY · Open to relocation</span>
        <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
        {socialLinks
          .filter((l) => l.label === "LinkedIn" || l.label === "GitHub")
          .map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {l.label}
            </a>
          ))}
      </div>

      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-strong">
        Product Designer with 6+ years taking digital products from research to
        launch across public sector, environmental fintech, scientific
        e-commerce, and banking, for audiences from 80K+ annual users on 24+
        statewide platforms to 1.5M+ global customers.
      </p>

      <SectionHeading>Core competencies</SectionHeading>
      <ul className="mt-6 flex flex-wrap gap-2">
        {competencies.map((c) => (
          <li key={c} className="rounded-full border border-line px-3 py-1 text-sm text-muted-strong">
            {c}
          </li>
        ))}
      </ul>

      <SectionHeading>Experience</SectionHeading>
      <div className="mt-8 space-y-10">
        {experience.map((job) => (
          <article key={job.role + job.org}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl text-ink">{job.role}</h3>
              <span className="text-eyebrow uppercase text-muted">{job.dates}</span>
            </div>
            <p className="mt-1 text-base text-muted-strong">
              {job.org}
              {job.place ? ` · ${job.place}` : ""}
            </p>
            <p className="mt-1 text-eyebrow uppercase text-faint">{job.context}</p>
            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="relative pl-5 text-base leading-relaxed text-muted-strong">
                  <span className="absolute left-0 top-[0.65em] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <SectionHeading>Skills & tools</SectionHeading>
      <dl className="mt-6 space-y-4">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-5">
            <dt className="text-eyebrow uppercase text-muted">{s.group}</dt>
            <dd className="text-base text-muted-strong">{s.items}</dd>
          </div>
        ))}
      </dl>

      <SectionHeading>Education</SectionHeading>
      <ul className="mt-6 space-y-4">
        {education.map((e) => (
          <li key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-4">
            <div>
              <p className="font-display text-lg text-ink">{e.degree}</p>
              <p className="text-base text-muted-strong">{e.school}</p>
            </div>
            <span className="text-eyebrow uppercase text-muted">{e.years}</span>
          </li>
        ))}
      </ul>

      <SectionHeading>Awards & recognition</SectionHeading>
      <ul className="mt-6 space-y-2.5">
        {awards.map((a) => (
          <li key={a} className="relative pl-5 text-base leading-relaxed text-muted-strong">
            <span className="absolute left-0 top-[0.65em] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-forest" aria-hidden="true" />
            {a}
          </li>
        ))}
      </ul>

      <SectionHeading>Certifications & mentorship</SectionHeading>
      <ul className="mt-6 space-y-2">
        {certs.map((c) => (
          <li key={c} className="text-base text-muted-strong">{c}</li>
        ))}
      </ul>

      <div className="mt-16 border-t border-line pt-8">
        <a
          href={PDF}
          download
          className="inline-flex items-center gap-2 rounded-full bg-btn px-6 py-3 text-sm font-medium text-on-btn transition-opacity hover:opacity-90"
        >
          Download PDF
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
