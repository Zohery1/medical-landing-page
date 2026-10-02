"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/motion-primitives";

export function AiWorkflow() {
  const questions = [
    "مين الجمهور؟",
    "إيه الخدمة؟",
    "إيه المشكلة؟",
    "إيه مرحلة الوعي؟",
    "إيه الـPositioning؟",
    "إيه الـEvidence؟",
    "إيه الـOffer؟",
    "إيه الهدف من المحتوى؟",
  ];

  const workflow = [
    { num: "01", name: "Brief" },
    { num: "02", name: "Context" },
    { num: "03", name: "AI" },
    { num: "04", name: "Human Review" },
    { num: "05", name: "Optimization" },
  ];

  return (
    <Section
      id="ai-workflow"
      eyebrow="AI في الكورس"
      title="هل ChatGPT يقدر يكتبلك المحتوى؟"
      description="آه... بس دي مش المشكلة."
      tone="sunken"
    >
      <div className="space-y-10 max-w-4xl text-right">
        {/* المشكلة: هل عرفته: */}
        <div className="space-y-4">
          <Reveal direction="down">
            <p className="font-display text-lg font-bold text-[var(--color-ink)]">
              المشكلة: هل عرفته:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {questions.map((q, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.04}>
                <div
                  className="p-3.5 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-md transition-all duration-150 ease-out text-sm font-bold text-[var(--color-ink)] text-center cursor-default"
                >
                  {q}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* عشان كده: */}
        <Reveal direction="up" delay={0.3}>
          <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-gold)]/50 shadow-md space-y-4 text-center relative overflow-hidden">
            <p className="font-display text-xl font-bold text-[var(--color-ink)]">
              عشان كده: AI مش بديل عن التفكير التسويقي.
            </p>
            <p className="text-sm text-[var(--color-muted)] font-medium">
              هو أداة داخل Workflow منظم:
            </p>

            <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {workflow.map((step, idx) => (
                <React.Fragment key={step.name}>
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--color-bg-sunken)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-0.5 transition-all duration-150 shadow-2xs">
                    <span className="font-mono text-xs text-[var(--color-gold-deep)] font-bold">
                      {step.num}
                    </span>
                    <span className="font-mono text-sm font-bold text-[var(--color-accent)]">
                      {step.name}
                    </span>
                  </div>

                  {idx < workflow.length - 1 && (
                    <span className="text-[var(--color-accent)] font-bold text-base select-none">
                      ←
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
