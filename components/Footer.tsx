import Link from "next/link";
import Logo from "./Logo";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TripadvisorIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className}>
      <circle cx="7" cy="12" r="3" />
      <circle cx="17" cy="12" r="3" />
      <circle cx="7" cy="12" r="1" fill="currentColor" />
      <circle cx="17" cy="12" r="1" fill="currentColor" />
      <path d="M12 8c-3 0-6 2-6 4 0 1 2 2 3 3l3 2 3-2c1-1 3-2 3-3 0-2-3-4-6-4z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B1B2B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
        {/* Top 5 Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Social (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo
              line1="FLORENCE"
              line2="— CATHEDRAL ENTRY —"
              theme="dark"
            />
            <p className="text-xs text-[#8A9BA8] leading-relaxed max-w-sm pt-1">
              Official Duomo tickets and tours. Skip the line, climb the Dome, and experience Florence from a whole new perspective.
            </p>
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-white hover:text-white hover:bg-white/10"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-white hover:text-white hover:bg-white/10"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-white hover:text-white hover:bg-white/10"
              >
                <TripadvisorIcon className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-white hover:text-white hover:bg-white/10"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#8A9BA8]">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="transition hover:text-white">
                  Duomo Tickets
                </Link>
              </li>
              <li>
                <Link href="/#dome-climb" className="transition hover:text-white">
                  Dome Climb
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="transition hover:text-white">
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Top Experiences (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Top Experiences
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#8A9BA8]">
              <li>
                <Link href="/#tours" className="transition hover:text-white">
                  Duomo &amp; Dome Climb
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="transition hover:text-white">
                  Duomo Complex Tickets
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="transition hover:text-white">
                  Guided Tour with Dome
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="transition hover:text-white">
                  Giotto&apos;s Bell Tower Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Help (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Help
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#8A9BA8]">
              <li>
                <Link href="/#faq" className="transition hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  Booking Info
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Us (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-[#8A9BA8]">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 text-white/80">✉</span>
                <a href="mailto:info@florencecathedralentry.com" className="hover:text-white transition break-all">
                  info@florencecathedralentry.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 text-white/80">📞</span>
                <a href="tel:+3905512345678" className="hover:text-white transition">
                  +39 055 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 text-white/80">📍</span>
                <span>
                  Piazza del Duomo,<br />50122 Firenze FI, Italy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#8A9BA8]">
          <p>© 2024 Florence Cathedral Entry. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-400">♥</span> in Florence
          </p>
        </div>
      </div>
    </footer>
  );
}
