import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Primitives";
import { DiamondMark } from "./motifs";

interface SectionProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "start" | "center";
  width?: "default" | "narrow" | "wide";
  tone?: "plain" | "elevated" | "sunken";
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
  align = "start",
  width = "default",
  tone = "plain",
}: SectionProps) {
  const hasHeading = Boolean(eyebrow || title || description);
  const centered = align === "center";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-24 sm:py-28 md:py-32 lg:py-36 relative",
        tone === "elevated" && "border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]",
        tone === "sunken" && "border-y border-[var(--color-gold)]/20 bg-[var(--color-bg-sunken)]/60",
        className
      )}
    >
      <Container size={width} className={containerClassName}>
        {hasHeading && (
          <div
            className={cn(
              "mb-14 md:mb-20 flex flex-col gap-4",
              centered ? "items-center text-center max-w-3xl mx-auto" : "items-start text-right max-w-4xl"
            )}
          >
            {/* Top architectural brass hairline */}
            <span
              aria-hidden="true"
              className={cn(
                "block h-px bg-[var(--color-gold)]/40 mb-2",
                centered ? "w-24 mx-auto" : "w-24"
              )}
            />

            {eyebrow && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[11px] font-semibold tracking-wider text-[var(--color-gold-deep)] shadow-2xs">
                <DiamondMark className="text-[9px]" />
                {eyebrow}
              </span>
            )}

            {title && (
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink)] leading-[1.2] tracking-tight">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-base sm:text-lg text-[var(--color-ink-soft)] leading-relaxed max-w-[65ch] font-normal">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
