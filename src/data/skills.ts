export type StackGroup = {
  index: string;
  label: string;
  description: string;
  items: readonly string[];
};

export const stackGroups: readonly StackGroup[] = [
  {
    index: "01",
    label: "Foundation",
    description: "A typed, server-first application foundation.",
    items: ["Next.js 16", "React 19", "TypeScript 5.9"],
  },
  {
    index: "02",
    label: "Interface",
    description: "A restrained visual system with purposeful motion.",
    items: ["Tailwind CSS 4", "Framer Motion", "Lucide React"],
  },
  {
    index: "03",
    label: "Quality",
    description: "Standards that keep the experience durable and inclusive.",
    items: ["Semantic HTML", "Responsive design", "SEO", "Accessibility"],
  },
] as const;
