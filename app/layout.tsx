import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { SessionProvider } from '@/components/providers/SessionProvider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Nouvelle Santé Formation - VAE Aide-Soignant & Auxiliaire de Vie',
    template: '%s | Nouvelle Santé Formation',
  },
  description:
    'Transformez votre expérience en diplôme reconnu par l\'État. Formation VAE Aide-Soignant (DEAS) et Auxiliaire de Vie (DEAES). Éligible CPF.',
  keywords: [
    'VAE',
    'Aide-Soignant',
    'Auxiliaire de Vie',
    'DEAS',
    'DEAES',
    'Formation',
    'CPF',
    'Diplôme',
    'Santé',
  ],
  authors: [{ name: 'Nouvelle Santé Formation' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nouvelle Santé Formation',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton phoneNumber="33XXXXXXXXX" />
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
