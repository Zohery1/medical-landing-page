import React from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark } from "@/components/ui/motifs";
import { FileText } from "lucide-react";

export function Deliverables() {
  const groups = [
    {
      category: "01. البيزنس وأبحاث السوق",
      english: "Business & Market Intelligence",
      items: [
        "Medical Business Diagnosis",
        "Medical Market & Service Map",
        "Competitor Research Matrix",
      ],
    },
    {
      category: "02. سيكولوجية المريض والجمهور",
      english: "Audience & Patient Journey",
      items: [
        "Voice of Customer Bank",
        "Patient Journey Map",
        "Segment Map",
        "Persona Cards",
        "Pain & Objection Bank",
      ],
    },
    {
      category: "03. التموضع وهندسة المحتوى",
      english: "Positioning & Creative Copy",
      items: [
        "Positioning Statement",
        "Ethical Offer Framework",
        "Value Proposition Canvas",
        "Messaging Strategy Dossier",
        "Content Pillars Guide",
        "Campaign Angles Matrix",
        "Hook Bank (100+ Hooks)",
        "Reels Scripts Templates",
        "Social Posts Templates",
        "High-Converting Ad Copy",
        "Comprehensive Content Plan",
      ],
    },
    {
      category: "04. مسارات التحويل والقياس والـ AI",
      english: "Funnels, CRO & AI Native",
      items: [
        "Medical Funnel Blueprint",
        "CRO Audit Checklist",
        "Measurement & KPI Plan",
        "AI Native Workflow & Prompt Framework",
      ],
    },
  ];

  return (
    <Section
      id="deliverables"
      eyebrow="حقيبة الأدوات والملفات"
      title="مخرجات الكورس (Marketing Toolkit)"
      description="مش هتخرج بمعلومات ونظريات فقط... هتخرج بحقيبة متكاملة من 23 ملفاً وقالب ومخطط عمل جاهز للتطبيق الفوري مع أي عيادة أو نشاط طبي"
      tone="sunken"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
        {groups.map((group) => (
          <div key={group.category} className="space-y-4 text-right">
            <div className="pb-3 border-b border-[var(--color-border-strong)]">
              <span className="font-display text-base font-bold text-[var(--color-ink)] block">
                {group.category}
              </span>
              <span className="text-[11px] font-mono text-[var(--color-gold-deep)]">
                {group.english}
              </span>
            </div>

            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] transition-colors group cursor-default"
                >
                  <FileText className="w-3.5 h-3.5 text-[var(--color-gold-deep)] group-hover:text-[var(--color-accent)] shrink-0 mt-0.5 transition-colors" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
