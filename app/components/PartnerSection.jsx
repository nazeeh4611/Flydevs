'use client'

import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    id: 1,
    bg: '#C85A1E',
    title: 'Brand Strategy',
    tags: ['Strategy', 'Identity', 'Tools', 'Launch', 'Building'],
    rotate: -6,
    translateY: -20,
  },
  {
    id: 2,
    bg: '#1a1a1a',
    title: 'Brand Identity.',
    subtitle: 'We are a one-stop creative provider for modern digital businesses.',
    rotate: -2,
    translateY: 0,
    accent: '#C85A1E',
  },
  {
    id: 3,
    bg: '#ffffff',
    title: 'Impelsys',
    isScreen: true,
    rotate: 2,
    translateY: 10,
  },
  {
    id: 4,
    bg: '#f5c842',
    title: 'The kids CARNIVAL',
    isKids: true,
    rotate: 5,
    translateY: -10,
  },
  {
    id: 5,
    bg: '#1B1B3A',
    title: 'We partner with visionary entrepreneurs',
    rotate: 2,
    translateY: 15,
  },
]

const partners = [
  {
    id: 1,
    name: 'focusU',
    suffix: 'BE MORE!',
    font: 'font-black',
    color: '#1a1a1a',
    suffixBg: '#f5c842',
  },
  {
    id: 2,
    name: 'MakeStories',
    font: 'font-semibold',
    color: '#1a1a1a',
    dot: '#b5e319',
  },
  {
    id: 3,
    name: 'TurboHire',
    font: 'font-bold',
    color: '#1a1a1a',
    prefix: 'TH',
    prefixBg: '#1a1a1a',
    prefixColor: '#fff',
  },
  {
    id: 4,
    name: 'Mercer',
    font: 'font-bold',
    color: '#1a1a1a',
    hasIcon: true,
  },
  {
    id: 5,
    name: "Let's Talk",
    font: 'font-bold',
    color: '#1a1a1a',
    isCircle: true,
    circleBg: '#c8e83a',
  },
]

