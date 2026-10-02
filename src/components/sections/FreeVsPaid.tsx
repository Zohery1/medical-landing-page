import React from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Sparkles, ArrowLeft } from "lucide-react";

export function FreeVsPaid() {
  const freeItems = [
    "جلسة تمهيدية لفهم آلية تفريغ الأفكار (Brain Dump).",
    "مقدمة سريعة في منهجية البحث وجمع المعلومات الأولية.",
    "فهم طريقة التفكير السليمة قبل البدء في الكتابة.",
    "تنظيم المعلومات الطبية المتناثرة.",
    "الهدف: إعطاؤك فكرة استكشافية حية عن طريقة التدريب والأسلوب.",
  ];

  const paidItems = [
    "المنظومة الاحترافية الكاملة والشاملة من الألف إلى الياء.",
    "13 محاضرة مسجلة حالياً تغطي أدق تفاصيل التطبيق.",
    "المسار الأساسي: Market ← Audience ← Strategy ← Content ← Copywriting.",
    "التوسع الجديد الكامل: Business ← Patient Journey ← Paid ← Funnel ← CRO ← Measurement ← AI Workflow.",
    "حقيبة الـ 20+ ملف ومخرج عملي (Templates & Frameworks).",
    "تطبيقات عملية على حالات عيادات وأطباء واقعية ومتابعة.",
  ];

  return (
    <section className="py-20 bg-[var(--color-bg-sunken)]/40 border-b border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="gold">مقارنة واضحة</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            التدريب المجاني مقابل الكورس المدفوع
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            إذا كنت قد شاهدت التدريب المجاني التمهيدي، فإليك ما يقدمه لك البرنامج المتكامل
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Card */}
          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-bg-sunken)] text-[var(--color-muted)] border border-[var(--color-border)]">
                المدخل التمهيدي
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mt-3 mb-2">
                التدريب المجاني
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mb-6">
                تجربة تمهيدية سريعة للتعرف على طريقة التفكير
              </p>

              <ul className="space-y-3.5">
                {freeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-muted)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Paid Course Card */}
          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-bg-elevated)] border-2 border-[var(--color-accent)] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--color-accent)]" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-accent)] text-white">
                  الاستثمار الكامل
                </span>
                <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[var(--color-accent)] mt-2 mb-2">
                الكورس المدفوع (المنظومة الكاملة)
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mb-6">
                كل ما تحتاجه للتحول إلى خبير Medical Performance Marketing
              </p>

              <ul className="space-y-3.5 mb-8">
                {paidItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink)] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              isWhatsApp
              customMessage="مرحبًا، أود الاشتراك في الكورس المدفوع للمحتوى والتسويق الطبي"
              variant="terracotta"
              size="default"
              className="w-full"
            >
              اشترك في الكورس المتكامل
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
