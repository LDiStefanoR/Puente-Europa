import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ShieldCheck, Filter, Users, Plane, HeartHandshake, TrendingUp, Clock, Award, Globe, Zap, Target, Building2 } from 'lucide-react'

export default function EmpresasPage() {
  return (
    <main className="min-h-screen" id="top">
      <Header />
      
      {/* Hero Empresas */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
            alt="Equipo trabajando"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004C97]/95 to-[#004C97]/70" />
        </div>
        <div className="container-max section-padding relative z-10 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Expandí tu empresa con talento argentino
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Accedé a un mercado laboral único con profesionales responsables, comprometidos y culturalmente alineados con Europa.
            </p>
          </div>
        </div>
      </section>

      {/* Contexto Cultural */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 text-center">
              ¿Por qué talento argentino?
            </h2>
            
            <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
              <h3 className="text-2xl font-semibold text-[#004C97] mb-6">Una conexión histórica y cultural con Europa</h3>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Argentina es esencialmente Europa en América.</strong> La cultura argentina fue forjada por generaciones de europeos —principalmente italianos y españoles— que cruzaron el océano en busca de nuevas oportunidades.
                </p>
                <p>
                  Hoy, <strong>sus descendientes conservan ese espíritu europeo</strong>, mantienen la doble nacionalidad y sienten una conexión histórica, emocional y cultural profunda con el continente que sus abuelos dejaron atrás.
                </p>
                <p>
                  Los argentinos no se sienten ajenos a Europa: <strong>se sienten en casa.</strong> Comparten valores de trabajo, responsabilidad y seriedad profesional que los hacen candidatos ideales para empresas europeas que buscan talento comprometido y adaptable.
                </p>
                <p className="text-[#004C97] font-semibold italic text-xl">
                  "Tienen el hambre de conocer el mundo que sus abuelos dejaron, con la madurez y profesionalismo del talento latinoamericano."
                </p>
              </div>
            </div>

            {/* Características del talento argentino */}
            <h3 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">Características del mercado laboral argentino</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#004C97]/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#004C97]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0f172a] mb-3">Responsabilidad y compromiso</h4>
                <p className="text-gray-700">Profesionales serios con ética de trabajo europea, acostumbrados a cumplir objetivos y superar expectativas.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#004C97]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#004C97]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0f172a] mb-3">Baja rotación laboral</h4>
                <p className="text-gray-700">Alta permanencia en empresas, estabilidad y lealtad. Buscan crecer a largo plazo en organizaciones que valoren su talento.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#004C97]/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#004C97]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0f172a] mb-3">Adaptabilidad cultural</h4>
                <p className="text-gray-700">Integración natural al entorno europeo gracias a raíces culturales compartidas y capacidad de aprendizaje rápido.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#004C97]/10 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6 text-[#004C97]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0f172a] mb-3">Motivación y gratitud</h4>
                <p className="text-gray-700">El sueño de trabajar en Europa es profundamente personal. Llegan motivados, agradecidos y listos para dar lo mejor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios de Terciarizar */}
      <section className="section-padding bg-gradient-to-br from-[#F2F2F2] to-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 text-center">
              Ahorrá tiempo para lo que realmente importa: tu negocio
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Terciarizar el servicio de filtro y contratación con Puente Europa te libera de tareas operativas y te permite enfocarte en tu core business.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-[#004C97] flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Externalización completa</h3>
                <p className="text-gray-700">Filtramos, entrevistamos y preseleccionamos. Vos solo elegís entre los mejores. Ahorrás semanas de búsqueda.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-[#004C97] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Gestión legal sin complicaciones</h3>
                <p className="text-gray-700">Documentos, contratos, visados y asesoramiento legal resueltos por nuestro equipo especializado.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-[#004C97] flex items-center justify-center mb-4">
                  <HeartHandshake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Cuidado del personal activo</h3>
                <p className="text-gray-700">Seguimiento post-contratación, soporte en adaptación cultural y resolución de problemas en tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL FACTOR ARGENTINO - Sección estelar */}
      <section className="section-padding bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                El Factor Argentino
              </h2>
              <p className="text-2xl text-white/90 italic font-light">
                "Gratitud que se transforma en compromiso"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-6">¿Por qué los argentinos tienen menor rotación laboral?</h3>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-white/90">
                  Los argentinos que llegan a Europa a través de Puente Europa poseen un <strong className="text-[#fb923c]">amor profundo por Europa</strong> y una <strong className="text-[#fb923c]">conexión emocional única:</strong> es la tierra de sus abuelos, el lugar que siempre soñaron conocer.
                </p>

                <div className="bg-[#fb923c]/20 rounded-2xl p-6 border-l-4 border-[#fb923c]">
                  <p className="text-xl font-semibold mb-3">🔑 Factor clave para tu empresa:</p>
                  <p className="text-white/90">
                    Estas oportunidades <strong>son completamente desconocidas en Argentina</strong> para la mayoría de las personas, o piensan que son inalcanzables, muy lejanas o imposibles.
                  </p>
                </div>

                <p className="text-white/90">
                  <strong>Cuando un argentino recibe una oferta de trabajo en Europa con alojamiento incluido, lo ve como un privilegio único.</strong>
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">❤️</div>
                    <h4 className="font-semibold mb-2">Gratitud</h4>
                    <p className="text-sm text-white/80">Por alojamiento, trabajo estable y oportunidades</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">🤝</div>
                    <h4 className="font-semibold mb-2">Compromiso</h4>
                    <p className="text-sm text-white/80">Baja rotación vs otros grupos laborales</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">🏆</div>
                    <h4 className="font-semibold mb-2">Lealtad</h4>
                    <p className="text-sm text-white/80">Valoran cada día de trabajo y crecimiento</p>
                  </div>
                </div>

                <div className="bg-green-600/20 rounded-2xl p-6 border border-green-400/30 mt-6">
                  <p className="text-xl font-bold text-center">
                    📊 Hemos comprobado: Los argentinos tienen <span className="text-[#fb923c]">menor rotación laboral</span> que otros grupos por un factor clave: <strong className="text-green-300">GRATITUD</strong>.
                  </p>
                </div>

                <p className="text-white/90 text-center text-xl font-light italic">
                  "Saben que estas oportunidades son un privilegio, y lo demuestran con compromiso diario."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Rol como Puente Europa */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 text-center">
              Cómo funciona Puente Europa
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Somos el intermediario profesional que conecta, filtra, gestiona y acompaña tanto a empresas como a candidatos.
            </p>

            {/* Filtrado y Selección */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#004C97] flex items-center justify-center flex-shrink-0">
                  <Filter className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Filtrado riguroso de candidatos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aplicamos criterios de <strong>competitividad internacional</strong> para garantizar que solo los mejores perfiles lleguen a tu empresa:
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 ml-16">
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Nivel de inglés</strong> verificado (mínimo B1-B2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Experiencia laboral</strong> comprobable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Responsabilidad y compromiso</strong> evaluados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Adaptabilidad cultural</strong> probada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Referencias verificadas</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004C97] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Documentación en regla</strong></span>
                </li>
              </ul>
            </div>

            {/* Gestión y Asesoramiento */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#004C97] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Gestión y asesoramiento integral</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No solo filtramos: <strong>preparamos a los candidatos</strong> para que lleguen listos, integrados y motivados.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 ml-16">
                <div>
                  <h4 className="font-semibold text-[#0f172a] mb-2">Documentación</h4>
                  <p className="text-sm text-gray-600">Visados, contratos, seguros y todo lo legal resuelto.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f172a] mb-2">Preparación cultural</h4>
                  <p className="text-sm text-gray-600">Orientación sobre costumbres, idioma y expectativas laborales europeas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f172a] mb-2">Coordinación de viaje</h4>
                  <p className="text-sm text-gray-600">Traslado, alojamiento inicial y logística completa.</p>
                </div>
              </div>
            </div>

            {/* Asistencia Continua */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#004C97] flex items-center justify-center flex-shrink-0">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Compromiso durante el viaje y presentación</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Acompañamos al candidato <strong>desde que sale de Argentina hasta su presentación formal en tu empresa</strong>. Aseguramos una transición sin fricciones.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 ml-16 italic">
                "No dejamos a nadie solo en el proceso. Tu empresa recibe candidatos preparados, motivados y listos para integrarse."
              </p>
            </div>

            {/* Campañas de Reclutamiento */}
            <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] rounded-3xl p-8 md:p-12 shadow-xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Campañas de reclutamiento personalizadas</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Cuando tu empresa necesita escalar rápido o buscar perfiles específicos, <strong>diseñamos campañas de reclutamiento focalizadas</strong> para atraer al talento exacto que necesitás.
                  </p>
                </div>
              </div>
              
              <div className="ml-16 space-y-4">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold text-lg mb-3">Colaboración con empresas españolas especializadas</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Trabajamos en alianza con <strong>agencias digitales españolas</strong> expertas en publicidad estratégica para llegar a los mejores candidatos a través de:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-xl">📸</span>
                      <span>Instagram Ads segmentadas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-xl">👥</span>
                      <span>Facebook targetizado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-xl">🔍</span>
                      <span>Google Search y Display</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-xl">▶️</span>
                      <span>YouTube pre-roll campaigns</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold text-lg mb-2">Equipo profesional dedicado</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Contamos con un <strong>equipo multidisciplinario</strong> que se encarga de la logística y realización de tareas de manera profesional: desde marketing digital hasta coordinación de viajes, documentación legal y seguimiento de candidatos.
                  </p>
                </div>

                <p className="text-white/70 text-sm italic mt-4">
                  "Focalizamos esfuerzos, atraemos talento calificado y te presentamos shortlists de alta calidad en tiempo récord."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansión Global */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 text-center">
              Rompé barreras continentales
            </h2>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-amber-200 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Expansión global de tu empresa</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Trabajar con Puente Europa significa que tu empresa <strong className="text-amber-700">sigue rompiendo barreras continentales y fronteras</strong>, y estará un paso más cerca de la expansión e importancia global.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    En el <strong>mundo competitivo de hoy</strong>, la diversidad internacional no es solo un valor: es una <span className="bg-amber-200 px-2 py-1 rounded font-semibold">ventaja estratégica clave</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Red internacional */}
            <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] rounded-3xl p-8 md:p-12 shadow-xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Red de cooperación internacional</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Formamos parte de una <strong>red global de agencias</strong> para garantizar estabilidad en oferta y demanda laboral.
                  </p>
                </div>
              </div>
              
              <div className="ml-16 space-y-4">
                <p className="text-white/80 leading-relaxed">
                  Trabajamos con <strong>agencias de todo el mundo</strong> mediante convenios, alianzas y acuerdos de cooperación para asegurar:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fb923c] text-xl">✓</span>
                    <span className="text-white/90"><strong>Flujo constante</strong> de candidatos calificados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fb923c] text-xl">✓</span>
                    <span className="text-white/90"><strong>Estabilidad</strong> en oferta y demanda laboral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fb923c] text-xl">✓</span>
                    <span className="text-white/90"><strong>Precios competitivos</strong> mediante convenios internacionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fb923c] text-xl">✓</span>
                    <span className="text-white/90"><strong>Crecimiento conjunto</strong> del proyecto y las empresas asociadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje emocional final */}
      <section className="section-padding bg-gradient-to-r from-[#F2F2F2] to-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-[#004C97]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
                El sueño europeo se hace realidad desde Argentina
              </h2>
              <p className="text-2xl text-gray-700 mb-8 italic font-light leading-relaxed">
                "Cada oportunidad que brindás, <strong className="text-[#004C97]">transforma no solo una vida</strong>, sino <strong className="text-[#fb923c]">un país entero</strong>."
              </p>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-10 py-4 bg-[#004C97] text-white rounded-lg font-bold text-lg hover:bg-[#003a72] transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Sumate a nuestra red →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
