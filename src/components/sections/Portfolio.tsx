"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";

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
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-12 pb-4 border-b border-[var(--color-border-strong)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === tab
                ? "bg-[var(--color-accent)] text-white shadow-2xs"
                : "bg-[var(--color-bg-sunken)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Case Template Structure from docx */}
      <div className="space-y-8 max-w-4xl text-right">
        {[1, 2].map((num) => (
          <div
            key={num}
            className="p-6 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
              <span className="font-display text-base font-bold text-[var(--color-ink)]">
                المشروع {num} — {activeTab}
              </span>
              <span className="text-xs font-mono font-bold text-[var(--color-gold-deep)]">
                Results
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-bold text-[var(--color-gold-deep)] block">المشروع:</span>
                <p className="text-[var(--color-muted)]">تفاصيل المشروع والنشاط</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-red-600 block">المشكلة:</span>
                <p className="text-[var(--color-muted)]">تحديد المشكلة والتحدي التسويقي</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-[var(--color-accent)] block">الحل:</span>
                <p className="text-[var(--color-muted)]">الاستراتيجية وخطة العمل</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-[var(--color-ink)] block">التنفيذ:</span>
                <p className="text-[var(--color-muted)]">خطوات التنفيذ العملي</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
