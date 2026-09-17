import { siteConfig } from "@/data/site";

export type SocialItem = {
  label: string;
  value: string;
  href: string | null;
};

export const socialItems: readonly SocialItem[] = [
  {
    label: "邮箱",
    value: siteConfig.contactEmail ?? "添加公开邮箱",
    href: siteConfig.contactEmail ? `mailto:${siteConfig.contactEmail}` : null,
  },
  {
    label: "GitHub",
    value: siteConfig.githubUrl ?? "添加 GitHub 主页",
    href: siteConfig.githubUrl,
  },
  {
    label: "领英 (LinkedIn)",
    value: siteConfig.linkedInUrl ?? "可选配置个人主页",
    href: siteConfig.linkedInUrl,
  },
] as const;