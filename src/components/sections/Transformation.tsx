"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function Transformation() {
  const beforeItems = [
    "محتوى عام",
    "أفكار متفرقة",
    "جمهور غير محدد",
    "Prompts عامة",
    "Content Plan بدون Strategy",
    "فصل بين المحتوى والإعلانات",
    "قياس الـLead فقط",
  ];

  const afterItems = [
    "تفهم الـMedical Business",
    "تفكك الـNiche إلى Services",
    "تبني Segments وPersonas",
    "تفهم Awareness & Decision Psychology",
    "تبني Positioning وValue Proposition",
    "تعمل Messaging Strategy",
    "تنتج Content Pillars وAngles وHooks",
    "تكتب Medical Copy",
    "تربط Organic بالـPaid",
    "تبني Funnel",
    "تفهم CRO",
    "تقيس وتُحسن الأداء",
    "تستخدم AI من خلال Context وBrief ومراجعة بشرية",
  ];

  return (
    <Section
      id="transformation"
      eyebrow="التحول"
      title="قبل الكورس وبعد الكورس"
      tone="plain"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Before Column (Right in RTL) */}
        <Reveal direction="right" delay={0.1}>
          <div className="p-8 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] text-right space-y-6">
            <h3 className="font-display text-xl font-bold text-[var(--color-ink)] pb-3 border-b border-[var(--color-border-strong)]">
              قبل الكورس
            </h3>

            <ul className="space-y-3.5">
              {beforeItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 text-sm text-[var(--color-muted)] font-medium"
                >
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* After Column with 3D Tilt Card (Left in RTL) */}
        <Reveal direction="left" delay={0.2}>
          <TiltCard intensity={6}>
            <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-gold)]/60 shadow-lg text-right space-y-6 relative overflow-hidden">
              {/* Subtle top golden light beam */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-[var(--color-gold)] via-[var(--color-accent)] to-[var(--color-gold)]" />

              <h3 className="font-display text-xl font-bold text-[var(--color-accent)] pb-3 border-b border-[var(--color-border)] flex items-center justify-between">
                <span>بعد الكورس</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  النتيجة
                </span>
              </h3>

              <ul className="space-y-3.5">
                {afterItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ x: -4 }}
                    className="flex items-center gap-3 text-sm text-[var(--color-ink)] font-semibold transition-transform"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0"
                    >
                      <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </Section>
  );
}
