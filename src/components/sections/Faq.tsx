"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ui/motion-primitives";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "هل لازم أكون طبيب؟",
      a: "لا. الكورس مخصص لتعلم التسويق وصناعة المحتوى للمجال الطبي، وليس لتقديم تشخيص أو استشارة طبية.",
    },
    {
      q: "هل الكورس مناسب للمبتدئين؟",
      a: "نعم، يبدأ من المفاهيم التأسيسية ويتدرج إلى التطبيق.",
    },
    {
      q: "هل الكورس للـContent فقط؟",
      a: "لا. المحتوى الأساسي قوي في Content Strategy وCopywriting، والتحديث يوسع المنظومة إلى Performance Marketing وFunnel وCRO والقياس.",
    },
    {
      q: "لماذا أحتاج الكورس مع وجود ChatGPT؟",
      a: "لأن الأداة تستطيع إنتاج النص، لكن جودة الناتج تعتمد على الـContext والـBrief والاستراتيجية والمراجعة البشرية.",
    },
    {
      q: "هل سأتعلم الإعلانات؟",
      a: "نعم، ضمن التحديث الجديد يتم ربط Organic وPaid والـCreative والـRetargeting والـFunnel.",
    },
    {
      q: "هل يوجد تطبيق عملي؟",
      a: "نعم، المنهج قائم على Explain → Model → Practice → Review.",
    },
    {
      q: "هل أحتاج خبرة سابقة؟",
      a: "لا، لكن مستوى التطبيق يختلف حسب خبرتك الحالية.",
    },
    {
      q: "هل الكورس يضمن لي عملاء أو وظيفة؟",
      a: "لا. الكورس يقدم المعرفة والمنهجية والتطبيقات والمخرجات، لكنه لا يضمن وظيفة أو عملاء أو دخلًا معينًا.",
    },
    {
      q: "هل التحديث الجديد متاح للمشتركين الحاليين؟",
      a: "يتم تحديد الإجابة بعد اعتماد سياسة التحديث.",
    },
    {
      q: "هل يوجد تقسيط؟",
      a: "يتم تحديد الإجابة وفق نظام الدفع المعتمد.",
    },
    {
      q: "مدة الوصول للكورس؟",
      a: "تُضاف بعد التأكيد.",
    },
    {
      q: "هل يوجد شهادة؟",
      a: "تُضاف فقط إذا كانت متاحة فعلًا.",
    },
  ];

  return (
    <Section
      id="faq"
      title="الأسئلة الشائعة"
      tone="plain"
      width="narrow"
    >
      <div className="divide-y divide-[var(--color-border-strong)] border-y border-[var(--color-border-strong)]">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={idx} direction="up" delay={idx * 0.025}>
              <div className="py-4 sm:py-5 text-right">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-right flex items-center justify-between gap-4 cursor-pointer select-none group min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-150">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-150 ${
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
                      <div className="pt-2 pb-3 ps-1 text-xs sm:text-sm text-[var(--color-ink-soft)] font-medium leading-relaxed max-w-[65ch]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
