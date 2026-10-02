import React from "react";
import { Section } from "@/components/ui/Section";
import { Check, X } from "lucide-react";

export function Transformation() {
  const beforeItems = [
    "محتوى عام",
    "أفكار متفرقة",
    "جمهور غير محدد",
    "Prompts عامة",
    "Content Plan بدون Strategy",
    "فصل بين المحتوى والإعلانات",
    "قياس الـLead فقط",
  ];

  const afterItems = [
    "تفهم الـMedical Business",
    "تفكك الـNiche إلى Services",
    "تبني Segments وPersonas",
    "تفهم Awareness & Decision Psychology",
    "تبني Positioning وValue Proposition",
    "تعمل Messaging Strategy",
    "تنتج Content Pillars وAngles وHooks",
    "تكتب Medical Copy",
    "تربط Organic بالـPaid",
    "تبني Funnel",
    "تفهم CRO",
    "تقيس وتُحسن الأداء",
    "تستخدم AI من خلال Context وBrief ومراجعة بشرية",
  ];

  return (
    <Section
      id="transformation"
      eyebrow="التحول"
      title="قبل الكورس وبعد الكورس"
      tone="plain"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Before Column (Right in RTL) */}
        <div className="p-8 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] text-right space-y-6">
          <h3 className="font-display text-xl font-bold text-[var(--color-ink)] pb-3 border-b border-[var(--color-border-strong)]">
            قبل الكورس
          </h3>

          <ul className="space-y-3.5">
            {beforeItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-[var(--color-muted)] font-medium">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Column (Left in RTL) */}
        <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold)]/60 shadow-xs text-right space-y-6">
          <h3 className="font-display text-xl font-bold text-[var(--color-accent)] pb-3 border-b border-[var(--color-border)]">
            بعد الكورس
          </h3>

          <ul className="space-y-3.5">
            {afterItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-[var(--color-ink)] font-semibold">
                <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
