import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ContactClient } from '../components/ContactClient'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Flydevs Global in Dubai and Kochi about web development, software, mobile apps, VoIP or digital marketing.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact', title: 'Contact · Flydevs Global' },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <ContactClient />
      </main>
      <Footer />
    </>
  )
}
