import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;

  return (
    <section id="prices" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#B85D3E]">
          {s.eyebrow}
        </span>
        <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#112338] leading-[1.2] tracking-tight">
          {s.heading}
        </h2>
        <div
          className="rich-content mt-3 text-xs sm:text-sm text-[#556476] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E8ECEF] bg-white shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#0B1B2B] text-white">
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDE7D7]">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-[#FFF9F0] ${
                  tour.featured ? "bg-[#FFF9F0]/70 font-medium" : i % 2 ? "bg-[#FAF8F5]/60" : ""
                }`}
              >
                <td className="px-6 py-4 font-semibold text-[#112338]">{tour.title}</td>
                <td className="px-6 py-4 font-bold text-[#B85D3E]">
                  €{tour.price} <span className="font-normal text-xs text-[#8A9BA8]">/ person</span>
                </td>
                <td className="px-6 py-4 text-[#556476]">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-[#556476]">
                  {tour.priceTableFeature || (tour.id.includes("dome") ? "✅ Timed Dome Climb" : "Standard Pass")}
                </td>
                <td className="px-6 py-4 text-[#556476]">{tour.bestFor || "All Travelers"}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-lg bg-[#112338] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#1a3452]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {s.note && <p className="mt-3.5 text-xs text-[#8A9BA8]">{s.note}</p>}
    </section>
  );
}
