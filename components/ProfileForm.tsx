"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { uiStrings, Locale } from "@/lib/i18n";

export default function ProfileForm({ locale = "id" }: { locale?: Locale }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const t = uiStrings[locale];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !city || !whatsapp) return;

    sessionStorage.setItem("eself_profile", JSON.stringify({ name, city, whatsapp }));
    router.push("/assessment");
  };

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="
          group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl
          bg-gradient-to-r from-cyan-500 to-cyan-400
          text-black font-bold text-base
          shadow-[0_0_40px_rgba(34,211,238,0.3)]
          hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]
          transition-all duration-300 hover:scale-105 active:scale-100
        "
      >
        <span>{t.startBtn}</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto glass-card p-6 animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-sm font-bold text-cyan-400 mb-4 text-left">{t.identity}</h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-xs text-white/50 mb-1.5 ml-1">{t.nameLabel}</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
            placeholder={locale === "id" ? "Ketik nama kamu..." : "Type your name..."}
          />
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1.5 ml-1">{t.cityLabel}</label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
            placeholder="Contoh: Jakarta"
          />
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1.5 ml-1">{t.waLabel}</label>
          <input
            type="tel"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
            placeholder={locale === "id" ? "0812xxxx..." : "Phone number..."}
          />
        </div>
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-[1.02]"
          >
            {t.submitProfile}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
