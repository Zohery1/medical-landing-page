"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Primitives";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-xs"
          : "bg-[var(--color-bg)]/60 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] font-bold text-lg group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-200">
              <span className="font-display">م</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-display text-lg font-bold text-[var(--color-ink)] leading-tight tracking-tight">
                المحتوى الطبي
              </span>
              <span className="text-[11px] text-[var(--color-muted)] font-medium">
                Medical Marketing & Copywriting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] transition-colors py-1 relative after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-[var(--color-accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              isWhatsApp
              customMessage="مرحبًا، أود الاشتراك في كورس المحتوى والتسويق الطبي"
              size="default"
              variant="terracotta"
            >
              اشترك الآن
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-bg-sunken)] transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 px-3 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] rounded-b-2xl shadow-lg space-y-3">
            <nav className="flex flex-col gap-2">
              {siteConfig.navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-bg-sunken)] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-[var(--color-border)]">
              <Button
                isWhatsApp
                customMessage="مرحبًا، أود الاشتراك في كورس المحتوى والتسويق الطبي"
                className="w-full"
                size="default"
              >
                اشترك الآن عبر واتساب
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
