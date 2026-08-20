import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";

export default async function DomeClimbExperience() {
  const { sections } = await getHomepageContent();
  const s = sections.tower;

  return (
    <section id="dome-climb" className="bg-tuscan-50 py-20 border-t border-b border-tuscan-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-terracotta-700">
            <span>🧗</span> {s.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-800 sm:text-4xl">{s.heading}</h2>
          <div
            className="rich-content mt-4 text-base text-navy-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.body }}
          />
          <ul className="mt-6 space-y-3.5 text-sm font-medium text-navy-800">
            {s.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-700 text-marble-50 text-xs font-bold">
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <a
            href={s.ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy-700 px-7 py-3.5 text-sm font-bold text-marble-50 shadow-lg ring-1 ring-navy-600 transition-all hover:bg-navy-800 hover:scale-[1.02]"
          >
            {s.ctaButtonText} →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {s.images.map((img, i) => (
            <div
              key={img.label + i}
              className="group relative h-36 overflow-hidden rounded-2xl border border-tuscan-300 shadow-md sm:h-44 bg-navy-900"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-bold text-marble-50 drop-shadow">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
