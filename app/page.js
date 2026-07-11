'use client'

import { useState } from 'react'

import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'
import PartnerSection from './components/PartnerSection'
import Navigation from './components/Navigation'
import TextRevealSection from './components/TextRevealSection'
import FeaturedWorkSection from './components/FeaturedWorkSection'
import ServicesSection from './components/ServiceSection'
import TestimonialsSection from './components/Testimonials'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function SectionWrapper({ children }) {
  return (
    <div
      style={{
        marginBottom: 'clamp(40px, 8vw, 100px)',
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [showLoading, setShowLoading] = useState(() => {
    if (typeof window === 'undefined') return false

    return !localStorage.getItem('hasVisited')
  })

  const handleLoadingComplete = () => {
    localStorage.setItem('hasVisited', 'true')
    setShowLoading(false)
  }

  return (
    <>
      <Navigation />

      {showLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <main className="relative">
          <SectionWrapper>
            <HeroSection />
          </SectionWrapper>

          <SectionWrapper>
            <PartnerSection />
          </SectionWrapper>

          <SectionWrapper>
            <TextRevealSection />
          </SectionWrapper>

          <SectionWrapper>
            <FeaturedWorkSection />
          </SectionWrapper>

          <SectionWrapper>
            <ServicesSection />
          </SectionWrapper>

          <SectionWrapper>
            <TestimonialsSection />
          </SectionWrapper>

          <SectionWrapper>
            <FaqSection />
          </SectionWrapper>

          <SectionWrapper>
            <ContactSection />
          </SectionWrapper>

          <Footer />
        </main>
      )}
    </>
  )
}