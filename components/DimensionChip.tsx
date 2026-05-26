"use client";

import React from "react";

type DimensionChipProps = {
  label: string;   // "State" | "Mode" | "Flow"
  value: string;   // e.g. "Clear", "Observe", "Open"
  hexColor: string;
};

export default function DimensionChip({ label, value, hexColor }: DimensionChipProps) {
  return (
    <div
      className="flex flex-col items-center gap-2 p-5 rounded-2xl border transition-all duration-300"
      style={{
        borderColor: `${hexColor}25`,
        background: `linear-gradient(160deg, ${hexColor}0D, transparent)`,
      }}
    >
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
        {label}
      </span>
      <span
        className="text-xl font-bold"
        style={{ color: hexColor }}
      >
        {value}
      </span>
    </div>
  );
}
