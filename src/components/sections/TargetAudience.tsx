import React from "react";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Users, Stethoscope, Megaphone, PenTool, Share2, Layers, Briefcase, Building } from "lucide-react";

export function TargetAudience() {
  const marketingRoles = [
    {
      title: "Content Creators",
      role: "صنّاع المحتوى",
      desc: "لو عايز تدخل تخصص طبي واضح ومرتفع العائد ومطلوب في السوق بقوة.",
      icon: PenTool,
    },
    {
      title: "Copywriters",
      role: "كتّاب الإعلانات والنصوص",
      desc: "عندك أساسيات الكتابة وعايز تفهم أسرار وسيكولوجية الـ Medical Market.",
      icon: Megaphone,
    },
    {
      title: "Social Media Specialists",
      role: "متخصصو السوشيال ميديا",
      desc: "بتدير صفحات أطباء أو عيادات ومحتاج استراتيجية محتوى تجلب حجوزات حقيقية.",
      icon: Share2,
    },
    {
      title: "Media Buyers",
      role: "مديرو الحملات الإعلانية",
      desc: "عايز تفهم الرسالة والـ Creative والـ Funnel بدل الاكتفاء بإطلاق الإعلان فقط.",
      icon: Layers,
    },
    {
      title: "Freelancers",
      role: "المستقلون (Freelancers)",
      desc: "استلمت عميل طبي أو مركز تجميل ومش عارف تبدأ منين وتبني له النتائج.",
      icon: Briefcase,
    },
    {
      title: "Agency Owners",
      role: "أصحاب وكالات التسويق",
      desc: "عايز تضيف خدمة Medical Marketing متكاملة وذات تسعير عالي لخدمات شركتك.",
      icon: Building,
    },
  ];

  const medicalRoles = [
    {
      title: "الأطباء وأصحاب العيادات",
      desc: "عايز تبني براند طبي موثوق وتفهم كيف يقيم فريق التسويق بدون أن تُخدع بالأرقام السطحية.",
    },
    {
      title: "مديرو العيادات والمراكز والمستشفيات",
      desc: "مسؤول عن تطوير الإيرادات وزيادة معدل حضور المرضى وملء جدول مواعيد الأطباء.",
    },
    {
      title: "In-house Marketing Teams",
      desc: "الفرق التسويقية الداخلية في المراكز الطبية التي تبحث عن منهجية موحدة للعمل والتطوير.",
    },
    {
      title: "أفراد الفرق الطبية المسؤولين عن المحتوى",
      desc: "الصيادلة، أطباء الأسنان، والتمريض المكلّفون بإنتاج وتدقيق المحتوى والتواصل.",
    },
  ];

  return (
    <section id="audience" className="py-20 bg-[var(--color-bg-sunken)]/40 border-b border-[var(--color-border)]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Eyebrow variant="gold">الفئات المستهدفة</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
            لمن هذا الكورس؟
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-ink-soft)] font-normal">
            تم تصميم هذا المنهج لخدمة مسارين متكاملين في صناعة الرعاية الصحية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Marketing & Content */}
          <div className="lg:col-span-7 bg-[var(--color-bg-elevated)] p-6 sm:p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-xs">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-[var(--color-border)]">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider block">
                  المسار الأول
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                  Marketing & Content Professionals
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketingRoles.map((role, idx) => {
                const IconComponent = role.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <IconComponent className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <h4 className="font-display text-sm font-bold text-[var(--color-ink)]">
                        {role.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Medical Sector */}
          <div className="lg:col-span-5 bg-[var(--color-bg-elevated)] p-6 sm:p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-xs">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-[var(--color-border)]">
              <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--color-gold-deep)] uppercase tracking-wider block">
                  المسار الثاني
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                  Medical Sector & Clinics
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {medicalRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/50 transition-colors"
                >
                  <h4 className="font-display text-sm font-bold text-[var(--color-ink)] mb-1">
                    {role.title}
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
