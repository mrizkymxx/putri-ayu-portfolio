import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteContent, type ShowcaseItem } from '@/data/content'
import { Eye, Bookmark, ExternalLink, Play } from 'lucide-react'

export const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Semua')

  const filteredItems = siteContent.showcaseItems.filter((item) => {
    if (activeTab === 'Semua') return true
    return item.category.toLowerCase() === activeTab.toLowerCase()
  })

  return (
    <section id="konten" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FDF9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B5646F] bg-[#F9E4E8] px-3.5 py-1.5 rounded-full">
            Portofolio Video
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E] mt-3">
            Showcase Konten Terpilih
          </h2>
          <p className="text-sm sm:text-base text-[#6B555B] mt-2">
            Contoh gaya penyampaian ulasan yang natural, estetis, dan terbukti menghasilkan interaksi nyata.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {siteContent.showcaseTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center ${
                activeTab === tab
                  ? 'bg-[#B5646F] text-white shadow-sm'
                  : 'bg-white hover:bg-[#F9E4E8] text-[#6B555B] hover:text-[#3B2A2E] border border-[#ECC7CE]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Video Cards Grid (9:16 aspect ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: ShowcaseItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#ECC7CE] hover:border-[#B5646F] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
              >
                {/* 9:16 Thumbnail Container with Lazy Loading & Direct Play Link */}
                <a
                  href={item.contentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-[9/16] bg-gradient-to-br from-[#F9E4E8] via-[#ECC7CE] to-[#DC9FA9] overflow-hidden block cursor-pointer group/thumb"
                  title={`Tonton ${item.title} di ${item.platform}`}
                >
                  {/* Real Image or Decorative Pattern */}
                  {item.thumbnailUrl && (
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to gradient if image fails
                        (e.currentTarget as HTMLElement).style.display = 'none'
                      }}
                    />
                  )}

                  {/* Aesthetic vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

                  {/* Play Button Overlay - Clickable */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg group-hover/thumb:scale-115 group-hover/thumb:bg-[#B5646F] text-white transition-all duration-300 border border-white/40">
                      <Play className="w-7 h-7 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Top Badges: Platform & Category */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide">
                      {item.platform}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#813B44] text-[11px] font-bold border border-white/50">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/20 pointer-events-none">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#F3CBD3]" />
                      <span>{item.views} Views</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-[#F3CBD3]" />
                      <span>{item.saves} Saves</span>
                    </div>
                  </div>
                </a>

                {/* Card Body & Description */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#3B2A2E] group-hover:text-[#B5646F] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B555B] mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Direct Link to original video */}
                  <a
                    href={item.contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFF5F7] hover:bg-[#B5646F] text-[#813B44] hover:text-white border border-[#ECC7CE] text-xs font-semibold transition-all min-h-[44px]"
                  >
                    <span>Buka di {item.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footnote note */}
        <div className="text-center mt-10">
          <p className="text-xs text-[#968187]">
            * Klik salah satu kartu untuk menonton langsung di aplikasi TikTok / Instagram resmi.
          </p>
        </div>
      </div>
    </section>
  )
}
