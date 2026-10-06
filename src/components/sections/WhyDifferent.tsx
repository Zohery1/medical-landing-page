"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/motion-primitives";

export function WhyDifferent() {
  const steps = [
    { num: "01", name: "Business" },
    { num: "02", name: "Service" },
    { num: "03", name: "Patient" },
    { num: "04", name: "Research" },
    { num: "05", name: "Strategy" },
    { num: "06", name: "Message" },
    { num: "07", name: "Content" },
    { num: "08", name: "Ads" },
    { num: "09", name: "Conversion" },
    { num: "10", name: "Measurement" },
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
        <Reveal direction="up" delay={0.1}>
          <div className="p-6 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] space-y-3">
            <span className="font-display text-sm font-bold text-red-600 block">
              مش:
            </span>
            <div dir="rtl" className="flex items-center gap-2 font-mono text-base font-bold text-[var(--color-muted)]">
              <span className="px-3 py-1 rounded-md bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">Post</span>
              <span className="text-red-400">←</span>
              <span className="px-3 py-1 rounded-md bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">Post</span>
              <span className="text-red-400">←</span>
              <span className="px-3 py-1 rounded-md bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">Post</span>
            </div>
          </div>
        </Reveal>

        {/* لكن — مرتب من اليمين للشمال بنظام Double-Bezel */}
        <Reveal direction="up" delay={0.2}>
          <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-[var(--color-accent)]/25 to-[var(--color-gold)]/15 border border-[var(--color-accent)]/30 shadow-[0_20px_48px_-12px_rgba(168,76,38,0.12)]">
            <div className="p-6 sm:p-8 rounded-[calc(2rem-0.375rem)] bg-[var(--color-bg-elevated)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)] space-y-4">
              <span className="font-display text-base font-bold text-[var(--color-accent)] block">
                لكن:
              </span>

              {/* Pipeline displayed from right to left (RTL) */}
              <div dir="rtl" className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {steps.map((s, idx) => (
                  <React.Fragment key={s.name}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--color-bg-sunken)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-elevated)] transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 group shadow-2xs">
                      <span className="font-mono text-[10px] font-bold text-[var(--color-gold-deep)] group-hover:text-[var(--color-accent)] transition-colors">
                        {s.num}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[var(--color-ink)]">
                        {s.name}
                      </span>
                    </div>

                    {idx < steps.length - 1 && (
                      <span className="text-[var(--color-accent)] font-bold text-sm select-none" aria-hidden="true">
                        ←
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
