import type { MetadataRoute } from "next";
import { INDEXABLE_ROUTES, SITE, absoluteUrl } from "@/lib/site-brand";

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map((path) => ({
    url: absoluteUrl(path),
    ...(path === "/" ? { lastModified: new Date(SITE.updatedAt) } : {}),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
