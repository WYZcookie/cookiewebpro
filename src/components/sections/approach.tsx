import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    index: "01",
    title: "以意图为起点。",
    copy: "从问题本身和产品的使用者出发。技术的真正价值在于让解决方案变得更清晰，而非徒增复杂。",
  },
  {
    index: "02",
    title: "让复杂归于平静。",
    copy: "强大的系统在表象上往往显得简单。架构、状态管理和边缘情况在成为用户的阻碍前，就已被精心处理。",
  },
  {
    index: "03",
    title: "将打磨视为工程。",
    copy: "排版、动效、无障碍访问和性能优化是核心实现的一部分，它们绝非开发末尾的表面装饰。",
  },
] as const;

export function Approach() {
  return (
    <section id="approach" className="section-space scroll-section">
      <div className="page-shell">
        <SectionHeading
          index="01"
          label="开发理念"
          title={
            <>
              软件在显得聪明之前，
              <br /> 首先应该让人感到贴心。
            </>
          }
          description="以产品为核心的开发理念，围绕清晰的逻辑、克制的设计和经得起推敲的细节而构建。"
        />

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.index}
              className="principle"
              delay={index * 0.08}
            >
              <span>{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}