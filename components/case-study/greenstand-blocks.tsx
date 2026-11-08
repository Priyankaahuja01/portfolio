import { Owned, Points, FigureRow, StatRow } from "./blocks";

/* Greenstand-specific data blocks, the design-system artifacts the study
   describes, plus its structured lists. Data lives here (passed as no-prop
   components so it survives MDX compilation); prose stays in the MDX. */

export function GsOwned() {
  return (
    <Owned
      items={[
        {
          term: "Brand system",
          desc: "Built Greenstand's original brand system: logo usage, color tokens, a contrast-tested color matrix, a 12-step type scale, elevation and border rules.",
        },
        {
          term: "Roots design system",
          desc: "Worked with the design team on Roots, the product design system built on these foundations and used across TreeTracker and TreeTrader.",
        },
        {
          term: "Admin console",
          desc: "Designed the Stakeholder Manager, Stakeholder Detail, Grower Contract Management and Planter screens on the shared component set.",
        },
        {
          term: "Capture Matching",
          desc: "Worked on the verification tool reviewers use to match new tree photos to trees already on record.",
        },
        {
          term: "Token Wallet",
          desc: "Lead product researcher and designer: interviews, personas, sketches, mockups, prototypes and usability testing.",
        },
      ]}
    />
  );
}

export function GsCapturePoints() {
  return (
    <Points
      items={[
        {
          h: "Side-by-side comparison",
          p: "The new capture sits on the left. Likely matching trees sit on the right, each with its photo history labeled by age, such as “6 months earlier.”",
        },
        {
          h: "One decision per candidate",
          p: "Each candidate has two clear actions, “Same tree” or “Different tree,” plus a skip. A queue counter shows how many captures are left.",
        },
        {
          h: "Collapse what's ruled out",
          p: "Candidates already rejected collapse out of the way, so reviewers can focus on the rest without losing their place.",
        },
      ]}
    />
  );
}

export function GsPersonaPoints() {
  return (
    <Points
      items={[
        {
          h: "Understanding",
          p: "People want to help with climate change in a way that feels fun and engaging.",
        },
        {
          h: "Reward",
          p: "People want to gift trees as thanks but don't know where to go.",
        },
        {
          h: "Convenience",
          p: "Quick token transfers would mean more trees and more awareness.",
        },
      ]}
    />
  );
}

export function GsAdminFigures() {
  return (
    <FigureRow
      items={[
        {
          src: "/work/greenstand/admin-stakeholder-manager.jpg",
          alt: "Stakeholder Manager list with nested child organizations and people",
          caption:
            "Stakeholder Manager: nested organizations and people in one list",
        },
        {
          src: "/work/greenstand/admin-stakeholder-detail.jpg",
          alt: "Stakeholder Detail and Grower Contract Management modals",
          caption:
            "Detail and Contract Management share one modal: parents, children, users and growers",
        },
      ]}
    />
  );
}

export function GsWalletPhones() {
  return (
    <FigureRow
      cols={3}
      items={[
        {
          src: "/work/greenstand/wallet-sketches.jpg",
          alt: "Paper sketches of home, search wallet, send and request screens",
          caption: "Paper flows for home, search and send / request",
        },
        {
          src: "/work/greenstand/wallet-search.jpg",
          alt: "Search screen with scan or show QR code option and recent contacts",
          caption: "Search a person or organization, or scan a QR code",
        },
        {
          src: "/work/greenstand/wallet-home.jpg",
          alt: "Home screen showing total balance and recent activity with an undo toast",
          caption: "Balance, activity, and an undoable confirmation",
        },
      ]}
    />
  );
}

export function GsTeam() {
  return (
    <FigureRow
      items={[
        {
          src: "/work/greenstand/design-session.jpg",
          alt: "The TreeTrader wallet screens open in Figma during a working session with the Greenstand team on a video call",
          caption: "Designing the TreeTrader wallet live in Figma with the team",
        },
        {
          src: "/work/greenstand/team-call.jpg",
          alt: "The distributed Greenstand team on a video call over the project's illustrated jungle background",
          caption: "Built with Greenstand's distributed, global open-source team",
        },
      ]}
    />
  );
}

export function GsOutcomes() {
  return (
    <StatRow
      items={[
        {
          value: "1",
          label:
            "brand foundation that the later Roots design system was built on",
        },
        {
          value: "3",
          label:
            "contrast groups (all sizes, large text only, never) that make WCAG the default",
        },
        {
          value: "28%",
          label:
            "more efficient tree planting and monitoring through the data-rich web mapping experience",
        },
      ]}
    />
  );
}

/* Greenstand-specific data blocks, the design-system artifacts the study
   describes. Data lives here; prose stays in the MDX. */

const tokens = [
  { name: "Sprout", hex: "#8BC232", role: "Logo, icons, main CTA" },
  { name: "Chlorophyll", hex: "#61892F", role: "Supporting, highlights" },
  { name: "Sunrise", hex: "#FFA500", role: "Small accents, 2nd CTA" },
  { name: "Sunset", hex: "#FF7A00", role: "Small accents, linework" },
  { name: "Moonlight", hex: "#6B6E70", role: "Secondary text" },
  { name: "Storm", hex: "#474B4F", role: "Dark surfaces" },
  { name: "Fog", hex: "#EFEFEF", role: "Background" },
  { name: "Midnight", hex: "#222629", role: "Text, dark theme" },
];

export function ColorTokens() {
  return (
    <div className="mx-auto my-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
      {tokens.map((t) => (
        <div
          key={t.name}
          className="overflow-hidden rounded-xl border border-line bg-surface"
        >
          <div className="h-16" style={{ background: t.hex }} />
          <div className="p-3">
            <p className="font-serif text-sm font-medium text-ink">{t.name}</p>
            <p className="font-mono text-xs tabular-nums text-muted">{t.hex}</p>
            <p className="mt-1 text-xs text-muted">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const scale = [
  ["Heading 1", "Montserrat Semibold", "60px", "−0.96px", "60px"],
  ["Headline", "Montserrat Semibold", "56px", "−0.16px", "80px"],
  ["Heading 2", "Montserrat Semibold", "32px", "−0.96px", "40px"],
  ["Heading 3", "Montserrat Semibold", "24px", "0", "24px"],
  ["Heading 4", "Montserrat Medium", "20px", "−0.15px", "20px"],
  ["Subtitle 1 / 2", "Montserrat Medium", "16 / 14px", "−0.15 / −0.1px", "20 / 16px"],
  ["Body 1 / 2", "Lato Regular", "16 / 14px", "−0.96 / −0.25px", "20 / 18px"],
  ["Button", "Lato Regular", "14px", "−0.25px", "18px"],
  ["Caption · Overline", "Lato Regular", "12 · 10px", "−0.4 · −1.5px", "14 · 12px"],
];

export function TypeScale() {
  return (
    <div className="mx-auto my-10 max-w-4xl overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {["Style", "Font", "Size", "Tracking", "Line height"].map((h) => (
              <th
                key={h}
                className="whitespace-nowrap border-b border-line px-3 py-2.5 text-left text-eyebrow uppercase text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scale.map((row) => (
            <tr key={row[0]}>
              <td className="whitespace-nowrap border-b border-line px-3 py-2.5 font-serif font-medium text-ink">
                {row[0]}
              </td>
              {row.slice(1).map((cell, i) => (
                <td
                  key={i}
                  className="whitespace-nowrap border-b border-line px-3 py-2.5 tabular-nums text-muted-strong"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
