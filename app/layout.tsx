import type { Metadata } from "next";
import { Libre_Baskerville, Inter, Lobster } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
  display: "swap",
});

const libre = Libre_Baskerville({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    template: "%s | Walls! Alive Austin",
    default: "Walls! Alive | Master Wallpaper Installation | Austin & Central Texas",
  },
  description: "Veteran-owned wallpaper installation with 30+ years experience. Serving Austin, Round Rock, Cedar Park, and Central Texas. WIA accredited.",
  metadataBase: new URL('https://wallsalivetx.com'),
  
  // delete this on launch day
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libre.variable} ${inter.variable} ${lobster.variable} scroll-smooth`}>
      <head>
        {/* Google Analytics Script would go here via next/script */}
      </head>
      <body className="bg-cream-100 text-sage-900 font-sans antialiased selection:bg-terracotta-200">
        <JsonLd />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}