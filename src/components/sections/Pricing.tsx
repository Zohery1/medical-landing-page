"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";
import { Reveal, TiltCard, ShimmerButtonWrapper } from "@/components/ui/motion-primitives";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="العرض والسعر"
      title="السعر الحالي المعتمد:"
      tone="plain"
      align="center"
    >
      <Reveal direction="up" delay={0.1}>
        <div className="max-w-xl mx-auto">
          {/* Flagship Double-Bezel (Doppelrand) Architecture */}
          <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-[var(--color-accent)]/25 via-[var(--color-gold)]/15 to-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 shadow-[0_24px_60px_-15px_rgba(168,76,38,0.18)] transition-transform duration-200 hover:-translate-y-1">
            <div className="bg-[var(--color-bg-elevated)] rounded-[calc(2.5rem-0.5rem)] p-8 sm:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)] text-center space-y-8 relative overflow-hidden">
              {/* Decorative top terracotta light */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-accent)]" />

              <div>
                <motion.span
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs font-semibold px-4 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] uppercase tracking-wider inline-block mb-3 border border-[var(--color-accent)]/20 shadow-2xs"
                >
                  السعر المعتمد الحالي
                </motion.span>
                <div className="flex items-baseline justify-center gap-2 mt-1">
                  <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-accent)] tabular-nums tracking-tight">
                    2,000
                  </span>
                  <span className="text-base sm:text-xl font-bold text-[var(--color-ink)]">
                    جنيه مصري
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <ShimmerButtonWrapper className="inline-block w-full sm:w-auto">
                  <Button
                    isWhatsApp
                    size="lg"
                    variant="terracotta"
                    className="w-full sm:w-auto px-10 text-base shadow-xl shadow-[var(--color-accent)]/25"
                  >
                    اشترك الآن في الكورس
                  </Button>
                </ShimmerButtonWrapper>

                <p className="text-xs sm:text-sm text-[var(--color-muted)] font-medium max-w-sm mx-auto leading-relaxed">
                  دورة مسجلة تطبيقية + تطبيقات + Templates + مخرجات عملية
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
