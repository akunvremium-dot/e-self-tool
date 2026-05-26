// lib/questions.ts
// LOCKED SPEC — DO NOT MODIFY QUESTION TEXT OR ORDER

export type Section = {
  id: string;
  title: string;
  subtitle: string;
  questions: Question[];
};

export type Question = {
  id: number; // 1–20
  key: `q${number}`;
  text: string;
};

export const SCALE_LABELS: Record<number, string> = {
  0: "Sangat Tidak Sesuai",
  1: "Tidak Sesuai",
  2: "Netral / Kadang",
  3: "Sesuai",
  4: "Sangat Sesuai",
};

export const SECTIONS: Section[] = [
  {
    id: "energy",
    title: "Energy",
    subtitle: "Kondisi energi fisik dan mental kamu",
    questions: [
      {
        id: 1,
        key: "q1",
        text: "Saya merasa memiliki energi yang cukup untuk menjalani aktivitas sehari-hari.",
      },
      {
        id: 2,
        key: "q2",
        text: "Saya bangun tidur dengan kondisi tubuh dan pikiran yang bugar serta siap.",
      },
      {
        id: 3,
        key: "q3",
        text: "Saya memiliki daya tahan mental yang baik dan tidak mudah merasa lelah.",
      },
      {
        id: 4,
        key: "q4",
        text: "Saya mampu menjaga ketenangan meskipun harus menyelesaikan banyak hal sekaligus.",
      },
    ],
  },
  {
    id: "emotion",
    title: "Emotion",
    subtitle: "Pola emosi dan reaktivitas kamu",
    questions: [
      {
        id: 5,
        key: "q5",
        text: "Saya merasakan gejolak emosi yang sangat kuat ketika sesuatu tidak berjalan sesuai harapan.",
      },
      {
        id: 6,
        key: "q6",
        text: "Saya butuh waktu lama untuk kembali tenang setelah mengalami emosi yang intens.",
      },
      {
        id: 7,
        key: "q7",
        text: "Saya sering merasakan emosi negatif (seperti sedih, marah, atau cemas) akhir-akhir ini.",
      },
      {
        id: 8,
        key: "q8",
        text: "Saya mudah terbawa emosi atau bertindak impulsif saat berada di bawah tekanan.",
      },
    ],
  },
  {
    id: "cognition",
    title: "Cognition",
    subtitle: "Kejernihan dan pola pikir kamu",
    questions: [
      {
        id: 9,
        key: "q9",
        text: "Saya mampu menjaga pikiran tetap jernih dan terhindar dari overthinking.",
      },
      {
        id: 10,
        key: "q10",
        text: "Saya bisa berpikir secara objektif dan masuk akal saat mengambil keputusan.",
      },
      {
        id: 11,
        key: "q11",
        text: "Saya bisa memfokuskan pikiran dan tidak mudah merasa kacau saat menghadapi masalah.",
      },
      {
        id: 12,
        key: "q12",
        text: "Saya mudah melihat suatu situasi dengan jernih tanpa terlalu terbawa perasaan.",
      },
    ],
  },
  {
    id: "behavior",
    title: "Behavior",
    subtitle: "Konsistensi dan pola perilaku kamu",
    questions: [
      {
        id: 13,
        key: "q13",
        text: "Saya konsisten dalam menjalankan rencana atau kebiasaan yang sudah saya buat.",
      },
      {
        id: 14,
        key: "q14",
        text: "Saya tetap bisa beraktivitas dengan baik meskipun sedang merasa tidak nyaman.",
      },
      {
        id: 15,
        key: "q15",
        text: "Saya mampu menahan diri dari kebiasaan menunda-nunda pekerjaan.",
      },
      {
        id: 16,
        key: "q16",
        text: "Saya bisa menyesuaikan diri dan tetap melanjutkan rencana meskipun situasi berubah.",
      },
    ],
  },
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "Kesadaran diri dan penyesuaian kamu",
    questions: [
      {
        id: 17,
        key: "q17",
        text: "Saya bisa menyadari dan mengenali perasaan saya sendiri dengan sangat jelas.",
      },
      {
        id: 18,
        key: "q18",
        text: "Saya mampu mempertahankan ketenangan saat terjadi konflik atau beda pendapat dengan orang lain.",
      },
      {
        id: 19,
        key: "q19",
        text: "Saya bisa mengamati dan menyadari perkembangan diri saya sendiri dari waktu ke waktu.",
      },
      {
        id: 20,
        key: "q20",
        text: "Saya benar-benar memahami alasan di balik setiap reaksi emosi dan keputusan yang saya ambil.",
      },
    ],
  },
];

export type Answers = Record<`q${number}`, number>;
