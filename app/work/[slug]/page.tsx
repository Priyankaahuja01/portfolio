import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { compileMDX } from "next-mdx-remote/rsc";
import { Container } from "@/components/container";
import { caseStudies, getCaseStudy } from "@/lib/site";
import {
  getCaseStudySource,
  type CaseStudyFrontmatter,
} from "@/lib/case-studies";
import { mdxComponents } from "@/components/case-study/mdx-components";
import { CaseStudyHero, type HeroMeta } from "@/components/case-study/case-study-hero";
import { PasswordGate } from "@/components/case-study/password-gate";

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
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const source = getCaseStudySource(slug);

  // NDA-courtesy gate: if the study is gated and not yet unlocked, show the
  // password form instead of the content (content never reaches the HTML).
  if (study.gated) {
    const store = await cookies();
    const unlocked = store.get(`unlocked-${slug}`)?.value === "1";
    if (!unlocked) {
      return (
        <article className="py-16 sm:py-24">
          <Container>
            <Link
              href="/#work"
              className="text-eyebrow uppercase tracking-wide text-muted transition-colors hover:text-accent"
            >
              ← All work
            </Link>
            <div className="mx-auto mt-10 max-w-2xl text-center">
              <p className="text-eyebrow font-medium uppercase text-accent">
                {study.category}
              </p>
              <h1 className="mt-4 font-display text-4xl text-ink">
                {study.title}
              </h1>
              <p className="mt-6 text-lg text-muted-strong">{study.summary}</p>
            </div>
            <PasswordGate slug={slug} />
          </Container>
        </article>
      );
    }
  }

  // Written case study → render the MDX. Otherwise show the scaffold notice.
  if (source) {
    const { content, frontmatter } = await compileMDX<CaseStudyFrontmatter>({
      source,
      components: mdxComponents,
      options: { parseFrontmatter: true },
    });

    const meta: HeroMeta[] = [
      frontmatter.role && { label: "Role", value: frontmatter.role },
      frontmatter.timeline && { label: "Timeline", value: frontmatter.timeline },
      frontmatter.team && { label: "Team", value: frontmatter.team },
      frontmatter.tools && { label: "Tools", value: frontmatter.tools },
    ].filter(Boolean) as HeroMeta[];

    return (
      <article className="pb-24 pt-6">
        <CaseStudyHero
          category={frontmatter.category}
          title={frontmatter.title}
          summary={frontmatter.summary}
          meta={meta}
        />
        <div className="mt-6 px-6 sm:px-8">{content}</div>

        <div className="mx-auto mt-24 max-w-2xl px-6 sm:px-8">
          <div className="border-t border-line pt-8">
            <Link
              href="/#work"
              className="text-eyebrow uppercase text-muted transition-colors hover:text-accent"
            >
              ← All work
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <Link
          href="/#work"
          className="text-eyebrow uppercase tracking-wide text-muted transition-colors hover:text-accent"
        >
          ← All work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-eyebrow font-medium uppercase tracking-wide text-accent">
            {study.category}
          </span>
          <span className="text-eyebrow uppercase tracking-wide text-muted">
            {study.role} · {study.year}
          </span>
        </div>

        <h1 className="mt-4 max-w-[18ch] font-display text-4xl text-ink">
          {study.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-ink-soft">{study.summary}</p>

        <div className="mt-16 rounded-2xl border border-dashed border-line-strong bg-surface p-8">
          <p className="text-eyebrow uppercase tracking-wide text-muted">
            In progress
          </p>
          <p className="mt-3 max-w-prose text-base text-muted-strong">
            This case study is being written. Check back soon, or explore the
            studies that are live from the work grid.
          </p>
        </div>
      </Container>
    </article>
  );
}
