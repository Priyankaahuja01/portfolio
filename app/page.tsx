import { CaseStudyCard } from "@/components/case-study-card";
import { Recognition } from "@/components/recognition";
import { caseStudies } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      {/* Intro */}
      <section>
        <p className="max-w-3xl font-display text-3xl leading-[1.28] text-ink sm:text-[2.6rem]">
          Hi, I&rsquo;m Priyanka, a product designer and developer shaping
          accessible experiences for <span className="text-accent">B2C</span>,{" "}
          <span className="text-forest">B2B</span>, and{" "}
          <span className="text-accent">higher-education</span> enterprises.
        </p>
      </section>

      {/* Selected work */}
      <section id="work" className="scroll-mt-24 pt-20">
        <div className="flex items-end justify-between border-b border-line pb-6">
          <h2 className="font-display text-2xl text-ink">Selected work</h2>
          <p className="text-eyebrow uppercase text-muted">
            {caseStudies.length} case studies
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Recognition */}
      <Recognition />
    </div>
  );
}
