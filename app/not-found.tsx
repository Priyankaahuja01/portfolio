import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="font-mono text-eyebrow uppercase text-muted">Error 404</p>
        <h1 className="mt-6 max-w-[16ch] text-4xl font-semibold text-ink">
          This page wandered off.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted-strong">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
        >
          Back home
        </Link>
      </Container>
    </section>
  );
}
