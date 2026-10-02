import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Reem_Kufi } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-reem-kufi",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${reemKufi.variable} ${ibmArabic.variable}`}>
      <body className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
