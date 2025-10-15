import Header from '@/components/Header'
import AboutSection from '@/components/AboutSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'

export default function CandidatosPage() {
  return (
    <main className="min-h-screen" id="top">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-[#004C97] to-[#003a72] text-white py-20">
          <div className="container-max section-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Oportunidades para Candidatos</h1>
            <p className="text-xl max-w-3xl">Conectamos talento argentino con empresas europeas. Tu puente hacia una carrera internacional.</p>
          </div>
        </section>
        <AboutSection />
        <HowItWorksSection />
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}

