import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="text-eyebrow uppercase tracking-wide text-accent">
          Error 404
        </p>
        <h1 className="mt-6 max-w-[16ch] font-serif text-4xl text-forest">
          This page wandered off.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-ink-soft">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-deep"
        >
          Back home
        </Link>
      </Container>
    </section>
  );
}
