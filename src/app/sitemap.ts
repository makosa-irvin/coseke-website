import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { solutions } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/solutions", "/industries", "/careers", "/contact"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    }),
  );

  const solutionRoutes = solutions.map((solution) => ({
    url: `${siteConfig.url}/solutions/${solution.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...solutionRoutes];
}
