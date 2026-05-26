"use client";

import React from "react";

type ProgressBarProps = {
  currentSection: number;   // 0-indexed
  totalSections: number;
  currentQuestion: number;  // within section, 0-indexed
  questionsPerSection: number;
};

export default function ProgressBar({
  currentSection,
  totalSections,
  currentQuestion,
  questionsPerSection,
}: ProgressBarProps) {
  const totalQuestions = totalSections * questionsPerSection;
  const answeredQuestions = currentSection * questionsPerSection + currentQuestion;
  const percentage = Math.round((answeredQuestions / totalQuestions) * 100);

  const sectionLabels = ["Energy", "Emotion", "Cognition", "Behavior", "Awareness"];

  return (
    <div className="w-full space-y-3">
      {/* Section indicators */}
      <div className="flex items-center justify-between gap-1.5">
        {sectionLabels.map((label, i) => (
          <div key={label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`h-1 w-full rounded-full transition-all duration-500 ${
                i < currentSection
                  ? "bg-cyan-400"
                  : i === currentSection
                  ? "bg-cyan-400/60"
                  : "bg-white/10"
              }`}
            />
            <span
              className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                i <= currentSection ? "text-cyan-400/80" : "text-white/20"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Overall progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs text-white/40 font-mono w-10 text-right">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
