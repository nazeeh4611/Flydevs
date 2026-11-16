import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ServicesClient from '../components/ServicesClient'

export const metadata = {
  title: 'Services',
  description:
    'Web development, VoIP solutions, software, mobile apps and digital marketing from Flydevs Global and Nacrosoft Technology — a trusted technology partner since 2015.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services', title: 'Services · Flydevs Global' },
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <ServicesClient />
      </main>
      <Footer />
    </>
  )
}
