// lib/scoring.ts
// SCORING FORMULA v2 — Moderated Adjustment Factor
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
  adjustmentFactor: number;  // clamped -10 to +10
  finalScore: number;        // clamped 0-100

  // Coherence metrics (v2)
  coherenceRatio: number;      // 0.0-1.0, how well awareness aligns with behavior
  effectiveAwareness: number;  // awareness moderated by reactivity control
  hasBlindSpot: boolean;       // true if high awareness claim + poor reactivity

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
 * Deterministic scoring engine (v2).
 * Moderated Adjustment: awareness claims are discounted proportionally
 * by reactivity performance (emotional control evidence).
 */
export function computeScore(answers: Answers, locale: Locale = "id"): ScoringResult {
  const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20 } = answers;

  // 1. Domain averages
  const stabilityAvg   = avg(q1, q2, q3, q4);
  const reactivityAvg  = avg(q5, q6, q7, q8);
  const clarityAvg     = avg(q9, q10, q11, q12);
  const adaptivityAvg  = avg(q13, q14, q15, q16);
  const adjustmentAvg  = avg(q17, q18, q19, q20);

  // 2. Normalize to 0-100
  const stabilityScore  = normalize(stabilityAvg);
  const reactivityScore = normalize(reactivityAvg);
  const clarityScore    = normalize(clarityAvg);
  const adaptivityScore = normalize(adaptivityAvg);

  // 3. Reactivity inversion (high raw reactivity = bad = low final score)
  const reactivityFinal = 100 - reactivityScore;

  // 4. Base score (equal weight, unchanged)
  const baseScore = (stabilityScore + reactivityFinal + clarityScore + adaptivityScore) / 4;

  // 5. Moderated Adjustment Factor (v2)
  // Klaim Awareness dimoderasi oleh bukti perilaku (Reactivity control).
  // Jika ReactivityFinal tinggi (emosi terkendali), klaim dipercaya sepenuhnya.
  // Jika ReactivityFinal rendah (emosi meledak), klaim didiskon.
  const coherenceRatio = reactivityFinal / 100;
  const effectiveAwareness = adjustmentAvg * coherenceRatio;
  const rawAdjustment = (effectiveAwareness - 2) * 5;
  const adjustmentFactor = clamp(rawAdjustment, -10, 10);

  // 6. Final score (clamped 0-100)
  const finalScore = clamp(Math.round(baseScore + adjustmentFactor), 0, 100);

  // 7. Blind-spot detection
  // Klaim Awareness tinggi (>= 3.0) tapi ReactivityFinal rendah (< 40)
  const hasBlindSpot = adjustmentAvg >= 3.0 && reactivityFinal < 40;

  // 8. Zone lookup
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
    coherenceRatio,
    effectiveAwareness,
    hasBlindSpot,
    zone,
  };
}

