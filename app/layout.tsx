import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";

export const dynamic = "force-dynamic";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const DEFAULT_OG_IMAGE = "/images/hero-duomo.jpg";

const touristAttractionJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Duomo Florence Tickets & Dome Climb",
  url: SITE_URL,
  description:
    "Official & verified Duomo Florence tickets with guaranteed Brunelleschi Dome Climb access, Giotto's Bell Tower entry, and Opera del Duomo Museum admission in Florence, Italy.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza del Duomo",
    addressLocality: "Firenze",
    postalCode: "50122",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7731,
    longitude: 11.2560,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "38400",
    bestRating: "5",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duomo Florence Tickets",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "Independent Florence travel resource dedicated to Duomo Florence tickets, Brunelleschi Pass dome climb access, and fast-track admissions.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Duomo Florence Tickets",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Duomo Florence Tickets | Brunelleschi Dome Climb Access 2026",
      template: "%s | Duomo Florence Tickets",
    },
    description:
      "Book official Duomo Florence tickets with guaranteed Brunelleschi Dome climb access. Bypass long lines with verified timed-entry passes to Florence Cathedral complex.",
    keywords: ["Duomo Florence Tickets", "Dome Climb Access", "Brunelleschi Pass", "Florence Cathedral Tickets"],
    alternates: {
      canonical: "/",
    },
    robots,
    openGraph: {
      title: "Duomo Florence Tickets | Brunelleschi Dome Climb Access",
      description:
        "Climb the 463 steps of Brunelleschi's Dome with official Duomo Florence tickets. Fast-track entry, Giotto's Tower access & free 24h cancellation.",
      type: "website",
      url: SITE_URL,
      siteName: "Duomo Florence Tickets",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 2400,
          height: 1350,
          alt: "Florence Cathedral Santa Maria del Fiore and Brunelleschi Dome",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Duomo Florence Tickets | Brunelleschi Dome Climb Access",
      description:
        "Climb the 463 steps of Brunelleschi's Dome with official Duomo Florence tickets. Fast-track entry, Giotto's Tower access & free 24h cancellation.",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function buildThemeStyle(theme: { primary: string; secondary: string; dark: string; accent: string }) {
  const vars: [string, string | null][] = [
    ["--color-canal-primary", hexToRgbTriplet(theme.primary)],
    ["--color-canal-blue", hexToRgbTriplet(theme.secondary)],
    ["--color-canal-ink", hexToRgbTriplet(theme.dark)],
    ["--color-sage-400", hexToRgbTriplet(theme.accent)],
  ];
  const declarations = vars
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
  return declarations ? `:root{${declarations}}` : "";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getSiteChrome();
  const themeStyle = buildThemeStyle(theme);

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-[#F7F4EC] text-[#141D28] antialiased selection:bg-navy-700 selection:text-marble-50">
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
