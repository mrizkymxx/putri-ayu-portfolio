import { siteContent, type BrandItem } from '@/data/content'
import { BrandLogoResolver } from './BrandLogos'

export const BrandsGrid: React.FC = () => {
  const confirmed = siteContent.brands.filter((b) => b.confirmed)

  // Split into 2 balanced rows
  const row1 = confirmed.slice(0, Math.ceil(confirmed.length / 2))
  const row2 = confirmed.slice(Math.ceil(confirmed.length / 2))

  return (
    <section id="brand" className="scroll-mt-20 py-16 sm:py-20 bg-white border-y border-[#F3CBD3]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header - No Clutter */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2A2E]">
            Brand yang Pernah Bekerja Sama
          </h2>
          <p className="text-sm text-[#6B555B] mt-1.5">
            60+ produk perawatan, ibu & anak, dan kebutuhan keluarga
          </p>
        </div>
      </div>

      {/* Infinite Seamless Running Marquee with Edge Fades */}
      <div className="relative w-full overflow-hidden space-y-6">
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Row 1: Running Left - Pure Infinite Loop */}
        <div className="marquee-group flex">
          <div className="marquee-track-left flex items-center">
            {row1.map((brand: BrandItem, idx: number) => (
              <div
                key={`r1-a-${brand.name}-${idx}`}
                className="mx-8 sm:mx-12 shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                title={brand.name}
              >
                <BrandLogoResolver name={brand.name} className="h-11 sm:h-13 md:h-15 max-w-[190px]" />
              </div>
            ))}
          </div>
          <div className="marquee-track-left flex items-center" aria-hidden="true">
            {row1.map((brand: BrandItem, idx: number) => (
              <div
                key={`r1-b-${brand.name}-${idx}`}
                className="mx-8 sm:mx-12 shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                title={brand.name}
              >
                <BrandLogoResolver name={brand.name} className="h-11 sm:h-13 md:h-15 max-w-[190px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Running Right (Reverse) - Pure Infinite Loop */}
        <div className="marquee-group flex">
          <div className="marquee-track-right flex items-center">
            {row2.map((brand: BrandItem, idx: number) => (
              <div
                key={`r2-a-${brand.name}-${idx}`}
                className="mx-8 sm:mx-12 shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                title={brand.name}
              >
                <BrandLogoResolver name={brand.name} className="h-11 sm:h-13 md:h-15 max-w-[190px]" />
              </div>
            ))}
          </div>
          <div className="marquee-track-right flex items-center" aria-hidden="true">
            {row2.map((brand: BrandItem, idx: number) => (
              <div
                key={`r2-b-${brand.name}-${idx}`}
                className="mx-8 sm:mx-12 shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                title={brand.name}
              >
                <BrandLogoResolver name={brand.name} className="h-11 sm:h-13 md:h-15 max-w-[190px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
