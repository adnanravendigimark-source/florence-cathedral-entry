import { getHomepageContent } from "@/lib/homepage";

export default async function WhatYouSee() {
  const { sections } = await getHomepageContent();
  const s = sections.why;

  return (
    <section className="bg-gradient-to-b from-tuscan-100/40 via-marble-50 to-tuscan-100/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600">
            Florentine Renaissance Architecture &amp; Heritage
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">{s.heading}</h2>
          <div
            className="rich-content mt-3 text-base text-navy-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.intro }}
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-tuscan-300 bg-marble-50 p-7 shadow-sm">
            <h3 className="font-display text-xl font-bold text-navy-900">{s.timelineHeading}</h3>
            <ol className="mt-6 space-y-6 border-l-2 border-navy-700/30 pl-6">
              {s.timeline.map((row, i) => (
                <li key={row.time + i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-terracotta-500 ring-4 ring-terracotta-100" />
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">{row.time}</span>
                  <p className="mt-1 text-sm font-semibold text-navy-800">{row.step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-tuscan-300 bg-marble-50 p-7 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy-900">{s.learnHeading}</h3>
              <ul className="mt-5 space-y-3">
                {s.learn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl bg-tuscan-100/70 border border-tuscan-200 p-3.5 text-sm text-navy-800">
                    <span className="text-terracotta-500 font-bold">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-sky-700">{s.note}</p>
            </div>
          </div>
        </div>

        {s.extraItems.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-navy-900">{s.extraHeading}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {s.extraItems.map((point, i) => (
                <div key={point.name + i} className="rounded-2xl border border-tuscan-300 bg-marble-50 p-5 shadow-sm transition hover:border-navy-600/40">
                  <p className="text-sm font-bold text-navy-800">{point.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-600">{point.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 p-8 text-marble-100 shadow-xl sm:flex-row sm:items-center sm:justify-between border border-navy-700">
          <div>
            <p className="text-lg font-bold text-marble-50">{s.ctaText}</p>
            <p className="text-xs text-sky-200 mt-0.5">Instant mobile ticket confirmation with 100% full refund guarantee up to 24h before entry</p>
          </div>
          <a
            href={s.ctaHref}
            className="shrink-0 rounded-xl bg-terracotta-500 px-7 py-3 text-sm font-bold text-marble-50 shadow-md ring-1 ring-terracotta-300/30 transition-all hover:bg-terracotta-600 hover:scale-[1.02]"
          >
            {s.ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
