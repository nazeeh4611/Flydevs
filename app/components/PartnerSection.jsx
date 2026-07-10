'use client'

import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    id: 1,
    bg: '#F4A621',
    title: 'Wavescation',
    subtitle: 'Holiday homes, vacation rentals & property management.',
    tags: ['Branding', 'Real Estate', 'Vacation', 'Logo', 'Web'],
    rotate: -5,
    translateY: -10,
    textColor: '#1e1e1e',
    accent: '#0A2F44',
  },
  {
    id: 2,
    bg: '#18233D',
    title: 'Alrkn Alraqy',
    subtitle: 'Premium hotel management and hospitality solutions.',
    tags: ['Hotel', 'Hospitality', 'Management', 'Luxury', 'Brand'],
    rotate: 3,
    translateY: 8,
    textColor: '#F5F0E8',
    accent: '#C9A96E',
  },
  {
    id: 3,
    bg: '#D7D7D7',
    title: 'Simpolo Trading LLC',
    subtitle: 'Crafted for quality, designed for delight.',
    tags: ['Trading', 'Business', 'Corporate', 'Branding', 'Identity'],
    rotate: -2,
    translateY: 15,
    textColor: '#1A1A1A',
    accent: '#B8860B',
  },
  {
    id: 4,
    bg: '#202020',
    title: 'Hatfak Huna',
    subtitle: 'Mobile phones & accessories trading L.L.C.',
    tags: ['Mobile', 'Electronics', 'Retail', 'Accessories', 'Store'],
    rotate: 4,
    translateY: -8,
    textColor: '#F0F0F0',
    accent: '#E63946',
  },
  {
    id: 5,
    bg: '#1565C0',
    title: 'Blue Diamond',
    subtitle: 'Luxury brand identity inspired by brilliance and trust.',
    tags: ['Luxury', 'Diamond', 'Premium', 'Identity', 'Logo'],
    rotate: -4,
    translateY: 12,
    textColor: '#FFFFFF',
    accent: '#B3E5FC',
  },
  {
    id: 6,
    bg: '#111111',
    title: 'Jungle Home',
    subtitle: 'Nature-inspired home décor and lifestyle brand.',
    tags: ['Home', 'Nature', 'Lifestyle', 'Brand', 'Interior'],
    rotate: 5,
    translateY: -15,
    textColor: '#E8F5E9',
    accent: '#66BB6A',
  },
  {
    id: 7,
    bg: '#102B6B',
    title: 'FBB Store',
    subtitle: 'Modern online shopping experience for everyday essentials.',
    tags: ['E-commerce', 'Store', 'Shopping', 'Retail', 'Digital'],
    rotate: -3,
    translateY: 10,
    textColor: '#FFFFFF',
    accent: '#FFB74D',
  },
  {
    id: 8,
    bg: '#0E0E0E',
    title: 'Eventra',
    subtitle: 'Professional event management & DJ entertainment.',
    tags: ['Events', 'Music', 'Entertainment', 'Production', 'Brand'],
    rotate: 6,
    translateY: -12,
    textColor: '#F5F5F5',
    accent: '#E040FB',
  },
  {
    id: 9,
    bg: '#2A155C',
    title: 'Media Mind Digital',
    subtitle: 'Your vision, our responsibility.',
    tags: ['Digital', 'Marketing', 'Media', 'Creative', 'Agency'],
    rotate: -5,
    translateY: 18,
    textColor: '#F3E5F5',
    accent: '#CE93D8',
  },
  {
    id: 10,
    bg: '#24B8A4',
    title: 'ASCO',
    subtitle: 'Creative branding and digital business solutions.',
    tags: ['Creative', 'Agency', 'Branding', 'Digital', 'Design'],
    rotate: 2,
    translateY: -5,
    textColor: '#1A2A2A',
    accent: '#FFD54F',
  },
]

