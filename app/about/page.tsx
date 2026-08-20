import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { getAboutPage } from "@/lib/about";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();
  const og = resolveOg(
    { ogTitle: about.ogTitle, ogDescription: about.ogDescription, ogImage: about.ogImage },
    { title: about.metaTitle, description: about.metaDescription, image: about.heroImage }
  );
  return {
    title: about.metaTitle,
    description: about.metaDescription,
    alternates: { canonical: resolveCanonical("/about", about.canonicalUrl) },
    robots: resolveRobots(about.noIndex, about.noFollow),
    openGraph: {
      title: og.title,
      description: og.description,
      url: "/about",
      images: og.image ? [{ url: og.image, alt: about.heroImageAlt }] : undefined,
    },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <>
      <Header />
      <main className="bg-[#FAF8F5]">
        {/* Hero banner */}
        <section className="relative overflow-hidden bg-[#0B1B2B] text-white">
          <div className="absolute inset-0">
            <SafeImage
              src={about.heroImage || "/images/hero-duomo.jpg"}
              alt={about.heroImageAlt || "Florence Duomo Cathedral"}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/75 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs font-medium text-[#CBD5E1]">
              <ol className="flex items-center justify-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/40">&gt;</li>
                <li className="font-semibold text-white" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-[#E2A03F]">
              {about.heroEyebrow}
            </span>

            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {about.heroHeading}
            </h1>

            <div
              className="rich-content rich-content-invert mx-auto mt-4 max-w-xl text-xs leading-relaxed text-[#CBD5E1] sm:text-sm"
              dangerouslySetInnerHTML={{ __html: about.heroSubheading }}
            />
          </div>
        </section>

        {/* Content Body */}
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          {/* Mission / Intro Section */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B85D3E]">Our Mission</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#112338]">{about.introHeading}</h2>
            
            <div className="rich-content text-sm sm:text-[15px] leading-relaxed text-[#556476]" dangerouslySetInnerHTML={{ __html: about.introParagraph1 }} />
            <div className="rich-content text-sm sm:text-[15px] leading-relaxed text-[#556476]" dangerouslySetInnerHTML={{ __html: about.introParagraph2 }} />

            {about.introImage && (
              <div className="my-8 overflow-hidden rounded-2xl border border-[#E8ECEF] shadow-md">
                <div className="relative aspect-[16/9] w-full">
                  <SafeImage
                    src={about.introImage}
                    alt={about.introImageAlt}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                  />
                </div>
                {about.introImageAlt && (
                  <p className="bg-white p-3 text-center text-xs italic text-[#718096] border-t border-[#E8ECEF]">
                    {about.introImageAlt}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Reasons / Why Book With Us */}
          <div className="mt-14 pt-12 border-t border-[#E8ECEF]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B85D3E]">Why Book With Us</span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#112338]">{about.reasonsHeading}</h2>
            <div
              className="rich-content mt-2 text-xs sm:text-sm text-[#556476] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: about.reasonsSubheading }}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {about.reasons.map(({ icon, title, body }) => {
                const Icon = getIconComponent(icon);
                return (
                  <div key={title} className="rounded-xl border border-[#E8ECEF] bg-white p-5 shadow-sm transition hover:shadow-md hover:border-[#CBD5E1]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF8F5] border border-[#ECE8DE] text-[#112338]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3.5 text-sm font-bold text-[#112338]">{title}</p>
                    <div
                      className="rich-content mt-1.5 text-xs leading-relaxed text-[#556476]"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Disclosure */}
          <div className="mt-14 pt-12 border-t border-[#E8ECEF]">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#112338]">{about.disclosureHeading}</h2>
            <div
              className="rich-content mt-3 text-xs sm:text-sm leading-relaxed text-[#556476]"
              dangerouslySetInnerHTML={{ __html: about.disclosureBody }}
            />
          </div>

          {/* CTA Box */}
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-[#0B1B2B] p-8 text-center text-white shadow-xl border border-[#112338] sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-base sm:text-lg font-bold text-white">{about.ctaText}</p>
              <p className="text-xs text-[#CBD5E1] mt-0.5">Instant mobile tickets &amp; skip-the-line entry</p>
            </div>
            <a
              href="/#tours"
              className="shrink-0 rounded-lg bg-white px-6 py-2.5 text-xs font-bold text-[#112338] shadow-md transition hover:bg-gray-100 hover:scale-[1.02]"
            >
              {about.ctaButtonLabel} →
            </a>
          </div>

          {/* Contact Prompt */}
          <div
            className="rich-content mt-8 text-center text-xs sm:text-sm text-[#718096] [&_a]:font-bold [&_a]:text-[#B85D3E] [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: about.contactPromptHtml }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
