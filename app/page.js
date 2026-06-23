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
import ContactSection from './components/ContactSection.jsx'
export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Navigation />
      
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <main className="relative">
          <HeroSection />
          <PartnerSection />
          <TextRevealSection />
          <FeaturedWorkSection/>
          <ServicesSection/>
          <TestimonialsSection/>
          <FaqSection/>
          <ContactSection/>
          
          {/* Next Section */}
          {/* <section className="min-h-[60vh] bg-white flex items-center justify-center border-t border-gray-100">
            <div className="text-center px-6 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-xs tracking-wider uppercase text-gray-600 mb-6">
                Coming Soon
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                Next Section
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                This space is reserved for your next component.
              </p>
              <div className="mt-8 flex justify-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </section> */}
        </main>
      )}
    </>
  )
}