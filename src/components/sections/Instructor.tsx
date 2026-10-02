"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArchFrame, DiamondMark } from "@/components/ui/motifs";
import { User } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, FloatingElement, TiltCard, ShimmerButtonWrapper } from "@/components/ui/motion-primitives";

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Arch Frame Portrait with 3D levitation */}
        <div className="lg:col-span-5 flex justify-center">
          <FloatingElement distance={10} duration={5}>
            <TiltCard intensity={8}>
              <ArchFrame
                badge="محمد العدوي"
                className="w-full max-w-sm shadow-xl"
              >
                <div className="flex flex-col items-center gap-3 py-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 3 }}
                    className="w-20 h-20 rounded-full bg-[var(--color-bg-sunken)] border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold-deep)] shadow-inner"
                  >
                    <User className="w-10 h-10 stroke-[1.2]" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                      محمد العدوي
                    </h3>
                    <p className="text-xs text-[var(--color-gold-deep)] font-medium">
                      Founder & CEO — Copyway
                    </p>
                  </div>
                </div>
              </ArchFrame>
            </TiltCard>
          </FloatingElement>
        </div>

        {/* Narrative strictly from docx */}
        <div className="lg:col-span-7 space-y-6 text-right">
          <Reveal direction="up" delay={0.1}>
            <p className="text-base text-[var(--color-ink-soft)] leading-relaxed max-w-[65ch]">
              متخصص في Copywriting والتسويق الرقمي بخبرة عملية تتجاوز 6 سنوات، عمل خلالها مع شركات وأنشطة تجارية وخدمية في مصر والكويت والإمارات والأردن والسعودية.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-[var(--color-gold-deep)] block">
                يجمع بين:
              </span>
              <p className="text-sm font-semibold text-[var(--color-ink)]">
                Copywriting + Content Marketing + Social Media + Digital Advertising + Marketing Strategy
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className="space-y-3 pt-3 border-t border-[var(--color-border-strong)]">
              <span className="text-xs font-bold text-[var(--color-gold-deep)] block">
                ومن خبراته:
              </span>
              <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                {experiences.map((exp, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: -4, color: "var(--color-ink)" }}
                    className="flex items-center gap-2 transition-transform cursor-default"
                  >
                    <DiamondMark className="shrink-0 text-xs text-[var(--color-accent)]" />
                    <span>{exp}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
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
