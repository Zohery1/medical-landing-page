import React from "react";
import { siteConfig } from "@/config/site";
import { Container, Eyebrow, BrassRule } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ArchImagePlaceholder } from "@/components/ui/ArchImagePlaceholder";
import { Award, Briefcase, Users, CheckCircle2 } from "lucide-react";

export function Instructor() {
  const experiences = [
    "كتابة أكثر من 4,000 منشور إعلاني وتسويقي لمختلف القطاعات.",
    "تدريب أكثر من 2,000 متدرب في مجال صناعة المحتوى والكتابة الإعلانية.",
    "تقديم ورش عمل تدريبية متخصصة في الـ Copywriting والـ Content Creation والـ Storytelling.",
    "العمل المباشر مع أطباء وعيادات ومراكز طبية وخدمية في 5 دول عربية.",
  ];

  const skillBadges = [
    "Copywriting",
    "Content Marketing",
    "Social Media",
    "Digital Advertising",
    "Marketing Strategy",
    "Healthcare Positioning",
  ];

  return (
    <section id="instructor" className="py-20 bg-[var(--color-bg-sunken)]/40 border-b border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="gold">عن المحاضر</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            تعلّم المنهج من خبير يمارس المجال ويدرّب عليه
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            خبرة عملية واقعية في بناء الاستراتيجيات وصناعة الإعلانات وتحقيق المبيعات
          </p>
        </div>

        {/* Instructor Card Layout */}
        <div className="max-w-5xl mx-auto bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border)] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Instructor Photo Arch (Right side in RTL) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-sm">
                <ArchImagePlaceholder
                  aspectRatio="aspect-[3/4]"
                  label="محمد العدوي"
                  badge="Founder & CEO — Copyway"
                />
              </div>
            </div>

            {/* Bio & Details (Left side in RTL) */}
            <div className="md:col-span-7 space-y-6 text-right">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-2 inline-block">
                  المحاضر والمدرّب
                </span>
                <h3 className="font-display text-3xl font-bold text-[var(--color-ink)]">
                  محمد العدوي
                </h3>
                <p className="text-sm font-medium text-[var(--color-gold-deep)] mt-1">
                  Founder & CEO — Copyway
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-ink-soft)] leading-relaxed font-normal">
                متخصص في الـ Copywriting والتسويق الرقمي بخبرة عملية تتجاوز 6 سنوات، عمل خلالها مع شركات وأنشطة تجارية وخدمية وطبية في مصر والكويت والإمارات والأردن والسعودية.
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {skillBadges.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-ink)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2 border-t border-[var(--color-border)]">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-muted)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  isWhatsApp
                  customMessage="مرحبًا أستاذ محمد، أود الانضمام لكورس التسويق الطبي تحت إشرافك"
                  size="default"
                  variant="terracotta"
                >
                  انضم للتدريب مع محمد العدوي
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
