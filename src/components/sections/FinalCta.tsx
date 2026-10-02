"use client";

import React from "react";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { PatternBackdrop } from "@/components/ui/motifs";
import { Reveal, ShimmerButtonWrapper } from "@/components/ui/motion-primitives";

export function FinalCta() {
  const steps = [
    { num: "01", name: "Business" },
    { num: "02", name: "Market" },
    { num: "03", name: "Patient" },
    { num: "04", name: "Strategy" },
    { num: "05", name: "Copy" },
    { num: "06", name: "Content" },
    { num: "07", name: "Ads" },
    { num: "08", name: "Conversion" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--color-accent)] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <PatternBackdrop variant="white" className="w-full h-full" />
      </div>

      <Container size="default" className="relative z-10 text-center space-y-6">
        <Reveal direction="down">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            جاهز تبدأ في Medical Marketing بطريقة مختلفة؟
          </h2>
        </Reveal>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Reveal direction="up" delay={0.1}>
            <p className="text-base sm:text-lg text-white/95 font-medium">
              مش هتبدأ من البوست...
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <p className="text-xs sm:text-sm text-white/80">
              هتبدأ من:
            </p>
          </Reveal>

          {/* Clean pipeline pills flowing from Right to Left (RTL) */}
          <Reveal direction="up" delay={0.2}>
            <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {steps.map((s, idx) => (
                <React.Fragment key={s.name}>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/25 hover:bg-white/20 transition-colors duration-150 shadow-xs">
                    <span className="font-mono text-[10px] text-white/70 font-bold">
                      {s.num}
                    </span>
                    <span className="font-mono text-xs font-semibold text-white">
                      {s.name}
                    </span>
                  </div>

                  {idx < steps.length - 1 && (
                    <span className="text-white/70 text-xs font-bold select-none">
                      ←
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Action Button */}
        <Reveal direction="up" delay={0.3}>
          <div className="pt-4">
            <ShimmerButtonWrapper className="inline-block">
              <Button
                isWhatsApp
                customMessage="مرحبًا، أود الاشتراك في كورس Medical Performance Marketing"
                size="lg"
                variant="dark"
                className="text-base sm:text-lg px-10 py-3.5 shadow-2xl"
              >
                اشترك الآن
              </Button>
            </ShimmerButtonWrapper>

            <p className="text-xs text-white/90 mt-3 font-medium">
              ابدأ رحلتك في Medical Performance Marketing
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
