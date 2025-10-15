'use client'

import { motion } from 'framer-motion'
import { Quote, Star, MapPin, Building2 } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    company: 'Nordic Logistics BV',
    location: 'Rotterdam, Países Bajos',
    role: 'HR Director',
    person: 'Sophie van Dijk',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=600&auto=format&fit=crop',
    testimonial:
      'Gracias a Puente Europa, nuestra empresa cubrió puestos clave en tiempo récord. El equipo gestionó selección, documentación y alojamiento sin fricciones.',
    rating: 5,
  },
  {
    company: 'Alpine Tech GmbH',
    location: 'Múnich, Alemania',
    role: 'Talent Acquisition Lead',
    person: 'Thomas Müller',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    testimonial:
      'Reducimos costos y tiempos de hiring en un 40%. Candidatos comprometidos y listos para integrarse al negocio.',
    rating: 5,
  },
  {
    company: 'BlueWave Hospitality',
    location: 'Barcelona, España',
    role: 'Operations Manager',
    person: 'Laura García',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop',
    testimonial:
      'La coordinación integral de visados y traslados nos permitió abrir dos unidades nuevas sin demoras.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-[#0f172a] to-[#0b1222] text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Resultados que generan confianza</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Casos reales de empresas europeas que escalaron sus equipos con talento argentino</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#fb923c] mb-6" />
              <p className="text-gray-200 leading-relaxed mb-6 text-lg">"{testimonial.testimonial}"</p>
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#fb923c] fill-current" />
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.company}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover border-2 border-[#fb923c]"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg flex items-center gap-2"><Building2 className="w-4 h-4" /> {testimonial.company}</h4>
                  <div className="flex items-center text-gray-300 text-sm mb-1">{testimonial.person} · {testimonial.role}</div>
                  <div className="flex items-center text-gray-300 text-sm"><MapPin className="w-4 h-4 mr-1" />{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Impacto en contratación</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">40%</div><div className="text-gray-300">Menos tiempo de hiring</div></div>
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">95%</div><div className="text-gray-300">Retención 6+ meses</div></div>
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">25+</div><div className="text-gray-300">Empresas activas</div></div>
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">72h</div><div className="text-gray-300">Presentación de shortlist</div></div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">¿Listos para cubrir puestos clave?</h3>
          <p className="text-xl text-gray-300 mb-8">Solicitá un shortlist en 72 horas</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#004C97] hover:bg-[#003a72] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Solicitar Talento</button>
        </motion.div>
      </div>
    </section>
  )
}


