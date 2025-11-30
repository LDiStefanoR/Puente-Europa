import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Puente Europa - Trabajo y movilidad en Europa',
  description: 'Conectamos talentos argentinos con oportunidades laborales en Europa. Asesoramos, filtramos y acompañamos tu experiencia para trabajar en Holanda y más destinos europeos.',
  keywords: 'trabajo europa, empleo holanda, argentinos europa, visa trabajo, experiencia internacional',
  authors: [{ name: 'Leonardo Rodríguez Di Stefano' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
        <WhatsAppFloatButton />
      </body>
    </html>
  )
}


