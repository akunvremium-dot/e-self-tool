import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "E-Self Tool — Kenali Kondisi Dirimu",
  description:
    "E-Self Tool adalah sistem refleksi diri yang mengubah 20 jawaban sederhana menjadi peta kondisi internal dan arah perkembangan psikologis saat ini.",
  keywords: ["self-assessment", "refleksi diri", "self-regulation", "kesadaran diri"],
  openGraph: {
    title: "E-Self Tool",
    description: "Kenali kondisi dirimu. Pahami arah gerakmu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-[#080B12] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
