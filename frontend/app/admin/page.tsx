"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [, setTheme] = useState("light");
  const { login, initialize } = useAuthStore();

  useEffect(() => {
    initialize();

    // Theme initialization
    const savedTheme = localStorage.getItem("theme") || "light";
    setTimeout(() => {
      setTheme(savedTheme);
    }, 0);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Redirect to dashboard if already logged in
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (isLoggedIn === "true") {
      router.push("/admin/dashboard");
    }
  }, [router, initialize]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      router.push("/admin/dashboard");
    } else {
      setError(result.message || "Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black font-sans flex transition-colors duration-300 relative overflow-hidden">
      
      {/* LEFT COLUMN: Premium Login Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-between bg-gradient-to-tr from-[#FAF9F6] via-[#FAF9F6] to-[#FAF9F6]/40 min-h-screen relative z-10">
        
        {/* Top Header Logo */}
        <div className="flex justify-between items-center">
          <Link className="inline-flex items-center border border-black px-4 py-2 rounded-full hover:border-[#C5A059] transition-all bg-white/50 backdrop-blur-sm" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="PG Internships"
              src="/cropped-Paragon-re-logo.png"
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Center Credentials Box */}
        <div className="max-w-md w-full mx-auto my-auto py-12">
          <div className="mb-8 space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-black">
              Admin Login
            </h1>
            <p className="text-sm text-black font-semibold">
              Enter your admin credentials to access your corporate dashboard.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-semibold border border-red-150 mb-6">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2 pl-2" htmlFor="email">
                Email Address *
              </label>
              <input
                required
                type="email"
                id="email"
                className="w-full px-5 py-4 rounded-full border border-black focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-white text-black text-sm"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2 pl-2" htmlFor="password">
                Password *
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-5 py-4 rounded-full border border-black focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-white text-black text-sm pr-12"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-4 top-[44px] text-black hover:text-[#C5A059] focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 10.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" y1="2" x2="22" y2="22"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-[#C5A059] hover:bg-[#A18247] text-white font-extrabold rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Small Footer Signature (No terms/sign-in links as requested) */}
        <div className="text-left text-xs text-black font-semibold">
          © 2026 PG Internships. All rights reserved.
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Dashboard/Office Collage Image */}
      <div className="hidden lg:block lg:w-1/2 p-6 h-screen relative">
        <div className="w-full h-full rounded-[32px] overflow-hidden relative border border-[#E2E8F0] shadow-xl">
          
          {/* Background image of students collaborating */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80")',
            }}
          />
          
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-[#0B192C]/30" />

          {/* Close Circular Button link back to homepage */}
          <Link 
            href="/" 
            className="absolute top-6 right-6 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-xl font-bold shadow-md hover:scale-105 hover:bg-white transition-all text-[#0B192C] z-20"
            aria-label="Back to Homepage"
          >
            ✕
          </Link>

          {/* Elegant Text Overlay Block about PG Internships */}
          <div className="absolute bottom-10 left-10 right-10 bg-[#0B192C]/75 backdrop-blur-md p-8 border border-white/10 rounded-2xl text-white shadow-2xl z-10 max-w-xl">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
              Global Talent Mobility
            </span>
            <h3 className="text-2xl font-extrabold tracking-tight mb-2 text-white">
              PG INTERNSHIPS
            </h3>
            <p className="text-sm text-white leading-relaxed font-semibold">
              Empowering student and staff development through elite corporate placements and premium shared housing in Malta. Facilitating over 35,000 successful Erasmus+ and university mobilities across 20+ years of educational excellence.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
