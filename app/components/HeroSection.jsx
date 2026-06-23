'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef(null)
  const containerRef = useRef(null)
  const slidesRef = useRef([])
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600',
      title: 'Gaming',
      category: 'Esports',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600',
      title: 'Technology',
      category: 'Innovation',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600',
      title: 'Design',
      category: 'Creative',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600',
      title: 'Data',
      category: 'Analytics',
    },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      tl.fromTo(
        '.hero-badge',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }
      )
        .fromTo(
          '.hero-title',
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.3'
        )
        .fromTo(
          '.hero-subtitle',
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .fromTo(
          '.hero-cta',
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.5'
        )

      if (heroRef.current) {
        gsap.to(heroRef.current, {
          scale: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        })
      }
    }, containerRef)

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => {
      clearInterval(interval)
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return

      gsap.to(slide, {
        opacity: index === activeSlide ? 1 : 0,
        scale: index === activeSlide ? 1 : 1.05,
        duration: 1,
        ease: 'power3.inOut',
      })
    })
  }, [activeSlide])

  return (
    <div ref={containerRef}>
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-[#f7f5f2]"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f2] via-[#f7f5f2]/80 to-transparent z-10"></div>

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => {
                slidesRef.current[index] = el
              }}
              className="absolute inset-0"
              style={{
                opacity: index === 0 ? 1 : 0,
              }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          ))}

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f5f2] to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 h-screen flex items-center">
          <div className="max-w-3xl">
            <div className="hero-badge inline-block bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-1.5 mb-6 opacity-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-600">
                WE ARE CREATIVE AGENCY BASED IN TWIN CITY OF MUMBAI
              </span>
            </div>

            <h1 className="hero-title opacity-0">
              <span className="block text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight">
                Your in-house
              </span>

              <span className="block text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight">
                design &
              </span>

              <span className="block text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight">
                engineering
                <span className="text-gray-300 ml-4">team</span>
              </span>
            </h1>

            <p className="hero-subtitle mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed opacity-0">
              Together, we can transform forward-thinking ideas into futuristic
              solutions with our robust technology and scalable design approach.
            </p>

            <div className="hero-cta mt-10 opacity-0">
              <button className="group bg-black text-white px-8 py-3.5 rounded-full text-sm tracking-wider flex items-center gap-3">
                <span>LET&apos;S TALK</span>

                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'w-8 bg-black'
                    : 'w-2 bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}