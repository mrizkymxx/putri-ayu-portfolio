import { motion } from 'framer-motion'
import { siteContent, type CaseStudyItem } from '@/data/content'
import { Target, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react'

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDF9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B5646F] bg-[#F9E4E8] px-3.5 py-1.5 rounded-full">
            Studi Kasus Kampanye
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E] mt-3">
            Bagaimana Putri Membantu Mencapai KPI Brand
          </h2>
          <p className="text-sm sm:text-base text-[#6B555B] mt-2">
            Dari pemahaman brief terarah hingga eksekusi visual autentik yang memicu interaksi dan pembelian.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteContent.caseStudies.map((cs: CaseStudyItem, idx: number) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ECC7CE] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              {/* Card Header: Brand & Category */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F9E4E8]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#968187]">
                      {cs.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#3B2A2E]">
                      {cs.brand}
                    </h3>
                  </div>
                  <span className="w-10 h-10 rounded-2xl bg-[#FFF5F7] border border-[#ECC7CE] flex items-center justify-center font-serif text-base font-bold text-[#B5646F]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Objective Section */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#813B44]">
                    <Target className="w-3.5 h-3.5 text-[#B5646F]" />
                    <span>Objective</span>
                  </div>
                  <p className="text-xs text-[#6B555B] leading-relaxed pl-5">
                    {cs.brief}
                  </p>
                </div>

                {/* Eksekusi Section */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#813B44]">
                    <Lightbulb className="w-3.5 h-3.5 text-[#B5646F]" />
                    <span>Format & Deliverables</span>
                  </div>
                  <p className="text-xs text-[#6B555B] leading-relaxed pl-5">
                    {cs.eksekusi}
                  </p>
                </div>
              </div>

              {/* Hasil Section (Highlight Box) */}
              <div className="mt-6 pt-4 border-t border-[#F9E4E8]">
                <div className="bg-[#FFF5F7] rounded-2xl p-4 border border-[#ECC7CE]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#B5646F] mb-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>Results</span>
                  </div>
                  <div className="text-xs font-bold text-[#3B2A2E] leading-relaxed">
                    {cs.hasil}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#968187] mt-2 pt-2 border-t border-[#F3CBD3]/60">
                    <AlertCircle className="w-3 h-3 text-[#B5646F] shrink-0" />
                    <span>{cs.note}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
