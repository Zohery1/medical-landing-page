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
          <TiltCard intensity={10}>
            <div className="bg-[var(--color-bg-elevated)] rounded-3xl border-2 border-[var(--color-accent)] p-8 sm:p-12 shadow-xl text-center space-y-8 relative overflow-hidden">
              {/* Decorative top terracotta light */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-accent)]" />

              <div>
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs font-semibold px-3.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] uppercase tracking-wider inline-block mb-3 border border-[var(--color-accent)]/20"
                >
                  السعر المعتمد
                </motion.span>
                <div className="flex items-baseline justify-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-display text-5xl sm:text-6xl font-extrabold text-[var(--color-accent)] tabular-nums"
                  >
                    2,000
                  </motion.span>
                  <span className="text-base sm:text-lg font-bold text-[var(--color-ink)]">
                    جنيه
                  </span>
                </div>
              </div>

              <div>
                <ShimmerButtonWrapper className="inline-block">
                  <Button
                    isWhatsApp
                    customMessage="مرحبًا، أود الاشتراك في كورس المحتوى والتسويق الطبي بسعر 2000 جنيه"
                    size="lg"
                    variant="terracotta"
                    className="w-full sm:w-auto px-12 text-base shadow-lg shadow-[var(--color-accent)]/25"
                  >
                    اشترك الآن
                  </Button>
                </ShimmerButtonWrapper>
              </div>
            </div>
          </TiltCard>
        </div>
      </Reveal>
    </Section>
  );
}
