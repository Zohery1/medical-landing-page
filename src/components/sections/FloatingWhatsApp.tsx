"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 left-4 md:bottom-6 md:left-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip bubble with AnimatePresence (visible on sm screens and up) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: -8 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="relative hidden sm:flex bg-[var(--color-bg-elevated)] text-[var(--color-ink)] px-4 py-2.5 rounded-2xl shadow-xl border border-[var(--color-border-strong)] text-xs font-semibold max-w-[230px] text-right items-center justify-between gap-2.5"
          >
            <div className="flex items-start gap-2">
              <MessageCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[var(--color-ink)] font-bold">عندك سؤال عن الكورس؟</div>
                <div className="text-[11px] text-[var(--color-gold-deep)] font-medium">تواصل معنا على WhatsApp</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowTooltip(false)}
              className="text-[var(--color-muted)] hover:text-[var(--color-ink)] p-1 rounded-full hover:bg-[var(--color-bg-sunken)] cursor-pointer shrink-0 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-3.5 h-3.5" />
            </motion.button>

            {/* Tooltip speech arrow pointing left towards the green button */}
            <div className="absolute -left-1.5 bottom-3.5 w-3 h-3 bg-[var(--color-bg-elevated)] border-b border-l border-[var(--color-border-strong)] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with physical levitation */}
      <motion.a
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.95 }}
        href={siteConfig.whatsapp.getLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 relative group cursor-pointer"
        aria-label="تواصل معنا على WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:hidden" />
      </motion.a>
    </div>
  );
}
