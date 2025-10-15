'use client'

import { motion } from 'framer-motion'
import { FileText, Users, Building2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Aplicá y completá tu perfil",
    description: "Completá nuestro formulario con tu información personal, experiencia laboral y objetivos. Te ayudamos a destacar tus habilidades y ciudadanía europea.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Persona completando formulario de aplicación"
  },
  {
    number: 2,
    icon: Users,
    title: "Te ayudamos a prepararte",
    description: "Te brindamos asesoramiento personalizado sobre idioma, CV europeo, requisitos legales y culturales. Preparate para el éxito en el mercado laboral europeo.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    alt: "Equipo de trabajo colaborando"
  },
  {
    number: 3,
    icon: Building2,
    title: "Te conectamos con empresas",
    description: "Utilizamos nuestra red de contactos en Europa para conectarte con empresas que valoran el talento argentino y ofrecen oportunidades reales de crecimiento.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    alt: "Edificio de oficinas moderno en Europa"
  }
]

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-50 to-blue-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y efectivo para conectar tu talento argentino 
            con las mejores oportunidades laborales en Europa
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full text-2xl font-bold mr-4">
                      {step.number}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-navy-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center text-orange-500">
                      <span className="text-sm font-semibold">Siguiente paso</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </div>
                
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={600}
                      height={400}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              ¿Listo para comenzar tu aventura europea?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a los argentinos que ya están trabajando y creciendo en Europa
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Comenzar ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}




