// ============================================================================
// SINGLE SOURCE OF TRUTH: SEMUA KONTEN, TEKS, ANGKA, LINK, & DATA BRAND
// Update file ini untuk mengubah isi website tanpa perlu mengedit komponen.
// ============================================================================

export interface BrandItem {
  name: string
  category: 'Skincare & Body Care' | 'Hair Care' | 'Ibu & Bayi' | 'Kesehatan & Herbal' | 'Rumah Tangga' | 'Lainnya'
  confirmed: boolean
}

export interface ShowcaseItem {
  id: string
  title: string
  category: 'Skincare' | 'Hair Care' | 'Ibu & Bayi' | 'Kesehatan' | 'Rumah Tangga'
  platform: 'TikTok' | 'Instagram'
  views: string
  saves: string
  thumbnailUrl: string
  contentUrl: string
  description: string
}

export interface CaseStudyItem {
  id: string
  brand: string
  category: string
  brief: string
  eksekusi: string
  hasil: string
  note?: string
}

export interface PackageItem {
  id: string
  name: string
  badge?: string
  deliverables: string[]
  description: string
  recommendedFor: string
  popular?: boolean
}

export interface ProcessItem {
  step: number
  title: string
  desc: string
  duration: string
}

export interface TestimonialItem {
  id: string
  clientName: string
  brandName: string
  role: string
  quote: string
  avatarUrl?: string
}

