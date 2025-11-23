import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'
import JobOffersSection from '@/components/JobOffersSection'
import Link from 'next/link'
import { Globe, Home, Briefcase, DollarSign, AlertCircle, CheckCircle, Plane, Clock, Heart, TrendingUp, Car, Users, MessageCircle, Shield, Star, Sparkles, ArrowRight } from 'lucide-react'

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
    title: 'Muchas ganas de aprender inglés y partir con nivel comunicacional básico',
    description: 'No necesitás ser experto. Con un nivel básico de comunicación y muchas ganas de aprender y mejorar, podés empezar. La inmersión diaria te ayudará a mejorar rápidamente.',
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

      {/* Ofertas de Trabajo */}
      <JobOffersSection />

      {/* Paquetes que Ofrecemos */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#004C97] to-[#003a72] text-white rounded-full px-6 py-3 mb-6">
                <Sparkles className="w-6 h-6" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Paquetes que Ofrecemos
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elegí el nivel de apoyo que necesitás. Todos incluyen entrevista inicial gratuita.
              </p>
            </div>

            {/* Entrevista Inicial Gratuita */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                    💬 Entrevista Inicial – GRATUITA
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Todas las personas reciben una entrevista inicial sin costo, donde evaluamos:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Situación actual', 'Nivel de inglés', 'Experiencia laboral', 'Tipo de oferta que mejor encaja', 'Necesidades logísticas', 'Capacidad económica para viajar', 'Urgencia del viaje'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4 italic">
                    👉 Esto nos permite asignar el paquete correcto, según cuánto apoyo real necesiten.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid de Paquetes */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Paquete Básico */}
              <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-gray-400 to-gray-600 p-6 text-white text-center">
                  <div className="text-5xl mb-3">🥉</div>
                  <h3 className="text-2xl font-bold mb-2">PAQUETE BÁSICO</h3>
                  <p className="text-white/90 text-sm">"Listo para Postular"</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Diseñado para personas que quieren aplicar por su cuenta, pero con una guía profesional.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      'Entrevista inicial gratuita',
                      'Asesoría completa sobre cómo trabajar en Holanda',
                      'CV europeo optimizado',
                      'Acceso y recomendación de ofertas publicadas',
                      'Análisis de perfil para saber a qué puestos puede aplicar',
                      'Checklist de documentos',
                      'Guía para comprar pasajes y preparar maleta',
                      'Consejos para movilidad interna en Holanda',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Ideal para:</p>
                    <p className="text-xs text-gray-600">
                      Personas independientes que ya tienen cierta experiencia viajando y solo necesitan estructura.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paquete Estándar */}
              <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-300 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white text-center">
                  <div className="text-5xl mb-3">🥈</div>
                  <h3 className="text-2xl font-bold mb-2">PAQUETE ESTÁNDAR</h3>
                  <p className="text-white/90 text-sm">"Postulación Guiada + Viaje Seguro"</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-semibold">
                    Incluye todo lo del Paquete Básico +
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      'Recomendación personalizada de ofertas según perfil',
                      'Acompañamiento durante la postulación',
                      'Preparación intensiva para entrevistas',
                      'Revisión completa del perfil laboral',
                      'Croquis del viaje desde Argentina hasta Holanda',
                      'Recomendación de alojamiento temporal',
                      'Seguro de alojamiento: varios días cubiertos',
                      'Asesoría en compra de vuelos',
                      'Envío de vouchers importantes (tren, bus, transfers)',
                      'Checklist final de viaje',
                      'Contacto directo por WhatsApp durante la preparación',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="text-xs font-semibold text-blue-700 mb-1">Ideal para:</p>
                    <p className="text-xs text-blue-600">
                      Quienes quieren viajar con todo organizado, sin correr riesgos logísticos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paquete Premium */}
              <div className="bg-white rounded-3xl shadow-xl border-2 border-amber-300 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  PREMIUM
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white text-center">
                  <div className="text-5xl mb-3">🥇</div>
                  <h3 className="text-2xl font-bold mb-2">PAQUETE PREMIUM</h3>
                  <p className="text-white/90 text-sm">"Llegás, Vivís y Trabajás"</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-semibold">
                    Incluye todo lo del Paquete Estándar +
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      'Nivelación de inglés para entrevista y trabajo',
                      'Monitoreo del viaje en tiempo real (WhatsApp 24/7)',
                      'Acompañamiento paso a paso desde tu casa → hasta tu nuevo hogar',
                      'Búsqueda y confirmación de alojamiento temporal',
                      'Seguro de alojamiento ampliado: cubre días extra',
                      'Organización total del viaje: ruta, horarios, vouchers',
                      'Transfer al alojamiento',
                      'Reglas y normas del lugar donde vivirá',
                      'Seguimiento por 30 días después de llegar',
                      'Apoyo emocional y cultural para la adaptación',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-xs font-semibold text-amber-700 mb-1">Ideal para:</p>
                    <p className="text-xs text-amber-600">
                      Personas que viajan solas, sin experiencia previa en Europa, o que quieren viajar con todo resuelto, seguro y monitoreado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA para más información */}
            <div className="bg-gradient-to-r from-[#004C97] to-[#003a72] rounded-3xl p-8 text-center text-white shadow-xl">
              <Shield className="w-12 h-12 mx-auto mb-4 text-white/90" />
              <h3 className="text-2xl font-bold mb-3">¿No estás seguro qué paquete elegir?</h3>
              <p className="text-lg text-white/90 mb-6">
                En la entrevista inicial gratuita te ayudamos a identificar el paquete perfecto según tus necesidades.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#004C97] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Solicitar entrevista gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
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
