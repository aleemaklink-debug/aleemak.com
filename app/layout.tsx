import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'ALEEMAK — Business, Digital & Postal Solutions',
    template: '%s | ALEEMAK',
  },
  description:
    'ALEEMAK is a modern business service center helping small businesses, entrepreneurs and online sellers with business setup, digital solutions, accounting support, design and postal dispatch — all in one place.',
  keywords: [
    'business services',
    'business setup',
    'digital business services',
    'postal services',
    'parcel booking',
    'online seller dispatch',
    'MSME assistance',
    'GST assistance',
    'Tally support',
    'business support Tiruppur',
  ],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: 'ALEEMAK',
    title: 'ALEEMAK — Business, Digital & Postal Solutions',
    description:
      'From Business Idea to Running System. Practical business, digital and postal solutions for small businesses and entrepreneurs.',
    images: [{ url: '/aleemak-logo.png', width: 1200, height: 1100, alt: 'ALEEMAK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALEEMAK — Business, Digital & Postal Solutions',
    description:
      'From Business Idea to Running System. Practical business, digital and postal solutions.',
    images: ['/aleemak-logo.png'],
  },
  icons: {
    icon: '/aleemak-logo.png',
    apple: '/aleemak-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111110',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.description,
    url: site.url,
    slogan: site.tagline,
    areaServed: site.region,
    image: `${site.url}/aleemak-logo.png`,
    knowsAbout: [
      'Business Setup',
      'Digital Solutions',
      'Postal & Dispatch',
      'Accounting Support',
      'Design Services',
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
