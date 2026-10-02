import React from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Bot, HelpCircle, ArrowLeft, CheckCircle2 } from "lucide-react";

export function AiWorkflow() {
  const missingContexts = [
    "مين الجمهور بدقة؟",
    "إيه طبيعة وحساسية الخدمة الطبية؟",
    "إيه المشكلة أو الأعراض الأساسية؟",
    "إيه مرحلة وعي المريض (Awareness Stage)؟",
    "إيه تموضع العيادة (Positioning)؟",
    "إيه الدليل والمصداقية العلمية (Evidence)؟",
    "إيه العرض الطبي الحقيقي والأخلاقي (Offer)؟",
    "إيه الهدف المحدد من هذا المحتوى بالذات؟",
  ];

  const workflowSteps = [
    { title: "Brief", desc: "تحديد الهدف بدقة" },
    { title: "Context", desc: "تزويد الـ AI بالسياق الطبي" },
    { title: "AI Execution", desc: "توليد المسودة والأفكار" },
    { title: "Human Review", desc: "التدقيق البشري والطبي" },
    { title: "Optimization", desc: "التحسين وقياس النتائج" },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="terracotta">الذكاء الاصطناعي في خدمة التسويق الطبي</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            هل يقدر ChatGPT يكتبلك المحتوى الطبي؟
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            آه يقدر... بس مش دي المشكلة الحقيقية!
          </p>
        </div>

        {/* The 8 missing questions */}
        <div className="max-w-4xl mx-auto bg-[var(--color-bg-sunken)]/60 p-6 sm:p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] mb-12">
          <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-4 text-center">
            الذكاء الاصطناعي بدون مدخلات استراتيجية يعطيك نتائج عامة ومكررة... لأنك لم تحدد له:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {missingContexts.map((q, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center gap-2 text-xs font-medium text-[var(--color-ink)] shadow-2xs"
              >
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Workflow Process Box */}
        <div className="max-w-4xl mx-auto bg-[var(--color-bg-elevated)] p-8 rounded-[var(--radius-card)] border-2 border-[var(--color-gold)]/50 shadow-sm text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] text-xs font-bold mb-4">
            <Bot className="w-4 h-4" />
            <span>القاعدة الأساسية للكورس</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mb-3">
            الـ AI ليس بديلاً عن التفكير التسويقي... بل أداة ضمن منظومة
          </h3>

          <p className="text-sm text-[var(--color-muted)] max-w-xl mx-auto mb-8">
            في الكورس، لن تتعلم مجرد Prompts سطحية، بل ستتعلم مسار عمل متكامل (Workflow) يضمن دقة الرسالة:
          </p>

          {/* Workflow badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-strong)] text-right">
                  <span className="font-display font-bold text-sm text-[var(--color-accent)] block">
                    {step.title}
                  </span>
                  <span className="text-[11px] text-[var(--color-muted)] font-medium">
                    {step.desc}
                  </span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <span className="text-[var(--color-gold)] font-bold text-lg select-none">
                    ←
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