function SlideCard({ slide, index, activeIndex }) {
  const offset = index - activeIndex
  const visible = Math.abs(offset) <= 2

  const xMap = { '-2': -420, '-1': -210, 0: 0, 1: 210, 2: 420 }
  const scaleMap = { '-2': 0.78, '-1': 0.88, 0: 1, 1: 0.88, 2: 0.78 }
  const opacityMap = { '-2': 0.4, '-1': 0.7, 0: 1, 1: 0.7, 2: 0.4 }
  const zMap = { '-2': 1, '-1': 2, 0: 5, 1: 2, 2: 1 }

  const clampedOffset = Math.max(-2, Math.min(2, offset))
  const x = xMap[clampedOffset] ?? (offset > 0 ? 500 : -500)
  const scale = scaleMap[clampedOffset] ?? 0.6
  const opacity = opacityMap[clampedOffset] ?? 0
  const z = zMap[clampedOffset] ?? 0

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 260,
        height: 320,
        transform: `translateX(calc(-50% + ${x}px)) translateY(calc(-50% + ${slide.translateY}px)) rotate(${slide.rotate}deg) scale(${scale})`,
        opacity: visible ? opacity : 0,
        zIndex: z,
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
      }}
    >
      {slide.isScreen ? (
        <div style={{ background: '#f0f0f0', width: '100%', height: '100%', padding: 16 }}>
          <div style={{ background: '#fff', borderRadius: 8, padding: 12, height: '100%', fontSize: 8, color: '#333' }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{ fontWeight: 700, fontSize: 10, marginBottom: 6, color: '#2563eb' }}>Impelsys</div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 8, flexWrap: 'wrap' }}>
              {['Products & Platforms', 'Technology Services', 'Learning & Content'].map(t => (
                <span key={t} style={{ fontSize: 6, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              <div style={{ background: '#f9fafb', borderRadius: 4, padding: 4 }}>
                <div style={{ fontWeight: 700, fontSize: 7 }}>Scholar 3.0 Platform</div>
                <div style={{ fontSize: 6, color: '#6b7280', marginTop: 2 }}>Next gen scholarly hosting and distribution platform</div>
              </div>
              <div style={{ background: '#eff6ff', borderRadius: 4, padding: 4 }}>
                <div style={{ fontWeight: 700, fontSize: 7 }}>Scholar AI Cloud</div>
                <div style={{ fontSize: 6, color: '#6b7280', marginTop: 2 }}>AI-powered solutions for publishers</div>
              </div>
            </div>
            <div style={{ marginTop: 8, background: '#1e293b', borderRadius: 6, padding: 8 }}>
              <div style={{ color: '#fff', fontSize: 8, fontWeight: 600 }}>A business that cares about your technological growth</div>
            </div>
          </div>
        </div>
      ) : slide.isKids ? (
        <div style={{ background: 'linear-gradient(135deg, #f5c842 40%, #7c3aed 100%)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 16 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1, fontStyle: 'italic' }}>
            The kids<br />
            <span style={{ color: '#7c3aed', fontSize: 32 }}>CARNIVAL</span>
          </div>
          <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {['Creative Showroom', "Kids Space", "Xpert Speak", "Achievers Corner"].map(item => (
              <div key={item} style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 6, padding: 6 }}>
                <div style={{ fontSize: 7, fontWeight: 700, color: '#1a1a1a' }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ background: slide.bg, width: '100%', height: '100%', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: slide.id === 1 ? 'flex-start' : 'center' }}>
          {slide.id === 1 && (
            <>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {slide.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>{tag}</span>
                ))}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Branding</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Brand Strategy</div>
              <div style={{ marginTop: 20, width: 60, height: 60, borderRadius: '50%', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '14px solid #fff', marginLeft: 3 }} />
              </div>
              <div style={{ marginTop: 16, fontSize: 20, fontWeight: 900, color: '#fff' }}>Brand<br />Launch.</div>
            </>
          )}
          {slide.id === 2 && (
            <>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>{slide.title}</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, marginBottom: 'auto' }}>{slide.subtitle}</div>
              <div style={{ marginTop: 'auto', fontSize: 22, fontWeight: 900, color: slide.accent }}>Want more<br />Stories<br />Like this?</div>
            </>
          )}
          {slide.id === 5 && (
            <>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>We partner with</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1.2 }}>
                visionary<br />
                <span style={{ fontStyle: 'italic', color: '#a78bfa' }}>entrepreneurs</span><br />
                to build legendary<br />businesses
              </div>
              <div style={{ marginTop: 12, fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>and for the world</div>
              <div style={{ marginTop: 16, display: 'flex', gap: 6 }}>
                {['Our Investments', 'Our Partnerships'].map(t => (
                  <div key={t} style={{ fontSize: 8, color: '#a78bfa', borderBottom: '1px solid #a78bfa', paddingBottom: 2 }}>{t}</div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function PartnerSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length)
    }, 2800)
  }

  useEffect(() => {
    startAutoSlide()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleDotClick = (i) => {
    setActiveIndex(i)
    clearInterval(intervalRef.current)
    startAutoSlide()
  }

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #fdf8f0 0%, #f7f5ee 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Sliding Cards Area */}
      <div
        style={{
          position: 'relative',
          height: 420,
          overflow: 'hidden',
          marginTop: 48,
        }}
      >
        {slides.map((slide, i) => (
          <SlideCard key={slide.id} slide={slide} index={i} activeIndex={activeIndex} />
        ))}

        {/* Dots */}
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 6,
            zIndex: 10,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              style={{
                width: i === activeIndex ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === activeIndex ? '#1a1a1a' : 'rgba(0,0,0,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '56px 32px 72px',
          width: '100%',
        }}
      >
        {/* Headline */}
        <p
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(16px, 2.2vw, 22px)',
            color: '#2a2a2a',
            textAlign: 'center',
            marginBottom: 52,
            letterSpacing: '-0.01em',
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Our clients are{' '}
          <strong style={{ fontWeight: 800, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            entrepreneurs, change-makers & corporates
          </strong>{' '}
          doing good —
        </p>

        {/* Partner Logos Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {/* focusU */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 900,
                fontSize: 28,
                color: '#1a1a1a',
                letterSpacing: '-0.03em',
              }}
            >
              focusU
            </span>
            <span
              style={{
                background: '#f5c842',
                color: '#1a1a1a',
                fontSize: 9,
                fontWeight: 800,
                padding: '3px 6px',
                borderRadius: 4,
                letterSpacing: '0.05em',
                lineHeight: 1.2,
              }}
            >
              BE<br />MORE!
            </span>
          </div>

          {/* MakeStories */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: '#b5e319',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
              }}
            >
              MakeStories
            </span>
          </div>

          {/* TurboHire */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                background: '#1a1a1a',
                color: '#fff',
                fontWeight: 900,
                fontSize: 13,
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                letterSpacing: '-0.02em',
                flexShrink: 0,
              }}
            >
              TH
            </div>
            <span
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
              }}
            >
              <strong>Turbo</strong>Hire
            </span>
          </div>

          {/* Mercer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M0 10L5 2L10 10L5 18Z" fill="#1a1a1a" />
              <path d="M8 10L13 2L18 10L13 18Z" fill="#1a1a1a" opacity="0.6" />
              <path d="M16 10L21 2L26 10L21 18Z" fill="#1a1a1a" opacity="0.35" />
            </svg>
            <span
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: '#1a1a1a',
                letterSpacing: '-0.01em',
              }}
            >
              Mercer
            </span>
          </div>

          {/* Let's Talk circle badge */}
          <div
            style={{
              position: 'relative',
              width: 72,
              height: 72,
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 72 72" width="72" height="72">
              <circle cx="36" cy="36" r="34" fill="#c8e83a" />
              <path
                id="circlePath"
                d="M 36 36 m -26 0 a 26 26 0 1 1 52 0 a 26 26 0 1 1 -52 0"
                fill="none"
              />
              <text
                fontSize="9"
                fontWeight="700"
                letterSpacing="2.5"
                fontFamily="'Helvetica Neue', Arial, sans-serif"
                fill="#1a1a1a"
              >
                <textPath href="#circlePath">
                  LET'S TALK · LET'S TALK · LET'S
                </textPath>
              </text>
              {/* Arrow icon in center */}
              <g transform="translate(28, 28)">
                <path d="M4 8 L12 8 L12 4 L16 8 L12 12 L12 8" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}