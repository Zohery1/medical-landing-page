import React from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Folder, FileCheck2, Download } from "lucide-react";

export function Deliverables() {
  const toolkits = [
    { title: "Medical Business Diagnosis", category: "Business & Strategy" },
    { title: "Medical Market & Service Map", category: "Market Research" },
    { title: "Competitor Research Matrix", category: "Market Research" },
    { title: "Voice of Customer Bank", category: "Audience & Psychology" },
    { title: "Patient Journey Map", category: "Patient Journey" },
    { title: "Segment Map", category: "Audience & Psychology" },
    { title: "Persona Cards", category: "Audience & Psychology" },
    { title: "Pain & Objection Bank", category: "Audience & Psychology" },
    { title: "Positioning Statement", category: "Brand Positioning" },
    { title: "Ethical Offer Framework", category: "Brand Positioning" },
    { title: "Value Proposition Canvas", category: "Brand Positioning" },
    { title: "Messaging Strategy Dossier", category: "Copywriting & Content" },
    { title: "Content Pillars Guide", category: "Copywriting & Content" },
    { title: "Campaign Angles Matrix", category: "Copywriting & Content" },
    { title: "Hook Bank (100+ Hooks)", category: "Copywriting & Content" },
    { title: "Reels Scripts Templates", category: "Copywriting & Content" },
    { title: "Social Posts Templates", category: "Copywriting & Content" },
    { title: "High-Converting Ad Copy", category: "Paid Advertising" },
    { title: "Comprehensive Content Plan", category: "Copywriting & Content" },
    { title: "Medical Funnel Blueprint", category: "Performance & CRO" },
    { title: "CRO Audit Checklist", category: "Performance & CRO" },
    { title: "Measurement & KPI Plan", category: "Performance & Analytics" },
    { title: "AI Prompt Frameworks", category: "AI Native Workflow" },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg-sunken)]/50 border-t border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="terracotta">حقيبة الأدوات والملفات الجاهزة</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            مخرجات الكورس (Marketing Toolkit)
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            مش هتخرج بمعلومات ونظريات فقط... هتخرج بـ{" "}
            <strong className="text-[var(--color-accent)] font-semibold">
              حقيبة مخرجات وأدوات عملية جاهزة للتطبيق الفوري
            </strong>{" "}
            مع أي عيادة أو مشروع طبي.
          </p>
        </div>

        {/* Deliverables Stacked Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {toolkits.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-bg-elevated)] p-4 sm:p-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-200 shadow-2xs hover:shadow-xs group flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                <Folder className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider block mb-0.5 truncate">
                  {item.category}
                </span>
                <h3 className="font-display text-xs sm:text-sm font-bold text-[var(--color-ink)] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
