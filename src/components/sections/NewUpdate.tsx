import React from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Sparkles, ArrowLeft, Target, BarChart3, Bot, FileText, CheckCircle } from "lucide-react";

export function NewUpdate() {
  const updates = [
    {
      num: "01",
      title: "Medical Business",
      desc: "افهم نموذج عمل العيادة والمركز الطبي، ومصادر الإيراد، والطاقة الاستيعابية للأطباء وتحديد الخدمة ذات الأولوية الربحية.",
      deliverable: "Medical Business Diagnosis",
    },
    {
      num: "02",
      title: "Patient Journey",
      desc: "رسم رحلة المريض الكاملة من أول لحظة اكتشاف المشكلة والأعراض وحتى إتمام الحجز والحضور الفعلي للعيادة.",
      deliverable: "Patient Journey & Leakage Map",
    },
    {
      num: "03",
      title: "Medical Service Research",
      desc: "تحليل الخدمة الطبية والمنافسين واستخراج Voice of Customer والاعتراضات والأدلة الطبية المعتمدة (Evidence).",
      deliverable: "Medical Service Research Dossier",
    },
    {
      num: "04",
      title: "Segmentation & Decision Psychology",
      desc: "فهم اختلاف الشرائح النفسية للمرضى ومخاوفهم ومحفزات اتخاذ قرار العلاج وعناصر بناء الثقة الطبية.",
      deliverable: "Persona Messaging Cards",
    },
    {
      num: "05",
      title: "Positioning & Ethical Offer",
      desc: "تحويل التميز الطبي الحقيقي إلى عرض قيمة جذاب وأخلاقي بدون مبالغة غير واقعية أو وعود علاجية خادعة.",
      deliverable: "Positioning Statement & Ethical Offer",
    },
    {
      num: "06",
      title: "Messaging Strategy",
      desc: "بناء الرسالة الأساسية والرسائل الإعلانية المساندة بدقة تناسب كل شريحة حسب مرحلة وعيها بحالتها الصحية.",
      deliverable: "Medical Messaging Strategy",
    },
    {
      num: "07",
      title: "Organic + Paid Acquisition",
      desc: "ربط صناعة المحتوى المجاني بالإعلانات الممولة (Paid Ads) وإعادة الاستهداف (Retargeting) وقنوات الـ WhatsApp.",
      deliverable: "Organic & Paid Acquisition Map",
    },
    {
      num: "08",
      title: "Medical Funnel & CRO",
      desc: "اكتشاف مناطق تسرب المرضى داخل المسار البيعي وإجراء تحسينات معدل التحويل (CRO) لرفع كفاءة كل إعلان.",
      deliverable: "Medical Funnel & CRO Checklist",
    },
    {
      num: "09",
      title: "Measurement & Optimization",
      desc: "مش كل Lead = نتيجة! هتتعلم قياس: الحجوزات الفعلية، نسبة الحضور (Attendance Rate)، تكلفة المريض المكتسب، والـ ROAS.",
      deliverable: "Measurement & Optimization Plan",
    },
    {
      num: "10",
      title: "AI Native Medical Marketing",
      desc: "دمج الذكاء الاصطناعي في: البحث، التحليل، الأفكار، الصياغة. بالقاعدة الذهبية: 'AI ينتج، والإنسان الطبي يراجع'.",
      deliverable: "AI Workflow & Prompt Framework",
    },
  ];

  return (
    <section id="update" className="py-20 bg-[var(--color-bg-sunken)]/60 border-y border-[var(--color-border)] relative">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>التحديث والتطوير الجديد للمنظومة</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            الجديد في Medical Performance Marketing
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal leading-relaxed">
            الكورس يتطور من مجرد Content & Copywriting إلى منظومة تسويق رقمي طبي متكاملة (10 محاور تطويرية جديدة)
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
                    المحور {item.num}
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

              {/* Deliverable badge */}
              <div className="pt-3 border-t border-[var(--color-border)]/70 flex items-center gap-2 text-xs">
                <FileText className="w-3.5 h-3.5 text-[var(--color-gold-deep)] shrink-0" />
                <span className="text-[var(--color-ink)] font-medium truncate">
                  المخرج: <strong className="font-semibold text-[var(--color-gold-deep)]">{item.deliverable}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
