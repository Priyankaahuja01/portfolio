import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Priyanka Ahuja, product designer who ships code, across fintech, public-sector, and research-heavy domains.",
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="text-eyebrow uppercase tracking-wide text-accent">About</p>
        <h1 className="mt-6 max-w-[20ch] font-display text-4xl text-ink">
          I design products and build the code that ships them.
        </h1>

        {/* Scaffold, real About copy lands in the next chunk. */}
        <div className="mt-16 rounded-2xl border border-dashed border-line-strong bg-surface p-8">
          <p className="text-eyebrow uppercase tracking-wide text-muted">
            Scaffold
          </p>
          <p className="mt-3 max-w-prose text-base text-muted-strong">
            Full About copy, photo, and background are the next step. Route is
            live so navigation can be reviewed.
          </p>
        </div>
      </Container>
    </section>
  );
}
