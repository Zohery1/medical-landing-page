"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "motion/react";

/**
 * 1. ScrollProgress:
 * Top sticky progress bar with spring physics tracking scroll percentage.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
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
 * Smooth scroll-triggered entrance animation with directional control.
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
  duration = 0.6,
  direction = "up",
  distance = 30,
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth snappy cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 3. TiltCard:
 * 3D isometric interactive tilt on hover with dynamic cursor glare.
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
  intensity = 10,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative perspective-1000 ${className}`}
    >
      {children}

      {glare && isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle at ${x.get() * 100}% ${y.get() * 100}%, rgba(212,163,115,0.8), transparent 60%)`,
          }}
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300"
        />
      )}
    </motion.div>
  );
}

/**
 * 4. FloatingElement:
 * Weightless antigravity continuous floating bob.
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
        rotate: [-0.5, 0.5, -0.5],
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
 * Adds a sweeping ambient gleam across buttons.
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
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
      />
    </div>
  );
}

/**
 * 6. PulseBeam:
 * Animated glowing light traveling continuously through pipelines.
 */
export function PulseBeam({ activeIndex, total }: { activeIndex: number; total: number }) {
  const percentage = ((activeIndex + 0.5) / total) * 100;
  return (
    <motion.div
      animate={{ left: `${percentage}%` }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)] pointer-events-none -translate-x-1/2"
    />
  );
}
