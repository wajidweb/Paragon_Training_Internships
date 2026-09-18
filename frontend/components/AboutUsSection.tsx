"use client";

import React from "react";

export default function AboutUsSection() {
  return (
    <div className="k2sc" id="about">
      <div className="benefits-container">
        <div className="benefits-header">
          <div className="section-label">ABOUT US</div>
          <h2 className="section-title section-title-tight">
            Empowering Careers Through <span className="title-desktop-break"><br /></span>International Student Mobility Excellence
          </h2>
          <p className="section-subtitle">At Paragon Global Internships (PGI), we believe internships are a cornerstone of student development. We provide invaluable opportunities to gain practical skills, industry knowledge, and a global perspective—all while experiencing Malta&apos;s rich culture firsthand.</p>
        </div>

        <div className="benefits-stats-bar">
          <div className="benefit-stat-item">
            <span className="benefit-stat-num">20+</span>
            <span className="benefit-stat-label">Years of Experience</span>
          </div>
          <div className="benefit-stat-item">
            <span className="benefit-stat-num">400+</span>
            <span className="benefit-stat-label">HEI Partners</span>
          </div>
          <div className="benefit-stat-item">
            <span className="benefit-stat-num">35,000+</span>
            <span className="benefit-stat-label">Successful Placements</span>
          </div>
          <div className="benefit-stat-item">
            <span className="benefit-stat-num">4,000+</span>
            <span className="benefit-stat-label">Partner Organizations</span>
          </div>
        </div>

        <div className="benefits-video-container" role="button" tabIndex={0} aria-label="Play video">
          <iframe
            className="benefits-video"
            src="https://player.vimeo.com/video/1183027097?autoplay=0&amp;muted=0&amp;title=0&amp;byline=0&amp;portrait=0"
            title="Your gateway to global career success in Malta"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="video-play-overlay">
            <div className="video-play-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 7.5v9l7-4.5z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="benefit-title">Extensive Placement Experience</h3>
            <p className="benefit-description">Over 35,000 successful work placements facilitated across 20 years of professional student mobility services.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="benefit-title">Quality Student Housing</h3>
            <p className="benefit-description">Fully furnished, modern, and fully equipped shared student accommodation located in the best business and social hubs in Malta.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="benefit-title">Continuous Placement Mentoring</h3>
            <p className="benefit-description">We offer dedicated work placement mentoring and monitoring of the student&apos;s progress, ensuring all professional needs are met.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="benefit-title">Expert Advisory Staff</h3>
            <p className="benefit-description">Highly qualified and multilingual staff members dedicated to helping and guiding both students and local business partners.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3 className="benefit-title">Bespoke Training &amp; Tuition</h3>
            <p className="benefit-description">We offer bespoke staff training courses in various professional categories, alongside certified English language courses.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <h3 className="benefit-title">Cultural &amp; Social Programmes</h3>
            <p className="benefit-description">A wide variety of exciting island activities, cultural tours, and social programs to enrich your learning stay in Malta.</p>
          </div>
        </div>
        <div className="section-cta">
          <a className="btn-primary" href="/apply-now">
            Get Started<span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
