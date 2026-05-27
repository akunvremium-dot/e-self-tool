import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Periksa apakah pengguna sudah punya preferensi bahasa (dari manual switch)
  const existingLocale = request.cookies.get("eself_locale")?.value;
  
  if (!existingLocale) {
    // Jika belum ada cookie bahasa, deteksi dari IP (hanya bekerja di Vercel)
    const country = request.headers.get("x-vercel-ip-country");
    
    // Default: jika dari Indonesia (ID) atau null/localhost, gunakan 'id'.
    // Selain itu gunakan 'en' (English).
    const defaultLocale = (!country || country === "ID") ? "id" : "en";
    
    // Set cookie agar persisten di halaman selanjutnya
    response.cookies.set("eself_locale", defaultLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 tahun
    });
  }

  return response;
}

// Hanya jalankan middleware ini pada halaman yang dilihat pengguna (bukan API/Asset)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
