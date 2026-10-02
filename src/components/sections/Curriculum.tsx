"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark, OrnamentDivider } from "@/components/ui/motifs";
import { ChevronDown, Check, FileText } from "lucide-react";

export function Curriculum() {
  const [activeTab, setActiveTab] = useState<"modules" | "update" | "journey">("modules");
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  // Tab 1: Core Modules
  const modules = [
    {
      part: "الجزء الأول",
      title: "فهم المجال الطبي وخصوصية الرعاية الصحية",
      tagline: "تأسيس الفهم الطبي الحقيقي وبناء الثقة",
      topics: [
        "طبيعة المجال الطبي وحساسية التعامل مع المريض.",
        "أنواع التخصصات والخدمات والفرق الجوهري بين التخصص والخدمة.",
        "طبيعة الثقة والمصداقية في الطب وكيف تُبنى بمرور الوقت.",
        "حساسية وأخلاقيات الرسائل الطبية والابتعاد عن الوعود الزائفة.",
        "طريقة قراءة المادة العلمية الطبية واستخراج زوايا المحتوى منها.",
      ],
      application: null,
    },
    {
      part: "الجزء الثاني",
      title: "دراسة السوق والجمهور الطبي (Medical Market & Audience)",
      tagline: "تحليل معمق للسوق والمنافسين وسلوك المريض",
      topics: [
        "Medical Market Research: البحث الميداني والرقمي في سوق العيادات.",
        "تفكيك المجال الطبي إلى خدمات محددة وعالية الربحية.",
        "تحليل المنافسين واكتشاف الفجوات والفرص غير المستغلة.",
        "Audience Segmentation: تقسيم الجمهور حسب الحاجة والقدرة.",
        "بناء ملفات المريض المستهدف (Patient Personas).",
        "تحليل المخاوف والاعتراضات الدقيقة ودوافع اتخاذ القرار ومصادر الثقة.",
        "مراحل الوعي الطبي (Awareness Stages) من الجهل بالأعراض حتى طلب العلاج.",
      ],
      application: "Competitor Research + Persona + Audience Segmentation",
    },
    {
      part: "الجزء الثالث",
      title: "الاستراتيجية المتكاملة وخطة المحتوى (Strategy & Content Plan)",
      tagline: "تحويل الأبحاث إلى مسار خطة عمل محكمة",
      topics: [
        "تحديد أهداف التسويق الطبي (Marketing Objectives).",
        "صياغة التموضع الطبي الفريد (Positioning).",
        "بناء عرض القيمة المقنع (Value Proposition).",
        "هندسة الرسالة المركزية والرسائل المساندة (Core Messaging).",
        "أعمدة المحتوى الطبي (Content Pillars) وزوايا التناول (Angles).",
        "قوالب وأشكال المحتوى (Formats: Reels, Carousels, Stories, Posts).",
        "توجيهات اتخاذ الإجراء (CTA: Call to Action) الطبية الأخلاقية.",
        "بناء الـ Content Plan السنوية والشهرية وفق أهداف العيادة.",
      ],
      application: "بناء استراتيجية كاملة لبراند طبي ومراكز تجميل من الصفر.",
    },
    {
      part: "الجزء الرابع",
      title: "كتابة الإعلانات والنصوص الطبية (Medical Copywriting)",
      tagline: "صناعة نصوص إعلانية محولة تحترم عقل المريض",
      topics: [
        "الفرق العملي بين Content Writing و Copywriting في الطب.",
        "كتابة الـ Hook الطبي الجاذب بدون تهويل أو خداع.",
        "فهم واستخدام لغة المريض وصوته الفعلي (Voice of Customer).",
        "بناء متن النص (Body) بقواعد الإقناع الطبي.",
        "كتابة المحتوى التوعوي والتعليمي ذي القيمة المرتفعة والمحتوى البيعي.",
        "السرد القصصي الطبي (Storytelling) ونماذج Problem & Solution و Before & After.",
        "تفكيك الاعتراضات ومخاوف الألم والتكلفة والنتائج.",
        "كتابة Social Posts وسيناريوهات Reels Scripts وإعلانات Ad Copy متكاملة.",
      ],
      application: "حزمة نصوص كاملة: إعلانات ممولة + ريلز + بوستات جاهزة للنشر.",
    },
  ];

  // Tab 2: New Update (10 Pillars)
  const updates = [
    { num: "01", title: "Medical Business", desc: "افهم نموذج عمل العيادة، ومصادر الإيراد، والطاقة الاستيعابية والخدمة ذات الأولوية.", deliverable: "Medical Business Diagnosis" },
    { num: "02", title: "Patient Journey", desc: "من أول لحظة اكتشاف المشكلة والأعراض لحد إتمام الحجز والحضور الفعلي.", deliverable: "Patient Journey & Leakage Map" },
    { num: "03", title: "Medical Service Research", desc: "تحليل الخدمة والمنافسين وVoice of Customer والاعتراضات والأدلة الطبية (Evidence).", deliverable: "Medical Service Research Dossier" },
    { num: "04", title: "Segmentation & Psychology", desc: "افهم اختلاف الشرائح النفسية للمرضى ومخاوفها ودوافع قرارها وعناصر الثقة.", deliverable: "Persona Messaging Cards" },
    { num: "05", title: "Positioning & Ethical Offer", desc: "حوّل التميز الحقيقي إلى عرض واضح وأخلاقي بدون مبالغة أو وعود علاجية.", deliverable: "Positioning Statement & Ethical Offer" },
    { num: "06", title: "Messaging Strategy", desc: "ابنِ الرسالة الأساسية والرسائل المساندة بدقة تناسب الجمهور ومرحلة الوعي.", deliverable: "Medical Messaging Strategy" },
    { num: "07", title: "Organic + Paid Acquisition", desc: "اربط المحتوى المجاني بالإعلانات الممولة والـ Retargeting والـ WhatsApp.", deliverable: "Organic & Paid Acquisition Map" },
    { num: "08", title: "Medical Funnel & CRO", desc: "اعرف أين يتسرب المريض من المسار البيعي وإجراء تحسينات معدل التحويل.", deliverable: "Medical Funnel & CRO Checklist" },
    { num: "09", title: "Measurement & Optimization", desc: "مش كل Lead = نتيجة! قياس: Bookings, Attendance Rate, Cost per Booking, ROAS.", deliverable: "Measurement & Optimization Plan" },
    { num: "10", title: "AI Native Medical Marketing", desc: "دمج الذكاء الاصطناعي في: البحث، التحليل، الأفكار، والصياغة مع المراجعة البشرية.", deliverable: "AI Workflow & Prompt Framework" },
  ];

  // Tab 3: Visual Journey (13 steps)
  const journey = [
    { step: "01", title: "Medical Business", desc: "فهم نموذج العمل ونقاط الربحية للعيادة" },
    { step: "02", title: "Niche & Services", desc: "تفكيك التخصص إلى خدمات محددة ذات أولوية" },
    { step: "03", title: "Patient Journey", desc: "رسم رحلة المريض وتحديد نقاط التسرب" },
    { step: "04", title: "Research & Evidence", desc: "دراسة السوق وتجميع الأدلة الطبية المعتمدة" },
    { step: "05", title: "Segments & Personas", desc: "بناء ملفات المرضى المستهدفين بدقة" },
    { step: "06", title: "Awareness & Psychology", desc: "فهم مراحل الوعي ودوافع اتخاذ القرار" },
    { step: "07", title: "Positioning & Offer", desc: "صياغة التموضع الطبي والعرض الأخلاقي الجذاب" },
    { step: "08", title: "Messaging Strategy", desc: "هندسة الرسائل المركزية والمساندة لكل شريحة" },
    { step: "09", title: "Content Pillars & Angles", desc: "تحديد ركائز وزوايا المحتوى المتنوعة" },
    { step: "10", title: "Hooks & Copy", desc: "كتابة المقدمات الجاذبة والنصوص الإعلانية المقنعة" },
    { step: "11", title: "Organic & Paid", desc: "ربط المحتوى التفاعلي بالحملات الممولة" },
    { step: "12", title: "Conversion & CRO", desc: "تحسين مسار الحجز وتفادي تسرب المرضى" },
    { step: "13", title: "Measurement & Optimization", desc: "قياس الأثر المالي وتحسين الأداء المستمر" },
  ];

  return (
    <Section
      id="curriculum"
      eyebrow="المنهج الدراسي والمنظومة"
      title="ماذا ستتعلم داخل الكورس؟"
      description="منظومة متكاملة من الأساسيات المعرفية إلى أعلى مهارات التنفيذ الإعلاني والتحويل المالي"
      tone="plain"
    >
      {/* Architectural Segmented Navigation */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-12 pb-4 border-b border-[var(--color-border-strong)]">
        <button
          onClick={() => setActiveTab("modules")}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "modules"
              ? "bg-[var(--color-accent)] text-white shadow-2xs"
              : "bg-[var(--color-bg-sunken)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"
          }`}
        >
          01. المنهج التأسيسي (الأجزاء الأربعة)
        </button>

        <button
          onClick={() => setActiveTab("update")}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "update"
              ? "bg-[var(--color-accent)] text-white shadow-2xs"
              : "bg-[var(--color-bg-sunken)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"
          }`}
        >
          02. التحديث الجديد (Medical Performance Marketing)
        </button>

        <button
          onClick={() => setActiveTab("journey")}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "journey"
              ? "bg-[var(--color-accent)] text-white shadow-2xs"
              : "bg-[var(--color-bg-sunken)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"
          }`}
        >
          03. مسار المنظومة الكامل (13 خطوة متسلسلة)
        </button>
      </div>

      {/* Tab 1 Content: Accordion Modules */}
      {activeTab === "modules" && (
        <div className="space-y-4 max-w-4xl">
          {modules.map((mod, idx) => {
            const isOpen = openModuleIndex === idx;
            return (
              <div
                key={mod.part}
                className="border-b border-[var(--color-border)] pb-4 last:border-b-0"
              >
                <button
                  onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                  className="w-full py-4 text-right flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)]">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold text-[var(--color-gold-deep)] block mb-0.5">
                        {mod.part}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-[var(--color-gold)] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[var(--color-accent)]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2 pb-6 ps-8 space-y-4">
                    <p className="text-xs font-semibold text-[var(--color-muted)]">
                      {mod.tagline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {mod.topics.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)]">
                          <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{t}</span>
                        </div>
                      ))}
                    </div>

                    {mod.application && (
                      <div className="p-4 rounded-xl bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 text-xs sm:text-sm text-[var(--color-ink)] font-medium">
                        <strong className="text-[var(--color-gold-deep)] font-semibold block mb-0.5">
                          المشروع والتطبيق العملي:
                        </strong>
                        {mod.application}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2 Content: The 10 Performance Upgrades */}
      {activeTab === "update" && (
        <div className="space-y-6">
          <p className="text-sm text-[var(--color-muted)] max-w-2xl mb-8">
            الكورس يتطور من مجرد Content & Copywriting إلى منظومة Medical Performance Marketing متكاملة:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 divide-y md:divide-y-0 divide-[var(--color-border)]">
            {updates.map((item) => (
              <div key={item.num} className="pt-6 md:pt-0 space-y-2 text-right">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                    {item.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-gold-deep)] font-medium pt-1">
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>المخرج: <strong className="font-semibold">{item.deliverable}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3 Content: The 13 Sequential Steps (Visual Journey) */}
      {activeTab === "journey" && (
        <div className="space-y-6 max-w-3xl">
          <p className="text-sm text-[var(--color-muted)] mb-8">
            منهجية علمية متسلسلة... <strong className="text-[var(--color-accent)] font-semibold">كل خطوة بتبني على اللي قبلها</strong>:
          </p>

          <div className="relative border-s border-[var(--color-gold)]/40 ms-4 ps-6 space-y-8">
            {journey.map((item, idx) => (
              <div key={item.step} className="relative text-right group">
                {/* Node dot */}
                <span className="absolute -start-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-gold)] ring-4 ring-[var(--color-bg)] group-hover:bg-[var(--color-accent)] transition-colors" />

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)]">
                      الخطوة {item.step}
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
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
