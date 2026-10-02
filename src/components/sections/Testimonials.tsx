"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Play, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const videoPlaceholders = [
    { title: "فيديو تجربة 1" },
    { title: "فيديو تجربة 2" },
    { title: "فيديو تجربة 3" },
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
          <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-6 text-right">
            Video Testimonials
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoPlaceholders.map((vid, idx) => (
              <div
                key={idx}
                className="aspect-video rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex flex-col items-center justify-center p-4 text-center group cursor-pointer hover:border-[var(--color-accent)] transition-all shadow-2xs"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-2">
                  <Play className="w-5 h-5 fill-current mr-0.5" />
                </div>
                <span className="font-display text-xs font-bold text-[var(--color-ink)]">
                  {vid.title}
                </span>
              </div>
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
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards for desktop (3) and mobile (1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const item = screenshots[(sliderIndex + offset) % screenshots.length];
              return (
                <div
                  key={offset}
                  className={`aspect-[4/3] rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex flex-col items-center justify-center p-6 text-center shadow-2xs ${
                    offset > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  <ImageIcon className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                  <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
                    {item.label}
                  </p>
                  <span className="text-[11px] text-[var(--color-muted)] mt-1">
                    مساحة سكرين شوت لرأي حقيقي
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
