export type DirectionItem = {
  index: string;
  phase: string;
  title: string;
  description: string;
  state: "complete" | "current" | "next";
};

export const directionItems: readonly DirectionItem[] = [
  {
    index: "01",
    phase: "Foundation",
    title: "Build the system before filling the surface.",
    description:
      "The architecture, design language, content model, responsive behavior, metadata, and quality gates are established first.",
    state: "complete",
  },
  {
    index: "02",
    phase: "Now",
    title: "Document real work with useful specificity.",
    description:
      "The next content pass should replace every placeholder with verified projects, decisions, constraints, and outcomes.",
    state: "current",
  },
  {
    index: "03",
    phase: "Next",
    title: "Turn selected projects into deeper case studies.",
    description:
      "Dedicated project routes can be added when there is enough authentic material to make them worth the reader’s time.",
    state: "next",
  },
] as const;
