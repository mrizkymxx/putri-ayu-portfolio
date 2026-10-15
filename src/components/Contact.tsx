import { useState } from 'react'
import type React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import { submitInquiry } from '@/lib/supabase'
import {
  MessageCircle,
  Mail,
  CheckCircle2,
  AlertCircle,
  MapPin,
  ExternalLink,
} from 'lucide-react'

// Custom TikTok & Instagram Icons
const TikTokIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.46V8.78a8.18 8.18 0 0 0 4.87 1.62V6.95a4.84 4.84 0 0 1-.96-.26z" />
  </svg>
)

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export const Contact: React.FC = () => {
  const { form, sectionTitle, sectionSubtitle } = siteContent.contact

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [lastWaUrl, setLastWaUrl] = useState<string>('')
  const [serverError, setServerError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setServerError(null)

    const formEl = e.currentTarget
    const data = new FormData(formEl)
    const name = ((data.get('name') as string) || '').trim()
    const brand = ((data.get('brand') as string) || '').trim()
    const budget_range = ((data.get('budget_range') as string) || '').trim() || 'Sesuai Rate Card'
    const collab_type = ((data.get('collab_type') as string) || '').trim() || 'Review Produk'
    const message = ((data.get('message') as string) || '').trim()

    const err: Record<string, string> = {}
    if (!name) {
      err.name = 'Nama lengkap wajib diisi.'
    }
    if (!brand) {
      err.brand = 'Nama brand atau agensi wajib diisi.'
    }
    if (!message) {
      err.message = 'Pesan atau detail kolaborasi wajib diisi.'
    } else if (message.length < 5) {
      err.message = 'Pesan minimal berisi 5 karakter.'
    }

    if (Object.keys(err).length > 0) {
      setErrors(err)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simpan ke Supabase / database lokal
    await submitInquiry({
      name,
      brand,
      budget_range,
      collab_type,
      message,
    })

    // Susun pesan WhatsApp otomatis terisi lengkap
    const waMessage = [
      `Halo Kak Putri, saya ingin berkolaborasi:`,
      `• *Nama*: ${name}`,
      `• *Brand / Agensi*: ${brand}`,
      `• *Estimasi Budget*: ${budget_range}`,
      `• *Jenis Kolaborasi*: ${collab_type}`,
      `• *Pesan / Detail*: ${message}`,
    ].join('\n')

    const waLink = `https://wa.me/${siteContent.creator.whatsapp.number}?text=${encodeURIComponent(waMessage)}`
    setLastWaUrl(waLink)
    setIsSubmitting(false)
    setIsSuccess(true)

    // Buka WhatsApp di tab baru secara otomatis
    window.open(waLink, '_blank')
  }

  return (
    <section id="kontak" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contacts & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5646F] bg-[#F9E4E8] px-3.5 py-1 rounded-full">
                Hubungi Langsung
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E] mt-3">
                {sectionTitle}
              </h2>
              <p className="text-sm text-[#6B555B] mt-2">
                {sectionSubtitle}
              </p>
            </div>

            {/* Direct Channel Buttons */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href={siteContent.creator.whatsapp.chatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#FFF5F7] hover:bg-[#F9E4E8] border border-[#ECC7CE] text-[#3B2A2E] hover:text-[#813B44] transition-all shadow-2xs group min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left font-bold text-sm sm:text-base text-[#3B2A2E] group-hover:text-[#B5646F] transition-colors">
                    Chat WhatsApp Langsung
                  </div>
                </div>
                <span className="text-xs font-bold text-[#B5646F] pr-1">Buka →</span>
              </a>

              {/* Email Button */}
              <a
                href={siteContent.creator.email.mailtoLink}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-[#FFF5F7] border border-[#ECC7CE] text-[#3B2A2E] hover:text-[#813B44] transition-all shadow-2xs group min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B5646F] text-white flex items-center justify-center shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left font-bold text-sm sm:text-base text-[#3B2A2E] group-hover:text-[#B5646F] transition-colors">
                    Kirim Email Bisnis
                  </div>
                </div>
                <span className="text-xs font-bold text-[#B5646F] pr-1">Tulis →</span>
              </a>
            </div>

            {/* Social Accounts */}
            <div className="p-5 rounded-2xl bg-[#FDF9FA] border border-[#ECC7CE] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#968187]">
                Kunjungi Akun Resmi:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteContent.creator.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#ECC7CE] text-xs font-semibold text-[#3B2A2E] hover:text-[#B5646F] transition-colors shadow-2xs"
                >
                  <TikTokIcon className="w-4 h-4 text-[#3B2A2E]" />
                  <span>{siteContent.creator.tiktok.username}</span>
                </a>
                <a
                  href={siteContent.creator.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#ECC7CE] text-xs font-semibold text-[#3B2A2E] hover:text-[#B5646F] transition-colors shadow-2xs"
                >
                  <InstagramIcon className="w-4 h-4 text-[#B5646F]" />
                  <span>{siteContent.creator.instagram.username}</span>
                </a>
              </div>
            </div>

            {/* Notice */}
            <div className="flex items-center gap-2 text-xs text-[#6B555B]">
              <MapPin className="w-4 h-4 text-[#B5646F] shrink-0" />
              <span>Lokasi: Jepara, Jawa Tengah. Siap menerima pengiriman sampel ke seluruh Indonesia.</span>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form to WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFF8F9] rounded-3xl p-6 sm:p-10 border border-[#ECC7CE] shadow-md relative">
              {isSuccess ? (
                /* Success State with WhatsApp Direct Action */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E8F8EE] text-[#25D366] mx-auto flex items-center justify-center border-2 border-[#A3E7BD]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3B2A2E]">
                    Pesan Siap Dikirim ke WhatsApp!
                  </h3>
                  <p className="text-sm text-[#6B555B] max-w-md mx-auto leading-relaxed">
                    Data kolaborasi telah tersusun rapi. Jika aplikasi WhatsApp tidak otomatis terbuka, silakan klik tombol di bawah.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={lastWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold shadow-md transition-all min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Buka Chat WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-3 rounded-full bg-white border border-[#ECC7CE] text-[#3B2A2E] text-xs font-semibold hover:bg-[#F9E4E8] transition-colors min-h-[44px]"
                    >
                      Tulis Pesan Lain
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form State - Clean Inputs Without Dropdowns */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nama Lengkap */}
                    <div>
                      <label htmlFor="full_name" className="block text-xs font-bold text-[#3B2A2E] mb-1.5">
                        Nama Lengkap <span className="text-[#B5646F]">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="name"
                        type="text"
                        placeholder={form.namePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#3B2A2E] placeholder:text-[#968187] focus:outline-none focus:ring-2 focus:ring-[#B5646F] transition-all min-h-[44px] ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#ECC7CE]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Nama Brand */}
                    <div>
                      <label htmlFor="brand_name" className="block text-xs font-bold text-[#3B2A2E] mb-1.5">
                        Nama Brand / Agensi <span className="text-[#B5646F]">*</span>
                      </label>
                      <input
                        id="brand_name"
                        name="brand"
                        type="text"
                        placeholder={form.brandPlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#3B2A2E] placeholder:text-[#968187] focus:outline-none focus:ring-2 focus:ring-[#B5646F] transition-all min-h-[44px] ${
                          errors.brand ? 'border-red-400 bg-red-50/20' : 'border-[#ECC7CE]'
                        }`}
                      />
                      {errors.brand && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.brand}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Budget Range - Free Input */}
                    <div>
                      <label htmlFor="budget_range" className="block text-xs font-bold text-[#3B2A2E] mb-1.5">
                        Estimasi Budget Kampanye
                      </label>
                      <input
                        id="budget_range"
                        name="budget_range"
                        type="text"
                        placeholder="Estimasi budget"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#ECC7CE] text-sm text-[#3B2A2E] placeholder:text-[#968187] focus:outline-none focus:ring-2 focus:ring-[#B5646F] transition-all min-h-[44px]"
                      />
                    </div>

                    {/* Jenis Kolaborasi - Free Input */}
                    <div>
                      <label htmlFor="collab_type" className="block text-xs font-bold text-[#3B2A2E] mb-1.5">
                        Jenis Kolaborasi
                      </label>
                      <input
                        id="collab_type"
                        name="collab_type"
                        type="text"
                        placeholder="Jenis kolaborasi"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#ECC7CE] text-sm text-[#3B2A2E] placeholder:text-[#968187] focus:outline-none focus:ring-2 focus:ring-[#B5646F] transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Pesan */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#3B2A2E] mb-1.5">
                      Pesan / Detail Kolaborasi <span className="text-[#B5646F]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={form.messagePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#3B2A2E] placeholder:text-[#968187] focus:outline-none focus:ring-2 focus:ring-[#B5646F] transition-all ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#ECC7CE]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      {serverError}
                    </div>
                  )}

                  {/* Submit Button to WhatsApp */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#B5646F] hover:bg-[#9E4D58] disabled:opacity-60 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B5646F]"
                    >
                      {isSubmitting ? (
                        <span>Menyiapkan pesan WhatsApp...</span>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Kirim Pesan via WhatsApp</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
