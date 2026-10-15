import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { StatsBar } from '@/components/StatsBar'
import { About } from '@/components/About'
import { Audience } from '@/components/Audience'
import { Showcase } from '@/components/Showcase'
import { BrandsGrid } from '@/components/BrandsGrid'
import { CaseStudies } from '@/components/CaseStudies'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { MediaKit } from '@/components/MediaKit'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF9FA] text-[#3B2A2E] font-sans">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Stats Bar */}
        <StatsBar />

        {/* 4. Tentang Saya */}
        <About />

        {/* 5. Audiens (Recharts) */}
        <Audience />

        {/* 6. Showcase Konten */}
        <Showcase />

        {/* 7. Brand yang Pernah Bekerja Sama */}
        <BrandsGrid />

        {/* 8. Case Study */}
        <CaseStudies />

        {/* 9. Layanan & Paket */}
        <Services />

        {/* 10. Alur Kerja */}
        <Process />

        {/* 11. Testimoni */}
        <Testimonials />

        {/* 12. Media Kit */}
        <MediaKit />

        {/* 13. Kontak */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  )
}

export default App
