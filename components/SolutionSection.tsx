'use client'

import { motion } from 'framer-motion'
import { Rocket, CheckCircle, MapPin, GraduationCap, Plane, Home, Lightbulb } from 'lucide-react'

export default function SolutionSection() {
  const services = [
    { icon: CheckCircle, text: 'Asesoramiento personalizado' },
    { icon: Plane, text: 'Preparación del viaje' },
    { icon: MapPin, text: 'Orientación paso a paso' },
    { icon: GraduationCap, text: 'Capacitación en inglés' },
    { icon: Home, text: 'Traslados y logística (si lo necesitan)' },
    { icon: Home, text: 'Ayuda para conseguir alojamiento' },
    { icon: Lightbulb, text: 'Recomendaciones reales basadas en experiencia en Europa' }
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
          alt="Nuestra solución"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#004C97]/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#004C97]">🚀 NUESTRA SOLUCIÓN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            ¿Qué hacemos como agencia?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                Somos una <strong className="text-[#004C97]">agencia reclutadora intermedia</strong>, enfocada en conectar argentinos con <strong className="text-[#004C97]">empleos europeos de altos salarios</strong> (15 €/h o más), acompañándolos <strong className="text-[#004C97]">antes, durante y después del viaje</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-[#004C97]/10 to-transparent rounded-xl p-6 border-l-4 border-[#004C97]">
                <p className="text-lg font-bold text-[#0f172a] mb-2">Nuestro objetivo:</p>
                <p className="text-xl text-[#004C97] font-semibold">
                  Que lleguen seguros, con trabajo y con futuro.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services list with image background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
                alt="Acompañamiento completo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#004C97]/95 to-[#003a72]/90" />
            </div>
            <div className="relative z-10 p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8" />
                <h3 className="text-2xl md:text-3xl font-bold">Acompañamiento completo:</h3>
              </div>
              <ul className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg">{service.text}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

