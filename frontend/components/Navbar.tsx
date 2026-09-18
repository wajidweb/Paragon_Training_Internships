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
