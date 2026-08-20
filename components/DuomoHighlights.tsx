import { getHomepageContent } from "@/lib/homepage";

export default async function DuomoHighlights() {
  const { sections } = await getHomepageContent();
  const s = sections.highlights;

  return (
    <section id="highlights" className="bg-navy-900 py-16 lg:py-20 text-marble-100 border-y border-navy-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-terracotta-400">
          {s.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-marble-50">{s.heading}</h2>
        <p className="mt-3 max-w-2xl text-sky-200/90 leading-relaxed">{s.subheading}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-navy-700/80 bg-navy-800/90 p-6 backdrop-blur-sm transition-all duration-300 hover:border-terracotta-500/50 hover:bg-navy-800 hover:-translate-y-1 shadow-lg"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-marble-50">{item.title}</h3>
              <p className="mt-2 text-sm text-marble-200/80 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
