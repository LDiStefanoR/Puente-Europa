'use client'

import { Passport, TrendingUp, Heart, Clock } from 'lucide-react'

export default function WhyArgentinaSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            ¿Por qué Argentina AHORA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong>Argentina no es solo una nación de América Latina; es Europa reencarnada en el hemisferio sur.</strong> Con millones de ciudadanos de ascendencia italiana y española, los argentinos poseen nacionalidad europea, espíritu trabajador y una profunda conexión cultural con Europa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Passport className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nacionalidad europea</h3>
            <p className="text-white/90 leading-relaxed">
              <strong>Millones de argentinos</strong> con pasaporte italiano/español. <span className="font-semibold underline">Sin problemas de visado</span> = proceso rápido y legal.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#fb923c] to-[#ea580c] text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Momento histórico</h3>
            <p className="text-white/90 leading-relaxed">
              <strong>Startups emergentes</strong> se abren al mercado global. <span className="font-semibold bg-white/20 px-2 py-1 rounded">Si no invertís ahora, mañana puede ser tarde.</span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lazos culturales</h3>
            <p className="text-white/90 leading-relaxed">
              <strong>"Hijos de europeos que quieren conocer la casa de sus abuelos"</strong> = Conexión emocional profunda + mejor adaptación.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Talento con hambre</h3>
            <p className="text-white/90 leading-relaxed">
              Profesionales <strong>motivados, responsables</strong>, con gratitud. <span className="underline">Baja rotación laboral</span> por valorar oportunidades únicas.
            </p>
          </div>
        </div>

        {/* CTA Urgente */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-400 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-orange-600" />
            <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Este es el mejor momento para invertir en Argentina
            </h3>
          </div>
          <p className="text-xl text-gray-700 mb-6 font-semibold">
            El crecimiento está sucediendo AHORA.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En este momento histórico de crecimiento y apertura internacional, <strong>invertir en Argentina significa sembrar en terreno fértil:</strong> startups emergentes, talento joven, y una sociedad con hambre de superarse.
          </p>
        </div>
      </div>
    </section>
  )
}

