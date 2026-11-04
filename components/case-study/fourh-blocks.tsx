import { FigureRow, StatRow } from "./blocks";

/* 4-H-specific data blocks (no-prop, so data survives MDX compilation). */

const personas = [
  {
    name: "The Driven Competitor",
    ages: "Ages 8–18",
    bio: "Has progressed from basic projects to statewide competitions, building professional skills for a future in agriculture or food science.",
    goals: [
      "Find contest rules and prep materials for events like Meat Judging or the State Shoot",
      "Apply for the State 4-H Leadership Team to mentor younger youth",
      "Download project manuals and guidebooks to work independently at home",
    ],
  },
  {
    name: "The Curious Explorer",
    ages: "Cloverbuds · Ages 5–8",
    bio: "A newcomer excited to explore Soil, Robotics, or Cake Decorating, usually navigating the site with a parent or adult volunteer.",
    goals: [
      "Discover age-appropriate activities through the Clover Buds section",
      "Try basic skills, like learning decorating tips for a cake",
      "See photos from past events to feel part of a community",
    ],
  },
];

export function FourhPersonas() {
  return (
    <div className="mx-auto my-10 grid max-w-5xl gap-6 md:grid-cols-2">
      {personas.map((p) => (
        <div
          key={p.name}
          className="rounded-2xl border border-line bg-surface p-7"
        >
          <p className="text-eyebrow uppercase text-forest">{p.ages}</p>
          <h3 className="mt-2 font-serif text-xl text-ink">{p.name}</h3>
          <p className="mt-3 text-base text-muted">{p.bio}</p>
          <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-muted-strong">
            {p.goals.map((g) => (
              <li key={g} className="flex gap-2">
                <span className="text-accent">→</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const pillars = [
  { name: "Animal Science", note: "13 sub-pages, Beef Cattle to Veterinary Science" },
  { name: "Expressive Arts", note: "12 sub-projects" },
  { name: "Healthy Living", note: "Foods, gardening, outdoor recreation" },
  { name: "Leadership & Civic Engagement", note: "Civic engagement, youth leadership" },
  { name: "Natural Resources", note: "Soil, wildlife, the outdoors" },
  { name: "Science & Technology", note: "Robotics and beyond" },
];

export function FourhPillars() {
  return (
    <div className="mx-auto my-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p, i) => (
        <div
          key={p.name}
          className="rounded-xl border border-line bg-surface p-5"
        >
          <span className="font-serif text-sm text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-1 font-serif text-lg text-ink">{p.name}</h3>
          <p className="mt-1.5 text-sm text-muted">{p.note}</p>
        </div>
      ))}
    </div>
  );
}

export function FourhWireframes() {
  return (
    <FigureRow
      cols={3}
      items={[
        {
          src: "/work/4h/wireframe-home.jpg",
          alt: "Hand-drawn wireframe of the 4-H homepage: hero, intro with sign-up, 4-H basics, team",
          caption: "Homepage",
        },
        {
          src: "/work/4h/wireframe-project.jpg",
          alt: "Hand-drawn wireframe of a project page: intro, what can you learn, guidebook",
          caption: "Project page",
        },
        {
          src: "/work/4h/wireframe-event.jpg",
          alt: "Hand-drawn wireframe of an event page: event name, info, resources",
          caption: "Event page",
        },
      ]}
    />
  );
}

export function FourhStats() {
  return (
    <StatRow
      items={[
        { value: "76 → 6", label: "pages reorganized into six clear content pillars" },
        { value: "13", label: "disjointed Animal Science pages unified into one hub" },
        { value: "ADA", label: "accessibility compliance across all 76 pages" },
      ]}
    />
  );
}
