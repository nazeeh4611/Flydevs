'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MAIN_TEXT =
  'We work with people that challenge us creatively. Who let us think without walls to arrive at the best possible creative solution. Partnerships are based on trust and this can only happen when both parties share the same vision and are driven to succeed.'

const SUB_TEXT = 'This is what we call the FLYDEVS PARTNERSHIP.'

export default function TextRevealSection() {
  const sectionRef = useRef(null)
  const mainRef = useRef(null)
  const subRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main paragraph — word by word reveal
      const mainWords = mainRef.current.querySelectorAll('.word')
      gsap.fromTo(
        mainWords,
        { color: '#d0d0d0' },
        {
          color: '#111111',
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      )

      // Sub line — word by word reveal, starts after main
      const subWords = subRef.current.querySelectorAll('.word')
      gsap.fromTo(
        subWords,
        { color: '#d0d0d0' },
        {
          color: '#111111',
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: {
            trigger: subRef.current,
            start: 'top 80%',
            end: 'bottom 55%',
            scrub: 1.2,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const wrapWords = (text, extraClass = '') =>
    text.split(' ').map((word, i) => (
      <span
        key={i}
        className={`word ${extraClass}`}
        style={{
          color: '#d0d0d0',
          display: 'inline-block',
          whiteSpace: 'pre',
        }}
      >
        {word}{' '}
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#ffffff',
        padding: '120px 24px 160px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Main paragraph */}
      <p
        ref={mainRef}
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 'clamp(22px, 3.2vw, 42px)',
          fontWeight: 400,
          lineHeight: 1.55,
          textAlign: 'center',
          maxWidth: 860,
          margin: '0 auto 64px',
          letterSpacing: '-0.01em',
        }}
      >
        {wrapWords(MAIN_TEXT)}
      </p>

      {/* Sub line */}
      <p
        ref={subRef}
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 'clamp(18px, 2.2vw, 30px)',
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto',
          letterSpacing: '0.01em',
        }}
      >
        {SUB_TEXT.split(' ').map((word, i) => {
          const isBold = ['FLYDEVS', 'PARTNERSHIP.'].includes(word)
          return (
            <span
              key={i}
              className="word"
              style={{
                color: '#d0d0d0',
                display: 'inline-block',
                whiteSpace: 'pre',
                fontWeight: isBold ? 700 : 400,
                fontFamily: isBold
                  ? "'Helvetica Neue', Arial, sans-serif"
                  : "'Georgia', serif",
              }}
            >
              {word}{' '}
            </span>
          )
        })}
      </p>
    </section>
  )
}