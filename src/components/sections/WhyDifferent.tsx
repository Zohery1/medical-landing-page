import React from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Check, X, ArrowLeft } from "lucide-react";

export function WhyDifferent() {
  const realSequence = [
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
    <section className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="gold">الفارق الجوهري</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            ليه الكورس ده مختلف عن أي محتوى آخر؟
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal leading-relaxed">
            لأنك مش بتتعلم Marketing عام وتلصق عليه كلمة &quot;Medical&quot;... الكورس يبدأ من{" "}
            <strong className="text-[var(--color-accent)] font-semibold">
              طبيعة وخصوصية السوق الطبي نفسه
            </strong>
          </p>
        </div>

        {/* Traditional vs Our Approach */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Way */}
          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-bg-sunken)] border border-[var(--color-border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-600 mb-4 font-bold text-sm">
                <X className="w-5 h-5 shrink-0" />
                <span>الأسلوب السطحي الشائع في السوق</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-4">
                تفكير البوستات المجردة
              </h3>
              <div className="p-4 rounded-xl bg-white/60 border border-red-200 text-center font-mono text-sm text-[var(--color-muted)]">
                Post ← Post ← Post
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-4 leading-relaxed">
                التركيز الكامل على ملء الجدول ونشر بوستات دورية بدون استراتيجية، والنتيجة: تفاعل وهمي وبدون حجوزات فعلية في العيادة.
              </p>
            </div>
          </div>

          {/* Adawy Medical Marketing Way */}
          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-bg-elevated)] border-2 border-[var(--color-accent)] shadow-md flex flex-col justify-between relative">
            <div className="absolute top-0 right-8 px-3 py-1 bg-[var(--color-accent)] text-white text-[11px] font-bold rounded-b-lg">
              منهجية الكورس
            </div>

            <div>
              <div className="flex items-center gap-2 text-[var(--color-accent)] mb-4 font-bold text-sm">
                <Check className="w-5 h-5 shrink-0" />
                <span>المنظومة التسويقية الطبية المتكاملة</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-4">
                تفكير البيزنس ونتائج التحويل
              </h3>

              <div className="flex flex-wrap items-center gap-1.5 p-3.5 rounded-xl bg-[var(--color-bg-sunken)] border border-[var(--color-border)]">
                {realSequence.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-white rounded text-[var(--color-ink)] shadow-2xs">
                      {step}
                    </span>
                    {idx < realSequence.length - 1 && (
                      <span className="text-[var(--color-accent)] font-bold text-xs select-none">
                        ←
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[var(--color-ink)] font-medium mt-4 leading-relaxed">
                تبدأ من عمق البيزنس ونوع الخدمة الطبية لتصل في النهاية إلى مرضى فعليين في صالة الانتظار.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
