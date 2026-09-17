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
    phase: "奠基",
    title: "先构筑底层系统，再雕琢表层细节。",
    description:
      "首先确立架构、设计语言、内容模型、响应式行为、元数据以及质量把控标准。",
    state: "complete",
  },
  {
    index: "02",
    phase: "当前",
    title: "以实用且具体的细节记录真实工作。",
    description:
      "下一步将用经过验证的项目、决策、约束条件和最终成果，替换掉所有的占位内容。",
    state: "current",
  },
  {
    index: "03",
    phase: "未来",
    title: "将精选项目转化为深度的案例研究。",
    description:
      "当积累了足够多有价值的真实素材时，将会添加专门的项目展示页面，确保读者不虚此行。",
    state: "next",
  },
] as const;