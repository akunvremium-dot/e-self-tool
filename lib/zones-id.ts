import { ZoneData } from "./zones";

export const ZONE_TABLE_ID: ZoneData[] = [
  {
    zone: "Void",
    state: "Blank",
    mode: "Break",
    flow: "Recover",
    minScore: 0,
    maxScore: 10,
    interpretation:
      "Kondisimu saat ini menunjukkan regulasi yang sangat rendah. Tubuh dan pikiran memerlukan ruang untuk pulih sepenuhnya. Berhenti sejenak bukan tanda kelemahan, ini adalah langkah pertama menuju pemulihan.",
    characteristics: {
      feelings: "Rasanya sangat kosong, seperti baterai HP yang tinggal 1 persen tapi chargernya hilang. Ada rasa lelah mental yang begitu dalam sampai kamu merasa kebas atau mati rasa terhadap hal hal yang biasanya bikin kamu peduli.",
      thoughts: "Pikiran terasa sangat berat dan lambat. Jangankan memikirkan masa depan, untuk memutuskan mau makan apa saja rasanya butuh tenaga ekstra. Sering muncul pikiran seperti 'buat apa sih semua ini?' atau 'aku cuma pengen hilang sebentar'.",
      worries: "Kamu diam diam takut kalau kamu tidak akan pernah bisa kembali 'normal' atau seenergik dulu. Ada kecemasan tertinggal jauh dari orang lain yang terlihat terus berlari, sementara kamu cuma bisa diam.",
      reality: "Dunia di sekitarmu terasa seperti film hitam putih yang suaranya tidak terdengar. Terasa sangat berjarak, kelabu, dan tuntutan sekecil apa pun (seperti membalas pesan kerjaan) terasa seperti gunung yang harus didaki.",
      physical: "Tubuhmu terasa sangat berat, seperti ada beban di pundak yang tak terlihat. Syaraf benar benar kelelahan (burnout parah). Bahkan setelah tidur panjang pun, kamu bangun dengan perasaan tidak segar sama sekali.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena sistem syarafmu telah mencapai batas toleransi maksimalnya. Tubuhmu secara paksa mematikan sirkuit energimu untuk mencegah kerusakan mental yang lebih parah akibat kelelahan kronis.",
      amIOkay: "Ya, kamu sedang tidak baik baik saja saat ini, dan itu sepenuhnya wajar. Mengakui bahwa kamu sedang kehabisan tenaga adalah langkah pertama yang paling berani untuk mulai pulih.",
      unconsciousPattern: "Kamu punya kebiasaan mengabaikan sinyal kelelahan tubuhmu sendiri dan terus memaksakan diri demi memenuhi ekspektasi orang lain, sampai akhirnya tubuhmu menolak untuk diajak bekerja sama.",
    },
    actionable: {
      practice: [
        "Mandi air hangat dan lakukan peregangan badan ringan selama lima menit.",
        "Minum segelas air putih segera setelah bangun tidur setiap pagi.",
        "Berlatih bersyukur atas satu hal paling sederhana yang terjadi hari ini.",
        "Tidur siang selama dua puluh menit untuk memberi jeda pada otak.",
        "Menuliskan isi pikiran yang mengganggu di atas kertas lalu membuangnya."
      ],
      avoid: [
        "Memaksa diri mengambil proyek atau tanggung jawab baru di tempat kerja.",
        "Melakukan scroll media sosial lebih dari sepuluh menit sebelum tidur.",
        "Mengurung diri di kamar seharian tanpa terkena sinar matahari pagi.",
        "Membiarkan perut kosong lebih dari enam jam saat sedang terbangun.",
        "Mengkritik diri sendiri dengan kata kata kasar di dalam hati."
      ],
    },
    colorClass: "text-slate-400",
    hexColor: "#94a3b8",
    bgGradient: "from-slate-900 to-slate-800",
  },
  {
    zone: "Crash",
    state: "Alert",
    mode: "React",
    flow: "Repair",
    minScore: 11,
    maxScore: 20,
    interpretation:
      "Sistem internalmu sedang dalam kondisi siaga tinggi. Responsmu cenderung reaktif karena tekanan yang terkumpul. Prioritaskan pemulihan dan kurangi beban eksternal yang tidak perlu.",
    characteristics: {
      feelings: "Kamu merasa seperti sedang mengendarai mobil dengan rem blong. Gelisah, panik, dan emosi terasa selalu berada di ubun ubun. Hal sepele yang biasanya kamu abaikan kini bisa membuatmu meledak marah atau tiba tiba menangis.",
      thoughts: "Pikiranmu berpacu liar tak terkendali. Otakmu terus menerus memutar skenario terburuk, misalnya jika atasan memanggilmu, pikiran pertamamu adalah 'aku pasti melakukan kesalahan fatal'.",
      worries: "Kamu sangat takut kehilangan kendali atas hidupmu. Kamu merasa ada bahaya atau masalah besar yang sedang mengintai di depan mata, dan kamu merasa tidak punya cukup tenaga untuk mencegahnya.",
      reality: "Dunia terasa seperti tempat yang tidak aman dan penuh ancaman yang menekanmu dari segala arah. Setiap pesan masuk, bunyi dering telepon, atau permintaan tolong terasa seperti serangan langsung ke arahmu.",
      physical: "Detak jantungmu sering tiba tiba berdebar kencang. Rahangmu mengatup rapat tanpa sadar, leher dan pundak kaku, dan nafasmu pendek pendek seolah kamu sedang bersiap untuk berkelahi atau melarikan diri.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena amygdala (pusat alarm di otakmu) sedang membajak sistem logikamu. Otakmu mendeteksi adanya 'ancaman' di lingkungan sekitarmu, sehingga ia memompa adrenalin yang membuatmu terus menerus dalam mode siaga perang.",
      amIOkay: "Tubuhmu sedang bereaksi secara berlebihan, namun secara esensi kamu aman. Reaksi panik ini hanyalah alarm palsu dari sistem syaraf yang kelebihan beban, bukan cerminan dari kenyataan yang sebenarnya.",
      unconsciousPattern: "Kamu memiliki kecenderungan untuk memendam stres dan mengabaikan emosi negatif kecil secara terus menerus, sehingga pada akhirnya emosi tersebut menumpuk dan meledak menjadi kepanikan saat dipicu oleh hal sepele.",
    },
    actionable: {
      practice: [
        "Lakukan teknik pernapasan empat detik setiap kali merasa detak jantung mulai berdebar.",
        "Berjalan kaki tanpa membawa telepon genggam selama lima belas menit.",
        "Memberi jeda diam selama sepuluh detik sebelum merespons ucapan orang yang menyinggung.",
        "Mendengarkan musik instrumental pelan saat sedang mengerjakan tugas.",
        "Mengomunikasikan kebutuhan waktu sendiri kepada orang terdekat."
      ],
      avoid: [
        "Merespons pesan teks dari atasan atau pasangan saat sedang dilanda emosi hebat.",
        "Mengonsumsi kopi atau minuman berkafein setelah jam dua siang.",
        "Mengikuti perdebatan atau adu argumen di grup obrolan atau media sosial.",
        "Membuat keputusan keuangan besar secara impulsif untuk meredakan kepanikan.",
        "Menonton berita negatif atau film dengan intensitas ketegangan tinggi di malam hari."
      ],
    },
    colorClass: "text-blue-400",
    hexColor: "#60a5fa",
    bgGradient: "from-blue-950 to-slate-900",
  },
  {
    zone: "Shield",
    state: "Guard",
    mode: "Protect",
    flow: "Stabilize",
    minScore: 21,
    maxScore: 30,
    interpretation:
      "Kamu sedang dalam mode perlindungan diri. Energi digunakan untuk menjaga stabilitas dasar. Ini adalah respons adaptif, langkah selanjutnya adalah membangun kestabilan yang lebih kokoh.",
    characteristics: {
      feelings: "Kamu sedang memasang tembok tinggi tinggi. Rasanya kamu sangat defensif, tertutup, dan tidak ingin orang lain masuk terlalu dalam. Kamu menjaga jarak aman agar tidak ada yang merepotkan atau menyakitimu lagi.",
      thoughts: "Pikiranmu dipenuhi skeptisisme. Kamu lebih sering mempertanyakan niat orang seperti 'dia baik pasti ada maunya'. Fokus utama otakmu adalah bagaimana caranya melindungi sedikit energi yang tersisa ini.",
      worries: "Kamu sangat takut dimanfaatkan, dikhianati, atau energimu tersedot habis oleh drama orang lain. Kamu khawatir jika kamu terlalu terbuka, orang akan kembali mengecewakanmu.",
      reality: "Kamu melihat dunia seperti sebuah benteng pertahanan. Lingkungan di sekitarmu adalah sesuatu yang harus diwaspadai, dan setiap orang baru dianggap sebagai ancaman sampai mereka bisa membuktikan sebaliknya.",
      physical: "Bahasa tubuhmu cenderung menutup. Kamu sering menyilangkan tangan di depan dada, postur membungkuk seakan melindungi area perut, dan ekspresi wajahmu lebih datar untuk menyembunyikan perasaan aslimu.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena kamu pernah mengalami kekecewaan atau kelelahan emosional di masa lalu, sehingga alam bawah sadarmu memutuskan bahwa menutup diri adalah strategi pertahanan terbaik agar hal menyakitkan itu tidak terulang.",
      amIOkay: "Kamu sedang melindungi dirimu, dan itu adalah mekanisme bertahan yang cerdas. Namun, berlindung terlalu lama di balik tameng justru akan membuatmu kesepian dan kehilangan kesempatan untuk merasakan kehangatan koneksi manusia.",
      unconsciousPattern: "Kamu sering kali mengasumsikan niat buruk dari orang lain sebelum ada buktinya. Kamu diam diam mendorong orang menjauh saat mereka mulai terlalu dekat, karena keintiman emosional membuatmu merasa rentan.",
    },
    actionable: {
      practice: [
        "Berlatih mengucapkan kata tidak secara sopan pada permintaan yang menguras energi.",
        "Membagikan satu cerita ringan tentang keseharianmu kepada orang yang bisa dipercaya.",
        "Membaca buku fiksi ringan untuk mengalihkan pikiran dari kewaspadaan.",
        "Berlatih menyadari ketegangan pada rahang dan sengaja mengendurkannya.",
        "Mencatat tiga hal netral atau baik yang dilakukan orang lain kepadamu hari ini."
      ],
      avoid: [
        "Mengisolasi diri seratus persen dari teman teman yang tulus mempedulikanmu.",
        "Mencari cari motif tersembunyi setiap kali ada orang yang memberikan pujian.",
        "Memutar ulang memori tentang pengkhianatan atau rasa sakit di masa lalu secara sengaja.",
        "Menolak tawaran bantuan fisik sederhana dari rekan kerja yang berniat baik.",
        "Menyembunyikan semua ekspresi wajah saat sedang berbicara dengan teman."
      ],
    },
    colorClass: "text-indigo-400",
    hexColor: "#818cf8",
    bgGradient: "from-indigo-950 to-slate-900",
  },
  {
    zone: "Grip",
    state: "Tense",
    mode: "Control",
    flow: "Settle",
    minScore: 31,
    maxScore: 40,
    interpretation:
      "Ada ketegangan yang kamu tanggung. Kamu berusaha mengendalikan situasi namun energimu terkuras. Mengenali titik mana yang bisa dilepaskan akan membantumu bergerak lebih ringan.",
    characteristics: {
      feelings: "Kamu merasa seperti sedang menahan napas sambil memegang gelas kaca kuat kuat. Ada rasa frustrasi yang tertahan, rasa tidak sabar, dan dorongan obsesif agar segalanya berjalan persis sesuai dengan ekspektasimu.",
      thoughts: "Pikiranmu sangat kaku dan perfeksionis. Kamu punya standar ketat tentang bagaimana sesuatu seharusnya dilakukan, dan kamu sangat jengkel jika rekan kerja atau keadaan melenceng dari rencanamu.",
      worries: "Kamu dihantui oleh rasa takut akan ketidakteraturan, kesalahan kecil, atau kegagalan. Kamu cemas kalau kamu sedikit saja lengah atau memberikan tugas pada orang lain, semuanya akan berantakan.",
      reality: "Kamu melihat dunia sebagai tempat yang kacau, dan satu satunya cara agar kamu merasa aman adalah dengan mengaturnya dengan sangat ketat secara mendetail. Situasi tak terduga adalah musuh terbesarmu.",
      physical: "Ketegangan kronis sangat terasa di area kepala, leher, dan pundak. Kamu mungkin sering mengalami sakit kepala tegang, sulit untuk sekadar duduk bersandar rileks, dan jari tanganmu sering mengepal tanpa disadari.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena kamu mengaitkan rasa aman dengan seberapa besar kendali yang kamu miliki atas lingkunganmu. Saat situasi menjadi tidak pasti, kamu berusaha memegang kendali lebih erat untuk meredakan kecemasan di dalam batinmu.",
      amIOkay: "Secara fungsional kamu masih bisa berjalan dan bekerja, tetapi batin dan tubuhmu sangat tersiksa. Ketegangan kronis ini tidak sehat. Ingatlah bahwa kamu tetap aman meskipun beberapa hal meleset dari rencanamu.",
      unconsciousPattern: "Kamu memiliki standar kesempurnaan tidak realistis yang sebenarnya berakar dari rasa takut dinilai buruk oleh orang lain. Kamu sering merasa bahwa jika tidak kamu kerjakan sendiri, semuanya pasti gagal.",
    },
    actionable: {
      practice: [
        "Sengaja membiarkan meja kerja atau kamarmu sedikit berantakan selama sehari.",
        "Mendelegasikan satu tugas kecil kepada rekan kerja tanpa campur tangan sama sekali.",
        "Berlatih tersenyum saat ada hal kecil yang meleset dari rencanamu hari ini.",
        "Meluangkan waktu sepuluh menit untuk melakukan hobi tanpa memikirkan hasilnya.",
        "Menerima ide atau saran dari orang lain yang berbeda dengan rencanamu."
      ],
      avoid: [
        "Menulis daftar rencana harian yang terlalu mendetail sampai hitungan menit.",
        "Mengecek ulang pekerjaan yang sudah selesai lebih dari dua kali.",
        "Menyalahkan orang lain secara agresif ketika terjadi perubahan jadwal dadakan.",
        "Menyusun rencana cadangan berlapis lapis untuk kejadian yang belum tentu terjadi.",
        "Memaksakan caramu pada orang lain yang sudah memiliki cara kerja sendiri."
      ],
    },
    colorClass: "text-violet-400",
    hexColor: "#a78bfa",
    bgGradient: "from-violet-950 to-slate-900",
  },
  {
    zone: "Flow",
    state: "Normal",
    mode: "Run",
    flow: "Steady",
    minScore: 41,
    maxScore: 50,
    interpretation:
      "Kondisimu berada di titik keseimbangan yang cukup sehat. Kamu mampu menjalankan aktivitas dengan stabil. Pertahankan ritme ini dan perhatikan hal hal yang membantumu tetap di zona ini.",
    characteristics: {
      feelings: "Perasaanmu cukup stabil dan biasa saja, tidak terlalu euforia tapi juga tidak tertekan. Ibarat mesin mobil yang berjalan stabil di jalan tol, kamu bisa menjalankan rutinitas harian dengan tenang tanpa drama emosional.",
      thoughts: "Pikiranmu praktis dan sangat pragmatis. Fokus utamamu sangat sederhana: apa yang perlu diselesaikan hari ini. Kamu tidak terlalu memusingkan masa lalu atau mencemaskan masa depan terlalu jauh.",
      worries: "Kamu masih memiliki kekhawatiran soal tagihan bulanan atau tenggat waktu pekerjaan, tapi itu adalah kekhawatiran normal yang sangat rasional. Kamu bisa mengatasinya tanpa sampai mengganggu jam tidurmu.",
      reality: "Realitas terasa teratur dan dapat diprediksi. Ini adalah zona fungsional di mana rutinitas berjalan sebagaimana mestinya. Tidak ada kejutan besar yang menyenangkan, tapi juga aman dari masalah yang menyedot energi.",
      physical: "Kondisi fisikmu cukup rileks dan berfungsi secara normal. Tidak ada ketegangan saraf yang berarti, dan kamu masih punya sisa energi di malam hari untuk sekadar menonton film santai sepulang beraktivitas.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena keseimbangan antara tuntutan dari luar dan sumber daya energi yang ada di dalam dirimu sedang berpadu dengan pas. Energi masuk dan energi yang keluar berjalan secara seimbang tanpa kebocoran.",
      amIOkay: "Ya, kamu berada di tempat yang sangat aman dan fungsional. Ini adalah zona penyangga yang sangat sehat di mana kamu bisa menjalani rutinitas harianmu dengan kapasitas mental yang memadai dan stabil.",
      unconsciousPattern: "Kamu mungkin sering salah paham menganggap bahwa hari yang baik adalah hari yang penuh dengan produktivitas tinggi dan tepuk tangan. Padahal, hari biasa di mana rutinitas berjalan tanpa masalah juga merupakan wujud regulasi emosi yang sangat sukses.",
    },
    actionable: {
      practice: [
        "Mempertahankan rutinitas tidur pada jam yang sama setiap malam secara disiplin.",
        "Menikmati waktu makan siang tanpa menatap layar telepon genggam atau komputer.",
        "Mencatat satu pencapaian kecil yang berhasil kamu selesaikan hari ini.",
        "Melakukan peregangan ringan setiap dua jam sekali saat sedang bekerja duduk.",
        "Menyisihkan waktu lima belas menit khusus untuk melamun santai tanpa gangguan."
      ],
      avoid: [
        "Mengambil beban kerja tambahan dari orang lain hanya karena merasa tidak enak hati.",
        "Memotong waktu tidur malam demi menyelesaikan pekerjaan yang tidak mendesak.",
        "Mengubah rutinitas dasar secara drastis hanya karena merasa bosan sesaat.",
        "Mengonsumsi gula berlebihan yang bisa membuat kestabilan energimu naik turun.",
        "Merasa bersalah karena hari ini kamu hanya melakukan rutinitas biasa tanpa gebrakan."
      ],
    },
    colorClass: "text-emerald-400",
    hexColor: "#34d399",
    bgGradient: "from-emerald-950 to-slate-900",
  },
  {
    zone: "Shift",
    state: "Adjust",
    mode: "Adapt",
    flow: "Balance",
    minScore: 51,
    maxScore: 60,
    interpretation:
      "Kamu sedang dalam fase penyesuaian yang sehat. Ada fleksibilitas dan kemampuan adaptif yang berkembang. Ini adalah transisi positif menuju keseimbangan yang lebih tinggi.",
    characteristics: {
      feelings: "Kamu mulai merasa lebih ringan, terbuka, dan ada rasa penasaran positif yang perlahan bermekaran. Seolah olah awan mendung baru saja bergeser dan kamu mulai tertarik untuk mencoba menjelajah hal baru.",
      thoughts: "Pikiranmu jauh lebih lentur. Saat rencana awal gagal, otakmu dengan santai memikirkan opsi cadangan. Kamu mulai bisa melihat masalah dari sudut pandang orang lain tanpa merasa dihakimi atau bersikap defensif.",
      worries: "Terkadang kamu masih merasa ragu saat harus mencoba tantangan baru, tapi keraguan itu lekas dikalahkan oleh ketertarikanmu. Kamu mulai bisa menertawakan kesalahan kecil dan sadar bahwa gagal itu wajar.",
      reality: "Kamu tidak lagi melihat dunia secara kaku. Realitas terasa jauh lebih dinamis, dipenuhi banyak peluang alternatif, dan ruang yang luas untuk berkompromi. Perubahan di sekitarmu tidak lagi terasa mengancam.",
      physical: "Otot otot tubuhmu mulai benar benar mengendur dan lentur. Nafasmu secara alami lebih panjang, dan ritme energi di dalam dirimu terasa lebih segar, membuatmu siap untuk bermanuver maju kapan pun dibutuhkan.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena sistem pertahanan emosionalmu mulai mereda dan digantikan oleh dorongan eksplorasi. Otakmu mendeteksi bahwa lingkungan saat ini cukup aman untuk mencoba hal baru tanpa takut akan risiko fatal.",
      amIOkay: "Kamu sedang tumbuh ke arah yang sangat positif. Rasa cemas yang sesekali singgah saat mencoba kebiasaan baru adalah respons alami syarafmu saat meregang keluar batas nyaman, bukan tanda bahaya.",
      unconsciousPattern: "Sebelumnya kamu punya kebiasaan melihat segala sesuatu dari kacamata hitam putih. Kini, kamu secara tidak sadar mulai mahir mentoleransi ketidakpastian dan menikmati proses belajar tanpa menuntut hasil yang instan.",
    },
    actionable: {
      practice: [
        "Mengubah rute perjalanan pulang ke rumah untuk melatih otak melihat pemandangan baru.",
        "Mencoba bertegur sapa dengan satu orang rekan kerja beda divisi yang jarang ditemui.",
        "Mendengarkan episode podcast dengan topik yang sama sekali tidak kamu kuasai.",
        "Membaca pendapat dari sisi yang berlawanan dengan keyakinanmu untuk melatih empati.",
        "Mengatakan ya pada satu ajakan kegiatan spontan yang positif minggu ini."
      ],
      avoid: [
        "Menyerah dan mundur pada percobaan pertama saat mempelajari keahlian baru.",
        "Kembali menggunakan metode kerja lama hanya karena metode baru terasa canggung.",
        "Mengkritik ide ide aneh yang muncul dari rekan kerjamu saat sesi diskusi.",
        "Menghindari lingkungan sosial baru karena takut tidak memiliki topik pembicaraan.",
        "Membiarkan keraguan kecil menghentikan langkahmu untuk bertanya pada ahlinya."
      ],
    },
    colorClass: "text-teal-400",
    hexColor: "#2dd4bf",
    bgGradient: "from-teal-950 to-slate-900",
  },
  {
    zone: "Awake",
    state: "Clear",
    mode: "Observe",
    flow: "Open",
    minScore: 61,
    maxScore: 70,
    interpretation:
      "Kesadaran dirimu sedang berada pada level yang baik. Kamu mulai melihat diri dan situasimu dengan lebih jernih. Gunakan kejernihan ini untuk membuat keputusan yang lebih sadar.",
    characteristics: {
      feelings: "Kamu merasa sangat utuh, hadir di detik ini. Ada kedamaian yang mendalam di batinmu yang terbebas dari tuntutan ekspektasi. Kamu merasa cukup dengan dirimu sendiri tanpa dorongan harus pamer pencapaian.",
      thoughts: "Kejernihan berpikirmu ada di tahap luar biasa. Kamu sangat objektif dan tidak mudah tersinggung (baper). Kamu bisa dengan tajam memisahkan mana peristiwa yang murni fakta, dan mana sekadar asumsi berlebihan.",
      worries: "Kecemasan serasa luruh berkeping keping. Titik fokusmu bergeser total dari mengeluhkan masalah menjadi memikirkan tindakan apa yang bisa dieksekusi sekarang. Hal hal di luar kendali perlahan kamu lepaskan dengan ikhlas.",
      reality: "Dunia di matamu berubah menjadi ruang netral yang tenang. Orang yang menyebalkan hanyalah sebuah informasi karakter mereka, bukan serangan pribadi. Kamu seakan asyik menjadi penonton yang duduk rileks atas teater hidupmu.",
      physical: "Secara fisik kamu merasa sangat bersahabat dengan tubuhmu sendiri. Postur tulang belakangmu tegak elegan tanpa paksaan kaku. Pandangan matamu terasa lebih awas, jernih, dan tajam dalam memindai lingkungan sekeliling.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena kamu telah berhasil menciptakan jarak spasi yang sehat antara pemicu (stimulus) dan reaksimu. Kamu mengamati keramaian isi kepalamu bagai seorang pengamat objektif yang tenang di pinggir sungai.",
      amIOkay: "Kamu berada dalam kondisi kejiwaan yang sangat brilian. Ketenangan yang pekat ini bukanlah sikap apatis atau mati rasa, melainkan puncak kedewasaan emosional di mana kamu mahir menyeleksi hal apa yang layak diberi perhatian.",
      unconsciousPattern: "Selama bertahun tahun kamu sering bertindak otomatis dikemudikan oleh dorongan emosi sesaat. Sekarang, kamu menyadari sepenuhnya bahwa ruang kendali tertinggi (memilih respons) seutuhnya ada di tanganmu.",
    },
    actionable: {
      practice: [
        "Menyediakan waktu sepuluh menit di pagi hari untuk duduk diam tanpa melakukan apapun.",
        "Berlatih menjadi pengamat emosi sendiri dengan mengucap dalam hati emosi yang dirasakan tanpa terbawa arusnya.",
        "Menuliskan jurnal singkat tentang fakta objektif yang terjadi hari ini tanpa bumbu drama.",
        "Berlatih mendengarkan keluhan orang lain tanpa memberikan solusi jika tidak diminta.",
        "Menjaga kelurusan postur tulang punggung saat berjalan agar kesadaran tetap terjangkar."
      ],
      avoid: [
        "Melibatkan diri dalam drama emosional orang lain yang menolak untuk dibantu.",
        "Menganggap kritik profesional sebagai serangan terhadap harga diri pribadimu.",
        "Mengabaikan batasan energimu demi berperan sebagai pahlawan bagi semua orang.",
        "Menelan mentah mentah informasi yang memancing kemarahan tanpa memverifikasi faktanya.",
        "Terpancing untuk membenarkan pandangan orang yang jelas jelas berdebat demi ego."
      ],
    },
    colorClass: "text-cyan-400",
    hexColor: "#22d3ee",
    bgGradient: "from-cyan-950 to-slate-900",
  },
  {
    zone: "Merge",
    state: "Smooth",
    mode: "Align",
    flow: "Grow",
    minScore: 71,
    maxScore: 80,
    interpretation:
      "Energi, emosi, dan kognisimu mulai bergerak selaras. Kamu berada dalam kondisi yang harmonis dan produktif. Kapasitas untuk tumbuh dan berkontribusi sedang berada di level tinggi.",
    characteristics: {
      feelings: "Ada rasa kehangatan dan keterikatan batin yang sangat tulus dengan orang orang di hidupmu. Sensor empatimu menyala lebar, kamu dipenuhi rasa damai dan ikut berdebar senang melihat rekan atau keluargamu mencapai kesuksesan.",
      thoughts: "Solusi dan gagasan kreatif mengucur deras tanpa tersendat. Mindset kamu telah bergeser dari persaingan egois menjadi hasrat kolaborasi yang pekat. Intuisimu sangat lincah membaca perasaan tersirat lawan bicaramu.",
      worries: "Lapisan kecemasan telah digulung bersih oleh selimut kepercayaan diri yang membumi. Kamu menaruh percaya pada laju prosesmu, yakin pada niat baik semesta, dan teguh pada kapasitas rasionalmu untuk membongkar rintangan.",
      reality: "Dunia bertransformasi menjadi sebuah ekosistem yang melingkar ramah, sinkron, dan saling topang. Kamu akan sering tersenyum menyadari banyaknya kebetulan beruntung berkat pancaran resonansi positif batinmu ke sekitar.",
      physical: "Sirkulasi energi di pembuluhmu mengalir hangat dan rileks. Bahasa postur tubuhmu mengisyaratkan keterbukaan yang ramah. Setiap ayunan langkahmu terasa enteng bagai melayang namun telapakmu memijak bumi sangat kuat.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena dinding ego pribadimu telah melembek dan meleleh, memberi ruang lapang bagi empati tulus untuk mengambil alih komando. Sistem syarafmu merasa sedemikian amannya hingga tidak takut memancarkan kasih sayang.",
      amIOkay: "Kondisi ini merepresentasikan spektrum kesejahteraan psikologis yang menawan. Jalinan koneksi yang kaya dengan sekitarmu membasuh residu batinmu, serta berfungsi sebagai akselerator tajam bagi pertumbuhan kapasitas emosionalmu.",
      unconsciousPattern: "Kamu baru saja mengubur dalam dalam ilusi masa lalu yang meyakini bahwa kesuksesan adalah arena sikut sikutan sempit. Kamu telah merangkul total kelimpahan batin bahwa dunia ini luas bagi semua orang untuk bersinar terang.",
    },
    actionable: {
      practice: [
        "Memberikan apresiasi yang sangat spesifik dan tulus atas hasil kerja keras temanmu.",
        "Mengajukan pertanyaan yang menggali lebih dalam saat mendengarkan pasangan bercerita.",
        "Menjadi jembatan yang menghubungkan dua kenalanmu agar mereka bisa saling berkolaborasi.",
        "Mengutamakan kata 'kita' daripada 'aku' saat sedang berdiskusi dalam sebuah tim.",
        "Mengikhlaskan atau merelakan hal hal kecil yang biasanya memicu perdebatan ego."
      ],
      avoid: [
        "Menyembunyikan ide cemerlang dari rekan kerja karena diam diam takut tersaingi.",
        "Mendominasi percakapan dan tidak memberikan ruang bagi suara orang lain yang pendiam.",
        "Mengambil seluruh pujian keberhasilan untuk diri sendiri padahal ada peran tim di belakangnya.",
        "Membiarkan kecemburuan profesional merusak rasa banggamu terhadap pencapaian teman.",
        "Menarik diri dari kegiatan kolaboratif karena merasa bisa mengerjakannya sendiri lebih cepat."
      ],
    },
    colorClass: "text-sky-300",
    hexColor: "#7dd3fc",
    bgGradient: "from-sky-900 to-slate-900",
  },
  {
    zone: "Core",
    state: "Strong",
    mode: "Focus",
    flow: "Rise",
    minScore: 81,
    maxScore: 90,
    interpretation:
      "Kamu beroperasi dari pusat dirimu yang paling stabil. Fokus, kekuatan, dan kejernihan hadir bersamaan. Kondisi ini memungkinkan kamu untuk memberikan dampak yang bermakna.",
    characteristics: {
      feelings: "Sebuah sensasi soliditas mental yang absolut merajai dadamu. Kamu memancarkan pancaran kepercayaan diri yang pekat namun sama sekali tidak berisik (quiet confidence). Kamu sudah berhenti haus akan validasi eksternal.",
      thoughts: "Ketajaman analisamu melampaui silet tajam. Visi jangka panjangmu terpampang terang benderang. Tumpukan masalah kompleks yang membuat kolega meringis bisa kamu urai, petakan sistematis, dan selesaikan tanpa buang buang waktu.",
      worries: "Definisi kekhawatiran telah menguap tidak berbekas dari radar pikiranmu. Tatkala rintangan kelas berat menerjang, otakmu menolak bergetar ketakutan; ia malah girang menganggapnya sebuah puzzle level tinggi yang menggugah selera.",
      reality: "Cakrawala hidupmu terbentang bak kanvas maha luas di mana kamulah sang arsitek utamanya. Kamu melihat dengan kejernihan kristal tentang celah celah kosong di mana kamu ditakdirkan untuk berinovasi dan menyebar dampak masif.",
      physical: "Tingkat kebugaran dan vitalitasmu merobek ambang batas standar. Tubuhmu difasilitasi oleh cadangan reaktor energi terbarukan. Kecepatan memproses rangsangan motorik, serta daya lenting imunitasmu, meroket ke persentase optimal.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena trisula kekuatanmu, yakni otot fisik, rasionalitas mental, dan kedalaman emosional, menembus titik koordinat sinkronisasi yang langka. Terciptanya kejelasan tujuan memangkas habis semua keraguan remeh.",
      amIOkay: "Ini adalah patung monumen dari ketangguhan manusia. Kamu menancap bagai pilar beton baja. Satu satunya tugasmu saat ini adalah menyalurkan cadangan daya listrik maha raksasa ini murni demi meretas inovasi berdaya ledak positif.",
      unconsciousPattern: "Dinding bawah sadarmu baru saja menerima fakta revolusioner: bahwa tidak ada satupun gelombang badai eksternal yang dimensinya lebih raksasa dari pada muatan kapasitas akalmu. Paradigma ketakutan telah diganti mesin penasaran.",
    },
    actionable: {
      practice: [
        "Mengambil keputusan strategis besar yang selama beberapa bulan ini terus menerus kamu tunda.",
        "Berperan aktif sebagai mentor untuk membimbing rekan setim yang masih belum berpengalaman.",
        "Mengalokasikan blok waktu khusus untuk memfokuskan energi merancang visi jangka panjang.",
        "Menjadi penengah yang objektif dan tenang ketika terjadi konflik panas di lingkungan kerja.",
        "Merayakan setiap rintangan sulit sebagai sebuah permainan teka teki intelektual yang seru."
      ],
      avoid: [
        "Memandang rendah atau meremehkan rekan yang memproses informasi lebih lambat darimu.",
        "Mengabaikan rasa lelah biologis dan menolak tidur malam hanya karena merasa kuat bekerja terus.",
        "Memaksakan standar kecepatan kerjamu yang luar biasa tinggi kepada semua anggota tim.",
        "Berhenti mencari umpan balik atau kritik dari luar karena merasa pemikiranmu sudah paling benar.",
        "Menyepelekan masalah logistik kecil di lapangan karena terlalu fokus pada gambar besar."
      ],
    },
    colorClass: "text-amber-300",
    hexColor: "#fcd34d",
    bgGradient: "from-amber-950 to-slate-900",
  },
  {
    zone: "Peak",
    state: "Sharp",
    mode: "Master",
    flow: "Sustain",
    minScore: 91,
    maxScore: 100,
    interpretation:
      "Ini adalah kondisi puncak regulasi diri. Kamu berada dalam keselarasan penuh antara energi, emosi, dan tindakan. Pertahankan kondisi ini dengan kesadaran penuh, ini bukan titik akhir, melainkan fondasi terbaik.",
    characteristics: {
      feelings: "Euphoria kedamaian (bliss) merayap hingga ke sel sel darah terkecilmu. Kamu meleleh total ke dalam pusaran 'flow state'. Rasanya alam semesta menari serempak dalam detak jantungmu. Semua jenis friksi batin hangus tanpa sisa.",
      thoughts: "Ledakan demi ledakan pencerahan (insight) menerangi otakmu nyaris tanpa kamu perlu mengerutkan dahi. Solusi untuk teka teki eksistensial bisa terpecahkan tuntas lewat satu kilatan intuisi secepat cahaya.",
      worries: "Kecemasan adalah konsep usang yang tidak lagi relevan bagi logikamu di titik ini. Pikiranmu dinaungi kesadaran dimensi tinggi yang memahami seratus persen bahwa setiap serpihan takdir, baik dan buruk, memiliki takaran proporsi yang sempurna.",
      reality: "Semua manuver tindakan dan karya karyamu adalah ekstrak paling murni dari kemuliaan jiwamu. Ketika kamu tenggelam dalam karya, waktu linier melebur lentur seakan jarum jam tidak pernah berdetak maju.",
      physical: "Jaringan syaraf tepi dan pusat milikmu berpelukan pada derajat keseimbangan seluler paling menakjubkan yang didesain alam. Otot kerangkamu selembut air mengalir namun menimbun cadangan kekuatan super yang siap diledakkan. Tarikan nafasmu membersihkan racun batin.",
    },
    deepInsights: {
      whyFeelThisWay: "Karena benteng pertahanan ego buatanmu sepenuhnya luluh lantak diganti oleh koneksi tanpa batas ke dalam aktivitas yang sedang kamu dedikasikan. Garis pemisah imajiner antara 'aku' dan 'karyaku' musnah menjadi harmoni kosmik.",
      amIOkay: "Kamu berlabuh tegak pada nirwana sinkronisasi eksistensi manusia. Ini adalah stempel kesahihan spiritual dan emosional paling absolut; di mana ucapan syukur lebur secara presisi bersama performa fungsional tanpa celah retakan sedikit pun.",
      unconsciousPattern: "Detik ini, jangkar batinmu ditarik paksa dari lautan lumpur penyesalan masa lampau maupun badai debu kekhawatiran masa depan. Radar kesadaranmu mengunci abadi di detak sakral masa kini, meretas paksa saluran VIP menuju kebijaksanaan purbamu.",
    },
    actionable: {
      practice: [
        "Menyalurkan ketenangan batinmu secara senyap untuk meneduhkan orang orang yang panik di sekitarmu.",
        "Segera mencatat atau merekam inspirasi tingkat tinggi yang tiba tiba melintas di benakmu hari ini.",
        "Melakukan apresiasi diam diam dengan mendoakan kebaikan bagi setiap orang yang kamu temui di jalan.",
        "Menikmati secara sadar detik demi detik momen saat kamu sedang berkarya dalam kondisi 'flow state'.",
        "Menjaga postur kerendahan hati yang ekstrem tanpa sedikitpun keinginan untuk pamer pencapaian rohani ini."
      ],
      avoid: [
        "Berusaha mati matian menggenggam kondisi luar biasa ini agar tidak pernah pergi dari genggamanmu.",
        "Merasa kecewa atau marah pada diri sendiri ketika kamu kelak kembali turun ke zona fungsional biasa.",
        "Menganggap urusan duniawi sehari hari menjadi remeh karena merasa dirimu sudah berada di level spiritual tinggi.",
        "Memaksa orang lain untuk sepemikiran dan mencapai level kesadaran yang sama denganmu secara instan.",
        "Lupa makan atau minum seharian karena terlalu hanyut terbawa dalam kenikmatan kondisi 'flow state'."
      ],
    },
    colorClass: "text-white",
    hexColor: "#ffffff",
    bgGradient: "from-slate-700 to-slate-900",
  },
];
