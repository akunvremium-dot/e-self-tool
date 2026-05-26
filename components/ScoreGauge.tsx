"use client";

import React, { useEffect, useState } from "react";

type ScoreGaugeProps = {
  score: number;     // 0–100
  hexColor: string;  // Zone color
};

export default function ScoreGauge({ score, hexColor }: ScoreGaugeProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [animatedDash, setAnimatedDash] = useState(0);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedDash / 100) * circumference;

  useEffect(() => {
    // Animate score counter
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(eased * score));
      setAnimatedDash(eased * score);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [score]);

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        className="rotate-[-90deg]"
        aria-label={`Score: ${score} out of 100`}
      >
        {/* Background ring */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="12"
        />
        {/* Glow ring (static, slightly wider) */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke={hexColor}
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          opacity="0.15"
          style={{ filter: `blur(6px)` }}
          data-html2canvas-ignore="true"
        />
        {/* Main arc */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke={hexColor}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.05s linear" }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
        <span
          className="text-5xl font-bold font-mono tabular-nums leading-none"
          style={{ color: hexColor, textShadow: `0 0 30px ${hexColor}60` }}
        >
          {displayScore}
        </span>
        <span className="text-xs text-white/30 font-medium mt-1 tracking-widest uppercase">
          Self-Reg Score
        </span>
      </div>
    </div>
  );
}
