import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { MotionProvider } from "@/components/ui/motion-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const metadataBase = getSiteUrl();
const pageTitle = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: pageTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: pageTitle,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} developer portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f4f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <MotionProvider>
          <ScrollProgress />
          <Navigation />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
