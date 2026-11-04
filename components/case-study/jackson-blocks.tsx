import { FigureRow, StatRow } from "./blocks";

/* Jackson Lab data blocks (no-prop, so arrays survive MDX compilation). */

export function JaxMobileScreens() {
  return (
    <FigureRow
      cols={3}
      items={[
        {
          src: "/work/jackson/mp-final-1.jpg",
          alt: "Mobile strain page with a prominent View Pricing button",
          caption: "Pricing surfaced directly on the strain page",
        },
        {
          src: "/work/jackson/mp-final-2.jpg",
          alt: "Mobile ES Cell strain page with View Pricing and details",
          caption: "ES Cell details, with pricing one tap away",
        },
        {
          src: "/work/jackson/mp-final-3.jpg",
          alt: "Mobile pricing panel showing price by quantity and location",
          caption: "The pricing panel — quantity, genotype, and region",
        },
      ]}
    />
  );
}

export function JaxABDesigns() {
  return (
    <FigureRow
      items={[
        {
          src: "/work/jackson/lf-design-a.jpg",
          alt: "Design A: for-profit and non-profit options placed with the search bar at the top",
          caption: "Design A — options placed up by the search bar",
        },
        {
          src: "/work/jackson/lf-design-b.jpg",
          alt: "Design B: options on the page-control navigation bar with longer text",
          caption: "Design B — options on the page-control bar",
        },
      ]}
    />
  );
}

export function JaxABTests() {
  return (
    <FigureRow
      items={[
        {
          src: "/work/jackson/lf-test-a.jpg",
          alt: "Heatmap of Design A usability test showing scattered attention",
          caption: "Design A heatmap — attention scattered; it closed off a future advanced search",
        },
        {
          src: "/work/jackson/lf-test-b.jpg",
          alt: "Heatmap of Design B usability test showing users giving up early",
          caption: "Design B heatmap — users gave up at the start",
        },
      ]}
    />
  );
}

export function JaxStats() {
  return (
    <StatRow
      items={[
        {
          value: "35%",
          label:
            "increase in user satisfaction once mice pricing was viewable on mobile",
        },
        {
          value: "32",
          label: "usability-test participants across the two projects (Maze via Pendo)",
        },
        {
          value: "3",
          label:
            "facet-filter directions tested — the third, built from the first two’s failures, shipped",
        },
      ]}
    />
  );
}
