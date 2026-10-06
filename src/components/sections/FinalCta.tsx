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
    <section className="py-24 md:py-36 bg-[var(--color-accent)] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <PatternBackdrop variant="white" className="w-full h-full" />
      </div>

      <Container size="default" className="relative z-10 text-center space-y-8">
        <Reveal direction="down">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto tracking-tight">
            جاهز تبدأ في Medical Marketing بطريقة مختلفة؟
          </h2>
        </Reveal>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Reveal direction="up" delay={0.1}>
            <p className="text-base sm:text-xl text-white/95 font-medium">
              مش هتبدأ من البوست...
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <p className="text-xs sm:text-sm text-white/80 font-medium">
              هتبدأ من:
            </p>
          </Reveal>
        </div>

        {/* Clean pipeline pills flowing from Right to Left (RTL) — single line, scrolls horizontally on small screens */}
        <Reveal direction="up" delay={0.2}>
          <div className="overflow-x-auto -mx-4 px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div dir="rtl" className="flex flex-nowrap items-center gap-2 w-max mx-auto">
              {steps.map((s, idx) => (
                <React.Fragment key={s.name}>
                  <div className="inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-150 shadow-xs">
                    <span className="font-mono text-[10px] text-white/70 font-bold">
                      {s.num}
                    </span>
                    <span className="font-mono text-xs font-semibold text-white">
                      {s.name}
                    </span>
                  </div>

                  {idx < steps.length - 1 && (
                    <span className="text-white/60 text-xs font-bold select-none" aria-hidden="true">
                      ←
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Action Button with Shimmer & Nested Button-in-Button */}
        <Reveal direction="up" delay={0.3}>
          <div className="pt-4">
            <ShimmerButtonWrapper className="inline-block">
              <Button
                isWhatsApp
                size="lg"
                variant="dark"
                className="text-base sm:text-lg px-10 py-3.5 shadow-2xl bg-black text-white hover:bg-neutral-900 border border-white/15"
              >
                اشترك الآن
              </Button>
            </ShimmerButtonWrapper>

            <p className="text-xs text-white/90 mt-3.5 font-medium">
              ابدأ رحلتك في Medical Performance Marketing
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
