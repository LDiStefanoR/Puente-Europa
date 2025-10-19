import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'
import Link from 'next/link'
import { Globe, Home, Briefcase, DollarSign, AlertCircle, CheckCircle, Plane, Clock, Heart, TrendingUp, Car, Users } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Salario de primer mundo',
    description: '€15.50/hora mínimo',
    highlight: 'Uno de los salarios más altos del mundo',
    color: 'from-amber-500 to-yellow-600',
  },
  {
    icon: Home,
    title: 'Alojamiento incluido',
    description: 'Casa provista',
    highlight: 'Sin preocupaciones de búsqueda',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Car,
    title: 'Transporte garantizado',
    description: 'Vehículo / Driver / Bicicleta eléctrica',
    highlight: 'Movilidad desde el día 1',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Briefcase,
    title: 'Trabajo garantizado',
    description: 'No viajás sin oferta confirmada',
    highlight: 'Empresas verificadas',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Plane,
    title: 'Experiencia internacional',
    description: 'Viajá, conocé, crecé',
    highlight: 'CV enriquecido',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Globe,
    title: 'Mejorá tu inglés',
    description: 'Inmersión lingüística diaria',
    highlight: 'Habilidades profesionales',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Users,
    title: 'Ideal para parejas',
    description: 'Holanda acepta trabajar en pareja',
    highlight: 'Vivir la experiencia juntos',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Clock,
    title: 'Temporadas flexibles',
    description: 'Mínimo 6 meses',
    highlight: 'Opción de quedarte o ganar dinero y volver',
    color: 'from-orange-500 to-red-600',
  },
]

const requirements = [
  {
    icon: CheckCircle,
    title: 'Pasaporte europeo vigente',
    description: 'Debe estar disponible y en vigor al momento de entrar a Holanda.',
    required: true,
  },
  {
    icon: Clock,
    title: 'Disponibilidad inmediata',
    description: 'Desplazamiento confirmado dentro del mes corriente. Fecha de ingreso a la acomodación definida.',
    required: true,
  },
  {
    icon: Globe,
    title: 'Inglés funcional B1',
    description: 'Suficiente para ir de compras, trabajar y sobrevivir en la vida diaria. Demostrable mediante conversación o certificado.',
    required: true,
  },
  {
    icon: Plane,
    title: 'Traslado inicial cubierto',
    description: 'Capacidad de costear el pasaje hasta Holanda en tiempo y forma según fechas acordadas.',
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
              Tu sueño europeo, nuestra misión
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed font-light">
              Queremos acercar las oportunidades que merecés. <strong>Trabajá en Europa, viví la experiencia, volvé transformado.</strong>
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <p className="text-lg italic">
                "No es solo un trabajo. Es el primer paso hacia una nueva vida, un viaje, una historia que vas a contar con orgullo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Beneficios Destacados */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
              8 razones para elegir Europa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beneficios reales que transforman tu carrera y tu vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className={`bg-gradient-to-br ${benefit.color} text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-lg font-semibold mb-2">{benefit.description}</p>
                  <p className="text-sm text-white/80">{benefit.highlight}</p>
                </div>
              )
            })}
          </div>

          {/* Destaque especial salario */}
          <div className="mt-12 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-3xl p-10 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl">💰</span>
              <div className="text-left">
                <p className="text-white text-lg font-semibold">Ganancia por hora</p>
                <p className="text-7xl font-extrabold text-white drop-shadow-lg">€15.50</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-white/95">Uno de los salarios más altos del mundo</p>
            <p className="text-lg text-white/80 mt-2">Ganancia en euros = poder adquisitivo global</p>
          </div>
        </div>
      </section>

      {/* Proceso y Acompañamiento */}
      <section className="section-padding bg-gradient-to-br from-[#F2F2F2] to-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 text-center">
              Cómo te acompañamos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-[#004C97]/20">
                <div className="w-16 h-16 rounded-full bg-[#004C97] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Asesoramiento inicial</h3>
                <p className="text-gray-700">Evaluamos tu perfil y te orientamos sobre las mejores oportunidades.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-green-500/50">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">✅ Oferta SEGURA primero</h3>
                <p className="text-gray-700"><strong>NO comprás pasaje</strong> hasta tener oferta confirmada. Trabajamos con empresas verificadas.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-[#004C97]/20">
                <div className="w-16 h-16 rounded-full bg-[#004C97] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Gestión integral</h3>
                <p className="text-gray-700">Documentos, alojamiento, traslado y preparación cultural.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] rounded-3xl p-8 md:p-10 shadow-xl text-white mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Compromiso de asistencia durante el viaje</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Te acompañamos <strong>desde que salís de Argentina hasta tu presentación con la empresa</strong>. No estás solo: Puente Europa está con vos en cada paso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos Mínimos */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-amber-900">⚠️ Cupos limitados</h3>
              </div>
              <p className="text-amber-800 leading-relaxed">
                Trabajamos con <strong>cupos limitados</strong> para asegurar seguimiento personalizado de calidad. Postulaciones sujetas a evaluación inicial.
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 text-center">
              Requisitos indispensables para postularte
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Criterios de competitividad internacional que aseguran tu éxito en Europa
            </p>

            <div className="space-y-6">
              {requirements.map((req, index) => {
                const Icon = req.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#004C97]/50 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#004C97] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-[#0f172a]">{req.title}</h3>
                        {req.required && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">OBLIGATORIO</span>
                        )}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{req.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Temporadas y opciones */}
      <section className="section-padding bg-gradient-to-br from-[#F2F2F2] to-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-8 text-center">
              Opciones de trabajo flexibles
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#004C97]/30">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Temporadas de 6 meses</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ideal para personas que quieren <strong>trabajar por temporadas</strong>, ganar dinero en euros y volver a casa. Muchas personas eligen esta modalidad para generar ingresos y regresar.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-500/30">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Opción de quedarte</h3>
                <p className="text-gray-700 leading-relaxed">
                  Si te gusta la experiencia, <strong>podés extender tu contrato</strong> y quedarte en Europa. Muchos candidatos deciden establecerse definitivamente.
                </p>
              </div>
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
            <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] rounded-3xl p-12 shadow-2xl text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Cumplís con los requisitos?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Postulate ahora y comenzá tu proceso hacia Europa. Te evaluamos, asesoramos y conectamos con oportunidades reales.
              </p>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#004C97] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Postularme Ahora →
              </Link>
              <p className="text-sm text-white/70 mt-4">
                * Cupos limitados. Postulaciones sujetas a evaluación inicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
