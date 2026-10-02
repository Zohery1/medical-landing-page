"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function FreeVsPaid() {
  const freeItems = [
    "Brain Dump",
    "Research",
    "طريقة التفكير",
    "تنظيم المعلومات",
  ];

  const paidCurrent = [
    "Market",
    "Audience",
    "Strategy",
    "Content",
    "Copywriting",
  ];

  const paidFuture = [
    "Business",
    "Patient Journey",
    "Paid",
    "Funnel",
    "CRO",
    "Measurement",
    "AI Workflow",
  ];

  return (
    <Section
      id="free-vs-paid"
      eyebrow="التدريب المجاني vs الكورس"
      title="مقارنة بين التدريب المجاني والكورس المدفوع"
      tone="plain"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start text-right">
        {/* التدريب المجاني */}
        <Reveal direction="right">
          <div className="p-8 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] space-y-6">
            <h3 className="font-display text-xl font-bold text-[var(--color-ink)] pb-3 border-b border-[var(--color-border-strong)]">
              التدريب المجاني
            </h3>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[var(--color-ink)]">
                تجربة تمهيدية تساعدك تفهم:
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-muted)] ps-4">
                {freeItems.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-strong)]">
              <span className="text-xs font-bold text-[var(--color-gold-deep)] block mb-1">
                الهدف:
              </span>
              <p className="text-sm text-[var(--color-ink)] font-medium">
                تاخد فكرة عن طريقة التدريب.
              </p>
            </div>
          </div>
        </Reveal>

        {/* الكورس المدفوع with 3D TiltCard */}
        <Reveal direction="left" delay={0.2}>
          <TiltCard intensity={8}>
            <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-accent)] shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-accent)]" />

              <h3 className="font-display text-xl font-bold text-[var(--color-accent)] pb-3 border-b border-[var(--color-border)] flex items-center justify-between">
                <span>الكورس المدفوع</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  المنظومة الكاملة
                </span>
              </h3>

              <div className="space-y-3">
                <p className="font-display text-base font-bold text-[var(--color-ink)]">
                  المنظومة الكاملة:
                </p>
                <p className="text-sm font-semibold text-[var(--color-gold-deep)]">
                  13 محاضرة مسجلة حاليًا
                </p>
                <p className="text-xs font-bold text-[var(--color-muted)]">
                  من:
                </p>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs font-bold text-[var(--color-ink)]">
                  {paidCurrent.map((s, idx) => (
                    <React.Fragment key={s}>
                      <span className="px-2 py-0.5 rounded bg-[var(--color-bg-sunken)] border border-[var(--color-border)]">
                        {s}
                      </span>
                      {idx < paidCurrent.length - 1 && <span>←</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[var(--color-border)]">
                <p className="text-xs font-bold text-[var(--color-muted)]">
                  مع التوسع المقترح إلى:
                </p>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs font-bold text-[var(--color-accent)]">
                  {paidFuture.map((s, idx) => (
                    <React.Fragment key={s}>
                      <span className="px-2 py-0.5 rounded bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                        {s}
                      </span>
                      {idx < paidFuture.length - 1 && <span>←</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </Section>
  );
}
