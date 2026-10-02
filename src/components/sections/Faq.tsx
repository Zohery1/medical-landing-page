"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";

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
            <div key={idx} className="py-5 text-right">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-right flex items-center justify-between gap-4 cursor-pointer select-none group"
              >
                <span className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--color-gold)] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[var(--color-accent)]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pt-3 pb-2 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed max-w-[65ch]">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
