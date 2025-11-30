"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircle, FileText, CheckCircle, ExternalLink, Users, Briefcase, Globe, Shield } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)
    const execute = (window as any).grecaptcha?.execute
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    const getToken = async (): Promise<string | null> => {
      if (!execute || !siteKey) return null
      try {
        return await execute(siteKey, { action: 'contact_submit' })
      } catch {
        return null
      }
    }

    getToken().then((token) => {
      return fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      })
    })
      .then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).error || 'Error de envío')
        setStatus('success')
        setFormData({ name: '', company: '', email: '', phone: '', message: '' })
      })
      .catch((err) => {
        setStatus('error')
        setError(err.message || 'Ocurrió un error')
      })
  }

  return (
    <div className="bg-white">
      {/* Sección Campaña 2026 - Candidatos */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
            alt="Campaña 2026"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
                  alt="Europa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#004C97]/95 to-[#003a72]/90" />
              </div>

              <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="text-sm font-semibold">🎯 CAMPAÑA DE RECLUTAMIENTO 2026</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  ¡Bienvenido/a al primer paso para tu futuro en Europa!
                </h2>

                <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl">
                  En Puente Europa te ayudamos a conectar con <strong>oportunidades laborales de alto salario</strong> en Países Bajos, Alemania y más, con acompañamiento integral.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-lg mb-1">Pasaporte Europeo</p>
                        <p className="text-white/80 text-sm">Vigente y en regla</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-lg mb-1">Interés Real y Disponibilidad</p>
                        <p className="text-white/80 text-sm">Listo para viajar y trabajar</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-lg mb-1">Nivel Mínimo Comunicativo de Inglés</p>
                        <p className="text-white/80 text-sm">Para viajar, trabajar y vivir</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-lg mb-1">Posibilidad de Costear el Traslado</p>
                        <p className="text-white/80 text-sm">A Holanda, Alemania u otros destinos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/90 backdrop-blur-sm border-2 border-amber-400 rounded-xl p-6 mb-8 text-[#0f172a]">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-2">📄 Curriculum Vitae en Inglés</p>
                      <p className="text-sm mb-2">Por favor, tené tu CV actualizado en inglés listo para cuando te lo solicitemos. Si no lo tenés, no te preocupes: te ayudaremos a prepararlo y asesorarte antes de tu entrevista formal.</p>
                      <p className="text-xs text-gray-600">(Traducciones y armados de CV en inglés con costo)</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a
                    href="https://forms.gle/YEWvoBfqEkYr1SdY7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#004C97] hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <span>Completar Formulario de Pre-Entrevista</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/5493415402089"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-gray-200 font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp: +54 9 341 540 2089
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Colaboración - Empresas */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#F2F2F2] to-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
            alt="Colaboración"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#004C97]/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#004C97]">🤝 COLABORACIÓN ESTRATÉGICA</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
                Trabajemos Juntos
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Si sos una <strong>empresa, agencia de reclutamiento o afiliado</strong> buscando talento argentino con pasaporte europeo, tenemos el perfil que necesitás.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Video del Curriculum */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-xl"
              >
                <video
                  src="/contacto-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12 text-white">
                  <h3 className="text-3xl font-bold mb-3">Candidatos Pre-seleccionados</h3>
                  <p className="text-xl text-white/90">Perfiles verificados y listos para trabajar en Europa</p>
                </div>
              </motion.div>

              {/* Beneficios */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#004C97] mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    ¿Qué Ofrecemos?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Candidatos Pre-seleccionados</p>
                        <p className="text-sm text-gray-600">Con pasaporte europeo vigente y documentación en regla</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Proceso Completo de Reclutamiento</p>
                        <p className="text-sm text-gray-600">Desde la selección hasta la integración cultural</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Soporte Logístico</p>
                        <p className="text-sm text-gray-600">Gestión completa de traslado y alojamiento</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Modelos de Colaboración Flexibles</p>
                        <p className="text-sm text-gray-600">Para agencias, empresas y afiliados</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#004C97] to-[#003a72] rounded-2xl p-6 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Contacto para Colaboraciones</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-white/80 mb-2">Emails Corporativos</p>
                      <div className="space-y-2">
                        <a href="mailto:partners@nlbridgear.com" className="block text-white hover:text-gray-200 font-medium transition-colors">
                          📧 partners@nlbridgear.com
                        </a>
                        <a href="mailto:talento@nlbridgear.com" className="block text-white hover:text-gray-200 font-medium transition-colors">
                          📧 talento@nlbridgear.com
                        </a>
                        <a href="mailto:general@nlbridgear.com" className="block text-white hover:text-gray-200 font-medium transition-colors">
                          📧 general@nlbridgear.com
                        </a>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-sm font-semibold text-white/80 mb-2">WhatsApp</p>
                      <a 
                        href="https://wa.me/5493415402089" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-300 hover:text-green-200 font-medium transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        +54 9 341 540 2089
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#004C97]/20"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#0f172a] mb-2">Solicitar Información de Colaboración</h3>
                <p className="text-gray-600">Completá el formulario y te contactaremos en menos de 24 horas</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Empresa / Agencia *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all"
                      placeholder="Nombre de la empresa o agencia"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all"
                      placeholder="Código país + número"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all resize-none"
                    placeholder="Ej: Necesitamos 3 perfiles de logística con disponibilidad para relocalización en 30 días. ¿Qué modelos de colaboración ofrecen?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#004C97] hover:bg-[#003a72] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {status === 'loading' ? 'Enviando…' : status === 'success' ? 'Enviado' : 'Enviar Solicitud'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 font-medium text-center">¡Gracias! Un asesor se contactará contigo en las próximas 24 horas.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 font-medium text-center">{error}</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Información de Contacto General */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">Información de contacto</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#004C97]/10 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-[#004C97]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:general@nlbridgear.com" className="text-[#004C97] hover:underline">
                      general@nlbridgear.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-[#004C97]/10 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-[#004C97]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Teléfono (Argentina)</p>
                    <a 
                      href="https://wa.me/5493415402089" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      +54 9 341 540 2089
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-[#004C97]/10 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-[#004C97]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Teléfono (Europa - Holanda)</p>
                    <a 
                      href="https://wa.me/34672705063" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      +34 672 705 063
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-[#004C97]/10 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-[#004C97]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Rosario, Santa Fe, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="font-semibold text-gray-900 mb-4">Seguinos en redes</p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://www.instagram.com/puente.europa?igsh=dTY0dXdzeTY2aTdj" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-[#004C97] hover:bg-[#003a72] text-white rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1Awszxhpwh/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-[#004C97] hover:bg-[#003a72] text-white rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
