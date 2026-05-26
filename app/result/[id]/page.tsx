"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getAssessment, AssessmentRow } from "@/lib/supabase";
import { computeScore, ScoringResult } from "@/lib/scoring";
import { getZoneData } from "@/lib/zones";
import { Answers } from "@/lib/questions";
import ScoreGauge from "@/components/ScoreGauge";
import ZoneBadge from "@/components/ZoneBadge";
import DimensionChip from "@/components/DimensionChip";
import RadarChart from "@/components/RadarChart";
import ExportButtons from "@/components/ExportButtons";

type ExtendedScoringResult = ScoringResult & { name?: string; city?: string; whatsapp?: string; date?: string; };

type ResultState =
  | { status: "loading" }
  | { status: "ready"; data: ExtendedScoringResult }
  | { status: "error"; message: string };

function buildScoringResultFromRow(row: AssessmentRow): ScoringResult {
  const answers: Answers = {
    q1: row.q1, q2: row.q2, q3: row.q3, q4: row.q4,
    q5: row.q5, q6: row.q6, q7: row.q7, q8: row.q8,
    q9: row.q9, q10: row.q10, q11: row.q11, q12: row.q12,
    q13: row.q13, q14: row.q14, q15: row.q15, q16: row.q16,
    q17: row.q17, q18: row.q18, q19: row.q19, q20: row.q20,
  };
  const result = computeScore(answers) as ExtendedScoringResult;
  result.name = row.name;
  result.city = row.city;
  result.whatsapp = row.whatsapp;
  result.date = row.created_at;
  return result;
}

