"use client";

import React from "react";
import { ZoneData } from "@/lib/zones";

type ZoneBadgeProps = {
  zoneData: ZoneData;
};

export default function ZoneBadge({ zoneData }: ZoneBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
      style={{
        borderColor: `${zoneData.hexColor}40`,
        background: `linear-gradient(135deg, ${zoneData.hexColor}15, ${zoneData.hexColor}08)`,
        boxShadow: `0 0 30px ${zoneData.hexColor}20`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ backgroundColor: zoneData.hexColor }}
      />
      <span
        className="text-lg font-bold tracking-wide"
        style={{ color: zoneData.hexColor }}
      >
        {zoneData.zone}
      </span>
      <span className="text-xs text-white/30 font-medium">Zone</span>
    </div>
  );
}
