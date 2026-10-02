"use client";

import React, { useState } from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { ChevronDown, CheckCircle2, Sparkles, FolderCheck } from "lucide-react";

export function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const modules = [
    {
      part: "الجزء الأول",
      title: "فهم المجال الطبي وخصوصية القطاع الصحي",
      tagline: "تأسيس الفهم الطبي الحقيقي",
      topics: [
        "طبيعة المجال الطبي وحساسية التعامل مع المرضى.",
        "أنواع التخصصات الطبية والخدمات العلاجية والتجميلية.",
        "الفرق الجوهري بين التخصص الطبي والخدمة المحددة.",
        "طبيعة الثقة والمصداقية في المجال الطبي وكيف تُبنى.",
        "حساسية وأخلاقيات الرسائل الطبية وتجنب المحظورات.",
        "طريقة قراءة واستخدام المادة العلمية والطبية والتطبيق عليها.",
      ],
      application: null,
    },
    {
      part: "الجزء الثاني",
      title: "دراسة السوق والجمهور الطبي (Medical Market & Audience)",
      tagline: "تحليل معمق للسوق والمنافسين وسلوك المريض",
      topics: [
        "Medical Market Research: البحث الميداني والرقمي في السوق الطبي.",
        "تفكيك المجال الطبي إلى تخصصات وخدمات ذات ربحية وأولوية.",
        "تحليل المنافسين واكتشاف الفجوات والفرص غير المستغلة.",
        "Audience Segmentation: تقسيم الجمهور حسب الاحتياج والقدرة.",
        "بناء ملفات المريض المستهدف (Patient Personas).",
        "تحليل مخاوف المريض واعتراضاته الدقيقة قبل الحجز.",
        "سيكولوجية اتخاذ القرار ومصادر بناء الثقة لدى المريض.",
        "مراحل الوعي الطبي (Awareness Stages) من الجهل بالحالة حتى طلب العلاج.",
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
        "أعمدة المحتوى الطبي (Content Pillars) وتوزيعها الذكي.",
        "زوايا التناول الإبداعية (Content Angles) والتنويع النفسي.",
        "قوالب وأشكال المحتوى (Formats: Reels, Carousels, Stories, Articles).",
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
        "كتابة المحتوى التوعوي والتعليمي ذي القيمة المرتفعة.",
        "كتابة المحتوى البيعي المباشر والحملات الترويجية.",
        "السرد القصصي الطبي (Storytelling) وعرض رحلة المريض.",
        "نماذج Problem & Solution و Before & After الأخلاقية.",
        "تفكيك الاعتراضات ومخاوف الألم والتكلفة والنتائج.",
        "كتابة Social Posts وسيناريوهات Reels Scripts وإعلانات Ad Copy متكاملة.",
      ],
      application: "حزمة نصوص كاملة: إعلانات ممولة + ريلز + بوستات سوشيال جاهزة للنشر.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-20 bg-[var(--color-bg)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="terracotta">المنهج الدراسي التطبيقي</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            ماذا ستتعلم داخل الكورس؟
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            4 أجزاء رئيسية متدرجة من الأساسيات المعرفية إلى أعلى مهارات التنفيذ الإعلاني
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[var(--radius-card)] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[var(--color-bg-elevated)] border-[var(--color-accent)] shadow-sm"
                    : "bg-[var(--color-bg-elevated)]/70 border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[var(--color-accent)] text-white"
                          : "bg-[var(--color-bg-sunken)] text-[var(--color-ink-soft)]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-[var(--color-gold-deep)] block mb-0.5">
                        {module.part}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)]">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-soft)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[var(--color-bg-sunken)]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Body Content */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-[var(--color-border)]/60 text-right">
                    <p className="text-xs font-semibold text-[var(--color-muted)] mb-4">
                      {module.tagline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {module.topics.map((topic, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{topic}</span>
                        </div>
                      ))}
                    </div>

                    {/* Practical Application Box */}
                    {module.application && (
                      <div className="p-4 rounded-xl bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 flex items-start gap-3">
                        <FolderCheck className="w-5 h-5 text-[var(--color-gold-deep)] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-[var(--color-gold-deep)] block mb-0.5">
                            المشروع والتطبيق العملي:
                          </span>
                          <p className="text-xs sm:text-sm text-[var(--color-ink)] font-medium">
                            {module.application}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
