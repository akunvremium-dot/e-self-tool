// lib/scoring.ts
// LOCKED SPEC — DO NOT MODIFY SCORING FORMULA
// Deterministic, pure function — same input always produces same output

import { Answers } from "./questions";
import { getZoneData, ZoneData } from "./zones";
import { Locale } from "./i18n";

export type ScoringResult = {
  // Raw domain averages (0–4)
  stabilityAvg: number;
  reactivityAvg: number;
  clarityAvg: number;
  adaptivityAvg: number;
  adjustmentAvg: number;

  // Normalized domain scores (0–100)
  stabilityScore: number;
  reactivityScore: number;
  clarityScore: number;
  adaptivityScore: number;

  // Derived
  reactivityFinal: number;   // 100 - reactivityScore
  baseScore: number;
  adjustmentFactor: number;  // clamped –10 to +10
  finalScore: number;        // clamped 0–100

  // Zone output
  zone: ZoneData;
};

function avg(...values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function normalize(domainAvg: number): number {
  return (domainAvg / 4) * 100;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Deterministic scoring engine.
 * Implements the exact formula from the locked spec (Section 6).
 */
export function computeScore(answers: Answers, locale: Locale = "id"): ScoringResult {
  const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20 } = answers;

  // 6.1 Domain averages
  const stabilityAvg   = avg(q1, q2, q3, q4);
  const reactivityAvg  = avg(q5, q6, q7, q8);
  const clarityAvg     = avg(q9, q10, q11, q12);
  const adaptivityAvg  = avg(q13, q14, q15, q16);
  const adjustmentAvg  = avg(q17, q18, q19, q20);

  // 6.2 Normalize to 0–100
  const stabilityScore  = normalize(stabilityAvg);
  const reactivityScore = normalize(reactivityAvg);
  const clarityScore    = normalize(clarityAvg);
  const adaptivityScore = normalize(adaptivityAvg);

  // 6.3 Reactivity inversion
  const reactivityFinal = 100 - reactivityScore;

  // 6.4 Base score
  const baseScore = (stabilityScore + reactivityFinal + clarityScore + adaptivityScore) / 4;

  // 6.5 Adjustment factor (clamped –10 to +10)
  const rawAdjustment = ((q17 + q18 + q19 + q20) / 4 - 2) * 5;
  const adjustmentFactor = clamp(rawAdjustment, -10, 10);

  // 6.6 Final score (clamped 0–100)
  const finalScore = clamp(Math.round(baseScore + adjustmentFactor), 0, 100);

  // --- 4. Penentuan Zona ---
  const zone = getZoneData(finalScore, locale);

  return {
    stabilityAvg,
    reactivityAvg,
    clarityAvg,
    adaptivityAvg,
    adjustmentAvg,
    stabilityScore,
    reactivityScore,
    clarityScore,
    adaptivityScore,
    reactivityFinal,
    baseScore,
    adjustmentFactor,
    finalScore,
    zone,
  };
}
