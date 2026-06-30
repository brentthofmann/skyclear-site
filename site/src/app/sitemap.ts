import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-18");
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
}
