import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'
import Link from 'next/link'
import { Globe, Home, Briefcase, DollarSign, AlertCircle, CheckCircle, Plane, Clock } from 'lucide-react'

const requirements = [
  {
    icon: Globe,
    title: 'Nivel de inglés alto',
    description: 'Comunicación fluida en inglés y actitud motivada para seguir aprendiendo.',
    required: true,
  },
  {
    icon: CheckCircle,
    title: 'Responsabilidad, compromiso y polivalencia',
    description: 'Profesionales serios con capacidad de adaptación y mentalidad proactiva.',
    required: true,
  },
  {
    icon: Briefcase,
    title: 'Buena constitución física',
    description: 'Capacidad para trabajar en entornos que pueden requerir esfuerzo físico.',
    required: true,
  },
  {
    icon: Plane,
    title: 'Gastos de traslado',
    description: 'Pueden ser gestionados por la agencia o de forma individual según acuerdo.',
    required: false,
  },
  {
    icon: Clock,
    title: 'Disponibilidad TOTAL',
    description: 'Para desplazarse dentro del mes corriente una vez confirmada la oferta.',
    required: true,
  },
]

export default function CandidatosPage() {
  return (
    <main className="min-h-screen" id="top">
      <Header />
      
      {/* Hero Candidatos */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
            alt="Persona con maleta viajando"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004C97]/90 to-[#004C97]/60" />
        </div>
        <div className="container-max section-padding relative z-10 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
              Tu oportunidad de trabajar en Europa está aquí
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Queremos acercarte las oportunidades laborales europeas que merecés. Te ayudamos a resolver alojamiento, traslado y conseguir trabajo seguro antes de viajar.
            </p>
          </div>
        </div>
      </section>

      {/* Holanda: Oportunidad destacada */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Holanda: salarios competitivos a nivel mundial</h2>
                  <p className="text-xl text-white/90 leading-relaxed mb-4">
                    Con <strong>€14.40 por hora</strong> (uno de los salarios mínimos más altos del mundo), Holanda ofrece oportunidades únicas para argentinos que buscan estabilidad económica y crecimiento profesional.
                  </p>
                  <p className="text-lg text-white/80">
                    Muchos argentinos viajan por <strong>temporadas laborales</strong>, lo que les permite generar ingresos en euros, ganar experiencia internacional y conocer Europa desde adentro.
                  </p>
                </div>
              </div>
            </div>

            {/* Proceso y Acompañamiento */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 text-center">
              Cómo te acompañamos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#F2F2F2] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#004C97] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Asesoramiento inicial</h3>
                <p className="text-gray-700">Evaluamos tu perfil y te orientamos sobre las mejores oportunidades según tu experiencia.</p>
              </div>
              <div className="bg-[#F2F2F2] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#004C97] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Oferta de trabajo SEGURA</h3>
                <p className="text-gray-700">No comprás pasaje hasta tener una oferta confirmada. Trabajamos con empresas verificadas.</p>
              </div>
              <div className="bg-[#F2F2F2] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#004C97] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Gestión integral</h3>
                <p className="text-gray-700">Documentos, alojamiento, traslado y preparación cultural para que llegues listo.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#004C97]/20 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#004C97]/10 flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-6 h-6 text-[#004C97]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Compromiso de asistencia durante el viaje</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Te acompañamos desde que salís de Argentina hasta tu presentación con la empresa. No estás solo en este proceso: <strong>Puente Europa está con vos en cada paso</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos Mínimos */}
      <section className="section-padding bg-gradient-to-br from-[#F2F2F2] to-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-amber-900">Cupos limitados</h3>
              </div>
              <p className="text-amber-800">
                Lamentamos informar que trabajamos con <strong>cupos limitados</strong> para asegurar calidad en el proceso y seguimiento personalizado de cada candidato.
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 text-center">
              Requisitos mínimos indispensables
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Para garantizar competitividad internacional, aplicamos filtros de calidad rigurosos:
            </p>

            <div className="space-y-6">
              {requirements.map((req, index) => {
                const Icon = req.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${req.required ? 'bg-[#004C97]' : 'bg-gray-400'}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-[#0f172a]">{req.title}</h3>
                        {req.required && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">OBLIGATORIO</span>
                        )}
                      </div>
                      <p className="text-gray-700">{req.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Responsabilidades */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-semibold text-[#004C97] mb-4">Opciones de gestión de gastos</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los <strong>gastos de traslado y llegada</strong> pueden gestionarse de dos formas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>Gestionados por la agencia:</strong> Puente Europa coordina todo y lo incluye en el paquete de servicios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold text-xl">•</span>
                  <span className="text-gray-700"><strong>De forma individual:</strong> El candidato gestiona su propio traslado y asume la responsabilidad económica.</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Cada modalidad define claramente la responsabilidad de cada parte antes de iniciar el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <TestimonialsSection />

      {/* CTA Final */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
              ¿Cumplís con los requisitos?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Postulate ahora y comenzá tu proceso hacia Europa. Te evaluamos, asesoramos y conectamos con oportunidades reales.
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-10 py-4 bg-[#004C97] text-white rounded-lg font-bold text-lg hover:bg-[#003a72] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Postularme Ahora →
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              * Cupos limitados. Postulaciones sujetas a evaluación inicial.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
