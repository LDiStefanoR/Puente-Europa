'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#004C97]">Puente</span> Europa
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed italic">
              "Uniendo personas, culturas y oportunidades."
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Conectamos talentos argentinos con oportunidades laborales en Europa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/puenteeuropa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#004C97] hover:bg-[#003a72] rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/puenteeuropa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#004C97] hover:bg-[#003a72] rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/puenteeuropa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#004C97] hover:bg-[#003a72] rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-[#004C97] transition-colors duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('companies')}
                  className="text-gray-300 hover:text-[#004C97] transition-colors duration-300"
                >
                  Empresas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('candidates')} 
                  className="text-gray-300 hover:text-[#004C97] transition-colors duration-300"
                >
                  Candidatos
                </button>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-300 hover:text-[#004C97] transition-colors duration-300"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-[#004C97] transition-colors duration-300"
                >
                  Solicitar Talento
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Selección profesional</li>
              <li className="text-gray-300">Gestión completa (visado/traslado)</li>
              <li className="text-gray-300">Reducción de costos</li>
              <li className="text-gray-300">Talento comprometido</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#004C97]" />
                <span className="text-gray-300">info@puenteeuropa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#004C97]" />
                <span className="text-gray-300">+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#004C97]" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              <p>&copy; 2024 Puente Europa. Todos los derechos reservados.</p>
              <p className="mt-1">
                Fundado por Leonardo Rodríguez Di Stefano
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Términos y Condiciones
              </a>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 bg-[#004C97] hover:bg-[#003a72] rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}


