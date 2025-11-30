'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Home, Info, TrendingUp, Shield } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      icon: Home,
      title: 'No tienen los recursos necesarios para establecerse al llegar',
      description: 'Llegar sin alojamiento, sin trabajo y con cero movilidad genera riesgo e inseguridad.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Info,
      title: 'Falta total de información clara en Argentina',
      description: 'No existen empresas que enseñen cómo emigrar correctamente, qué ciudades elegir, qué documentos preparar.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Poca oferta de empresas que conecten con trabajos europeos',
      description: 'La información está dispersa, no llega a Argentina o es confusa.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Miedo a fracasar o perder dinero viajando sin planificación',
      description: 'La mayoría no sabe qué esperar al llegar, cuánto cuesta vivir, o si realmente encontrarán trabajo.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
          alt="Problemas que resolvemos"
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
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-700">💥 PROBLEMA QUE RESOLVEMOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Los desafíos que enfrentan los argentinos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Perfil:</strong> Argentinos con pasaporte europeo que desean viajar, vivir y trabajar en Europa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={[
                      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
                      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
                      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
                      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop'
                    ][index]}
                    alt={problem.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-300"
                  />
                </div>
                <div className={`relative z-10 bg-gradient-to-br ${problem.color} p-6 md:p-8 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                      <p className="text-white/90 leading-relaxed">{problem.description}</p>
                    </div>
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

