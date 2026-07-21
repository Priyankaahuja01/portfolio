import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/site";
import { cn } from "@/lib/cn";

function StatusBadge({ status }: { status: CaseStudyMeta["status"] }) {
  const label =
    status === "gated"
      ? "Password protected"
      : status === "in-progress"
        ? "In progress"
        : "Case study";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-eyebrow uppercase text-muted">
      {status === "gated" && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      )}
      {label}
    </span>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudyMeta }) {
  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/work/${study.slug}`}
        className="flex flex-col focus:outline-none"
      >
        {/* Media placeholder — replace with large real screenshots per CLAUDE.md */}
        <div
          className={cn(
            "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface-2",
            "transition-all duration-300 group-hover:border-line-strong group-hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.18)]",
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-eyebrow uppercase text-muted/70">
              {/* TODO: {study.slug} hero image */}
              Image forthcoming
            </span>
          </div>
          <span className="absolute left-4 top-4 font-mono text-eyebrow text-muted-strong">
            {study.index}
          </span>
        </div>

        <div className="mt-6 flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <StatusBadge status={study.status} />
            <span className="font-mono text-eyebrow uppercase text-muted">
              {study.year}
            </span>
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
            {study.title}
          </h3>

          <p className="mt-2 max-w-prose text-base text-muted-strong">
            {study.summary}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-bg px-3 py-1 text-eyebrow text-muted-strong"
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
