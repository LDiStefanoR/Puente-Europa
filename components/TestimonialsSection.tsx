'use client'

import { motion } from 'framer-motion'
import { Quote, Star, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Martín Álvarez',
    age: 28,
    origin: 'Buenos Aires, Argentina',
    destination: 'Ámsterdam, Países Bajos',
    role: 'Ingeniero de Software',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    testimonial:
      'Hace dos años soñaba con crecer profesionalmente en Europa, pero no sabía por dónde empezar. Puente Europa me guió en cada paso: desde armar mi CV europeo hasta encontrar alojamiento en Ámsterdam. Hoy trabajo en una empresa increíble y vivo la vida que siempre quise.',
    rating: 5,
  },
  {
    name: 'Carolina Méndez',
    age: 32,
    origin: 'Córdoba, Argentina',
    destination: 'Rotterdam, Países Bajos',
    role: 'Coordinadora de Logística',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
    testimonial:
      'El proceso fue transparente y humano. Leonardo me acompañó en cada duda, me conectó con empresas serias y me ayudó a adaptarme a la cultura holandesa. No fue solo un trabajo, fue el comienzo de una nueva vida.',
    rating: 5,
  },
  {
    name: 'Diego Romero',
    age: 35,
    origin: 'Rosario, Argentina',
    destination: 'Barcelona, España',
    role: 'Chef Ejecutivo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    testimonial:
      'Gracias a Puente Europa pude cumplir mi sueño de trabajar en gastronomía europea. Me ayudaron con visado, documentos y hasta me conectaron con restaurantes que valoraban mi experiencia. Hoy lidero una cocina en Barcelona.',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Historias reales, sueños cumplidos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Conocé a quienes ya viven y trabajan en Europa gracias a Puente Europa</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#fb923c] mb-6" />
              <p className="text-gray-200 leading-relaxed mb-6 text-lg italic">"{testimonial.testimonial}"</p>
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#fb923c] fill-current" />
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover border-2 border-[#fb923c]"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}, {testimonial.age}</h4>
                  <div className="flex items-center text-gray-300 text-sm mb-1">{testimonial.role}</div>
                  <div className="flex items-center text-gray-300 text-sm"><MapPin className="w-4 h-4 mr-1" />{testimonial.origin} → {testimonial.destination}</div>
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
          <h3 className="text-3xl font-bold mb-8">Nuestro impacto</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">100+</div><div className="text-gray-300">Vidas transformadas</div></div>
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">5</div><div className="text-gray-300">Países europeos</div></div>
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">95%</div><div className="text-gray-300">Tasa de éxito</div></div>
            <div><div className="text-4xl font-bold text-[#fb923c] mb-2">24/7</div><div className="text-gray-300">Soporte continuo</div></div>
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
          <h3 className="text-3xl font-bold mb-4">¿Listo para escribir tu propia historia?</h3>
          <p className="text-xl text-gray-300 mb-8">Conectamos personas con oportunidades, sueños con realidad</p>
          <Link href="/contacto" className="inline-block bg-white text-[#004C97] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Comenzar mi proceso</Link>
        </motion.div>
      </div>
    </section>
  )
}


