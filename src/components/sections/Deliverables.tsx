import React from "react";
import { Section } from "@/components/ui/Section";
import { FileText } from "lucide-react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5 max-w-5xl text-right">
        {items.map((item, idx) => (
          <div
            key={item}
            className="py-3 px-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center gap-3 shadow-2xs hover:border-[var(--color-accent)] transition-colors"
          >
            <span className="font-mono text-xs font-bold text-[var(--color-gold-deep)] w-6 shrink-0">
              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
            </span>
            <FileText className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
            <span className="font-display text-sm font-bold text-[var(--color-ink)] truncate">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
