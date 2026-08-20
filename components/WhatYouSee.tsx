import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function WhatYouSee() {
  const { sections } = await getHomepageContent();
  const s = sections.why;

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-[#EAE6DE]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: admin-editable photo (What You See section) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl shadow-black/10">
              <SafeImage
                src={s.image}
                alt={s.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#B85D3E]">
              {s.eyebrow}
            </p>

            <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#112338] leading-[1.2] tracking-tight">
              {s.heading}
            </h2>

            {/* Terracotta Accent Line */}
            <div className="mt-3.5 mb-5 h-[2.5px] w-10 rounded-full bg-[#B85D3E]" />

            <div
              className="rich-content text-xs sm:text-[13.5px] text-[#556476] leading-relaxed max-w-lg"
              dangerouslySetInnerHTML={{ __html: s.intro }}
            />

            {/* Checklist */}
            <ul className="mt-6 space-y-3">
              {s.learn.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs sm:text-[13.5px] font-medium text-[#112338]">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#112338] text-white p-0.5">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-2.5 w-2.5">
                      <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
