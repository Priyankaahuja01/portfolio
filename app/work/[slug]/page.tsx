import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { caseStudies, getCaseStudy } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <Link
          href="/#work"
          className="font-mono text-eyebrow uppercase text-muted transition-colors hover:text-ink"
        >
          ← All work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-eyebrow uppercase text-muted">
            {study.index}
          </span>
          <span className="font-mono text-eyebrow uppercase text-muted">
            {study.role} · {study.year}
          </span>
        </div>

        <h1 className="mt-4 max-w-[18ch] text-4xl font-semibold text-ink">
          {study.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-strong">
          {study.summary}
        </p>

        {/* Scaffold notice — real MDX case-study content lands in the next chunk. */}
        <div className="mt-16 rounded-2xl border border-dashed border-line-strong bg-surface p-8">
          <p className="font-mono text-eyebrow uppercase text-muted">
            Scaffold
          </p>
          <p className="mt-3 max-w-prose text-base text-muted-strong">
            This case study page is scaffolded. The full write-up (as MDX) and
            large screenshots are the next step. Placeholder route is live so
            navigation and metadata can be reviewed.
          </p>
        </div>
      </Container>
    </article>
  );
}
