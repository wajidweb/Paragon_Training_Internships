"use client";

import { useEffect, useRef, useState } from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AsSeenOnSection from "@/components/AsSeenOnSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutUsSection from "@/components/AboutUsSection";
import SupportServicesSection from "@/components/SupportServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TeamSection from "@/components/TeamSection";
import PlacementSectorsSection from "@/components/PlacementSectorsSection";
import OpportunitiesGallerySection from "@/components/OpportunitiesGallerySection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

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
    setTimeout(() => {
      setTheme(savedTheme);
    }, 0);
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
      <TopBanner onLinkClick={() => setIsMobileOpen(false)} />
      <Navbar
        theme={theme}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        toggleTheme={toggleTheme}
      />
      <HeroSection videoRef={videoRef} />
      <AsSeenOnSection />
      <StatisticsSection />
      <TestimonialsSection testimonials={testimonials} handleVideoClick={handleVideoClick} />
      <AboutUsSection />
      <SupportServicesSection />
      <HowItWorksSection />
      <SuccessStoriesSection />
      <TeamSection />
      <PlacementSectorsSection />
      <OpportunitiesGallerySection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
