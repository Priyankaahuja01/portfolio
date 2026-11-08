import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Priyanka Ahuja, a product designer and developer who turned a childhood love of making things into intuitive, accessible interfaces.",
};

const workflow = [
  {
    title: "Product Framing",
    body: "Thoughtful diagrams that define what the product is and who it serves.",
    tools: "Keynote, Sketch",
  },
  {
    title: "Interaction Design",
    body: "Wireframes mapped to real user journeys and task flows.",
    tools: "Figma",
  },
  {
    title: "Prototyping",
    body: "Low to high-fidelity prototypes that bring micro-interactions to life.",
    tools: "Figma, InVision, Flinto",
  },
  {
    title: "Information Architecture",
    body: "Product frameworks and mental models for complex, abstract spaces.",
    tools: "",
  },
  {
    title: "Visual Design",
    body: "Visual exploration grounded in the company, the product, and its users.",
    tools: "",
  },
  {
    title: "Product & User Research",
    body: "Competitive analysis and usability testing that inform real decisions.",
    tools: "Maze, Miro",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <p className="text-eyebrow uppercase text-accent">About</p>
      <h1 className="mt-4 max-w-[16ch] font-display text-4xl leading-tight text-ink sm:text-5xl">
        From finger paints to shipped code.
      </h1>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-5 text-lg leading-relaxed text-muted-strong">
        <p>
          Finger paints gave way to code, but the creative spark never faded.
          Tech fascinated me and led me to engineering and business degrees, yet
          something always felt off. The lightbulb moment came in finance, where
          talking with 200+ customers a day revealed a world of user pain points
          I couldn&rsquo;t unsee.
        </p>
        <p>
          That is when UX design clicked into place: the missing piece that
          merged my love of tech with my childhood creative fire. Freelancing
          fueled the passion, a double master&rsquo;s at Northeastern built the
          foundation, and now I design and build intuitive interfaces for a
          living.
        </p>
        <p>
          Why design? It lets me use empathy and creativity to build experiences
          that resonate instead of frustrate. No more digital mazes, just
          experiences as delightful and engaging as those childhood craft kits.
        </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/whiteboard.webp"
          alt="Priyanka mapping a product's design process on a whiteboard covered in sticky notes"
          className="w-full self-center"
        />
      </div>

      <section className="mt-20">
        <h2 className="border-b border-line pb-4 font-display text-2xl text-ink">
          What I do
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {workflow.map((w) => (
            <div key={w.title}>
              <h3 className="font-display text-xl text-ink">{w.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-strong">
                {w.body}
              </p>
              {w.tools && (
                <p className="mt-2 text-eyebrow uppercase text-muted">
                  {w.tools}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 max-w-2xl">
        <h2 className="border-b border-line pb-4 font-display text-2xl text-ink">
          Beyond pixels
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-strong">
          Beyond pixels, life is a canvas. Whether I am holding a paintbrush or
          sketching a new adventure, I thrive on exploration, from scaling
          mountains to holding a yoga pose. Globally inspired coffee fuels the
          creativity, and I am always up for the next adventure (and happy to
          hear about yours).
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {["Illustrations", "Hiking", "Coffee"].map((h) => (
            <li
              key={h}
              className="rounded-full border border-line px-3 py-1 text-eyebrow uppercase text-muted"
            >
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl text-ink">
          Let&rsquo;s make something worth shipping.
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-block text-lg text-accent underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
      </section>
    </div>
  );
}
