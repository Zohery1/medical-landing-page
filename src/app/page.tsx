import React from "react";
import { OfferBar } from "@/components/sections/OfferBar";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Transformation } from "@/components/sections/Transformation";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Curriculum } from "@/components/sections/Curriculum";
import { NewUpdate } from "@/components/sections/NewUpdate";
import { BigMap } from "@/components/sections/BigMap";
import { Deliverables } from "@/components/sections/Deliverables";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { FreeVsPaid } from "@/components/sections/FreeVsPaid";
import { AiWorkflow } from "@/components/sections/AiWorkflow";
import { Instructor } from "@/components/sections/Instructor";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { FloatingSubscribe } from "@/components/sections/FloatingSubscribe";

import { ScrollProgress } from "@/components/ui/motion-primitives";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white">
      {/* Scroll Progress Laser Line */}
      <ScrollProgress />

      {/* Sticky Header: OfferBar (Countdown) + Navbar pinned together 100% of the time */}
      <div className="sticky top-0 z-50 w-full shadow-xs">
        {/* 02 — OFFER BAR (Sticky Countdown) */}
        <OfferBar />

        {/* 01 — NAVBAR */}
        <Navbar />
      </div>

      {/* 03 — HERO */}
      <Hero />

      {/* 04 — المحاضر (محمد العدوي) */}
      <Instructor />

      {/* 05 — سابقة الأعمال (Tabs & Case Studies) */}
      <Portfolio />

      {/* 06 — المشكلة */}
      <Problem />

      {/* 07 — التحول */}
      <Transformation />

      {/* 08 — لمن هذا الكورس؟ */}
      <TargetAudience />

      {/* 09 — ماذا ستتعلم؟ (Interactive Accordion) */}
      <Curriculum />

      {/* 10 — التحديث الجديد (10 محاور) */}
      <NewUpdate />

      {/* 11 — الخريطة الكبيرة للكورس (Visual Journey) */}
      <BigMap />

      {/* 12 — مخرجات الكورس (Marketing Toolkit) */}
      <Deliverables />

      {/* 13 — ليه الكورس مختلف؟ */}
      <WhyDifferent />

      {/* 14 — التدريب المجاني vs الكورس */}
      <FreeVsPaid />

      {/* 15 — AI في الكورس */}
      <AiWorkflow />

      {/* 16 — آراء المتدربين والعملاء (Testimonials) */}
      <Testimonials />

      {/* 17 — العرض والسعر */}
      <Pricing />

      {/* 18 — الضمان (7 أيام 100%) */}
      <Guarantee />

      {/* 19 — FAQ (الأسئلة الشائعة) */}
      <Faq />

      {/* 20 — FINAL CTA (Terracotta Banner) */}
      <FinalCta />

      {/* 21 — FOOTER */}
      <Footer />

      {/* 22 — Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 23 — Floating Subscribe Button (Mobile Only) */}
      <FloatingSubscribe />
    </main>
  );
}
