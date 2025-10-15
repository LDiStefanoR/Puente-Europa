"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

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
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Form Empresas */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                Solicitar Asesoría
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contanos qué perfiles necesitás. Te enviaremos un shortlist inicial en 72 horas.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all duration-300"
                    placeholder="Nombre de la empresa"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Ej: Necesitamos 3 perfiles de logística con disponibilidad para relocalización en 30 días."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#004C97] hover:bg-[#003a72] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {status === 'loading' ? 'Enviando…' : status === 'success' ? 'Enviado' : 'Solicitar Asesoría'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 font-medium text-center">Gracias. Un asesor se contactará en las próximas 24h.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-medium text-center">{error}</p>
              )}
            </motion.form>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2000&auto=format&fit=crop"
                alt="Oficinas en Europa"
                width={600}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Reclutamiento llave en mano</h3>
                <p className="text-gray-200">Selección, visado, traslado y alojamiento coordinados por Puente Europa</p>
              </div>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#004C97]/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#004C97]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@puenteeuropa.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#004C97]/10 rounded-lg">
                    <Phone className="w-5 h-5 text-[#004C97]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+54 9 11 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#004C97]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#004C97]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Seguinos en redes</p>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/puenteeuropa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-[#004C97] hover:bg-[#003a72] text-white rounded-lg transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/company/puenteeuropa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-[#004C97] hover:bg-[#003a72] text-white rounded-lg transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


