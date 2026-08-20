import Image from "next/image";
import Link from "next/link";
import { getTours } from "@/lib/data";

export default async function TourGrid() {
  const tours = await getTours();

  const ticketCards = [
    {
      id: "brunelleschi-pass",
      badge: "MOST POPULAR PASS",
      isPopular: true,
      title: "BRUNELLESCHI PASS — ALL-INCLUSIVE DUOMO & DOME CLIMB",
      description: "The definitive Florence Duomo experience. Includes guaranteed timed entry to climb the Dome, plus full access to the Cathedral complex.",
      price: "42",
      rating: "4.9",
      reviews: "24,800",
      image: "/images/dome-climb.jpg",
      imageAlt: "Brunelleschi's Dome Climb Stairs and Panorama",
      features: [
        "Official Brunelleschi Pass barcode ticket",
        "Mandatory timed entry reservation for Brunelleschi's Dome",
        "Access to Giotto's Campanile bell tower",
      ],
      validity: "3 Days Validity (Dome Climb ~1.5 Hours)",
      highlightReasons: [
        "38,400+ verified reviews — rated 4.9 / 5 by international travelers",
        "Guaranteed timed entry to climb the 463 steps of Brunelleschi's Dome",
      ],
      urgencyText: "Dome Climb Time Slots Sell Out 2–3 Weeks in Advance - Reserve Early",
      href: tours[0]?.href || "#tours",
    },
    {
      id: "vip-guided-tour",
      title: "FLORENCE DUOMO & BRUNELLESCHI DOME CLIMB VIP GUIDED TOUR",
      description: "Ascend the iconic dome with an expert licensed art historian. Skip long lines, discover hidden details of Vasari's frescoes, and enjoy panoramic terrace views.",
      price: "68",
      rating: "5.0",
      reviews: "11,200",
      image: "/images/dome-frescoes.jpg",
      imageAlt: "Vasari Last Judgment Frescoes Inside Florence Dome",
      features: [
        "Licensed English-speaking guide (Art Historian)",
        "Skip-the-line fast track entry ticket for the Dome",
        "Full 3-day Florence Cathedral Complex pass (Giotto Tower, Museum, Baptistery)",
      ],
      validity: "2.5 Hours Guided",
      href: tours[1]?.href || tours[0]?.href || "#tours",
    },
    {
      id: "giotto-pass",
      title: "GIOTTO PASS — GIOTTO'S BELL TOWER, BAPTISTERY, MUSEUM & CATHEDRAL",
      description: "Perfect for travelers looking to enjoy stunning Florence views without climbing the Dome. Ascend Giotto's 414-step Campanile and explore Santa Reparata.",
      price: "28",
      rating: "4.8",
      reviews: "8,900",
      image: "/images/florence-giotto-tower.jpg",
      imageAlt: "Giotto's Campanile Bell Tower and Piazza del Duomo",
      features: [
        "Official Giotto Pass barcode voucher",
        "Entry to Giotto's Bell Tower (no strict time slot needed)",
        "San Giovanni Baptistery entry & Opera del Duomo Museum",
      ],
      validity: "3 Days Validity (Bell Tower ~1 Hour)",
      href: tours[2]?.href || tours[0]?.href || "#tours",
    },
  ];

  return (
    <section id="tours" className="py-16 sm:py-20 bg-[#FAF8F5]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B85D3E]">
            COMPARE &amp; BOOK TICKETS
          </p>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-[2.25rem] font-bold text-[#112338] tracking-tight">
            Choose Your Perfect Duomo Experience
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#556476]">
            Inclusive passes, fast-track priority tickets, and expert-led Renaissance tours.
          </p>
        </div>

        {/* 3 Ticket Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {ticketCards.map((card) => (
            <div
              key={card.id}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 ${
                card.isPopular
                  ? "border-2 border-[#B85D3E] shadow-lg shadow-[#B85D3E]/10 relative ring-1 ring-[#B85D3E]/20"
                  : "border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#CBD5E1]"
              }`}
            >
              {/* Card Image & Overlay Badges */}
              <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-gray-900">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Popular Ribbon Badge */}
                {card.badge && (
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-md bg-[#B85D3E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    <span>👑</span>
                    <span>{card.badge}</span>
                  </div>
                )}

                {/* Star Rating Badge Floating Bottom Left */}
                <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1 rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-[#112338] shadow-sm">
                  <span className="text-[#00B67A]">★</span>
                  <span>{card.rating}</span>
                  <span className="text-[#718096] font-normal">({card.reviews})</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h3 className="font-serif text-[15px] sm:text-base font-bold text-[#112338] leading-snug group-hover:text-[#B85D3E] transition-colors line-clamp-2 min-h-[44px]">
                  <a href={card.href} target="_blank" rel="noopener nofollow sponsored">
                    {card.title}
                  </a>
                </h3>

                {/* Snippet Description */}
                <p className="mt-1.5 text-xs text-[#556476] leading-relaxed line-clamp-2">
                  {card.description}
                </p>

                {/* Feature Tags List */}
                <div className="mt-4 space-y-1.5">
                  {card.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 rounded-md bg-[#FAF8F5] px-2.5 py-1.5 text-[11.5px] text-[#2D3748] border border-[#F0EBE1]"
                    >
                      <span className="mt-0.5 text-[#B85D3E] font-bold shrink-0">✓</span>
                      <span className="leading-tight font-medium line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Validity Duration */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#718096]">
                  <span>⏱</span>
                  <span className="font-medium">{card.validity}</span>
                </div>

                {/* Optional Highlight Box (For Popular Card) */}
                {card.highlightReasons && (
                  <div className="mt-3.5 rounded-lg bg-[#FFF9F0] p-2.5 border border-[#FDE8C8] space-y-1">
                    {card.highlightReasons.map((reason, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[10.5px] text-[#78350F] leading-snug">
                        <span className="font-bold text-[#B85D3E]">✓</span>
                        <span className="font-medium line-clamp-1">{reason}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom Row: Price & CTA */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between pt-3.5 border-t border-gray-100">
                    <div>
                      <span className="block text-[9.5px] font-bold uppercase tracking-wider text-[#718096]">
                        FROM
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#112338]">
                          €{card.price}
                        </span>
                        <span className="text-[11px] text-[#718096]">/person</span>
                      </div>
                    </div>

                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className="inline-flex items-center justify-center rounded-lg bg-[#112338] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#1a3452] hover:shadow-md"
                    >
                      Book Tickets
                    </a>
                  </div>

                  {/* Urgency Note */}
                  {card.urgencyText && (
                    <div className="mt-2.5 flex items-center gap-1 text-[10.5px] font-semibold text-[#B85D3E]">
                      <span>🔒</span>
                      <span>{card.urgencyText}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
