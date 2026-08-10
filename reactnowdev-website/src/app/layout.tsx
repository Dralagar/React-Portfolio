import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Uses the system font stack defined in globals.css by default (works
// offline / behind restrictive proxies with zero setup). To use a
// Google Font instead (e.g. Inter), swap in next/font/google here:
//
//   import { Inter } from "next/font/google";
//   const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
//
// then add `inter.variable` to the <html> className below.

export const metadata: Metadata = {
  title: {
    default: "React Now Dev — Digital Solutions for East Africa",
    template: "%s | React Now Dev",
  },
  description:
    "React Now Dev is a Kenya-based digital consultancy delivering websites, SEO/GEO, hosting, and communications support for businesses, refugee-led organisations, and enterprises across Kenya, Uganda, and South Sudan.",
  keywords: [
    "React Now Dev",
    "web development Kenya",
    "website design Nairobi",
    "refugee-led organisation website",
    "SEO Kenya",
    "WordPress developer Kenya",
  ],
  openGraph: {
    title: "React Now Dev — Digital Solutions for East Africa",
    description:
      "Websites, SEO/GEO, hosting, and communications support for businesses, refugee-led organisations, and enterprises across East Africa.",
    siteName: "React Now Dev",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
