"use client";

import { useEffect, useState } from "react";
import { Locale } from "./i18n";

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
    if (savedLocale === "en" || savedLocale === "id") {
      setLocale(savedLocale as Locale);
    }
  }, []);

  return locale;
}

export function setLocaleCookie(locale: Locale) {
  document.cookie = `eself_locale=${locale}; path=/; max-age=31536000`; // 1 year
  window.location.reload(); // Reload to apply changes across the app
}
