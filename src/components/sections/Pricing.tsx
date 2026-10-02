import React from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { DiamondMark } from "@/components/ui/motifs";
import { Check, ShieldCheck, Lock, CreditCard } from "lucide-react";

export function Pricing() {
  const inclusions = [
    "وصول كامل إلى الـ 13 محاضرة الأساسية المسجلة.",
    "كافة محاور ومحاضرات التحديث الجديد (Medical Performance Marketing).",
    "حقيبة الـ Marketing Toolkit الكاملة (23 ملف وقالب ومخطط عملي).",
    "استراتيجيات وأمثلة حقيقية لعيادات ومراكز تجميل وجراحة وأسنان.",
    "منظومة الـ AI Native Frameworks وقوالب الـ Prompts الطبية المتقدمة.",
    "ضمان استرجاع 100% خلال 7 أيام من تاريخ الاشتراك إذا لم يناسبك الكورس.",
  ];

  return (
    <Section
      id="pricing"
      eyebrow="الاستثمار وقيمة الكورس"
      title="العرض والسعر الحالي المعتمد"
      description="استثمار مباشر في مهارة نوعية نادرة ومطلوبة بشدة ترفع دخلك وقيمتك التسويقية في سوق الرعاية الصحية"
      tone="plain"
      align="center"
    >
      <div className="max-w-3xl mx-auto bg-[var(--color-bg-elevated)] rounded-3xl border border-[var(--color-gold)]/40 p-8 sm:p-12 shadow-sm text-center space-y-8">
        <div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] uppercase tracking-wider inline-block mb-3">
            السعر المعتمد الحالي
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
            منظومة التسويق الطبي المتكاملة
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
            دورة مسجلة تطبيقية + مخرجات عملية + ملفات واستراتيجيات جاهزة
          </p>
        </div>

        {/* Big Price Metric */}
        <div className="py-6 border-y border-[var(--color-border-strong)] flex flex-col items-center justify-center">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-[var(--color-accent)] tabular-nums">
              2,000
            </span>
            <span className="text-base sm:text-lg font-bold text-[var(--color-ink)]">
              جنيه مصري
            </span>
          </div>
          <p className="text-xs text-[var(--color-muted)] mt-2">
            استثمار لمرة واحدة مع وصول دائم ومستمر للمحاضرات والتحديثات
          </p>
        </div>

        {/* Inclusions */}
        <ul className="space-y-3 max-w-lg mx-auto text-right">
          {inclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)] font-medium">
              <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="pt-2 space-y-4">
          <Button
            isWhatsApp
            customMessage="مرحبًا، أود الاشتراك في كورس المحتوى والتسويق الطبي بسعر 2000 جنيه"
            size="lg"
            variant="terracotta"
            className="w-full sm:w-auto px-12 text-base shadow-sm"
          >
            اشترك الآن عبر واتساب
          </Button>

          {/* Guarantee reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-muted)] pt-2">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[var(--color-gold-deep)]" />
              ضمان 7 أيام لاسترجاع المال 100%
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Lock className="w-4 h-4 text-[var(--color-gold-deep)]" />
              دفع آمن ومعتمد
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CreditCard className="w-4 h-4 text-[var(--color-gold-deep)]" />
              طرق دفع متعددة
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
