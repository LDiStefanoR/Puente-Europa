'use client'

export default function MissionSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601024445121-e5b82f020549?q=80&w=2000&auto=format&fit=crop"
          alt="Banderas Argentina y Europa"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 leading-tight">
            Un puente entre sueños y oportunidades
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-light">
              Somos una agencia intermedia comprometida con el <strong className="text-[#004C97]">asesoramiento, la gestión y el éxito</strong> de la inserción laboral internacional.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              Desde Argentina hasta Europa, acompañamos historias de <span className="text-[#004C97] font-semibold">esfuerzo, superación y futuro</span>.
            </p>
          </div>

          {/* Stats with flags */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-2">🇦🇷</div>
              <div className="text-3xl font-bold text-[#004C97]">100+</div>
              <div className="text-sm text-gray-600">Argentinos conectados</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-2">🇪🇺</div>
              <div className="text-3xl font-bold text-[#004C97]">25+</div>
              <div className="text-sm text-gray-600">Empresas europeas</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-2">✈️</div>
              <div className="text-3xl font-bold text-[#004C97]">95%</div>
              <div className="text-sm text-gray-600">Historias de éxito</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-2">🤝</div>
              <div className="text-3xl font-bold text-[#004C97]">5 años</div>
              <div className="text-sm text-gray-600">De experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

