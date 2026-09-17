import { ArrowUp } from "lucide-react";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div>
          <span className="brand-mark" aria-hidden="true">
            {siteConfig.initials}
          </span>
          <p>{siteConfig.name}</p>
        </div>
        <p>基于 Next.js 与 TypeScript 构建，保持设计克制。</p>
        <a href="#top" aria-label="返回顶部">
          返回顶部
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}