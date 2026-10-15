import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import { MapPin, CheckCircle2 } from 'lucide-react'

export const About: React.FC = () => {
  const { sectionTitle, sectionSubtitle, nicheChips, paragraphs } = siteContent.about

  return (
    <section id="tentang" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FDF9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clean Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F3CBD3] shadow-sm relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#3B2A2E]">
                    {siteContent.creator.fullName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#813B44] font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B5646F]" />
                    <span>{siteContent.creator.location} • S1 Akuntansi</span>
                  </div>
                </div>

                <div className="border-t border-[#F9E4E8] pt-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B5646F] mb-3">
                    Fokus Niche:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {nicheChips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF5F7] border border-[#ECC7CE] text-xs font-semibold text-[#813B44]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B5646F]" />
                        <span>{chip}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5646F] bg-[#F9E4E8] px-3.5 py-1 rounded-full">
                {sectionTitle}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E] mt-3 leading-snug">
                {sectionSubtitle}
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#6B555B] leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 1
                      ? 'text-[#3B2A2E] font-medium bg-[#FFF5F7] p-4 rounded-2xl border-l-4 border-[#B5646F]'
                      : ''
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={siteContent.creator.whatsapp.chatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B5646F] hover:bg-[#9E4D58] text-white text-sm font-semibold shadow-sm hover:shadow transition-all min-h-[44px]"
              >
                <span>Ajak Diskusi Kampanye</span>
              </a>
              <a
                href="#konten"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F9E4E8] text-[#3B2A2E] border border-[#ECC7CE] text-sm font-semibold transition-all min-h-[44px]"
              >
                <span>Lihat Contoh Konten</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

