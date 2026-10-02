import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, Minus } from "lucide-react";

export function FreeVsPaid() {
  const comparison = [
    {
      feature: "الهدف والمدى",
      free: "تجربة تمهيدية للتعرف على طريقة التفكير وأسلوب التدريب.",
      paid: "المنظومة الاحترافية المتكاملة من دراسة السوق للقياس المالي.",
    },
    {
      feature: "المحاضرات المسجلة",
      free: "جلسة تمهيدية في تفريغ الأفكار (Brain Dump) والبحث الأولي.",
      paid: "13 محاضرة أساسية مسجلة + كافة محاضرات التحديث الجديد.",
    },
    {
      feature: "التطبيقات والمخرجات",
      free: "أمثلة عامة بدون ملفات تطبيقية مخصصة.",
      paid: "حقيبة الـ 23 مخرج وقالب عملي (Marketing Toolkit) جاهزة.",
    },
    {
      feature: "الشمولية الإعلانية",
      free: "مقتصر على المفاهيم المبدئية للمحتوى.",
      paid: "يغطي الـ Paid Ads، وإعادة الاستهداف، ومسار الـ Funnel والـ CRO.",
    },
    {
      feature: "الذكاء الاصطناعي",
      free: "نظرة عامة على أدوات الـ AI.",
      paid: "AI Native Frameworks متكاملة وقوالب Prompts طبية حصرية.",
    },
  ];

  return (
    <Section
      id="free-vs-paid"
      eyebrow="المقارنة والخيارات"
      title="التدريب المجاني مقابل الكورس المدفوع"
      description="إذا كنت قد شاهدت التدريب المجاني التمهيدي، فإليك ما تقدمه لك المنظومة المتكاملة"
      tone="plain"
    >
      <div className="max-w-4xl mx-auto divide-y divide-[var(--color-border-strong)] border-y border-[var(--color-border-strong)]">
        {comparison.map((item, idx) => (
          <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start text-right">
            <div className="md:col-span-3">
              <span className="font-display text-sm font-bold text-[var(--color-ink)]">
                {item.feature}
              </span>
            </div>
            <div className="md:col-span-4 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
              <span className="font-bold text-[var(--color-muted)] block md:hidden mb-1">التدريب المجاني:</span>
              {item.free}
            </div>
            <div className="md:col-span-5 text-xs sm:text-sm text-[var(--color-ink)] font-medium leading-relaxed">
              <span className="font-bold text-[var(--color-accent)] block md:hidden mb-1">الكورس المدفوع:</span>
              {item.paid}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          isWhatsApp
          customMessage="مرحبًا، أود الاشتراك في الكورس المدفوع للمحتوى والتسويق الطبي"
          size="lg"
          variant="terracotta"
        >
          اشترك في الكورس المتكامل الآن
        </Button>
      </div>
    </Section>
  );
}
