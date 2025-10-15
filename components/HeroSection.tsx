'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
          alt="Avión despegando - Nuevas oportunidades"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004C97]/90 via-[#004C97]/70 to-transparent" />
      </div>

      <div className="container-max section-padding relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in">
            Cruzamos fronteras, conectamos talentos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Puente Europa es el enlace entre el talento argentino y las oportunidades laborales en Holanda y toda Europa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/candidatos" 
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#004C97] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Soy Candidato
            </Link>
            <Link 
              href="/empresas" 
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#004C97] transition-all duration-300"
            >
              Soy Empresa
            </Link>
          </div>

          <p className="text-sm text-white/70 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Acompañamos más de 100 historias de éxito entre Argentina y Europa
          </p>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}



