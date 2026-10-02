import React from "react";
import { Container } from "@/components/ui/Primitives";
import { ShieldCheck, RotateCcw, Lock, CreditCard } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-16 bg-[var(--color-bg-sunken)]/60 border-b border-[var(--color-border)]">
      <Container size="narrow">
        <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border-2 border-[var(--color-gold)]/40 p-8 sm:p-10 text-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] border border-[var(--color-gold)]/30 flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-3">
            جرّب الكورس بدون أدنى مخاطرة
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-ink-soft)] max-w-xl mx-auto leading-relaxed mb-6 font-normal">
            استرداد كامل المبلغ بنسبة <strong className="text-[var(--color-accent)] font-semibold">100% خلال 7 أيام</strong> إذا وجدت أن الكورس لا يناسب تطلعاتك أو لم تجد فيه القيمة المتوقعة.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-[var(--color-border)] text-xs text-[var(--color-ink)] font-semibold">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[var(--color-gold-deep)]" />
              <span>دفع آمن ومعتمد</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[var(--color-gold-deep)]" />
              <span>طرق دفع وتسهيلات متعددة</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[var(--color-gold-deep)]" />
              <span>سياسة استرداد واضحة ومرنة</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
