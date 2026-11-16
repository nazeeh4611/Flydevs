import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { AboutClient } from '../components/AboutClient'

export const metadata = {
  title: 'About',
  description:
    'From a 2015 classroom startup to a technology partner in Dubai and Kochi — the story, people and expertise behind Flydevs Global and Nacrosoft Technology.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about', title: 'About · Flydevs Global' },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <AboutClient />
      </main>
      <Footer />
    </>
  )
}
