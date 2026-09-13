"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const testimonials = [
    { name: "Yinka E.", src: "https://www.myneurogym.com/power-landing/assets/Yinka%20Ewuola%2010-15%20sec%20video-01FimPZP.mp4" },
    { name: "Tarek S.", src: "https://www.myneurogym.com/power-landing/assets/Terek%20Statico%2010-15%20sec-lyivu4n2.mp4" },
    { name: "Mike G.", src: "https://www.myneurogym.com/power-landing/assets/Mike%20Goodrich%2010-15%20sec-Beu79hd8.mp4" },
    { name: "Matt P.", src: "https://www.myneurogym.com/power-landing/assets/Matt%20Philips%2010-15%20seconds-7wYlJRyP.mp4" },
    { name: "Kaz I.", src: "https://www.myneurogym.com/power-landing/assets/Kaz%20Iso%2010-15%20seconds-BbyFKHT4.mp4" },
    { name: "Kay R.", src: "https://www.myneurogym.com/power-landing/assets/kay%20roshae%2010-15%20seconds-DVFbVjx8.mp4" },
    { name: "Hajo H.", src: "https://www.myneurogym.com/power-landing/assets/Hajo%20Horst%2010-15%20seconds-BBumR3Na.mp4" },
    { name: "Grace R.", src: "https://www.myneurogym.com/power-landing/assets/Grace%20Reynolds%2010-15%20seconds-vvgmyFMu.mp4" },
    { name: "Emily B.", src: "https://www.myneurogym.com/power-landing/assets/Emily%20Brackett%2010-15%20seconds-Dk6lJcM0.mp4" },
    { name: "Animal A.", src: "https://www.myneurogym.com/power-landing/assets/Alisha%20Barnes%2010-15%20seconds-CQT3t-t_.mp4" },
    { name: "Danny M.", src: "https://www.myneurogym.com/power-landing/assets/Danny%20Morel%2010-15%20seconds-bJLNJXFx.mp4" },
    { name: "Angela G.", src: "https://www.myneurogym.com/power-landing/assets/Angela%20Giampolo%2010-15%20sec-aqcs7551.mp4" },
    { name: "Tracy O.", src: "https://www.myneurogym.com/power-landing/assets/Tracy%20O'Rourke%20Clip%2010-15%20seconds-BvfPYYO9.mp4" },
    { name: "Max P.", src: "https://www.myneurogym.com/power-landing/assets/Max%20Piccinini%2010-15%20Seconds-BvNjUS8W.mp4" },
    { name: "Mark L.", src: "https://www.myneurogym.com/power-landing/assets/Mark%20Lack%2010-15%20seconds-BjOo4OAC.mp4" },
    { name: "Marco M.", src: "https://www.myneurogym.com/power-landing/assets/Marco%20Moutinho%2010-15%20seconds-CfaZ9L5H.mp4" },
    { name: "Caroline S.", src: "https://www.myneurogym.com/power-landing/assets/Caroline%20Sanderson%2010-15%20Seconds-WHjRczs2.mp4" },
    { name: "Carl H.", src: "https://www.myneurogym.com/power-landing/assets/Carl%20Harvey%2010-15%20seconds-BhtIN4rm.mp4" },
    { name: "Ari W.", src: "https://www.myneurogym.com/power-landing/assets/Ari%20Whitten%2010-15%20seconds-BSgm1meK.mp4" },
    { name: "Andrew W.", src: "https://www.myneurogym.com/power-landing/assets/Andrew%20Wilson%2010-15%20seconds-C-n5N8MA.mp4" },
    { name: "Niels T.", src: "https://www.myneurogym.com/power-landing/assets/Niels%20Troost%2010-15%20seconds-Ci1uOcmF.mp4" }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Bulletproof video autoplay and repetition handler supporting both browsers and JSDOM test environments
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      try {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined && typeof playPromise.catch === "function") {
          playPromise.catch((err) => {
            console.warn("Autoplay was prevented by browser policy:", err);
          });
        }
      } catch (err) {
        console.warn("Autoplay play trigger failed:", err);
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    try {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined && typeof playPromise.catch === "function") {
          playPromise.catch((err) => console.log("Video play prevented:", err));
        }
      } else {
        video.pause();
      }
    } catch (err) {
      console.warn("Video interaction failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* 1. TOP CROWDFUNDING BANNER */}
      <div className="top-banner">
        <div className="top-banner-content">
          <span>
            Erasmus+ Work Placement & Staff Mobility funding is now active. Learn more about how to participate
          </span>
          <a
            href="#contact-us"
            onClick={() => setIsMobileOpen(false)}
          >
            Here
          </a>
        </div>
      </div>

      {/* 2. FLOATING NAVBAR */}
      <nav className="nav">
        <div className="nav-container">
          <a className="logo" href="/" aria-label="Paragon Global Internships Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Paragon Global Internships"
              className="logo-image"
              src="/cropped-Paragon-re-logo.png"
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
            />
          </a>

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

            <a
              href="#login"
              className="nav-login"
            >
              Log in
            </a>

            <a
              href="#contact-us"
              className="nav-cta"
            >
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
            href="#login"
            className="nav-login-mobile text-center hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => setIsMobileOpen(false)}
          >
            Log in
          </a>
          <a
            href="#contact-us"
            className="nav-cta-mobile text-center hover:opacity-90 transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-image-container">
          <video
            ref={videoRef}
            className="hero-bg-video"
            src="https://vjs.zencdn.net/v/oceans.mp4"
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
                <a
                  className="btn-primary"
                  href="#contact-us"
                >
                  Apply Now <span className="ml-1">→</span>
                </a>
              </div>

              <p className="hero-members">
                Join 35,000+ students and professionals worldwide
              </p>

              <a
                className="app-store-rating-pill"
                href="#about"
              >
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

      {/* 4. AS SEEN ON SECTION */}
      <section className="as-seen-on-section">
        <div className="as-seen-on-container">
          <div className="section-label">
            TRUSTED BY OVER 400 HIGHER EDUCATION INSTITUTIONS AND 4,000 GLOBAL PARTNERS:
          </div>
          <div className="sp-marquee" aria-hidden="true">
            <div className="sp-viewport">
              <div className="sp-track" style={{ width: "3178px", animation: "spScroll 31s linear infinite" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="sp-img sp-a"
                  alt=""
                  src="/attached_assets/logo@3x.png"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="sp-img sp-b"
                  alt=""
                  aria-hidden="true"
                  src="/attached_assets/logo@3x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATISTICS SECTION */}
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
            <a href="#contact-us" className="btn-primary">
              Apply Now <span className="ml-1">→</span>
            </a>
          </div>

          <p className="stats-footer">
            Professional. Secure. Inspiring.
          </p>
        </div>
      </section>

      {/* 6. SOCIAL PROOF / TESTIMONIALS SECTION */}
      <div className="pyc8">
        <section className="social-proof-section">
          <div className="social-proof-container">
            <div className="social-proof-header">
              <h2 className="section-title">Real People. Real Results.</h2>
              <p className="section-subtitle">Real stories from students and professionals who advanced their careers, gained international experience, and unlocked global opportunities in Malta.</p>
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
              <a className="btn-primary" href="#contact-us">
                Apply Now <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

       {/* NEW PARAGON INTERNSHIPS ABOUT US GRID SECTION */}
      <div className="k2sc" id="about">
        <div className="benefits-container">
          <div className="benefits-header">
            <div className="section-label">ABOUT US</div>
            <h2 className="section-title section-title-tight">
              Empowering Careers Through <span className="title-desktop-break"><br /></span>International Student Mobility Excellence
            </h2>
            <p className="section-subtitle">At Paragon Global Internships (PGI), we believe internships are a cornerstone of student development. We provide invaluable opportunities to gain practical skills, industry knowledge, and a global perspective—all while experiencing Malta's rich culture firsthand.</p>
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
              <p className="benefit-description">We offer dedicated work placement mentoring and monitoring of the student's progress, ensuring all professional needs are met.</p>
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
            <a className="btn-primary" href="#contact-us">
              Get Started<span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* NEW PARAGON INTERNSHIPS HOW IT WORKS SECTION */}
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
              <a className="btn-primary" href="#contact-us">
                Get Started<span>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* NEW PARAGON SUCCESS STORIES GRID SECTION */}
      <div className="q3qi">
        <section className="testimonials-section" id="testimonials">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <div className="section-label">SUCCESS STORIES</div>
              <h2 className="section-title">Shatter Limitations &amp; Transform Your Career</h2>
              <p className="section-subtitle">What happens when universities, students, and coordinators partner with Paragon Global Internships</p>
            </div>
            <div className="testimonial-featured">
              <p className="testimonial-quote">"I was incredibly nervous about undertaking my first internship abroad. Paragon Global Internships matched me with an outstanding logistics partner in Valletta and supported me with premium shared housing. Following my placement, I was offered a full-time contract, which launched my global career!"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Kathrin R." loading="lazy" src="https://www.myneurogym.com/attached_assets/testimonials/quotes/Photos_Kay%20Richae_2023.jpg" />
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Kathrin R.</div>
                  <div className="testimonial-role">Erasmus+ Business Intern from Germany</div>
                </div>
              </div>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-card-text">"At 23, I was unsure how to enter the international tech market. Securing a software engineering placement through Paragon in Malta gave me hands-on development experience and boosted my confidence. I returned home with a portfolio that immediately landed me my dream job!"</p>
                <div className="testimonial-card-author">
                  <div className="testimonial-card-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Stefan E." loading="lazy" src="https://www.myneurogym.com/attached_assets/testimonials/quotes/Photo_Sefika%20Evliya_2021.jpeg" />
                  </div>
                  <div>
                    <div className="testimonial-card-name">Stefan E.</div>
                    <div className="testimonial-card-role">IT &amp; Software Engineering Intern from Austria</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-card-text">"Participating in Paragon's staff mobility and job-shadowing program in St. Julian's was career-defining. I gained deep insights into Mediterranean higher education frameworks, expanded our institutional networking, and brought invaluable strategies back to my university."</p>
                <div className="testimonial-card-author">
                  <div className="testimonial-card-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Fiona M." loading="lazy" src="https://www.myneurogym.com/attached_assets/testimonials/quotes/Fiona%20Nichols.jpeg" />
                  </div>
                  <div>
                    <div className="testimonial-card-name">Fiona M.</div>
                    <div className="testimonial-card-role">Staff Mobility Participant from Ireland</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-card-text">"Coordinating student mobilities for our university was stressful before we partnered with Paragon. Their team handles learning agreements, premium housing, and placement monitoring flawlessly. Our students return with outstanding feedback every semester."</p>
                <div className="testimonial-card-author">
                  <div className="testimonial-card-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Gianluca L." loading="lazy" src="https://www.myneurogym.com/attached_assets/testimonials/quotes/Photo_Gia%20Lili_2021.jpeg" />
                  </div>
                  <div>
                    <div className="testimonial-card-name">Gianluca L.</div>
                    <div className="testimonial-card-role">Erasmus+ Coordinator from Italy</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-card-text">"Paragon’s placement process is outstanding. They consistently match us with high-caliber, motivated European interns who bring fresh skills to our team. Approximately 30% of their placed students end up joining us full-time."</p>
                <div className="testimonial-card-author">
                  <div className="testimonial-card-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Nathan M." loading="lazy" src="https://www.myneurogym.com/attached_assets/testimonials/quotes/Nate%20Morris%20-%20KY%20Shoot%20(2).jpg" />
                  </div>
                  <div>
                    <div className="testimonial-card-name">Nathan M.</div>
                    <div className="testimonial-card-role">Host Company HR Director, Malta Tech Solutions</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-card-text">"Paragon arranged my placement with an international bank in Sliema and provided a certified Business English course alongside it. Communicating daily in English with financial professionals transformed my language fluency and paved my way to a global career."</p>
                <div className="testimonial-card-author">
                  <div className="testimonial-card-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Billie J." loading="lazy" src="https://www.myneurogym.com/attached_assets/testimonials/quotes/Billie%20Bernard%20Josey%202.jpg" />
                  </div>
                  <div>
                    <div className="testimonial-card-name">Billie J.</div>
                    <div className="testimonial-card-role">Finance &amp; Banking Intern from Spain</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-card-text">"We spent three weeks in Malta participating in Paragon's professional training and cultural immersion courses. The local coordinators organized incredible Valletta tours and socio-cultural activities. It was the perfect blend of professional growth and island adventure."</p>
                <div className="testimonial-card-author">
                  <div className="testimonial-card-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Jonathan &amp; Clara K." loading="lazy" src="https://www.myneurogym.com/attached_assets/testimonials/quotes/John%20and%20Heather%20Kikel.png" />
                  </div>
                  <div>
                    <div className="testimonial-card-name">Jonathan &amp; Clara K.</div>
                    <div className="testimonial-card-role">Adult Education Participants from Denmark</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-cta">
              <a className="btn-primary" href="#contact-us">
                Get Started<span>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* NEW PARAGON TEAM & ADVISORY BOARD SECTION */}
      <div className="s0vi">
        <section className="team-section" id="team">
          <div className="team-container">
            <div className="team-header">
              <div className="section-label">Your Mentors</div>
              <h2 className="section-title">World-Class Experts</h2>
              <p className="section-subtitle">Learn from the best minds in international education, placement mentoring, and professional training in Malta</p>
            </div>
            <div className="team-scroll">
              <div className="team-track">
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Dr. Maria Borg" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-1-CTiYVY6g.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Dr. Maria Borg</h3>
                      <div className="team-role">Head of Corporate Placements</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="John Attard" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-2-DmyykXsS.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">John Attard</h3>
                      <div className="team-role">Professional Development Coach</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Sarah Galea" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-3-CmmZNff-.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Sarah Galea</h3>
                      <div className="team-role">Student Wellbeing Advisor</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Elena Vassallo" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-4-DXpBFc8M.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Elena Vassallo</h3>
                      <div className="team-role">Housing &amp; Student Welfare Lead</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Mark Camilleri" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-5-BXBW03ak.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Mark Camilleri</h3>
                      <div className="team-role">Business English Coach</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Dr. David Zammit" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-6-COtIdvPX.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Dr. David Zammit</h3>
                      <div className="team-role">Global Career Director</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Lara Xuereb" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-7-DkVC6P-Q.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Lara Xuereb</h3>
                      <div className="team-role">Erasmus+ Institutional Liaison</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Luca Farrugia" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-8-zyCGfn69.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Luca Farrugia</h3>
                      <div className="team-role">Socio-Cultural Event Manager</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Dr. Antoinette Caruana" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-9-Ba6B4ict.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Dr. Antoinette Caruana</h3>
                      <div className="team-role">Enterprise Relations Lead</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Prof. Saviour Aquilina" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-10-_4RdxLwB.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Prof. Saviour Aquilina</h3>
                      <div className="team-role">Academic Training Specialist</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Rebecca Debono" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-11-Sl2JCztU.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Rebecca Debono</h3>
                      <div className="team-role">Adult Education Coordinator</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Matthew Scicluna" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-12-DIMciH_Y.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Matthew Scicluna</h3>
                      <div className="team-role">Technical Placement Coordinator</div>
                    </div>
                  </div>
                </div>
                {/* DUPLICATE COPIES FOR INFINITE MARQUEE */}
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Dr. Maria Borg" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-1-CTiYVY6g.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Dr. Maria Borg</h3>
                      <div className="team-role">Head of Corporate Placements</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="John Attard" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-2-DmyykXsS.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">John Attard</h3>
                      <div className="team-role">Professional Development Coach</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Sarah Galea" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-3-CmmZNff-.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Sarah Galea</h3>
                      <div className="team-role">Student Wellbeing Advisor</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Elena Vassallo" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-4-DXpBFc8M.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Elena Vassallo</h3>
                      <div className="team-role">Housing &amp; Student Welfare Lead</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Mark Camilleri" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-5-BXBW03ak.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Mark Camilleri</h3>
                      <div className="team-role">Business English Coach</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Dr. David Zammit" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-6-COtIdvPX.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Dr. David Zammit</h3>
                      <div className="team-role">Global Career Director</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Lara Xuereb" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-7-DkVC6P-Q.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Lara Xuereb</h3>
                      <div className="team-role">Erasmus+ Institutional Liaison</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Luca Farrugia" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-8-zyCGfn69.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Luca Farrugia</h3>
                      <div className="team-role">Socio-Cultural Event Manager</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Dr. Antoinette Caruana" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-9-Ba6B4ict.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Dr. Antoinette Caruana</h3>
                      <div className="team-role">Enterprise Relations Lead</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Prof. Saviour Aquilina" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-10-_4RdxLwB.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Prof. Saviour Aquilina</h3>
                      <div className="team-role">Academic Training Specialist</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Rebecca Debono" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-11-Sl2JCztU.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Rebecca Debono</h3>
                      <div className="team-role">Adult Education Coordinator</div>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-card">
                    <div className="team-image-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Matthew Scicluna" className="team-image" loading="lazy" src="https://www.myneurogym.com/power-landing/assets/expert-12-DIMciH_Y.png" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">Matthew Scicluna</h3>
                      <div className="team-role">Technical Placement Coordinator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-cta">
              <a className="btn-primary" href="#contact-us">Get Started<span>→</span></a>
            </div>
          </div>
        </section>
      </div>

       {/* NEW PARAGON INTERNSHIPS PLACEMENT SECTORS SECTION */}
      <div className="kp49 mt-6" id="sectors">
        <section className="ai-experts-section" id="ai-coaches-neurogym">
          <div className="ai-experts-container">
            <div className="ai-experts-content">
              <div className="ai-experts-number">
                <span>15+</span>
              </div>
              <div className="ai-experts-label">Placement Sectors</div>
              <p className="ai-experts-description">Hands-on corporate placements matched precisely to your academic background, career interests, and skills across Malta's fastest-growing industries.</p>
            </div>
            <div className="ai-experts-features">
              <div className="ai-feature">
                <span className="ai-feature-title">Corporate Alignment</span>
                <span className="ai-feature-desc">Sectors aligned with Malta's thriving business hubs</span>
              </div>
              <div className="ai-feature">
                <span className="ai-feature-title">Custom Pairing</span>
                <span className="ai-feature-desc">Internships matched to your academic background</span>
              </div>
              <div className="ai-feature">
                <span className="ai-feature-title">Erasmus+ Ready</span>
                <span className="ai-feature-desc">Supporting ECTS learning agreements</span>
              </div>
              <div className="ai-feature">
                <span className="ai-feature-title">Real Experience</span>
                <span className="ai-feature-desc">Hands-on practical projects with expert tutors</span>
              </div>
            </div>
            <div className="ai-coaches-scroll">
              <div className="ai-coaches-track">
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Business Admin</div>
                    <div className="ai-coach-title">Business, Management &amp; HR</div>
                    <div className="ai-coach-description">Placements in human resources, logistics, accounting, and general operations across Valletta.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Information Tech</div>
                    <div className="ai-coach-title">IT &amp; Software Engineering</div>
                    <div className="ai-coach-description">Hands-on software development, IT support, database systems, and mobile app design.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Digital Media</div>
                    <div className="ai-coach-title">Marketing, SEO &amp; Copywriting</div>
                    <div className="ai-coach-description">Placements focusing on social media management, brand strategy, SEO, and copywriting.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Tourism</div>
                    <div className="ai-coach-title">Tourism &amp; Event Management</div>
                    <div className="ai-coach-description">Work with elite hotels, tourism organizations, and destination planners in Sliema.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="18" cy="18" r="3" />
                      <line x1="3" y1="21" x2="21" y2="3" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Engineering</div>
                    <div className="ai-coach-title">Engineering &amp; Architecture</div>
                    <div className="ai-coach-description">Internships with local mechanical, civil, and structural engineering firms.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Finance</div>
                    <div className="ai-coach-title">Finance, Banking &amp; Advisory</div>
                    <div className="ai-coach-description">Boutique accounting services, tax assistance, and banking operations in Sliema.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">NGOs &amp; Civil</div>
                    <div className="ai-coach-title">NGOs &amp; Non-Profits</div>
                    <div className="ai-coach-description">Social advocacy, public administration, and non-profit logistics placements.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Education</div>
                    <div className="ai-coach-title">Healthcare &amp; Education Support</div>
                    <div className="ai-coach-description">Academic administrative support and language tutoring in Maltese schools.</div>
                  </div>
                </div>
                {/* DUPLICATES FOR MARQUEE INFINITE SCROLL */}
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Business Admin</div>
                    <div className="ai-coach-title">Business, Management &amp; HR</div>
                    <div className="ai-coach-description">Placements in human resources, logistics, accounting, and general operations across Valletta.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Information Tech</div>
                    <div className="ai-coach-title">IT &amp; Software Engineering</div>
                    <div className="ai-coach-description">Hands-on software development, IT support, database systems, and mobile app design.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Digital Media</div>
                    <div className="ai-coach-title">Marketing, SEO &amp; Copywriting</div>
                    <div className="ai-coach-description">Placements focusing on social media management, brand strategy, SEO, and copywriting.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Tourism</div>
                    <div className="ai-coach-title">Tourism &amp; Event Management</div>
                    <div className="ai-coach-description">Work with elite hotels, tourism organizations, and destination planners in Sliema.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="18" cy="18" r="3" />
                      <line x1="3" y1="21" x2="21" y2="3" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Engineering</div>
                    <div className="ai-coach-title">Engineering &amp; Architecture</div>
                    <div className="ai-coach-description">Internships with local mechanical, civil, and structural engineering firms.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Finance</div>
                    <div className="ai-coach-title">Finance, Banking &amp; Advisory</div>
                    <div className="ai-coach-description">Boutique accounting services, tax assistance, and banking operations in Sliema.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">NGOs &amp; Civil</div>
                    <div className="ai-coach-title">NGOs &amp; Non-Profits</div>
                    <div className="ai-coach-description">Social advocacy, public administration, and non-profit logistics placements.</div>
                  </div>
                </div>
                <div className="ai-coach-card">
                  <div className="ai-coach-image-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px", background: "rgba(255, 255, 255, 0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div className="ai-coach-body">
                    <div className="ai-coach-name">Education</div>
                    <div className="ai-coach-title">Healthcare &amp; Education Support</div>
                    <div className="ai-coach-description">Academic administrative support and language tutoring in Maltese schools.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-cta">
              <a className="btn-primary" href="#contact-us">Get Started<span>→</span></a>
            </div>
          </div>
        </section>
      </div>

      {/* NEW OPPORTUNITIES GALLERY SECTION */}
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
              <a className="btn-primary" href="#contact-us">Get Started <span>→</span></a>
            </div>
          </div>
        </section>
      </div>

      {/* NEW FAQ SECTION */}
      <div className="u8kd imar">
        <section className="home-faq-section" aria-labelledby="home-faq-title">
          <div className="home-faq-container">
            <div className="home-faq-header">
              <div className="section-label">FAQ</div>
              <h2 className="section-title" id="home-faq-title">Frequently Asked Questions About Paragon Global Internships</h2>
              <p className="section-subtitle">Clear answers about Paragon Global Internships, work placements, student accommodation, and programs in Malta.</p>
            </div>
            <div className="home-faq-list">
              <article className="home-faq-item">
                <h3>What is Paragon Global Internships?</h3>
                <p>Paragon Global Internships (PGI) is a Malta-based international mobility and professional development organization with more than 20 years of experience. We help students, graduates, and professionals find structured internship and work placement opportunities in Malta.</p>
              </article>
              <article className="home-faq-item">
                <h3>What services does PGI provide?</h3>
                <p>We offer end-to-end support including tailormade internship placements, premium student accommodation, English language training, dedicated placement mentoring, and enriching socio-cultural activities around Malta.</p>
              </article>
              <article className="home-faq-item">
                <h3>Does PGI support Erasmus+ and University partnerships?</h3>
                <p>Yes! PGI has an extensive network of 400+ higher education institutions and supports Erasmus+ coordinators, international officers, and university representatives with student mobility, job shadowing, and custom training programmes.</p>
              </article>
              <article className="home-faq-item">
                <h3>Who are PGI's programmes designed for?</h3>
                <p>Our programmes are tailored for European and international students, recent graduates, young professionals, academic staff, deans, teachers, and lecturers seeking professional growth or staff mobility.</p>
              </article>
              <article className="home-faq-item">
                <h3>Does PGI offer paid internships?</h3>
                <p>Yes, we facilitate paid internship opportunities with host companies in Malta for students completing long-term work placements of more than four months.</p>
              </article>
              <article className="home-faq-item">
                <h3>What are the career benefits of a PGI placement?</h3>
                <p>Beyond real-world industry experience and cultural immersion, approximately 30% of students placed by PGI receive a direct job offer from their host organization following their placement.</p>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* NEW CTA SECTION */}
      <div className="ke3l">
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">
              Your Time Is <span className="hero-title-gradient">Now</span>
            </h2>
            <p className="cta-description">
              This is your moment to train your brain and create a life that matches what you're capable of.
            </p>
            <div className="cta-buttons">
              <a className="btn-primary" href="https://www.myneurogym.com/neurofitness-assessment">
                Get Started <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 7. FOOTER SECTION */}
      <div className="d6uh" id="contact-us">
        <footer className="footer">
          <div className="footer-hero-logo">
            <span className="footer-hero-text">PARAGON</span>
          </div>

          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-brand">
                <p className="footer-description">
                  Empowering students, graduates, and professionals worldwide to unlock their potential, gain elite international experience, and build successful careers in Malta.
                </p>
                <div className="footer-social">
                  <a href="https://www.instagram.com/paragon_global_internships/" className="footer-social-link" aria-label="Paragon Global Internships on Instagram" target="_blank" rel="noopener noreferrer">IG</a>
                  <a href="https://www.youtube.com" className="footer-social-link" aria-label="Paragon Global Internships on YouTube" target="_blank" rel="noopener noreferrer">▶</a>
                  <a href="https://x.com" className="footer-social-link" aria-label="Paragon Global Internships on X" target="_blank" rel="noopener noreferrer">𝕏</a>
                  <a href="https://www.facebook.com/ParagonGlobalInternships/" className="footer-social-link" aria-label="Paragon Global Internships on Facebook" target="_blank" rel="noopener noreferrer">f</a>
                  <a href="https://www.linkedin.com/company/paragon-global-internships" className="footer-social-link" aria-label="Paragon Global Internships on LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
                </div>
              </div>

              <div className="footer-column">
                <div className="footer-column-title">Our Programs</div>
                <div className="footer-links">
                  <a href="#programs" className="footer-link">Internships in Malta</a>
                  <a href="#programs" className="footer-link">Paid Internships</a>
                  <a href="#programs" className="footer-link">Staff Mobility</a>
                  <a href="#about" className="footer-link">Adult Education</a>
                </div>
              </div>

              <div className="footer-column">
                <div className="footer-column-title">Services</div>
                <div className="footer-links">
                  <a href="#programs" className="footer-link">Student Accommodation</a>
                  <a href="#about" className="footer-link">English Language Training</a>
                  <a href="#about" className="footer-link">Socio-Cultural Activities</a>
                  <a href="#about" className="footer-link">Personalized Placement</a>
                </div>
              </div>

              <div className="footer-column">
                <div className="footer-column-title">Company</div>
                <div className="footer-links">
                  <a href="#about" className="footer-link">About Us</a>
                  <a href="#sectors" className="footer-link">Our Sectors</a>
                  <a href="#testimonials" className="footer-link">Success Stories</a>
                  <a href="#team" className="footer-link">Mentors &amp; Advisors</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                © 2026 Paragon Global Internships. All rights reserved.
              </div>
              <div className="footer-legal">
                <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
                <a href="#terms" className="footer-legal-link">Terms of Service</a>
                <a href="#refund" className="footer-legal-link">Refund Policy</a>
                <a href="#cookies" className="footer-legal-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
