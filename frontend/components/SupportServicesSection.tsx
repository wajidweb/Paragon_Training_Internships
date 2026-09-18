"use client";

import React from "react";

export default function SupportServicesSection() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] relative" id="support-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block">
            End-to-End Mobility Care
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Our Support Services
          </h2>
          <div className="h-1 w-20 bg-[#C5A059] mx-auto my-4" />
          <p className="text-base text-[var(--text-secondary)]">
            A secure, seamless, and deeply immersive experience. From elite housing to personalized professional growth and exciting island explorations, our team handles every detail.
          </p>
        </div>

        {/* 1. ACCOMMODATION FEATURE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-12 border-b border-[var(--border-color)]" id="accommodation">
          
          {/* Accommodation Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C5A059]/10 rounded-lg text-[#C5A059]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Accommodation That Suits Your Needs
            </h3>
            <p className="text-sm font-semibold uppercase text-[#C5A059] tracking-wider">
              A Home Away From Home in Malta
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              All our accommodations are carefully chosen to guarantee a comfortable, safe, and pleasant stay. Located across different key parts of Malta, we ensure maximum proximity to your host placement, local bus routes, pharmacies, and cultural hotspots.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              We provide students with detailed instructional amenity videos on arrival, backed by 24/7 dedicated local welfare support to address any questions immediately.
            </p>
            <div className="pt-2">
              <a
                href="/apply-now"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white text-xs font-extrabold rounded-md tracking-wider transition-all"
              >
                BOOK YOUR PLACEMENT &amp; STAY
              </a>
            </div>
          </div>

          {/* Accommodation Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Self-Catering Apartments */}
            <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-extrabold text-base text-[var(--text-primary)]">Self-Catering Apartments</h4>
                <span className="text-xs bg-[#C5A059]/15 text-[#C5A059] px-2 py-0.5 rounded font-extrabold uppercase">Ages 18+</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Standard co-living apartments located close to shops, bus terminals, and pharmacies. Consists of spacious shared bedrooms, fully equipped kitchens, dining areas, WiFi, TV, laundry appliances, weekly cleaning services, and professional maintenance.
              </p>
            </div>

            {/* Homestay Accommodation */}
            <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-extrabold text-base text-[var(--text-primary)]">Homestay Accommodation</h4>
                <span className="text-xs bg-[#C5A059]/15 text-[#C5A059] px-2 py-0.5 rounded font-extrabold uppercase">All Ages</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Live with carefully selected Maltese families for an authentic, immersive cultural experience. Available on half-board or full-board basis, offering sharing or single rooms. Perfect for practicing English conversational skills naturally at home.
              </p>
            </div>

            {/* Hotel Accommodation */}
            <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-extrabold text-base text-[var(--text-primary)]">Hotel Accommodation</h4>
                <span className="text-xs bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded font-extrabold uppercase">Ages 18+</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                BB, Half-Board, or Full-Board hotel stays tailored for short-term group mobility or lecturers. Early bookings are highly recommended, especially during high-season summer internship periods.
              </p>
            </div>

          </div>

        </div>

        {/* 2. MENTORING FEATURE ROW (Alternating) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-12 border-b border-[var(--border-color)]" id="mentoring">
          
          {/* Mentoring Visual Panel (Left on Desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm text-center space-y-3 flex flex-col items-center">
              <div className="text-[#C5A059] bg-[#C5A059]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="font-extrabold text-sm text-[var(--text-primary)]">1-on-1 Guidance</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">Weekly reviews and professional career mapping with Maltese corporate executives.</p>
            </div>
            
            <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm text-center space-y-3 flex flex-col items-center">
              <div className="text-[#C5A059] bg-[#C5A059]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 className="font-extrabold text-sm text-[var(--text-primary)]">24/7 Welfare Support</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">Dedicated hotline, local mentors, and immediate assistance for total peace of mind.</p>
            </div>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm text-center space-y-3 flex flex-col items-center">
              <div className="text-[#C5A059] bg-[#C5A059]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h4 className="font-extrabold text-sm text-[var(--text-primary)]">Learning Agreements</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">Strict compliance tracking to satisfy university and Erasmus+ quality credits.</p>
            </div>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm text-center space-y-3 flex flex-col items-center">
              <div className="text-[#C5A059] bg-[#C5A059]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h4 className="font-extrabold text-sm text-[var(--text-primary)]">Skill Assessments</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">Formal final evaluations, certification logs, and student mobility reporting.</p>
            </div>
          </div>

          {/* Mentoring Text (Right on Desktop) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C5A059]/10 rounded-lg text-[#C5A059]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Professional Mentoring &amp; Welfare
            </h3>
            <p className="text-sm font-semibold uppercase text-[#C5A059] tracking-wider">
              Guiding You Every Step of the Way
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Relocating to a new country for an internship can be a challenge. At Paragon Global Internships, we place heavy emphasis on our structured mentoring framework to build your confidence and capabilities.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              We match you with local industry mentors and academic coordinators who handle placement introductions, monitor task progress, and provide formal final evaluations. Our dedicated welfare team keeps check on student adjustment and provides 24/7 help.
            </p>
          </div>

        </div>

        {/* 3. SOCIAL CULTURAL PROGRAMS FEATURE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="cultural-programs">
          
          {/* Social Cultural Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C5A059]/10 rounded-lg text-[#C5A059]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.41 1.41"></path>
                <path d="M17.66 17.66l1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M6.34 17.66l-1.41 1.41"></path>
                <path d="M19.07 4.93l-1.41 1.41"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Social &amp; Cultural Programs
            </h3>
            <p className="text-sm font-semibold uppercase text-[#C5A059] tracking-wider">
              Discover the Jewels of the Mediterranean
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              A work placement in Malta without exploring our historic treasures would be incomplete! We believe your internship should be complemented with an extensive social program, giving you enhanced global networking and unforgettable memories.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The Maltese Islands are buzzing with historical sites, sandy lagoons, and modern coastal life. One minute you can be at Hagar Qim, immersed in megalithic temples older than the Egyptian Pyramids, and floating on the clear blue Mediterranean the next!
            </p>
          </div>

          {/* Social Cultural Activities Box */}
          <div className="lg:col-span-6 bg-[var(--bg-card)] p-8 rounded-lg border border-[var(--border-color)] shadow-sm space-y-6">
            <h4 className="font-extrabold text-lg text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#C5A059]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Scenic Tours &amp; Excursions Available</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Gozo Scenic Island Tour
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Mdina Silent City Walk
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Valletta UNESCO Capital Tour
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Blue Lagoon Boat Cruises
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Harbour &amp; Bastion Cruises
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Popeye Village Adventure
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Historic Treasure Hunts
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="text-[#C5A059] font-bold">✓</span> Team Paintballing &amp; Sports
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] italic leading-relaxed pt-2 border-t border-[var(--border-color)]">
              Paragon Global Internships organizes and handles all booking arrangements directly, ensuring a safe, guided, and unforgettable experience for student groups.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
