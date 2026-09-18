"use client";

import React from "react";

export default function OpportunitiesGallerySection() {
  return (
    <div className="jbk8" id="programs">
      <section className="life-changing-section">
        <div className="life-changing-container">
          <div className="life-changing-content">
            <h2 className="life-changing-title">Preview Our <span className="hero-title-gradient">Programmes</span></h2>
            <p className="life-changing-description">Gain hands-on professional experience, premium shared living, and rich cultural immersion in Malta. Choose your pathway to global career success.</p>
          </div>
          <div className="life-changing-gallery">
            <button type="button" className="gallery-item gallery-item-1" aria-label="Play Student Placements Video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Student Placements" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/Mindset%20for%20Success-BntOjd1x.png" />
              <div className="gallery-play" aria-hidden="true">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                  <path d="M24 22v20l16-10-16-10z" fill="rgba(255,255,255,0.95)" />
                </svg>
              </div>
              <div className="gallery-caption" aria-hidden="true">
                <div className="gallery-caption-text">International Internships</div>
              </div>
            </button>
            <button type="button" className="gallery-item gallery-item-2" aria-label="Play Student Accommodation Video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Student Accommodation" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/Financial%20Success-wnQ0PmmO.png" />
              <div className="gallery-play" aria-hidden="true">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                  <path d="M24 22v20l16-10-16-10z" fill="rgba(255,255,255,0.95)" />
                </svg>
              </div>
              <div className="gallery-caption" aria-hidden="true">
                <div className="gallery-caption-text">Premium Accommodation</div>
              </div>
            </button>
            <button type="button" className="gallery-item gallery-item-3" aria-label="Play Staff Mobility Video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Staff Mobility" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/Ultimate%20Health-D44eJXgs.png" />
              <div className="gallery-play" aria-hidden="true">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                  <path d="M24 22v20l16-10-16-10z" fill="rgba(255,255,255,0.95)" />
                </svg>
              </div>
              <div className="gallery-caption" aria-hidden="true">
                <div className="gallery-caption-text">Staff Mobility & Job Shadowing</div>
              </div>
            </button>
          </div>
          <div className="preview-innercise-resource-links" aria-label="Paragon demo resource pages">
            <a className="preview-innercise-resource-link" href="#programs">Explore Work Placements</a>
            <a className="preview-innercise-resource-link" href="#programs">Explore Accommodations</a>
            <a className="preview-innercise-resource-link" href="#about">Explore Staff Mobility</a>
          </div>
          <div className="section-cta">
            <a className="btn-primary" href="/apply-now">Get Started <span>→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
