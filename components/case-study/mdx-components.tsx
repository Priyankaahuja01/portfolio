import type { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import {
  Figure,
  FigureRow,
  Part,
  Lede,
  Note,
  StatRow,
  Points,
  Owned,
} from "./blocks";
import {
  ColorTokens,
  TypeScale,
  GsOwned,
  GsCapturePoints,
  GsPersonaPoints,
  GsAdminFigures,
  GsWalletPhones,
  GsOutcomes,
} from "./greenstand-blocks";
import {
  FourhPersonas,
  FourhPillars,
  FourhWireframes,
  FourhStats,
} from "./fourh-blocks";
import {
  JaxMobileScreens,
  JaxABDesigns,
  JaxABTests,
  JaxStats,
} from "./jackson-blocks";
import { WyoForms, WyoStats } from "./wyoming-blocks";

// Prose elements are centered in a readable measure; figures/blocks go wider.
export const mdxComponents: MDXComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mx-auto mt-16 max-w-2xl font-serif text-3xl text-ink">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mx-auto mt-10 max-w-2xl font-serif text-xl text-ink">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mx-auto my-5 max-w-2xl text-lg leading-relaxed text-muted-strong">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mx-auto my-5 max-w-2xl list-disc space-y-2 pl-6 text-lg text-muted-strong">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="mx-auto my-5 max-w-2xl list-decimal space-y-2 pl-6 text-lg text-muted-strong">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-accent underline underline-offset-4"
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="mx-auto my-6 max-w-2xl font-serif text-xl italic text-ink">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mx-auto my-16 max-w-2xl border-line" />,
  // Custom blocks (referenced by tag in MDX)
  Figure,
  FigureRow,
  Part,
  Lede,
  Note,
  StatRow,
  Points,
  Owned,
  ColorTokens,
  TypeScale,
  GsOwned,
  GsCapturePoints,
  GsPersonaPoints,
  GsAdminFigures,
  GsWalletPhones,
  GsOutcomes,
  FourhPersonas,
  FourhPillars,
  FourhWireframes,
  FourhStats,
  JaxMobileScreens,
  JaxABDesigns,
  JaxABTests,
  JaxStats,
  WyoForms,
  WyoStats,
};
