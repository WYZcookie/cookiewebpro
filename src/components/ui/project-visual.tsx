import type { ProjectVisual as ProjectVisualType } from "@/data/projects";

type ProjectVisualProps = {
  title: string;
  index: string;
  variant: ProjectVisualType;
};

export function ProjectVisual({ title, index, variant }: ProjectVisualProps) {
  if (variant === "editorial") {
    return (
      <div className="project-visual project-visual--editorial" aria-hidden="true">
        <div className="editorial-sheet">
          <div className="editorial-sheet__topline">
            <span>项目案例 {index}</span>
            <span>内容 / 待定</span>
          </div>
          <div className="editorial-sheet__body">
            <div className="editorial-orbit">
              <span />
              <span />
            </div>
            <div className="editorial-copy">
              <p>独立实验项目</p>
              <strong>{title}</strong>
            </div>
          </div>
          <div className="editorial-sheet__footer">
            <span>问题</span>
            <span>过程</span>
            <span>成果</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--workspace" aria-hidden="true">
      <div className="workspace-window">
        <div className="workspace-window__chrome">
          <span />
          <span />
          <span />
          <p>项目_{index}</p>
        </div>
        <div className="workspace-window__body">
          <aside className="workspace-sidebar">
            <div className="workspace-mark">WYZ</div>
            <span className="is-active" />
            <span />
            <span />
            <span />
          </aside>
          <div className="workspace-main">
            <div className="workspace-meta">
              <span>核心案例研究</span>
              <span>详细内容待定</span>
            </div>
            <div className="workspace-title">
              <p>精选作品 / {index}</p>
              <strong>{title}</strong>
            </div>
            <div className="workspace-grid">
              <div className="workspace-graph">
                <span className="workspace-graph__line" />
                <i className="workspace-graph__point workspace-graph__point--one" />
                <i className="workspace-graph__point workspace-graph__point--two" />
                <i className="workspace-graph__point workspace-graph__point--three" />
              </div>
              <div className="workspace-stat">
                <span>项目故事</span>
                <strong>01</strong>
                <p>问题 · 过程 · 结果</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}