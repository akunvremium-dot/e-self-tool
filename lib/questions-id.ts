import { Section } from "./questions";

export const SECTIONS_ID: Section[] = [
  {
    id: "energy",
    title: "Energy",
    subtitle: "Kondisi energi fisik dan mental kamu",
    questions: [
      {
        id: 1,
        key: "q1",
        text: "Saya merasa memiliki energi yang cukup untuk menjalani aktivitas sehari-hari.",
        hint: "Pikirkan rata-rata kondisi kamu dalam seminggu terakhir. Apakah kamu merasa punya tenaga untuk menjalani hari, atau sering kehabisan energi di tengah jalan?",
      },
      {
        id: 2,
        key: "q2",
        text: "Saya bangun tidur dengan kondisi tubuh dan pikiran yang bugar serta siap.",
        hint: "Perhatikan bagaimana perasaanmu saat baru bangun. Apakah kamu merasa segar dan siap, atau masih lelah dan berat untuk memulai hari?",
      },
      {
        id: 3,
        key: "q3",
        text: "Saya memiliki daya tahan mental yang baik dan tidak mudah merasa lelah.",
        hint: "Ini bukan soal kelelahan fisik, melainkan apakah pikiranmu tetap bisa berfungsi baik saat dihadapkan dengan banyak tuntutan atau tekanan terus-menerus.",
      },
      {
        id: 4,
        key: "q4",
        text: "Saya mampu menjaga ketenangan meskipun harus menyelesaikan banyak hal sekaligus.",
        hint: "Bayangkan situasi saat kamu punya banyak tanggung jawab bersamaan. Apakah kamu bisa tetap tenang dan teratur, atau mulai merasa kewalahan?",
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
        hint: "Contoh: rencana berubah, orang lain mengecewakan, atau situasi tidak terkendali. Apakah emosimu bereaksi sangat kuat dalam kondisi seperti ini?",
      },
      {
        id: 6,
        key: "q6",
        text: "Saya butuh waktu lama untuk kembali tenang setelah mengalami emosi yang intens.",
        hint: "Setelah marah, kecewa, atau sangat cemas, berapa lama biasanya kamu butuh untuk benar-benar kembali ke kondisi tenang dan berfungsi normal?",
      },
      {
        id: 7,
        key: "q7",
        text: "Saya sering merasakan emosi negatif (seperti sedih, marah, atau cemas) akhir-akhir ini.",
        hint: "Perhatikan frekuensinya dalam beberapa minggu terakhir, bukan soal apakah kamu pernah merasakannya, tapi seberapa sering emosi seperti itu muncul.",
      },
      {
        id: 8,
        key: "q8",
        text: "Saya mudah terbawa emosi atau bertindak impulsif saat berada di bawah tekanan.",
        hint: "Contoh: berkata-kata yang disesali, bereaksi berlebihan, atau mengambil keputusan terburu-buru saat stres. Apakah ini sering terjadi padamu?",
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
        hint: "Apakah pikiranmu cenderung tenang dan fokus, atau sering berputar-putar memikirkan hal yang sama berulang kali tanpa solusi?",
      },
      {
        id: 10,
        key: "q10",
        text: "Saya bisa berpikir secara objektif dan masuk akal saat mengambil keputusan.",
        hint: "Saat harus memilih atau memutuskan sesuatu, apakah kamu bisa menimbangnya dengan kepala dingin, atau emosi sering mengambil alih cara berpikirmu?",
      },
      {
        id: 11,
        key: "q11",
        text: "Saya bisa memfokuskan pikiran dan tidak mudah merasa kacau saat menghadapi masalah.",
        hint: "Ketika ada masalah yang kompleks, apakah kamu masih bisa berpikir runtut dan terstruktur, atau pikiran terasa berantakan dan sulit dikendalikan?",
      },
      {
        id: 12,
        key: "q12",
        text: "Saya mudah melihat suatu situasi dengan jernih tanpa terlalu terbawa perasaan.",
        hint: "Apakah kamu bisa melihat sebuah kejadian dari sudut pandang yang netral dan logis, atau kamu cenderung menafsirkannya lewat filter emosi yang kuat?",
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
        hint: "Pikirkan kebiasaan atau rencana rutin yang pernah kamu buat. Apakah kamu cenderung menjalankannya secara konsisten, atau sering terputus di tengah jalan?",
      },
      {
        id: 14,
        key: "q14",
        text: "Saya tetap bisa beraktivitas dengan baik meskipun sedang merasa tidak nyaman.",
        hint: "Contoh: tetap produktif meski sedang murung, lelah, atau ada hal yang mengganggu pikiran. Apakah kondisi internal tidak mudah melumpuhkan produktivitasmu?",
      },
      {
        id: 15,
        key: "q15",
        text: "Saya mampu menahan diri dari kebiasaan menunda-nunda pekerjaan.",
        hint: "Seberapa sering kamu menunda tugas atau pekerjaan yang seharusnya diselesaikan? Jawab berdasarkan kebiasaan nyata, bukan niatmu.",
      },
      {
        id: 16,
        key: "q16",
        text: "Saya bisa menyesuaikan diri dan tetap melanjutkan rencana meskipun situasi berubah.",
        hint: "Ketika rencana tiba-tiba berubah atau ada hambatan tak terduga, apakah kamu bisa beradaptasi dengan cepat dan tetap bergerak maju?",
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
        hint: "Ketika merasakan sesuatu, apakah kamu bisa langsung mengidentifikasi apa yang sedang kamu rasakan dan mengapa, atau emosi itu sering terasa buram dan tidak jelas?",
      },
      {
        id: 18,
        key: "q18",
        text: "Saya mampu mempertahankan ketenangan saat terjadi konflik atau beda pendapat dengan orang lain.",
        hint: "Saat ada perbedaan pendapat atau ketegangan dengan orang lain, apakah kamu bisa tetap tenang dan merespons dengan kepala dingin?",
      },
      {
        id: 19,
        key: "q19",
        text: "Saya bisa mengamati dan menyadari perkembangan diri saya sendiri dari waktu ke waktu.",
        hint: "Apakah kamu secara aktif memperhatikan bagaimana dirimu berubah, dalam cara berpikir, merespons, atau bersikap, dibandingkan beberapa bulan lalu?",
      },
      {
        id: 20,
        key: "q20",
        text: "Saya benar-benar memahami alasan di balik setiap reaksi emosi dan keputusan yang saya ambil.",
        hint: "Ini bukan soal apakah kamu punya alasan, tapi apakah kamu sungguh-sungguh memahami akar dari reaksi dan pilihanmu, bukan sekadar menebak-nebak.",
      },
    ],
  },
];
