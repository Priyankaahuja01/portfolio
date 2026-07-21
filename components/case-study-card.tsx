import Link from "next/link";
import type { CaseStudyMeta, CaseStudyTint } from "@/lib/site";
import { cn } from "@/lib/cn";

const tintStyles: Record<
  CaseStudyTint,
  { card: string; eyebrow: string; title: string; body: string; pill: string; arrow: string }
> = {
  sage: {
    card: "bg-tint-sage",
    eyebrow: "text-accent",
    title: "text-forest",
    body: "text-ink-soft",
    pill: "border-forest/15 bg-cream/70 text-forest",
    arrow: "bg-cream text-forest",
  },
  blush: {
    card: "bg-tint-blush",
    eyebrow: "text-accent",
    title: "text-forest",
    body: "text-ink-soft",
    pill: "border-accent/25 bg-cream/70 text-accent",
    arrow: "bg-cream text-forest",
  },
  forest: {
    card: "bg-forest-deep",
    eyebrow: "text-tint-blush",
    title: "text-cream",
    body: "text-cream/80",
    pill: "border-cream/25 bg-cream/10 text-cream",
    arrow: "bg-cream text-forest",
  },
};

export function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudyMeta;
  className?: string;
}) {
  const t = tintStyles[study.tint];

  return (
    <article className={cn("group", className)}>
      <Link
        href={`/work/${study.slug}`}
        className={cn(
          "flex h-full flex-col justify-between gap-10 rounded-[28px] p-8 sm:p-10",
          "transition-all duration-300 hover:-translate-y-1",
          "hover:shadow-[0_24px_60px_-28px_rgba(53,73,47,0.45)] focus:outline-none",
          t.card,
        )}
      >
        {/* Top row: category eyebrow + arrow button */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={cn("text-eyebrow font-medium", t.eyebrow)}>
              {study.category}
            </span>
            {study.gated && (
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-eyebrow",
                  t.body,
                )}
              >
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

          <span
            className={cn(
              "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
              "transition-transform duration-300 group-hover:rotate-45",
              t.arrow,
            )}
            aria-hidden="true"
          >
            <svg
              width="18"
              height="18"
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
        </div>

        {/* Body: title, summary, tags */}
        <div>
          <h3 className={cn("font-serif text-3xl", t.title)}>{study.title}</h3>
          <p className={cn("mt-4 max-w-prose text-base", t.body)}>
            {study.summary}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {study.tags.map((tag) => (
              <li
                key={tag}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-eyebrow",
                  t.pill,
                )}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
