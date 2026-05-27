"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SECTIONS, Answers } from "@/lib/questions";
import { computeScore } from "@/lib/scoring";
import { saveAssessment } from "@/lib/supabase";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import Link from "next/link";

const QUESTIONS_PER_SECTION = 4;
const TOTAL_SECTIONS = SECTIONS.length; // 5

export default function AssessmentPage() {
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Enforce profile entrance gate
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const profile = sessionStorage.getItem("eself_profile");
      if (!profile) {
        router.replace("/");
      }
    }
  }, [router]);

  const currentSection = SECTIONS[currentSectionIndex];
  const totalAnswered = Object.keys(answers).length;

  // Check which questions in the current section are answered
  const sectionAnswered = currentSection.questions.every(
    (q) => answers[q.key] !== undefined
  );

  const handleAnswer = useCallback((key: `q${number}`, value: number) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleNext = () => {
    if (currentSectionIndex < TOTAL_SECTIONS - 1) {
      setCurrentSectionIndex((i) => i + 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((i) => i - 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  const handleSubmit = async () => {
    // Verify all 20 answered
    const allAnswered = SECTIONS.every((section) =>
      section.questions.every((q) => answers[q.key] !== undefined)
    );

    if (!allAnswered) {
      setSubmitError("Harap jawab semua pertanyaan sebelum submit.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const fullAnswers = answers as Answers;
      const result = computeScore(fullAnswers);

      let name = "Anonim";
      let city = "-";
      let whatsapp = "-";
      
      if (typeof window !== "undefined") {
        try {
          const profileStr = sessionStorage.getItem("eself_profile");
          if (profileStr) {
            const profile = JSON.parse(profileStr);
            name = profile.name || name;
            city = profile.city || city;
            whatsapp = profile.whatsapp || whatsapp;
          }
        } catch {}
      }

      const payload = {
        name,
        city,
        whatsapp,
        score: result.finalScore,
        zone: result.zone.zone,
        state: result.zone.state,
        mode: result.zone.mode,
        flow: result.zone.flow,
        q1: fullAnswers.q1, q2: fullAnswers.q2, q3: fullAnswers.q3, q4: fullAnswers.q4,
        q5: fullAnswers.q5, q6: fullAnswers.q6, q7: fullAnswers.q7, q8: fullAnswers.q8,
        q9: fullAnswers.q9, q10: fullAnswers.q10, q11: fullAnswers.q11, q12: fullAnswers.q12,
        q13: fullAnswers.q13, q14: fullAnswers.q14, q15: fullAnswers.q15, q16: fullAnswers.q16,
        q17: fullAnswers.q17, q18: fullAnswers.q18, q19: fullAnswers.q19, q20: fullAnswers.q20,
      };

      // Try to save to Supabase, get ID
      const id = await saveAssessment(payload);

      // Always store in sessionStorage as fallback
      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          "eself_result",
          JSON.stringify({ ...payload, id: id ?? "local", finalScore: result.finalScore })
        );
      }

      if (id) {
        router.push(`/result/${id}`);
      } else {
        // No Supabase — go to result with local data
        router.push("/result/local");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Terjadi kesalahan. Silakan coba lagi.");
      setIsSubmitting(false);
    }
  };

  const isLastSection = currentSectionIndex === TOTAL_SECTIONS - 1;
  const allSectionsDone = totalAnswered === 20;

  return (
    <main className="gradient-bg noise-bg min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-2xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <span className="text-[10px] font-black text-black">E</span>
          </div>
          <span className="font-bold text-white/70 tracking-tight text-sm">E-Self Tool</span>
        </Link>
        <span className="text-xs text-white/30">
          {totalAnswered} / 20 dijawab
        </span>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 pb-10">

        {/* Progress */}
        <div className="mb-8">
          <ProgressBar
            currentSection={currentSectionIndex}
            totalSections={TOTAL_SECTIONS}
            currentQuestion={
              currentSection.questions.filter((q) => answers[q.key] !== undefined).length
            }
            questionsPerSection={QUESTIONS_PER_SECTION}
          />
        </div>

        {/* Section header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
              Bagian {currentSectionIndex + 1} dari {TOTAL_SECTIONS}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white">{currentSection.title}</h2>
          <p className="text-sm text-white/40 mt-1">{currentSection.subtitle}</p>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {currentSection.questions.map((question) => (
            <div key={question.id} className="glass-card p-6">
              <QuestionCard
                questionNumber={question.id}
                text={question.text}
                hint={question.hint}
                value={answers[question.key] ?? null}
                onChange={(value) => handleAnswer(question.key, value)}
              />
            </div>
          ))}
        </div>

        {/* Error */}
        {submitError && (
          <div className="mt-6 p-4 rounded-xl border border-red-400/30 bg-red-400/10 text-sm text-red-300">
            {submitError}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 mt-8">
          {/* Back */}
          <button
            onClick={handleBack}
            disabled={currentSectionIndex === 0}
            id="btn-back-section"
            className="
              flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10
              text-sm text-white/50 font-medium
              hover:border-white/20 hover:text-white/70
              disabled:opacity-20 disabled:cursor-not-allowed
              transition-all duration-200
            "
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Kembali
          </button>

          {/* Next / Submit */}
          {isLastSection ? (
            <button
              onClick={handleSubmit}
              disabled={!allSectionsDone || isSubmitting}
              id="btn-submit-assessment"
              className="
                flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                bg-gradient-to-r from-cyan-500 to-cyan-400
                text-black font-bold text-sm
                shadow-[0_0_30px_rgba(34,211,238,0.25)]
                hover:shadow-[0_0_50px_rgba(34,211,238,0.4)]
                disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
                transition-all duration-300 hover:scale-[1.02] active:scale-100
              "
            >
              {isSubmitting ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Memproses...
                </>
              ) : (
                <>
                  Lihat Hasil
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!sectionAnswered}
              id="btn-next-section"
              className="
                flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                bg-gradient-to-r from-cyan-500 to-cyan-400
                text-black font-bold text-sm
                shadow-[0_0_30px_rgba(34,211,238,0.25)]
                hover:shadow-[0_0_50px_rgba(34,211,238,0.4)]
                disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none
                transition-all duration-300 hover:scale-[1.02] active:scale-100
              "
            >
              Lanjutkan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          )}
        </div>

        {/* Section hint */}
        {!sectionAnswered && (
          <p className="mt-3 text-center text-xs text-white/25">
            Jawab semua pertanyaan di bagian ini untuk melanjutkan
          </p>
        )}
      </div>

      {/* Footer disclaimer */}
      <footer className="relative z-10 px-6 py-4 text-center">
        <p className="text-[10px] text-white/15">
          Tidak ada jawaban benar atau salah · Hasil hanya muncul di halaman Result
        </p>
      </footer>
    </main>
  );
}
