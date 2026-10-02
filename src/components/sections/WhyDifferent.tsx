import React from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark, OrnamentDivider } from "@/components/ui/motifs";

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
      eyebrow="الفارق الجوهري"
      title="ليه الكورس ده مختلف عن أي محتوى آخر؟"
      description="لأنك مش بتتعلم Marketing عام وتلصق عليه كلمة Medical... الكورس يبدأ من طبيعة وخصوصية السوق الطبي نفسه."
      tone="plain"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* The Flawed Way */}
        <div className="p-8 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] space-y-4 text-right">
          <span className="text-xs font-semibold text-red-600 uppercase tracking-wider block">
            الأسلوب السطحي الشائع
          </span>
          <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
            تفكير البوستات والمنشورات المجردة
          </h3>
          <div className="p-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-center font-mono text-sm text-[var(--color-muted)]">
            Post ← Post ← Post
          </div>
          <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            التركيز على ملء جدول النشر اليومي ببوستات توعوية عامة، فتكون النتيجة: تفاعل وهمي بدون أي حجوزات فعلية في جدول مواعيد العيادة.
          </p>
        </div>

        {/* The Adawy Performance System */}
        <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-accent)] shadow-sm space-y-4 text-right relative">
          <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider block">
            منهجية المنظومة الطبية
          </span>
          <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
            تفكير البيزنس ونتائج التحويل المالي
          </h3>

          <div className="flex flex-wrap items-center gap-1.5 p-3 rounded-xl bg-[var(--color-bg-sunken)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-ink)]">
            {steps.map((s, idx) => (
              <React.Fragment key={s}>
                <span className="px-2 py-0.5 bg-white rounded shadow-2xs font-mono">
                  {s}
                </span>
                {idx < steps.length - 1 && (
                  <span className="text-[var(--color-accent)] select-none">←</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-ink-soft)] leading-relaxed">
            تبدأ من عمق البيزنس ونموذج عمل العيادة والخدمة ذات الأولوية، وصولاً إلى مرضى فعليين في صالة الانتظار وقياس العائد بدقة.
          </p>
        </div>
      </div>
    </Section>
  );
}
