"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Play, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, TiltCard } from "@/components/ui/motion-primitives";

export function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const videoPlaceholders = [
    { title: "فيديو 1" },
    { title: "فيديو 2" },
    { title: "فيديو 3" },
  ];

  const screenshots = [
    { id: 1, label: "لقطة شاشة لرأي متدرب / عميل 1" },
    { id: 2, label: "لقطة شاشة لرأي متدرب / عميل 2" },
    { id: 3, label: "لقطة شاشة لرأي متدرب / عميل 3" },
    { id: 4, label: "لقطة شاشة لرأي متدرب / عميل 4" },
    { id: 5, label: "لقطة شاشة لرأي متدرب / عميل 5" },
  ];

  const next = () => setSliderIndex((prev) => (prev + 1) % screenshots.length);
  const prev = () => setSliderIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="شوف تجربة المتدربين والعملاء"
      tone="sunken"
    >
      <div className="space-y-16">
        {/* 1. Video Testimonials (3 فيديوهات قوية) */}
        <div>
          <Reveal direction="down">
            <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-6 text-right">
              Video Testimonials
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoPlaceholders.map((vid, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <TiltCard intensity={8}>
                  <div className="aspect-video rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex flex-col items-center justify-center p-4 text-center group cursor-pointer hover:border-[var(--color-accent)] transition-all shadow-sm relative overflow-hidden">
                    {/* Pulsing play button */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-lg mb-2 relative"
                    >
                      <Play className="w-6 h-6 fill-current mr-0.5" />
                      <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] animate-ping opacity-25 pointer-events-none" />
                    </motion.div>
                    <span className="font-display text-xs font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                      {vid.title}
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2. Written Testimonials (Screenshots تتحول إلى Dynamic Slider) */}
        <div className="pt-8 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
              Written Testimonials
            </h3>

            {/* Slider controls */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-9 h-9 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-pointer shadow-xs"
                aria-label="السابق"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-9 h-9 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-pointer shadow-xs"
                aria-label="التالي"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Cards for desktop (3) and mobile (1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const item = screenshots[(sliderIndex + offset) % screenshots.length];
              return (
                <TiltCard
                  key={`${item.id}-${offset}`}
                  intensity={6}
                  className={offset > 0 ? "hidden md:block" : "block"}
                >
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[4/3] rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex flex-col items-center justify-center p-6 text-center shadow-sm"
                  >
                    <ImageIcon className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                    <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
                      {item.label}
                    </p>
                    <span className="text-[11px] text-[var(--color-muted)] mt-1">
                      Screenshot
                    </span>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
