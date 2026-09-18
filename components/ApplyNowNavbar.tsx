"use client";

import React from "react";
import Link from "next/link";

interface ApplyNowNavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function ApplyNowNavbar({ theme, toggleTheme }: ApplyNowNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-nav)] border-b border-[var(--border-color)] py-4 px-6 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link className="logo" href="/" aria-label="PG Internships Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Paragon Global Internships"
            className="logo-image"
            src="/cropped-Paragon-re-logo.png"
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        <div className="flex items-center gap-6">
          <button
            className="theme-toggle p-2 rounded-xl border border-[var(--border-color)] hover:border-[#C5A059] hover:scale-105 transition-all text-[var(--text-primary)]"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>

          <Link href="/" className="text-sm font-bold text-[var(--text-secondary)] hover:text-[#C5A059] transition-colors flex items-center gap-1">
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
