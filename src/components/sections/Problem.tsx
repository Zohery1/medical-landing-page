"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
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
            <Reveal key={idx} direction="right" delay={idx * 0.04}>
              <div
                className="py-4.5 flex items-center gap-4 group cursor-default transition-transform duration-150 ease-out hover:-translate-x-2"
              >
                <span
                  className="font-mono text-xs font-bold text-[var(--color-gold-deep)] w-6 shrink-0 group-hover:text-[var(--color-accent)] group-hover:scale-110 transition-all duration-150"
                >
                  0{idx + 1}
                </span>
                <p className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-150">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.4}>
          <p className="font-display text-lg sm:text-xl font-bold text-[var(--color-accent)] pt-4">
            هنا بيبدأ دور الكورس.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
