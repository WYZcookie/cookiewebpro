export type ProjectVisual = "workspace" | "editorial";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  status: string;
  technologies: readonly string[];
  visual: ProjectVisual;
  links: readonly ProjectLink[];
  placeholder: boolean;
};

export const projects: readonly Project[] = [
  {
    index: "01",
    title: "Your flagship product",
    eyebrow: "Primary case study · Content pending",
    description:
      "This space is designed for the strongest real project: the problem, the product decisions, the engineering approach, and the verified outcome.",
    status: "Awaiting project details",
    technologies: ["Add verified stack", "Add role", "Add outcome"],
    visual: "workspace",
    links: [],
    placeholder: true,
  },
  {
    index: "02",
    title: "Your independent experiment",
    eyebrow: "Focused build · Content pending",
    description:
      "Use the second story to show range without adding noise—what was explored, what changed through iteration, and why the final interaction matters.",
    status: "Awaiting project details",
    technologies: ["Add verified stack", "Add scope", "Add status"],
    visual: "editorial",
    links: [],
    placeholder: true,
  },
] as const;
