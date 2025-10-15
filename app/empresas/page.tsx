import Header from '@/components/Header'
import BenefitsSection from '@/components/BenefitsSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function EmpresasPage() {
  return (
    <main className="min-h-screen" id="top">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-[#004C97] to-[#003a72] text-white py-20">
          <div className="container-max section-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluciones para Empresas</h1>
            <p className="text-xl max-w-3xl">Conectamos empresas europeas con talento argentino calificado. Gestión integral de reclutamiento internacional.</p>
          </div>
        </section>
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  )
}

