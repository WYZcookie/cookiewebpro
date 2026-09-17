import { Check, MoveRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { directionItems } from "@/data/journey";

export function Direction() {
  return (
    <section id="direction" className="section-space scroll-section">
      <div className="page-shell">
        <SectionHeading
          index="04"
          label="前行方向"
          title={
            <>
              故事，
              <br /> 从真实出发。
            </>
          }
          description="这里记录了真实的发展轨迹、个人成长的里程碑，以及我在技术开发之路上的诚恳探索。"
        />

        <div className="direction-list">
          {directionItems.map((item, index) => (
            <Reveal
              key={item.index}
              className={`direction-item is-${item.state}`}
              delay={index * 0.07}
            >
              <div className="direction-item__rail">
                <span>
                  {item.state === "complete" ? (
                    <Check size={15} aria-hidden="true" />
                  ) : item.state === "current" ? (
                    <span className="direction-pulse" aria-hidden="true" />
                  ) : (
                    <MoveRight size={15} aria-hidden="true" />
                  )}
                </span>
              </div>
              <div className="direction-item__meta">
                <span>{item.index}</span>
                <span>{item.phase}</span>
              </div>
              <div className="direction-item__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}