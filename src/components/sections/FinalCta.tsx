import React from "react";
import { siteConfig } from "@/config/site";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Sparkles, MessageCircle } from "lucide-react";

export function FinalCta() {
  const finalPipeline = [
    "Business",
    "Market",
    "Patient",
    "Strategy",
    "Copy",
    "Content",
    "Ads",
    "Conversion",
  ];

  return (
    <section className="py-24 bg-[var(--color-accent)] text-white relative overflow-hidden pattern-girih-white">
      {/* Radial shade */}
      <div className="absolute inset-0 bg-radial from-black/10 via-transparent to-black/25 pointer-events-none" />

      <Container size="wide" className="relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold tracking-wide backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ابدأ رحلتك الاحترافية اليوم</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-balance">
          جاهز تبدأ في التسويق الطبي بطريقة مختلفة تحقق نتائج حقيقية؟
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl text-white/90 font-medium">
            مش هتبدأ من البوست العشوائي...
          </p>

          <p className="text-sm sm:text-base text-white/80">
            هتبدأ من المنظومة المتكاملة الصحيحة:
          </p>

          {/* Pipeline badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {finalPipeline.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold backdrop-blur-xs">
                  {step}
                </span>
                {idx < finalPipeline.length - 1 && (
                  <span className="text-white/60 font-bold select-none text-xs">
                    ←
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Button
            isWhatsApp
            customMessage="مرحبًا، أنا جاهز للاشتراك في كورس Medical Performance Marketing"
            size="lg"
            variant="dark"
            className="text-base sm:text-lg px-10 py-4 shadow-xl hover:scale-105"
          >
            اشترك الآن وتواصل عبر واتساب
          </Button>

          <p className="text-xs text-white/75 mt-4">
            دورة مسجلة فورية + تطبيقات عملية + حقيبة الأدوات والملفات
          </p>
        </div>
      </Container>
    </section>
  );
}
