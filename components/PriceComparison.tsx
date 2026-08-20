import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;
  return (
    <section id="prices" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600">
          {s.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">{s.heading}</h2>
        <div
          className="rich-content mt-3 text-base text-navy-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-tuscan-300 bg-marble-50 shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-navy-800 text-marble-100">
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-tuscan-200">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-tuscan-100/70 ${
                  tour.ribbon === "Most Popular" || tour.featured ? "bg-tuscan-100/80 font-medium" : i % 2 ? "bg-marble-100/40" : ""
                }`}
              >
                <td className="px-6 py-4 font-semibold text-navy-900">{tour.title}</td>
                <td className="px-6 py-4 font-bold text-terracotta-600">
                  €{tour.price} <span className="font-normal text-xs text-sky-700">/ person</span>
                </td>
                <td className="px-6 py-4 text-navy-700">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-navy-700">{tour.priceTableFeature || (tour.id.includes("dome") ? "✅ Timed Dome Climb" : "Standard Pass")}</td>
                <td className="px-6 py-4 text-navy-700">{tour.bestFor || "All Travelers"}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-xl bg-navy-700 px-4 py-2 text-xs font-bold text-marble-50 shadow-sm ring-1 ring-navy-600 transition hover:bg-navy-800 hover:scale-[1.02]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3.5 text-xs text-sky-700">{s.note}</p>
    </section>
  );
}
