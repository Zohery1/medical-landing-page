"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "هل لازم أكون طبيب عشان أستفيد من الكورس؟",
      a: "لا، إطلاقاً. الكورس مخصص لتعلم التسويق وصناعة المحتوى والكتابة الإعلانية للمجال الطبي، وليس لتقديم تشخيصات أو استشارات طبية سريرية. يناسب المسوقين، كتاب المحتوى، الأطباء، ومديري العيادات على حد سواء.",
    },
    {
      q: "هل الكورس مناسب للمبتدئين؟",
      a: "نعم، المنهج مصمم بحيث يبدأ من المفاهيم التأسيسية لفهم خصوصية المجال الطبي ثم يتدرج خطوة بخطوة إلى الاستراتيجيات والتطبيقات المتقدمة.",
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
      a: "نعم وبشكل أساسي. المنهج قائم على منهجية تدريبية صارمة: Explain ← Model ← Practice ← Review، وتخرج بـ 23 أداة ومخرج عملي.",
    },
    {
      q: "هل أحتاج لخبرة تسويقية سابقة؟",
      a: "لا تشترط خبرة محددة للبدء، ولكن كلما كانت لديك خلفية عامة في التسويق ستتمكن من تطبيق الأفكار المتقدمة بسرعة أكبر.",
    },
    {
      q: "هل الكورس يضمن لي عملاء أو وظيفة محددة؟",
      a: "لا. الكورس يقدم المعرفة العملية، والمنهجية، والقوالب الجاهزة التي تمكنك من المنافسة باحترافية، ولكنه لا يقدم وعوداً وهمية، فالأمر يعتمد على سعيك وتطبيقك.",
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

  return (
    <Section
      id="faq"
      eyebrow="الأسئلة الشائعة"
      title="إجابات واضحة ومباشرة"
      description="كل ما يدور في ذهنك حول الكورس ومحتواه وطريقة الاستفادة القصوى منه"
      tone="plain"
      width="narrow"
    >
      <div className="divide-y divide-[var(--color-border-strong)] border-y border-[var(--color-border-strong)]">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-5 text-right">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-right flex items-center justify-between gap-4 cursor-pointer select-none group"
              >
                <span className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--color-gold)] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[var(--color-accent)]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pt-3 pb-2 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed max-w-[65ch]">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
