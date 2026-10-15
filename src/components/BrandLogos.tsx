import React from 'react'

interface LogoProps {
  className?: string
}

// 1. Garnier - Official SVG Asset
export const GarnierLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/garnier.svg" alt="Garnier" className={`${className} w-auto object-contain max-w-[170px] filter brightness-95 hover:brightness-105 transition-all`} />
)

// 2. Vaseline - Official SVG Asset
export const VaselineLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/vaseline.svg" alt="Vaseline" className={`${className} w-auto object-contain max-w-[170px] filter brightness-95 hover:brightness-105 transition-all`} />
)

// 3. Hanasui - Official Asset
export const HanasuiLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/hanasui.png" alt="Hanasui" className={`${className} w-auto object-contain max-w-[170px] transition-all`} />
)

// 4. Sido Muncul - Official SVG Asset
export const SidomunculLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/sidomuncul.svg" alt="Sido Muncul" className={`${className} w-auto object-contain max-w-[190px] transition-all`} />
)

// 5. PLN - Official SVG Asset
export const PlnLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/pln.svg" alt="PLN" className={`${className} w-auto object-contain max-w-[160px] transition-all`} />
)

// 6. Motherlove - Official Asset
export const MotherloveLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/motherlove.png" alt="Motherlove" className={`${className} w-auto object-contain max-w-[180px] transition-all`} />
)

// 7. Y.O.U Beauty - Official Asset
export const YouLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/you.png" alt="Y.O.U Beauty" className={`${className} w-auto object-contain max-w-[160px] transition-all`} />
)

// 8. Reglow - Official Asset
export const ReglowLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/reglow.png" alt="Reglow" className={`${className} w-auto object-contain max-w-[170px] transition-all`} />
)

// 9. Blackmores - Official SVG Asset
export const BlackmoresLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/blackmores.svg" alt="Blackmores" className={`${className} w-auto object-contain max-w-[190px] transition-all`} />
)

// 10. Salsa Cosmetics - Official Asset
export const SalsaLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/salsa.png" alt="Salsa Cosmetics" className={`${className} w-auto object-contain max-w-[160px] transition-all`} />
)

// 11. Cedea Seafood - Official Asset
export const CedeaLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/cedea.png" alt="Cedea" className={`${className} w-auto object-contain max-w-[170px] transition-all`} />
)

// 12. Madu Yayle - Official SVG Asset
export const YayleLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/yayle.svg" alt="Yayle" className={`${className} w-auto object-contain max-w-[160px] transition-all`} />
)

// 13. Kojie San / Kojine - Official Asset
export const KojiesanLogo: React.FC<LogoProps> = ({ className = 'h-12 sm:h-14' }) => (
  <img src="/logos/kojiesan.png" alt="Kojie San" className={`${className} w-auto object-contain max-w-[170px] transition-all`} />
)

// 14. Garnier Men - Official Styling
export const GarnierMenLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img src="/logos/garnier.svg" alt="Garnier" className="h-full w-auto object-contain" />
    <span className="bg-[#1B4332] text-white font-sans font-black text-xs sm:text-sm px-2 py-0.5 rounded tracking-widest uppercase">
      MEN
    </span>
  </div>
)

// 15. Lelap - Authentic Pharmaceutical Wordmark (Pure Typography, NO Cartoon Icons)
export const LelapLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2B3A8C]">
      Lelap
    </span>
    <span className="text-[9px] uppercase tracking-wider font-semibold text-[#5B6BB4] -mt-1">
      Herbal Supplement
    </span>
  </div>
)

// 16. KapsulKutuk - Authentic Channa Striata Wordmark (Pure Typography)
export const KapsulKutukLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-sans text-xl sm:text-2xl font-black tracking-wider text-[#0F766E] uppercase">
      KAPSUL KUTUK
    </span>
    <span className="text-[9px] uppercase tracking-widest font-bold text-[#14B8A6] -mt-0.5">
      Premium Extract
    </span>
  </div>
)

// 17. Susu Almond - Authentic Health Nutrition Wordmark (Pure Typography)
export const SusuAlmondLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-sans text-xl sm:text-2xl font-extrabold tracking-wide text-[#92400E] uppercase">
      SUSU ALMOND
    </span>
    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#D97706] -mt-0.5">
      Pure Plant Based
    </span>
  </div>
)

