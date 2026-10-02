"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown, Check } from "lucide-react";

export function Curriculum() {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const modules = [
    {
      part: "الجزء الأول",
      title: "فهم المجال الطبي",
      topics: [
        "طبيعة المجال الطبي.",
        "أنواع التخصصات والخدمات.",
        "الفرق بين التخصص والخدمة.",
        "طبيعة الثقة في المجال الطبي.",
        "حساسية الرسائل الطبية.",
        "طريقة استخدام المادة العلمية والتطبيق عليها.",
      ],
      application: null,
    },
    {
      part: "الجزء الثاني",
      title: "دراسة السوق والجمهور",
      topics: [
        "Medical Market Research",
        "تفكيك المجال إلى تخصصات وخدمات.",
        "تحليل المنافسين.",
        "اكتشاف الفرص والفجوات.",
        "Audience Segmentation",
        "بناء Personas.",
        "تحليل المخاوف والاعتراضات.",
        "دوافع القرار.",
        "مصادر الثقة.",
        "Awareness Stages.",
      ],
      application: "Competitor Research + Persona + Audience Segmentation",
    },
    {
      part: "الجزء الثالث",
      title: "الاستراتيجية والـContent Plan",
      topics: [
        "Marketing Objectives",
        "Positioning",
        "Value Proposition",
        "Core Messaging",
        "Content Pillars",
        "Content Angles",
        "Formats",
        "CTA",
        "Content Plan",
      ],
      application: "بناء استراتيجية كاملة لبراند طبي وتجميل.",
    },
    {
      part: "الجزء الرابع",
      title: "Medical Copywriting",
      topics: [
        "الفرق بين Content Writing وCopywriting.",
        "كتابة الـHook.",
        "فهم لغة الجمهور.",
        "بناء الـBody.",
        "كتابة المحتوى التوعوي.",
        "المحتوى التعليمي.",
        "المحتوى البيعي.",
        "Storytelling.",
        "Problem & Solution.",
        "Before & After.",
        "التعامل مع الاعتراضات والمخاوف والرغبات.",
        "كتابة Social Posts.",
        "Reels Scripts.",
        "Ad Copy.",
        "CTA.",
      ],
      application: null,
    },
  ];

  return (
    <Section
      id="curriculum"
      title="ماذا ستتعلم؟"
      tone="plain"
      width="default"
    >
      <div className="space-y-4 max-w-4xl mx-auto">
        {modules.map((mod, idx) => {
          const isOpen = openModuleIndex === idx;
          return (
            <div
              key={mod.part}
              className="border-b border-[var(--color-border-strong)] pb-4 last:border-b-0"
            >
              <button
                onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                className="w-full py-4 text-right flex items-center justify-between gap-4 cursor-pointer select-none group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--color-gold-deep)]">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-[var(--color-gold-deep)] block mb-0.5">
                      {mod.part}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                      {mod.title}
                    </h3>
                  </div>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-[var(--color-gold)] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[var(--color-accent)]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pt-2 pb-6 ps-8 space-y-4">
                  <div className="text-xs font-bold text-[var(--color-gold-deep)]">
                    هتتعلم:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mod.topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)]">
                        <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{t}</span>
                      </div>
                    ))}
                  </div>

                  {mod.application && (
                    <div className="p-4 rounded-xl bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 text-xs sm:text-sm text-[var(--color-ink)] font-medium">
                      <strong className="text-[var(--color-gold-deep)] font-semibold block mb-0.5">
                        التطبيق:
                      </strong>
                      {mod.application}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
