import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactPanel } from "@/components/contact-panel";
import { company } from "@/lib/site-data";
import { formatBlogDate, listBlogs, type BlogSummary } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Pure Drip Mobile IV Therapy",
  description:
    "Wellness insights, IV therapy guides, and recovery tips from the Pure Drip team — Nova Scotia's first mobile IV therapy clinic.",
  metadataBase: new URL(company.baseUrl),
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Pure Drip Mobile IV Therapy",
    description:
      "Wellness insights, IV therapy guides, and recovery tips from the Pure Drip team.",
    url: "/blog",
    siteName: company.name,
    locale: "en_CA",
    type: "website",
  },
};

// Revalidate the index periodically so newly published posts appear.
export const revalidate = 1800;

export default async function BlogPage() {
  const { blogs } = await listBlogs();

  return (
    <>
      <section className="border-b border-rule bg-surface-4 pt-[var(--header-height)]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Journal"
              title="Wellness, worth reading."
              italic="worth reading."
              summary="Guides, recovery tips, and the science behind feeling your best — from the Pure Drip team."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        {blogs.length === 0 ? (
          <Reveal>
            <div className="mx-auto max-w-xl rounded-md border border-rule bg-surface-1 p-10 text-center">
              <p className="eyebrow">Coming soon</p>
              <h2 className="mt-4 font-serif text-3xl text-ink">New stories on the way.</h2>
              <p className="mt-4 text-sm font-light leading-7 text-ink-soft">
                We&apos;re preparing our first articles on hydration, recovery, and wellness. Check
                back soon.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, idx) => (
              <Reveal key={post.id} delay={(idx % 3) * 0.05}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <ContactPanel />
    </>
  );
}

function BlogCard({ post }: { post: BlogSummary }) {
  const date = formatBlogDate(post.publishDate);
  const readingTime = post.customFields?.readingTime;
  const category = post.categories?.[0];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-rule bg-surface-1 transition hover:border-accent/40 hover:shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-3">
        {post.featuredImage ? (
          // Blog images come from Uplift's CDN (arbitrary host); use a plain img.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.featuredImage}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {category ? <p className="eyebrow">{category}</p> : null}
        <h2 className="mt-3 font-serif text-2xl leading-snug text-ink transition group-hover:text-accent">
          {post.title}
        </h2>
        {post.excerpt ? (
          <p className="mt-3 line-clamp-3 text-sm font-light leading-7 text-ink-soft">
            {post.excerpt}
          </p>
        ) : null}
        <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-mute">
          {date ? <span>{date}</span> : null}
          {date && readingTime ? <span aria-hidden="true">·</span> : null}
          {readingTime ? <span>{readingTime}</span> : null}
        </div>
      </div>
    </Link>
  );
}
