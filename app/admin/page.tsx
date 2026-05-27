"use client";

import React, { useState, useEffect } from "react";
import { getAllAssessments, AssessmentRow } from "@/lib/supabase";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState<AssessmentRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Restore session on page refresh
  useEffect(() => {
    const savedPwd = sessionStorage.getItem("admin_pwd");
    if (savedPwd) {
      setPassword(savedPwd);
      setIsAuthenticated(true);
      // Auto-load data on restore
      (async () => {
        setIsLoading(true);
        try {
          const response = await fetch("/api/admin/assessments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: savedPwd }),
          });
          if (response.ok) {
            const results = await response.json();
            setData(results);
          }
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/assessments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.status === 401) {
        alert("Password salah!");
        setIsLoading(false);
        return;
      }

      if (response.status === 503) {
        // Supabase not configured yet - local testing mode fallback
        if (password === "admin123") {
          setIsAuthenticated(true);
          const results = await getAllAssessments();
          setData(results);
        } else {
          alert("Password salah!");
        }
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error("Gagal memproses login");
      }

      const results = await response.json();
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_pwd", password);
      setData(results);
    } catch (err) {
      console.error(err);
      alert("Gagal terhubung ke server atau terjadi kesalahan.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/assessments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.status === 503) {
        const results = await getAllAssessments();
        setData(results);
        return;
      }

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const results = await response.json();
      setData(results);
    } catch (err) {
      console.error(err);
      // Fallback
      try {
        const results = await getAllAssessments();
        setData(results);
      } catch {}
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    const confirmed = window.confirm(
      `Hapus data asesmen milik "${name || "Anonim"}"?\nTindakan ini tidak dapat dibatalkan.`
    );
    if (!confirmed) return;

    try {
      const response = await fetch("/api/admin/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, id }),
      });

      if (!response.ok) {
        const err = await response.json();
        alert("Gagal menghapus: " + (err.error || "Unknown error"));
        return;
      }

      // Remove from local state instantly without refetch
      setData((prev) => prev.filter((row) => row.id !== id));
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="gradient-bg noise-bg min-h-screen flex items-center justify-center p-6">
        <div className="glass-card p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold text-white text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs text-white/50 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50"
                placeholder="Masukkan password..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold"
            >
              Masuk
            </button>
          </form>
          <p className="text-[10px] text-white/20 text-center mt-4">Gunakan 'admin123' untuk testing lokal</p>
        </div>
      </main>
    );
  }

  return (
    <main className="gradient-bg noise-bg min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard Admin</h1>
            <p className="text-sm text-white/50">Riwayat Hasil Asesmen E-Self Tool</p>
          </div>
          <button
            onClick={() => loadData()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Data
          </button>
        </header>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-white/80">
              <thead className="bg-white/5 border-b border-white/10 text-xs uppercase text-white/50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Waktu</th>
                  <th className="px-6 py-4 font-semibold">Nama</th>
                  <th className="px-6 py-4 font-semibold">WhatsApp</th>
                  <th className="px-6 py-4 font-semibold">Kota</th>
                  <th className="px-6 py-4 font-semibold text-center">Score</th>
                  <th className="px-6 py-4 font-semibold">Zone</th>
                  <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-white/40">
                      Memuat data...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-white/40">
                      Belum ada data asesmen yang masuk.
                    </td>
                  </tr>
                ) : (
                  data.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-white/40">
                        {new Date(row.created_at).toLocaleString('id-ID', {
                          day: '2-digit', month: 'short', year: 'numeric',
                          hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 font-medium text-white">{row.name || "Anonim"}</td>
                      <td className="px-6 py-4 font-mono text-cyan-400">{row.whatsapp || "-"}</td>
                      <td className="px-6 py-4">{row.city || "-"}</td>
                      <td className="px-6 py-4 text-center font-bold">{Math.round(row.score)}</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/10 border border-white/10">
                          {row.zone}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <a
                            href={`/result/${row.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[11px] rounded-lg transition-colors border border-white/5 font-medium"
                          >
                            Lihat Report
                          </a>
                          <button
                            onClick={() => handleDelete(row.id, row.name)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/25 text-red-400 hover:text-red-300 text-[11px] rounded-lg transition-colors border border-red-500/20 font-medium"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
