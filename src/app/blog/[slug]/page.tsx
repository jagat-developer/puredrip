import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactPanel } from "@/components/contact-panel";
import { company } from "@/lib/site-data";
import { absoluteUrl, jsonLd } from "@/lib/utils";
import { formatBlogDate, getBlog } from "@/lib/blog";

export const revalidate = 1800;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    return { title: "Article not found | Pure Drip" };
  }

  const title = post.meta?.seoTitle || `${post.title} | Pure Drip`;
  const description = post.meta?.seoDescription || post.excerpt || company.bio;
  const image = post.featuredImage || undefined;

  return {
    title,
    description,
    keywords: post.meta?.keywords,
    metadataBase: new URL(company.baseUrl),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.meta?.ogTitle || title,
      description: post.meta?.ogDescription || description,
      url: `/blog/${post.slug}`,
      siteName: company.name,
      locale: "en_CA",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedAt,
      authors: post.authorName ? [post.authorName] : undefined,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    notFound();
  }

  const date = formatBlogDate(post.publishDate);
  const readingTime = post.customFields?.readingTime;
  const category = post.categories?.[0] || post.meta?.articleSection;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta?.seoDescription || post.excerpt,
    image: post.featuredImage ? [post.featuredImage] : undefined,
    datePublished: post.publishDate,
    dateModified: post.updatedAt || post.publishDate,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName, url: post.authorUrl }
      : { "@type": "Organization", name: company.name },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(company.logo, company.baseUrl) },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`, company.baseUrl),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }}
      />

      <article className="pt-[var(--header-height)]">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All articles
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-mute">
              {category ? <span className="text-accent">{category}</span> : null}
              {category && date ? <span aria-hidden="true">·</span> : null}
              {date ? <span>{date}</span> : null}
              {date && readingTime ? <span aria-hidden="true">·</span> : null}
              {readingTime ? <span>{readingTime}</span> : null}
            </div>

            <h1 className="mt-5 font-serif fluid-hero text-ink">{post.title}</h1>

            {post.excerpt ? (
              <p className="mt-6 text-lg font-light leading-8 text-ink-soft">{post.excerpt}</p>
            ) : null}

            {post.authorName ? (
              <p className="mt-6 text-sm font-medium text-ink">
                By {post.authorName}
              </p>
            ) : null}
          </Reveal>
        </div>

        {post.featuredImage ? (
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-surface-3">
              {/* Blog images come from Uplift's CDN (arbitrary host); use a plain img. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.featuredImage}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ) : null}

        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags && post.tags.length > 0 ? (
            <div className="mt-14 flex flex-wrap gap-2 border-t border-rule pt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-rule bg-surface-2 px-3 py-1 text-xs font-medium text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      <ContactPanel />
    </>
  );
}
