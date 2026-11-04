import Link from "next/link";
import { caseStudies } from "@/lib/site";

// Radius as a % of the square stage, so node positions scale with the container.
const R = 35.2;

const nodes = caseStudies.map((study, i) => {
  const angle = ((-90 + i * (360 / caseStudies.length)) * Math.PI) / 180;
  return {
    study,
    x: 50 + R * Math.cos(angle),
    y: 50 + R * Math.sin(angle),
    delay: -i * 2.1,
  };
});

export function OrbitHero() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* Faint rings (desktop only) */}
      <div
        className="absolute hidden rounded-full border border-line/70 md:block"
        style={{ inset: "14%" }}
        aria-hidden="true"
      />
      <div
        className="absolute hidden rounded-full border border-line/50 md:block"
        style={{ inset: "25%" }}
        aria-hidden="true"
      />

      {/* Center: portrait + lavender glow */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[300px] md:w-[300px]"
          style={{
            background:
              "radial-gradient(circle, rgba(199,163,214,0.42), rgba(199,163,214,0) 68%)",
          }}
          aria-hidden="true"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portrait/pri-portrait-light.png"
          alt="Illustrated portrait of Priyanka Ahuja, drawn by her"
          className="portrait-light h-[240px] w-auto md:h-[286px]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portrait/pri-portrait-dark.png"
          alt=""
          aria-hidden="true"
          className="portrait-dark h-[240px] w-auto md:h-[286px]"
        />
      </div>

      {/* Orbiting case-study links (desktop only; mobile browses the grid below) */}
      <nav
        aria-label="Selected work"
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        {nodes.map(({ study, x, y, delay }) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="orbit-node group pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className="orbit-float inline-block"
              style={{ animationDelay: `${delay}s` }}
            >
              <span className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-bg px-3.5 py-2 shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-accent group-focus-visible:border-accent group-focus-visible:ring-2 group-focus-visible:ring-accent">
                <span className="font-serif text-[13px] text-forest">
                  {study.index}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                <span className="font-serif text-[15px] font-medium text-ink">
                  {study.short}
                </span>
              </span>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
