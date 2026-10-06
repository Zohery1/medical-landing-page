"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

/**
 * 1. ScrollProgress:
 * Top sticky progress bar with snappy spring physics.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "right" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-accent)] z-50 pointer-events-none shadow-[0_0_12px_rgba(168,76,38,0.5)]"
    />
  );
}

/**
 * 2. Reveal:
 * Fast, elegant entrance on scroll.
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.45,
  direction = "up",
  distance = 24,
}: RevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const initial = { opacity: 0, ...getInitialPosition() };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple snappy ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 3. TiltCard (Instant Hardware-Accelerated Interactive Card):
 * 0ms latency, pure GPU compositor transform on hover without any JS layout thrashing.
 */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  return (
    <div
      className={`transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(22,21,20,0.07)] hover:border-[var(--color-gold)]/70 active:scale-[0.985] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * 4. FloatingElement:
 * Weightless continuous floating bob.
 */
export function FloatingElement({
  children,
  className = "",
  distance = 10,
  duration = 5,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 5. ShimmerButtonWrapper:
 * Sweeping light gleam on buttons.
 */
export function ShimmerButtonWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden group rounded-full ${className}`}>
      {children}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.5,
        }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
      />
    </div>
  );
}
