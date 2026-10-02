import React from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="العرض والسعر"
      title="السعر الحالي المعتمد:"
      tone="plain"
      align="center"
    >
      <div className="max-w-xl mx-auto bg-[var(--color-bg-elevated)] rounded-3xl border border-[var(--color-accent)] p-8 sm:p-12 shadow-sm text-center space-y-8">
        <div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] uppercase tracking-wider inline-block mb-3">
            السعر المعتمد
          </span>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-[var(--color-accent)] tabular-nums">
              2,000
            </span>
            <span className="text-base sm:text-lg font-bold text-[var(--color-ink)]">
              جنيه
            </span>
          </div>
        </div>

        <div>
          <Button
            isWhatsApp
            customMessage="مرحبًا، أود الاشتراك في كورس المحتوى والتسويق الطبي بسعر 2000 جنيه"
            size="lg"
            variant="terracotta"
            className="w-full sm:w-auto px-12 text-base shadow-sm"
          >
            اشترك الآن
          </Button>
        </div>
      </div>
    </Section>
  );
}
