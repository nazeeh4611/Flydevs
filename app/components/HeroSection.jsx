'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef(null)
  const containerRef = useRef(null)
  const imageWrapRef = useRef(null)
  const imageRef = useRef(null)
  const imageCardRef = useRef(null)
  const ctaRef = useRef(null)

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
          '.hero-title-line',
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.08,
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
        .fromTo(
          imageWrapRef.current,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power4.out',
          },
          '-=0.9'
        )
        .fromTo(
          imageRef.current,
          {
            scale: 1.25,
          },
          {
            scale: 1.05,
            duration: 1.4,
            ease: 'power4.out',
          },
          '-=1.4'
        )

      if (heroRef.current) {
        gsap.to(heroRef.current, {
          scale: 0.97,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        })
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        })
      }

      const card = imageCardRef.current
      const image = imageRef.current
      if (card && image && window.matchMedia('(pointer: fine)').matches) {
        const xTo = gsap.quickTo(card, 'rotationY', {
          duration: 0.6,
          ease: 'power3.out',
        })
        const yTo = gsap.quickTo(card, 'rotationX', {
          duration: 0.6,
          ease: 'power3.out',
        })
        const imgXTo = gsap.quickTo(image, 'x', {
          duration: 0.6,
          ease: 'power3.out',
        })
        const imgYTo = gsap.quickTo(image, 'y', {
          duration: 0.6,
          ease: 'power3.out',
        })

        gsap.set(card, { transformPerspective: 900 })

        const handleMove = (e) => {
          const rect = card.getBoundingClientRect()
          const relX = (e.clientX - rect.left) / rect.width - 0.5
          const relY = (e.clientY - rect.top) / rect.height - 0.5

          xTo(relX * 10)
          yTo(relY * -10)
          imgXTo(relX * -16)
          imgYTo(relY * -16)
        }

        const handleLeave = () => {
          xTo(0)
          yTo(0)
          imgXTo(0)
          imgYTo(0)
        }

        card.addEventListener('mousemove', handleMove)
        card.addEventListener('mouseleave', handleLeave)

        return () => {
          card.removeEventListener('mousemove', handleMove)
          card.removeEventListener('mouseleave', handleLeave)
        }
      }
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [])

  useLayoutEffect(() => {
    const button = ctaRef.current
    if (!button || !window.matchMedia('(pointer: fine)').matches) return

    const xTo = gsap.quickTo(button, 'x', { duration: 0.4, ease: 'power3.out' })
    const yTo = gsap.quickTo(button, 'y', { duration: 0.4, ease: 'power3.out' })

    const handleMove = (e) => {
      const rect = button.getBoundingClientRect()
      const relX = e.clientX - rect.left - rect.width / 2
      const relY = e.clientY - rect.top - rect.height / 2
      xTo(relX * 0.3)
      yTo(relY * 0.4)
    }

    const handleLeave = () => {
      xTo(0)
      yTo(0)
    }

    button.addEventListener('mousemove', handleMove)
    button.addEventListener('mouseleave', handleLeave)

    return () => {
      button.removeEventListener('mousemove', handleMove)
      button.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <section
        ref={heroRef}
        className="relative min-h-screen bg-[#f7f5f2] overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-4 sm:pt-6 lg:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-center">
            <div className="max-w-2xl order-2 lg:order-1">
              <div className="hero-badge inline-block bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 mb-6 opacity-0 max-w-full">
                <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-600 whitespace-normal">
                  WE ARE CREATIVE AGENCY BASED IN TWIN CITY OF MUMBAI
                </span>
              </div>

              <h1 className="font-bold leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,5.5rem)]">
                <span className="hero-title-line block opacity-0">
                  Your in-house
                </span>
                <span className="hero-title-line block opacity-0">
                  design &amp;
                </span>
                <span className="hero-title-line block opacity-0 flex-wrap flex items-baseline gap-3 sm:gap-4">
                  engineering
                  <span className="text-gray-300">team</span>
                </span>
              </h1>

              <p className="hero-subtitle mt-6 max-w-xl text-base md:text-lg text-gray-600 leading-relaxed opacity-0">
                Together, we can transform forward-thinking ideas into futuristic
                solutions with our robust technology and scalable design approach.
              </p>

              <div className="hero-cta mt-10 opacity-0">
                <button
                  ref={ctaRef}
                  className="group bg-black text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-wider flex items-center gap-3"
                >
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

            <div className="w-full order-1 lg:order-2 relative">
              <div
                ref={imageCardRef}
                className="relative mx-auto max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-none aspect-[4/5] sm:aspect-[4/5] w-full"
                style={{ willChange: 'transform' }}
              >
                <div
                  ref={imageWrapRef}
                  className="absolute inset-[-15%] sm:inset-[-20%] flex items-center justify-center overflow-visible"
                >
                  <img
                    ref={imageRef}
                    src="/fd.avif"
                    alt="Logo"
                    className="w-[140%] sm:w-[160%] md:w-[180%] lg:w-[200%] h-[140%] sm:h-[160%] md:h-[180%] lg:h-[200%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}