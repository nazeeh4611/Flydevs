import './globals.css'
import { Inter } from 'next/font/google'
import { site } from './lib/site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Design & engineering studio in Kochi and Dubai`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'web development Dubai',
    'web design Kerala',
    'software development',
    'mobile app development',
    'VoIP solutions',
    'digital marketing',
    'branding agency',
    'Flydevs Global',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
    url: '/',
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  alternates: { canonical: '/' },
}

export const viewport = {
  themeColor: '#f7f5f2',
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phones[0].display,
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
    { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'Kerala', addressCountry: 'IN' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
