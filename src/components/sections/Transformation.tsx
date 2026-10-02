import React from "react";
import { Section } from "@/components/ui/Section";
import { Check, Minus } from "lucide-react";

export function Transformation() {
  const beforeItems = [
    "محتوى عام متكرر لأي عيادة بدون هوية تميزها.",
    "أفكار متفرقة واعتماد على الإلهام اللحظي العشوائي.",
    "جمهور غير محدد ورسالة واحدة موجهة للجميع.",
    "Prompts عامة ومخرجات AI ركيكة ومكررة.",
    "Content Plan بدون Strategy ولا أهداف بيزنس واضحة.",
    "فصل كامل بين صناعة المحتوى والإعلانات الممولة.",
    "قياس الـ Leads فقط دون معرفة الحجوزات والحضور الفعلي.",
  ];

  const afterItems = [
    "تفهم الـ Medical Business ونموذج عمل العيادات ومصادر الإيراد.",
    "تفكك الـ Niche إلى Services محددة وعالية الربحية.",
    "تبني Segments و Personas واقعية مبنية على بحث دقيق.",
    "تفهم سيكولوجية القرار ومراحل الوعي (Awareness Stages).",
    "تبني Positioning واضح و Value Proposition قوي لا ينافسه أحد.",
    "تعمل Messaging Strategy متماسكة تخاطب المريض بوعي.",
    "تنتج Content Pillars و Angles و Hooks تقتنص الانتباه.",
    "تكتب Medical Copy مقنع ومبني على مادة علمية موثوقة.",
    "تربط المحتوى الـ Organic بالـ Paid Ads بسلاسة تامة.",
    "تبني Funnel متكامل يقود المريض من الاكتشاف إلى الحجز.",
    "تفهم CRO وتعرف كيف توقف تسرب المرضى من المسار.",
    "تقيس وتُحسن الأداء وتتابع العائد المالي الفعلي (ROAS & Attendance).",
    "تستخدم الـ AI باحتراف عبر Context و Brief ومراجعة بشرية دقيقة.",
  ];

  return (
    <Section
      id="transformation"
      eyebrow="التحوّل العملي الممنهج"
      title="من العشوائية إلى المنظومة المتكاملة"
      description="الفرق الحقيقي بين العمل التقليدي غير المحسوب وبناء استراتيجية رعاية صحية مبنية على الأداء"
      tone="plain"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Before Column (Right in RTL) */}
        <div className="md:col-span-5 p-8 rounded-2xl bg-[var(--color-bg-sunken)]/50 border border-[var(--color-border)]">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--color-border-strong)]">
            <span className="font-display text-lg font-bold text-[var(--color-ink)]">
              قبل الكورس
            </span>
            <span className="text-[11px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">
              الأسلوب التقليدي
            </span>
          </div>

          <ul className="space-y-4">
            {beforeItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--color-muted)]">
                <Minus className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Column (Left in RTL) */}
        <div className="md:col-span-7 p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold)]/50 shadow-xs relative">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--color-border)]">
            <span className="font-display text-lg font-bold text-[var(--color-accent)]">
              بعد الكورس
            </span>
            <span className="text-[11px] font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider">
              المنظومة الاحترافية
            </span>
          </div>

          <ul className="space-y-3.5">
            {afterItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--color-ink)] font-medium">
                <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
