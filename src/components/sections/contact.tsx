import { ArrowUpRight, LockKeyhole } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { socialItems } from "@/data/social";

export function Contact() {
  const configuredContactCount = socialItems.filter((item) => item.href).length;

  return (
    <section id="contact" className="contact-section scroll-section">
      <div className="page-shell contact-section__inner">
        <Reveal className="contact-kicker">
          <span>05</span>
          <span>联系方式</span>
        </Reveal>

        <Reveal className="contact-copy" delay={0.05}>
          <h2>
            从这里，
            <br /> 建立联系。
          </h2>
          <p>
            保持最直接的沟通方式。所有的公开联系信息均真实有效，拒绝虚假的收件箱或占位主页。
          </p>
        </Reveal>

        <div className="contact-links">
          {socialItems.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              {item.href ? (
                <a
                  className="contact-link"
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              ) : (
                <div className="contact-link is-disabled">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <LockKeyhole size={18} aria-hidden="true" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <p className="contact-status" aria-live="polite">
          {configuredContactCount === 0
            ? "等待完善联系方式详情。"
            : `已配置 ${configuredContactCount} 个有效联系方式。`}
        </p>
      </div>
    </section>
  );
}