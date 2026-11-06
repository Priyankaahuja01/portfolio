import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyCard } from "@/components/case-study-card";
import { OrbitHero } from "@/components/orbit-hero";
import { Recognition } from "@/components/recognition";
import { caseStudies } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pb-20 pt-16 sm:pt-20 lg:pt-24">
        <Container width="wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-5 h-[3px] w-10 bg-accent" aria-hidden="true" />
              <p className="text-eyebrow font-medium uppercase text-accent">
                Product Designer
              </p>
              <h1 className="mt-4 max-w-[15ch] font-serif text-display text-ink">
                I design it.
                <br />
                Then I ship it.
              </h1>
              <p className="mt-8 max-w-xl text-xl text-muted-strong">
                Six-plus years turning real-world problems — from Wyoming
                rangeland to fintech — into products I design and build.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 rounded-full bg-btn px-6 py-3 text-sm font-medium text-on-btn transition-opacity hover:opacity-90"
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
            </div>

            <OrbitHero />
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section id="work" className="scroll-mt-24 pb-8">
        <Container width="wide">
          <div className="flex items-end justify-between border-b border-line pb-6">
            <h2 className="font-serif text-2xl text-ink">Selected work</h2>
            <p className="text-eyebrow uppercase text-muted">
              {caseStudies.length} case studies
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <Recognition />
    </>
  );
}
