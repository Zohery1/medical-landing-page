"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/motion-primitives";

export function Problem() {
  const problems = [
    "بتكتب محتوى عام لأي عيادة.",
    "مش عارف تبدأ منين لما تستلم Client طبي.",
    "بتقلد المنافسين علشان مش لاقي أفكار.",
    "بتعامل الـContent Plan كأنها مجرد قائمة Posts.",
    "بتستخدم نفس الرسالة لكل الجمهور.",
    "بتستخدم ChatGPT بـPrompt عام وتطلعلك نتائج عامة.",
    "بتفصل المحتوى عن الإعلانات والحجز والمبيعات.",
    "بتقيس عدد الـLeads فقط بدون معرفة هل تحولت لحجوزات أم لا.",
  ];

  return (
    <Section
      id="problem"
      eyebrow="المشكلة"
      title="المشكلة مش إنك مش عارف تكتب..."
      description="المشكلة إنك أحيانًا مش عارف تكتب إيه وليه ولمين وإمتى. ممكن تكون بتواجه واحدة من دول:"
      tone="sunken"
    >
      <div className="max-w-4xl space-y-6 text-right">
        <div className="divide-y divide-[var(--color-border-strong)] border-y border-[var(--color-border-strong)]">
          {problems.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: -8 }}
              className="py-4.5 flex items-center gap-4 group cursor-default transition-all"
            >
              <motion.span
                whileHover={{ scale: 1.2, color: "var(--color-accent)" }}
                className="font-mono text-xs font-bold text-[var(--color-gold-deep)] w-6 shrink-0 transition-colors"
              >
                0{idx + 1}
              </motion.span>
              <p className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal direction="up" delay={0.6}>
          <motion.p
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-display text-lg sm:text-xl font-bold text-[var(--color-accent)] pt-4"
          >
            هنا بيبدأ دور الكورس.
          </motion.p>
        </Reveal>
      </div>
    </Section>
  );
}
