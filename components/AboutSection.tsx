'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sobre nosotros
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                <strong>Leonardo Rodríguez Di Stefano</strong>, fundador de Puente Europa, 
                es un profesional italo-argentino con una experiencia única que combina 
                sus raíces europeas con su formación argentina.
              </p>
              
              <p>
                Después de vivir y trabajar en Holanda durante varios años, Leonardo 
                comprendió los desafíos y oportunidades que enfrentan los argentinos 
                con ciudadanía europea al buscar trabajo en el continente.
              </p>
              
              <p>
                Su experiencia directa en el mercado laboral europeo, combinada con 
                su conocimiento profundo de la cultura argentina, le permite ofrecer 
                un acompañamiento personalizado y efectivo.
              </p>
            </motion.div>
            
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-500"
            >
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-xl font-semibold text-navy-900 italic">
                "Vivimos la experiencia, ahora la compartimos con vos."
              </p>
              <p className="text-gray-600 mt-2">— Leonardo Rodríguez Di Stefano</p>
            </motion.div>
          </div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Imagen: Retrato profesional o equipo - Unsplash */}
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Leonardo Rodríguez Di Stefano - Fundador de Puente Europa"
                width={600}
                height={700}
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div>
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm opacity-90">Años en Europa</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-sm opacity-90">Personas ayudadas</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg"
            >
              <span className="text-sm font-semibold">🇦🇷🇮🇹</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


