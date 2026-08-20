import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function DomeClimbExperience() {
  const { sections } = await getHomepageContent();
  const s = sections.tower;

  return (
    <section id="dome-climb-experience" className="bg-white py-20 sm:py-24 border-y border-[#EAE6DE]/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF3EA] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#B85D3E]">
            <span>🧗</span> {s.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#112338] leading-[1.2] tracking-tight">
            {s.heading}
          </h2>
          <div
            className="rich-content mt-4 text-sm text-[#556476] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.body }}
          />
          <ul className="mt-6 space-y-3.5 text-xs sm:text-sm font-medium text-[#112338]">
            {s.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B1B2B] text-white text-[10px] font-bold">
                  ✓
                </span>
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
          <a
            href={s.ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#112338] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-[#1a3452] hover:shadow-md"
          >
            {s.ctaButtonText} →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {s.images.map((img, i) => (
            <div
              key={img.label + i}
              className="group relative h-36 overflow-hidden rounded-2xl border border-[#E8ECEF] shadow-md sm:h-44 bg-[#0B1B2B]"
            >
              <SafeImage
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/85 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
