'use client'

import Link from 'next/link'
import { ShieldCheck, FileCheck, MapPin, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: FileCheck,
    title: 'Reclutamiento y selección profesional',
    description: 'Evaluamos candidatos por competencias, experiencia y valores culturales.',
  },
  {
    icon: ShieldCheck,
    title: 'Asesoramiento legal y logístico',
    description: 'Gestionamos visados, contratos y toda la documentación necesaria.',
  },
  {
    icon: MapPin,
    title: 'Gestión de documentación y traslado',
    description: 'Coordinamos el viaje y alojamiento inicial para una transición sin fricciones.',
  },
  {
    icon: HeartHandshake,
    title: 'Integración cultural y soporte continuo',
    description: 'Seguimiento durante los primeros meses para asegurar adaptación exitosa.',
  },
]

export default function CompaniesEmotionalSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#F2F2F2] to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Empresas que apuestan al talento y la diversidad
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Puente Europa ayuda a empresas europeas a descubrir <strong>mercados laborales inexplorados</strong> y acceder a talento argentino calificado, responsable y motivado.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-[#004C97]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#004C97]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link 
              href="/empresas" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#004C97] text-white rounded-lg font-semibold hover:bg-[#003a72] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Conocé cómo contratar talento argentino →
            </Link>
          </div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
              alt="Equipo diverso trabajando"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

