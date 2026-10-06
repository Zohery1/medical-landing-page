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
          <Reveal key={item} direction="up" delay={idx * 0.02}>
            <div className="p-0.5 rounded-2xl bg-[var(--color-border)]/50 hover:bg-gradient-to-b hover:from-[var(--color-accent)]/20 hover:to-[var(--color-gold)]/15 border border-transparent hover:border-[var(--color-accent)]/30 transition-[background-color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 shadow-2xs hover:shadow-[0_12px_24px_-6px_rgba(22,21,20,0.06)] group cursor-default">
              <div className="py-3 px-4 rounded-[calc(1rem-0.125rem)] bg-[var(--color-bg-elevated)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)] w-6 shrink-0 group-hover:text-[var(--color-accent)] transition-colors">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)]/15 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                </div>
                <span className="font-display text-sm font-bold text-[var(--color-ink)] truncate group-hover:text-[var(--color-accent)] transition-colors">
                  {item}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
