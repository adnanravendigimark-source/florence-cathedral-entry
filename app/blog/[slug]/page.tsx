import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostBody from "@/components/BlogPostBody";
import BlogSidebar from "@/components/BlogSidebar";
import SafeImage from "@/components/SafeImage";
import { CalendarIcon, ClockPayIcon, TicketIcon } from "@/components/icons";
import { getPost, getPosts } from "@/lib/posts";
import { getHomepageContent } from "@/lib/homepage";
import { getRedirectTarget } from "@/lib/redirects";
import { resolveRobots, resolveCanonical, resolveOg, buildArticleJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { extractTableOfContents } from "@/lib/tableOfContents";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  const og = resolveOg(
    { ogTitle: post.ogTitle, ogDescription: post.ogDescription, ogImage: post.ogImage },
    { title: post.metaTitle, description: post.metaDescription, image: post.image }
  );
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: resolveCanonical(`/blog/${params.slug}`, post.canonicalUrl) },
    robots: resolveRobots(post.noIndex, post.noFollow),
    openGraph: {
      title: og.title,
      description: og.description,
      url: `/blog/${params.slug}`,
      type: "article",
      images: og.image ? [{ url: og.image, alt: post.imageAlt }] : undefined,
    },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getAuthorParts(author: string) {
  const [namePart, rolePart] = author.split("/").map((s) => s.trim());
  const name = namePart || "Matteo Rossi";
  const role = rolePart || "";
  const initials =
    name
      .replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, "")
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "MR";
  return { name, role, initials };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const [post, allPosts, { sections }] = await Promise.all([
    getPost(params.slug),
    getPosts(),
    getHomepageContent(),
  ]);

  if (!post) {
    const target = await getRedirectTarget(params.slug);
    if (target) permanentRedirect(`/blog/${target}`);
    notFound();
  }

  const articleJsonLd = buildArticleJsonLd({
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    authorName: post.author,
    siteName: "Duomo Florence Tickets",
  });

  const { toc: headingToc, html: contentHtml } = extractTableOfContents(post.content);
  const toc = headingToc;
  const author = getAuthorParts(post.author);
  const popularPosts = allPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F7F4EC]">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-navy-700">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-terracotta-600 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-sky-400">&gt;</li>
              <li>
                <Link href="/blog" className="hover:text-terracotta-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-sky-400">&gt;</li>
              <li className="font-semibold text-navy-900 line-clamp-1" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Post Header */}
          <div className="mt-5">
            <span className="inline-block rounded bg-navy-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-marble-50">
              {post.category}
            </span>

            <h1 className="mt-3.5 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-3.5 max-w-3xl text-sm leading-relaxed text-navy-800 sm:text-base">
                {post.excerpt}
              </p>
            )}

            {/* Author Meta Row */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-navy-800">
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 text-sky-700" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ClockPayIcon className="h-4 w-4 text-sky-700" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta-500 text-[10px] font-bold text-marble-50">
                  {author.initials}
                </span>
                <span className="font-semibold text-navy-900">By {author.name}</span>
              </span>
            </div>

            {/* Hero Cover Image */}
            <div className="relative mt-6 aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-2xl border border-tuscan-300 shadow-sm bg-navy-900">
              <SafeImage
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* 2-Column Main Content & Sidebar */}
          <div className="mt-10 pb-20 lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
            {/* Left Column: Article Body */}
            <div>
              <BlogPostBody
                content={contentHtml}
                recommendedTourId={post.recommendedTourId}
                showRecommendedTour={false}
              />

              {/* Bottom Article CTA Card */}
              <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-tuscan-300 bg-tuscan-100/90 p-6 text-center sm:flex-row sm:text-left shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-marble-50 text-navy-700 shadow-sm">
                    <TicketIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-navy-900">
                      Ready to Climb Brunelleschi's Dome?
                    </p>
                    <p className="mt-0.5 text-xs text-navy-700">
                      Compare passes and secure guaranteed timed entry tickets online.
                    </p>
                  </div>
                </div>

                <a
                  href="/#tours"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-navy-700 px-5 py-2.5 text-xs font-bold text-marble-50 shadow-sm transition hover:bg-navy-800 hover:scale-[1.02]"
                >
                  Compare Duomo Passes →
                </a>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="mt-12 lg:mt-0">
              <BlogSidebar
                slug={post.slug}
                popularPosts={popularPosts}
                toc={toc}
                tocLabel="IN THIS GUIDE"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
