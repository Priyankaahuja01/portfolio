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

const beyondPixels = [
  { label: "Illustrations", src: "/about/illustration.jpg" },
  { label: "Hiking", src: "/about/hiking.jpg" },
  { label: "Coffee", src: "/about/coffee.jpg" },
];

// Paintings gallery, self-portrait first.
const creativeWorks: { src: string; alt: string }[] = [
  { src: "/about/creative/self-portrait.jpg", alt: "Self-portrait oil painting of Priyanka seated at a table" },
  { src: "/about/creative/pop-art-woman.jpg", alt: "Pop-art painting of a woman shielding her eyes" },
  { src: "/about/creative/ballerina.jpg", alt: "Painting of a ballerina in a white dress" },
  { src: "/about/creative/flower-bicycle.jpg", alt: "Painting of a bicycle carrying a basket of colorful flowers" },
  { src: "/about/creative/profile-woman.jpg", alt: "Minimalist painting of a woman's profile with red lips" },
  { src: "/about/creative/black-hat.jpg", alt: "Painting of a woman in a black hat and dress" },
  { src: "/about/creative/flame-hair.jpg", alt: "Abstract painting of a figure with flame-like hair" },
  { src: "/about/creative/flower-picking.jpg", alt: "Painting of a woman in blue picking flowers" },
  { src: "/about/creative/umbrella-couple.jpg", alt: "Impressionist painting of a couple with an umbrella in a red forest" },
  { src: "/about/creative/tree-sunset.jpg", alt: "Painting of a bare tree against a red and yellow sunset" },
  { src: "/about/creative/guitar-trees.jpg", alt: "Painting of a guitar formed from trees reflected in water" },
  { src: "/about/creative/gold-abstract.jpg", alt: "Gold and grayscale palette-knife abstract painting" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <p className="text-eyebrow uppercase text-accent">About</p>
      <h1 className="mt-4 max-w-[16ch] font-display text-4xl leading-tight text-ink sm:text-5xl">
        From finger paints to shipped code.
      </h1>

      <div className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-strong [&>p]:mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/whiteboard.webp"
          alt="Priyanka mapping a product's design process on a whiteboard covered in sticky notes"
          className="mb-4 w-full rounded-xl md:float-right md:mb-3 md:ml-7 md:w-[46%]"
        />
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
        <div className="clear-both" />
      </div>

      <section className="mt-20">
        <h2 className="border-b border-line pb-4 font-display text-2xl text-ink">
          Creative
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong">
          When I am not designing screens, I am painting. A few pieces from the
          canvas.
        </p>
        {creativeWorks.length > 0 ? (
          <div className="mt-8 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {creativeWorks.map((c) => {
              // eslint-disable-next-line @next/next/no-img-element
              return (
                <img
                  key={c.src}
                  src={c.src}
                  alt={c.alt}
                  className="w-full rounded-xl border border-line"
                />
              );
            })}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-line-strong bg-surface text-eyebrow uppercase text-faint"
              >
                Painting
              </div>
            ))}
          </div>
        )}
      </section>

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
        <div className="mt-8 grid grid-cols-3 gap-4">
          {beyondPixels.map((b) => (
            <figure key={b.label} className="m-0">
              {b.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={b.src}
                  alt={b.label}
                  className="w-full rounded-xl border border-line"
                />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-dashed border-line-strong bg-surface text-center text-eyebrow uppercase text-faint">
                  {b.label}
                </div>
              )}
              <figcaption className="mt-2 text-eyebrow uppercase text-muted">
                {b.label}
              </figcaption>
            </figure>
          ))}
        </div>
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
