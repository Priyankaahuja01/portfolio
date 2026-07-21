# ahujapriyanka.com

Personal portfolio of **Priyanka Ahuja** — Product Designer who ships code.

A custom-built replacement for the previous Wix site, designed and coded from scratch. The codebase itself is part of the portfolio: it doubles as evidence of a designer who also builds.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** — design tokens defined in `app/globals.css` via `@theme` (a hand-built design system: type scale, color, spacing)
- **TypeScript**
- Case studies authored as **MDX** (planned)
- Deployed on **Vercel**

## Structure

```
app/
  layout.tsx          Root layout, metadata, header + footer
  page.tsx            Home — hero + selected work
  about/              About
  resume/             Résumé + PDF download
  work/[slug]/        Case study pages
components/            Header, footer, container, cards
lib/
  site.ts             Nav, identity, case-study lineup (single source of truth)
  cn.ts               Class-name merge helper
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Design system

Tokens live in `app/globals.css` under `@theme`:

- **Type** — modular scale, 17px body, fluid display sizes (`text-eyebrow` → `text-display`)
- **Color** — warm-neutral (stone) foundation, one restrained indigo accent, WCAG AA
- **Layout** — `content` (~1088px) and `wide` (~1344px) container widths

---

© Priyanka Ahuja. Designed & built by Priyanka Ahuja.
