import Link from "next/link";
import Image from "next/image";

export default function Logo({
  logoImage,
  logoAlt = "Duomo Florence Tickets & Dome Climb",
  line1 = "Duomo Florence",
  line2 = "Tickets & Dome Climb",
  theme = "light",
  className = "",
}: {
  logoImage?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
  theme?: "light" | "dark";
  className?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = logoImage?.trim();

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      {customSrc ? (
        <span className="relative block h-10 w-10 sm:h-11 sm:w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={customSrc}
            alt={logoAlt}
            fill
            priority
            sizes="44px"
            className="object-contain"
          />
        </span>
      ) : (
        <span className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-navy-700 p-1.5 shadow-md ring-1 ring-terracotta-500/30 transition-all duration-300 group-hover:bg-navy-800 group-hover:scale-105 group-hover:shadow-terracotta-500/20">
          {/* Custom SVG Icon representing Brunelleschi's Ribbed Dome with Renaissance styling */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-marble-100"
          >
            {/* Base drum with circular oculi windows */}
            <rect x="6" y="34" width="36" height="8" rx="1.5" fill="#D9C9AA" />
            <circle cx="12" cy="38" r="1.5" fill="#243447" />
            <circle cx="18" cy="38" r="1.5" fill="#243447" />
            <circle cx="24" cy="38" r="1.5" fill="#243447" />
            <circle cx="30" cy="38" r="1.5" fill="#243447" />
            <circle cx="36" cy="38" r="1.5" fill="#243447" />
            
            {/* Brunelleschi's iconic pointed double-curved dome */}
            <path
              d="M7 34 C10 18, 20 12, 24 8 C28 12, 38 18, 41 34 Z"
              fill="#A85C43"
            />
            {/* Prominent white marble rib arches */}
            <path
              d="M24 8 C24 16, 24 26, 24 34"
              stroke="#F7F4EC"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <path
              d="M24 8 C20 16, 14 26, 13 34"
              stroke="#F7F4EC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.85"
            />
            <path
              d="M24 8 C28 16, 34 26, 35 34"
              stroke="#F7F4EC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.85"
            />
            <path
              d="M24 8 C16 17, 8 27, 7 34"
              stroke="#F7F4EC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeOpacity="0.6"
            />
            <path
              d="M24 8 C32 17, 40 27, 41 34"
              stroke="#F7F4EC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeOpacity="0.6"
            />
            
            {/* The Lantern & Golden Copper Ball (Palla di Rame) */}
            <rect x="22" y="4" width="4" height="4.5" fill="#F7F4EC" rx="0.5" />
            <circle cx="24" cy="3" r="1.8" fill="#D9C9AA" stroke="#A85C43" strokeWidth="0.8" />
            <line x1="24" y1="1" x2="24" y2="0" stroke="#D9C9AA" strokeWidth="1" />
          </svg>
        </span>
      )}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display text-lg sm:text-xl font-bold tracking-tight transition-colors ${
            isDark ? "text-marble-50 group-hover:text-marble-100" : "text-navy-700 group-hover:text-navy-900"
          }`}
        >
          {line1}
        </span>
        <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-widest ${isDark ? "text-sky-300" : "text-terracotta-500"}`}>
          {line2}
        </span>
      </div>
    </Link>
  );
}
