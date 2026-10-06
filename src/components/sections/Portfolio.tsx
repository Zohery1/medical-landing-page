"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<"Medical" | "Services" | "E-commerce" | "Personal Brands">("Medical");

  const tabs = [
    "Medical",
    "Services",
    "E-commerce",
    "Personal Brands",
  ] as const;

  return (
    <Section
      id="portfolio"
      eyebrow="سابقة الأعمال"
      title="مش مجرد Portfolio..."
      description="جزء من المشاريع التي تم العمل عليها"
      tone="plain"
    >
      {/* Animated Sliding Tabs */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-12 pb-4 border-b border-[var(--color-border-strong)]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none min-h-[44px] flex items-center"
            >
              {isActive && (
                <motion.div
                  layoutId="activePortfolioTab"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-0 bg-[var(--color-accent)] rounded-full shadow-md"
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-white" : "text-[var(--color-ink)] hover:text-[var(--color-accent)]"}`}>
                {tab}
              </span>
            </button>
          );
        })}
      </div>

      {/* Case Template Structure with Double-Bezel Hardware Architecture */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-4xl text-right"
        >
          {[1, 2].map((num) => (
            <div
              key={num}
              className="p-1 rounded-[1.75rem] bg-[var(--color-border)]/60 hover:bg-gradient-to-b hover:from-[var(--color-accent)]/20 hover:to-[var(--color-gold)]/15 border border-[var(--color-border-strong)]/40 hover:border-[var(--color-accent)]/30 transition-[background-color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 shadow-2xs hover:shadow-[0_16px_36px_-10px_rgba(22,21,20,0.06)]"
            >
              <div className="p-6 rounded-[calc(1.75rem-0.25rem)] bg-[var(--color-bg-elevated)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
                  <span className="font-display text-base font-bold text-[var(--color-ink)]">
                    المشروع {num} — {activeTab}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] border border-[var(--color-gold)]/30 shadow-2xs">
                    Results
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <span className="font-bold text-[var(--color-gold-deep)] block">المشروع:</span>
                    <p className="text-[var(--color-muted)] font-medium leading-relaxed">تفاصيل المشروع والنشاط</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-red-600 block">المشكلة:</span>
                    <p className="text-[var(--color-muted)] font-medium leading-relaxed">تحديد المشكلة والتحدي التسويقي</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-[var(--color-accent)] block">الحل:</span>
                    <p className="text-[var(--color-muted)] font-medium leading-relaxed">الاستراتيجية وخطة العمل</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-[var(--color-ink)] block">التنفيذ:</span>
                    <p className="text-[var(--color-muted)] font-medium leading-relaxed">خطوات التنفيذ العملي</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
