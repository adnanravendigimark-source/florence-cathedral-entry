import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}
export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface WhySection {
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface TowerSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
}

export interface HomepageSections {
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  tower: TowerSection;
  practical: PracticalSection;
  price: PriceSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  ratingValue: string;
  ratingCount: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Duomo Florence Tickets & Dome Climb",
  logoLine1: "Duomo Florence",
  logoLine2: "Tickets & Dome Climb",
  bookNowText: "Book Tickets",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Dome Climb", href: "/#dome-climb" },
    { label: "Tickets & Passes", href: "/#tours" },
    { label: "Highlights", href: "/#highlights" },
    { label: "Plan Visit", href: "/#practical" },
    { label: "Blog", href: "/blog" },
  ],
  ctaText: "Book Dome Tickets",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent Florence Cathedral & Duomo Ticket Resource.</strong> We curate official skip-the-line Duomo Florence tickets, Brunelleschi Pass dome climb access, Giotto's Bell Tower climbs, and Opera del Duomo museum packages with verified authorized providers.",
  columns: [
    {
      title: "Duomo Tickets & Passes",
      links: [
        { label: "Brunelleschi Pass (All-Inclusive)", href: "/#tours" },
        { label: "Dome Climb Access Priority", href: "/#dome-climb" },
        { label: "Giotto Pass (Bell Tower & Museum)", href: "/#tours" },
        { label: "Pass Comparison & Prices", href: "/#prices" },
        { label: "Duomo Visitor FAQs", href: "/#faq" },
      ],
    },
    {
      title: "Cathedral Information",
      links: [
        { label: "About Florence Duomo", href: "/about" },
        { label: "Duomo Travel Blog & Guides", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Duomo Florence Entrances",
  addressLine1: "Piazza del Duomo & Porta dei Canonici (Dome Entrance)",
  addressLine2: "50122 Firenze (FI), Italy · Santa Maria Novella Station (10 min walk)",
  copyrightText:
    "Duomo Florence Tickets. All prices in EUR. Official tickets subject to Opera di Santa Maria del Fiore quota rules and seasonal availability.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#243447",   // Renaissance Navy
  secondary: "#8FA6B5", // Muted Sky
  dark: "#141D28",      // Charcoal Navy
  accent: "#A85C43",    // Terracotta
};

export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    src: "/images/hero-duomo.jpg",
    alt: "Florence Cathedral Santa Maria del Fiore and Brunelleschi Dome at golden hour",
    label: "Santa Maria del Fiore",
  },
  {
    src: "/images/dome-climb.jpg",
    alt: "Climbing the 463 steps inside Brunelleschi's Dome with panoramic terrace view",
    label: "Brunelleschi Dome Climb",
  },
  {
    src: "/images/dome-frescoes.jpg",
    alt: "Vasari's monumental Last Judgment fresco inside the Duomo cupola ceiling",
    label: "Last Judgment Frescoes",
  },
  {
    src: "/images/giotto-campanile.jpg",
    alt: "Giotto's Bell Tower soaring in Piazza del Duomo Florence",
    label: "Giotto's Campanile",
  },
  {
    src: "/images/baptistery.jpg",
    alt: "Baptistery of San Giovanni and gilded Gates of Paradise doors",
    label: "Baptistery of San Giovanni",
  },
  {
    src: "/images/opera-duomo-museum.jpg",
    alt: "Renaissance masterpieces at the Museo dell'Opera del Duomo",
    label: "Duomo Opera Museum",
  },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Official & Fast-Track Admission",
    heading: "Duomo Florence Tickets, Brunelleschi Pass & Guided Dome Tours",
    subheading:
      "Guarantee your timed reservation for the world-famous Brunelleschi Dome climb. Choose from all-inclusive passes, fast-track priority tickets, and expert-led Renaissance tours.",
  },
  highlights: {
    eyebrow: "The Heart of the Italian Renaissance",
    heading: "5 Must-See Wonders of the Florence Duomo Complex",
    subheading:
      "Commissioned in 1296 and capped by Filippo Brunelleschi's architectural marvel in 1436, the Piazza del Duomo complex is humanity's greatest Renaissance treasure.",
    cards: [
      {
        title: "Brunelleschi's Dome Climb (463 Steps)",
        body: "Ascend between the double masonry shells of the world's largest brick dome and step out onto the lantern terrace for 360° views across Florence.",
        icon: "🏛️",
      },
      {
        title: "Vasari's Last Judgment Frescoes",
        body: "Gaze directly up at 3,600 square meters of breathtaking Renaissance frescoes painted by Giorgio Vasari and Federico Zuccari.",
        icon: "🎨",
      },
      {
        title: "Giotto's Bell Tower (Campanile)",
        body: "Climb 414 steps up Giotto's 85-meter free-standing bell tower for the iconic close-up perspective directly facing Brunelleschi's dome.",
        icon: "🔔",
      },
      {
        title: "Baptistery & Gates of Paradise",
        body: "Marvel at Ghiberti's gilded bronze masterpiece doors and the 13th-century golden Byzantine ceiling mosaics inside the octagonal temple.",
        icon: "✨",
      },
    ],
  },
  why: {
    heading: "The Complete Duomo Experience: What You Will Discover",
    intro:
      "A transcendent journey through 700 years of Florentine genius. Walk where Dante worshipped, Brunelleschi engineered the impossible, and Michelangelo found his inspiration.",
    timelineHeading: "Recommended Visit Schedule",
    timeline: [
      { time: "0:00", step: "Arrive at Porta dei Canonici (South Side) 15 minutes before your mandatory Dome Climb time slot" },
      { time: "0:15", step: "Ascend the 463 historic stairs, walking along the interior balcony under Vasari's colossal frescoes" },
      { time: "0:50", step: "Reach the external lantern terrace for breathtaking 360-degree vistas over Tuscany and the Arno" },
      { time: "1:20", step: "Descend into the Cathedral nave to admire Paolo Uccello's 24-hour clock and stained glass windows" },
      { time: "1:50", step: "Explore the ancient Crypt of Santa Reparata under the cathedral floor" },
      { time: "2:30", step: "Visit the Museo dell'Opera del Duomo to see Michelangelo's Florence Pietà and Donatello's original statues" },
    ],
    learnHeading: "Architectural Secrets You Will Uncover",
    learn: [
      "How Brunelleschi built the self-supporting dome without any wooden scaffolding or centering",
      "The ingenious herringbone brickwork pattern (spina di pesce) that prevented the masonry from collapsing inward",
      "Why Michelangelo declared: 'I go to build her sister in Rome (St. Peter's), larger indeed, but not lovelier'",
      "How Lorenzo Ghiberti took 27 years to cast the gilded bronze 'Gates of Paradise' for the Baptistery",
    ],
    note: "All passes include digital mobile delivery with instant barcode scanning at all cathedral complex turnstiles.",
    extraHeading: "Key Complex Access Entrances",
    extraItems: [
      { name: "Porta dei Canonici (South Facade)", note: "Mandatory entrance for all Brunelleschi Dome climb ticket holders" },
      { name: "Giotto's Bell Tower Entrance", note: "Separate entry line on the south-west side of Piazza del Duomo" },
      { name: "Museo dell'Opera del Duomo", note: "Located behind the cathedral apse at Piazza del Duomo 9" },
    ],
    ctaText: "Ready to climb Brunelleschi's Dome? Tickets sell out weeks ahead. Reserve your timed entry slot now.",
    ctaButtonText: "Book Duomo Florence Tickets Now →",
    ctaHref: "#tours",
  },
  tower: {
    eyebrow: "The Ultimate Renaissance Challenge",
    heading: "Climb the 463 Steps of Brunelleschi's Dome",
    body:
      "Climbing the Cupola del Brunelleschi is an unforgettable bucket-list experience. Squeeze through the narrow stone corridors between the inner and outer brick shells, walk along the high gallery inches from the Last Judgment frescoes, and emerge into the Tuscan sunlight at the highest viewpoint in Florence.",
    bullets: [
      "Strictly limited timed entry prevents overcrowding on the narrow historic spiral stairs",
      "Close-up vantage point of Giorgio Vasari & Federico Zuccari's 3,600 m² fresco masterpiece",
      "Fascinating architectural passage through the double-shell dome engineered without scaffolding in 1420",
      "Panoramic 360° open-air views across Florence, the Arno River, and the Chianti hills",
    ],
    ctaButtonText: "See Dome Climb Tickets & Passes",
    ctaHref: "#tours",
    images: [
      {
        src: "/images/dome-climb.jpg",
        alt: "Climbing the stone staircase inside the double shell of Brunelleschi's dome in Florence",
        label: "463-Step Dome Climb",
      },
      {
        src: "/images/dome-frescoes.jpg",
        alt: "Close up view of the Last Judgment frescoes inside the Florence cathedral dome",
        label: "Vasari's Frescoes",
      },
      {
        src: "/images/hero-duomo.jpg",
        alt: "Florence Cathedral Santa Maria del Fiore at sunset",
        label: "Cathedral Silhouette",
      },
      {
        src: "/images/giotto-campanile.jpg",
        alt: "Giotto's bell tower in Piazza del Duomo Florence",
        label: "Giotto's Tower",
      },
    ],
  },
  practical: {
    hoursHeading: "Florence Duomo Complex Opening Hours (2026)",
    hours: [
      { range: "Brunelleschi's Dome (Mandatory Timed Slot)", time: "8:15 AM – 7:30 PM (Last climb 6:45 PM)" },
      { range: "Cathedral Santa Maria del Fiore (Nave)", time: "10:15 AM – 4:30 PM (Closed Sundays for worship)" },
      { range: "Giotto's Bell Tower", time: "8:15 AM – 7:45 PM (Last climb 7:00 PM)" },
      { range: "Museo dell'Opera del Duomo & Baptistery", time: "9:00 AM – 7:45 PM (Closed first Tuesday of each month)" },
      { range: "Crypt of Santa Reparata", time: "10:15 AM – 4:30 PM (Inside the Cathedral)" },
    ],
    hoursNote: "Entry to the main Cathedral nave is free, but queues can exceed 2 hours. Access to the Dome, Tower, Baptistery, Museum, and Crypt requires an official pass.",
    addressHeading: "Location & Arrival Information",
    address:
      "Piazza del Duomo, 50122 Firenze (FI), Italy.\nLocated in the pedestrian heart of historical Florence.",
    metro: "10-minute walk from Firenze Santa Maria Novella (SMN) railway station. Accessible via tram lines T1 & T2 to Unità or Valfonda.",
    bestTimeHeading: "Best Time to Climb the Dome",
    bestTimeBody:
      "The 8:15 AM or 9:00 AM morning slots offer the coolest temperatures and serene light before crowds peak. The 5:30 PM – 6:30 PM evening slots provide breathtaking golden-hour light and sunset views across the red Florentine rooftops.",
  },
  price: {
    eyebrow: "Transparent Comparison",
    heading: "Compare Duomo Florence Passes, Dome Climb & Guided Tours",
    subheading:
      "Find the ideal pass for your Florence itinerary. Compare inclusions, dome access rights, duration, and prices side by side.",
    note: "All passes include digital barcode access valid for 3 days from first entry. 100% free cancellation up to 24 hours prior on verified tickets.",
    itemLabel: "Pass / Ticket Option",
    priceLabel: "Price",
    column1Label: "Validity",
    column2Label: "Dome Climb Access",
    bestForLabel: "Best For",
    bookLabel: "Select Ticket",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Duomo Florence Tickets & Dome Climb FAQs",
  },
  notFound: {
    heading: "This page seems to have wandered through the Renaissance corridors.",
    body: "The page you are looking for does not exist or may have been moved. Explore our top Duomo Florence passes and Dome Climb tickets below.",
    primaryButtonText: "Compare Duomo Tickets & Passes →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Florence Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "Florence Travel & Architecture Guides",
    heading: "Florence Duomo & Dome Climb Insider Guides",
    subheading:
      "Expert tips on booking dome climb time slots, pass comparisons, avoiding ticket scams, and climbing Giotto's Tower.",
    viewAllText: "View All Guides",
    readArticleText: "Read Guide",
  },
  blogPage: {
    eyebrow: "Duomo Florence Travel & Ticket Guides",
    heading: "Florence Duomo Guides, Dome Climb Tips & History",
    subheading: "Everything you need to know to secure your Brunelleschi Dome tickets, pick the right pass, and experience Florence Cathedral like an insider.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to climb Brunelleschi's Dome in Florence?",
    ctaButtonText: "Compare Duomo Passes & Tours →",
    backToGuidesText: "← All Florence travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Florence Guides",
    sidebarRelatedHeading: "Related Duomo Guides",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all passes & tours →",
    promoRecommendedText: "Recommended Pass",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "🏛️ Guaranteed Dome Climb Time Slots · Brunelleschi Pass · 100% Mobile Confirmation",
  heroHeading: "Duomo Florence Tickets — Fast-Track Entry & Brunelleschi Dome Climb Access",
  heroSubheading:
    "Ascend the 463 steps of Brunelleschi's legendary dome, admire Vasari's Last Judgment frescoes, and explore Giotto's Bell Tower, the Baptistery, and the Opera del Duomo Museum with verified priority tickets.",
  heroImage: "/images/hero-duomo.jpg",
  heroImageAlt: "Florence Cathedral Santa Maria del Fiore and Brunelleschi Dome at golden hour",
  heroVideo: "",
  heroGallery: DEFAULT_GALLERY,
  heroCtaPrimaryText: "Book Dome Climb Tickets",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "Compare Duomo Passes",
  heroCtaSecondaryHref: "#prices",
  ratingValue: "4.9 / 5",
  ratingCount: "38,400+ verified visitor reviews",
  showFeaturedTour: true,
  featuredTourId: "brunelleschi-pass-all-inclusive-dome-climb",
  featuredBadgeLabel: "Most Popular Pass",
  featuredUrgencyText: "Dome Climb Time Slots Sell Out 2–3 Weeks in Advance · Reserve Early",
  featuredReasons: [
    "38,400+ verified reviews — rated 4.9 / 5 by international travelers",
    "Guaranteed timed entry to climb the 463 steps of Brunelleschi's Dome",
    "Includes Giotto's Bell Tower, Baptistery, Duomo Museum & Santa Reparata Crypt valid for 3 days"
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Duomo Florence Tickets | Brunelleschi Dome Climb & Fast-Track Passes 2026",
  metaDescription:
    "Book official Duomo Florence tickets with guaranteed Brunelleschi Dome climb access. Skip long lines with verified timed-entry passes to Florence Cathedral complex.",
  focusKeyword: "Duomo Florence Tickets",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "Duomo Florence Tickets — Guaranteed Dome Climb Access & Skip-The-Line Passes",
  ogDescription:
    "Secure your timed reservation to climb Brunelleschi's Dome. Includes Giotto's Tower, Baptistery, Duomo Museum, and Cathedral with free cancellation.",
  ogImage: "/images/hero-duomo.jpg",
};

function parseReasons(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || DEFAULT_HOMEPAGE_CONTENT.heroBadge,
    heroHeading: row.hero_heading || DEFAULT_HOMEPAGE_CONTENT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_HOMEPAGE_CONTENT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_HOMEPAGE_CONTENT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_HOMEPAGE_CONTENT.heroImageAlt,
    heroVideo: row.hero_video || "",
    heroGallery: (() => {
      const g = parseReasons(row.hero_gallery);
      return g.length ? (g as unknown as GalleryImage[]) : DEFAULT_GALLERY;
    })(),
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    ratingValue: row.rating_value || DEFAULT_HOMEPAGE_CONTENT.ratingValue,
    ratingCount: row.rating_count || DEFAULT_HOMEPAGE_CONTENT.ratingCount,
    showFeaturedTour: !!row.show_featured_tour,
    featuredTourId: row.featured_tour_id || DEFAULT_HOMEPAGE_CONTENT.featuredTourId,
    featuredBadgeLabel: row.featured_badge_label || DEFAULT_HOMEPAGE_CONTENT.featuredBadgeLabel,
    featuredUrgencyText: row.featured_urgency_text || DEFAULT_HOMEPAGE_CONTENT.featuredUrgencyText,
    featuredReasons: parseReasons(row.featured_reasons).length ? parseReasons(row.featured_reasons) : DEFAULT_HOMEPAGE_CONTENT.featuredReasons,
    sections: {
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      tower: { ...DEFAULT_SECTIONS.tower, ...sectionsRaw.tower },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || DEFAULT_HOMEPAGE_CONTENT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_HOMEPAGE_CONTENT.metaDescription,
    focusKeyword: row.focus_keyword || DEFAULT_HOMEPAGE_CONTENT.focusKeyword,
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || DEFAULT_HOMEPAGE_CONTENT.ogTitle,
    ogDescription: row.og_description || DEFAULT_HOMEPAGE_CONTENT.ogDescription,
    ogImage: row.og_image || DEFAULT_HOMEPAGE_CONTENT.ogImage,
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  ratingValue: string;
  ratingCount: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_video, hero_gallery, hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      rating_value, rating_count, meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt}, ${data.heroVideo || ""}, ${JSON.stringify(data.heroGallery || [])}::jsonb,
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.ratingValue}, ${data.ratingCount},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_video = EXCLUDED.hero_video,
      hero_gallery = EXCLUDED.hero_gallery,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      rating_value = EXCLUDED.rating_value,
      rating_count = EXCLUDED.rating_count,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET theme_json = EXCLUDED.theme_json
  `;
}