// 18. Hegerbaby - Gentle Baby Care Wordmark (Pure Typography)
export const HegerbabyLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#0284C7] lowercase">
      hegerbaby
    </span>
    <span className="text-[9px] tracking-wider font-medium text-[#7DD3FC] -mt-1">
      baby care essentials
    </span>
  </div>
)

// 19. Lampu Tulip - Modern Home Interior Wordmark (Pure Typography)
export const LampuTulipLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#9F1239] uppercase">
      LAMPU TULIP
    </span>
    <span className="text-[9px] uppercase tracking-widest font-medium text-[#E11D48] -mt-0.5">
      Home & Living
    </span>
  </div>
)

// 20. Soohoo - Smart Tech Wordmark (Pure Typography)
export const SoohooLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-sans text-2xl sm:text-3xl font-black tracking-widest text-[#27272A] uppercase">
      SOOHOO
    </span>
    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#71717A] -mt-1">
      Smart Appliances
    </span>
  </div>
)

// 21. Earphone Mirror Space - Audio Tech Wordmark (Pure Typography)
export const EarphoneLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-sans text-xl sm:text-2xl font-black tracking-wider text-[#1E293B] uppercase">
      MIRROR SPACE
    </span>
    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#64748B] -mt-0.5">
      Acoustic Audio
    </span>
  </div>
)

// 22. Buena - Fashion & Beauty Wordmark (Pure Typography)
export const BuenaLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-serif text-2xl sm:text-3xl font-bold italic tracking-wide text-[#6B21A8]">
      Buena
    </span>
    <span className="text-[9px] uppercase tracking-widest font-medium text-[#A855F7] -mt-1">
      Collection
    </span>
  </div>
)

// 23. Permen - Confectionery Wordmark (Pure Typography)
export const PermenLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-sans text-2xl sm:text-3xl font-black tracking-wider text-[#9D174D] uppercase">
      PERMEN
    </span>
    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#F472B6] -mt-1">
      Sweet Confectionery
    </span>
  </div>
)

// 24. Odol - Dental Hygiene Wordmark (Pure Typography)
export const OdolLogo: React.FC<LogoProps> = ({ className = 'h-10 sm:h-12' }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <span className="font-sans text-2xl sm:text-3xl font-black tracking-widest text-[#065F46] uppercase">
      ODOL
    </span>
    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#10B981] -mt-1">
      Oral Healthcare
    </span>
  </div>
)

// Master Logo Resolver with generous sizing
export const BrandLogoResolver: React.FC<{ name: string; className?: string }> = ({ name, className = 'h-12 sm:h-14 lg:h-16' }) => {
  switch (name) {
    case 'Garnier':
      return <GarnierLogo className={className} />
    case 'Vaseline':
      return <VaselineLogo className={className} />
    case 'Hanasui':
      return <HanasuiLogo className={className} />
    case 'Sidomuncul':
      return <SidomunculLogo className={className} />
    case 'PLN':
      return <PlnLogo className={className} />
    case 'Motherlove':
      return <MotherloveLogo className={className} />
    case 'YOU':
      return <YouLogo className={className} />
    case 'Reglow':
      return <ReglowLogo className={className} />
    case 'Blackmorest':
      return <BlackmoresLogo className={className} />
    case 'Kojine':
      return <KojiesanLogo className={className} />
    case 'Salsa':
      return <SalsaLogo className={className} />
    case 'Cedea':
      return <CedeaLogo className={className} />
    case 'Madu Yayle':
      return <YayleLogo className={className} />
    case 'Garnier Men':
      return <GarnierMenLogo className={className} />
    case 'Lelap':
      return <LelapLogo className={className} />
    case 'KapsulKutuk':
      return <KapsulKutukLogo className={className} />
    case 'Susu Almond':
      return <SusuAlmondLogo className={className} />
    case 'Hegerbaby':
      return <HegerbabyLogo className={className} />
    case 'Lampu Tulip':
      return <LampuTulipLogo className={className} />
    case 'Soohoo':
      return <SoohooLogo className={className} />
    case 'Earphone Mirror Space':
      return <EarphoneLogo className={className} />
    case 'Buena':
      return <BuenaLogo className={className} />
    case 'Permen':
      return <PermenLogo className={className} />
    case 'Odol':
      return <OdolLogo className={className} />
    default:
      return (
        <span className="font-serif font-bold text-xl text-[#3B2A2E]">
          {name}
        </span>
      )
  }
}
