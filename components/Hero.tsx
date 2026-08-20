import Image from "next/image";
import Link from "next/link";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();

  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden">
      {/* Full-bleed Panoramic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/florence-hero-panoramic.jpg"
          alt="Florence Cathedral Brunelleschi Dome and Skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_top] sm:object-right-top lg:object-right"
        />
        {/* Responsive Gradient overlay ensuring text readability and seamless left fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 via-40% lg:via-50% to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-10 lg:pt-14 pb-12 lg:pb-16">
        <div className="max-w-xl">
          {/* Top Eyebrow Tag */}
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#B85D3E]">
            DUOMO FLORENCE TICKETS | DOME CLIMB ACCESS
          </p>

          {/* Main Headline */}
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold leading-[1.14] tracking-tight text-[#112338]">
            Discover Florence<br />
            From Its Most<br />
            Iconic View
          </h1>

          {/* Short Terracotta Accent Line */}
          <div className="mt-3.5 mb-5 h-[2.5px] w-10 rounded-full bg-[#B85D3E]" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#556476] leading-relaxed max-w-md">
            Official Duomo tickets with Dome Climb access. Skip the line and experience the history, art and breathtaking views of Florence.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <a
              href="#tours"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#112338] px-6 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#1a3452] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore Tickets</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#tours"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white/95 backdrop-blur-sm px-6 py-3 text-xs font-semibold text-[#112338] shadow-sm transition-all hover:bg-white hover:border-[#94A3B8] hover:-translate-y-0.5"
            >
              <span>Dome Climb Access</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Floating Key Features Strip Bar */}
        <div className="mt-10 lg:mt-14 rounded-2xl bg-white/95 backdrop-blur-md p-5 sm:p-6 shadow-xl shadow-black/[0.04] border border-[#EBECEF]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {/* Feature 1: Official Tickets */}
            <div className="flex items-center gap-3.5 pt-3.5 sm:pt-0 sm:px-3 first:pt-0 first:px-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#112338] border border-[#ECE8DE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  <path d="M13 5v2M13 17v2M13 11v2" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-[13px] font-bold text-[#112338]">Official Tickets</h2>
                <p className="text-[11px] text-[#718096]">100% Authorized</p>
              </div>
            </div>

            {/* Feature 2: Skip The Line */}
            <div className="flex items-center gap-3.5 pt-3.5 sm:pt-0 sm:px-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#112338] border border-[#ECE8DE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-[13px] font-bold text-[#112338]">Skip The Line</h2>
                <p className="text-[11px] text-[#718096]">Save time, enjoy more</p>
              </div>
            </div>

            {/* Feature 3: Dome Climb Access */}
            <div className="flex items-center gap-3.5 pt-3.5 sm:pt-0 sm:px-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#112338] border border-[#ECE8DE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <path d="M4 22h16M7 22V14M17 22V14M12 22V14M4 14h16M12 4L4 14M12 4l8 10M12 2v2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-[13px] font-bold text-[#112338]">Dome Climb Access</h2>
                <p className="text-[11px] text-[#718096]">Climb Brunelleschi's Dome</p>
              </div>
            </div>

            {/* Feature 4: 24/7 Support */}
            <div className="flex items-center gap-3.5 pt-3.5 sm:pt-0 sm:px-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#112338] border border-[#ECE8DE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-[13px] font-bold text-[#112338]">24/7 Support</h2>
                <p className="text-[11px] text-[#718096]">We're here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
