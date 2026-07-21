import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pb-20 pt-20 sm:pt-28 lg:pt-32">
        <Container width="wide">
          <p className="text-eyebrow font-medium uppercase tracking-wide text-accent">
            Priyanka Ahuja — Product Designer
          </p>
          <h1 className="mt-6 max-w-[18ch] font-serif text-display text-forest">
            Product designer who ships code.
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-ink-soft">
            Six-plus years designing and building products across fintech,
            public-sector, and research-heavy domains. I take work from
            ambiguous problem to shipped, measurable outcome — and write the
            front-end code to get it there.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-deep"
            >
              View selected work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              More about me
            </Link>
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section id="work" className="scroll-mt-24 pb-8">
        <Container width="wide">
          <div className="flex items-end justify-between border-b border-line pb-6">
            <h2 className="font-serif text-2xl text-forest">Selected work</h2>
            <p className="text-eyebrow uppercase tracking-wide text-muted">
              {caseStudies.length} case studies
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
