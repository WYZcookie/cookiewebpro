export const navItems = [
  { label: "开发理念", href: "#approach" },
  { label: "精选作品", href: "#work" },
  { label: "技术栈", href: "#stack" },
  { label: "前行方向", href: "#direction" },
] as const;

export const siteConfig = {
  name: "王英著",
  initials: "WYZ", 
  role: "软件开发者 · 产品构建者",
  heroTitle: ["数字化产品，", "以匠心", "筑造。"],
  heroDescription:
    "专注清晰逻辑与精湛工艺的开发者主页，用细节成就令人舒适的软件体验。",
  description:
    "以产品思维驱动的开发者主页，专注于体贴的交互界面、可靠的工程实现以及从容的数字体验。",
  contactEmail: null as string | null,
  githubUrl: null as string | null,
  linkedInUrl: null as string | null,
} as const;