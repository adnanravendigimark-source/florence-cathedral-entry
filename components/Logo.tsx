import Link from "next/link";
import Image from "next/image";

export default function Logo({
  logoImage,
  logoAlt = "Florence Cathedral Entry",
  line1 = "FLORENCE",
  line2 = "— CATHEDRAL ENTRY —",
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
            sizes="44px"
            className="object-contain"
          />
        </span>
      ) : (
        <span className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
          {/* Architectural Line-art Dome Icon */}
          <svg
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-full w-full ${isDark ? "text-white" : "text-[#112338]"}`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Base colonnade / drum */}
            <line x1="6" y1="36" x2="38" y2="36" strokeWidth="1.75" />
            <line x1="8" y1="39" x2="36" y2="39" strokeWidth="1.25" />
            <line x1="10" y1="33" x2="10" y2="36" />
            <line x1="16" y1="33" x2="16" y2="36" />
            <line x1="22" y1="33" x2="22" y2="36" />
            <line x1="28" y1="33" x2="28" y2="36" />
            <line x1="34" y1="33" x2="34" y2="36" />
            <line x1="8" y1="33" x2="36" y2="33" />
            
            {/* Dome shell outer curves */}
            <path d="M8 33C9.5 22 17 14 22 12C27 14 34.5 22 36 33" strokeWidth="1.75" />
            
            {/* Rib lines */}
            <line x1="22" y1="12" x2="22" y2="33" strokeWidth="1.5" />
            <path d="M22 12C18 19 14 26 14 33" strokeWidth="1.25" />
            <path d="M22 12C26 19 30 26 30 33" strokeWidth="1.25" />

            {/* Lantern and Cross */}
            <rect x="20" y="7" width="4" height="5" strokeWidth="1.25" />
            <line x1="22" y1="2" x2="22" y2="7" strokeWidth="1.5" />
            <line x1="20" y1="4" x2="24" y2="4" strokeWidth="1.5" />
          </svg>
        </span>
      )}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif tracking-[0.14em] text-lg sm:text-xl font-bold uppercase transition-colors ${
            isDark ? "text-white group-hover:text-gray-200" : "text-[#112338] group-hover:text-[#1e3a5f]"
          }`}
        >
          {line1}
        </span>
        <span
          className={`text-[8.5px] sm:text-[9.5px] font-medium tracking-[0.2em] uppercase mt-1 ${
            isDark ? "text-gray-300" : "text-[#3b4c60]"
          }`}
        >
          {line2}
        </span>
      </div>
    </Link>
  );
}
