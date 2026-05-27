// lib/questions.ts
// LOCKED SPEC — DO NOT MODIFY QUESTION TEXT OR ORDER

import { SECTIONS_ID } from "./questions-id";
import { SECTIONS_EN } from "./questions-en";
import { Locale } from "./i18n";

export type Section = {
  id: string;
  title: string;
  subtitle: string;
  questions: Question[];
};

export type Question = {
  id: number; // 1–20
  key: `q${number}`;
  text: string;
  hint?: string;
};

export const getScaleLabels = (locale: Locale = "id"): Record<number, string> => {
  if (locale === "en") {
    return {
      0: "Strongly Disagree",
      1: "Disagree",
      2: "Neutral / Sometimes",
      3: "Agree",
      4: "Strongly Agree",
    };
  }
  return {
    0: "Sangat Tidak Sesuai",
    1: "Tidak Sesuai",
    2: "Netral / Kadang",
    3: "Sesuai",
    4: "Sangat Sesuai",
  };
};

export const getSections = (locale: Locale = "id"): Section[] => {
  return locale === "en" ? SECTIONS_EN : SECTIONS_ID;
};

export type Answers = Record<`q${number}`, number>;
