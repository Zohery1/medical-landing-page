"use client";

import React from "react";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/motion-primitives";

export function BigMap() {
  const journeySteps = [
    { num: "01", title: "Medical Business" },
    { num: "02", title: "Niche & Services" },
    { num: "03", title: "Patient Journey" },
    { num: "04", title: "Research & Evidence" },
    { num: "05", title: "Segments & Personas" },
    { num: "06", title: "Awareness & Psychology" },
    { num: "07", title: "Positioning & Offer" },
    { num: "08", title: "Messaging Strategy" },
    { num: "09", title: "Content Pillars & Angles" },
    { num: "10", title: "Hooks & Copy" },
    { num: "11", title: "Organic & Paid" },
    { num: "12", title: "Conversion & CRO" },
    { num: "13", title: "Measurement & Optimization" },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg)] relative overflow-hidden">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <Reveal direction="down">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[var(--color-ink)] font-bold">
              الخريطة الكبيرة للكورس
            </h2>
          </Reveal>
        </div>

        {/* Visual Journey Roadmap - Elegant and Compact */}
        <div className="max-w-lg mx-auto space-y-2.5">
          {journeySteps.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-md transition-all duration-150 flex items-center justify-between group cursor-default">
                {/* Step badge on the right (start of RTL line) */}
                <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)] bg-[var(--color-bg-sunken)] px-2.5 py-1 rounded-md border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                  الخطوة {step.num}
                </span>

                {/* Step title in English */}
                <span className="font-display text-sm sm:text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {step.title}
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

        <Reveal direction="up" delay={0.2}>
          <p className="text-center text-sm sm:text-base font-bold text-[var(--color-accent)] mt-8">
            كل خطوة بتبني على اللي قبلها.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
