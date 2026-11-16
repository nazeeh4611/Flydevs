'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MAIN_TEXT =
  'We work with people that challenge us creatively. Who let us think without walls to arrive at the best possible solution. Partnerships are built on trust, and that only happens when both sides share the same vision and are driven to succeed.'

export default function TextRevealSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sectionRef.current?.querySelectorAll('.word').forEach((w) => (w.style.color = '#1a1a1a'))
      return
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.main-copy .word',
        { color: '#cfcac2' },
        {
          color: '#1a1a1a',
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: { trigger: '.main-copy', start: 'top 75%', end: 'bottom 45%', scrub: 1 },
        }
      )
      gsap.fromTo(
        '.sub-copy .word',
        { color: '#cfcac2' },
        {
          color: '#1a1a1a',
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: { trigger: '.sub-copy', start: 'top 85%', end: 'bottom 65%', scrub: 1 },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const words = (text) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="word" style={{ color: '#cfcac2' }}>
        {word}{' '}
      </span>
    ))

  return (
    <section ref={sectionRef} className="border-y border-ink/[0.08] bg-card py-24 md:py-32">
      <div className="shell">
        <p className="main-copy mx-auto max-w-4xl text-center text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-[1.2] tracking-[-0.03em]">
          {words(MAIN_TEXT)}
        </p>
        <p className="sub-copy mx-auto mt-12 max-w-2xl text-center text-[clamp(1rem,1.6vw,1.25rem)] font-medium">
          {words('This is what we call the')}
          <span className="word" style={{ color: '#cfcac2' }}>
            Flydevs partnership
          </span>
        </p>
      </div>
    </section>
  )
}
