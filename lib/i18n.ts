"use client";

import { useEffect, useState } from "react";

export type Locale = "id" | "en";

// Helper hook to get current locale from document cookie on client side
export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>("id");

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };
    const savedLocale = getCookie("eself_locale");
    if (savedLocale === "en") {
      setLocale("en");
    }
  }, []);

  return locale;
}

export function setLocaleCookie(locale: Locale) {
  document.cookie = `eself_locale=${locale}; path=/; max-age=31536000`; // 1 year
  window.location.reload(); // Reload to apply changes across the app
}

export const uiStrings = {
  id: {
    backToHome: "Kembali ke Beranda",
    takeAgain: "Ambil Penilaian Lagi",
    exportPDF: "Unduh PDF",
    exportPNG: "Unduh PNG",
    identity: "Identitas Peserta",
    resultDesc: "Hasil Penilaian",
    loading: "Memproses hasil...",
    errorStartNew: "Mulai Penilaian Baru",
    baseScore: "Base Score",
    adjustmentFactor: "Adjustment Factor",
    dailyActions: "Daily Actions",
    practice: "Hal yang perlu dilatih",
    avoid: "Hal yang perlu dihindari",
    deepInsights: "Deep Insights",
    whyFeel: "Kenapa aku merasa seperti ini?",
    amIOkay: "Apakah aku baik baik saja?",
    unconsciousPattern: "Pola apa yang ada dalam diriku namun aku tidak sadar?",
    journeyMap: "Peta Perjalanan (Flow)",
    disclaimer1: "E-Self Tool adalah alat refleksi diri berbasis self-report yang dirancang untuk membantu pengguna memahami kondisi internal dan pola adaptasi dirinya secara lebih jernih dan terstruktur. Hasil yang ditampilkan bersifat informatif dan reflektif, bukan diagnosis medis, psikologis, atau psikiatris, serta tidak menggantikan konsultasi dengan tenaga profesional.",
    disclaimer2: "This tool is for self-reflection and does not provide medical or psychological diagnosis.",
    startBtn: "Mulai Asesmen Diri",
    adminBtn: "Admin Dashboard",
    heroTitle: "Kenali Kondisi\nInternalmu.",
    heroSubtitle: "Alat refleksi cepat untuk memetakan level energi, regulasi emosi, dan kejernihan pikiranmu hari ini.",
    homeFeature1: "Pemetaan energi & fokus",
    homeFeature2: "20 pertanyaan reflektif",
    homeFeature3: "Hasil personal & praktis",
    nameLabel: "Nama Lengkap atau Panggilan",
    cityLabel: "Kota Domisili (Opsional)",
    waLabel: "Nomor WhatsApp (Opsional)",
    submitProfile: "Mulai Tes Sekarang",
    warningFillAll: "Harap jawab semua pertanyaan sebelum submit.",
    btnNext: "Selanjutnya",
    btnSubmit: "Lihat Hasil Analisis",
    part: "Bagian",
    of: "dari",
  },
  en: {
    backToHome: "Back to Home",
    takeAgain: "Retake Assessment",
    exportPDF: "Download PDF",
    exportPNG: "Download PNG",
    identity: "Participant Identity",
    resultDesc: "Assessment Result",
    loading: "Processing result...",
    errorStartNew: "Start New Assessment",
    baseScore: "Base Score",
    adjustmentFactor: "Adjustment Factor",
    dailyActions: "Daily Actions",
    practice: "Things to practice",
    avoid: "Things to avoid",
    deepInsights: "Deep Insights",
    whyFeel: "Why do I feel this way?",
    amIOkay: "Am I okay?",
    unconsciousPattern: "What unconscious pattern is running in me?",
    journeyMap: "Journey Map (Flow)",
    disclaimer1: "The E-Self Tool is a self-report-based reflection tool designed to help users understand their internal condition and adaptation patterns more clearly and structurally. The results displayed are informative and reflective, not a medical, psychological, or psychiatric diagnosis, and do not replace professional consultation.",
    disclaimer2: "This tool is for self-reflection and does not provide medical or psychological diagnosis.",
    startBtn: "Start Self Assessment",
    adminBtn: "Admin Dashboard",
    heroTitle: "Understand Your\nInternal State.",
    heroSubtitle: "A quick reflection tool to map your energy level, emotion regulation, and mental clarity today.",
    homeFeature1: "Energy & focus mapping",
    homeFeature2: "20 reflective questions",
    homeFeature3: "Personal & practical results",
    nameLabel: "Full Name or Nickname",
    cityLabel: "City of Residence (Optional)",
    waLabel: "WhatsApp Number (Optional)",
    submitProfile: "Start Test Now",
    warningFillAll: "Please answer all questions before submitting.",
    btnNext: "Next",
    btnSubmit: "View Analysis Result",
    part: "Part",
    of: "of",
  }
};
