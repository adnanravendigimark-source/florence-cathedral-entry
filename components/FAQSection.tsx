import { getFaqs } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function FAQSection() {
  const [faqs, { sections }] = await Promise.all([getFaqs(), getHomepageContent()]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#EAE6DE]/70">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#B85D3E]">
            {sections.faq.eyebrow || "FREQUENTLY ASKED QUESTIONS"}
          </p>
          <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#112338] tracking-tight">
            {sections.faq.heading || "Duomo Florence Tickets & Dome Climb FAQs"}
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.id || f.question}
              className="group rounded-2xl border border-[#E8ECEF] bg-white p-5 sm:p-5.5 shadow-sm transition-all duration-200 open:border-[#CBD5E1] open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#112338]">
                <span className="font-serif text-[14.5px] sm:text-base font-bold pr-3">{f.question}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] text-[#112338] text-xs border border-[#E2E8F0] transition group-open:rotate-45 group-open:bg-[#112338] group-open:text-white">
                  +
                </span>
              </summary>
              <div
                className="rich-content mt-3 text-xs sm:text-[13px] leading-relaxed text-[#556476] border-t border-gray-100 pt-3"
                dangerouslySetInnerHTML={{ __html: f.answer }}
              />
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
