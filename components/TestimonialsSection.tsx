"use client";

import React from "react";

interface Testimonial {
  name: string;
  src: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  handleVideoClick: (e: React.MouseEvent<HTMLVideoElement>) => void;
}

export default function TestimonialsSection({
  testimonials,
  handleVideoClick,
}: TestimonialsSectionProps) {
  return (
    <div className="pyc8">
      <section className="social-proof-section">
        <div className="social-proof-container">
          <div className="social-proof-header">
            <h2 className="section-title">Real People. Real Results.</h2>
            <p className="section-subtitle">
              Real stories from students and professionals who advanced their careers, gained international experience, and unlocked global opportunities in Malta.
            </p>
          </div>

          <div className="social-proof-scroll">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="social-proof-item" key={index}>
                <div className="social-proof-card">
                  <div className="social-proof-video-container">
                    <video
                      className="social-proof-video"
                      src={item.src}
                      loop
                      playsInline
                      preload="metadata"
                      onClick={handleVideoClick}
                    ></video>
                    <div className="social-proof-play">▶</div>
                    <div className="social-proof-watch-badge">Watch</div>
                  </div>
                  <div className="social-proof-content">
                    <div className="social-proof-handle">{item.name}</div>
                    <div className="social-proof-badge">
                      <span>✓</span>PGI Intern
                    </div>
                  </div>
                  <div className="social-proof-glow"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <a className="btn-primary" href="/apply-now">
              Apply Now <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
