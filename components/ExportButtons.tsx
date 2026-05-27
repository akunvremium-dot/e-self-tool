"use client";

import React, { useState, useEffect } from "react";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import { useLocale } from "@/lib/client-i18n";

export default function ExportButtons() {
  const [isExporting, setIsExporting] = useState(false);
  const [preview, setPreview] = useState<{ url: string, type: 'png' | 'pdf' } | null>(null);
  const [canShare, setCanShare] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanShare(true);
    }
  }, []);

  const generatePNGPreview = async () => {
    try {
      setIsExporting(true);
      const element = document.getElementById("export-summary");
      if (!element) return;
      
      const dataUrl = await htmlToImage.toPng(element, { 
        pixelRatio: 2, 
        backgroundColor: "#080B12",
      });
      
      setPreview({ url: dataUrl, type: 'png' });
    } catch (err) {
      console.error(err);
      alert("Gagal memproses PNG: " + String(err));
    } finally {
      setIsExporting(false);
    }
  };

  const generatePDFPreview = async () => {
    try {
      setIsExporting(true);
      const element = document.getElementById("export-full");
      if (!element) return;

      const actionButtons = document.getElementById("action-buttons-export");
      if (actionButtons) actionButtons.style.display = "none";
      const retakeBtns = document.getElementById("btn-retake-assessment")?.parentElement;
      if (retakeBtns) retakeBtns.style.display = "none";

      const dataUrl = await htmlToImage.toPng(element, { 
        pixelRatio: 2, 
        backgroundColor: "#080B12",
      });
      
      if (actionButtons) actionButtons.style.display = "flex";
      if (retakeBtns) retakeBtns.style.display = "flex";

      setPreview({ url: dataUrl, type: 'pdf' });
    } catch (err) {
      console.error(err);
      alert("Gagal memproses PDF: " + String(err));
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownload = async () => {
    if (!preview) return;
    
    if (preview.type === 'png') {
      const link = document.createElement("a");
      link.download = `E-Self-Summary.png`;
      link.href = preview.url;
      link.click();
      setPreview(null);
    } else {
      const img = new Image();
      img.src = preview.url;
      await new Promise((resolve) => { img.onload = resolve; });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (img.height * pdfWidth) / img.width;
      
      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(preview.url, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(preview.url, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      pdf.save(`E-Self-Report.pdf`);
      setPreview(null);
    }
  };

  const handleShare = async () => {
    if (!preview || !canShare) return;
    try {
      const blob = await (await fetch(preview.url)).blob();
      let fileToShare: File;
      if (preview.type === 'png') {
        fileToShare = new File([blob], 'E-Self-Summary.png', { type: 'image/png' });
      } else {
        // Share as long image instead of PDF file for better app compatibility
        fileToShare = new File([blob], 'E-Self-Report.png', { type: 'image/png' });
      }

      await navigator.share({
        title: locale === "id" ? 'Hasil E-Self Tool' : 'E-Self Tool Result',
        text: locale === "id" ? 'Ini hasil penilaian regulasi emosiku!' : 'This is my emotional regulation assessment result!',
        files: [fileToShare]
      });
      setPreview(null);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.error("Gagal share:", err);
        alert(locale === "id" ? "Gagal membagikan file." : "Failed to share file.");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mt-4" id="action-buttons-export">
        <button
          onClick={generatePNGPreview}
          disabled={isExporting}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white/80 font-medium text-sm hover:bg-white/10 transition-all duration-200 disabled:opacity-50"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          {isExporting ? (locale === "id" ? "Memproses..." : "Processing...") : "Download / Share (PNG)"}
        </button>
        <button
          onClick={generatePDFPreview}
          disabled={isExporting}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white/80 font-medium text-sm hover:bg-white/10 transition-all duration-200 disabled:opacity-50"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {isExporting ? (locale === "id" ? "Memproses..." : "Processing...") : (locale === "id" ? "Download Lengkap (PDF)" : "Download Full (PDF)")}
        </button>
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#080B12] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[85vh] shadow-2xl">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h3 className="text-sm font-bold text-white/90">
                {locale === "id" ? "Preview " : "Preview "}
                {preview.type === 'png' ? (locale === "id" ? 'Ringkasan' : 'Summary') : (locale === "id" ? 'Lengkap' : 'Full')}
              </h3>
              <button onClick={() => setPreview(null)} className="text-white/40 hover:text-white/90 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 flex justify-center bg-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={preview.url} 
                alt="Preview" 
                className="w-full h-auto rounded-xl shadow-lg border border-white/10"
              />
            </div>

            <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 bg-white/5">
              <button
                onClick={handleDownload}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-[1.02] transition-all"
              >
                {preview.type === 'png' ? 'Download PNG' : 'Download PDF'}
              </button>
              {canShare && (
                <button
                  onClick={handleShare}
                  className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {locale === "id" ? "Bagikan" : "Share"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
