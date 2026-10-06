"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ArchFrame, DiamondMark, PatternBackdrop } from "@/components/ui/motifs";
import { Sparkles } from "lucide-react";
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
    <section id="hero" className="relative scroll-mt-24 overflow-hidden hero-wash pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-40">
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[11px] font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider mb-6 shadow-2xs">
                <DiamondMark className="text-[9px]" />
                Medical Performance Marketing & Medical Copywriting
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-ink)] leading-[1.18] tracking-tight">
                مش هتتعلم تكتب بوست طبي وبس...
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <span aria-hidden="true" className="block h-px w-24 bg-gradient-to-l from-[var(--color-gold)] to-transparent my-6" />
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-lg sm:text-xl text-[var(--color-ink-soft)] leading-relaxed max-w-2xl font-normal mb-8">
                هتتعلم إزاي تفهم السوق والخدمة والجمهور، وتحول المعلومات دي إلى استراتيجية ورسائل ومحتوى وإعلانات ومسار تحويل قابل للتنفيذ والقياس.
              </p>
            </Reveal>

            {/* Single CTA with Shimmer & Spring physics */}
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

                <p className="text-xs text-[var(--color-muted)] font-medium ps-1">
                  دورة مسجلة تطبيقية + تطبيقات + Templates + مخرجات عملية
                </p>
              </div>
            </Reveal>
          </div>

          {/* Left Column: Course Cover with Doppelrand Frame */}
          <div className="lg:col-span-5 relative">
            <FloatingElement distance={12} duration={6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative max-w-lg mx-auto"
              >
                {/* Decorative ambient glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-gold)]/25 via-[var(--color-accent)]/20 to-[var(--color-gold)]/25 rounded-[2.5rem] blur-xl opacity-75 pointer-events-none" />

                {/* Outer arch shell (Doppelrand) */}
                <div className="relative p-2.5 sm:p-3 bg-gradient-to-b from-[var(--color-gold)]/35 via-[var(--color-gold)]/15 to-[var(--color-border)]/60 border border-[var(--color-gold)]/40 shadow-[0_24px_50px_-12px_rgba(156,123,69,0.22)] rounded-[2.25rem]">
                  {/* Inner card containing the cover image */}
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-[var(--color-bg-elevated)] border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)]">
                    <div className="relative aspect-[3/2] w-full overflow-hidden">
                      <Image
                        src="/images/cover.png"
                        alt="غلاف كورس كتابة المحتوى والتسويق للمجال الطبي"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                        priority
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      {/* Vignette / shadow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

                      {/* Top badge */}
                      <div className="absolute top-3 right-3">
                        <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-xs flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[var(--color-gold)]" />
                          كورس تطبيقي معتمد
                        </span>
                      </div>

                      {/* Bottom caption badge */}
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-[var(--color-bg-elevated)]/95 text-[var(--color-ink)] border border-[var(--color-gold)]/30 shadow-md backdrop-blur-md">
                          المحتوى الطبي — المنظومة المتكاملة
                        </span>
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[var(--color-accent)] text-white shadow-2xs">
                          تطبيقي وعملي
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>
          </div>
        </div>

        {/* The Pipeline strictly from docx with traveling light pulse and double-bezel micro chips */}
        <Reveal direction="up" delay={0.6}>
          <div className="mt-20 pt-10 border-t border-[var(--color-border)] text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-deep)] mb-4">
              من:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5">
              {pipeline.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <motion.div
                    key={item}
                    animate={{
                      scale: isActive ? 1.04 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`p-1 rounded-2xl transition-[border-color,background-color,box-shadow] duration-200 ${
                      isActive
                        ? "bg-gradient-to-b from-[var(--color-accent)]/25 to-[var(--color-gold)]/15 shadow-[0_8px_20px_-4px_rgba(168,76,38,0.18)]"
                        : "bg-[var(--color-border)]/40 shadow-2xs"
                    }`}
                  >
                    <div
                      className={`h-full min-h-[68px] sm:min-h-[72px] py-2 px-1 sm:px-2 rounded-xl text-center text-xs font-medium text-[var(--color-ink)] relative overflow-hidden transition-colors flex flex-col items-center justify-center ${
                        isActive
                          ? "bg-[var(--color-bg-elevated)] border border-[var(--color-accent)]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
                          : "bg-[var(--color-bg-sunken)] border border-transparent"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeGlow"
                          className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/10 to-transparent pointer-events-none"
                        />
                      )}
                      <span
                        className={`block font-mono text-[10px] mb-1 font-bold transition-colors ${
                          isActive ? "text-[var(--color-accent)]" : "text-[var(--color-gold-deep)]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="block font-semibold text-[10.5px] sm:text-[11px] xl:text-xs leading-[1.25] text-balance whitespace-normal">
                        {item}
                      </span>
                    </div>
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
