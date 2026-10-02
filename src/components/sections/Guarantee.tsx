"use client";

import React from "react";
import { Container } from "@/components/ui/Primitives";
import { ShieldCheck, RotateCcw, Lock, CreditCard } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function Guarantee() {
  return (
    <div className="py-12 bg-[var(--color-bg-sunken)]/40 border-b border-[var(--color-border)] overflow-hidden">
      <Container size="default">
        <Reveal direction="up">
          <TiltCard intensity={5} glare={false}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right p-6 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] border border-[var(--color-gold)]/30 flex items-center justify-center shrink-0 shadow-inner"
                >
                  <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                </motion.div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)]">
                    جرّب الكورس بدون مخاطرة
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-0.5">
                    استرداد المبلغ بالكامل خلال 7 أيام إذا كنت غير راغب في استكمال الكورس. ضمان 100% لاسترجاع المال
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-[var(--color-gold-deep)] font-medium">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  دفع آمن
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  طرق دفع متعددة
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  سياسة استرداد واضحة
                </span>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </Container>
    </div>
  );
}
