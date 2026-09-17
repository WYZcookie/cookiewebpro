export type StackGroup = {
  index: string;
  label: string;
  description: string;
  items: readonly string[];
};

export const stackGroups: readonly StackGroup[] = [
  {
    index: "01",
    label: "底层基础",
    description: "基于强类型、服务端优先的应用基础架构。",
    items: ["Next.js 16", "React 19", "TypeScript 5.9"],
  },
  {
    index: "02",
    label: "交互界面",
    description: "克制的视觉系统与充满意图的动效设计。",
    items: ["Tailwind CSS 4", "Framer Motion", "Lucide React"],
  },
  {
    index: "03",
    label: "工程质量",
    description: "确保体验持久且具包容性的开发标准。",
    items: ["语义化 HTML", "响应式设计", "SEO 优化", "无障碍访问 (Accessibility)"],
  },
] as const;