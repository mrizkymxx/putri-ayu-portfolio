import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import { Download, MapPin, ShoppingBag } from 'lucide-react'

// Official WhatsApp Icon
const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.98-1.028 1.282-.251.301-.452.351-.753.201-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.676-2.086-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.201.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.236-.244-.588-.492-.508-.678-.518-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509c0 1.48 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.545.718.31 1.279.495 1.716.634.721.23 1.378.197 1.9.119.58-.088 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.042 2C6.518 2 2.03 6.486 2.03 12.008c0 1.93.551 3.734 1.506 5.267L2 22l4.877-1.499c1.472.88 3.189 1.385 5.165 1.385 5.524 0 10.012-4.486 10.012-10.008 0-5.522-4.488-10.008-10.012-10.008z" />
  </svg>
)

// Custom TikTok and Instagram SVG icons for sharp visual rendering
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

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FFF5F7] via-[#FDF9FA] to-white">
      {/* Decorative soft blur backgrounds */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#F9E4E8]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#F7EFE1]/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Main Single H1 Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-[#3B2A2E] leading-[1.2] tracking-tight">
              {siteContent.hero.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#6B555B] max-w-2xl leading-relaxed">
              {siteContent.hero.subHeadline}
            </p>

            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#968187]">
              <MapPin className="w-4 h-4 text-[#B5646F]" />
              <span>Berbasis di {siteContent.creator.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={siteContent.creator.whatsapp.chatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#B5646F] hover:bg-[#9E4D58] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.98] min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B5646F]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>{siteContent.hero.ctaPrimary}</span>
              </a>

              <a
                href={siteContent.hero.mediaKitPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9E4E8]/60 text-[#3B2A2E] border border-[#ECC7CE] text-base font-semibold shadow-sm hover:shadow transition-all active:scale-[0.98] min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B5646F]"
              >
                <Download className="w-4 h-4 text-[#B5646F]" />
                <span>{siteContent.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Social Media Link Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#F3CBD3]/60 w-full justify-center lg:justify-start">
              {/* TikTok */}
              <a
                href={siteContent.creator.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] hover:text-[#B5646F] border border-[#ECC7CE] text-xs font-semibold transition-colors shadow-2xs min-h-[44px]"
                aria-label={`TikTok ${siteContent.creator.tiktok.username}`}
              >
                <TikTokIcon className="w-4 h-4 text-[#3B2A2E]" />
                <span>{siteContent.creator.tiktok.username}</span>
              </a>

              {/* Instagram */}
              <a
                href={siteContent.creator.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] hover:text-[#B5646F] border border-[#ECC7CE] text-xs font-semibold transition-colors shadow-2xs min-h-[44px]"
                aria-label={`Instagram ${siteContent.creator.instagram.username}`}
              >
                <InstagramIcon className="w-4 h-4 text-[#B5646F]" />
                <span>{siteContent.creator.instagram.username}</span>
              </a>

              {/* Katalog Rekomendasi Resmi */}
              {siteContent.creator.catalog && (
                <a
                  href={siteContent.creator.catalog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#F9E4E8] text-[#813B44] border border-[#ECC7CE] text-xs font-semibold transition-colors shadow-2xs min-h-[44px]"
                  aria-label="Katalog Rekomendasi Produk Putri Ayu"
                >
                  <ShoppingBag className="w-4 h-4 text-[#B5646F]" />
                  <span>Katalog Produk</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Profile Picture Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow & Gradient Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B5646F] via-[#ECC7CE] to-[#C9A66B] rounded-[2.5rem] opacity-70 blur-md group-hover:opacity-90 transition duration-500" />

              {/* Frame Card - Pure Clean Portrait */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[4/5] rounded-[2rem] bg-gradient-to-b from-white to-[#FFF5F7] p-2.5 shadow-xl border border-white">
                {/* Real Photo container without text overlays */}
                <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative shadow-inner group">
                  <img
                    src={siteContent.creator.profileImage}
                    alt={siteContent.creator.fullName}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
