import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé of Priyanka Ahuja — Product Designer who ships code.",
};

export default function ResumePage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="text-eyebrow uppercase tracking-wide text-accent">Resume</p>
        <h1 className="mt-6 max-w-[20ch] font-display text-4xl text-ink">
          Priyanka Ahuja
        </h1>
        <p className="mt-4 text-xl text-muted-strong">
          Product Designer who ships code
        </p>

        {/* Scaffold — replace with rendered résumé + PDF download in the next chunk.
            PDF: /public/Priyanka_Resume_July 20th 2026.pdf (Pri to supply). */}
        <div className="mt-16 rounded-2xl border border-dashed border-line-strong bg-surface p-8">
          <p className="text-eyebrow uppercase tracking-wide text-muted">
            Scaffold
          </p>
          <p className="mt-3 max-w-prose text-base text-muted-strong">
            Rendered résumé and the PDF download button are the next step. The
            updated PDF (July 2026) still needs to be dropped into{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-sm">
              /public
            </code>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
