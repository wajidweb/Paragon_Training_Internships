"use client";

import React from "react";
import Link from "next/link";

interface NavbarProps {
  theme: string;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  toggleTheme: () => void;
}

export default function Navbar({
  theme,
  isMobileOpen,
  setIsMobileOpen,
  toggleTheme,
}: NavbarProps) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link className="logo" href="/" aria-label="Paragon Global Internships Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Paragon Global Internships"
            className="logo-image"
            src="/cropped-Paragon-re-logo.png"
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>

          {/* Dropdown Menu: Support Services */}
          <div className="relative group inline-block">
            <button className="nav-link flex items-center gap-1 cursor-pointer focus:outline-none">
              <span>Support Services</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[var(--bg-nav)] backdrop-blur-md border border-[var(--border-color)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
                <a href="#accommodation" className="block px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-primary)] hover:text-[#C5A059] transition-all">ACCOMMODATION</a>
                <a href="#mentoring" className="block px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-primary)] hover:text-[#C5A059] transition-all">MENTORING</a>
                <a href="#cultural-programs" className="block px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-primary)] hover:text-[#C5A059] transition-all">SOCIAL CULTURAL PROGRAMS</a>
              </div>
            </div>
          </div>

          <a href="#sectors" className="nav-link">Sectors</a>
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#team" className="nav-link">Mentors</a>
        </div>

        <div className="nav-actions">
          <div className="theme-toggle-desktop">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="M4.93 4.93l1.41 1.41"></path>
                  <path d="M17.66 17.66l1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="M6.34 17.66l-1.41 1.41"></path>
                  <path d="M19.07 4.93l-1.41 1.41"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              )}
            </button>
          </div>

          <a href="/apply-now" className="nav-cta">
            Apply Now
          </a>

          <button
            className={`mobile-menu-btn ${isMobileOpen ? "is-open" : ""}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="menu-icon">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Links Dropdown */}
      <div className={`nav-links-mobile ${isMobileOpen ? "is-open" : ""} transition-all duration-300 ease-in-out`}>
        <a href="#about" className="nav-link text-center py-2 text-base font-semibold hover:text-[var(--primary)] transition-colors" onClick={() => setIsMobileOpen(false)}>About</a>
        
        {/* Support Services Mobile section */}
        <div className="flex flex-col items-center py-2 text-[var(--text-secondary)] border-y border-[var(--border-color)] bg-[var(--bg-primary)]/40 w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">Support Services</span>
          <a href="#accommodation" className="py-1 text-sm font-semibold hover:text-[#C5A059] transition-colors" onClick={() => setIsMobileOpen(false)}>ACCOMMODATION</a>
          <a href="#mentoring" className="py-1 text-sm font-semibold hover:text-[#C5A059] transition-colors" onClick={() => setIsMobileOpen(false)}>MENTORING</a>
          <a href="#cultural-programs" className="py-1 text-sm font-semibold hover:text-[#C5A059] transition-colors" onClick={() => setIsMobileOpen(false)}>SOCIAL CULTURAL PROGRAMS</a>
        </div>

        <a href="#sectors" className="nav-link text-center py-2 text-base font-semibold hover:text-[var(--primary)] transition-colors" onClick={() => setIsMobileOpen(false)}>Sectors</a>
        <a href="#programs" className="nav-link text-center py-2 text-base font-semibold hover:text-[var(--primary)] transition-colors" onClick={() => setIsMobileOpen(false)}>Programs</a>
        <a href="#testimonials" className="nav-link text-center py-2 text-base font-semibold hover:text-[var(--primary)] transition-colors" onClick={() => setIsMobileOpen(false)}>Testimonials</a>
        <a href="#team" className="nav-link text-center py-2 text-base font-semibold hover:text-[var(--primary)] transition-colors" onClick={() => setIsMobileOpen(false)}>Mentors</a>
        
        <div className="flex justify-center py-3">
          <button
            className="theme-toggle hover:scale-105 transition-transform"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.41 1.41"></path>
                <path d="M17.66 17.66l1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M6.34 17.66l-1.41 1.41"></path>
                <path d="M19.07 4.93l-1.41 1.41"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>
        </div>

        <a
          href="/apply-now"
          className="nav-cta-mobile text-center hover:opacity-90 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
}
