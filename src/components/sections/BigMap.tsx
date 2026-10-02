import React from "react";
import { Container } from "@/components/ui/Primitives";

export function BigMap() {
  const journeySteps = [
    "Medical Business",
    "Niche & Services",
    "Patient Journey",
    "Research & Evidence",
    "Segments & Personas",
    "Awareness & Psychology",
    "Positioning & Offer",
    "Messaging Strategy",
    "Content Pillars & Angles",
    "Hooks & Copy",
    "Organic & Paid",
    "Conversion & CRO",
    "Measurement & Optimization",
  ];

  return (
    <section className="py-20 bg-[var(--color-bg)] relative">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[var(--color-ink)] font-bold">
            الخريطة الكبيرة للكورس
          </h2>
        </div>

        {/* Visual Journey Roadmap */}
        <div className="max-w-2xl mx-auto space-y-3">
          {journeySteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="p-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all shadow-2xs flex items-center justify-between">
                <span className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)]">
                  {step}
                </span>
                <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)] bg-[var(--color-bg-sunken)] px-2.5 py-1 rounded border border-[var(--color-border)]">
                  0{index + 1}
                </span>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="flex justify-center text-[var(--color-accent)] font-bold text-sm select-none py-0.5">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-center text-sm sm:text-base font-semibold text-[var(--color-accent)] mt-8">
          كل خطوة بتبني على اللي قبلها.
        </p>
      </Container>
    </section>
  );
}
