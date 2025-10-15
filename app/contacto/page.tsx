import Header from '@/components/Header'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function ContactoPage() {
  return (
    <main className="min-h-screen" id="top">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-[#004C97] to-[#003a72] text-white py-20">
          <div className="container-max section-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl max-w-3xl">¿Listo para dar el siguiente paso? Contactanos y comenzamos a trabajar juntos.</p>
          </div>
        </section>
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

