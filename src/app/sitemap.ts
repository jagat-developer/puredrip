import type { MetadataRoute } from "next";
import { company, pageSeo } from "@/lib/site-data";
import { listBlogs } from "@/lib/blog";

const BUILD_DATE = new Date("2026-06-26");

function changeFreq(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/") return "weekly";
  return "monthly";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = Object.values(pageSeo).map((page) => ({
    url: `${company.baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: changeFreq(page.path),
    priority: page.priority,
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${company.baseUrl}/blog`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Include published posts when the blog integration is configured.
  const { blogs } = await listBlogs();
  const blogPosts: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${company.baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : BUILD_DATE,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogIndex, ...blogPosts];
}
