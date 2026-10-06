"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function FloatingSubscribe() {
  return (
    <div className="fixed bottom-5 right-4 z-50 md:hidden select-none">
      <motion.a
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        whileTap={{ scale: 0.94 }}
        href={siteConfig.whatsapp.getLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold text-sm shadow-[0_12px_28px_-6px_rgba(168,76,38,0.45)] border border-white/20 active:scale-95 transition-all cursor-pointer"
        aria-label="اشترك في الكورس الآن"
      >
        {/* Subtle pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-30 animate-ping -z-10 pointer-events-none" />

        <span className="font-display tracking-tight text-[13px] font-bold">اشترك الآن</span>
        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
          <ArrowLeft className="w-3.5 h-3.5" />
        </span>
      </motion.a>
    </div>
  );
}
