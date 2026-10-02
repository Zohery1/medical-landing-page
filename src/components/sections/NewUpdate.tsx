import React from "react";
import { Container } from "@/components/ui/Primitives";
import { Sparkles, FileText } from "lucide-react";

export function NewUpdate() {
  const updates = [
    {
      num: "01",
      title: "Medical Business",
      desc: "افهم نموذج عمل العيادة والمركز، ومصادر الإيراد، والطاقة الاستيعابية والخدمة ذات الأولوية.",
      deliverable: "Medical Business Diagnosis",
    },
    {
      num: "02",
      title: "Patient Journey",
      desc: "من أول اكتشاف المشكلة لحد الحجز والحضور.",
      deliverable: "Patient Journey & Leakage Map",
    },
    {
      num: "03",
      title: "Medical Service Research",
      desc: "تحليل الخدمة والمنافسين وVoice of Customer والاعتراضات والـEvidence.",
      deliverable: "Medical Service Research Dossier",
    },
    {
      num: "04",
      title: "Segmentation & Decision Psychology",
      desc: "افهم اختلاف الشرائح ومخاوفها ودوافعها وعناصر الثقة.",
      deliverable: "Persona Messaging Cards",
    },
    {
      num: "05",
      title: "Positioning & Ethical Offer",
      desc: "حوّل التميز الحقيقي إلى عرض واضح بدون مبالغة أو وعود علاجية.",
      deliverable: "Positioning Statement & Ethical Offer",
    },
    {
      num: "06",
      title: "Messaging Strategy",
      desc: "ابنِ الرسالة الأساسية والرسائل المساندة حسب الجمهور ومرحلة الوعي.",
      deliverable: "Medical Messaging Strategy",
    },
    {
      num: "07",
      title: "Organic + Paid",
      desc: "اربط المحتوى العضوي بالإعلانات والـRetargeting والـWhatsApp والـLanding Page.",
      deliverable: "Organic & Paid Acquisition Map",
    },
    {
      num: "08",
      title: "Medical Funnel & CRO",
      desc: "اعرف فين المريض بيسيب الرحلة وإزاي تقلل التسرب.",
      deliverable: "Medical Funnel & CRO Checklist",
    },
    {
      num: "09",
      title: "Measurement & Optimization",
      desc: "مش كل Lead = نتيجة. هتتعلم قياس: Leads, Qualified Leads, Bookings, Attendance Rate, Conversion Rate, Cost per Booking, Cost per Acquired Patient, ROAS.",
      deliverable: "Measurement & Optimization Plan",
    },
    {
      num: "10",
      title: "AI Native Medical Marketing",
      desc: "استخدام الـAI في: Research → Analysis → Personas → Strategy → Ideas → Copy → Review. القاعدة: AI ينتج، والإنسان يراجع.",
      deliverable: "AI Workflow & Prompt Framework",
    },
  ];

  return (
    <section id="update" className="py-20 bg-[var(--color-bg-sunken)]/60 border-y border-[var(--color-border)] relative">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>التحديث الجديد</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
            الجديد في Medical Performance Marketing
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal leading-relaxed">
            الكورس بيتطور من Content & Copywriting إلى منظومة Medical Performance Marketing متكاملة.
          </p>
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg-elevated)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[var(--color-bg-sunken)] text-[var(--color-gold-deep)] border border-[var(--color-border)]">
                    {item.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border)] flex items-center gap-2 text-xs text-[var(--color-gold-deep)] font-medium">
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>المخرج: <strong className="font-semibold text-[var(--color-ink)]">{item.deliverable}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
