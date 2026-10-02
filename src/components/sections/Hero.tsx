import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ArchFrame, DiamondMark, PatternBackdrop } from "@/components/ui/motifs";
import { ImageIcon } from "lucide-react";

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
      <PatternBackdrop variant="gold" className="opacity-40" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Right Column: Copy strictly from docx */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            <span className="eyebrow inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider mb-5">
              <DiamondMark />
              Medical Performance Marketing & Medical Copywriting
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-ink)] leading-[1.15] tracking-tight">
              مش هتتعلم تكتب بوست طبي وبس...
            </h1>

            <span aria-hidden="true" className="block h-px w-24 bg-[var(--color-gold)]/60 my-6" />

            <p className="text-lg sm:text-xl text-[var(--color-ink-soft)] leading-relaxed max-w-2xl font-normal mb-8">
              هتتعلم إزاي تفهم السوق والخدمة والجمهور، وتحول المعلومات دي إلى استراتيجية ورسائل ومحتوى وإعلانات ومسار تحويل قابل للتنفيذ والقياس.
            </p>

            {/* Single CTA from docx */}
            <div className="space-y-3 mb-4">
              <Button
                isWhatsApp
                customMessage="مرحبًا، أود الاشتراك في كورس Medical Performance Marketing & Copywriting"
                size="lg"
                variant="terracotta"
              >
                اشترك في الكورس الآن
              </Button>

              <p className="text-xs text-[var(--color-muted)] font-medium">
                دورة مسجلة تطبيقية + تطبيقات + Templates + مخرجات عملية
              </p>
            </div>
          </div>

          {/* Left Column: Arch Frame Placeholder */}
          <div className="lg:col-span-5 relative">
            <ArchFrame
              badge="المحتوى الطبي"
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold-deep)] shadow-inner">
                  <ImageIcon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div className="text-center">
                  <p className="font-display text-sm font-bold text-[var(--color-ink)]">
                    مساحة الصورة
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    إطار القوس المعماري (Arch Frame)
                  </p>
                </div>
              </div>
            </ArchFrame>
          </div>
        </div>

        {/* The Pipeline strictly from docx */}
        <div className="mt-16 pt-10 border-t border-[var(--color-border)] text-right">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-deep)] mb-4">
            من:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
            {pipeline.map((item, idx) => (
              <div
                key={item}
                className="py-2.5 px-2 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-center text-xs font-medium text-[var(--color-ink)] shadow-2xs"
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
