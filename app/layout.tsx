import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paragonglobalinternships.eu"),
  title: "Paragon Global Internships | International Work Placements & Mobility in Malta",
  description: "Connect with world-class work placements, premium student accommodation, professional mentoring, and vibrant cultural experiences in Malta. Over 20 years of excellence.",
  keywords: "Paragon Global Internships, International Internships Malta, Work Placements Malta, Erasmus+ Malta, Student Accommodation Malta, Professional Training, Staff Mobility",
  openGraph: {
    title: "Paragon Global Internships | International Work Placements",
    description: "Connect with world-class work placements, premium student accommodation, professional mentoring, and cultural experiences in Malta.",
    images: [
      {
        url: "/attached_assets/hero-video/NG Homepage Video Still.png",
        width: 1200,
        height: 630,
        alt: "Paragon Global Internships Malta",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
