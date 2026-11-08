import Link from "next/link";
import Image from "next/image";
import type { CaseStudyMeta } from "@/lib/site";
import { cn } from "@/lib/cn";

function Media({ study, className }: { study: CaseStudyMeta; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-2", className)}>
      {study.image ? (
        <Image
          src={study.image}
          alt={`${study.title}, case study preview`}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        // Intentional placeholder until a screenshot is supplied.
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="font-serif text-5xl text-faint/60">{study.index}</span>
          <span className="text-eyebrow uppercase text-faint">
            {study.category}
          </span>
        </div>
      )}
      {study.gated && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-3 py-1 text-eyebrow text-muted-strong backdrop-blur">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          Protected
        </span>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <span
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-arrow text-on-arrow transition-transform duration-300 group-hover:rotate-45"
      aria-hidden="true"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line px-3 py-1 text-eyebrow text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudyMeta }) {
  const base =
    "group block overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-bg to-surface transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)] focus:outline-none";

  // Featured: wide tile, image + text side by side.
  if (study.featured) {
    return (
      <article className="md:col-span-2">
        <Link href={`/work/${study.slug}`} className={cn(base, "grid md:grid-cols-2")}>
          <Media study={study} className="aspect-[16/11] md:aspect-auto md:h-full md:min-h-[340px]" />
          <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <span className="text-eyebrow font-medium uppercase text-forest">
                {study.category}
              </span>
              <Arrow />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-ink">{study.title}</h3>
              <p className="mt-4 max-w-prose text-base text-muted">{study.summary}</p>
              <div className="mt-6">
                <Tags tags={study.tags} />
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  // Standard: image on top, text below.
  return (
    <article>
      <Link href={`/work/${study.slug}`} className={cn(base, "flex h-full flex-col")}>
        <Media study={study} className="aspect-[16/10]" />
        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="text-eyebrow font-medium uppercase text-forest">
              {study.category}
            </span>
            <Arrow />
          </div>
          <h3 className="mt-3 font-serif text-2xl text-ink">{study.title}</h3>
          <p className="mt-3 text-sm text-muted">{study.summary}</p>
          <div className="mt-auto pt-6">
            <Tags tags={study.tags} />
          </div>
        </div>
      </Link>
    </article>
  );
}
