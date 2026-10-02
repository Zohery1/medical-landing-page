"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ArchFrame, DiamondMark, PatternBackdrop } from "@/components/ui/motifs";
import { ImageIcon, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, FloatingElement, ShimmerButtonWrapper } from "@/components/ui/motion-primitives";

export function Hero() {
  const pipeline = [
    "Medical Business",
    "Market Research",
    "Audience",
    "Strategy",
    "Medical Copywriting",
    "Content",
    "Paid Ads",
    "Funnel & CRO",
    "Measurement",
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipeline.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [pipeline.length]);

  return (
    <section id="hero" className="relative scroll-mt-20 overflow-hidden hero-wash pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Animated watermark */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none opacity-40"
      >
        <PatternBackdrop variant="gold" className="w-full h-full" />
      </motion.div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Right Column: Copy strictly from docx */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            <Reveal direction="down" delay={0.1}>
              <span className="eyebrow inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider mb-5">
                <DiamondMark />
                Medical Performance Marketing & Medical Copywriting
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-ink)] leading-[1.15] tracking-tight">
                مش هتتعلم تكتب بوست طبي وبس...
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <span aria-hidden="true" className="block h-px w-24 bg-[var(--color-gold)]/60 my-6" />
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-lg sm:text-xl text-[var(--color-ink-soft)] leading-relaxed max-w-2xl font-normal mb-8">
                هتتعلم إزاي تفهم السوق والخدمة والجمهور، وتحول المعلومات دي إلى استراتيجية ورسائل ومحتوى وإعلانات ومسار تحويل قابل للتنفيذ والقياس.
              </p>
            </Reveal>

            {/* Single CTA from docx with Shimmer & Spring physics */}
            <Reveal direction="up" delay={0.5}>
              <div className="space-y-3 mb-4">
                <ShimmerButtonWrapper>
                  <Button
                    isWhatsApp
                    size="lg"
                    variant="terracotta"
                    className="shadow-lg shadow-[var(--color-accent)]/20"
                  >
                    اشترك في الكورس الآن
                  </Button>
                </ShimmerButtonWrapper>

                <p className="text-xs text-[var(--color-muted)] font-medium">
                  دورة مسجلة تطبيقية + تطبيقات + Templates + مخرجات عملية
                </p>
              </div>
            </Reveal>
          </div>

          {/* Left Column: Floating Arch Frame with 3D Levitation */}
          <div className="lg:col-span-5 relative">
            <FloatingElement distance={14} duration={6}>
              <motion.div
                whileHover={{ scale: 1.03, rotateZ: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <ArchFrame
                  badge="المحتوى الطبي"
                  className="max-w-md mx-auto shadow-2xl shadow-[var(--color-gold)]/10"
                >
                  <div className="flex flex-col items-center gap-4 py-8">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold-deep)] shadow-inner"
                    >
                      <ImageIcon className="w-7 h-7 stroke-[1.5]" />
                    </motion.div>
                    <div className="text-center">
                      <p className="font-display text-sm font-bold text-[var(--color-ink)]">
                        مساحة الصورة
                      </p>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        إطار القوس المعماري (Arch Frame)
                      </p>
                    </div>
                  </div>
                </ArchFrame>
              </motion.div>
            </FloatingElement>
          </div>
        </div>

        {/* The Pipeline strictly from docx with traveling light pulse */}
        <Reveal direction="up" delay={0.6}>
          <div className="mt-16 pt-10 border-t border-[var(--color-border)] text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-deep)] mb-4">
              من:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
              {pipeline.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <motion.div
                    key={item}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      borderColor: isActive ? "var(--color-accent)" : "var(--color-border)",
                      backgroundColor: isActive ? "var(--color-bg-elevated)" : "var(--color-bg-sunken)",
                    }}
                    transition={{ duration: 0.4 }}
                    className={`py-2.5 px-2 rounded-xl border text-center text-xs font-medium text-[var(--color-ink)] shadow-2xs relative overflow-hidden transition-colors ${
                      isActive ? "ring-2 ring-[var(--color-accent)]/20" : ""
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/15 to-transparent pointer-events-none"
                      />
                    )}
                    <span
                      className={`block font-mono text-[10px] mb-0.5 font-bold transition-colors ${
                        isActive ? "text-[var(--color-accent)]" : "text-[var(--color-gold-deep)]"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="truncate block font-semibold">{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
