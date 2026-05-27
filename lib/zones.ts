// lib/zones.ts
// LOCKED SPEC DO NOT MODIFY ZONE TABLE STRUCTURE

import { Locale } from "./i18n";
import { ZONE_TABLE_ID } from "./zones-id";
import { ZONE_TABLE_EN } from "./zones-en";

export type ZoneName =
  | "Void"
  | "Crash"
  | "Shield"
  | "Grip"
  | "Flow"
  | "Shift"
  | "Awake"
  | "Merge"
  | "Core"
  | "Peak";

export type ZoneData = {
  zone: ZoneName;
  state: string;
  mode: string;
  flow: string;
  minScore: number;
  maxScore: number;
  interpretation: string;
  characteristics: {
    feelings: string;      // apa yang dirasakan
    thoughts: string;      // apa yang dipikirkan
    worries: string;       // apa yang dikhawatirkan
    reality: string;       // bagaimana melihat realitas
    physical: string;      // kondisi ketegangan otot/syaraf
  };
  deepInsights: {
    whyFeelThisWay: string;    // kenapa aku merasa seperti ini
    amIOkay: string;           // apakah aku baik baik saja
    unconsciousPattern: string; // pola apa yang ada dalam diriku namun aku tidak sadar
  };
  actionable: {
    practice: string[];      // 5 hal yang harus dilatih tiap hari
    avoid: string[];         // 5 hal yang harus dihindari tiap hari
  };
  colorClass: string;    // Tailwind color token
  hexColor: string;      // For inline styles / SVG
  bgGradient: string;    // Tailwind gradient for zone card
};

// Default export for generic loops like JourneyMap that only need colors/names, not translations
export const ZONE_TABLE = ZONE_TABLE_ID;

/** Strict range lookup no fuzzy logic */
export function getZoneData(score: number, locale: Locale = "id"): ZoneData {
  const clamped = Math.max(0, Math.min(100, Math.round(score)));
  const table = locale === "en" ? ZONE_TABLE_EN : ZONE_TABLE_ID;
  
  const zone = table.find(
    (z) => clamped >= z.minScore && clamped <= z.maxScore
  );
  // Fallback safety should never happen with valid score
  return zone ?? table[0];
}
