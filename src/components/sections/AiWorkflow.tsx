import React from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark } from "@/components/ui/motifs";
import { Bot, Check } from "lucide-react";

export function AiWorkflow() {
  const missingContexts = [
    { q: "مين الجمهور المستهدف بدقة؟", why: "بدون تحديد الشريحة ستكون الرسالة مبهمة ولا تلمس أحداً." },
    { q: "إيه طبيعة وحساسية الخدمة الطبية؟", why: "الخدمات العلاجية تختلف جذرياً عن التجميلية في سيكولوجية المريض." },
    { q: "إيه المشكلة أو الأعراض الأساسية؟", why: "المريض يبحث عن علاج لألمه، لا عن مصطلحات طبية معقدة." },
    { q: "إيه مرحلة وعي المريض (Awareness Stage)؟", why: "هل يعرف مشكلته؟ هل يقارن الأطباء؟ أم يبحث عن حجز عاجل؟" },
    { q: "إيه تموضع العيادة (Positioning)؟", why: "ما الذي يميزك عن العيادة المجاورة في نفس الشارع؟" },
    { q: "إيه الدليل والمصداقية العلمية (Evidence)؟", why: "الطب قطاع تحكمه الثقة والأمان قبل أي شيء آخر." },
    { q: "إيه العرض الطبي الحقيقي والأخلاقي؟", why: "عرض جذاب بدون وعود علاجية وهمية أو مخالفات قانونية." },
    { q: "إيه الهدف المحدد من هذا المحتوى؟", why: "توعية؟ إجابة على اعتراض؟ أم توجيه مباشر لرسائل الحجز؟" },
  ];

  const workflow = [
    { title: "Brief", subtitle: "تحديد الهدف" },
    { title: "Context", subtitle: "تغذية السياق الطبي" },
    { title: "AI Generation", subtitle: "إنتاج المسودات" },
    { title: "Human Review", subtitle: "التدقيق الطبي والبشري" },
    { title: "Optimization", subtitle: "التحسين والقياس" },
  ];

  return (
    <Section
      id="ai-workflow"
      eyebrow="الذكاء الاصطناعي في خدمة الطب"
      title="هل يقدر ChatGPT يكتبلك المحتوى الطبي؟"
      description="آه يقدر... بس دي مش المشكلة الحقيقية! المشكلة إن أداة الـ AI بدون مدخلات استراتيجية واعية تعطي نصوصاً عامة ومكررة تفقد العيادة مصداقيتها."
      tone="sunken"
    >
      <div className="space-y-12">
        {/* The 8 Strategic Missing Contexts (Clean divided list) */}
        <div>
          <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-6 text-right">
            الـ AI لا يعرف إجابة هذه الأسئلة إلا إذا دربته أنت عليها:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 divide-y md:divide-y-0 divide-[var(--color-border)]">
            {missingContexts.map((item, idx) => (
              <div key={idx} className="pt-3 md:pt-0 flex items-start gap-3 text-right">
                <span className="font-mono text-xs font-bold text-[var(--color-accent)] w-6 shrink-0 pt-0.5">
                  0{idx + 1}
                </span>
                <div className="space-y-0.5">
                  <h4 className="font-display text-sm font-bold text-[var(--color-ink)]">
                    {item.q}
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                    {item.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Workflow Banner */}
        <div className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold)]/40 shadow-2xs text-center space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-gold-deep)] uppercase tracking-wider mb-2">
              <Bot className="w-4 h-4" />
              القاعدة الذهبية للكورس
            </span>
            <h3 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              &quot;الذكاء الاصطناعي ينتج... والإنسان الطبي يراجع ويقود&quot;
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {workflow.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="px-4 py-2 rounded-xl bg-[var(--color-bg-sunken)] border border-[var(--color-border)] text-right">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)] block">
                    {step.title}
                  </span>
                  <span className="text-[11px] text-[var(--color-muted)] font-medium">
                    {step.subtitle}
                  </span>
                </div>
                {idx < workflow.length - 1 && (
                  <span className="text-[var(--color-gold)] font-bold text-sm select-none">
                    ←
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
