"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { PatternBackdrop } from "@/components/ui/motifs";
import { motion } from "motion/react";
import { Reveal, ShimmerButtonWrapper } from "@/components/ui/motion-primitives";

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

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-accent)] text-white relative overflow-hidden">
      {/* Subtle animated rotating girih watermark */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none opacity-10"
      >
        <PatternBackdrop variant="white" className="w-full h-full" />
      </motion.div>

      <Container size="default" className="relative z-10 text-center space-y-6">
        <Reveal direction="down">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            جاهز تبدأ في Medical Marketing بطريقة مختلفة؟
          </h2>
        </Reveal>

        <div className="space-y-3 max-w-2xl mx-auto">
          <Reveal direction="up" delay={0.1}>
            <p className="text-base sm:text-lg text-white/95 font-medium">
              مش هتبدأ من البوست...
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-xs sm:text-sm text-white/80">
              هتبدأ من:
            </p>
          </Reveal>

          {/* Clean pipeline pills with traveling pulse */}
          <Reveal direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <React.Fragment key={s}>
                    <motion.span
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        backgroundColor: isActive ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
                        borderColor: isActive ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="px-3 py-1 rounded-full border text-white text-xs font-mono shadow-xs"
                    >
                      {s}
                    </motion.span>
                    {idx < steps.length - 1 && (
                      <span className="text-white/50 text-xs font-bold select-none">
                        →
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Action Button */}
        <Reveal direction="up" delay={0.4}>
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

            <motion.p
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs text-white/90 mt-3 font-medium"
            >
              ابدأ رحلتك في Medical Performance Marketing
            </motion.p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
