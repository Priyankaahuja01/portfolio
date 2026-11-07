import Link from "next/link";

export type HeroMeta = { label: string; value: string };

export function CaseStudyHero({
  category,
  title,
  summary,
  meta,
}: {
  category: string;
  title: string;
  summary: string;
  meta: HeroMeta[];
}) {
  return (
    <header className="mx-auto max-w-5xl px-6 pt-10 sm:px-8">
      <Link
        href="/#work"
        className="text-eyebrow uppercase text-muted transition-colors hover:text-accent"
      >
        ← All work
      </Link>

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="mb-5 h-[3px] w-10 bg-accent" aria-hidden="true" />
        <p className="text-eyebrow font-medium uppercase text-accent">
          {category}
        </p>
        <h1 className="mt-4 font-display text-4xl text-ink">{title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-strong">
          {summary}
        </p>

        {meta.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-eyebrow uppercase text-forest">
                  {m.label}
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </header>
  );
}
