"use client";

import React from "react";
import { SCALE_LABELS } from "@/lib/questions";

type QuestionCardProps = {
  questionNumber: number;   // 1–20
  text: string;
  value: number | null;
  onChange: (value: number) => void;
};

export default function QuestionCard({
  questionNumber,
  text,
  value,
  onChange,
}: QuestionCardProps) {
  return (
    <div className="w-full space-y-5">
      {/* Question text */}
      <div className="space-y-1">
        <span className="text-xs font-mono text-cyan-400/60 tracking-widest uppercase">
          Q{String(questionNumber).padStart(2, "0")}
        </span>
        <p className="text-base sm:text-lg font-medium text-white/90 leading-relaxed">
          {text}
        </p>
      </div>

      {/* Scale options */}
      <div className="grid grid-cols-5 gap-2">
        {[0, 1, 2, 3, 4].map((v) => {
          const isSelected = value === v;
          const label = SCALE_LABELS[v];

          return (
            <button
              key={v}
              onClick={() => onChange(v)}
              aria-label={`Pilih: ${label}`}
              aria-pressed={isSelected}
              className={`
                group relative flex flex-col items-center gap-2 py-3 px-1 rounded-xl border
                transition-all duration-200 cursor-pointer
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                }
              `}
            >
              {/* Score number */}
              <span
                className={`text-xl font-bold font-mono transition-colors duration-200 ${
                  isSelected ? "text-cyan-400" : "text-white/30 group-hover:text-white/60"
                }`}
              >
                {v}
              </span>

              {/* Label */}
              <span
                className={`text-[9px] font-medium text-center leading-tight transition-colors duration-200 ${
                  isSelected ? "text-cyan-300/90" : "text-white/25 group-hover:text-white/40"
                }`}
              >
                {label}
              </span>

              {/* Selection indicator dot */}
              {isSelected && (
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Scale endpoints label */}
      <div className="flex justify-between text-[10px] text-white/20 px-1">
        <span>Sangat Rendah</span>
        <span>Sangat Tinggi</span>
      </div>
    </div>
  );
}
