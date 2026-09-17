import { siteConfig } from "@/data/site";

export type SocialItem = {
  label: string;
  value: string;
  href: string | null;
};

export const socialItems: readonly SocialItem[] = [
  {
    label: "Email",
    value: siteConfig.contactEmail ?? "Add a public email",
    href: siteConfig.contactEmail ? `mailto:${siteConfig.contactEmail}` : null,
  },
  {
    label: "GitHub",
    value: siteConfig.githubUrl ?? "Add a GitHub profile",
    href: siteConfig.githubUrl,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedInUrl ?? "Optional profile",
    href: siteConfig.linkedInUrl,
  },
] as const;
