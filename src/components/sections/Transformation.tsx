import React from "react";
import { Container, Eyebrow, BrassRule } from "@/components/ui/Primitives";
import { XCircle, CheckCircle, ArrowLeftRight } from "lucide-react";

export function Transformation() {
  const beforeItems = [
    "محتوى عام متكرر لأي عيادة بدون هوية",
    "أفكار متفرقة واعتماد على الإلهام اللحظي",
    "جمهور غير محدد ورسالة عشوائية",
    "Prompts عامة ومخرجات AI رديئة",
    "Content Plan بدون Strategy ولا أهداف بيزنس",
    "فصل كامل بين صناعة المحتوى والإعلانات الممولة",
    "قياس الـ Leads فقط بدون معرفة الحجوزات الفعلية",
  ];

  const afterItems = [
    "تفهم الـ Medical Business ونموذج عمل العيادات",
    "تفكك الـ Niche إلى Services دقيقة ومحددة",
    "تبني Segments و Personas حقيقية مبنية على بحث دقيق",
    "تفهم سيكولوجية القرار ومراحل الوعي (Awareness Stages)",
    "تبني Positioning واضح و Value Proposition قوي",
    "تعمل Messaging Strategy متماسكة وموجهة",
    "تنتج Content Pillars و Angles و Hooks تجذب الانتباه",
    "تكتب Medical Copy مقنع ومبني على أسس علمية",
    "تربط المحتوى الـ Organic بالـ Paid Ads بسلاسة",
    "تبني Funnel متكامل يقود المريض خطوة بخطوة",
    "تفهم CRO وتعرف كيف تمنع تسرب المرضى",
    "تقيس وتُحسن الأداء وتتابع العائد الحقيقي (ROAS & Attendance)",
    "تستخدم الـ AI باحتراف عبر Context و Brief ومراجعة بشرية دقيقة",
  ];

  return (
    <section className="py-20 bg-[var(--color-bg)] relative">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="gold">نقلة نوعية في طريقة التفكير والعمل</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            التحوّل العملي بعد الكورس
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            من العشوائية والتجربة غير المحسوبة إلى منظومة تسويق طبي ممنهجة وقابلة للقياس
          </p>
        </div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Before Card */}
          <div className="lg:col-span-5 bg-[var(--color-bg-sunken)] p-6 sm:p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--color-border-strong)]">
              <span className="font-display text-xl font-bold text-[var(--color-ink)]">
                قبل الكورس
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-700 border border-red-200">
                الواقع التقليدي
              </span>
            </div>

            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Central Arrow Divider */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center self-center py-6">
            <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-md">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
            <span className="mt-2 text-xs font-bold text-[var(--color-accent)]">
              التحوّل
            </span>
          </div>

          {/* After Card */}
          <div className="lg:col-span-5 bg-[var(--color-bg-elevated)] p-6 sm:p-8 rounded-[var(--radius-card)] border-2 border-[var(--color-accent)] shadow-md relative overflow-hidden">
            {/* Top accent badge */}
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-[var(--color-accent)]" />

            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--color-border)]">
              <span className="font-display text-xl font-bold text-[var(--color-accent)]">
                بعد الكورس
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                المنظومة الاحترافية
              </span>
            </div>

            <ul className="space-y-3.5">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[var(--color-ink)] font-medium">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
