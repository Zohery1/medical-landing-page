import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { PatternBackdrop, DiamondMark } from "@/components/ui/motifs";

export function FinalCta() {
  const steps = [
    "Business",
    "Market",
    "Patient",
    "Strategy",
    "Copy",
    "Content",
    "Ads",
    "Conversion",
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-accent)] text-white relative overflow-hidden">
      {/* Delicate white girih watermark */}
      <PatternBackdrop variant="white" className="opacity-10" />

      <Container size="default" className="relative z-10 text-center space-y-8">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
            <span className="w-1.5 h-1.5 rotate-45 bg-white inline-block" />
            جاهز للانتقال للخطوة التالية؟
          </span>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] max-w-3xl mx-auto text-balance">
            ابدأ رحلتك في التسويق الطبي بمنظومة احترافية تحقق نتائج حقيقية
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-white/90 font-medium">
            مش هتبدأ من البوست العشوائي...
          </p>

          <p className="text-xs sm:text-sm text-white/80">
            هتبدأ من مسار العمل المتكامل:
          </p>

          {/* Clean pipeline pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {steps.map((s, idx) => (
              <React.Fragment key={s}>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono">
                  {s}
                </span>
                {idx < steps.length - 1 && (
                  <span className="text-white/50 text-xs font-bold select-none">
                    ←
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button
            isWhatsApp
            customMessage="مرحبًا، أنا جاهز للاشتراك في كورس Medical Performance Marketing"
            size="lg"
            variant="dark"
            className="text-base sm:text-lg px-10 py-4 shadow-xl"
          >
            اشترك الآن وتواصل عبر واتساب
          </Button>

          <p className="text-xs text-white/70 mt-4">
            دورة مسجلة فورية + تطبيقات عملية + حقيبة الـ 23 مخرج وقالب
          </p>
        </div>
      </Container>
    </section>
  );
}
