import React from "react";
import { Container } from "@/components/ui/Primitives";
import { ShieldCheck, RotateCcw, Lock, CreditCard } from "lucide-react";

export function Guarantee() {
  return (
    <div className="py-12 bg-[var(--color-bg-sunken)]/40 border-b border-[var(--color-border)]">
      <Container size="default">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] border border-[var(--color-gold)]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-[var(--color-ink)]">
                ضمان 100% لاسترجاع المال خلال 7 أيام
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-0.5">
                جرّب الكورس بدون مخاطرة؛ استرداد كامل المبلغ إذا لم تجد فيه القيمة المتوقعة.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[var(--color-gold-deep)] font-medium">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              دفع آمن
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5" />
              تسهيلات دفع
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" />
              استرداد مرن
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
