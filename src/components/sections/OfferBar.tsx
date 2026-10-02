"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";

export function OfferBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date().getTime() + 1000 * 60 * 60 * 48;

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
          {/* Badge & Text */}
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-accent)] text-white text-[11px] font-semibold">
              خصم لفترة محدودة
            </span>
            <span className="font-medium text-[var(--color-ink-soft)] text-xs">
              اشترك الآن واحصل على العرض الحالي
            </span>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="font-sans text-xs text-[var(--color-gold-deep)] font-medium">
              ⏳ ينتهي العرض خلال:
            </span>

            <div className="flex items-center gap-1 bg-[var(--color-bg-elevated)] px-2.5 py-0.5 rounded-md border border-[var(--color-border)] text-[var(--color-ink)] font-bold tabular-nums">
              <span>{timeLeft.days}</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span>{timeLeft.hours}</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span>{timeLeft.minutes}</span>
              <span className="text-[var(--color-gold)]">:</span>
              <span className="text-[var(--color-accent)]">{timeLeft.seconds}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
