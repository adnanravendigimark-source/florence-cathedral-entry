import { getFaqs } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";
import FaqAccordion from "./FaqAccordion";

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

        <FaqAccordion faqs={faqs} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
