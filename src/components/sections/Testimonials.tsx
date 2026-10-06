"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/motion-primitives";

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "سيشن عملية مرتبة، حضرتك نفسك تقولنا وتعلمنا كل معلومة في دماغك وتنقلنا كل خبرتك بكل سهولة، بصراحة بتختصر علينا وقت كتير.. شكراً لمجهودك وجزاك الله عنا كل الخير",
    },
    {
      id: 2,
      text: "محاضرة عملية جداً ما شاء الله، بالذات عمرو عمل الواجب وزيادة 😂",
    },
    {
      id: 3,
      text: "السيشن جميلة جداً وأستاذ محمد عامل مجهود كبير في الكورس، ربنا يجازيه خير",
    },
    {
      id: 4,
      text: "جزاك الله خيراً يا هندسة، محاضرة جميلة جداً لولا بس إني لبستها 😂",
    },
  ];

  return (
    <Section
      id="testimonials"
      eyebrow="آراء وتجارب"
      title="شوف تجربة المشتركين والعملاء"
      description="رسائل وانطباعات واقعية ومباشرة من الحضور حول الاستفادة العملية والتطبيق الواقعي"
      tone="plain"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((item, idx) => (
          <Reveal key={item.id} direction="up" delay={idx * 0.08}>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="h-full p-1 rounded-[1.75rem] bg-gradient-to-b from-[var(--color-gold)]/25 via-[var(--color-border)] to-[var(--color-border-strong)]/30 border border-[var(--color-gold)]/30 shadow-2xs hover:shadow-md transition-shadow duration-200"
            >
              <div className="h-full rounded-[calc(1.75rem-0.25rem)] bg-[var(--color-bg-elevated)] p-6 sm:p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)] flex flex-col justify-between gap-5 text-right relative overflow-hidden">
                {/* Header: Quote icon + Stars */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/25 flex items-center justify-center text-[var(--color-gold-deep)]">
                    <Quote className="w-5 h-5 rotate-180" />
                  </div>
                  <div className="flex items-center gap-1 text-[var(--color-gold)] text-sm tracking-widest select-none">
                    ★★★★★
                  </div>
                </div>

                {/* The Message Only */}
                <p className="text-base sm:text-lg text-[var(--color-ink)] font-medium leading-relaxed my-auto">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Footer status line */}
                <div className="pt-3 border-t border-[var(--color-border)]/60 flex items-center justify-between text-xs text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-gold-deep)]">رأي حقيقي بعد السيشن</span>
                  <span className="text-[11px] font-mono text-[var(--color-muted)]">Verified Review</span>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
