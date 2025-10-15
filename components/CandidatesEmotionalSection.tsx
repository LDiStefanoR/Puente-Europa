'use client'

import Link from 'next/link'
import { Plane, Heart, Users, Globe } from 'lucide-react'

export default function CandidatesEmotionalSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
              alt="Persona viajando con maleta"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004C97]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-2xl font-bold">Tu próxima aventura comienza aquí</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Tu talento puede abrirte las puertas de Europa
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Acompañamos a profesionales y trabajadores argentinos con nacionalidad europea o capacidad de adaptación internacional en todo el proceso: <strong>asesoramiento, gestión de documentos, alojamiento y adaptación cultural.</strong>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#004C97]/10 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-5 h-5 text-[#004C97]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a]">Gestión integral</p>
                  <p className="text-sm text-gray-600">Documentos y traslado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#004C97]/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#004C97]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a]">Acompañamiento</p>
                  <p className="text-sm text-gray-600">Soporte emocional</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#004C97]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#004C97]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a]">Conexiones reales</p>
                  <p className="text-sm text-gray-600">Empresas verificadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#004C97]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-[#004C97]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a]">Integración cultural</p>
                  <p className="text-sm text-gray-600">Adaptación europea</p>
                </div>
              </div>
            </div>

            <Link 
              href="/candidatos" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#004C97] text-white rounded-lg font-semibold hover:bg-[#003a72] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Comenzá tu viaje laboral →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

