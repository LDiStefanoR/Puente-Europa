'use client'

import { motion } from 'framer-motion'
import { Target, Heart } from 'lucide-react'

export default function VisionPurposeSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#F2F2F2] to-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
          alt="Visión y propósito - Europa"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
                alt="Visión"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#004C97]/90 to-[#003a72]/80" />
            </div>
            <div className="relative z-10 p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">🌍 Visión</h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-white/95">
                Ser la agencia argentina <strong>pionera</strong> en conectar talento latinoamericano—especialmente argentinos con pasaporte europeo—con oportunidades laborales de <strong>alto salario en Europa</strong>, garantizando un viaje seguro, acompañado y con información clara.
              </p>
            </div>
          </motion.div>

          {/* Propósito */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2000&auto=format&fit=crop"
                alt="Propósito"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/90 to-[#ea580c]/80" />
            </div>
            <div className="relative z-10 p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Heart className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">🎯 Propósito</h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-white/95">
                Abrir las puertas de Europa a quienes sueñan con una vida mejor, <strong>eliminando la incertidumbre, el miedo y la falta de información</strong> que hoy impiden a muchos dar el salto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

