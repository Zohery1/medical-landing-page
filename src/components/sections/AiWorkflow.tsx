"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "motion/react";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function AiWorkflow() {
  const questions = [
    "مين الجمهور؟",
    "إيه الخدمة؟",
    "إيه المشكلة؟",
    "إيه مرحلة الوعي؟",
    "إيه الـPositioning؟",
    "إيه الـEvidence؟",
    "إيه الـOffer؟",
    "إيه الهدف من المحتوى؟",
  ];

  const workflow = [
    "Brief",
    "Context",
    "AI",
    "Human Review",
    "Optimization",
  ];

  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflowIdx((prev) => (prev + 1) % workflow.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [workflow.length]);

  return (
    <Section
      id="ai-workflow"
      eyebrow="AI في الكورس"
      title="هل ChatGPT يقدر يكتبلك المحتوى؟"
      description="آه... بس دي مش المشكلة."
      tone="sunken"
    >
      <div className="space-y-10 max-w-4xl text-right">
        {/* المشكلة: هل عرفته: */}
        <div className="space-y-4">
          <Reveal direction="down">
            <p className="font-display text-lg font-bold text-[var(--color-ink)]">
              المشكلة: هل عرفته:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {questions.map((q, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.05}>
                <TiltCard intensity={8}>
                  <motion.div
                    whileHover={{ scale: 1.04, borderColor: "var(--color-accent)" }}
                    className="p-3.5 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-sm font-bold text-[var(--color-ink)] shadow-2xs hover:shadow-sm transition-colors text-center"
                  >
                    {q}
                  </motion.div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* عشان كده: */}
        <Reveal direction="up" delay={0.4}>
          <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-gold)]/50 shadow-md space-y-4 text-center relative overflow-hidden">
            <p className="font-display text-xl font-bold text-[var(--color-ink)]">
              عشان كده: AI مش بديل عن التفكير التسويقي.
            </p>
            <p className="text-sm text-[var(--color-muted)] font-medium">
              هو أداة داخل Workflow منظم:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {workflow.map((step, idx) => {
                const isActive = activeWorkflowIdx === idx;
                return (
                  <React.Fragment key={step}>
                    <motion.span
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        backgroundColor: isActive ? "var(--color-accent)" : "var(--color-bg-sunken)",
                        color: isActive ? "#ffffff" : "var(--color-accent)",
                        borderColor: isActive ? "var(--color-accent)" : "var(--color-border)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-2 rounded-xl border font-mono text-sm font-bold shadow-2xs"
                    >
                      {step}
                    </motion.span>
                    {idx < workflow.length - 1 && (
                      <motion.span
                        animate={{
                          color: activeWorkflowIdx === idx ? "var(--color-accent)" : "var(--color-gold)",
                          scale: activeWorkflowIdx === idx ? 1.3 : 1,
                        }}
                        className="font-bold text-base select-none transition-colors"
                      >
                        ←
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
