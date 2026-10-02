import React from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArchFrame, DiamondMark } from "@/components/ui/motifs";
import { User, CheckCircle2 } from "lucide-react";

export function Instructor() {
  const stats = [
    { value: "+4,000", label: "منشور إعلاني وتسويقي" },
    { value: "+2,000", label: "متدرب في صناعة المحتوى" },
    { value: "+6", label: "سنوات خبرة عملية" },
    { value: "5", label: "دول عربية تم العمل معها" },
  ];

  const highlights = [
    "متخصص في الـ Copywriting والتسويق الرقمي بخبرة عملية تتجاوز 6 سنوات.",
    "عمل مع شركات ومراكز طبية وتجارية في مصر والكويت والإمارات والأردن والسعودية.",
    "يجمع بين: Copywriting + Content Strategy + Digital Advertising + Healthcare Funnels.",
    "تقديم ورش عمل تدريبية متخصصة في الـ Storytelling والكتابة الإعلانية المحولة.",
  ];

  return (
    <Section
      id="instructor"
      eyebrow="عن المحاضر والمدرّب"
      title="تعلّم المنهج من ممارس بالمجال يدرّب عليه"
      description="خبرة عملية واقعية في بناء الاستراتيجيات وصناعة الإعلانات وتحقيق المبيعات للعيادات والمراكز الطبية"
      tone="sunken"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Arch Frame Portrait (Right in RTL) */}
        <div className="lg:col-span-5 flex justify-center">
          <ArchFrame
            badge="Founder & CEO — Copyway"
            className="w-full max-w-sm"
          >
            <div className="flex flex-col items-center gap-3 py-6">
              <div className="w-20 h-20 rounded-full bg-[var(--color-bg-sunken)] border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold-deep)] shadow-inner">
                <User className="w-10 h-10 stroke-[1.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                  محمد العدوي
                </h3>
                <p className="text-xs text-[var(--color-gold-deep)] font-medium">
                  Founder & CEO — Copyway
                </p>
              </div>
            </div>
          </ArchFrame>
        </div>

        {/* Narrative & Credentials (Left in RTL) */}
        <div className="lg:col-span-7 space-y-8 text-right">
          <div className="space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
              محمد العدوي
            </h3>
            <p className="text-base text-[var(--color-ink-soft)] leading-relaxed max-w-[60ch]">
              متخصص في الـ Copywriting والتسويق الرقمي وبناء مسارات التحويل، بخبرة عملية ممتدة مع العيادات والمراكز الطبية التخصصية والتجميلية في 5 دول عربية.
            </p>
          </div>

          {/* Numbers / Stats Colonnade */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[var(--color-border-strong)]">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-accent)] block tabular-nums">
                  {s.value}
                </span>
                <span className="text-xs text-[var(--color-muted)] font-medium leading-snug block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-3">
            {highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-ink-soft)]">
                <DiamondMark className="mt-1" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button
              isWhatsApp
              customMessage="مرحبًا أستاذ محمد العدوي، أود الانضمام لبرنامج التدريب الطبي تحت إشرافك"
              size="lg"
              variant="terracotta"
            >
              انضم للتدريب مع محمد العدوي
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
