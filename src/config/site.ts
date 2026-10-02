export const siteConfig = {
  name: "Medical Performance Marketing & Medical Copywriting",
  title: "المحتوى الطبي — المنظومة المتكاملة للتسويق الطبي",
  description: "كورس مهني تطبيقي للمسوقين وكتاب المحتوى والأطباء وفرق العيادات، لتعلم تسويق الخدمات الطبية من فهم الـ Business وصولاً إلى الإعلانات والتحويل والقياس.",
  instructor: {
    name: "محمد العدوي",
    role: "Founder & CEO — Copyway",
    bio: "متخصص في الـ Copywriting والتسويق الرقمي بخبرة عملية تتجاوز 6 سنوات، عمل خلالها مع شركات وأنشطة تجارية وخدمية في مصر والكويت والإمارات والأردن والسعودية.",
    stats: [
      { label: "منشور إعلاني وتسويقي", value: "+4,000" },
      { label: "متدرب في صناعة المحتوى", value: "+2,000" },
      { label: "سنوات خبرة تطبيقية", value: "+6" },
      { label: "دول عربية تم العمل معها", value: "5" },
    ],
  },
  whatsapp: {
    number: "+201507786761",
    rawNumber: "201507786761",
    defaultMessage: "مرحبًا محمد، أود الاستفسار والاشتراك في كورس Medical Performance Marketing & Medical Copywriting",
    getLink: (customMessage?: string) => {
      const msg = encodeURIComponent(
        customMessage || "مرحبًا، أود الاستفسار والاشتراك في كورس Medical Performance Marketing & Copywriting"
      );
      return `https://wa.me/201507786761?text=${msg}`;
    },
  },
  pricing: {
    current: 2000,
    currency: "جنيه مصري",
    formattedPrice: "2,000 ج.م",
    note: "دورة مسجلة تطبيقية + تطبيقات + Templates + مخرجات عملية",
  },
  navLinks: [
    { label: "الكورس", href: "#hero" },
    { label: "ماذا ستتعلم؟", href: "#curriculum" },
    { label: "المحاضر", href: "#instructor" },
    { label: "آراء الطلاب", href: "#testimonials" },
    { label: "سابقة الأعمال", href: "#portfolio" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ],
};
