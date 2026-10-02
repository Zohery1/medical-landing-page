"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip bubble with AnimatePresence */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-[var(--color-bg-elevated)] text-[var(--color-ink)] px-4 py-2.5 rounded-2xl shadow-2xl border border-[var(--color-border-strong)] text-xs font-semibold max-w-[220px] text-right flex items-center justify-between gap-2"
          >
            <div>
              <div className="text-[var(--color-ink)]">💬 عندك سؤال عن الكورس؟</div>
              <div className="text-[11px] text-[var(--color-gold-deep)]">تواصل معنا على WhatsApp</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowTooltip(false)}
              className="text-[var(--color-muted)] hover:text-[var(--color-ink)] p-0.5 cursor-pointer"
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
