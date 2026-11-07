import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* Reusable case-study content blocks. Prose lives in MDX; these handle the
   structured, visual moments (large figures, section headers, stats). */

type Img = { src: string; alt: string; caption?: string };

export function Figure({
  src,
  alt,
  caption,
  wide,
  plain,
}: Img & { wide?: boolean; plain?: boolean }) {
  return (
    <figure className={cn("mx-auto my-12", wide ? "max-w-6xl" : "max-w-5xl")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-full",
          plain ? "" : "rounded-xl border border-line bg-surface",
        )}
      />
      {caption && (
        <figcaption className="mx-auto mt-3 max-w-2xl text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function FigureRow({
  items,
  cols = 2,
}: {
  items: Img[];
  cols?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "mx-auto my-12 grid max-w-6xl items-start gap-6",
        cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
      )}
    >
      {items.map((it) => (
        <figure key={it.src} className="m-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={it.src}
            alt={it.alt}
            loading="lazy"
            className="w-full rounded-xl border border-line bg-surface"
          />
          {it.caption && (
            <figcaption className="mt-3 text-sm text-muted">
              {it.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function Part({
  n,
  label,
  title,
  children,
}: {
  n: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mt-20 max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-accent px-2 py-0.5 font-serif text-[13px] font-semibold text-on-accent">
          {n}
        </span>
        <span className="text-eyebrow font-medium uppercase text-forest">
          {label}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl text-ink">{title}</h2>
      {children && <p className="mt-4 text-lg text-muted-strong">{children}</p>}
    </div>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto my-6 max-w-2xl text-xl leading-relaxed text-ink">
      {children}
    </p>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto my-8 max-w-2xl border-l-[3px] border-accent pl-5 text-lg text-ink">
      {children}
    </div>
  );
}

export function StatRow({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="mx-auto my-10 grid max-w-4xl gap-8 sm:grid-cols-3">
      {items.map((it) => (
        <div key={it.label}>
          <div className="font-display text-4xl text-ink">{it.value}</div>
          <p className="mt-2 text-sm text-muted">{it.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Points({
  items,
  cols = 3,
}: {
  items: { h: string; p: string }[];
  cols?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "mx-auto my-10 grid max-w-5xl gap-8",
        cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
      )}
    >
      {items.map((it) => (
        <div key={it.h}>
          <h3 className="font-serif text-lg text-ink">{it.h}</h3>
          <p className="mt-2 text-base text-muted">{it.p}</p>
        </div>
      ))}
    </div>
  );
}

export function Owned({
  items,
}: {
  items: { term: string; desc: string }[];
}) {
  return (
    <ul className="mx-auto my-8 max-w-2xl list-none p-0">
      {items.map((it) => (
        <li
          key={it.term}
          className="grid gap-1 border-t border-line py-4 sm:grid-cols-[200px_1fr] sm:gap-5"
        >
          <span className="font-serif text-[15px] font-medium text-ink">
            {it.term}
          </span>
          <span className="text-base text-muted-strong">{it.desc}</span>
        </li>
      ))}
    </ul>
  );
}
