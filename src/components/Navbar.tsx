import { useState, useEffect } from 'react'
import { siteContent } from '@/data/content'
import { Menu, X } from 'lucide-react'

// Official WhatsApp Icon
const WhatsAppIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.98-1.028 1.282-.251.301-.452.351-.753.201-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.676-2.086-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.201.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.236-.244-.588-.492-.508-.678-.518-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509c0 1.48 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.545.718.31 1.279.495 1.716.634.721.23 1.378.197 1.9.119.58-.088 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.042 2C6.518 2 2.03 6.486 2.03 12.008c0 1.93.551 3.734 1.506 5.267L2 22l4.877-1.499c1.472.88 3.189 1.385 5.165 1.385 5.524 0 10.012-4.486 10.012-10.008 0-5.522-4.488-10.008-10.012-10.008z" />
  </svg>
)

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#F3CBD3]/50 py-3'
          : 'bg-[#FDF9FA]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B5646F] rounded-lg"
          >
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#3B2A2E] group-hover:text-[#B5646F] transition-colors">
              {siteContent.creator.fullName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[#6B555B] hover:text-[#B5646F] rounded-lg hover:bg-[#F9E4E8]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B5646F]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Kolaborasi Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteContent.creator.whatsapp.chatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#B5646F] hover:bg-[#9E4D58] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-[0.98] min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B5646F]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Ajak Kolaborasi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-[#3B2A2E] hover:bg-[#F9E4E8] focus:outline-none focus:ring-2 focus:ring-[#B5646F] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={isOpen}
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-b border-[#F3CBD3] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-[#3B2A2E] hover:bg-[#F9E4E8] hover:text-[#B5646F] transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={siteContent.creator.whatsapp.chatLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#B5646F] text-white text-base font-semibold shadow-sm min-h-[48px]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Ajak Kolaborasi</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
