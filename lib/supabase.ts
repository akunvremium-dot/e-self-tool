// lib/supabase.ts
// Supabase client — anonymous mode + user profile
// Features a robust local storage fallback for Admin Dashboard testing

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured =
  supabaseUrl.startsWith("https://") && supabaseAnonKey.length > 0;

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type AssessmentRow = {
  id: string;
  created_at: string;
  name: string;      // NEW
  city: string;      // NEW
  whatsapp: string;  // NEW
  score: number;
  zone: string;
  state: string;
  mode: string;
  flow: string;
  q1: number; q2: number; q3: number; q4: number;
  q5: number; q6: number; q7: number; q8: number;
  q9: number; q10: number; q11: number; q12: number;
  q13: number; q14: number; q15: number; q16: number;
  q17: number; q18: number; q19: number; q20: number;
};

// Local storage key for fallback admin database
const LOCAL_DB_KEY = "eself_assessments_db";

function saveToLocalDb(row: AssessmentRow) {
  if (typeof window === "undefined") return;
  try {
    const existingStr = localStorage.getItem(LOCAL_DB_KEY);
    const existing: AssessmentRow[] = existingStr ? JSON.parse(existingStr) : [];
    existing.unshift(row); // Add to top
    localStorage.setItem(LOCAL_DB_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error("Local DB save error:", err);
  }
}

export async function saveAssessment(
  payload: Omit<AssessmentRow, "id" | "created_at">
): Promise<string | null> {
  const localId = "loc_" + Math.random().toString(36).substr(2, 9);
  const now = new Date().toISOString();
  
  let finalId = localId;
  let finalCreatedAt = now;

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("assessments")
        .insert(payload)
        .select("id, created_at")
        .single();

      if (!error && data) {
        finalId = data.id;
        finalCreatedAt = data.created_at;
      } else if (error) {
        console.error("Supabase insert error:", error);
      }
    } catch (err) {
      console.error("Supabase insert exception:", err);
    }
  }

  // Always save to local DB fallback using the final ID and created_at
  const fullRow: AssessmentRow = {
    ...payload,
    id: finalId,
    created_at: finalCreatedAt
  };
  saveToLocalDb(fullRow);
  
  return finalId;
}

export async function getAssessment(id: string): Promise<AssessmentRow | null> {
  // Check local fallback first for any ID
  if (typeof window !== "undefined") {
    try {
      const existingStr = localStorage.getItem(LOCAL_DB_KEY);
      if (existingStr) {
        const existing: AssessmentRow[] = JSON.parse(existingStr);
        const found = existing.find(r => r.id === id);
        if (found) return found;
      }
    } catch {}
  }

  if (!supabase) return null;

  const { data, error } = await supabase
    .from("assessments")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase select error:", error);
    return null;
  }
  return data as AssessmentRow;
}

export async function getAllAssessments(): Promise<AssessmentRow[]> {
  // For local testing, merge local data with Supabase data (or just local if no Supabase)
  let localData: AssessmentRow[] = [];
  if (typeof window !== "undefined") {
    try {
      const existingStr = localStorage.getItem(LOCAL_DB_KEY);
      if (existingStr) {
        localData = JSON.parse(existingStr);
      }
    } catch {}
  }

  if (!supabase) {
    return localData;
  }

  const { data, error } = await supabase
    .from("assessments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase fetch all error:", error);
    return localData;
  }

  // To prevent duplicates if we somehow have both, just use Supabase data + localData that doesn't exist in Supabase
  // For simplicity, if Supabase works, we just return Supabase data.
  return data as AssessmentRow[];
}
