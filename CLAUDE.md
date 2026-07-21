# Priyanka Ahuja — Portfolio Rebuild

Migration of ahujapriyanka.com from Wix to a custom-coded site. Owner: Priyanka Ahuja (Pri), Product Designer. Goal: land a Product Designer role at Apple by end of 2026. This portfolio is exhibit A of her craft — every detail matters.

## Project status

- Empty folder. Scaffold from scratch.
- Current live site: https://www.ahujapriyanka.com (Wix). Domain will move to the new site once it's ready (DNS switch from Wix, keep the domain).
- Two current pages are password-protected with `Go@123` (Jax case studies, NDA courtesy).

## Stack

- **Next.js (App Router) + Tailwind CSS**, deployed on **Vercel** (free tier).
- Case study content as **MDX** files (`/content/case-studies/*.mdx`) so copy edits never require touching components.
- TypeScript. No CMS. Keep dependencies minimal.
- Phase 2 (after launch, do NOT build yet): a "chat with my portfolio" bot — Claude API called from a Next.js route handler, grounded on the case study MDX content, rate-limited. Design the folder structure so this slots in later without refactor.

## Visual direction: minimal light

- White/near-white background, generous whitespace, large confident type, restrained accent color. Let the work provide the color. Think Apple-adjacent restraint, not decoration.
- Define design tokens (type scale, spacing, color) as Tailwind theme config — this doubles as portfolio evidence ("I designed and built my own design system").
- Real typographic care: consistent scale, proper hierarchy, no orphaned headings. The current Wix site's inconsistent heading levels (everything is h2/h6) must not carry over — semantic HTML throughout.
- Fully responsive, WCAG AA, dark-mode optional (only if it doesn't delay launch).
- Case study images displayed LARGE. The current site's biggest craft failure is small, cropped screenshots.

## Site structure

```
/                  Home: hero + selected case studies + footer
/work/[slug]       Case study pages (MDX)
/about             About
/resume            Resume page + PDF download
/api/*             (reserved for phase-2 chatbot)
```

Jax case study pages need a lightweight password gate (`Go@123` or similar) — cookie-based middleware is fine. Everything else public.

## Positioning (use everywhere)

**"Product Designer who ships code."** One title, not three. Hero line should communicate: 6+ years, designs AND builds, fintech/public-sector/research-heavy domains. Drop "Front-End Developer" and "UX Researcher" as co-equal titles — they dilute.

## Case study lineup (order matters)

1. **Wyoming Emergency Hay Assistance** (FLAGSHIP — new, does not exist on old site). Crisis-response platform designed & built by Pri at University of Wyoming; statewide rollout; public recognition from the Governor of Wyoming; news coverage. Narrative arc: the emergency → constraints (days not months, distributed rural users, low bandwidth) → decisions made fast and why → what shipped → public impact. Pri must supply screenshots, links, and press mentions; scaffold the page with clear TODO placeholders for these.
2. **Livestock Gestation Calculator → native iOS concept** (CRAFT PIECE — new). She shipped the real tool in ReactJS; this study reimagines it as a HIG-fluent iPhone + watchOS app: offline-first for field use, widgets, complications, Dynamic Type, dark mode, haptics, motion prototypes. Purpose: prove visual/interaction craft and Apple-platform fluency. Design work happens in Figma; the page structure can be scaffolded with placeholders.
3. **The Jackson Laboratory** (CONSOLIDATED — merge the three existing Jax studies: Mobile Pricing, Design System Implementation, Legal Facet Panel into one research-driven study, or Mobile Pricing + Legal Facet with Design System as a section). Password-gated.
4. **Greenstand** (token wallet + design system). Currently a PDF deck — becomes a proper page.
5. **4-H / UW Extension websites** — currently an off-site Figma deck; either bring on-site as a compact study or fold into a "selected work" grid. No case study should link off-site as its primary home.

## Content rules (from portfolio review — apply when writing/porting copy)

- **Fix the metric conflict:** homepage/resume say Jax satisfaction +68%, the case study page says +35%. Resolve to one number and state HOW it was measured. Never let two numbers disagree anywhere on the site.
- **Cut all textbook/process-explainer sections**: "Why do we use a Design System?", the dot-voting definition, generic design-process diagrams, persona templates. They signal course-project. Assume an expert reader.
- **Lead with design rationale, not process narration**: what alternatives were considered, what was rejected and why, what tradeoff was made. Every iteration shown needs a reason attached.
- **Show outcomes**: every study ends with shipped result + measured impact, or an honest, confident statement of status. Never end on "we must conduct user interviews."
- **Keep the Legal Facet failure story** (both tested designs failed → insight → third direction). It's the strongest material she has; give it a proper ending with the final design shown large.
- **Rename/reframe "Design System Implementation"** — it was applying an existing design system to the search page, not building one. Title must match the work.
- **Tone**: crisp, confident, first person, no filler ("As a UX designer, I believe sketching could be the first line of attack…" → cut). Fix all grammar/typos from the old site.

## Detail fixes (old site bugs — do not reproduce)

- "Ready to cultivate something new?" and the © line linked to Instagram; footer "Resume" was dead text; Greenstand card's description linked to the wrong page (Mobile Pricing). All footer/nav links must be correct and intentional.
- Image filenames like "Screen Shot 2022-12-14 at 12.47.48 PM.png" — rename all assets meaningfully.
- Old resume PDF is outdated — use `Priyanka_Resume_July 20th 2026.pdf` (Pri has it; place in `/public`).

## Migration checklist

1. Scaffold app, tokens, layout, nav/footer.
2. Build Home, About, Resume with rewritten copy.
3. Case studies as MDX (order above), password middleware for Jax.
4. Pri exports images from Wix (Wix Media Manager) → `/public/work/...` with proper names.
5. Preview on Vercel, review together, fix.
6. Point DNS from Wix to Vercel; add redirects for old URLs (`/mobilepricingjaxlab`, `/designsystemimplementation`, `/legalfacetjax`, `/about`, `/resume`) so nothing 404s.
7. Phase 2: chatbot.

## Git & GitHub

- Repo lives on Pri's GitHub: https://github.com/Priyankaahuja01 — create as **public** repo `portfolio` (public code is itself portfolio evidence for a "designs AND builds" candidate).
- Initialize git at scaffold time. Commit small and often with clear conventional messages (`feat: case study layout`, `fix: footer links`) — Pri wants an active, honest contribution graph, so many real small commits beat one giant "initial commit".
- IMPORTANT: set git author to Pri's GitHub-linked identity so contributions count on her graph:
  `git config user.name "Priyanka Ahuja"` and `git config user.email "priyankaahuja0532@gmail.com"` (this email must be added/verified on her GitHub account).
- Never backdate or fabricate commits.
- Push to `main`; Vercel will deploy from this repo.

## Working style

- Pri is a designer who codes (ReactJS, HTML/CSS). Explain architectural choices briefly; don't over-explain basics.
- Verify with `npm run build` before declaring anything done. Check responsive at 375px, 768px, 1440px.

## Note to Pri (how to work with Claude Code)

- After the first session, direct it in plain language, one chunk at a time: "build the home page next," "now the Jax case study with the password gate," "check it at mobile widths." It reads `CLAUDE.md` every session, so it won't forget the plan between sessions.
- Two habits worth keeping: ask it to run `npm run build` before you accept big changes, and review each page in the browser yourself — you're the design authority here; make it match your bar.

---

## Next.js version note (from scaffold)

This project uses a recent Next.js + **Tailwind v4** (CSS-first config via `@theme` in `app/globals.css`, not `tailwind.config.js`). APIs and conventions may differ from older Next.js. When unsure, consult `node_modules/next/dist/docs/`.
