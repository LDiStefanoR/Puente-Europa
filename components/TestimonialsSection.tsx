'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Heart, Lightbulb, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'

const teamValues = [
  {
    icon: Users,
    title: 'Somos trabajadores como vos',
    description: 'Un grupo de españoles y argentinos emigrantes y viajeros que hemos trabajado en estos países. Conocemos las ofertas desde adentro porque las vivimos.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Experiencia real en terreno',
    description: 'Hemos trabajado en Holanda, Alemania, España y más. Conocemos las empresas, los procesos, los desafíos y las oportunidades reales.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Heart,
    title: 'Nuestra misión',
    description: 'Acercar estas oportunidades a todo el mundo. Compartir la información y recursos que quizás no eran tan claros o eran más escasos cuando nosotros empezamos.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'Tu puente hacia Europa',
    description: 'Queremos que toda nuestra experiencia sea tu puente. Que no tengas que pasar por las mismas dificultades que nosotros enfrentamos al principio.',
    color: 'from-orange-500 to-orange-600',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-[#0f172a] to-[#0b1222] text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-semibold">🤝 QUIÉNES SOMOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Conocimiento real, experiencia compartida</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos un grupo de trabajadores, emigrantes y viajeros que hemos vivido y trabajado en Europa. Conocemos las ofertas desde adentro porque las vivimos en primera persona.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {teamValues.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${value.color} rounded-2xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/95 leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Nuestra historia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] rounded-2xl p-6 flex-shrink-0">
              <Briefcase className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Nuestra historia</h3>
              <p className="text-gray-200 leading-relaxed text-lg mb-4">
                Cuando empezamos a trabajar en Europa, nos encontramos con información dispersa, procesos poco claros y recursos limitados. Tuvimos que aprender todo desde cero: cómo armar un CV europeo, dónde buscar alojamiento, qué empresas eran confiables, cómo adaptarse a la cultura laboral.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg mb-4">
                Después de años trabajando en diferentes países y empresas, acumulamos experiencia real. Conocemos las ofertas porque las vivimos. Sabemos qué funciona y qué no. Entendemos los desafíos porque los enfrentamos.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg font-semibold">
                Ahora queremos compartir todo eso contigo. Que nuestra experiencia sea tu puente hacia Europa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Qué ofrecemos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#004C97] to-[#003a72] rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-bold mb-6">¿Qué significa esto para vos?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-bold text-lg mb-2">Información clara</h4>
              <p className="text-white/90 text-sm">Ofertas reales que conocemos desde adentro, sin información confusa o engañosa.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-lg mb-2">Recursos prácticos</h4>
              <p className="text-white/90 text-sm">Guías, checklists y consejos basados en nuestra experiencia real trabajando en Europa.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-lg mb-2">Acompañamiento</h4>
              <p className="text-white/90 text-sm">Te ayudamos a evitar los errores que nosotros cometimos y a aprovechar las oportunidades que conocemos.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para cruzar tu puente hacia Europa?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Conectamos personas con oportunidades reales. Compartimos nuestra experiencia para que tu camino sea más claro y directo.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-white text-[#004C97] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Comenzar mi proceso
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


