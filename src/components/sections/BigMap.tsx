"use client";

import React from "react";
import { Container } from "@/components/ui/Primitives";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/motion-primitives";

export function BigMap() {
  const journeySteps = [
    "Medical Business",
    "Niche & Services",
    "Patient Journey",
    "Research & Evidence",
    "Segments & Personas",
    "Awareness & Psychology",
    "Positioning & Offer",
    "Messaging Strategy",
    "Content Pillars & Angles",
    "Hooks & Copy",
    "Organic & Paid",
    "Conversion & CRO",
    "Measurement & Optimization",
  ];

  return (
    <section className="py-20 bg-[var(--color-bg)] relative overflow-hidden">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <Reveal direction="down">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[var(--color-ink)] font-bold">
              الخريطة الكبيرة للكورس
            </h2>
          </Reveal>
        </div>

        {/* Visual Journey Roadmap */}
        <div className="max-w-2xl mx-auto space-y-3">
          {journeySteps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ scale: 1.02, x: -4 }}
                className="p-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all shadow-sm flex items-center justify-between group cursor-default"
              >
                <span className="font-display text-base sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {step}
                </span>
                <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)] bg-[var(--color-bg-sunken)] px-2.5 py-1 rounded border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] transition-colors">
                  0{index + 1}
                </span>
              </motion.div>

              {index < journeySteps.length - 1 && (
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                  className="flex justify-center text-[var(--color-accent)] font-bold text-sm select-none py-0.5"
                >
                  ↓
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <Reveal direction="up" delay={0.5}>
          <motion.p
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-center text-sm sm:text-base font-semibold text-[var(--color-accent)] mt-8"
          >
            كل خطوة بتبني على اللي قبلها.
          </motion.p>
        </Reveal>
      </Container>
    </section>
  );
}
