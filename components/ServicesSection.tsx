'use client'

import { motion } from 'framer-motion'
import { UserCheck, Filter, HeadphonesIcon, MapPin, Clock, Shield } from 'lucide-react'

const services = [
  {
    icon: UserCheck,
    title: "Asesoramiento Personalizado",
    description: "Te brindamos orientación individual sobre tu perfil, experiencia y oportunidades específicas en el mercado laboral europeo.",
    features: ["Evaluación de perfil", "Plan de desarrollo", "Orientación cultural", "Preparación de entrevistas"]
  },
  {
    icon: Filter,
    title: "Filtro de Candidatos",
    description: "Utilizamos criterios específicos para conectar solo a los mejores candidatos con las empresas que buscan talento argentino.",
    features: ["Evaluación técnica", "Verificación de documentos", "Test de idiomas", "Compatibility matching"]
  },
  {
    icon: HeadphonesIcon,
    title: "Asistencia y Soporte",
    description: "Te acompañamos durante todo el proceso, desde la aplicación hasta tu llegada y adaptación en Europa.",
    features: ["Soporte 24/7", "Asistencia legal", "Red de contactos", "Seguimiento personalizado"]
  }
]

const additionalServices = [
  {
    icon: MapPin,
    title: "Orientación Geográfica",
    description: "Te ayudamos a elegir la mejor ciudad europea según tu perfil y objetivos."
  },
  {
    icon: Clock,
    title: "Gestión de Tiempos",
    description: "Optimizamos los tiempos de proceso para que puedas comenzar a trabajar lo antes posible."
  },
  {
    icon: Shield,
    title: "Seguridad y Confianza",
    description: "Trabajamos solo con empresas verificadas y procesos legales transparentes."
  }
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Nuestros servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un acompañamiento integral para que tu experiencia 
            laboral en Europa sea exitosa y enriquecedora
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
                  <IconComponent className="w-8 h-8 text-orange-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">
              Servicios adicionales
            </h3>
            <p className="text-lg text-gray-600">
              Complementamos nuestro servicio principal con estas ventajas exclusivas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-lg mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-navy-700" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-navy-900 mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
            <div className="text-gray-600">Tasa de éxito</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">30</div>
            <div className="text-gray-600">Días promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-600">Soporte disponible</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-600">Empresas verificadas</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}




