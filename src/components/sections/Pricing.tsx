import React from "react";
import { siteConfig } from "@/config/site";
import { Container, Eyebrow, BrassRule } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Sparkles, CreditCard } from "lucide-react";

export function Pricing() {
  const inclusions = [
    "وصول كامل إلى الـ 13 محاضرة المسجلة الأساسية.",
    "كافة محاضرات ومحاور التحديث الجديد (Medical Performance Marketing).",
    "حقيبة الـ Marketing Toolkit الكاملة (20+ ملف وقالب ومخطط عمل).",
    "نماذج واستراتيجيات واقعية لعيادات ومراكز تجميل وأسنان وجراحة.",
    "منظومة الـ AI Native Frameworks والـ Prompts الطبية المتقدمة.",
    "ضمان استرجاع 100% خلال 7 أيام من تاريخ الاشتراك.",
  ];

  return (
    <section id="pricing" className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)] relative">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="terracotta">الاستثمار وقيمة الكورس</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            العرض والسعر الحالي المعتمد
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            استثمار مباشر في مهارة نوعية مطلوبة بشدة ترفع دخلك وقيمتك في السوق
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border-2 border-[var(--color-accent)] shadow-xl p-8 sm:p-10 relative overflow-hidden text-center">
          {/* Top banner tag */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>العرض المعتمد الحالي</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mb-2">
            منظومة التسويق الطبي المتكاملة
          </h3>

          <p className="text-xs sm:text-sm text-[var(--color-muted)] mb-8">
            دورة مسجلة تطبيقية + مخرجات عملية + ملفات واستراتيجيات جاهزة
          </p>

          {/* Price figure */}
          <div className="py-6 px-8 rounded-2xl bg-[var(--color-bg-sunken)] border border-[var(--color-border)] inline-block w-full max-w-md mx-auto mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-display text-5xl sm:text-6xl font-extrabold text-[var(--color-accent)] font-mono">
                2,000
              </span>
              <span className="text-base sm:text-lg font-bold text-[var(--color-ink)]">
                جنيه مصري
              </span>
            </div>
            <p className="text-xs text-[var(--color-muted)] mt-2 font-medium">
              دفع لمرة واحدة مع وصول كامل للمحتوى والتحديثات
            </p>
          </div>

          {/* Inclusions list */}
          <div className="space-y-3.5 text-right max-w-lg mx-auto mb-10">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--color-ink)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button
              isWhatsApp
              customMessage="مرحبًا، أود الاشتراك في كورس المحتوى والتسويق الطبي بسعر 2000 جنيه"
              size="lg"
              variant="terracotta"
              className="w-full text-base font-bold shadow-md"
            >
              اشترك الآن عبر واتساب
            </Button>

            {/* Trust icons row */}
            <div className="flex items-center justify-center gap-6 text-xs text-[var(--color-muted)] pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-gold-deep)]" />
                دفع آمن ومباشر
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[var(--color-gold-deep)]" />
                طرق دفع متعددة
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
