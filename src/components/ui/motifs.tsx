import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Subtle girih lattice backdrop. Purely decorative. */
export function PatternBackdrop({
  className,
  variant = "accent",
}: {
  className?: string;
  variant?: "accent" | "gold" | "white";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        variant === "gold" && "pattern-girih-gold",
        variant === "accent" && "pattern-girih",
        variant === "white" && "pattern-girih-white",
        className
      )}
    />
  );
}

/** Brass rule with a diamond ornament in the middle. */
export function OrnamentDivider({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4 my-8", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-gold)]/50" />
      <span className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-gold-deep)] font-medium select-none">
        <span aria-hidden="true" className="text-[0.65rem] leading-none text-[var(--color-gold)]">
          ◆
        </span>
        {label}
        {label && (
          <span aria-hidden="true" className="text-[0.65rem] leading-none text-[var(--color-gold)]">
            ◆
          </span>
        )}
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--color-gold)]/50" />
    </div>
  );
}

/** Small standalone diamond mark, used before section labels or badges. */
export function DiamondMark({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("text-[var(--color-gold)] select-none text-[0.65rem]", className)}>
      ◆
    </span>
  );
}

/** Arch-framed media panel with brass hairline and soft inner ring. */
export function ArchFrame({
  className,
  children,
  badge,
}: {
  className?: string;
  children?: ReactNode;
  badge?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Outer shell (Doppelrand) with subtle gradient and diffuse shadow */}
      <div className="arch relative h-full w-full border border-[var(--color-gold)]/40 bg-gradient-to-b from-[var(--color-bg-sunken)] to-[var(--color-bg)] p-2 shadow-[0_20px_50px_rgba(156,123,69,0.08)]">
        {/* Inner core with specular highlight and concentric curves */}
        <div className="arch relative h-full w-full overflow-hidden ring-1 ring-inset ring-[var(--color-gold)]/20 bg-[var(--color-bg-elevated)] pattern-girih-gold shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)] flex flex-col items-center justify-center min-h-[380px] p-6 text-center">
          {children}

          {badge && (
            <span className="absolute bottom-4 start-1/2 -translate-x-1/2 text-[11px] font-semibold px-3 py-1 rounded-full bg-[var(--color-bg-elevated)]/95 border border-[var(--color-gold)]/40 text-[var(--color-gold-deep)] shadow-xs backdrop-blur-xs whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/** Double-Bezel Hardware Architecture Card (Doppelrand) */
export function DoubleBezelCard({
  className,
  innerClassName,
  children,
  variant = "default",
}: {
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  variant?: "default" | "accent" | "gold";
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] p-1.5 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
        variant === "default" && "bg-gradient-to-b from-[var(--color-border)]/80 to-[var(--color-border-strong)]/40 border border-[var(--color-border-strong)]/60 shadow-[0_16px_36px_-12px_rgba(22,21,20,0.05)]",
        variant === "accent" && "bg-gradient-to-b from-[var(--color-accent)]/20 to-[var(--color-gold)]/10 border border-[var(--color-accent)]/30 shadow-[0_20px_48px_-12px_rgba(168,76,38,0.12)]",
        variant === "gold" && "bg-gradient-to-b from-[var(--color-gold)]/25 to-[var(--color-gold-deep)]/10 border border-[var(--color-gold)]/40 shadow-[0_20px_48px_-12px_rgba(156,123,69,0.12)]",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-[calc(2rem-0.375rem)] bg-[var(--color-bg-elevated)] p-6 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.85)] border border-white/50",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
