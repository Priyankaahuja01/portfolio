import { Container } from "@/components/container";
import { recognitions } from "@/lib/site";

function AwardMark() {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-accent"
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
      </svg>
    </span>
  );
}

/** Awards & mentorship, driven by `recognitions` in lib/site. */
export function Recognition() {
  return (
    <section className="pb-8 pt-16">
      <Container width="wide">
        <div className="flex items-end justify-between border-b border-line pb-6">
          <h2 className="font-serif text-2xl text-ink">Recognition</h2>
          <p className="text-eyebrow uppercase text-muted">Awards &amp; mentorship</p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {recognitions.map((r) => (
            <li
              key={r.title}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <AwardMark />
              <h3 className="mt-5 font-serif text-xl text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-strong">{r.issuer}</p>
              <p className="mt-1 text-eyebrow uppercase text-muted">{r.year}</p>
              {r.detail && (
                <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
                  {r.detail}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
