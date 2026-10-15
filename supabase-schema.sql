-- ============================================================================
-- SQL Schema untuk Tabel Inquiries Portofolio Putri Ayu
-- Jalankan skrip ini di Supabase SQL Editor (https://supabase.com/dashboard)
-- ============================================================================

-- 1. Buat tabel inquiries
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    budget_range TEXT,
    collab_type TEXT,
    message TEXT NOT NULL
);

-- 2. Aktifkan Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 3. Kebijakan RLS: Pengunjung publik (anon) HANYA boleh INSERT
CREATE POLICY "Public visitors can insert inquiry"
ON public.inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- 4. Pengunjung publik TIDAK boleh SELECT/READ (Mencegah kebocoran data brand lain)
-- Karena tidak ada policy SELECT untuk 'anon', secara default akses SELECT ditolak.
-- Hanya role 'authenticated' (pemilik akun Supabase / admin) yang dapat membaca via Supabase Studio.

-- Selesai!
