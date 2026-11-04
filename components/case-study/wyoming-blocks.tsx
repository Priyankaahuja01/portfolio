import { FigureRow, StatRow } from "./blocks";

/* Wyoming Emergency Hay Assistance data blocks (no-prop, so arrays survive
   MDX compilation — see greenstand-blocks for the why). */

export function WyoForms() {
  return (
    <FigureRow
      items={[
        {
          src: "/work/wyoming/09-request-form.jpg",
          alt: "Request Hay intake form: name, phone, email, county, quantity needed, urgency",
          caption: "Request Hay — for producers who need feed",
        },
        {
          src: "/work/wyoming/11-donate-form.jpg",
          alt: "Donate Hay intake form: name, phone, email, county, quantity available, bale type",
          caption: "Donate Hay — for producers who have feed to share",
        },
      ]}
    />
  );
}

export function WyoStats() {
  return (
    <StatRow
      items={[
        {
          value: "48 hrs",
          label: "from the first ask to a live, statewide platform",
        },
        {
          value: "Statewide",
          label:
            "listings spanning Wyoming counties, from Park to Converse to Laramie",
        },
        {
          value: "Opt-in",
          label:
            "every public listing posted by explicit consent, built into the form",
        },
      ]}
    />
  );
}
