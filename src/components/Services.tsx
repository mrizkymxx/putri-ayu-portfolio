import { motion } from 'framer-motion'
import { siteContent, type PackageItem } from '@/data/content'
import { Check, MessageCircle, PlusCircle } from 'lucide-react'

export const Services: React.FC = () => {
  const { sectionTitle, sectionSubtitle, packages, addons, ctaRateCard } = siteContent.services

  return (
    <section id="layanan" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white border-y border-[#F3CBD3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B5646F] bg-[#F9E4E8] px-3.5 py-1.5 rounded-full">
            Paket Kerjasama
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E] mt-3">
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#6B555B] mt-2">
            {sectionSubtitle}
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {packages.map((pkg: PackageItem) => {
            const isPopular = pkg.popular
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#FFF5F7] to-white border-2 border-[#B5646F] shadow-xl md:-translate-y-2'
                    : 'bg-white border border-[#ECC7CE] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B5646F] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#968187]">
                      {pkg.recommendedFor}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#3B2A2E] mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#6B555B] mt-2 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 my-6 pt-4 border-t border-[#F3CBD3]/60">
                    <span className="text-xs font-bold text-[#813B44] uppercase tracking-wider">
                      Deliverables:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#3B2A2E]">
                          <span className="w-4 h-4 rounded-full bg-[#F9E4E8] text-[#B5646F] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rate Card CTA Button (NO NUMERIC FEES SHOWN) */}
                <div className="pt-6 border-t border-[#F3CBD3]/60">
                  <a
                    href={siteContent.creator.whatsapp.rateCardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all min-h-[48px] shadow-xs hover:shadow ${
                      isPopular
                        ? 'bg-[#B5646F] hover:bg-[#9E4D58] text-white'
                        : 'bg-[#FFF5F7] hover:bg-[#B5646F] text-[#813B44] hover:text-white border border-[#ECC7CE]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{ctaRateCard}</span>
                  </a>
                  <p className="text-[10px] text-center text-[#968187] mt-2">
                    Penawaran resmi langsung via WhatsApp
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Add-on Services Section */}
        <div className="mt-16 bg-[#FFF9FA] rounded-3xl p-6 sm:p-8 border border-[#ECC7CE]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-[#F3CBD3]/60 gap-2">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A2E] flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-[#C9A66B]" />
                <span>Layanan Tambahan (Add-On)</span>
              </h3>
              <p className="text-xs text-[#6B555B] mt-0.5">
                Kustomisasi paket kampanye sesuai kebutuhan hak penayangan dan percepatan deadline.
              </p>
            </div>
            <a
              href={siteContent.creator.whatsapp.rateCardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B5646F] hover:text-[#9E4D58]"
            >
              <span>Konsultasi Add-on</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-white rounded-2xl p-4 border border-[#ECC7CE]/70 shadow-2xs hover:border-[#B5646F]/50 transition-colors"
              >
                <div className="text-xs font-bold text-[#3B2A2E]">{addon.name}</div>
                <div className="text-[11px] text-[#6B555B] mt-1.5 leading-relaxed">{addon.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
