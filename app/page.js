'use client'

import { useState, useEffect } from 'react'
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
    <div style={{ 
      marginBottom: 'clamp(40px, 8vw, 100px)',
    }}>
      {children}
    </div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    
    if (hasVisited) {
      setIsFirstVisit(false)
      setLoading(false)
    } else {
      setIsFirstVisit(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    localStorage.setItem('hasVisited', 'true')
    setLoading(false)
  }

  return (
    <>
      <Navigation />
      
      {loading && isFirstVisit ? (
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