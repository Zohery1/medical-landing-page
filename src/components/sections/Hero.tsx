import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ArchFrame, DiamondMark, PatternBackdrop } from "@/components/ui/motifs";
import { ArrowLeft, CheckCircle2, ImageIcon } from "lucide-react";

export function Hero() {
  const pipeline = [
    "Medical Business",
    "Market Research",
    "Audience",
    "Strategy",
    "Medical Copywriting",
    "Content",
    "Paid Ads",
    "Funnel & CRO",
    "Measurement",
  ];

  return (
    <section id="hero" className="relative scroll-mt-20 overflow-hidden hero-wash pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Decorative backdrop */}
      <PatternBackdrop variant="gold" className="opacity-40" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Eyebrow */}
            <span className="eyebrow inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider mb-5">
              <DiamondMark />
              Medical Performance Marketing & Medical Copywriting
            </span>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-ink)] leading-[1.12] tracking-tight text-balance">
              مش هتتعلم تكتب بوست طبي وبس...
            </h1>

            {/* Subtle brass architectural hairline */}
            <span aria-hidden="true" className="block h-px w-24 bg-[var(--color-gold)]/60 my-6" />

            {/* Subtitle / Value proposition */}
            <p className="text-lg sm:text-xl text-[var(--color-ink-soft)] leading-relaxed max-w-2xl font-normal text-balance mb-8">
              هتتعلم إزاي تفهم السوق والخدمة والجمهور، وتحول المعلومات دي إلى{" "}
              <strong className="font-semibold text-[var(--color-accent)]">
                استراتيجية ورسائل ومحتوى وإعلانات
              </strong>{" "}
              ومسار تحويل قابل للتنفيذ والقياس المالي في عيادتك أو مشاريعك.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button
                isWhatsApp
                customMessage="مرحبًا، أود الاشتراك في كورس Medical Performance Marketing & Copywriting"
                size="lg"
                variant="terracotta"
                className="shadow-sm"
              >
                اشترك في الكورس الآن
              </Button>

              <Button
                href="#curriculum"
                variant="outline"
                size="lg"
                withArrow={false}
              >
                استكشف منظومة المنهج
              </Button>
            </div>

            {/* Under CTA quiet reassurance */}
            <p className="text-xs text-[var(--color-muted)] font-medium">
              دورة مسجلة تطبيقية + تطبيقات عملية + Templates + مخرجات جاهزة
            </p>
          </div>

          {/* Left Column: Architectural Arch Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <ArchFrame
              badge="منظومة التسويق الطبي المتكاملة"
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold-deep)] shadow-inner">
                  <ImageIcon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div>
                  <h2 className="font-display text-base font-bold text-[var(--color-ink)]">
                    صورة الغلاف / المحاضر
                  </h2>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    إطار القوس المعماري (Arch Frame)
                  </p>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold">
                  <span>مدعوم بـ AI Native Workflows</span>
                </div>
              </div>
            </ArchFrame>
          </div>
        </div>

        {/* Anchoring Colonnade Pipeline Runway */}
        <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-deep)] mb-4 text-right">
            مسار تدفق المنظومة من البداية للقياس:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
            {pipeline.map((item, idx) => (
              <div
                key={item}
                className="py-2.5 px-3 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-center text-xs font-medium text-[var(--color-ink)] shadow-2xs transition-colors hover:border-[var(--color-accent)]"
              >
                <span className="block font-mono text-[10px] text-[var(--color-gold-deep)] mb-0.5">
                  0{idx + 1}
                </span>
                <span className="truncate block font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
