import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import VisionPurposeSection from '@/components/VisionPurposeSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import BenefitsSection from '@/components/BenefitsSection'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen" id="top">
      <Header />
      <HeroSection />
      
      {/* Quick preview sections */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-12">¿Qué buscás?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/candidatos" className="bg-gradient-to-br from-[#004C97] to-[#003a72] text-white rounded-3xl p-12 shadow-xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🇦🇷</div>
              <h3 className="text-3xl font-bold mb-4">Soy Candidato</h3>
              <p className="text-white/90 text-lg">Quiero trabajar en Europa</p>
            </Link>
            <Link href="/empresas" className="bg-gradient-to-br from-[#fb923c] to-[#ea580c] text-white rounded-3xl p-12 shadow-xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🇪🇺</div>
              <h3 className="text-3xl font-bold mb-4">Soy Empresa</h3>
              <p className="text-white/90 text-lg">Busco talento argentino</p>
            </Link>
          </div>
        </div>
      </section>
      
      <MissionSection />
      <VisionPurposeSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <Footer />
    </main>
  )
}


