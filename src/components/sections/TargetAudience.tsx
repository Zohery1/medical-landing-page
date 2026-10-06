"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark } from "@/components/ui/motifs";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/motion-primitives";

export function TargetAudience() {
  const marketingRoles = [
    { title: "Content Creators", desc: "عايز تدخل تخصص طبي واضح." },
    { title: "Copywriters", desc: "عندك أساسيات الكتابة وعايز تفهم الـMedical Market." },
    { title: "Social Media Specialists", desc: "بتدير صفحات أطباء أو عيادات أو مراكز." },
    { title: "Media Buyers", desc: "عايز تفهم الرسالة والـCreative والـFunnel مش الإعلان فقط." },
    { title: "Freelancers", desc: "استلمت Client طبي ومش عارف تبدأ منين." },
    { title: "Agency Owners", desc: "عايز تضيف Medical Marketing لخدماتك." },
  ];

  const medicalRoles = [
    "الأطباء",
    "مديري العيادات والمراكز",
    "In-house Marketing Teams",
    "أفراد الفرق الطبية المسؤولين عن المحتوى والتسويق",
  ];

  return (
    <Section
      id="audience"
      eyebrow="لمن هذا الكورس؟"
      title="الكورس معمول لـ:"
      tone="sunken"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Track 1: Marketing & Content */}
        <Reveal direction="right">
          <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-[var(--color-border)]/80 to-[var(--color-border-strong)]/40 border border-[var(--color-border-strong)]/60 shadow-[0_16px_36px_-12px_rgba(22,21,20,0.05)]">
            <div className="p-6 sm:p-8 rounded-[calc(2rem-0.375rem)] bg-[var(--color-bg-elevated)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)] space-y-6 text-right">
              <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] pb-3 border-b border-[var(--color-border-strong)]">
                Marketing & Content
              </h3>

              <div className="divide-y divide-[var(--color-border)]">
                {marketingRoles.map((role, idx) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    whileHover={{ x: -4 }}
                    className="py-4 first:pt-0 last:pb-0 transition-transform cursor-default"
                  >
                    <h4 className="font-display text-base font-bold text-[var(--color-ink)] mb-1 hover:text-[var(--color-accent)] transition-colors">
                      {role.title}
                    </h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed font-medium">
                      {role.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Track 2: Medical Sector */}
        <Reveal direction="left" delay={0.15}>
          <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-[var(--color-gold)]/25 to-[var(--color-border)]/50 border border-[var(--color-gold)]/35 shadow-[0_16px_36px_-12px_rgba(156,123,69,0.08)]">
            <div className="p-6 sm:p-8 rounded-[calc(2rem-0.375rem)] bg-[var(--color-bg-elevated)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)] space-y-6 text-right">
              <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] pb-3 border-b border-[var(--color-border-strong)]">
                Medical Sector
              </h3>

              <div className="divide-y divide-[var(--color-border)]">
                {medicalRoles.map((role, idx) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                    whileHover={{ x: -4 }}
                    className="py-4.5 first:pt-0 last:pb-0 flex items-center gap-3 transition-transform cursor-default"
                  >
                    <DiamondMark className="text-xs text-[var(--color-gold-deep)] shrink-0" />
                    <h4 className="font-display text-base font-bold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
                      {role}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
