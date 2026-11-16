import Navigation from './components/Navigation'
import LoadingGate from './components/LoadingGate'
import HeroSection from './components/HeroSection'
import PartnerSection from './components/PartnerSection'
import TextRevealSection from './components/TextRevealSection'
import FeaturedWorkSection from './components/FeaturedWorkSection'
import ServicesSection from './components/ServiceSection'
import TestimonialsSection from './components/Testimonials'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

// Runs before first paint: marks first-time visitors so a cover hides the page
// until the intro screen mounts (no flash, no hydration mismatch).
const firstVisitScript = `try{if(!localStorage.getItem('hasVisited')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.intro='1'}}catch(e){}`

export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: firstVisitScript }} />
      <LoadingGate />
      <Navigation />
      <main id="main">
        <HeroSection />
        <PartnerSection />
        <TextRevealSection />
        <FeaturedWorkSection />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
