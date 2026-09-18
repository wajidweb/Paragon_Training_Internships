"use client";

import React from "react";

export default function HowItWorksSection() {
  return (
    <div className="j9la">
      <section className="how-section" id="how">
        <div className="how-container">
          <div className="how-header">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Step-by-Step to Global Success</h2>
            <p className="section-subtitle">Your simple three-step journey to a premium international work placement in Malta.</p>
          </div>
          <div className="how-steps">
            <div className="how-step">
              <div className="step-number">1</div>
              <div className="step-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Submit Your Application" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/how_1-BAJu01v_.png" />
              </div>
              <h3 className="step-title">Submit Your Application</h3>
              <p className="step-description">Apply online with your CV, academic background, and preferred career sector. Our advisors will match your profile with elite host organizations in Malta.</p>
            </div>
            <div className="how-step">
              <div className="step-number">2</div>
              <div className="step-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Confirm Your Placement &amp; Accommodation" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/how_2-B43KP-69.png" />
              </div>
              <h3 className="step-title">Confirm Your Placement &amp; Accommodation</h3>
              <p className="step-description">Review your tailored internship proposal, speak with your host company mentor, and secure your place in premium shared student apartments.</p>
            </div>
            <div className="how-step">
              <div className="step-number">3</div>
              <div className="step-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Arrive &amp; Thrive in Malta" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/how_3-lsV5A2jQ.png" />
              </div>
              <h3 className="step-title">Arrive &amp; Thrive in Malta</h3>
              <p className="step-description">Touch down in Malta with 24/7 coordinator support, participate in local socio-cultural activities, gain professional experience, and launch your global career.</p>
            </div>
          </div>
          <div className="section-cta">
            <a className="btn-primary" href="/apply-now">
              Get Started<span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
