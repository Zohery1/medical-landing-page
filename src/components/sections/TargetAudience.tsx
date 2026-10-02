import React from "react";
import { Section } from "@/components/ui/Section";
import { DiamondMark } from "@/components/ui/motifs";

export function TargetAudience() {
  const marketingRoles = [
    { title: "Content Creators", desc: "لو عايز تدخل تخصص طبي واضح ومطلوب بقوة في سوق الخليج ومصر." },
    { title: "Copywriters", desc: "عندك أساسيات الكتابة وعايز تفهم أسرار وسيكولوجية الرعاية الصحية والـ Medical Market." },
    { title: "Social Media Specialists", desc: "بتدير صفحات أطباء أو مراكز ومحتاج استراتيجية محتوى تجلب مرضى حقيقيين." },
    { title: "Media Buyers", desc: "عايز تفهم صياغة الرسالة والـ Creative ومسار التحويل مش مجرد إطلاق إعلان." },
    { title: "Freelancers", desc: "استلمت عميل طبي أو مركز تجميل ومحتاج خارطة طريق تبدأ منها وتضمن له النتائج." },
    { title: "Agency Owners", desc: "عايز تضيف باقة Medical Performance Marketing متكاملة وذات تسعير عالي لخدماتك." },
  ];

  const medicalRoles = [
    { title: "الأطباء وأصحاب العيادات", desc: "عايز تبني براند طبي موثوق وتفهم كيف تقيم فريق التسويق بدون أن تُخدع بالأرقام السطحية." },
    { title: "مديرو العيادات والمراكز", desc: "مسؤول عن تطوير الإيرادات ورفع معدل حضور المرضى وملء جدول مواعيد الأطباء." },
    { title: "In-house Marketing Teams", desc: "الفرق التسويقية الداخلية في المراكز الطبية التي تبحث عن منهجية عمل موحدة وقابلة للقياس." },
    { title: "أفراد الفرق الطبية للمحتوى", desc: "الصيادلة، أطباء الأسنان، والتمريض المكلّفون بإنتاج وتدقيق المحتوى والتواصل الطبي." },
  ];

  return (
    <Section
      id="audience"
      eyebrow="الفئات المستهدفة"
      title="لمن هذا الكورس؟"
      description="تم تصميم هذا المنهج لخدمة مسارين متكاملين في صناعة الرعاية الصحية والتسويق المتخصص"
      tone="sunken"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Track 1: Marketing & Content */}
        <div className="space-y-6">
          <div className="pb-3 border-b border-[var(--color-border-strong)]">
            <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
              المسار الأول
            </span>
            <h3 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              Marketing & Content Professionals
            </h3>
          </div>

          <div className="divide-y divide-[var(--color-border)]">
            {marketingRoles.map((role) => (
              <div key={role.title} className="py-4 first:pt-0 last:pb-0 text-right">
                <div className="flex items-center gap-2 mb-1">
                  <DiamondMark className="text-xs" />
                  <h4 className="font-display text-sm font-bold text-[var(--color-ink)]">
                    {role.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed ps-4">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Medical Sector */}
        <div className="space-y-6">
          <div className="pb-3 border-b border-[var(--color-border-strong)]">
            <span className="text-xs font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider block mb-1">
              المسار الثاني
            </span>
            <h3 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              Medical Sector & Clinics
            </h3>
          </div>

          <div className="divide-y divide-[var(--color-border)]">
            {medicalRoles.map((role) => (
              <div key={role.title} className="py-4 first:pt-0 last:pb-0 text-right">
                <div className="flex items-center gap-2 mb-1">
                  <DiamondMark className="text-xs text-[var(--color-gold-deep)]" />
                  <h4 className="font-display text-sm font-bold text-[var(--color-ink)]">
                    {role.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed ps-4">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
