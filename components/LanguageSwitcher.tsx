"use client";

import React from 'react';
import { useLocale, Locale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();

  const changeLanguage = (newLocale: Locale) => {
    if (locale === newLocale) return;
    
    // Set cookie for 1 year
    document.cookie = `eself_locale=${newLocale}; path=/; max-age=31536000`;
    
    // Full reload required: useLocale() hook reads cookie on mount (useEffect []),
    // so router.refresh() alone won't update client component state.
    window.location.reload();
  };

  return (
    <div className="flex gap-1 text-[10px] font-bold items-center bg-white/5 p-1 rounded-lg border border-white/10">
      <button 
        onClick={() => changeLanguage("id")}
        className={`px-2 py-1 rounded transition-all ${locale === 'id' ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
      >
        ID
      </button>
      <button 
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded transition-all ${locale === 'en' ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
      >
        EN
      </button>
    </div>
  );
}
