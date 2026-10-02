"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { Hourglass, ArrowLeft } from "lucide-react";

export function OfferBar() {
  // 48 hours countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: "01",
    hours: "18",
    minutes: "42",
    seconds: "15",
  });

  useEffect(() => {
    // 2 days from now countdown target
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
    <div className="bg-[#1f1e1d] text-[var(--color-bg-elevated)] border-b border-[#33322f] py-2 px-3 relative z-50">
      <Container size="wide">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Tag & Offer Text */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white text-[11px] font-semibold tracking-wide">
              خصم لفترة محدودة
            </span>
            <span className="text-gray-300 font-medium hidden sm:inline">
              اشترك الآن واحصل على العرض الحالي للكورس
            </span>
            <span className="text-gray-300 font-medium sm:hidden">
              احصل على العرض الحالي
            </span>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 font-mono">
            <span className="text-[var(--color-gold)] inline-flex items-center gap-1 text-xs">
              <Hourglass className="w-3.5 h-3.5 animate-pulse" />
              ينتهي خلال:
            </span>
            <div className="flex items-center gap-1 dir-ltr text-xs sm:text-sm font-bold bg-black/40 px-2 py-0.5 rounded-md border border-white/10 text-white">
              <span>{timeLeft.days}</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span>{timeLeft.hours}</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span>{timeLeft.minutes}</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span className="text-[var(--color-accent-hover)]">{timeLeft.seconds}</span>
            </div>

            {/* Direct CTA link */}
            <a
              href={siteConfig.whatsapp.getLink("مرحبًا، أود الاستفادة من العرض الحالي لكورس التسويق الطبي")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[var(--color-gold)] hover:text-white transition-colors text-xs font-semibold underline underline-offset-4 mr-2"
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
