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
            <Reveal key={mod.part} direction="up" delay={idx * 0.08}>
              <motion.div
                animate={{
                  borderColor: isOpen ? "var(--color-accent)" : "var(--color-border-strong)",
                  backgroundColor: isOpen ? "var(--color-bg-elevated)" : "transparent",
                }}
                className="border-b rounded-2xl p-4 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                  className="w-full py-2 text-right flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      animate={{ scale: isOpen ? 1.15 : 1, color: isOpen ? "var(--color-accent)" : "var(--color-gold-deep)" }}
                      className="font-mono text-sm font-bold w-7"
                    >
                      0{idx + 1}
                    </motion.span>
                    <div>
                      <span className="text-xs font-semibold text-[var(--color-gold-deep)] block mb-0.5">
                        {mod.part}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-8 h-8 rounded-full bg-[var(--color-bg-sunken)] flex items-center justify-center shrink-0 border border-[var(--color-border)]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-gold)]"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-4 ps-8 space-y-4">
                        <div className="text-xs font-bold text-[var(--color-gold-deep)]">
                          هتتعلم:
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {mod.topics.map((t, tIdx) => (
                            <motion.div
                              key={tIdx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: tIdx * 0.03 }}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)]"
                            >
                              <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{t}</span>
                            </motion.div>
                          ))}
                        </div>

                        {mod.application && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-4 rounded-xl bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-xs sm:text-sm text-[var(--color-ink)] font-medium"
                          >
                            <strong className="text-[var(--color-gold-deep)] font-semibold block mb-0.5">
                              التطبيق:
                            </strong>
                            {mod.application}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
