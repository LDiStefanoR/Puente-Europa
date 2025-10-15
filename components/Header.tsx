'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur border-b border-gray-200' : 'bg-white border-b border-gray-100'}`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#004C97] text-white font-bold">
              PE
            </div>
            <span className="text-lg font-semibold text-gray-900">
              <span className="text-[#004C97]">Puente</span> Europa
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-[#004C97] font-semibold' : 'text-gray-700 hover:text-[#004C97]'}`}>Inicio</Link>
            <Link href="/empresas" className={`transition-colors ${pathname === '/empresas' ? 'text-[#004C97] font-semibold' : 'text-gray-700 hover:text-[#004C97]'}`}>Empresas</Link>
            <Link href="/candidatos" className={`transition-colors ${pathname === '/candidatos' ? 'text-[#004C97] font-semibold' : 'text-gray-700 hover:text-[#004C97]'}`}>Candidatos</Link>
            <Link href="/contacto" className={`transition-colors ${pathname === '/contacto' ? 'text-[#004C97] font-semibold' : 'text-gray-700 hover:text-[#004C97]'}`}>Contacto</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contacto" className="btn-primary">
              Postularme
            </Link>
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
            <Link href="/" className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link href="/empresas" className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]" onClick={() => setIsMenuOpen(false)}>Empresas</Link>
            <Link href="/candidatos" className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]" onClick={() => setIsMenuOpen(false)}>Candidatos</Link>
            <Link href="/contacto" className="block w-full text-left py-2 text-gray-700 hover:text-[#004C97]" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            <Link href="/contacto" className="btn-primary w-full block text-center" onClick={() => setIsMenuOpen(false)}>Postularme</Link>
          </div>
        </div>
      )}
    </header>
  )
}
