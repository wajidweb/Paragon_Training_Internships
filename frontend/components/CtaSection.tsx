"use client";

import React from "react";

export default function CtaSection() {
  return (
    <div className="ke3l">
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Your Time Is <span className="hero-title-gradient">Now</span>
          </h2>
          <p className="cta-description">
            This is your moment to train your brain and create a life that matches what you&apos;re capable of.
          </p>
          <div className="cta-buttons">
            <a className="btn-primary" href="/apply-now">
              Get Started <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
