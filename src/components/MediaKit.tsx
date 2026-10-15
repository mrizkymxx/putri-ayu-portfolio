import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import { Download, FileText, CheckCircle } from 'lucide-react'

export const MediaKit: React.FC = () => {
  const { sectionTitle, sectionSubtitle, downloadLabel, pdfFilePath, features } = siteContent.mediaKit

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDF9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FFF5F7] via-white to-[#F9E4E8] rounded-3xl p-8 sm:p-12 border border-[#ECC7CE] shadow-lg relative overflow-hidden">
          {/* Decorative blur rings */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A66B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9E4E8] text-[#813B44] text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#B5646F]" />
                <span>Dokumen Resmi</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E]">
                {sectionTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#6B555B] leading-relaxed">
                {sectionSubtitle}
              </p>

              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3B2A2E]">
                    <CheckCircle className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={pdfFilePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#B5646F] hover:bg-[#9E4D58] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.98] min-h-[48px]"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloadLabel}</span>
                </a>
                <span className="text-xs text-[#968187] text-center sm:text-left">
                  Format PDF • Ukuran ~2.4 MB
                </span>
              </div>
            </motion.div>

            {/* Right Mockup Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative group max-w-[320px] w-full">
                {/* Background Shadow Stack */}
                <div className="absolute inset-0 bg-[#C9A66B]/20 rounded-2xl transform rotate-3 scale-95 blur-xs" />
                <div className="absolute inset-0 bg-[#B5646F]/15 rounded-2xl transform -rotate-2 scale-98" />

                {/* Main Mockup Card */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#ECC7CE] shadow-xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F9E4E8] text-[#B5646F] mx-auto flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#3B2A2E]">
                      Media Kit & Rate Card
                    </h3>
                    <p className="text-xs text-[#813B44] font-medium mt-1">
                      Putri Ayu Kusuma Dewi
                    </p>
                  </div>

                  <div className="p-4 bg-[#FFF5F7] rounded-xl border border-[#F3CBD3] text-left space-y-2 text-xs text-[#6B555B]">
                    <div className="flex justify-between font-medium">
                      <span>Demografi:</span>
                      <span className="text-[#3B2A2E] font-bold">82% Wanita</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Core Segment:</span>
                      <span className="text-[#3B2A2E] font-bold">25-34 Tahun</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Portofolio:</span>
                      <span className="text-[#B5646F] font-bold">60+ Brand Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
