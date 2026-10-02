"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { ArrowLeft, Clock } from "lucide-react";

export function OfferBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: "01",
    hours: "18",
    minutes: "42",
    seconds: "15",
  });

  useEffect(() => {
    const target = new Date().getTime() + 1000 * 60 * 60 * 42;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[var(--color-bg-sunken)] border-b border-[var(--color-border-strong)] text-[var(--color-ink)] py-2 text-xs relative z-50">
      <Container size="wide">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Badge & Message */}
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-semibold tracking-wide uppercase">
              عرض خاص
            </span>
            <span className="font-medium text-[var(--color-ink-soft)] text-xs hidden sm:inline">
              اشترك الآن واحصل على العرض المعتمد لكورس التسويق الطبي
            </span>
            <span className="font-medium text-[var(--color-ink-soft)] text-xs sm:hidden">
              العرض الحالي متاح لفترة محدودة
            </span>
          </div>

          {/* Countdown Clock & CTA Link */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="flex items-center gap-1.5 text-[var(--color-gold-deep)]">
              <Clock className="w-3.5 h-3.5 stroke-[1.8]" />
              <span className="font-sans text-[11px] font-medium hidden md:inline">ينتهي العرض خلال:</span>
            </div>

            <div className="flex items-center gap-1 bg-[var(--color-bg-elevated)] px-2.5 py-0.5 rounded-md border border-[var(--color-border)] text-[var(--color-ink)] font-bold tabular-nums">
              <span>{timeLeft.days}d</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span>{timeLeft.hours}h</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span>{timeLeft.minutes}m</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span className="text-[var(--color-accent)]">{timeLeft.seconds}s</span>
            </div>

            <a
              href={siteConfig.whatsapp.getLink("مرحبًا، أود الاستفادة من العرض الحالي لكورس التسويق الطبي")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-bold font-sans text-xs underline underline-offset-4 mr-1 transition-colors"
            >
              <span>احجز مقعدك</span>
              <ArrowLeft className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
