import { ArrowUpRight, CircleDashed } from "lucide-react";

import { ProjectVisual } from "@/components/ui/project-visual";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="section-space scroll-section projects-section">
      <div className="page-shell">
        <SectionHeading
          index="02"
          label="精选作品"
          title={
            <>
              不只是作品陈列，
              <br /> 更是产品故事。
            </>
          }
          description="每一个项目、指标、角色和成果，都源于真实的软件工程实践与案例研究。"
        />

        <div className="projects-list">
          {projects.map((project, projectIndex) => (
            <article
              className={`project-story${projectIndex % 2 === 1 ? " project-story--reverse" : ""}`}
              key={project.index}
            >
              <Reveal className="project-story__visual" amount={0.12}>
                <ProjectVisual
                  title={project.title}
                  index={project.index}
                  variant={project.visual}
                />
              </Reveal>

              <Reveal
                className="project-story__content"
                delay={0.08}
                amount={0.2}
              >
                <div className="project-story__topline">
                  <span>{project.index}</span>
                  <span>{project.eyebrow}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.title} 核心技术`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-story__actions">
                  {project.links.length > 0
                    ? project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ))
                    : null}
                  <span className="project-status">
                    <CircleDashed size={15} aria-hidden="true" />
                    {project.status}
                  </span>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}