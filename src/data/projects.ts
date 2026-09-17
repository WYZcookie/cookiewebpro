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
    title: "HeartRateWidget 桌面心率悬浮窗", //
    eyebrow: "Electron 桌面端开发 · 核心案例",
    description:
      "基于 Electron 开发的桌面端心率监测悬浮窗应用，涵盖了跨平台界面构建与 HTML/JavaScript 的综合运用，实现底层状态的实时获取与可视化呈现。 //",
    status: "持续迭代与优化中",
    technologies: ["Electron", "JavaScript", "HTML"], //
    visual: "workspace",
    links: [],
    placeholder: false,
  },
  {
    index: "02",
    title: "自动化脚本与系统优化工具", 
    eyebrow: "效率工具 · 独立实践",
    description:
      "探索软件开发与系统底层实用工具的结合，包括入门使用 Python 编写自动化脚本，以及复杂软硬件环境下的多任务系统优化配置。 //",
    status: "个人技术探索",
    technologies: ["Python", "自动化", "系统配置"], //
    visual: "editorial",
    links: [],
    placeholder: false,
  },
] as const;