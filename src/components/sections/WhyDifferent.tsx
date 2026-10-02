"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/motion-primitives";

export function WhyDifferent() {
  const steps = [
    "Business",
    "Service",
    "Patient",
    "Research",
    "Strategy",
    "Message",
    "Content",
    "Ads",
    "Conversion",
    "Measurement",
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <Section
      id="difference"
      eyebrow="ليه الكورس مختلف؟"
      title="لأنك مش بتتعلم Marketing عام وتحط عليه كلمة Medical."
      description="الكورس يبدأ من طبيعة السوق الطبي نفسه."
      tone="plain"
    >
      <div className="space-y-8 max-w-4xl text-right">
        {/* مش */}
        <Reveal direction="right">
          <div className="p-6 rounded-2xl bg-[var(--color-bg-sunken)]/60 border border-[var(--color-border)] space-y-3">
            <span className="font-display text-sm font-bold text-red-600 block">
              مش:
            </span>
            <div className="font-mono text-base font-bold text-[var(--color-muted)]">
              Post → Post → Post
            </div>
          </div>
        </Reveal>

        {/* لكن with traveling pipeline beam */}
        <Reveal direction="left" delay={0.2}>
          <div className="p-6 rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-accent)] shadow-md space-y-4 relative overflow-hidden">
            <span className="font-display text-sm font-bold text-[var(--color-accent)] block">
              لكن:
            </span>

            <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[var(--color-ink)]">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <React.Fragment key={s}>
                    <motion.span
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        backgroundColor: isActive ? "var(--color-accent)" : "var(--color-bg-sunken)",
                        color: isActive ? "#ffffff" : "var(--color-ink)",
                        borderColor: isActive ? "var(--color-accent)" : "var(--color-border)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="px-3.5 py-1.5 rounded-lg border font-mono shadow-xs"
                    >
                      {s}
                    </motion.span>
                    {idx < steps.length - 1 && (
                      <motion.span
                        animate={{
                          color: activeStep === idx ? "var(--color-accent)" : "var(--color-muted)",
                          scale: activeStep === idx ? 1.3 : 1,
                        }}
                        className="font-bold select-none"
                      >
                        →
                      </motion.span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
