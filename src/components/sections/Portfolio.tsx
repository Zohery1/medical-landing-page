"use client";

import React, { useState } from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { CheckCircle2, TrendingUp, Layers, Stethoscope, ShoppingBag, UserCheck, Wrench } from "lucide-react";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<"medical" | "services" | "ecommerce" | "personal">("medical");

  const tabs = [
    { id: "medical", label: "القطاع الطبي (Medical)", icon: Stethoscope },
    { id: "services", label: "الخدمات والأنشطة (Services)", icon: Wrench },
    { id: "ecommerce", label: "المتاجر الإلكترونية (E-commerce)", icon: ShoppingBag },
    { id: "personal", label: "البراندات الشخصية (Personal Brands)", icon: UserCheck },
  ] as const;

  const caseStudies = {
    medical: [
      {
        title: "مركز جراحة وتجميل أسنان متكامل",
        problem: "اعتماد كامل على بوستات توعوية مكررة، وتكلفة مرتفعة جداً للـ Lead بدون تحويل لزيارات فعلية.",
        solution: "تفكيك الخدمات لخدمات محددة (زراعة الأسنان، ابتسامة هوليوود)، وبناء استراتيجية رسائل موجهة لمعالجة خوف الألم والتكلفة.",
        execution: "صياغة إعلانات فيديو وسيناريوهات ريلز موجهة مع Lead Funnel يوضح خطوات الكشف والعروض بوضوح.",
        results: "مضاعفة الحجوزات الفعلية بنسبة 180% وخفض تكلفة المريض المكتسب بنسبة 42%.",
      },
      {
        title: "عيادة جلدية وتجميل نسائية",
        problem: "حملات عروض خصومات عشوائية أضرت بمصداقية المركز وجذبت فئة غير مناسبة لأجهزة التجميل المتقدمة.",
        solution: "إعادة بناء التموضع (Positioning) للمركز، والتركيز على خبرة الطبيبات ونتائج الجلسات الطبيعية بدون مبالغة.",
        execution: "حملات محتوى تعليمي وقصص نجاح حقيقية وفصل إعلانات الجلسات العلاجية عن التجميلية.",
        results: "حجز جدول المواعيد بالكامل لـ 3 أشهر متتالية وزيادة ولاء وإعادة زيارة المريضات.",
      },
      {
        title: "عيادات عظام ومفاصل تخصصية",
        problem: "صعوبة إقناع المرضى بجدوى العلاج التحفظي والتردد الشديد في اتخاذ قرار التدخل الطبي.",
        solution: "Audience Segmentation دقيق لفئات كبار السن والرياضيين، وصياغة Voice of Customer يلمس الألم اليومي.",
        execution: "سلسلة فيديوهات قصيرة تشرح خطوات العلاج بشفافية كاملة وتفكك مخاوف ما بعد الجراحة.",
        results: "زيادة استفسارات الحالات المؤهلة (Qualified Leads) بنسبة 210%.",
      },
    ],
    services: [
      {
        title: "مكتب استشارات هندسية وتصميم معماري",
        problem: "غموض عرض القيمة وصعوبة إبراز الفارق بين المكتب والمنافسين الأقل سعراً.",
        solution: "صياغة Value Proposition واضح يستهدف أصحاب الفلل والمشاريع التجارية الراقية.",
        execution: "إعادة كتابة عروض المشاريع ومحتوى اللاندنج بيج ومسار التأهيل قبل الاتصال.",
        results: "إغلاق صفقات عقود تصميم كبرى بقيمة تجاوزت 2.5 مليون جنيه.",
      },
      {
        title: "أكاديمية تدريب مهني معتمد",
        problem: "انخفاض معدل اكتمال التسجيل في الدبلومات المتقدمة بسبب نصوص إعلانية عامة.",
        solution: "تطوير مسار إعلاني يركز على المخرجات المهنية وفرص العمل والتطبيقات العملية.",
        execution: "كتابة سكريبتات إعلانية مباشرة ومسار رسائل بريد وواتساب تتبعي للمسجلين.",
        results: "اكتمال 4 دفعات تدريبية متتالية قبل موعد الإغلاق بـ 10 أيام.",
      },
    ],
    ecommerce: [
      {
        title: "براند مستحضرات عناية طبيعية للبشرة",
        problem: "ضعف معدل التحويل (Conversion Rate) في الموقع على الرغم من الزيارات الكثيفة.",
        solution: "إعادة صياغة صفحات المنتجات (Product Copy) وتفكيك الشكوك حول الفاعلية والمكونات.",
        execution: "تحديث زوايا الإعلانات الممولة وإبراز تجارب العملاء الحقيقية وضمان الاسترجاع.",
        results: "ارتفاع الـ Conversion Rate من 1.2% إلى 3.4% ومضاعفة الـ ROAS إلى 4.8x.",
      },
      {
        title: "متجر مكملات غذائية وأجهزة صحية",
        problem: "منافسة سعرية شديدة وتراجع تكرار الشراء من العملاء الحاليين.",
        solution: "بناء استراتيجية محتوى تثقيفي حول نمط الحياة الصحي والوقاية اليومية.",
        execution: "حملات إعادة استهداف مخصصة ومحتوى بريدي وواتساب للمتابعة الدورية.",
        results: "نمو المبيعات الشهرية بنسبة 65% مع زيادة القيمة الدائمة للعميل (LTV).",
      },
    ],
    personal: [
      {
        title: "براند شخصي لاستشاري تغذية علاجية",
        problem: "محتوى علمي جاف ومعقد لا يصل إلى المريض العادي ولا يحقق تفاعلاً.",
        solution: "تبسيط المصطلحات وصياغة هوية تواصل ودية ومقنعة (Friendly & Authoritative).",
        execution: "صناعة ريلز أسبوعية وسلسلة بوستات تجيب على التساؤلات اليومية للمرضى.",
        results: "تجاوز المتابعين حاجز الـ 150 ألف متابع مهتم، وامتلأت استشارات العيادة لأسابيع قادمة.",
      },
    ],
  };

  return (
    <section id="portfolio" className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <Eyebrow variant="gold">نتائج واقعية</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            سابقة الأعمال ودراسات الحالة (Case Studies)
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            مش مجرد معرض صور عشوائي... بل تحليل حقيقي: <strong className="text-[var(--color-accent)] font-semibold">المشكلة ← الحل ← التنفيذ ← النتائج</strong>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-[var(--color-accent)] text-white shadow-sm"
                    : "bg-[var(--color-bg-elevated)] text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Case studies list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies[activeTab].map((study, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-4 pb-3 border-b border-[var(--color-border)]">
                  {study.title}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-red-600 block mb-1">
                      ⚠️ المشكلة والتحدي:
                    </span>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[var(--color-gold-deep)] block mb-1">
                      💡 الحل والاستراتيجية:
                    </span>
                    <p className="text-[var(--color-ink-soft)] leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[var(--color-accent)] block mb-1">
                      ⚙️ التنفيذ العملي:
                    </span>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      {study.execution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Results badge */}
              <div className="mt-6 pt-4 border-t border-[var(--color-border)] bg-[var(--color-bg-sunken)]/60 -mx-6 -mb-6 p-4 rounded-b-[var(--radius-card)] flex items-start gap-2.5">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 block">
                    النتائج المحققة:
                  </span>
                  <p className="text-xs font-semibold text-[var(--color-ink)] leading-snug">
                    {study.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
