import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Primitives";
import { MessageCircle } from "lucide-react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
    { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
    { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
  ];

  return (
    <footer className="bg-[var(--color-bg-sunken)] text-[var(--color-ink)] pt-16 pb-12 border-t border-[var(--color-border)]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--color-border-strong)]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg font-display">
                م
              </div>
              <div>
                <span className="font-display text-lg font-bold block leading-tight">
                  المحتوى الطبي
                </span>
                <span className="text-xs text-[var(--color-muted)]">
                  Copyway — Medical Performance Marketing
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed max-w-sm">
              برنامج تدريبي مهني وتطبيقي متكامل لبناء منظومات التسويق الرقمي والمحتوى والإعلانات للقطاع الصحي والعيادات والمراكز الطبية.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                    aria-label={s.label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3 text-right">
            <h4 className="font-display text-sm font-bold text-[var(--color-ink)]">
              أقسام الصفحة
            </h4>
            <ul className="space-y-2 text-xs text-[var(--color-ink-soft)]">
              <li>
                <a href="#hero" className="hover:text-[var(--color-accent)] transition-colors">
                  الكورس
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-[var(--color-accent)] transition-colors">
                  ماذا ستتعلم؟
                </a>
              </li>
              <li>
                <a href="#instructor" className="hover:text-[var(--color-accent)] transition-colors">
                  عن المحاضر
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[var(--color-accent)] transition-colors">
                  سابقة الأعمال
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--color-accent)] transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-4 space-y-3 text-right">
            <h4 className="font-display text-sm font-bold text-[var(--color-ink)]">
              تواصل واستفسارات
            </h4>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              فريق العمل متاح للرد على أي استفسار بخصوص تفاصيل المحتوى والاشتراك وطرق الدفع.
            </p>

            <a
              href={siteConfig.whatsapp.getLink("مرحبًا، لدي استفسار بخصوص كورس التسويق الطبي")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] hover:underline underline-offset-4"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب المباشر: {siteConfig.whatsapp.number}</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright and legal notes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© {currentYear} جميع الحقوق محفوظة لـ Copyway & محمد العدوي.</p>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">سياسة الخصوصية</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">الشروط والأحكام</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