export default function ResultPage() {
  const params = useParams();
  const id = params?.id as string;

  const [state, setState] = useState<ResultState>({ status: "loading" });

  useEffect(() => {
    const load = async () => {
      // Try sessionStorage first (covers "local" fallback and fresh redirects)
      if (typeof window !== "undefined") {
        const cached = sessionStorage.getItem("eself_result");
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            const answers: Answers = {
              q1: parsed.q1, q2: parsed.q2, q3: parsed.q3, q4: parsed.q4,
              q5: parsed.q5, q6: parsed.q6, q7: parsed.q7, q8: parsed.q8,
              q9: parsed.q9, q10: parsed.q10, q11: parsed.q11, q12: parsed.q12,
              q13: parsed.q13, q14: parsed.q14, q15: parsed.q15, q16: parsed.q16,
              q17: parsed.q17, q18: parsed.q18, q19: parsed.q19, q20: parsed.q20,
            };
            const result = computeScore(answers) as ExtendedScoringResult;
            result.name = parsed.name;
            result.city = parsed.city;
            result.whatsapp = parsed.whatsapp;
            setState({ status: "ready", data: result });
            return;
          } catch {
            // Fall through to Supabase
          }
        }
      }

      // Try Supabase API first if ID is a valid UUID
      if (id && id !== "local" && !id.startsWith("loc_")) {
        try {
          const response = await fetch(`/api/assessment/${id}`);
          if (response.ok) {
            const row = await response.json();
            setState({ status: "ready", data: buildScoringResultFromRow(row) });
            return;
          }
        } catch (err) {
          console.error("API fetch error, trying local fallback:", err);
        }
      }

      // Fallback: Check local storage
      if (id) {
        const row = await getAssessment(id);
        if (row) {
          setState({ status: "ready", data: buildScoringResultFromRow(row) });
          return;
        }
      }

      setState({
        status: "error",
        message: "Hasil tidak ditemukan. Coba mulai penilaian baru.",
      });
    };

    load();
  }, [id]);

  if (state.status === "loading") {
    return (
      <main className="gradient-bg noise-bg min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          <p className="text-sm text-white/40">Memproses hasil...</p>
        </div>
      </main>
    );
  }

  if (state.status === "error") {
    return (
      <main className="gradient-bg noise-bg min-h-screen flex items-center justify-center px-6">
        <div className="glass-card p-8 text-center max-w-md">
          <p className="text-white/60 mb-6">{state.message}</p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm"
          >
            Mulai Penilaian Baru
          </Link>
        </div>
      </main>
    );
  }

  const result = state.data;
  const zone = result.zone;

  // Domain scores for the breakdown bar
  const domains = [
    { label: "Stability", score: result.stabilityScore, color: "#22d3ee" },
    { label: "Reactivity ↓", score: result.reactivityFinal, color: "#818cf8" },
    { label: "Clarity", score: result.clarityScore, color: "#34d399" },
    { label: "Adaptivity", score: result.adaptivityScore, color: "#fcd34d" },
    { label: "Adjustment", score: result.adjustmentAvg * 25, color: "#f472b6" },
  ];

  return (
    <main
      id="export-full"
      className="noise-bg min-h-screen flex flex-col"
      style={{
        background: `
          radial-gradient(ellipse 70% 40% at 50% 0%, ${zone.hexColor}12 0%, transparent 60%),
          radial-gradient(ellipse 50% 30% at 80% 100%, ${zone.hexColor}08 0%, transparent 50%),
          #080B12
        `,
      }}
    >
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-2xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <span className="text-[10px] font-black text-black">E</span>
          </div>
          <span className="font-bold text-white/70 tracking-tight text-sm">E-Self Tool</span>
        </Link>
        <span className="text-xs text-white/20">Hasil Penilaian</span>
      </header>

      <div className="relative z-10 flex-1 max-w-2xl mx-auto w-full px-6 pb-12 space-y-6">

        <div id="export-summary" className="space-y-6 rounded-3xl overflow-hidden -mx-2 px-2 py-2">
          
          {/* User Profile Badge */}
          {result.name && result.name !== "Anonim" && (
            <div className="animate-fade-in-up bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">Identitas Peserta</p>
                <p className="text-base text-white font-bold">{result.name}</p>
              </div>
              <div className="flex gap-5 text-xs text-white/50 font-medium mt-2 sm:mt-0">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  {result.city || "-"}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                  {result.whatsapp || "-"}
                </span>
              </div>
            </div>
          )}

          {/* Score + Zone */}
          <div className="animate-fade-in-up glass-card p-8 flex flex-col items-center gap-6 text-center">
          {/* Score gauge */}
          <ScoreGauge score={result.finalScore} hexColor={zone.hexColor} />

          {/* Zone badge */}
          <ZoneBadge zoneData={zone} />

          {/* Score range label */}
          <p className="text-xs text-white/30">
            {zone.zone} Zone · {zone.minScore}–{zone.maxScore} range
          </p>
        </div>

        {/* State / Mode / Flow */}
        <div className="animate-fade-in-up animate-delay-200 grid grid-cols-3 gap-3">
          <DimensionChip label="State" value={zone.state} hexColor={zone.hexColor} />
          <DimensionChip label="Mode" value={zone.mode} hexColor={zone.hexColor} />
          <DimensionChip label="Flow" value={zone.flow} hexColor={zone.hexColor} />
        </div>
        </div>

        {/* Interpretation */}
        <div
          className="animate-fade-in-up animate-delay-300 glass-card p-6 border-l-2"
          style={{ borderLeftColor: `${zone.hexColor}60` }}
        >
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-3">
            Interpretasi
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            {zone.interpretation}
          </p>
        </div>

        {/* Characteristics Breakdown */}
        <div className="animate-fade-in-up animate-delay-300 glass-card p-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
            Karakteristik Psikologis
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-white/40 mb-1">Apa yang dirasakan (Feelings)</p>
              <p className="text-sm text-white/80 leading-relaxed">{zone.characteristics.feelings}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Apa yang dipikirkan (Thoughts)</p>
              <p className="text-sm text-white/80 leading-relaxed">{zone.characteristics.thoughts}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Apa yang dikhawatirkan (Worries)</p>
              <p className="text-sm text-white/80 leading-relaxed">{zone.characteristics.worries}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Bagaimana melihat realitas (Reality)</p>
              <p className="text-sm text-white/80 leading-relaxed">{zone.characteristics.reality}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Kondisi ketegangan (Physical)</p>
              <p className="text-sm text-white/80 leading-relaxed">{zone.characteristics.physical}</p>
            </div>
          </div>
          
          <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-2">
              Deep Insights
            </p>
            <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 space-y-4">
              <div>
                <p className="text-xs text-cyan-400/80 mb-1 font-medium">Kenapa aku merasa seperti ini?</p>
                <p className="text-sm text-white/80 leading-relaxed">{zone.deepInsights.whyFeelThisWay}</p>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div>
                <p className="text-xs text-indigo-400/80 mb-1 font-medium">Apakah aku baik baik saja?</p>
                <p className="text-sm text-white/80 leading-relaxed">{zone.deepInsights.amIOkay}</p>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div>
                <p className="text-xs text-amber-400/80 mb-1 font-medium">Pola apa yang ada dalam diriku namun aku tidak sadar?</p>
                <p className="text-sm text-white/80 leading-relaxed">{zone.deepInsights.unconsciousPattern}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Domain breakdown */}
        <div className="animate-fade-in-up animate-delay-400 glass-card p-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
            Domain Breakdown
          </p>

          <RadarChart data={domains} zoneHexColor={zone.hexColor} />

          <div className="space-y-3.5 mt-6">
            {domains.map((d) => (
              <div key={d.label} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/50 font-medium">{d.label}</span>
                  <span className="text-xs font-mono text-white/60">
                    {Math.round(d.score)}
                  </span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${d.score}%`,
                      backgroundColor: d.color,
                      boxShadow: `0 0 8px ${d.color}60`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Adjustment note */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-white/30">Base Score</span>
              <span className="font-mono text-white/50">{Math.round(result.baseScore)}</span>
            </div>
            <div className="flex justify-between items-center text-xs mt-1">
              <span className="text-white/30">Adjustment Factor</span>
              <span
                className="font-mono"
                style={{
                  color:
                    result.adjustmentFactor > 0
                      ? "#34d399"
                      : result.adjustmentFactor < 0
                      ? "#f87171"
                      : "#6b7280",
                }}
              >
                {result.adjustmentFactor > 0 ? "+" : ""}
                {Math.round(result.adjustmentFactor)}
              </span>
            </div>
          </div>
        </div>

        {/* Actionable Advice */}
        <div className="animate-fade-in-up animate-delay-400 glass-card p-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
            Daily Actions
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-xs font-semibold text-emerald-400/90 uppercase tracking-wider">Hal yang perlu dilatih</p>
              </div>
              <ul className="space-y-2 text-sm text-white/80 leading-relaxed pl-1">
                {zone.actionable.practice.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-400/50 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 rounded-xl border border-rose-400/20 bg-rose-400/5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-xs font-semibold text-rose-400/90 uppercase tracking-wider">Hal yang perlu dihindari</p>
              </div>
              <ul className="space-y-2 text-sm text-white/80 leading-relaxed pl-1">
                {zone.actionable.avoid.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-rose-400/50 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-in-up animate-delay-500 flex flex-col sm:flex-row gap-3">
          <Link
            href="/assessment"
            id="btn-retake-assessment"
            className="
              flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
              bg-gradient-to-r from-cyan-500 to-cyan-400
              text-black font-bold text-sm
              shadow-[0_0_30px_rgba(34,211,238,0.2)]
              hover:shadow-[0_0_50px_rgba(34,211,238,0.4)]
              transition-all duration-300 hover:scale-[1.02]
            "
          >
            Ambil Penilaian Lagi
          </Link>
          <Link
            href="/"
            id="btn-back-home"
            className="
              flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
              border border-white/10 text-white/60 font-medium text-sm
              hover:border-white/20 hover:text-white/80
              transition-all duration-200
            "
          >
            Kembali ke Beranda
          </Link>
        </div>
        <ExportButtons />

        {/* Disclaimer */}
        <div className="animate-fade-in-up animate-delay-600 text-center pt-4 border-t border-white/5 mt-8">
          <p className="text-[10px] text-white/25 leading-relaxed max-w-md mx-auto">
            E-Self Tool adalah alat refleksi diri berbasis self-report yang dirancang untuk membantu pengguna memahami kondisi internal dan pola adaptasi dirinya secara lebih jernih dan terstruktur. Hasil yang ditampilkan bersifat informatif dan reflektif, bukan diagnosis medis, psikologis, atau psikiatris, serta tidak menggantikan konsultasi dengan tenaga profesional.
          </p>
          <p className="text-[9px] text-white/15 leading-relaxed max-w-md mx-auto mt-2">
            This tool is for self-reflection and does not provide medical or psychological diagnosis.
          </p>
        </div>
      </div>
    </main>
  );
}