const partners = [
  { id: 1, name: 'ZOYO Bath Fittings', src: '/p1.avif' },
  { id: 2, name: 'WaveScation', src: '/p2.avif' },
  { id: 3, name: 'Alrkn Alraqy Hotel Management', src: '/p3.avif' },
  { id: 4, name: 'Simpolo Trading LLC', src: '/p4.avif' },
  { id: 5, name: 'Hatfak Huna Mobile Phones & Accessories Trading LLC', src: '/p5.avif' },
  { id: 6, name: 'Blue Diamond', src: '/p6.avif' },
  { id: 7, name: 'Jungle Home', src: '/p7.avif' },
  { id: 8, name: 'FBB Store', src: '/p8.avif' },
  { id: 9, name: 'Eventra', src: '/p9.avif' },
  { id: 10, name: 'Media Mind Digital', src: '/p10.avif' },
  { id: 11, name: 'ZOYO Bath Fittings', src: '/p1.avif' },
  { id: 12, name: 'WaveScation', src: '/p2.avif' },
  { id: 13, name: 'Alrkn Alraqy Hotel Management', src: '/p3.avif' },
  { id: 14, name: 'Simpolo Trading LLC', src: '/p4.avif' },
  { id: 15, name: 'Hatfak Huna Mobile Phones & Accessories Trading LLC', src: '/p5.avif' },
  { id: 16, name: 'Blue Diamond', src: '/p6.avif' },
  { id: 17, name: 'Jungle Home', src: '/p7.avif' },
  { id: 18, name: 'FBB Store', src: '/p8.avif' },
  { id: 19, name: 'Eventra', src: '/p9.avif' },
  { id: 20, name: 'Media Mind Digital', src: '/p10.avif' },
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

  const { bg, title, subtitle, tags, textColor, accent } = slide

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 280,
        height: 340,
        transform: `translateX(calc(-50% + ${x}px)) translateY(calc(-50% + ${slide.translateY}px)) rotate(${slide.rotate}deg) scale(${scale})`,
        opacity: visible ? opacity : 0,
        zIndex: z,
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 25px 70px rgba(0,0,0,0.20)',
        background: bg,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: textColor || '#fff',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: accent || 'rgba(255,255,255,0.2)',
          borderRadius: '20px 20px 0 0',
        }}
      />
      {tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: textColor ? `${textColor}99` : 'rgba(255,255,255,0.6)',
                background: textColor ? `${textColor}15` : 'rgba(255,255,255,0.08)',
                padding: '3px 10px',
                borderRadius: 20,
                backdropFilter: 'blur(2px)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div
        style={{
          fontSize: 26,
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: 8,
          letterSpacing: '-0.02em',
          color: textColor || '#fff',
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            opacity: 0.85,
            lineHeight: 1.5,
            marginBottom: 12,
            color: textColor || '#fff',
          }}
        >
          {subtitle}
        </div>
      )}
      <div
        style={{
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: accent || 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            fontWeight: 300,
            color: textColor || '#fff',
            opacity: 0.7,
          }}
        >
          ✦
        </div>
      </div>
    </div>
  )
}

function PartnerMarquee() {
  const loopItems = [...partners, ...partners]

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        padding: '20px 0',
        background: 'transparent',
        maskImage: 'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
      }}
    >
      <style>{`
        @keyframes partnerMarqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .partner-marquee-track {
          animation: partnerMarqueeScroll 28s linear infinite;
          display: flex;
          align-items: center;
          gap: 48px;
          width: max-content;
          will-change: transform;
        }
        .partner-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .partner-marquee-track {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
      <div className="partner-marquee-track">
        {loopItems.map((partner, i) => (
          <div
            key={`${partner.id}-${i}`}
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 64,
              padding: '0 8px',
            }}
          >
            <img
              src={partner.src}
              alt={partner.name}
              style={{
                height: '100%',
                width: 'auto',
                maxWidth: 180,
                objectFit: 'contain',
                filter: 'none',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PartnerSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
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
        paddingBottom: 40,
      }}
    >
      <div
        style={{
          position: 'relative',
          height: 460,
          overflow: 'hidden',
          marginTop: 60,
        }}
      >
        {slides.map((slide, i) => (
          <SlideCard key={slide.id} slide={slide} index={i} activeIndex={activeIndex} />
        ))}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
            zIndex: 10,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              style={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === activeIndex ? '#1a1a1a' : 'rgba(0,0,0,0.15)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '40px 20px 20px',
          width: '100%',
        }}
      >
        <p
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(18px, 2.4vw, 24px)',
            color: '#2a2a2a',
            textAlign: 'center',
            marginBottom: 20,
            letterSpacing: '-0.01em',
            lineHeight: 1.6,
            fontWeight: 400,
            padding: '0 16px',
          }}
        >
          Our clients are{' '}
          <strong style={{ fontWeight: 800, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            entrepreneurs, change-makers &amp; corporates
          </strong>{' '}
          doing good —
        </p>
      </div>
      <PartnerMarquee />
    </section>
  )
}