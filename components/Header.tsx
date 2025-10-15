'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('top')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#004C97] text-white font-bold">
              PE
            </div>
            <span className="text-lg font-semibold text-gray-900">
              <span className="text-[#004C97]">Puente</span> Europa
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('hero')} className="text-gray-700 hover:text-[#004C97] transition-colors">Inicio</button>
            <button onClick={() => scrollTo('companies')} className="text-gray-700 hover:text-[#004C97] transition-colors">Empresas</button>
            <button onClick={() => scrollTo('candidates')} className="text-gray-700 hover:text-[#004C97] transition-colors">Candidatos</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-[#004C97] transition-colors">Contacto</button>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button onClick={() => scrollTo('contact')} className="btn-primary">
              Solicitar Talento
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
            <span className="sr-only">Menu</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            <button onClick={() => scrollTo('hero')} className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]">Inicio</button>
            <button onClick={() => scrollTo('companies')} className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]">Empresas</button>
            <button onClick={() => scrollTo('candidates')} className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]">Candidatos</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]">Contacto</button>
            <button onClick={() => scrollTo('contact')} className="btn-primary w-full">Solicitar Talento</button>
          </div>
        </div>
      )}
    </header>
  )
}
