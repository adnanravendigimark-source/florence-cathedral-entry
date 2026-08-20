import Image from "next/image";
import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();
  const gallery = content.heroGallery;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-navy-800 via-navy-700 to-navy-900 text-marble-100 pt-10 pb-16 lg:pt-14 lg:pb-20"
    >
      {/* Background Architectural Watermark & Renaissance Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-terracotta-500/15 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-sky-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,201,170,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dome Climb Live Alert Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-terracotta-400/30 bg-terracotta-900/40 px-4 py-2.5 backdrop-blur-md mb-8 sm:mb-10 shadow-lg">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-terracotta-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terracotta-500"></span>
            </span>
            <span>{content.featuredUrgencyText || "Dome Climb Time Slots Sell Out 2–3 Weeks in Advance · Reserve Early"}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-200">
            <span className="hidden sm:inline">Official Quota Available</span>
            <a
              href="#tours"
              className="inline-flex items-center gap-1 rounded-lg bg-terracotta-500 hover:bg-terracotta-600 px-3 py-1 text-xs font-bold text-marble-50 transition-colors shadow-sm"
            >
              Check Slots →
            </a>
          </div>
        </div>

        {/* Hero Main Grid: Left Copy & Right High-End Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (60% on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-navy-900/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-200 backdrop-blur-md">
              <span className="text-terracotta-400">🏛️</span>
              {content.heroBadge}
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-marble-50">
              {content.heroHeading}
            </h1>

            {/* Subheading */}
            <div
              className="rich-content rich-content-invert mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-marble-200/90"
              dangerouslySetInnerHTML={{ __html: content.heroSubheading }}
            />

            {/* Primary Action Buttons & Guarantee Pill */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 px-8 py-4 text-base font-bold text-marble-50 shadow-xl shadow-terracotta-900/30 ring-1 ring-inset ring-terracotta-300/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{content.heroCtaPrimaryText || "Book Dome Climb Tickets"}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>

              <a
                href={content.heroCtaSecondaryHref || "#prices"}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-marble-200/30 bg-navy-800/80 hover:bg-navy-700/80 px-6 py-4 text-sm sm:text-base font-bold text-marble-100 backdrop-blur-md transition-all duration-200 hover:border-marble-200/60"
              >
                {content.heroCtaSecondaryText || "Compare Duomo Passes"}
              </a>
            </div>

            {/* Key Confidence Factors */}
            <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-marble-100/10 w-full">
              <div className="flex items-center gap-2 text-xs font-medium text-marble-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">✓</span>
                <span>Timed Dome Entry</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-marble-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">✓</span>
                <span>Instant Mobile Pass</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-marble-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">✓</span>
                <span>100% Free 24h Cancel</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-marble-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">✓</span>
                <span>72h Complex Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Feature Box & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-marble-200/20 shadow-2xl shadow-navy-950/60 bg-navy-900">
              <SafeImage
                src={content.heroImage || "/images/hero-duomo.jpg"}
                alt={content.heroImageAlt || "Florence Duomo Cathedral and Brunelleschi Dome"}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

              {/* Floating Highlight Card 1: 463 Steps Climb */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-2xl border border-marble-100/20 bg-navy-900/85 p-3.5 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terracotta-500/30 text-terracotta-300 text-lg">
                    🧗
                  </div>
                  <div>
                    <p className="text-xs font-bold text-marble-50">Brunelleschi Dome Climb</p>
                    <p className="text-[11px] text-sky-200">463 steps · 360° Florence skyline</p>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card 2: Rating & Reviews */}
              {content.ratingValue && (
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-marble-100/20 bg-navy-950/90 p-4 backdrop-blur-md shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-terracotta-500 text-marble-50 font-bold text-lg shadow-md">
                        ★
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-base font-extrabold text-marble-50">{content.ratingValue}</p>
                          <span className="text-xs font-semibold text-terracotta-400">Excellent</span>
                        </div>
                        <p className="text-xs text-sky-200">{content.ratingCount}</p>
                      </div>
                    </div>
                    <a
                      href="#tours"
                      className="shrink-0 rounded-xl bg-marble-100 hover:bg-marble-200 px-3.5 py-2 text-xs font-bold text-navy-800 transition-colors shadow-sm"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Interactive Thumbnail Carousel Strip */}
        {gallery.length > 0 && (
          <div className="mt-12 sm:mt-14 pt-8 border-t border-marble-100/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sky-300">
                Explore the Florence Cathedral Complex
              </h3>
              <span className="text-xs font-medium text-marble-300 hidden sm:inline">
                Click any monument to jump to passes
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {gallery.map((img, i) => (
                <a
                  key={img.label + i}
                  href="#tours"
                  className="group relative h-24 overflow-hidden rounded-xl border border-marble-100/15 bg-navy-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-terracotta-400/60"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 truncate text-[11px] font-bold text-marble-50">
                    {img.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
