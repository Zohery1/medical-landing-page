import React from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark } from "@/components/ui/motifs";

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
        <div className="space-y-6 text-right">
          <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] pb-3 border-b border-[var(--color-border-strong)]">
            Marketing & Content
          </h3>

          <div className="divide-y divide-[var(--color-border)]">
            {marketingRoles.map((role) => (
              <div key={role.title} className="py-4 first:pt-0 last:pb-0">
                <h4 className="font-display text-base font-bold text-[var(--color-ink)] mb-1">
                  {role.title}
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Medical Sector */}
        <div className="space-y-6 text-right">
          <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] pb-3 border-b border-[var(--color-border-strong)]">
            Medical Sector
          </h3>

          <div className="divide-y divide-[var(--color-border)]">
            {medicalRoles.map((role) => (
              <div key={role} className="py-4.5 first:pt-0 last:pb-0 flex items-center gap-3">
                <DiamondMark className="text-xs text-[var(--color-gold-deep)]" />
                <h4 className="font-display text-base font-bold text-[var(--color-ink)]">
                  {role}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
