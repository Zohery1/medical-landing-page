"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ui/motion-primitives";

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
            <Reveal key={mod.part} direction="up" delay={idx * 0.06}>
              <div
                className={`p-1 rounded-[1.75rem] transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? "bg-gradient-to-b from-[var(--color-accent)]/20 to-[var(--color-gold)]/15 border border-[var(--color-accent)]/35 shadow-[0_16px_36px_-10px_rgba(168,76,38,0.12)]"
                    : "bg-[var(--color-border)]/50 border border-transparent shadow-2xs hover:border-[var(--color-border-strong)]"
                }`}
              >
                <div
                  className={`rounded-[calc(1.75rem-0.25rem)] p-5 sm:p-6 transition-colors duration-200 ${
                    isOpen
                      ? "bg-[var(--color-bg-elevated)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
                      : "bg-[var(--color-bg-elevated)]/80 hover:bg-[var(--color-bg-elevated)]"
                  }`}
                >
                  <button
                    onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                    className="w-full text-right flex items-center justify-between gap-4 cursor-pointer select-none group min-h-[44px]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm font-bold w-7 transition-colors duration-200 ${
                          isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-gold-deep)]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-[var(--color-gold-deep)] block mb-0.5">
                          {mod.part}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-150">
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-150 ${
                        isOpen
                          ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)]/30 text-[var(--color-accent)]"
                          : "bg-[var(--color-bg-sunken)] border-[var(--color-border)] text-[var(--color-gold)]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2 ps-2 sm:ps-11 space-y-4">
                          <div className="text-xs font-bold text-[var(--color-gold-deep)] tracking-wide">
                            المحاور والتطبيقات:
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {mod.topics.map((t, tIdx) => (
                              <motion.div
                                key={tIdx}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: tIdx * 0.025, duration: 0.2 }}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)]"
                              >
                                <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5 stroke-[2.2]" />
                                <span className="leading-relaxed">{t}</span>
                              </motion.div>
                            ))}
                          </div>

                          {mod.application && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                              className="p-4 rounded-xl bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-xs sm:text-sm text-[var(--color-ink)] font-medium"
                            >
                              <strong className="text-[var(--color-gold-deep)] font-semibold block mb-0.5">
                                التطبيق العملي:
                              </strong>
                              {mod.application}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
