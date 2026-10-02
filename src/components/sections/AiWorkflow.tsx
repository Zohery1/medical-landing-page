import React from "react";
import { Section } from "@/components/ui/Section";

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
    "Brief",
    "Context",
    "AI",
    "Human Review",
    "Optimization",
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
          <p className="font-display text-lg font-bold text-[var(--color-ink)]">
            المشكلة: هل عرفته:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-sm font-bold text-[var(--color-ink)] shadow-2xs"
              >
                {q}
              </div>
            ))}
          </div>
        </div>

        {/* عشان كده: */}
        <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold)]/50 shadow-xs space-y-4 text-center">
          <p className="font-display text-xl font-bold text-[var(--color-ink)]">
            عشان كده: AI مش بديل عن التفكير التسويقي.
          </p>
          <p className="text-sm text-[var(--color-muted)] font-medium">
            هو أداة داخل Workflow منظم:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {workflow.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-4 py-2 rounded-xl bg-[var(--color-bg-sunken)] border border-[var(--color-border)] font-mono text-sm font-bold text-[var(--color-accent)]">
                  {step}
                </span>
                {idx < workflow.length - 1 && (
                  <span className="text-[var(--color-gold)] font-bold text-base select-none">
                    ←
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
