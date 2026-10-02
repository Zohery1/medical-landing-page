import React from "react";
import { Container } from "@/components/ui/Primitives";
import { Section } from "@/components/ui/Section";
import { DiamondMark } from "@/components/ui/motifs";
import { ArrowLeft } from "lucide-react";

export function Problem() {
  const problems = [
    {
      num: "01",
      title: "بتكتب محتوى عام لأي عيادة",
      desc: "نصوص مكررة تصلح لأي تخصص دون إبراز الفارق التنافسي الحقيقي أو التميز الطبي.",
    },
    {
      num: "02",
      title: "مش عارف تبدأ منين لما تستلم Client طبي",
      desc: "تشتت بين المادة العلمية المعقدة وأهداف العميل، وغياب استمارة بحث وتفكيك واضحة.",
    },
    {
      num: "03",
      title: "بتقلد المنافسين علشان مش لاقي أفكار",
      desc: "دوران في حلقة مفرغة من أفكار السوق السطحية بدلاً من استخراج الأفكار من صوت المريض الفعلي.",
    },
    {
      num: "04",
      title: "بتعامل الـ Content Plan كأنها مجرد قائمة Posts",
      desc: "نشر يومي روتيني لملء الجدول بدون استراتيجية توجه المريض نحو الحجز.",
    },
    {
      num: "05",
      title: "بتستخدم نفس الرسالة لكل الجمهور",
      desc: "تجاهل مراحل وعي المريض المختلفة من الجهل بالأعراض حتى مرحلة مقارنة الأطباء.",
    },
    {
      num: "06",
      title: "بتستخدم ChatGPT بـ Prompt عام وتطلعلك نتائج عامة",
      desc: "مخرجات ذكاء اصطناعي ركيكة تفتقر إلى السياق الطبي والـ Brief والتوجيه الدقيق.",
    },
    {
      num: "07",
      title: "بتفصل المحتوى عن الإعلانات والحجز والمبيعات",
      desc: "جزر منعزلة؛ فريق المحتوى يكتب لوحده، والـ Media Buyer يطلق إعلانات لوحده دون ترابط.",
    },
    {
      num: "08",
      title: "بتقيس عدد الـ Leads فقط بدون معرفة هل تحولت لحجوزات أم لا",
      desc: "أرقام تفاعل واستفسارات سطحية رخيصة لا تنعكس على حضور المرضى الفعلي في العيادة.",
    },
  ];

  return (
    <Section
      id="problem"
      eyebrow="تشخيص الواقع التسويقي"
      title="المشكلة مش إنك مش عارف تكتب..."
      description="المشكلة إنك أحيانًا مش عارف تكتب إيه وليه ولمين وإمتى. ممكن تكون بتواجه واحدة من هذه الفجوات الشائعة:"
      tone="sunken"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Sticky side note (Right in RTL) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
          <div className="p-6 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-2xs">
            <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-2">
              حقيقة السوق الطبي
            </span>
            <p className="font-display text-lg font-bold text-[var(--color-ink)] leading-snug mb-3">
              العيادة لا تحتاج إلى منشورات إضافية، بل تحتاج إلى مسار إقناع.
            </p>
            <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
              عندما يفقد المحتوى الطبي بوصلة البيزنس وسيكولوجية المريض، يتحول التسويق إلى عبء مالي وتكلفة بدون عائد حقيقي.
            </p>
          </div>

          <div className="hidden lg:block text-xs text-[var(--color-gold-deep)] font-medium">
            <span className="inline-block ms-1">←</span> هنا ينتهي التشتت ويبدأ دور المنظومة.
          </div>
        </div>

        {/* Clean Editorial Divided List (Left in RTL) - No Card Clutter */}
        <div className="lg:col-span-8 divide-y divide-[var(--color-border-strong)]">
          {problems.map((item) => (
            <div
              key={item.num}
              className="py-6 first:pt-0 last:pb-0 flex items-start gap-5 group transition-colors"
            >
              <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)] w-7 shrink-0 pt-1">
                {item.num}
              </span>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed max-w-[60ch]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
