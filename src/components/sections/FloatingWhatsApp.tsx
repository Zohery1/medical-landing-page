"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="relative bg-[var(--color-bg-elevated)] text-[var(--color-ink)] px-4 py-2.5 rounded-2xl shadow-xl border border-[var(--color-border-strong)] text-xs font-semibold max-w-[210px] text-right flex items-center justify-between gap-2 animate-bounce-subtle">
          <span>💬 عندك سؤال عن الكورس؟ تواصل معنا</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[var(--color-muted)] hover:text-[var(--color-ink)] p-0.5"
            aria-label="إغلاق التنبيه"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Tooltip speech arrow pointing left towards the green button */}
          <div className="absolute -left-1.5 bottom-3.5 w-3 h-3 bg-[var(--color-bg-elevated)] border-b border-l border-[var(--color-border-strong)] rotate-45" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={siteConfig.whatsapp.getLink("مرحبًا، لدي سؤال عن كورس المحتوى والتسويق الطبي")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-200 relative group cursor-pointer"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:hidden" />
      </a>
    </div>
  );
}
