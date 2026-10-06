"use client";

import React from "react";
import { Container } from "@/components/ui/Primitives";
import { ShieldCheck, RotateCcw, Lock, CreditCard } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function Guarantee() {
  return (
    <div className="py-16 bg-[var(--color-bg-sunken)]/40 border-b border-[var(--color-border)] overflow-hidden">
      <Container size="default">
        <Reveal direction="up">
          <div className="p-1.5 rounded-[1.75rem] bg-gradient-to-b from-[var(--color-border)]/80 to-[var(--color-border-strong)]/40 border border-[var(--color-border-strong)]/60 shadow-[0_16px_36px_-12px_rgba(22,21,20,0.05)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right p-6 sm:p-7 rounded-[calc(1.75rem-0.375rem)] bg-[var(--color-bg-elevated)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)]">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-13 h-13 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] border border-[var(--color-gold)]/30 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(156,123,69,0.1)]"
                >
                  <ShieldCheck className="w-6 h-6 stroke-[1.8] text-[var(--color-accent)]" />
                </motion.div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)]">
                    جرّب الكورس بدون مخاطرة
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1 font-medium leading-relaxed">
                    استرداد المبلغ بالكامل خلال 7 أيام إذا كنت غير راغب في استكمال الكورس. ضمان 100% لاسترجاع المال
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[var(--color-gold-deep)] font-semibold shrink-0">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  دفع آمن
                </span>
                <span className="text-[var(--color-border-strong)] select-none">•</span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  طرق دفع متعددة
                </span>
                <span className="text-[var(--color-border-strong)] select-none">•</span>
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  سياسة استرداد واضحة
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