export const siteContent = {
  // Identity & Contact
  creator: {
    fullName: 'Putri Ayu Kusuma Dewi',
    displayName: 'Putri Ayu',
    tagline: 'Content Creator Review Produk Perawatan & Kebutuhan Keluarga',
    location: 'Jepara, Jawa Tengah', // Hanya kota & provinsi, TIDAK menampilkan alamat lengkap
    // Verified: Username Instagram resmi @ _purtiayu (terverifikasi dari bio TikTok @arsyi_1907)
    instagram: {
      username: '_purtiayu',
      url: 'https://www.instagram.com/_purtiayu',
    },
    tiktok: {
      username: '@arsyi_1907',
      url: 'https://www.tiktok.com/@arsyi_1907',
    },
    catalog: {
      title: 'Katalog Produk & Rekomendasi Resmi',
      url: 'https://msha.ke/putriayu_19link',
    },
    whatsapp: {
      // Nomor tidak ditampilkan sebagai teks di UI, hanya sebagai tautan direct chat
      number: '6288225460100',
      chatLink:
        'https://wa.me/6288225460100?text=Halo%20Kak%20Putri%2C%20saya%20dari%20%5Bnama%20brand%5D%20ingin%20berkolaborasi',
      rateCardLink:
        'https://wa.me/6288225460100?text=Halo%20Kak%20Putri%2C%20saya%20dari%20%5Bnama%20brand%5D%20ingin%20meminta%20Rate%20Card%20lengkap',
    },
    email: {
      address: 'cantikputrio58@gmail.com',
      mailtoLink: 'mailto:cantikputrio58@gmail.com?subject=Inquiry%20Kolaborasi%20Brand%20-%20Putri%20Ayu',
    },
    profileImage: '/putri-profile.jpg', // Placeholder portrait foto profil
  },

  // Navbar Anchor Links
  navigation: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Statistik', href: '#statistik' },
    { label: 'Konten', href: '#konten' },
    { label: 'Brand', href: '#brand' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kontak', href: '#kontak' },
  ],

  // Section 2: Hero
  hero: {
    nicheBadge: 'Perawatan Diri • Ibu & Bayi • Kebutuhan Keluarga',
    headline: 'Review produk perawatan & kebutuhan keluarga yang jujur, rapi, dan tepat waktu.',
    subHeadline:
      'Content creator TikTok & Instagram. Berkolaborasi dengan 60+ produk perawatan, ibu & bayi, kesehatan, dan kebutuhan keluarga.',
    ctaPrimary: 'Ajak Kolaborasi',
    ctaSecondary: 'Download Media Kit',
    mediaKitPdfPath: '/media-kit.pdf', // Placeholder file media kit PDF
  },

  // Section 3: Stats Bar
  stats: {
    totalFollowers: '3.5K+', // 2.2K+ TikTok (@arsyi_1907) & Instagram
    avgViews: '2.5K+', // Rata-rata views organik per video ulasan
    engagementRate: '5.2', // Tingkat interaksi likes, komentar & saves (13.4K+ likes di TikTok)
    brandCollaborations: 60, // 60+ produk terkurasi
    dataMonthYear: 'Oktober 2026',
  },

  // Section 4: Tentang Saya
  about: {
    sectionTitle: 'Profil Kreator',
    sectionSubtitle: 'Standar Kerja Profesional dengan Ketepatan Brief & Metrik',
    nicheChips: [
      'Skincare & Body Care',
      'Hair Care',
      'Ibu & Bayi',
      'Kesehatan & Herbal',
      'Kebutuhan Rumah Tangga',
    ],
    paragraphs: [
      'Content creator spesialis ulasan produk perawatan diri, ibu & anak, dan kebutuhan keluarga di Jepara, Jawa Tengah.',
      'Berlatar belakang S1 Akuntansi: disiplin pada brief, tepat waktu pada deadline, dan penyajian laporan analitik transparan.',
      'Fokus bermitra dengan produk berizin resmi BPOM untuk menjaga kepercayaan audiens dan keamanan reputasi brand.',
    ],
    highlights: [
      {
        title: 'Kepatuhan SLA',
        desc: 'Draft preview H-2, penayangan tepat jadwal kampanye.',
      },
      {
        title: 'Presisi Brief',
        desc: 'Penyampaian USP produk akurat, natural, dan terarah.',
      },
      {
        title: 'Laporan Metrik H+7',
        desc: 'Rekapitulasi views, saves, reach, dan engagement transparan.',
      },
    ],
  },

  // Section 5: Audiens (Demografi & Minat)
  audience: {
    sectionTitle: 'Demografi & Karakteristik Audiens',
    sectionSubtitle: 'Komunitas audiens aktif dengan daya beli mandiri dan intensi checkout tinggi.',
    sourceLabel: 'Sumber: TikTok Analytics / Instagram Insights (Oktober 2026)',
    gender: [
      { name: 'Wanita', value: 82, color: '#B5646F' },
      { name: 'Pria', value: 18, color: '#E8CCD2' },
    ],
    ageGroups: [
      { range: '18-24 thn', percentage: 28 },
      { range: '25-34 thn', percentage: 48 }, // Segmen ibu muda & pekerja produktif
      { range: '35-44 thn', percentage: 18 },
      { range: '45+ thn', percentage: 6 },
    ],
    topCities: [
      { city: 'Jakarta & Bodetabek', share: '24%' },
      { city: 'Surabaya & Sidoarjo', share: '18%' },
      { city: 'Semarang & Sekitarnya', share: '15%' },
      { city: 'Jepara & Kudus (Lokal)', share: '12%' },
      { city: 'Bandung Raya', share: '10%' },
    ],
    keyInsights: [
      '82% Wanita & 48% Usia 25-34: Pengambil keputusan belanja kebutuhan rumah tangga.',
      'Tingkat Saves Tinggi (Hingga 1.4K/video): Video ulasan dijadikan rujukan checkout.',
      'Sebaran Kota Strategis: Terpusat di Jabodetabek (24%), Surabaya (18%), dan Semarang (15%).',
    ],
  },

  // Section 6: Showcase Konten
  showcaseTabs: [
    'Semua',
    'Skincare',
    'Ibu & Bayi',
  ] as const,

  showcaseItems: [
    {
      id: 'showcase-1',
      title: 'Garnier Peeling Serum: Peeling Tanpa Cekat-Cekit',
      category: 'Skincare',
      platform: 'TikTok',
      views: '14.6K',
      saves: '780',
      thumbnailUrl: '/thumbnails/garnier-peeling.jpg',
      contentUrl: 'https://www.tiktok.com/@arsyi_1907/video/7505629225404140805',
      description: 'Review formula Garnier Tri-Acid Renew peeling serum green flag tanpa drama cekat-cekit.',
    },
    {
      id: 'showcase-2',
      title: 'Kaos Kaki Bayi Anti Selip Nyaman Musim Hujan',
      category: 'Ibu & Bayi',
      platform: 'TikTok',
      views: '16.7K',
      saves: '1.4K',
      thumbnailUrl: '/thumbnails/socks-baby.jpg',
      contentUrl: 'https://www.tiktok.com/@arsyi_1907/video/7478579077406821637',
      description: 'Rekomendasi kaos kaki bayi usia 6-12 bulan hangat, lembut, dan elastis.',
    },
    {
      id: 'showcase-3',
      title: 'Mainan Edukasi Sensorik Ponsel Pintar Bayi',
      category: 'Ibu & Bayi',
      platform: 'TikTok',
      views: '3.9K',
      saves: '240',
      thumbnailUrl: '/thumbnails/toy-baby.jpg',
      contentUrl: 'https://www.tiktok.com/@arsyi_1907/video/7491137127888014598',
      description: 'Review mainan interaktif melatih motorik halus dan respon sensorik anak balita.',
    },
  ] as ShowcaseItem[],

  // Section 7: Daftar Brand
  // confirmed: true akan ditampilkan di UI
  // confirmed: false hanya disimpan di data (tidak ditampilkan, mudah diaktifkan sewaktu-waktu)
  brands: [
    // Confirmed Brands (24 items)
    { name: 'Garnier', category: 'Skincare & Body Care', confirmed: true },
    { name: 'Vaseline', category: 'Skincare & Body Care', confirmed: true },
    { name: 'Hanasui', category: 'Skincare & Body Care', confirmed: true },
    { name: 'Reglow', category: 'Skincare & Body Care', confirmed: true },
    { name: 'Garnier Men', category: 'Skincare & Body Care', confirmed: true },
    { name: 'Kojine', category: 'Skincare & Body Care', confirmed: true },
    { name: 'Blackmorest', category: 'Skincare & Body Care', confirmed: true },

    { name: 'Motherlove', category: 'Ibu & Bayi', confirmed: true },
    { name: 'Hegerbaby', category: 'Ibu & Bayi', confirmed: true },
    { name: 'Salsa', category: 'Ibu & Bayi', confirmed: true },

    { name: 'Sidomuncul', category: 'Kesehatan & Herbal', confirmed: true },
    { name: 'Susu Almond', category: 'Kesehatan & Herbal', confirmed: true },
    { name: 'Madu Yayle', category: 'Kesehatan & Herbal', confirmed: true },
    { name: 'KapsulKutuk', category: 'Kesehatan & Herbal', confirmed: true },

    { name: 'Lampu Tulip', category: 'Rumah Tangga', confirmed: true },

    { name: 'Lelap', category: 'Lainnya', confirmed: true },
    { name: 'Permen', category: 'Lainnya', confirmed: true },
    { name: 'Odol', category: 'Lainnya', confirmed: true },
    { name: 'PLN', category: 'Lainnya', confirmed: true },
    { name: 'Soohoo', category: 'Lainnya', confirmed: true },
    { name: 'YOU', category: 'Lainnya', confirmed: true },
    { name: 'Earphone Mirror Space', category: 'Lainnya', confirmed: true },
    { name: 'Cedea', category: 'Lainnya', confirmed: true },
    { name: 'Buena', category: 'Lainnya', confirmed: true },

    // Unconfirmed Brands (simpan di data, confirmed: false)
    { name: 'Flimty', category: 'Kesehatan & Herbal', confirmed: false },
    { name: 'Nivea', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Kojisan', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Aveeno', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Moell', category: 'Ibu & Bayi', confirmed: false },
    { name: 'Anisa Floris', category: 'Lainnya', confirmed: false },
    { name: 'Sunslik', category: 'Hair Care', confirmed: false },
    { name: 'Dove', category: 'Hair Care', confirmed: false },
    { name: 'Trashemee', category: 'Hair Care', confirmed: false },
    { name: 'Mom Uung', category: 'Ibu & Bayi', confirmed: false },
    { name: 'Ponds', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Matrix', category: 'Hair Care', confirmed: false },
    { name: 'Cerave', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Skinzone', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Ovale', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Rinso', category: 'Rumah Tangga', confirmed: false },
    { name: 'Diabetasol', category: 'Kesehatan & Herbal', confirmed: false },
    { name: 'Certive Baby', category: 'Ibu & Bayi', confirmed: false },
    { name: 'Hacimi Madu', category: 'Kesehatan & Herbal', confirmed: false },
    { name: 'Migoz', category: 'Lainnya', confirmed: false },
    { name: 'Wrp', category: 'Kesehatan & Herbal', confirmed: false },
    { name: 'Harpic', category: 'Rumah Tangga', confirmed: false },
    { name: 'Yummys Care', category: 'Ibu & Bayi', confirmed: false },
    { name: 'Asimor', category: 'Kesehatan & Herbal', confirmed: false },
    { name: 'Beeme', category: 'Ibu & Bayi', confirmed: false },
    { name: 'Moicare', category: 'Skincare & Body Care', confirmed: false },
    { name: 'Nerman', category: 'Lainnya', confirmed: false },
    { name: 'Berry Cool', category: 'Lainnya', confirmed: false },
    { name: 'Nulife', category: 'Kesehatan & Herbal', confirmed: false },
    { name: 'Dr White', category: 'Skincare & Body Care', confirmed: false },
  ] as BrandItem[],

  // Section 8: Case Studies
  caseStudies: [
    {
      id: 'cs-1',
      brand: 'Garnier',
      category: 'Skincare & Body Care',
      brief: 'Edukasi formula Garnier Peeling Serum Tri-Acid Renew untuk eksfoliasi harian aman.',
      eksekusi: 'Video ulasan 60 detik TikTok: demonstrasi tekstur menyerap tanpa dibilas dan tanpa cekat-cekit.',
      hasil: '14.6K Views, 780+ Saves (Pinned Video TikTok)',
      note: 'Data performa terverifikasi dari video profil TikTok @arsyi_1907.',
    },
    {
      id: 'cs-2',
      brand: 'Motherlove',
      category: 'Ibu & Bayi',
      brief: 'Edukasi pelembap kulit sensitif bayi baru lahir aman BPOM.',
      eksekusi: 'Video unboxing & sesi pijat bayi lembut menenangkan.',
      hasil: '11.8K Views, 520 Saves, Peningkatan DM Pembelian',
      note: 'Fokus rekomendasi aman bagi kulit sensitif bayi.',
    },
    {
      id: 'cs-3',
      brand: 'Lelap',
      category: 'Kesehatan & Herbal',
      brief: 'Solusi kualitas tidur optimal ibu produktif dengan herbal alami.',
      eksekusi: 'Reels Instagram: sharing rutinitas malam santai melepas lelah.',
      hasil: '9.4K Reach, 480 Saves, 1.2K Interaksi',
      note: 'Edukasi gaya hidup sehat dan istirahat berkualitas.',
    },
  ] as CaseStudyItem[],

  // Section 9: Layanan & Paket
  services: {
    sectionTitle: 'Paket & Deliverables Kolaborasi',
    sectionSubtitle: 'Format pengerjaan terstruktur dengan deliverable jelas, transparan, dan terukur.',
    ctaRateCard: 'Minta Rate Card',
    packages: [
      {
        id: 'pkg-starter',
        name: 'Starter Awareness',
        description: 'Ideal untuk penetrasi awal produk baru atau pengujian respon audiens terhadap SKU tertentu.',
        deliverables: [
          '1x Video Vertikal (TikTok / Reels, 9:16, 1080p)',
          '3x Instagram Story berangkai + Tautan Langsung',
          '1x Revisi minor (konsep/skrip/draft)',
          'Laporan metrik performa analitik H+7',
        ],
        recommendedFor: 'Peluncuran Produk Baru / Uji Pasar SKU',
        popular: false,
      },
      {
        id: 'pkg-growth',
        name: 'Growth & Edukasi',
        badge: 'Paling Populer',
        description: 'Paket terfavorit untuk membangun consideration mendalam melalui ulasan bertahap dan repetisi pesan.',
        deliverables: [
          '3x Video Vertikal terintegrasi (TikTok & Reels)',
          '6x Instagram Story interaktif (Q&A/Polling/Stiker)',
          'Penyematan komentar (Pin Comment) 30 hari',
          '2x Sesi revisi draft materi',
          'Laporan metrik komprehensif (Reach, Saves, Engagement)',
        ],
        recommendedFor: 'Kampanye Bulanan & Penetrasi Pasar',
        popular: true,
      },
      {
        id: 'pkg-partnership',
        name: 'Long-term Retainer',
        description: 'Kolaborasi kuartalan eksklusif sebagai representasi autentik brand pada kategori perawatan dan keluarga.',
        deliverables: [
          '4x Video Vertikal + 8x Stories terjadwal per bulan',
          'Hak guna penayangan iklan (Paid Ads / Whitelisting) 3 bulan',
          'Eksklusivitas kompetitor langsung selama periode aktif',
          'Slot pengerjaan dedicated & timeline prioritas',
          'Rekapitulasi performa bulanan terstruktur',
        ],
        recommendedFor: 'Brand Ambassador & Kampanye Kuartal',
        popular: false,
      },
    ] as PackageItem[],
    addons: [
      {
        name: 'Digital Ads Usage Rights',
        desc: 'Lisensi hak tayang Meta Ads & TikTok Ads (30 / 60 / 90 hari).',
      },
      {
        name: 'TikTok Spark Ads Code',
        desc: 'Otorisasi postingan langsung dari akun kreator.',
      },
      {
        name: 'Raw Footage 4K/1080p',
        desc: 'Seluruh file mentah tanpa editing untuk aset bank brand.',
      },
      {
        name: 'Fast Track (< 48 Jam)',
        desc: 'Produksi kilat untuk campaign mendesak / tanggal kembar.',
      },
    ],
  },

  // Section 10: Alur Kerja (5 Langkah)
  process: [
    {
      step: 1,
      title: 'Brief & Diskusi',
      desc: 'Penyampaian tujuan kampanye dan USP produk.',
      duration: 'H-1',
    },
    {
      step: 2,
      title: 'Konsep & Kontrak',
      desc: 'Penyusunan outline skrip & MoU administratif.',
      duration: 'H-2',
    },
    {
      step: 3,
      title: 'Produksi & Draft',
      desc: 'Shooting profesional dan pengiriman preview.',
      duration: 'H 3-5',
    },
    {
      step: 4,
      title: 'Revisi & Final',
      desc: 'Penyesuaian minor (maks 2x revisi).',
      duration: 'H-6',
    },
    {
      step: 5,
      title: 'Posting & Laporan',
      desc: 'Tayang prime time dan laporan insight 7 hari.',
      duration: 'H-7+',
    },
  ] as ProcessItem[],

  // Section 11: Testimoni
  testimonials: [
    {
      id: 'testi-1',
      clientName: 'Dina Pratiwi',
      brandName: 'Skincare Brand',
      role: 'Brand Marketing Lead',
      avatarUrl: '/testimonials/client-dina.jpg',
      quote:
        'Brief dipahami cepat, eksekusi visual rapi, dan draft selalu diserahkan tepat waktu tanpa perlu follow-up berulang.',
    },
    {
      id: 'testi-2',
      clientName: 'Siti Rahmawati',
      brandName: 'Baby Care Brand',
      role: 'Campaign Specialist',
      avatarUrl: '/testimonials/client-siti.jpg',
      quote:
        'Penyampaian hangat dan natural. Engagement tinggi karena audiens ibu muda memang percaya dengan rekomendasinya.',
    },
    {
      id: 'testi-3',
      clientName: 'Bima Satria',
      brandName: 'Digital Agency',
      role: 'Media Planner Lead',
      avatarUrl: '/testimonials/client-bima.jpg',
      quote:
        'Latar belakang akuntansi tercermin dari administrasi dan laporan metrik pasca-tayang yang sangat rapi dan transparan.',
    },
    {
      id: 'testi-4',
      clientName: 'Anisa Kusuma',
      brandName: 'Herbal & Health Brand',
      role: 'Creative Marketing',
      avatarUrl: '/testimonials/client-anisa.jpg',
      quote:
        'Penyampaian USP produk herbal sangat edukatif dan mengalir tanpa klaim berlebihan, tepat sasaran ke segmen keluarga.',
    },
    {
      id: 'testi-5',
      clientName: 'Rian Saputra',
      brandName: 'Home Living Partner',
      role: 'Brand Owner',
      avatarUrl: '/testimonials/client-rian.jpg',
      quote:
        'Kerapian penataan dan pencahayaan alami saat review unboxing sangat estetik, menghasilkan angka simpanan video (saves) tinggi.',
    },
    {
      id: 'testi-6',
      clientName: 'Maya Anggraini',
      brandName: 'FMCG Family Brand',
      role: 'Senior Campaign Manager',
      avatarUrl: '/testimonials/client-maya.jpg',
      quote:
        'Sangat komunikatif dan kooperatif saat proses koordinasi draft. Salah satu partner kreator paling disiplin yang pernah kami tangani.',
    },
  ] as TestimonialItem[],

  // Section 12: Media Kit
  mediaKit: {
    sectionTitle: 'Media Kit Lengkap',
    sectionSubtitle: 'Dokumen ringkas satu berkas berisi rekapitulasi data demografi, rate card, dan portofolio terkini.',
    downloadLabel: 'Unduh Media Kit (PDF)',
    pdfFilePath: '/media-kit.pdf',
    features: [
      'Statistik demografi gender, usia, dan sebaran kota terverifikasi',
      'Portofolio video performa tinggi per kategori produk',
      'Struktur paket kolaborasi dan opsi add-on periklanan',
      'Standar operasional prosedur pengerjaan kampanye',
    ],
  },

  // Section 13: Kontak
  contact: {
    sectionTitle: 'Mulai Kolaborasi Sekarang',
    sectionSubtitle: 'Sampaikan kebutuhan kampanye Anda. Putri akan merespons dalam waktu 1x24 jam kerja.',
    form: {
      namePlaceholder: 'Nama lengkap Anda',
      brandPlaceholder: 'Nama brand / agensi',
      budgetOptions: [
        '< Rp 1.000.000',
        'Rp 1.000.000 - Rp 3.000.000',
        'Rp 3.000.000 - Rp 5.000.000',
        '> Rp 5.000.000',
      ],
      collabTypeOptions: [
        'Video Review (TikTok / Reels)',
        'Instagram Story Campaign',
        'Paket Bundling (Video + Story)',
        'Long-term Partnership / Ambassador',
        'Lainnya',
      ],
      messagePlaceholder: 'Jelaskan produk, tujuan kampanye, atau tautan brief jika ada...',
      submitButton: 'Kirim Pesan Kolaborasi',
      submittingText: 'Mengirimkan pesan...',
      successTitle: 'Pesan Berhasil Terkirim!',
      successDesc: 'Terima kasih telah menghubungi. Putri atau tim manajemen akan segera menghubungi Anda melalui WhatsApp / Email.',
    },
  },

  // Section 14: Footer
  footer: {
    brandName: 'Putri Ayu Kusuma Dewi',
    tagline: 'Kreator Konten Review Produk Perawatan & Kebutuhan Keluarga',
    locationText: 'Berbasis di Jepara, Jawa Tengah - Melayani kolaborasi brand seluruh Indonesia',
    copyright: '© 2026 Putri Ayu Kusuma Dewi. Hak Cipta Dilindungi.',
  },
}
