"use client";

import React, { useState } from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Play, Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

export function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const videoTestimonials = [
    {
      name: "د. أحمد سامي",
      role: "أخصائي جراحة وزراعة الأسنان",
      topic: "كيف تضاعفت حجوزات العيادة بعد تطبيق مسار الرحلة",
      duration: "02:45",
    },
    {
      name: "سارة خليل",
      role: "Medical Copywriter & Content Lead",
      topic: "الانتقال من كتابة البوستات العامة إلى استراتيجيات كاملة",
      duration: "03:10",
    },
    {
      name: "م. كريم عبد الرحمن",
      role: "مدير تسويق مجمع عيادات تخصصية",
      topic: "ضبط تكلفة المريض المكتسب وتفادي تسرب الـ Leads",
      duration: "01:55",
    },
  ];

  const writtenReviews = [
    {
      text: "الكورس نقل تفكيري من مجرد كاتب بيقعد قدام الشاشة مستني فكرة تنزل عليه، إلى مسوق فاهم بيزنس وعنده خطوات واضحة من دراسة المنافس لحد كتابة الإعلان وقياسه.",
      author: "محمود إبراهيم",
      role: "Senior Copywriter",
      stars: 5,
    },
    {
      text: "بصراحة كنت بعاني في التعامل مع عيادات الأسنان لأن المادة العلمية صعبة، والعميل دايماً بيعترض. طريقة تفكيك الخدمة والـ Voice of Customer فرقت معايا جداً.",
      author: "نورهان الشافعي",
      role: "Freelance Content Creator",
      stars: 5,
    },
    {
      text: "أنا طبيب وعندي عيادتي، ومكنتش فاهم ليه الإعلانات بتجيب رسايل كتير ومفيش حد بيحضر. بعد ما فهمت الـ Leakage Map عرفت المشكلة كانت فين في سكرتارية الحجز والرسائل.",
      author: "د. هيثم منصور",
      role: "طبيب أسنان وأخصائي تقويم",
      stars: 5,
    },
    {
      text: "أهم حاجة بالنسبة لي كانت موديول الـ AI، مش مجرد شات جي بي تي عادي، لكن إزاي تبني الـ Context الطبي وتراجع عليه. المخرجات اختصرت 70% من وقتي.",
      author: "عمر فاروق",
      role: "Social Media Specialist",
      stars: 5,
    },
    {
      text: "قوالب ومخرجات الكورس لوحدها تسوى أضعاف تمن الكورس. الـ Hook Bank وسيناريوهات الريلز استعملتها تاني يوم مع عميلي وحققت أعلى نسبة مشاهدات وحجوزات.",
      author: "ياسمين عبد العزيز",
      role: "Agency Media Buyer",
      stars: 5,
    },
  ];

  const nextSlide = () => {
    setSliderIndex((prev) => (prev + 1) % writtenReviews.length);
  };

  const prevSlide = () => {
    setSliderIndex((prev) => (prev - 1 + writtenReviews.length) % writtenReviews.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-[var(--color-bg-sunken)]/40 border-b border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="gold">تجارب حقيقية</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            آراء وتجارب المتدربين والعملاء
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            شاهد كيف ساعد المنهج المسوقين والأطباء على إحداث فارق ملموس في نتائجهم
          </p>
        </div>

        {/* 1. Video Testimonials */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-6 text-right">
            فيديوهات وتجارب مسجلة:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border)] p-4 overflow-hidden shadow-2xs hover:shadow-xs group"
              >
                {/* Video screen placeholder with arch top */}
                <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-[#3a281e] via-[#1f1e1d] to-[#2c221b] flex flex-col items-center justify-center p-4 text-center cursor-pointer group-hover:scale-[1.01] transition-transform">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current mr-0.5" />
                  </div>
                  <span className="absolute bottom-2.5 left-2.5 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {item.duration}
                  </span>
                </div>

                <div className="pt-4 text-right">
                  <h4 className="font-display text-base font-bold text-[var(--color-ink)]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[var(--color-gold-deep)] font-semibold mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-2 leading-relaxed">
                    &quot;{item.topic}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Written Reviews Slider */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
              تقييمات المتدربين المكتوبة:
            </h3>

            {/* Slider controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards for desktop (3 cards) & mobile (1 card) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const review = writtenReviews[(sliderIndex + offset) % writtenReviews.length];
              return (
                <div
                  key={offset}
                  className={`bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 flex flex-col justify-between shadow-2xs ${
                    offset > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[var(--color-gold)] mb-3">
                      {[...Array(review.stars)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <Quote className="w-6 h-6 text-[var(--color-accent)]/30 mb-2" />

                    <p className="text-xs sm:text-sm text-[var(--color-ink)] leading-relaxed font-normal">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[var(--color-border)] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-bg-sunken)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink)] font-bold text-xs">
                      <User className="w-4 h-4 text-[var(--color-muted)]" />
                    </div>
                    <div>
                      <h4 className="font-display text-xs sm:text-sm font-bold text-[var(--color-ink)]">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-[var(--color-muted)]">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
