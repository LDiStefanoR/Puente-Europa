import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Puente Europa - Trabajo y movilidad en Europa',
  description: 'Conectamos talentos argentinos con oportunidades laborales en Europa. Asesoramos, filtramos y acompañamos tu experiencia para trabajar en Holanda y más destinos europeos.',
  keywords: 'trabajo europa, empleo holanda, argentinos europa, visa trabajo, experiencia internacional',
  authors: [{ name: 'Leonardo Rodríguez Di Stefano' }],
  openGraph: {
    title: 'Puente Europa - Trabajo y movilidad en Europa',
    description: 'Conectamos talentos argentinos con oportunidades laborales en Europa',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            async
            defer
          />
        )}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}


