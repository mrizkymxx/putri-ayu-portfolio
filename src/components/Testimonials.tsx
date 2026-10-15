import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteContent } from '@/data/content'
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react'

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = siteContent.testimonials

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const current = items[currentIndex]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#F3CBD3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9E4E8] text-[#813B44] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-4 h-4 text-[#C9A66B]" />
            <span>Kepuasan Partner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E]">
            Kata Brand & Agensi
          </h2>
          <p className="text-sm sm:text-base text-[#6B555B] mt-2">
            Pengalaman nyata tim marketing yang telah mempercayakan kampanye produknya kepada Putri Ayu.
          </p>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-b from-[#FFF5F7] to-white rounded-3xl p-8 sm:p-12 border border-[#ECC7CE] shadow-sm relative overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Background Decorative Quote */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-[#F9E4E8] -z-0 opacity-80" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Quote Text */}
                  {/* TODO: Ganti isi quote testimoni di bawah dengan testimoni asli dari klien/brand */}
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#3B2A2E] leading-relaxed italic">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  {/* Author Information */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#F3CBD3]/60">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ECC7CE] bg-[#F9E4E8] shrink-0 shadow-xs">
                      {current.avatarUrl ? (
                        <img
                          src={current.avatarUrl}
                          alt={current.clientName}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#B5646F] text-white flex items-center justify-center font-serif text-lg font-bold">
                          {current.clientName.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-serif text-base font-bold text-[#3B2A2E]">
                        {current.clientName}
                      </div>
                      <div className="text-xs text-[#813B44] font-medium">
                        {current.role} • {current.brandName}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons & Dots */}
            <div className="relative z-10 flex items-center justify-between pt-8 border-t border-[#F9E4E8] mt-6">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-[#B5646F]' : 'w-2 bg-[#ECC7CE]'
                    }`}
                    aria-label={`Lihat testimoni ke-${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons (Min 44px touch target) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] border border-[#ECC7CE] flex items-center justify-center transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#B5646F]"
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] border border-[#ECC7CE] flex items-center justify-center transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#B5646F]"
                  aria-label="Testimoni selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
