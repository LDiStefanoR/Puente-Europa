'use client'

import { ArrowRight } from 'lucide-react'

const steps = [
  'Definimos el perfil que necesitás',
  'Reclutamos y preseleccionamos candidatos',
  'Gestionamos documentos y traslado',
  'Seguimiento durante la integración',
]

export default function ProcessSection() {
  return (
    <section id="candidates" className="section-padding bg-[#F2F2F2]">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">Proceso paso a paso</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Un flujo claro, transparente y ágil para incorporar talento argentino en tu empresa.</p>
        </div>

        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex-none w-10 h-10 rounded-full bg-[#004C97] text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <p className="text-lg font-semibold text-[#0f172a]">{step}</p>
                {index < steps.length - 1 && (
                  <div className="mt-3 inline-flex items-center text-[#004C97] text-sm font-medium">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Siguiente
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}



