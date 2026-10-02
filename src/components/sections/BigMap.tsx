"use client";

import React from "react";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/motion-primitives";
import { ArrowDown, CheckCircle2, Milestone } from "lucide-react";

export function BigMap() {
  const steps = [
    { num: "01", title: "Medical Business" },
    { num: "02", title: "Niche & Services" },
    { num: "03", title: "Patient Journey" },
    { num: "04", title: "Research & Evidence" },
    { num: "05", title: "Segments & Personas" },
    { num: "06", title: "Awareness & Psychology" },
    { num: "07", title: "Positioning & Offer" },
    { num: "08", title: "Messaging Strategy" },
    { num: "09", title: "Content Pillars & Angles" },
    { num: "10", title: "Hooks & Copy" },
    { num: "11", title: "Organic & Paid" },
    { num: "12", title: "Conversion & CRO" },
    { num: "13", title: "Measurement & Optimization" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[var(--color-bg)] relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Reveal direction="down">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] border border-[var(--color-gold)]/30 text-xs font-bold">
              <Milestone className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>Visual Journey</span>
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)] font-bold">
              الخريطة الكبيرة للكورس
            </h2>
          </Reveal>
        </div>

        {/* The Big Map: Alternating 2-Column Zigzag Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central Connecting Spine Line (Desktop) */}
          <div className="hidden md:block absolute top-6 bottom-12 right-1/2 -mr-[1px] w-[2px] bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-accent)] to-[var(--color-gold)] opacity-40 pointer-events-none" />

          {/* Right Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-6 bottom-12 right-6 w-[2px] bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-accent)] to-[var(--color-gold)] opacity-40 pointer-events-none" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <Reveal
                  key={step.num}
                  direction={isEven ? "right" : "left"}
                  delay={index * 0.03}
                >
                  <div
                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                      isEven ? "md:flex-row-reverse text-right" : "text-right md:text-left"
                    }`}
                  >
                    {/* Step Card Content */}
                    <div className="w-full md:w-1/2 pr-14 md:pr-0">
                      <div className="p-5 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-150 group cursor-default shadow-xs">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                            {step.title}
                          </span>
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[var(--color-bg-sunken)] text-[var(--color-gold-deep)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                            {step.num}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Milestone Center Node on the Spine */}
                    <div className="absolute right-3.5 md:relative md:right-auto w-8 h-8 rounded-full bg-[var(--color-bg-elevated)] border-2 border-[var(--color-gold)] text-[var(--color-accent)] font-bold text-xs flex items-center justify-center shrink-0 shadow-sm z-10 font-mono group-hover:scale-110 group-hover:border-[var(--color-accent)] transition-all">
                      <span className="text-[10px] text-[var(--color-gold-deep)] font-mono">{index + 1}</span>
                    </div>

                    {/* Empty side for desktop rhythm */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Map Finale Note strictly from docx */}
        <Reveal direction="up" delay={0.4}>
          <div className="max-w-md mx-auto mt-12 text-center p-6 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] shadow-xs">
            <p className="font-display text-lg sm:text-xl font-bold text-[var(--color-accent)] leading-relaxed">
              كل خطوة بتبني على اللي قبلها.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
