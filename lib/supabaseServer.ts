// lib/supabaseServer.ts
// Secure server-side Supabase client utilizing the Service Role Key.
// This is never bundled into client-side code.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
// Using the private Service Role Key which is only available on the server
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export const isServerSupabaseConfigured =
  supabaseUrl.startsWith("https://") && supabaseServiceKey.length > 0;

export function getSupabaseServerClient() {
  if (!isServerSupabaseConfigured) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
