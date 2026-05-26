import Link from "next/link";
import type { Metadata } from "next";
import ProfileForm from "@/components/ProfileForm";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "E-Self Tool — Kenali Kondisi Dirimu",
  description:
    "Sistem refleksi diri yang mengubah 20 jawaban sederhana menjadi peta kondisi internal dan arah perkembangan psikologis kamu saat ini.",
};

const ZONE_PREVIEWS = [
  { zone: "Void", color: "#94a3b8", score: "0–10" },
  { zone: "Crash", color: "#60a5fa", score: "11–20" },
  { zone: "Shield", color: "#818cf8", score: "21–30" },
  { zone: "Grip", color: "#a78bfa", score: "31–40" },
  { zone: "Flow", color: "#34d399", score: "41–50" },
  { zone: "Shift", color: "#2dd4bf", score: "51–60" },
  { zone: "Awake", color: "#22d3ee", score: "61–70" },
  { zone: "Merge", color: "#7dd3fc", score: "71–80" },
  { zone: "Core", color: "#fcd34d", score: "81–90" },
  { zone: "Peak", color: "#f8fafc", score: "91–100" },
];

export default function HomePage() {
  return (
    <main className="gradient-bg noise-bg min-h-screen flex flex-col relative overflow-hidden">
      <ParticleBackground />
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <span className="text-[10px] font-black text-black">E</span>
          </div>
          <span className="font-bold text-white/90 tracking-tight">E-Self Tool</span>
        </div>
        <span className="text-xs text-white/30 hidden sm:block">Self-Regulation Assessment</span>
      </header>

      {/* Hero section */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 text-center max-w-3xl mx-auto w-full">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-xs text-cyan-400/80 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          20 Pertanyaan · Hasil Instan · Tanpa Login
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
          <span className="text-white">Kenali kondisi</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
            dirimu.
          </span>
        </h1>

        <p className="text-lg text-white/50 font-medium mb-3">
          Pahami arah gerakmu.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/40 leading-relaxed max-w-xl mb-12">
          E-Self Tool adalah sistem refleksi diri yang mengubah 20 jawaban sederhana menjadi
          peta kondisi internal dan arah perkembangan psikologismu saat ini.
        </p>

        {/* CTA */}
        <ProfileForm />

        <p className="mt-4 text-xs text-white/20">
          ≈ 5 menit · Tidak ada jawaban benar atau salah
        </p>

        {/* Zone color strip */}
        <div className="mt-20 w-full max-w-2xl">
          <p className="text-[10px] text-white/20 uppercase tracking-widest mb-4 font-semibold">
            10-Zone Self-Regulation Map
          </p>
          <div className="grid grid-cols-10 gap-1">
            {ZONE_PREVIEWS.map((z) => (
              <div key={z.zone} className="flex flex-col items-center gap-2">
                <div
                  className="h-12 w-full rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: z.color }}
                  title={`${z.zone} (${z.score})`}
                />
                <span
                  className="text-[9px] font-semibold hidden sm:block"
                  style={{ color: z.color }}
                >
                  {z.zone}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[9px] text-white/20">
            <span>Rendah</span>
            <span>Tinggi</span>
          </div>
        </div>

        {/* What you get section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
          {[
            { label: "Score", desc: "0–100 regulasi diri" },
            { label: "Zone", desc: "1 dari 10 peta kondisi" },
            { label: "State & Mode", desc: "Pola kondisi saat ini" },
            { label: "Flow", desc: "Arah adaptasi optimal" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-4 text-left">
              <p className="text-xs font-bold text-cyan-400 mb-1">{item.label}</p>
              <p className="text-[11px] text-white/40 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 max-w-3xl mx-auto w-full text-center">
        <p className="text-[11px] text-white/20 leading-relaxed">
          E-Self Tool adalah alat refleksi diri berbasis self-report yang dirancang untuk membantu pengguna
          memahami kondisi internal dan pola adaptasi dirinya secara lebih jernih dan terstruktur.
          Hasil yang ditampilkan bersifat informatif dan reflektif, <strong className="text-white/30">bukan diagnosis medis, psikologis, atau psikiatris</strong>,
          serta tidak menggantikan konsultasi dengan tenaga profesional.
        </p>
        <p className="mt-3 text-[10px] text-white/15">
          This tool is for self-reflection and does not provide medical or psychological diagnosis.
        </p>
        <div className="mt-8">
          <Link href="/admin" className="text-[10px] text-white/10 hover:text-white/40 transition-colors duration-300">
            Admin Dashboard
          </Link>
        </div>
      </footer>
    </main>
  );
}
