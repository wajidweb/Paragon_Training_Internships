"use client";

import { RefObject } from "react";

interface HeroSectionProps {
  videoRef: RefObject<HTMLVideoElement | null>;
}

export default function HeroSection({ videoRef }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="hero-image-container">
        <video
          ref={videoRef}
          className="hero-bg-video"
          src="/BGVideo.mov"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        ></video>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-bg-poster opacity-0"
          alt=""
          aria-hidden="true"
          draggable="false"
          src="/attached_assets/hero-video/NG Homepage Video Still.png"
        />

        <div className="hero-content">
          <div className="hero-text-centered">
            <h1 className="hero-title">
              Launch Your Career With
              <br />
              <span className="hero-title-gradient">
                International Experience
              </span>
            </h1>

            <p className="hero-description">
              Gain real world experience, build valuable skills, discover new opportunities, and take your first step toward a successful international career.
            </p>

            <div className="hero-cta-group">
              <a className="btn-primary" href="/apply-now">
                Apply Now <span className="ml-1">→</span>
              </a>
            </div>

            <p className="hero-members">
              Join 35,000+ students and professionals worldwide
            </p>

            <a className="app-store-rating-pill" href="#about">
              <span className="app-store-rating-stars">
                ★★★★★
              </span>
              <span className="ml-2">
                20+ Years of Excellence in Student Mobility
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
