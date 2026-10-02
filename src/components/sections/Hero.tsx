import React from "react";
import { siteConfig } from "@/config/site";
import { Container, Eyebrow, BrassRule } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ArchImagePlaceholder } from "@/components/ui/ArchImagePlaceholder";
import { CheckCircle2, ArrowDown } from "lucide-react";

export function Hero() {
  const funnelSteps = [
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
    <section id="hero" className="relative pt-8 pb-20 overflow-hidden hero-wash">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy (Right side in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Eyebrow */}
            <Eyebrow variant="gold">
              Medical Performance Marketing & Medical Copywriting
            </Eyebrow>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-ink)] leading-[1.18] tracking-tight">
              مش هتتعلم تكتب بوست طبي وبس...
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-[var(--color-ink-soft)] leading-relaxed max-w-2xl font-normal">
              هتتعلم إزاي تفهم السوق والخدمة والجمهور، وتحول المعلومات دي إلى{" "}
              <strong className="font-semibold text-[var(--color-accent)]">
                استراتيجية ورسائل ومحتوى وإعلانات
              </strong>{" "}
              ومسار تحويل قابل للتنفيذ والقياس.
            </p>

            {/* The Funnel Flow Pills */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider mb-3">
                منظومة العمل المتكاملة من البداية للقياس:
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {funnelSteps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-3 py-1 text-xs font-medium bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] rounded-full text-[var(--color-ink)] shadow-2xs">
                      {step}
                    </span>
                    {idx < funnelSteps.length - 1 && (
                      <span className="text-[var(--color-gold)] font-bold text-xs select-none">
                        ←
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* CTA & Trust note */}
            <div className="pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  isWhatsApp
                  customMessage="مرحبًا، أود الاشتراك في كورس Medical Performance Marketing & Copywriting"
                  size="lg"
                  variant="terracotta"
                  className="shadow-md text-base"
                >
                  اشترك في الكورس الآن
                </Button>

                <Button
                  href="#curriculum"
                  variant="outline"
                  size="lg"
                  withArrow={false}
                >
                  استكشف المنهج بالتفصيل
                </Button>
              </div>

              {/* Under CTA note */}
              <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] pt-1">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-gold-deep)] shrink-0" />
                <span>دورة مسجلة تطبيقية + تطبيقات + Templates + مخرجات عملية</span>
              </div>
            </div>
          </div>

          {/* Visual Presentation (Left side in RTL) */}
          <div className="lg:col-span-5 relative">
            {/* Background decorative halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-gold)]/10 via-[var(--color-accent)]/5 to-transparent rounded-3xl blur-xl pointer-events-none" />

            <div className="relative">
              <ArchImagePlaceholder
                aspectRatio="aspect-[4/5]"
                label="صورة كورس المحتوى والتسويق الطبي"
                badge="المنظومة التطبيقية الكاملة"
                className="max-w-md mx-auto"
              />

              {/* Floating feature pill */}
              <div className="absolute -bottom-5 right-4 sm:right-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] rounded-2xl p-3.5 shadow-lg max-w-xs text-right">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold shrink-0">
                    AI
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-[var(--color-ink)]">
                      مدعوم بـ AI Native Workflows
                    </h2>
                    <p className="text-[11px] text-[var(--color-muted)]">
                      من الـ Brief للمراجعة البشرية الدقيقة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
