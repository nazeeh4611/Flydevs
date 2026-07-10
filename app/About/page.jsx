// app/about/page.js
'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a creative agency that builds digital experiences people love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for design and technology, FLYDEVS GLOBAL has grown into a full-service creative agency. We believe in the power of thoughtful design and clean engineering to create lasting impact.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower brands with exceptional digital experiences that combine aesthetic excellence with technical precision. We&apos;re your in-house design and engineering team.
              </p>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-3xl font-light text-gray-900 mb-3">5+</div>
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider">Years Experience</h3>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-3xl font-light text-gray-900 mb-3">100+</div>
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider">Projects Delivered</h3>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-3xl font-light text-gray-900 mb-3">50+</div>
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider">Happy Clients</h3>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}