"use client";

import React, { useState } from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { ChevronDown, HelpCircle } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "هل لازم أكون طبيب عشان أستفيد من الكورس؟",
      a: "لا، إطلاقاً. الكورس مخصص لتعلم التسويق وصناعة المحتوى والكتابة الإعلانية للمجال الطبي، وليس لتقديم تشخيصات أو استشارات طبية سريرية. يناسب المسوقين، كتاب المحتوى، الأطباء، ومديري العيادات على حد سواء.",
    },
    {
      q: "هل الكورس مناسب للمبتدئين؟",
      a: "نعم، المنهج مصمم بحيث يبدأ من المفاهيم التأسيسية لفهم المجال الطبي ثم يتدرج خطوة بخطوة إلى الاستراتيجيات والتطبيقات المتقدمة.",
    },
    {
      q: "هل الكورس للـ Content فقط؟",
      a: "لا. المحتوى الأساسي قوي جداً في Content Strategy و Copywriting، والتحديث الجديد يوسع المنظومة بالكامل لتشمل Performance Marketing، وإعلانات Paid Ads، و Funnel، و CRO، والقياس المالي.",
    },
    {
      q: "لماذا أحتاج الكورس مع وجود ChatGPT وأدوات الذكاء الاصطناعي؟",
      a: "لأن أداة الذكاء الاصطناعي تستطيع توليد النص، لكن جودة النتيجة وقدرتها على الإقناع تعتمد بنسبة 100% على الـ Context، والـ Brief، والاستراتيجية، والتعديل البشري الطبي الواعي.",
    },
    {
      q: "هل سأتعلم إطلاق الإعلانات الممولة؟",
      a: "نعم، ضمن محاور التحديث الجديد يتم ربط المحتوى المجاني (Organic) بالإعلانات المدفوعة (Paid)، واختيار الـ Creatives، والـ Retargeting، وبناء مسار التحويل للواتساب والصفحات.",
    },
    {
      q: "هل يوجد تطبيق عملي داخل الكورس؟",
      a: "نعم وبشكل أساسي. المنهج قائم على منهجية تدريبية صارمة: Explain ← Model ← Practice ← Review، وتخرج بـ 20+ أداة ومخرج عملي.",
    },
    {
      q: "هل أحتاج لخبرة تسويقية سابقة؟",
      a: "لا تشترط خبرة محددة للبدء، ولكن كلما كانت لديك خلفية عامة في التسويق ستتمكن من تطبيق الأفكار المتقدمة بسرعة أكبر.",
    },
    {
      q: "هل الكورس يضمن لي عملاء أو وظيفة محددة؟",
      a: "لا. الكورس يقدم المعرفة العملية، والمنهجية، والقوالب الجاهزة التي تمكنك من المنافسة باحترافية، ولكنه لا يقدم وعوداً أو ضمانات وهمية لوظيفة أو دخل معين، فالأمر يعتمد على سعيك وتطبيقك.",
    },
    {
      q: "هل التحديث الجديد متاح للمشتركين؟",
      a: "نعم، يحصل المشتركون في الدورة على كافة تحديثات ومحاور منظومة Medical Performance Marketing الجديدة.",
    },
    {
      q: "هل توجد خيارات وتسهيلات للدفع أو التقسيط؟",
      a: "يمكنك التواصل معنا مباشرة عبر زر الواتساب لمعرفة كافة وسائل وتسهيلات الدفع المتاحة حالياً وفق بلدك.",
    },
    {
      q: "ما هي مدة صلاحية الوصول لمحتوى الكورس؟",
      a: "تحصل على وصول دائم ومستمر للمحاضرات المسجلة وكافة ملفات الـ Toolkit لتتمكن من الرجوع إليها ومراجعتها متى شئت.",
    },
    {
      q: "هل توجد شهادة إتمام للكورس؟",
      a: "نعم، يحصل المتدرب على شهادة إتمام بعد استكمال مشاهدة المحاضرات وتسليم التطبيقات والمشاريع العملية للمنظومة.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <Container size="narrow">
        <div className="text-center space-y-4 mb-16">
          <Eyebrow variant="gold">إجابات واضحة</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            الأسئلة الشائعة (FAQ)
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            كل ما يدور في ذهنك حول الكورس ومحتواه وطريقة الاستفادة منه
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[var(--color-bg-elevated)] border-[var(--color-accent)] shadow-2xs"
                    : "bg-[var(--color-bg-elevated)]/60 border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)]">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-soft)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[var(--color-bg-sunken)]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)]/50 text-right font-normal">
                    {item.a}
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
