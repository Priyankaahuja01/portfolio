import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-20 sm:pt-28 lg:pt-32">
        <Container width="wide">
          <p className="font-mono text-eyebrow uppercase text-muted">
            Priyanka Ahuja — Product Designer
          </p>
          <h1 className="mt-6 max-w-[16ch] text-display font-semibold text-ink">
            Product designer who ships code.
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-muted-strong">
            Six-plus years designing and building products across fintech,
            public-sector, and research-heavy domains. I take work from
            ambiguous problem to shipped, measurable outcome — and write the
            front-end code to get it there.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
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
      <section id="work" className="scroll-mt-24 py-16 sm:py-24">
        <Container width="wide">
          <div className="flex items-end justify-between border-b border-line pb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Selected work
            </h2>
            <p className="font-mono text-eyebrow uppercase text-muted">
              {caseStudies.length} case studies
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
