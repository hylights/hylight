"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Hylight"
            width={204}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://billing.stripe.com/p/login/28o6r18z98YL7aE8ww"
            className="hidden text-sm text-slate-200/80 hover:text-white sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Account
          </a>
          <Link
            href="/pricing"
            className="hidden items-center rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm shadow-sky-500/20 transition hover:bg-white md:inline-flex"
          >
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200/80 hover:bg-white/5 hover:text-white md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-white/5 bg-slate-950/95 transition-[grid-template-rows] duration-200 ease-out md:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-4 pb-6 sm:px-6" aria-label="Mobile navigation">
            <Link
              href="/projects"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200/90 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200/90 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200/90 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200/90 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://billing.stripe.com/p/login/28o6r18z98YL7aE8ww"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200/90 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Account
            </a>
            <Link
              href="/pricing"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
