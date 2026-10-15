import { siteContent } from '@/data/content'
import { ArrowUp } from 'lucide-react'

// Custom TikTok & Instagram Icons
const TikTokIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.46V8.78a8.18 8.18 0 0 0 4.87 1.62V6.95a4.84 4.84 0 0 1-.96-.26z" />
  </svg>
)

const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#FFF5F7] border-t border-[#F3CBD3] py-12 sm:py-16 text-[#3B2A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#F9E4E8]">
          {/* Left: Brand Identity */}
          <div className="text-center md:text-left space-y-1">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#3B2A2E]">
              {siteContent.footer.brandName}
            </span>
            <p className="text-xs text-[#6B555B] max-w-md">
              {siteContent.footer.tagline}
            </p>
            <p className="text-[11px] text-[#968187]">
              {siteContent.footer.locationText}
            </p>
          </div>

          {/* Center: Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#6B555B]">
            {siteContent.navigation.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="hover:text-[#B5646F] transition-colors"
              >
                {nav.label}
              </a>
            ))}
          </div>

          {/* Right: Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={siteContent.creator.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi akun TikTok Putri Ayu"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] hover:text-[#B5646F] border border-[#ECC7CE] flex items-center justify-center transition-colors shadow-2xs"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

            <a
              href={siteContent.creator.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi akun Instagram Putri Ayu"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] hover:text-[#B5646F] border border-[#ECC7CE] flex items-center justify-center transition-colors shadow-2xs"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke atas halaman"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] hover:text-[#B5646F] border border-[#ECC7CE] flex items-center justify-center transition-colors shadow-2xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#968187] gap-3 text-center sm:text-left">
          <div>{siteContent.footer.copyright}</div>
          <div className="flex items-center justify-center gap-1.5">
            <span>Website design by</span>
            <a
              href="https://www.instagram.com/mrizkymxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#813B44] hover:text-[#B5646F] underline transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#B5646F]" />
              <span>@mrizkymxx</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
