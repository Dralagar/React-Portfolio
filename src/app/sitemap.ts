import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.reactnowdev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/pricing", "/podcast", "/contact"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
    })
  );

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${BASE_URL}/portfolio/${c.slug}`,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
