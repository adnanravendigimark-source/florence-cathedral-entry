"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ShieldCheckIcon, LockIcon } from "./icons";

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

function PinterestIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.225-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
    </svg>
  );
}

function EmailEnvelopeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-tuscan-300/80 bg-tuscan-100/90 text-navy-900 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Logo
              line1="DUOMO FLORENCE"
              line2="TICKETS & DOME CLIMB"
            />
            <p className="text-xs leading-relaxed text-navy-700">
              We help you experience the best of Florence Cathedral with verified passes, guaranteed Dome Climb access, and travel guides.
            </p>
            <div className="flex items-center gap-2.5 pt-2 text-navy-800">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-tuscan-300 bg-marble-50 text-navy-700 transition hover:border-navy-700 hover:text-navy-700"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-tuscan-300 bg-marble-50 text-navy-700 transition hover:border-navy-700 hover:text-navy-700"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-tuscan-300 bg-marble-50 text-navy-700 transition hover:border-navy-700 hover:text-navy-700"
              >
                <PinterestIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="/contact"
                aria-label="Contact Email"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-tuscan-300 bg-marble-50 text-navy-700 transition hover:border-navy-700 hover:text-navy-700"
              >
                <EmailEnvelopeIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/#tours" className="text-navy-700 transition hover:text-terracotta-600">
                  Duomo Tickets
                </Link>
              </li>
              <li>
                <Link href="/#dome-climb" className="text-navy-700 transition hover:text-terracotta-600">
                  Dome Climb Access
                </Link>
              </li>
              <li>
                <Link href="/#highlights" className="text-navy-700 transition hover:text-terracotta-600">
                  Cathedral Highlights
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-navy-700 transition hover:text-terracotta-600">
                  Florence Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-navy-700 transition hover:text-terracotta-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Tours */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
              Popular Passes
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/#tours" className="text-navy-700 transition hover:text-terracotta-600">
                  Brunelleschi Pass
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-navy-700 transition hover:text-terracotta-600">
                  Giotto Pass (Bell Tower)
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-navy-700 transition hover:text-terracotta-600">
                  Ghiberti Pass (Museum)
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-navy-700 transition hover:text-terracotta-600">
                  VIP Guided Dome Tour
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-navy-700 transition hover:text-terracotta-600">
                  Florence Super Combo
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
              Help &amp; Info
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/#faq" className="text-navy-700 transition hover:text-terracotta-600">
                  Duomo FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-navy-700 transition hover:text-terracotta-600">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-navy-700 transition hover:text-terracotta-600">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-navy-700 transition hover:text-terracotta-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-navy-700 transition hover:text-terracotta-600">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
              Florence Travel Club
            </p>
            <p className="mt-2 text-xs text-navy-700 leading-relaxed">
              Get tips, dome availability alerts, and exclusive offers for your Florence vacation.
            </p>
            {subscribed ? (
              <p className="mt-3 text-xs font-semibold text-terracotta-600">✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-3 space-y-2">
                <div className="flex rounded-lg border border-tuscan-300 bg-marble-50 overflow-hidden focus-within:border-navy-700">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full bg-transparent px-3 py-2 text-xs text-navy-900 placeholder-navy-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex items-center justify-center bg-navy-700 px-3 text-marble-50 transition hover:bg-navy-800"
                  >
                    →
                  </button>
                </div>
                <label className="flex items-start gap-1.5 text-[11px] text-navy-600 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 rounded border-tuscan-300 text-navy-700 focus:ring-navy-700"
                  />
                  <span>I agree to receive emails and updates.</span>
                </label>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-tuscan-300 pt-6 text-[11px] text-navy-700 sm:flex-row">
          <p>© {new Date().getFullYear()} Duomo Florence Tickets. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <LockIcon className="h-3.5 w-3.5 text-navy-700" />
              Secure Booking
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheckIcon className="h-3.5 w-3.5 text-navy-700" />
              Official Partner Verified
            </span>
            <span>Made with ❤️ in Florence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
