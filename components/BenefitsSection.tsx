'use client'

import { motion } from 'framer-motion'
import { Euro, Shield, Map, BookOpen, CheckCircle } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Euro,
      title: 'Salarios competitivos y excelentes condiciones laborales',
      description: '+15€/hora garantizan estabilidad económica desde el primer mes.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Asesoramiento completo antes de viajar',
      description: 'Entendemos los miedos, dudas y riesgos. Armamos un plan claro, sin estrés.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Map,
      title: 'Guía paso a paso',
      description: 'Documentación, alojamiento, transporte interno, ciudades ideales, expectativas, cultura laboral.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
      gradient: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#F2F2F2] to-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
          alt="Beneficios clave"
          className="w-full h-full object-cover opacity-5"
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
            <span className="text-sm font-semibold text-[#004C97]">✨ BENEFICIOS CLAVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Lo que ofrecemos a nuestros clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-90`} />
                </div>
                <div className="relative z-10 p-6 md:p-8 text-white min-h-[300px] flex flex-col">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/95 leading-relaxed flex-grow">{benefit.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Incluido en nuestro servicio</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
