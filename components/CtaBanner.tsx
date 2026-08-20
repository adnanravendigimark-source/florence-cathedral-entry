import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1B2B] px-6 py-8 sm:px-10 sm:py-10 shadow-xl shadow-black/15">
          {/* Subtle Architectural Watermarks */}
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-56 w-56 opacity-10">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="h-full w-full"
            >
              <path d="M10 80h80M20 80V40c0-15 15-25 30-25s30 10 30 25v40" />
              <path d="M50 15V5M46 5h8M30 40c5-10 10-15 20-15s15 5 20 15" />
            </svg>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-5">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="h-full w-full"
            >
              <path d="M10 90h80M20 90V50M35 90V30M50 90V15M65 90V40M80 90V60" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Line Art Dome Icon */}
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15">
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="6" y1="36" x2="38" y2="36" strokeWidth="1.75" />
                  <line x1="8" y1="33" x2="36" y2="33" />
                  <path d="M8 33C9.5 22 17 14 22 12C27 14 34.5 22 36 33" strokeWidth="1.75" />
                  <line x1="22" y1="12" x2="22" y2="33" strokeWidth="1.5" />
                  <rect x="20" y="7" width="4" height="5" strokeWidth="1.25" />
                  <line x1="22" y1="2" x2="22" y2="7" strokeWidth="1.5" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Ready to Climb Brunelleschi&apos;s Dome?
                </h2>
                <p className="mt-1 text-xs text-[#A0AEC0]">
                  Book your official Duomo tickets today and make memories that last a lifetime.
                </p>
              </div>
            </div>

            {/* Right Action Button */}
            <a
              href="#tours"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-xs font-bold text-[#112338] shadow-md transition-all hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore Tickets</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
