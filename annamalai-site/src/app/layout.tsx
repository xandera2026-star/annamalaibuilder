import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annamalai Builders | Chennai Construction Experts",
  description:
    "Quality construction and renovation in Chennai. On-time delivery, transparent pricing, and end-to-end project management.",
  metadataBase: new URL("https://annamalaibuilder-git-main-xandera2026-stars-projects.vercel.app"),
  openGraph: {
    title: "Annamalai Builders | Chennai Construction Experts",
    description:
      "Quality construction and renovation in Chennai. On-time delivery, transparent pricing, and end-to-end project management.",
    type: "website",
    images: [{ url: "/images/shared/og-image-1200x630.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
