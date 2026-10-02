import React from "react";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { PatternBackdrop } from "@/components/ui/motifs";

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
    <section className="py-20 md:py-28 bg-[var(--color-accent)] text-white relative overflow-hidden">
      {/* Subtle girih watermark */}
      <PatternBackdrop variant="white" className="opacity-10" />

      <Container size="default" className="relative z-10 text-center space-y-6">
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          جاهز تبدأ في Medical Marketing بطريقة مختلفة؟
        </h2>

        <div className="space-y-3 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-white/95 font-medium">
            مش هتبدأ من البوست...
          </p>

          <p className="text-xs sm:text-sm text-white/80">
            هتبدأ من:
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
                    →
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
            customMessage="مرحبًا، أود الاشتراك في كورس Medical Performance Marketing"
            size="lg"
            variant="dark"
            className="text-base sm:text-lg px-10 py-3.5 shadow-xl"
          >
            اشترك الآن
          </Button>

          <p className="text-xs text-white/80 mt-3 font-medium">
            ابدأ رحلتك في Medical Performance Marketing
          </p>
        </div>
      </Container>
    </section>
  );
}
