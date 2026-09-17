import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { stackGroups } from "@/data/skills";

export function Stack() {
  return (
    <section id="stack" className="stack-section scroll-section">
      <div className="page-shell section-space">
        <SectionHeading
          index="03"
          label="当前技术栈"
          title={
            <>
              现代化的工具，
              <br /> 严谨的技术脚印。
            </>
          }
          description="以下列出的技术均在实际代码和项目中得到验证，我的技术专长建立在真实的工程实践基础之上。"
          light
        />

        <div className="stack-list">
          {stackGroups.map((group, index) => (
            <Reveal
              key={group.index}
              className="stack-row"
              delay={index * 0.07}
            >
              <span className="stack-row__index">{group.index}</span>
              <div className="stack-row__intro">
                <h3>{group.label}</h3>
                <p>{group.description}</p>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="stack-note">
          <span>技术原则</span>
          <p>
            技术栈只是手段，而非目的。所有的工具与代码，都应该用来证明：它们如何让数字产品变得更清晰、更快速、更可靠。
          </p>
        </Reveal>
      </div>
    </section>
  );
}