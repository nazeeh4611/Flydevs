import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PortfolioClient from '../components/PortfolioClient'

export const metadata = {
  title: 'Work',
  description:
    'Live websites and platforms we designed and built for hospitality, healthcare, retail and media businesses across the UAE, India and Saudi Arabia.',
  alternates: { canonical: '/work' },
  openGraph: { url: '/work', title: 'Work · Flydevs Global' },
}

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <PortfolioClient />
      </main>
      <Footer />
    </>
  )
}
