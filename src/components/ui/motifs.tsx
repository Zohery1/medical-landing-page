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
      <div className="arch relative h-full w-full border border-[var(--color-gold)]/40 bg-[var(--color-bg-sunken)] p-2 shadow-sm">
        <div className="arch relative h-full w-full overflow-hidden ring-1 ring-inset ring-[var(--color-gold)]/20 bg-[var(--color-bg-elevated)] pattern-girih-gold flex flex-col items-center justify-center min-h-[380px] p-6 text-center">
          {children}

          {badge && (
            <span className="absolute bottom-4 start-1/2 -translate-x-1/2 text-[11px] font-semibold px-3 py-1 rounded-full bg-[var(--color-bg-elevated)]/90 border border-[var(--color-gold)]/30 text-[var(--color-gold-deep)] shadow-xs backdrop-blur-xs whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
