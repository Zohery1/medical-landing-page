import React from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { ArrowDown } from "lucide-react";

export function BigMap() {
  const journeySteps = [
    { step: "01", title: "Medical Business", desc: "فهم نموذج العمل ونقاط الربحية" },
    { step: "02", title: "Niche & Services", desc: "تفكيك التخصص إلى خدمات محددة" },
    { step: "03", title: "Patient Journey", desc: "رسم رحلة المريض ونقاط التسرب" },
    { step: "04", title: "Research & Evidence", desc: "دراسة السوق وتجميع الأدلة الطبية" },
    { step: "05", title: "Segments & Personas", desc: "بناء ملفات المرضى المستهدفين" },
    { step: "06", title: "Awareness & Psychology", desc: "فهم مراحل الوعي ودوافع القرار" },
    { step: "07", title: "Positioning & Offer", desc: "صياغة التموضع والعرض الأخلاقي" },
    { step: "08", title: "Messaging Strategy", desc: "هندسة الرسائل المركزية والمساندة" },
    { step: "09", title: "Content Pillars & Angles", desc: "تحديد ركائز وزوايا المحتوى" },
    { step: "10", title: "Hooks & Copy", desc: "كتابة المقدمات الجاذبة والنصوص المقنعة" },
    { step: "11", title: "Organic & Paid", desc: "ربط المحتوى التفاعلي بالحملات الممولة" },
    { step: "12", title: "Conversion & CRO", desc: "تحسين مسار الحجز وتفادي التسرب" },
    { step: "13", title: "Measurement & Optimization", desc: "قياس الأثر المالي وتحسين الأداء المستمر" },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg)] relative">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="gold">الرؤية الكلية المترابطة</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            الخريطة الكبيرة للكورس (Visual Journey)
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            منهجية علمية متسلسلة... <strong className="text-[var(--color-accent)]">كل خطوة بتبني على اللي قبلها</strong>
          </p>
        </div>

        {/* Visual Journey Roadmap */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central connecting line for desktop */}
          <div className="hidden md:block absolute top-6 bottom-6 right-1/2 -mr-[1px] w-[2px] bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-accent)] to-[var(--color-gold-deep)] opacity-40 pointer-events-none" />

          <div className="space-y-6 md:space-y-8">
            {journeySteps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    isEven ? "md:flex-row-reverse text-right" : "text-right md:text-left"
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full md:w-1/2">
                    <div className="p-5 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all shadow-2xs hover:shadow-xs group">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.step}
                        </span>
                        <h3 className="font-display text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Number */}
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-sunken)] border-2 border-[var(--color-gold)] text-[var(--color-ink)] font-bold text-xs flex items-center justify-center shrink-0 shadow-sm z-10 font-mono">
                    {index + 1}
                  </div>

                  {/* Empty side for desktop spacing */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
