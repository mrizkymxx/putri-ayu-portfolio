# Portofolio Influencer / Media Kit - Putri Ayu Kusuma Dewi

Website portofolio dan media kit satu halaman (*single page scroll*) untuk kreator konten **Putri Ayu Kusuma Dewi**.

## Fitur & Struktur
- **Teknologi**: React 19 + Vite 8 + TypeScript + Tailwind CSS v4 + Framer Motion + Recharts + Lucide Icons + Supabase JS.
- **Single Source of Truth**: Semua teks, angka, link, dan data brand tersimpan di `src/data/content.ts`.
- **14 Section Berurutan**:
  1. `Navbar` (Sticky dengan menu anchor & tombol kolaborasi; hamburger responsif di mobile)
  2. `Hero` (H1 headline, sub-headline, foto profil portrait, tombol WhatsApp & Media Kit, link sosmed)
  3. `StatsBar` (4 metrik dengan animasi hitung naik / placeholder `—` jika data belum diisi)
  4. `About` (3 paragraf hangat & profesional, penekanan latar belakang S1 Akuntansi, chip niche)
  5. `Audience` (Grafik donut gender, bar chart kelompok usia, top 5 sebaran kota berbasis Recharts)
  6. `Showcase` (Grid video rasio 9:16 dengan tab filter kategori & link langsung ke platform)
  7. `BrandsGrid` (Daftar brand terkonfirmasi bergaya logo wordmark per kategori)
  8. `CaseStudies` (3 kartu studi kasus: Brand, Brief, Eksekusi, dan Hasil)
  9. `Services` (3 paket kolaborasi dengan tombol "Minta Rate Card" tanpa menampilkan nominal fee, plus daftar add-on)
  10. `Process` (5 tahapan alur kerja terstruktur)
  11. `Testimonials` (Carousel ulasan dari brand & agensi partner)
  12. `MediaKit` (Preview kartu media kit & tautan unduh file PDF)
  13. `Contact` (Formulir validasi Bahasa Indonesia terintegrasi Supabase + tombol direct WhatsApp & Email)
  14. `Footer` (Hak cipta © 2026, navigasi, dan akun resmi)

## Cara Menjalankan

```bash
# 1. Jalankan development server
npm run dev

# 2. Build untuk produksi
npm run build

# 3. Preview hasil build
npm run preview
```

## Setup Database Supabase
1. Salin `.env.example` menjadi `.env`:
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
2. Buka dashboard Supabase, buka menu **SQL Editor**, dan jalankan skrip dari `supabase-schema.sql`.
3. RLS aktif: Pengunjung publik hanya memiliki hak `INSERT`, tidak dapat membaca data inquiry pihak lain (`SELECT`).
