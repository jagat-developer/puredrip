import type { MetadataRoute } from "next";
import { company, pageSeo } from "@/lib/site-data";

const BUILD_DATE = new Date("2026-06-26");

function changeFreq(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/") return "weekly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pageSeo).map((page) => ({
    url: `${company.baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: changeFreq(page.path),
    priority: page.priority,
  }));
}
