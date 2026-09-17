import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <div className="section-heading__label">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <div className="section-heading__content">
        <h2 className={light ? "text-white" : "text-ink"}>{title}</h2>
        {description ? (
          <p className={light ? "text-white/60" : "text-muted"}>
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

