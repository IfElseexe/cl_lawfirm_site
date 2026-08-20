import type { MetadataRoute } from "next";
import { firm, practiceAreas, attorneys } from "@/content/firm";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = firm.siteUrl;
  const now = new Date();

  const staticRoutes = ["", "/about", "/practice-areas", "/attorneys", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
    })),
    ...practiceAreas.map((a) => ({
      url: `${base}/practice-areas/${a.slug}`,
      lastModified: now,
    })),
    ...attorneys.map((a) => ({
      url: `${base}/attorneys/${a.slug}`,
      lastModified: now,
    })),
  ];
}
