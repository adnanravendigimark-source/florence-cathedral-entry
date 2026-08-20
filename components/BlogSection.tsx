import Link from "next/link";
import SafeImage from "./SafeImage";
import { getPosts } from "@/lib/posts";
import { getHomepageContent } from "@/lib/homepage";

export default async function BlogSection() {
  const [allPosts, { sections }] = await Promise.all([getPosts(), getHomepageContent()]);
  const posts = allPosts.filter((p) => !p.noIndex).slice(0, 3);
  const s = sections.blogTeaser;

  if (posts.length === 0) return null;

  return (
    <section className="bg-tuscan-50/70 py-16 sm:py-24 border-t border-tuscan-200" id="blog-guides">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600">
              {s.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {s.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-navy-700 leading-relaxed">{s.subheading}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-full border-2 border-navy-700 bg-marble-50 px-6 py-2.5 text-sm font-bold text-navy-700 transition hover:bg-navy-700 hover:text-marble-50 shadow-sm"
          >
            <span>{s.viewAllText}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-tuscan-200 bg-marble-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-navy-600/40"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                <SafeImage
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex rounded-full bg-terracotta-100 px-2.5 py-0.5 font-bold uppercase tracking-wide text-terracotta-700">
                    {post.category}
                  </span>
                  {post.readTime && <span className="text-sky-700 font-medium">{post.readTime}</span>}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy-900 group-hover:text-terracotta-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm text-navy-700 leading-relaxed">{post.excerpt}</p>
                )}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-700 transition group-hover:gap-2 group-hover:text-terracotta-600"
                  >
                    <span>{s.readArticleText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-bold text-marble-50 transition shadow-sm hover:bg-navy-800"
          >
            <span>{s.viewAllText}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
