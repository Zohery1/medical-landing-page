import React from "react";
import { Section } from "@/components/ui/Section";

export function WhyDifferent() {
  const steps = [
    "Business",
    "Service",
    "Patient",
    "Research",
    "Strategy",
    "Message",
    "Content",
    "Ads",
    "Conversion",
    "Measurement",
  ];

  return (
    <Section
      id="difference"
      eyebrow="ليه الكورس مختلف؟"
      title="لأنك مش بتتعلم Marketing عام وتحط عليه كلمة Medical."
      description="الكورس يبدأ من طبيعة السوق الطبي نفسه."
      tone="plain"
    >
      <div className="space-y-8 max-w-4xl text-right">
        {/* مش */}
        <div className="p-6 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] space-y-3">
          <span className="font-display text-sm font-bold text-red-600 block">
            مش:
          </span>
          <div className="font-mono text-base font-bold text-[var(--color-muted)]">
            Post ← Post ← Post
          </div>
        </div>

        {/* لكن */}
        <div className="p-6 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-accent)] shadow-xs space-y-4">
          <span className="font-display text-sm font-bold text-[var(--color-accent)] block">
            لكن:
          </span>

          <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[var(--color-ink)]">
            {steps.map((s, idx) => (
              <React.Fragment key={s}>
                <span className="px-3 py-1 rounded-lg bg-[var(--color-bg-sunken)] border border-[var(--color-border)] font-mono">
                  {s}
                </span>
                {idx < steps.length - 1 && (
                  <span className="text-[var(--color-accent)] select-none">←</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
