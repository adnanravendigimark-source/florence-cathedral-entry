import { getHomepageContent } from "@/lib/homepage";

export default async function PracticalInfo() {
  const { sections } = await getHomepageContent();
  const s = sections.practical;

  return (
    <section id="practical" className="bg-tuscan-50/80 py-20 border-y border-tuscan-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-tuscan-300 bg-marble-50 p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta-100 text-terracotta-800 font-bold text-lg mb-4">
            ⏱
          </div>
          <h3 className="font-display text-xl font-bold text-navy-900">{s.hoursHeading}</h3>
          <table className="mt-4 w-full text-sm">
            <tbody>
              {s.hours.map((row, i) => (
                <tr key={row.range + i} className="border-b border-tuscan-200/70">
                  <td className="py-2.5 text-navy-700">{row.range}</td>
                  <td className="py-2.5 text-right font-semibold text-navy-900">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-sky-700">{s.hoursNote}</p>
        </div>

        <div className="rounded-2xl border border-tuscan-300 bg-marble-50 p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-800 font-bold text-lg mb-4">
            📍
          </div>
          <h3 className="font-display text-xl font-bold text-navy-900">{s.addressHeading}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-navy-700">{s.address}</p>
          <p className="mt-3 text-xs font-semibold text-terracotta-600">{s.metro}</p>
        </div>

        <div className="rounded-2xl border border-tuscan-300 bg-marble-50 p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tuscan-200 text-navy-800 font-bold text-lg mb-4">
            💡
          </div>
          <h3 className="font-display text-xl font-bold text-navy-900">{s.bestTimeHeading}</h3>
          <div
            className="rich-content mt-4 text-sm text-navy-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.bestTimeBody }}
          />
        </div>
      </div>
    </section>
  );
}
