import { motion } from 'framer-motion'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from 'recharts'
import { siteContent } from '@/data/content'
import { MapPin, Users, BarChart3, Check } from 'lucide-react'

// Custom tooltip for charts
const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0]
    return (
      <div className="bg-white px-3 py-2 rounded-xl shadow-lg border border-[#F3CBD3] text-xs font-semibold text-[#3B2A2E]">
        <span style={{ color: data.payload.color }}>●</span> {data.name}: {data.value}%
      </div>
    )
  }
  return null
}

const CustomBarTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white px-3 py-2 rounded-xl shadow-lg border border-[#F3CBD3] text-xs font-semibold text-[#3B2A2E]">
        Usia {data.range}: <span className="text-[#B5646F]">{data.percentage}%</span>
      </div>
    )
  }
  return null
}

export const Audience: React.FC = () => {
  const { sectionTitle, sectionSubtitle, sourceLabel, gender, ageGroups, topCities, keyInsights } =
    siteContent.audience

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#F3CBD3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B5646F] bg-[#F9E4E8] px-3.5 py-1.5 rounded-full">
            Profil Audiens
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2A2E] mt-3">
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#6B555B] mt-2">
            {sectionSubtitle}
          </p>
          <div className="mt-3 text-xs font-medium text-[#968187] italic">
            {sourceLabel}
          </div>
        </div>

        {/* 3-Card Demographics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Gender Distribution Donut */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#FFF8F9] rounded-3xl p-6 border border-[#ECC7CE] flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-[#3B2A2E] flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#B5646F]" />
                  <span>Komposisi Gender</span>
                </h3>
                <span className="text-xs font-semibold text-[#813B44] bg-[#F9E4E8] px-2.5 py-1 rounded-full">
                  82% Wanita
                </span>
              </div>
            </div>

            <div className="w-full h-48 my-2 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<CustomPieTooltip />} />
                  <Pie
                    data={gender}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {gender.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFFFFF" strokeWidth={2} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Center Stat */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-serif text-xl font-bold text-[#3B2A2E]">82%</span>
                <span className="text-[10px] text-[#813B44] font-medium">Wanita</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 pt-3 border-t border-[#F3CBD3]/70 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#B5646F]" />
                <span className="font-medium text-[#3B2A2E]">Wanita (82%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E8CCD2]" />
                <span className="font-medium text-[#6B555B]">Pria (18%)</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Age Demographics Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#FFF8F9] rounded-3xl p-6 border border-[#ECC7CE] flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-[#3B2A2E] flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#B5646F]" />
                  <span>Kelompok Usia</span>
                </h3>
                <span className="text-xs font-semibold text-[#813B44] bg-[#F9E4E8] px-2.5 py-1 rounded-full">
                  48% Usia 25-34
                </span>
              </div>
            </div>

            <div className="w-full h-48 my-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageGroups} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="range"
                    stroke="#968187"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#F3CBD3' }}
                  />
                  <YAxis
                    stroke="#968187"
                    fontSize={10}
                    tickLine={false}
                    axisLine={{ stroke: '#F3CBD3' }}
                    unit="%"
                  />
                  <Tooltip content={<CustomBarTooltip />} />
                  <Bar
                    dataKey="percentage"
                    fill="#B5646F"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-3 border-t border-[#F3CBD3]/70 text-center">
              <span className="text-xs font-semibold text-[#813B44]">
                Core Audience: Usia Produktif & Ibu Muda
              </span>
            </div>
          </motion.div>

          {/* Card 3: Top 5 Cities & Geographic Reach */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#FFF8F9] rounded-3xl p-6 border border-[#ECC7CE] flex flex-col justify-between shadow-2xs md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-[#3B2A2E] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#B5646F]" />
                  <span>Sebaran Wilayah</span>
                </h3>
                <span className="text-xs font-semibold text-[#813B44] bg-[#F9E4E8] px-2.5 py-1 rounded-full">
                  Top 5 Kota
                </span>
              </div>
            </div>

            <div className="space-y-2 my-2">
              {topCities.map((item, idx) => (
                <div
                  key={item.city}
                  className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#F3CBD3]/60 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#F9E4E8] text-[#813B44] font-bold text-[10px] flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-[#3B2A2E]">{item.city}</span>
                  </div>
                  <span className="font-bold text-[#B5646F]">{item.share}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#F3CBD3]/70 text-center">
              <span className="text-xs font-semibold text-[#813B44]">
                Jangkauan: Jabodetabek, Jawa & Nasional
              </span>
            </div>
          </motion.div>
        </div>

        {/* Key Takeaways Bar */}
        <div className="mt-8 bg-[#FFF5F7] rounded-2xl p-5 border border-[#ECC7CE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#813B44]">
            <span className="w-2 h-2 rounded-full bg-[#B5646F]" />
            <span>Kelebihan Audiens Putri Ayu:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#3B2A2E]">
            {keyInsights.map((insight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <span className="leading-snug">{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
