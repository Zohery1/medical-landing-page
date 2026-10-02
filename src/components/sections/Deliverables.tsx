"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { FileText } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function Deliverables() {
  const items = [
    "Medical Business Diagnosis",
    "Medical Market & Service Map",
    "Competitor Research",
    "Voice of Customer Bank",
    "Patient Journey Map",
    "Segment Map",
    "Persona Cards",
    "Pain & Objection Bank",
    "Positioning Statement",
    "Ethical Offer",
    "Value Proposition",
    "Messaging Strategy",
    "Content Pillars",
    "Campaign Angles",
    "Hook Bank",
    "Reels Scripts",
    "Social Posts",
    "Ad Copy",
    "Content Plan",
    "Medical Funnel",
    "CRO Checklist",
    "Measurement Plan",
    "AI Workflow",
  ];

  return (
    <Section
      id="deliverables"
      eyebrow="مخرجات الكورس"
      title="مش هتخرج بمعلومات بس..."
      description="هتخرج بمجموعة مخرجات عملية:"
      tone="sunken"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-5xl text-right">
        {items.map((item, idx) => (
          <Reveal key={item} direction="up" delay={idx * 0.025}>
            <TiltCard intensity={6} glare={false}>
              <motion.div
                whileHover={{ y: -3, borderColor: "var(--color-accent)" }}
                className="py-3 px-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center gap-3 shadow-2xs transition-colors group cursor-default"
              >
                <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)] w-6 shrink-0 group-hover:text-[var(--color-accent)] transition-colors">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  className="shrink-0"
                >
                  <FileText className="w-4 h-4 text-[var(--color-accent)]" />
                </motion.div>
                <span className="font-display text-sm font-bold text-[var(--color-ink)] truncate group-hover:text-[var(--color-accent)] transition-colors">
                  {item}
                </span>
              </motion.div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
