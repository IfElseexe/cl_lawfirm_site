import type { MetadataRoute } from "next";
import { firm } from "@/content/firm";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${firm.siteUrl}/sitemap.xml`,
  };
}
