'use client'

import { motion } from 'framer-motion'
import { MapPin, Euro, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { jobOffers } from '@/lib/jobOffers'

export default function JobOffersSection() {
  const availableJobs = jobOffers.filter(job => job.available)
  const urgentJobs = availableJobs.filter(job => job.urgent)
  const normalJobs = availableJobs.filter(job => !job.urgent)

  // Seleccionar máximo 2 ofertas: 1 urgente y 1 normal
  const displayJobs = []
  if (urgentJobs.length > 0) {
    displayJobs.push(urgentJobs[0])
  }
  if (normalJobs.length > 0) {
    displayJobs.push(normalJobs[0])
  }

  if (displayJobs.length === 0) {
    return null
  }

  return (
    <section id="ofertas" className="section-padding bg-gradient-to-br from-[#F2F2F2] to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Ofertas de Trabajo Disponibles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oportunidades reales en Europa. Trabajos verificados, empresas confiables, condiciones claras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {displayJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
                job.urgent 
                  ? 'border-red-400 shadow-red-100' 
                  : 'border-gray-100 hover:border-[#004C97]/50'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Header compacto */}
              <div className={`p-4 ${
                job.urgent 
                  ? 'bg-gradient-to-r from-red-500 to-red-600' 
                  : 'bg-gradient-to-r from-[#004C97] to-[#003a72]'
              } text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                    <p className="text-white/90 text-sm">{job.company}</p>
                  </div>
                  {job.urgent && (
                    <span className="px-2 py-1 bg-white text-red-600 text-xs font-bold rounded-full animate-pulse">
                      URGENTE
                    </span>
                  )}
                </div>
              </div>

              {/* Contenido resumido */}
              <div className="p-4">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <MapPin className="w-4 h-4 text-[#004C97]" />
                    <span className="font-medium">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Euro className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">{job.salaryPerHour || job.salary}</span>
                  </div>
                </div>

                {/* Descripción corta */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description.substring(0, 120)}...
                </p>

                {/* Botón CTA pequeño */}
                <Link
                  href="/ofertas"
                  className={`w-full flex items-center justify-center gap-2 text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                    job.urgent
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-[#004C97] hover:bg-[#003a72] text-white'
                  }`}
                >
                  Ver más detalles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link a página completa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/ofertas"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#004C97] to-[#003a72] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver todas las ofertas disponibles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
