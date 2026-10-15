import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteContent } from '@/data/content'
import { Users, Eye, TrendingUp, Award, Calendar } from 'lucide-react'

// Simple counter component with easeOut animation
const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1400 // ms
    const stepTime = 20
    const totalSteps = duration / stepTime
    const increment = target / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export const StatsBar: React.FC = () => {
  const { totalFollowers, avgViews, engagementRate, brandCollaborations, dataMonthYear } =
    siteContent.stats

  const statsItems = [
    {
      id: 'stat-followers',
      label: 'Total Followers',
      sub: 'TikTok & Instagram',
      icon: Users,
      value: totalFollowers ? totalFollowers : '—',
      isNumeric: false,
    },
    {
      id: 'stat-views',
      label: 'Avg. Views / Video',
      sub: 'Performa organik 30 hari',
      icon: Eye,
      value: avgViews ? avgViews : '—',
      isNumeric: false,
    },
    {
      id: 'stat-engagement',
      label: 'Engagement Rate',
      sub: 'Rata-rata interaksi',
      icon: TrendingUp,
      value: engagementRate ? `${engagementRate}%` : '—',
      isNumeric: false,
    },
    {
      id: 'stat-brands',
      label: 'Brand Partners',
      sub: 'Kampanye terverifikasi',
      icon: Award,
      numericTarget: brandCollaborations,
      suffix: '+',
      isNumeric: true,
    },
  ]

  return (
    <section id="statistik" className="scroll-mt-20 py-12 sm:py-16 bg-white border-y border-[#F3CBD3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F9E4E8]">
          <h2 className="font-serif text-2xl font-bold text-[#3B2A2E]">
            Metrik Utama
          </h2>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#813B44] bg-[#F9E4E8] px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5 text-[#B5646F]" />
            <span>{dataMonthYear}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statsItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#FFF8F9] rounded-2xl p-5 sm:p-6 border border-[#ECC7CE]/70 hover:border-[#B5646F]/50 transition-all shadow-2xs hover:shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#B5646F] shadow-2xs border border-[#F3CBD3]">
                    <Icon className="w-4 h-4 text-[#B5646F]" />
                  </div>
                  <span className="text-xs font-semibold text-[#813B44] leading-tight">
                    {item.label}
                  </span>
                </div>

                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2A2E] tracking-tight">
                  {item.isNumeric && item.numericTarget ? (
                    <AnimatedCounter target={item.numericTarget} suffix={item.suffix} />
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>

                <p className="text-[11px] text-[#968187] mt-2">
                  {item.sub}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
