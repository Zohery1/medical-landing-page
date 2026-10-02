"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Play, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoTestimonials = [
    { name: "د. أحمد سامي", role: "أخصائي جراحة وزراعة الأسنان", topic: "كيف تضاعفت حجوزات العيادة بعد تطبيق مسار الرحلة", duration: "02:45" },
    { name: "سارة خليل", role: "Medical Copywriter & Content Lead", topic: "الانتقال من كتابة البوستات العامة إلى استراتيجيات كاملة", duration: "03:10" },
    { name: "م. كريم عبد الرحمن", role: "مدير تسويق مجمع عيادات تخصصية", topic: "ضبط تكلفة المريض المكتسب وتفادي تسرب الـ Leads", duration: "01:55" },
  ];

  const writtenReviews = [
    {
      text: "الكورس نقل تفكيري من مجرد كاتب بيقعد قدام الشاشة مستني فكرة تنزل عليه، إلى مسوق فاهم بيزنس وعنده خطوات واضحة من دراسة المنافس لحد كتابة الإعلان وقياسه.",
      author: "محمود إبراهيم",
      role: "Senior Copywriter",
    },
    {
      text: "كنت بعاني في التعامل مع عيادات الأسنان لأن المادة العلمية صعبة، والعميل دايماً بيعترض. طريقة تفكيك الخدمة والـ Voice of Customer فرقت معايا جداً في النتائج.",
      author: "نورهان الشافعي",
      role: "Freelance Content Creator",
    },
    {
      text: "أنا طبيب وعندي عيادتي، ومكنتش فاهم ليه الإعلانات بتجيب رسايل كتير ومفيش حد بيحضر. بعد ما فهمت الـ Leakage Map عرفت المشكلة كانت فين في سكرتارية الحجز والرسائل.",
      author: "د. هيثم منصور",
      role: "طبيب أسنان وأخصائي تقويم",
    },
    {
      text: "أهم جزء كان موديول الـ AI، مش مجرد شات جي بي تي عادي، لكن إزاي تبني الـ Context الطبي وتراجع عليه. المخرجات اختصرت 70% من وقت العمل اليومي.",
      author: "عمر فاروق",
      role: "Social Media Specialist",
    },
    {
      text: "قوالب ومخرجات الكورس لوحدها تسوى أضعاف تمن الكورس. الـ Hook Bank وسيناريوهات الريلز استعملتها تاني يوم مع عميلي وحققت أعلى نسبة مشاهدات وحجوزات.",
      author: "ياسمين عبد العزيز",
      role: "Agency Media Buyer",
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % writtenReviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + writtenReviews.length) % writtenReviews.length);

  return (
    <Section
      id="testimonials"
      eyebrow="تجارب المتدربين والعملاء"
      title="نتائج وآراء واقعية من الميدان"
      description="شاهد كيف ساعد المنهج المسوقين والأطباء على إحداث فارق ملموس في مسارهم المهني ونتائج عياداتهم"
      tone="sunken"
    >
      <div className="space-y-16">
        {/* 1. Video Teasers (Arch-topped compact display) */}
        <div>
          <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-6 text-right">
            فيديوهات وتجارب مسجلة:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="group cursor-pointer space-y-3 text-right"
              >
                <div className="relative aspect-video rounded-2xl bg-gradient-to-tr from-[#2d211a] via-[#1f1e1d] to-[#241a15] flex flex-col items-center justify-center border border-[var(--color-gold)]/30 group-hover:border-[var(--color-accent)] transition-all overflow-hidden shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current mr-0.5" />
                  </div>
                  <span className="absolute bottom-2.5 left-2.5 bg-black/60 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {item.duration}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display text-sm font-bold text-[var(--color-ink)]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[var(--color-gold-deep)] font-medium">
                    {item.role}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                    &quot;{item.topic}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Focused Editorial Quote Slider */}
        <div className="pt-8 border-t border-[var(--color-border)]">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-1 text-[var(--color-gold)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="font-display text-lg sm:text-2xl text-[var(--color-ink)] leading-relaxed text-balance">
              &quot;{writtenReviews[currentIndex].text}&quot;
            </p>

            <div>
              <h4 className="font-display text-base font-bold text-[var(--color-accent)]">
                {writtenReviews[currentIndex].author}
              </h4>
              <p className="text-xs text-[var(--color-muted)] font-medium mt-0.5">
                {writtenReviews[currentIndex].role}
              </p>
            </div>

            {/* Slider navigation */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-[var(--color-muted)]">
                {currentIndex + 1} / {writtenReviews.length}
              </span>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
