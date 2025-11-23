'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { jobOffers, JobOffer } from '@/lib/jobOffers'
import { motion } from 'framer-motion'
import { MapPin, Clock, Euro, Users, CheckCircle, ArrowRight, Briefcase, AlertCircle, Shield, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function OfertasPage() {
  const availableJobs = jobOffers.filter(job => job.available)
  const urgentJobs = availableJobs.filter(job => job.urgent)
  const normalJobs = availableJobs.filter(job => !job.urgent)

  return (
    <main className="min-h-screen" id="top">
      <Header />
      
      {/* Hero Ofertas */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
            alt="Ofertas de trabajo en Europa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004C97]/95 to-[#004C97]/70" />
        </div>
        <div className="container-max section-padding relative z-10 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
              Ofertas de Trabajo en Europa
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed font-light">
              Oportunidades reales, empresas verificadas, condiciones claras. <strong>Tu próximo trabajo te está esperando.</strong>
            </p>
            {availableJobs.length > 0 && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <p className="text-lg">
                  <strong className="text-2xl">{availableJobs.length}</strong> ofertas disponibles ahora
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Ofertas Urgentes */}
      {urgentJobs.length > 0 && (
        <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-red-100 rounded-full px-6 py-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-red-700">
                  Ofertas Urgentes
                </h2>
              </div>
              <p className="text-lg text-gray-700">
                Estas oportunidades requieren disponibilidad inmediata
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {urgentJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Todas las Ofertas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
              {urgentJobs.length > 0 ? 'Más Ofertas Disponibles' : 'Ofertas de Trabajo Disponibles'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oportunidades reales en Europa. Trabajos verificados, empresas confiables, condiciones claras.
            </p>
          </motion.div>

          {normalJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {normalJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No hay más ofertas disponibles en este momento</p>
            </div>
          )}

          {/* Info adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#004C97] to-[#003a72] rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">¿No encontrás la oferta que buscás?</h3>
            <p className="text-lg text-white/90 mb-6">
              Contactanos y te ayudamos a encontrar la oportunidad perfecta para vos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#004C97] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contactar con nosotros
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Banner de Privacidad */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-100 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004C97] to-[#003a72] flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3">
                    Información Detallada por Privacidad
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Por respeto a la privacidad de nuestras empresas asociadas, los nombres específicos de las empresas y los detalles completos de las ofertas se proporcionan únicamente a través de comunicación directa. 
                    <strong className="text-[#004C97]"> Gracias por tu comprensión.</strong>
                  </p>
                  <p className="text-gray-600 mb-6">
                    Para más información sobre ofertas específicas, requisitos detallados o cualquier consulta, contactanos directamente.
                  </p>
                  <a
                    href="https://wa.me/5493415402089"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Contactar por WhatsApp</span>
                    <span className="text-sm opacity-90">+54 9 341 540 2089</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Componente de tarjeta de oferta reutilizable
function JobCard({ job, index }: { job: JobOffer; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${
        job.urgent 
          ? 'border-red-400 shadow-red-100' 
          : 'border-gray-100 hover:border-[#004C97]/50'
      } transition-all duration-300 hover:shadow-2xl`}
    >
      {/* Header con badge urgente */}
      <div className={`p-6 ${
        job.urgent 
          ? 'bg-gradient-to-r from-red-500 to-red-600' 
          : 'bg-gradient-to-r from-[#004C97] to-[#003a72]'
      } text-white`}>
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
            <p className="text-white/90 text-lg">{job.company}</p>
          </div>
          {job.urgent && (
            <span className="px-3 py-1 bg-white text-red-600 text-xs font-bold rounded-full animate-pulse">
              URGENTE
            </span>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Información principal */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-5 h-5 text-[#004C97]" />
            <span className="font-semibold">{job.location}, {job.country}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-700">
            <Euro className="w-5 h-5 text-green-600" />
            <div>
              <span className="font-bold text-lg text-[#0f172a]">{job.salary}</span>
              {job.salaryPerHour && (
                <span className="text-sm text-gray-600 ml-2">({job.salaryPerHour})</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="w-5 h-5 text-orange-500" />
            <span>{job.contractType} • {job.duration}</span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-gray-700 mb-6 leading-relaxed border-l-4 border-[#004C97] pl-4">
          {job.description}
        </p>

        {/* Requisitos */}
        <div className="mb-6">
          <h4 className="font-semibold text-[#0f172a] mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#004C97]" />
            Requisitos
          </h4>
          <ul className="space-y-2">
            {job.requirements.map((req, reqIndex) => (
              <li key={reqIndex} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#004C97] mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Beneficios */}
        <div className="mb-6">
          <h4 className="font-semibold text-[#0f172a] mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            Beneficios Incluidos
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {job.benefits.map((benefit, benIndex) => (
              <div key={benIndex} className="flex items-center gap-2 text-sm text-gray-700 bg-green-50 rounded-lg p-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Botón CTA */}
        <Link
          href="/contacto"
          className="w-full btn-primary flex items-center justify-center gap-2 text-center"
        >
          Postularme a esta oferta
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  )
}

