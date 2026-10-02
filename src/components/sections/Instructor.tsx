"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { DiamondMark } from "@/components/ui/motifs";
import { User } from "lucide-react";
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
      width="wide"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Arch Frame Portrait - Substantially Wider with Same Balanced Height */}
        <div className="lg:col-span-6 flex justify-center">
          <FloatingElement distance={6} duration={5} className="w-full flex justify-center">
            <div className="relative w-full max-w-[500px] sm:max-w-[540px]">
              {/* Outer arch border */}
              <div className="relative border-2 border-[var(--color-gold)]/50 bg-[var(--color-bg-sunken)] p-3.5 shadow-2xl rounded-t-[80px] sm:rounded-t-[90px] rounded-b-2xl">
                <div className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-elevated)] via-[var(--color-bg-elevated)] to-[var(--color-bg-sunken)] border border-[var(--color-gold)]/30 rounded-t-[70px] sm:rounded-t-[80px] rounded-b-xl flex flex-col items-center justify-between p-6 sm:p-8 text-center h-[360px] sm:h-[390px]">
                  {/* Subtle girih background */}
                  <div className="absolute inset-0 pattern-girih-gold opacity-25 pointer-events-none" />

                  {/* Top arch tag */}
                  <div className="relative z-10 pt-1">
                    <span className="text-[11px] font-mono tracking-widest text-[var(--color-gold-deep)] uppercase px-4 py-1 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/25 font-bold">
                      Instructor Portrait
                    </span>
                  </div>

                  {/* Big Center Avatar & Label */}
                  <div className="relative z-10 flex flex-col items-center gap-3 my-auto">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[var(--color-bg-elevated)] border-3 border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold-deep)] shadow-xl shadow-[var(--color-gold)]/15 group-hover:scale-105 transition-transform duration-200 ring-4 ring-[var(--color-gold)]/10">
                      <User className="w-20 h-20 sm:w-22 sm:h-22 stroke-[1.2] text-[var(--color-gold-deep)]" />
                    </div>
                    <div>
                      <span className="text-base font-display font-bold text-[var(--color-ink)] block">
                        مساحة صورة المحاضر
                      </span>
                      <span className="text-xs text-[var(--color-gold-deep)] font-medium">
                        محمد العدوي
                      </span>
                    </div>
                  </div>

                  {/* Bottom badge */}
                  <div className="relative z-10 w-full max-w-[340px]">
                    <div className="py-2 px-5 rounded-xl bg-[var(--color-bg-elevated)]/95 border border-[var(--color-gold)]/40 text-[var(--color-gold-deep)] text-xs sm:text-sm font-bold shadow-xs backdrop-blur-xs">
                      Founder & CEO — Copyway
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FloatingElement>
        </div>

        {/* Narrative strictly from docx */}
        <div className="lg:col-span-6 space-y-6 text-right">
          <Reveal direction="up" delay={0.1}>
            <p className="text-base sm:text-lg text-[var(--color-ink-soft)] leading-relaxed max-w-[65ch]">
              متخصص في Copywriting والتسويق الرقمي بخبرة عملية تتجاوز 6 سنوات، عمل خلالها مع شركات وأنشطة تجارية وخدمية في مصر والكويت والإمارات والأردن والسعودية.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-[var(--color-gold-deep)] block">
                يجمع بين:
              </span>
              <p className="text-sm sm:text-base font-semibold text-[var(--color-ink)]">
                Copywriting + Content Marketing + Social Media + Digital Advertising + Marketing Strategy
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="space-y-3 pt-3 border-t border-[var(--color-border-strong)]">
              <span className="text-xs font-bold text-[var(--color-gold-deep)] block">
                ومن خبراته:
              </span>
              <ul className="space-y-2.5 text-sm text-[var(--color-muted)]">
                {experiences.map((exp, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 transition-transform cursor-default hover:text-[var(--color-ink)]"
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
