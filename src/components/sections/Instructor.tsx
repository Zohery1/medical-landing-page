"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { DiamondMark } from "@/components/ui/motifs";
import { User, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, FloatingElement, ShimmerButtonWrapper } from "@/components/ui/motion-primitives";

export function Instructor() {
  const experiences = [
    "كتابة أكثر من 4000 منشور إعلاني وتسويقي.",
    "تدريب أكثر من 2000 متدرب في مجال صناعة المحتوى.",
    "تقديم ورش تدريبية في Copywriting وContent Creation وStorytelling.",
    "العمل مع أطباء ومراكز طبية وخدمات مختلفة.",
  ];

  return (
    <Section
      id="instructor"
      eyebrow="المحاضر"
      title="محمد العدوي"
      description="Founder & CEO — Copyway"
      tone="sunken"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Arch Frame Portrait - Properly Proportioned */}
        <div className="lg:col-span-5 flex justify-center">
          <FloatingElement distance={8} duration={5}>
            <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
              {/* Arch frame outer border */}
              <div className="arch relative border-2 border-[var(--color-gold)]/40 bg-[var(--color-bg-sunken)] p-2 shadow-xl rounded-t-[140px] rounded-b-2xl">
                <div className="arch relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-elevated)] to-[var(--color-bg-sunken)] border border-[var(--color-gold)]/20 rounded-t-[132px] rounded-b-xl flex flex-col items-center justify-between p-6 text-center h-[340px]">
                  {/* Subtle girih pattern */}
                  <div className="absolute inset-0 pattern-girih-gold opacity-30 pointer-events-none" />

                  {/* Top decorative arch badge */}
                  <div className="relative z-10 pt-4">
                    <span className="text-[10px] font-mono tracking-widest text-[var(--color-gold-deep)] uppercase px-2.5 py-0.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20">
                      Instructor Portrait
                    </span>
                  </div>

                  {/* Avatar Centerpiece */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-28 h-28 rounded-full bg-[var(--color-bg-elevated)] border-2 border-[var(--color-gold)]/60 flex items-center justify-center text-[var(--color-gold-deep)] shadow-lg shadow-[var(--color-gold)]/10 group-hover:scale-105 transition-transform duration-200">
                      <User className="w-14 h-14 stroke-[1.2] text-[var(--color-gold-deep)]" />
                    </div>
                    <span className="text-xs font-display font-bold text-[var(--color-ink)] mt-3">
                      صورة المحاضر
                    </span>
                  </div>

                  {/* Bottom badge */}
                  <div className="relative z-10 w-full">
                    <div className="py-1.5 px-3 rounded-xl bg-[var(--color-bg-elevated)]/90 border border-[var(--color-gold)]/30 text-[var(--color-gold-deep)] text-xs font-semibold shadow-xs backdrop-blur-xs">
                      محمد العدوي — Copyway
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FloatingElement>
        </div>

        {/* Narrative strictly from docx */}
        <div className="lg:col-span-7 space-y-6 text-right">
          <Reveal direction="up" delay={0.1}>
            <p className="text-base text-[var(--color-ink-soft)] leading-relaxed max-w-[65ch]">
              متخصص في Copywriting والتسويق الرقمي بخبرة عملية تتجاوز 6 سنوات، عمل خلالها مع شركات وأنشطة تجارية وخدمية في مصر والكويت والإمارات والأردن والسعودية.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-[var(--color-gold-deep)] block">
                يجمع بين:
              </span>
              <p className="text-sm font-semibold text-[var(--color-ink)]">
                Copywriting + Content Marketing + Social Media + Digital Advertising + Marketing Strategy
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="space-y-3 pt-3 border-t border-[var(--color-border-strong)]">
              <span className="text-xs font-bold text-[var(--color-gold-deep)] block">
                ومن خبراته:
              </span>
              <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                {experiences.map((exp, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 transition-transform cursor-default hover:text-[var(--color-ink)]"
                  >
                    <DiamondMark className="shrink-0 text-xs text-[var(--color-accent)]" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="pt-4 space-y-2">
              <ShimmerButtonWrapper className="inline-block">
                <Button
                  isWhatsApp
                  customMessage="مرحبًا أستاذ محمد العدوي، أود الانضمام لبرنامج التدريب الطبي تحت إشرافك"
                  size="lg"
                  variant="terracotta"
                  className="shadow-md"
                >
                  تعلّم المنهج من شخص بيشتغل بالمجال ويدرّب عليه
                </Button>
              </ShimmerButtonWrapper>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
