import { motion } from 'framer-motion'
import { siteContent, type ProcessItem } from '@/data/content'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const Process: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDF9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B5646F] bg-[#F9E4E8] px-3.5 py-1.5 rounded-full">
            Standar Kolaborasi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E] mt-3">
            Alur Kerja Terstruktur & Tepat Waktu
          </h2>
          <p className="text-sm sm:text-base text-[#6B555B] mt-2">
            Proses kerja transparan berbasis milestone yang menjamin kualitas konten dan kepatuhan timeline.
          </p>
        </div>

        {/* 5-Step Process (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
          {siteContent.process.map((item: ProcessItem, idx: number) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#ECC7CE] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Duration Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-[#FFF5F7] border border-[#ECC7CE] flex items-center justify-center font-serif text-lg font-bold text-[#B5646F] group-hover:bg-[#B5646F] group-hover:text-white transition-colors shadow-2xs">
                    0{item.step}
                  </span>
                  <span className="text-[10px] font-bold text-[#813B44] bg-[#F9E4E8] px-2 py-0.5 rounded-full">
                    {item.duration}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#3B2A2E] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B555B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="mt-4 pt-3 border-t border-[#F9E4E8] flex items-center justify-between text-[11px] text-[#968187]">
                <span className="flex items-center gap-1 font-medium text-[#813B44]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Milestone {item.step}</span>
                </span>
                {idx < 4 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#ECC7CE] hidden md:block" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
