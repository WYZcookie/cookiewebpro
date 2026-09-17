import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: getSiteUrl().toString(),
    lastModified: new Date("2026-09-17T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
