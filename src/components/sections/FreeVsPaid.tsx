"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/motion-primitives";

export function FreeVsPaid() {
  const freeItems = [
    "Brain Dump",
    "Research",
    "طريقة التفكير",
    "تنظيم المعلومات",
  ];

  const paidCurrent = [
    { num: "01", name: "Market" },
    { num: "02", name: "Audience" },
    { num: "03", name: "Strategy" },
    { num: "04", name: "Content" },
    { num: "05", name: "Copywriting" },
  ];

  const paidFuture = [
    { num: "01", name: "Business" },
    { num: "02", name: "Patient Journey" },
    { num: "03", name: "Paid" },
    { num: "04", name: "Funnel" },
    { num: "05", name: "CRO" },
    { num: "06", name: "Measurement" },
    { num: "07", name: "AI Workflow" },
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
        <Reveal direction="up" delay={0.1}>
          <div className="p-8 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] space-y-6 hover:shadow-md transition-shadow duration-200">
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

        {/* الكورس المدفوع — مرتب من اليمين للشمال */}
        <Reveal direction="up" delay={0.2}>
          <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-accent)] shadow-md space-y-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-200">
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
              {/* RTL flow: Starts at right with 01 Market, arrows point left */}
              <div dir="rtl" className="flex flex-wrap items-center gap-1.5 font-mono text-xs font-bold">
                {paidCurrent.map((s, idx) => (
                  <React.Fragment key={s.name}>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--color-bg-sunken)] border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors">
                      <span className="text-[10px] text-[var(--color-gold-deep)]">{s.num}</span>
                      <span>{s.name}</span>
                    </span>
                    {idx < paidCurrent.length - 1 && <span className="text-[var(--color-accent)] font-bold text-sm">←</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-[var(--color-border)]">
              <p className="text-xs font-bold text-[var(--color-muted)]">
                مع التوسع المقترح إلى:
              </p>
              {/* RTL flow: Starts at right with 01 Business, arrows point left */}
              <div dir="rtl" className="flex flex-wrap items-center gap-1.5 font-mono text-xs font-bold">
                {paidFuture.map((s, idx) => (
                  <React.Fragment key={s.name}>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors">
                      <span className="text-[10px] text-[var(--color-gold-deep)]">{s.num}</span>
                      <span>{s.name}</span>
                    </span>
                    {idx < paidFuture.length - 1 && <span className="text-[var(--color-accent)] font-bold text-sm">←</span>}
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
