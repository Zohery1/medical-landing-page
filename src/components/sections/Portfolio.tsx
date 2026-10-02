"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark } from "@/components/ui/motifs";
import { TrendingUp } from "lucide-react";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<"medical" | "services" | "ecommerce" | "personal">("medical");

  const tabs = [
    { id: "medical", label: "القطاع الطبي (Medical)" },
    { id: "services", label: "الخدمات والأنشطة (Services)" },
    { id: "ecommerce", label: "المتاجر الإلكترونية (E-commerce)" },
    { id: "personal", label: "البراندات الشخصية (Personal Brands)" },
  ] as const;

  const caseStudies = {
    medical: [
      {
        title: "مركز جراحة وتجميل أسنان متكامل",
        problem: "اعتماد كامل على بوستات توعوية مكررة، وتكلفة مرتفعة جداً للـ Lead بدون تحويل لزيارات وحضور فعلي.",
        solution: "تفكيك الخدمات لخدمات محددة (زراعة، ابتسامة هوليوود)، وبناء استراتيجية رسائل لمعالجة خوف الألم والتكلفة.",
        execution: "صياغة إعلانات فيديو وسيناريوهات ريلز موجهة مع Lead Funnel يوضح خطوات الكشف ومصداقية الأطباء.",
        results: "مضاعفة الحجوزات الفعلية بنسبة 180% وخفض تكلفة المريض المكتسب بنسبة 42%.",
      },
      {
        title: "عيادة جلدية وتجميل نسائية",
        problem: "عروض خصومات عشوائية أضرت بمصداقية المركز وجذبت فئة غير مناسبة لأجهزة التجميل المتقدمة.",
        solution: "إعادة بناء التموضع (Positioning) والتركيز على خبرة الطبيبات ونتائج الجلسات الطبيعية بدون مبالغة.",
        execution: "حملات محتوى تعليمي وقصص نجاح حقيقية وفصل إعلانات الجلسات العلاجية عن التجميلية.",
        results: "حجز جدول المواعيد بالكامل لـ 3 أشهر متتالية وزيادة ولاء وإعادة زيارة المريضات.",
      },
      {
        title: "عيادات عظام ومفاصل تخصصية",
        problem: "صعوبة إقناع المرضى بجدوى التدخل الطبي التحفظي والتردد الشديد في اتخاذ قرار العلاج.",
        solution: "Audience Segmentation دقيق لفئات كبار السن والرياضيين، وصياغة لغة تلمس الألم اليومي للمريض.",
        execution: "سلسلة فيديوهات قصيرة تشرح خطوات العلاج بشفافية كاملة وتفكك مخاوف ما بعد التدخل.",
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
    <Section
      id="portfolio"
      eyebrow="سابقة الأعمال"
      title="دراسات حالة حقيقية (Case Studies)"
      description="مش مجرد Portfolio صور بدون سياق... بل تحليل واقعي: المشروع ← المشكلة ← الحل ← التنفيذ ← النتائج المحققة"
      tone="plain"
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-12 pb-4 border-b border-[var(--color-border-strong)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-[var(--color-accent)] text-white shadow-2xs"
                : "bg-[var(--color-bg-sunken)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Case Studies Editorial Stack */}
      <div className="space-y-12">
        {caseStudies[activeTab].map((study, idx) => (
          <div
            key={idx}
            className="pb-10 border-b border-[var(--color-border)] last:border-b-0 space-y-6 text-right"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                {study.title}
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>{study.results}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-bold text-red-600 block">التحدي والمشكلة:</span>
                <p className="text-[var(--color-muted)] leading-relaxed">{study.problem}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-[var(--color-gold-deep)] block">الحل والاستراتيجية:</span>
                <p className="text-[var(--color-ink-soft)] leading-relaxed">{study.solution}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-[var(--color-accent)] block">التنفيذ الميداني:</span>
                <p className="text-[var(--color-muted)] leading-relaxed">{study.execution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
