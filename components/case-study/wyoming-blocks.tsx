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

export function WyoPress() {
  return (
    <FigureRow
      items={[
        {
          src: "/work/wyoming/press-sheridan.jpg",
          alt: "Sheridan Media headline: UW Extension Launches Emergency Hay Assistance Site for Producers Facing Wildfires",
          caption:
            "Sheridan Media led with the platform by name — August 25, 2025",
        },
        {
          src: "/work/wyoming/press-wpm.jpg",
          alt: "Wyoming Public Media article citing the emergency hay assistance web page in its Red Canyon Fire coverage, tagged Governor Mark Gordon",
          caption:
            "Wyoming Public Media cited it in its Red Canyon Fire coverage, alongside the Governor's emergency declaration",
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
          value: "124,709",
          label:
            "acres burned by the Red Canyon Fire — the emergency the platform answered",
        },
        {
          value: "Statewide",
          label:
            "used across Wyoming, cited by state public radio during the wildfire emergency",
        },
      ]}
    />
  );
}
