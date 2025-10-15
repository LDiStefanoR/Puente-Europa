'use client'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center bg-[#F2F2F2]">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
          alt="Equipo profesional trabajando"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/90" />
      </div>

      <div className="container-max section-padding relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight">
            Conectamos empresas europeas con talento argentino calificado
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
            Puente Europa gestiona todo el proceso: selección, documentación, traslado y alojamiento.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Solicitar personal ahora
            </a>
            <a href="#companies" className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#004C97] text-[#004C97] rounded-lg font-semibold hover:bg-[#004C97] hover:text-white transition-all duration-300">
              Cómo trabajamos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}



