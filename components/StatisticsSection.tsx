"use client";

import React from "react";

export default function StatisticsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="section-title">
            Here is What Students and Universities Report After Partnering with Us
          </h2>
        </div>

        <div className="progress-bars">
          <div className="progress-item">
            <div className="progress-label-row">
              <span className="progress-label">I feel more confident in my professional and global capabilities</span>
              <span className="progress-percentage">98%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ "--target-width": "98%", "--delay": "0s" } as React.CSSProperties}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label-row">
              <span className="progress-label">Our university partners report exceptional student placement satisfaction</span>
              <span className="progress-percentage">98%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ "--target-width": "98%", "--delay": "0.15s" } as React.CSSProperties}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label-row">
              <span className="progress-label">I gained practical skills that directly improved my future job opportunities</span>
              <span className="progress-percentage">95%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ "--target-width": "95%", "--delay": "0.3s" } as React.CSSProperties}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label-row">
              <span className="progress-label">I had a highly enriching cultural and language experience in Malta</span>
              <span className="progress-percentage">93%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ "--target-width": "93%", "--delay": "0.45s" } as React.CSSProperties}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label-row">
              <span className="progress-label">I feel fully prepared to launch my international career</span>
              <span className="progress-percentage">73%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ "--target-width": "73%", "--delay": "0.6s" } as React.CSSProperties}></div>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <a href="/apply-now" className="btn-primary">
            Apply Now <span className="ml-1">→</span>
          </a>
        </div>

        <p className="stats-footer">
          Professional. Secure. Inspiring.
        </p>
      </div>
    </section>
  );
}
