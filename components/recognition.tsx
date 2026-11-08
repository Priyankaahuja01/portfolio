import Image from "next/image";
import { recognitions } from "@/lib/site";

/** Awards & mentorship, driven by `recognitions` in lib/site.
    Each card shows the certificate; clicking opens it full size. */
export function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-24 pt-20">
      <div>
        <div className="flex items-end justify-between border-b border-line pb-6">
          <h2 className="font-display text-2xl text-ink">Recognition</h2>
          <p className="text-eyebrow uppercase text-muted">Awards &amp; mentorship</p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {recognitions.map((r) => (
            <li
              key={r.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-bg to-surface"
            >
              <a
                href={r.cert}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/2] overflow-hidden bg-surface-2"
                aria-label={`View ${r.title} certificate`}
              >
                <Image
                  src={r.cert}
                  alt={`${r.title}, certificate from ${r.issuer}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-bg/85 px-3 py-1 text-eyebrow uppercase text-muted-strong opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  View certificate →
                </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg text-ink">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-strong">{r.issuer}</p>
                <p className="mt-1 text-eyebrow uppercase text-muted">{r.year}</p>
                {r.detail && (
                  <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
                    {r.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
