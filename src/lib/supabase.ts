import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export interface InquiryRecord {
  id?: string
  created_at?: string
  name: string
  brand: string
  budget_range: string
  collab_type: string
  message: string
}

// Client Supabase yang aman jika env belum dikonfigurasi
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function submitInquiry(inquiry: Omit<InquiryRecord, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string }> {
  try {
    if (!supabase) {
      // Fallback jika Supabase belum disambungkan
      console.warn('Supabase URL/Anon Key belum diset di .env. Pesan disimpan di session/console mode:', inquiry)
      try {
        const stored = JSON.parse(localStorage.getItem('putri_local_inquiries') || '[]')
        stored.push({ ...inquiry, created_at: new Date().toISOString(), id: 'local_' + Date.now() })
        localStorage.setItem('putri_local_inquiries', JSON.stringify(stored))
      } catch {
        // Abaikan error localStorage
      }
      return { success: true }
    }

    const { error } = await supabase.from('inquiries').insert([
      {
        name: inquiry.name,
        brand: inquiry.brand,
        budget_range: inquiry.budget_range,
        collab_type: inquiry.collab_type,
        message: inquiry.message,
      },
    ])

    if (error) {
      console.error('Supabase error inserting inquiry:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Terjadi kendala jaringan'
    return { success: false, error: errorMsg }
  }
}
