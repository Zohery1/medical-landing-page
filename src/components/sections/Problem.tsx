import React from "react";
import { Container, Eyebrow, BrassRule } from "@/components/ui/Primitives";
import { AlertCircle, HelpCircle } from "lucide-react";

export function Problem() {
  const problems = [
    {
      title: "محتوى عام",
      desc: "بتكتب محتوى عام لأي عيادة، بدون تمييز حقيقي للتخصص أو الخدمة.",
    },
    {
      title: "تشتت البداية",
      desc: "مش عارف تبدأ منين لما تستلم Client طبي، وإيه المعلومات المطلوبة.",
    },
    {
      title: "تقليد المنافسين",
      desc: "بتقلد المنافسين علشان مش لاقي أفكار حقيقية مستخرجة من السوق.",
    },
    {
      title: "خطة عشوائية",
      desc: "بتعامل الـContent Plan كأنها مجرد قائمة Posts مفصولة عن أهداف البيزنس.",
    },
    {
      title: "رسالة موحدة للجميع",
      desc: "بتستخدم نفس الرسالة لكل الجمهور على اختلاف مراحل وعيهم واحتياجهم.",
    },
    {
      title: "نتائج AI سطحية",
      desc: "بتستخدم ChatGPT بـPrompt عام وتطلعلك نتائج مكررة وعامة وغير مقنعة.",
    },
    {
      title: "جزر منعزلة",
      desc: "بتفصل صناعة المحتوى عن الإعلانات الممولة ومسار الحجز والمبيعات.",
    },
    {
      title: "قياس مضلل",
      desc: "بتقيس عدد الـLeads فقط بدون معرفة هل تحولت لحجوزات وحضور فعلي أم لا.",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-[var(--color-bg-sunken)]/50 border-y border-[var(--color-border)] relative">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="terracotta">التحديات الحقيقية في السوق</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            المشكلة مش إنك مش عارف تكتب...
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal leading-relaxed">
            المشكلة إنك أحيانًا مش عارف{" "}
            <span className="font-semibold text-[var(--color-accent)]">
              تكتب إيه وليه ولمين وإمتى.
            </span>
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg-elevated)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-semibold text-xs flex items-center justify-center font-mono">
                    0{index + 1}
                  </span>
                  <AlertCircle className="w-5 h-5 text-[var(--color-accent)] opacity-70" />
                </div>
                <h3 className="font-display text-base font-bold text-[var(--color-ink)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="mt-14 max-w-xl mx-auto text-center p-6 bg-[var(--color-bg-elevated)] rounded-2xl border border-[var(--color-gold)]/40 shadow-xs">
          <p className="text-base sm:text-lg font-display font-semibold text-[var(--color-ink)]">
            لو بتواجه أي نقطة من دول...{" "}
            <span className="text-[var(--color-accent)]">هنا تحديداً بيبدأ دور الكورس.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
