'use client'

import { ShieldCheck, ClipboardCheck, PiggyBank, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: ClipboardCheck,
    title: 'Selección profesional',
    description: 'Candidatos evaluados por competencias, experiencia y referencias verificadas.',
  },
  {
    icon: ShieldCheck,
    title: 'Gestión completa',
    description: 'Visado, contrato, traslado y alojamiento coordinados de punta a punta.',
  },
  {
    icon: PiggyBank,
    title: 'Reducción de costos',
    description: 'Ahorrá tiempo y recursos administrativos con nuestro servicio integral.',
  },
  {
    icon: HeartHandshake,
    title: 'Talento comprometido',
    description: 'Profesionales con alto nivel de adaptación y motivación sostenida.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="companies" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">¿Por qué elegir Puente Europa?</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Soluciones de reclutamiento internacional confiables para empresas europeas que buscan talento argentino.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="rounded-2xl border border-gray-100 bg-[#F2F2F2] p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#004C97]/10 text-[#004C97] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a]">{benefit.title}</h3>
                <p className="mt-2 text-gray-700">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



