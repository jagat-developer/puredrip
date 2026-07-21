import "server-only";

/**
 * Uplift AI public Blog API client.
 *
 * Blogs are authored and published in Uplift and fetched here at request time
 * (with ISR caching). Configure the API token via the UPLIFT_AI_TOKEN env var.
 * Docs: https://api.upliftai.co/api/public/v1
 */

const API_BASE = "https://api.upliftai.co/api/public/v1";
// Revalidate cached blog responses every 30 minutes.
const REVALIDATE_SECONDS = 1800;

export type BlogMeta = {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
};

export type BlogSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  status?: string;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string | null;
  categories?: string[];
  tags?: string[];
  authorName?: string;
  authorUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  meta?: BlogMeta;
  customFields?: {
    readingTime?: string;
    rating?: number;
    [key: string]: unknown;
  };
};

export type BlogDetail = BlogSummary & {
  content: string;
};

export type BlogPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

function token(): string | undefined {
  return process.env.UPLIFT_AI_TOKEN;
}

/** Whether the Uplift blog integration has an API token configured. */
export function isBlogConfigured(): boolean {
  return Boolean(token());
}

/** Fetch published blog summaries. Returns an empty list on any failure. */
export async function listBlogs(
  { page = 1, limit = 100 }: { page?: number; limit?: number } = {},
): Promise<{ blogs: BlogSummary[]; pagination?: BlogPagination }> {
  const apiToken = token();
  if (!apiToken) return { blogs: [] };

  try {
    const url = `${API_BASE}/blogs?status=PUBLISH&page=${page}&limit=${limit}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiToken}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error("[blog] list non-ok", res.status);
      return { blogs: [] };
    }

    const json = (await res.json()) as {
      success?: boolean;
      data?: { blogs?: BlogSummary[]; pagination?: BlogPagination };
    };

    if (!json?.success || !json.data) return { blogs: [] };

    return { blogs: json.data.blogs ?? [], pagination: json.data.pagination };
  } catch (error) {
    console.error("[blog] list threw", error);
    return { blogs: [] };
  }
}

/** Fetch a single published blog by slug. Returns null when missing or on failure. */
export async function getBlog(slug: string): Promise<BlogDetail | null> {
  const apiToken = token();
  if (!apiToken) return null;

  try {
    const res = await fetch(`${API_BASE}/blog/${encodeURIComponent(slug)}`, {
      headers: { Authorization: `Bearer ${apiToken}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) return null;

    const json = (await res.json()) as {
      success?: boolean;
      data?: { blog?: BlogDetail };
    };

    if (!json?.success || !json.data?.blog) return null;

    return json.data.blog;
  } catch (error) {
    console.error("[blog] detail threw", error);
    return null;
  }
}

/** Format an Uplift publishDate ("2024-01-15") as e.g. "January 15, 2024". */
export function formatBlogDate(date?: string): string {
  if (!date) return "";
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
