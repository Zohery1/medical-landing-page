import React from "react";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ArchImagePlaceholderProps {
  className?: string;
  label?: string;
  aspectRatio?: string;
  badge?: string;
}

export function ArchImagePlaceholder({
  className,
  label = "مساحة الصورة",
  aspectRatio = "aspect-[4/5]",
  badge,
}: ArchImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative rounded-[var(--radius-card)] p-2 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-sm",
        className
      )}
    >
      {/* Arch Inner Frame */}
      <div
        className={cn(
          "arch relative w-full overflow-hidden bg-gradient-to-b from-[#ebdccb]/40 via-[var(--color-bg-sunken)] to-[#ebe8de] border border-[var(--color-gold)]/30 flex flex-col items-center justify-center text-center p-6 pattern-girih-gold",
          aspectRatio
        )}
      >
        {/* Subtle decorative glow */}
        <div className="absolute inset-0 bg-radial from-[var(--color-gold)]/10 to-transparent pointer-events-none" />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[var(--color-bg-elevated)]/80 border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold-deep)] shadow-inner">
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>

          <div className="space-y-1">
            <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
              {label}
            </p>
            <p className="text-xs text-[var(--color-muted)]">
              إطار القوس المعماري (Arch Frame)
            </p>
          </div>

          {badge && (
            <span className="mt-2 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              {badge}
            </span>
          )}
        </div>

        {/* Bottom brass decorative notch */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--color-gold)]/40 rounded-full" />
      </div>
    </div>
  );
}
