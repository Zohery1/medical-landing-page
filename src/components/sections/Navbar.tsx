"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Primitives";
import { Menu, X, Sparkles } from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_4px_20px_-4px_rgba(22,21,20,0.04)]"
          : "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/25 flex items-center justify-center text-[var(--color-accent)] font-bold text-lg group-hover:bg-[var(--color-accent)] group-hover:text-white transition-[background-color,color] duration-200 shadow-2xs">
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
                className="text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] transition-colors py-1 relative after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-[var(--color-accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              isWhatsApp
              size="default"
              variant="terracotta"
            >
              اشترك الآن
            </Button>
          </div>

          {/* Fluid Hamburger Button (Emil / High-End Design) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl text-[var(--color-ink)] hover:bg-[var(--color-bg-sunken)] active:scale-95 transition-[transform,background-color] duration-150 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-0.5 bg-[var(--color-ink)] rounded-full transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--color-ink)] rounded-full transition-opacity duration-150 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--color-ink)] rounded-full transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu dropdown with Staggered Mask Reveal */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.98 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="lg:hidden overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] rounded-b-2xl shadow-xl"
            >
              <div className="py-4 px-3 space-y-3">
                <nav className="flex flex-col gap-1">
                  {siteConfig.navLinks.map((item, idx) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.2 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-2.5 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-sunken)] rounded-xl transition-colors min-h-[44px] flex items-center"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
                <div className="pt-2 border-t border-[var(--color-border)]">
                  <Button
                    isWhatsApp
                    className="w-full"
                    size="default"
                  >
                    اشترك الآن عبر واتساب
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
