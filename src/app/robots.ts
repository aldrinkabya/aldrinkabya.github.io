import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // No PDF (CV, paper, slides) in search results (user, 2026-10-31); they stay linked on the page.
    rules: { userAgent: "*", allow: "/", disallow: "/*.pdf$" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
