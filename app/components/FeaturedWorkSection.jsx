'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    tag: 'WEBSITE',
    client: 'Wavescation',
    year: '2025',
    desc: 'Dubai-based staycation booking platform · DTCM-licensed, premium short-term rentals in Downtown, JBR, Palm Jumeirah.',
    bg: '#f5f5f0',
    accent: '#c8e83a',
    image: '/wave.avif',
    link: 'https://www.wavescation.com/',
  },
  {
    id: 2,
    tag: 'WEBSITE',
    client: 'Alrkn Alraqy',
    year: '2025',
    desc: 'GCC & Africa hotel management · excellence in hospitality, curated guest experiences, decades of industry expertise.',
    bg: '#dce8f0',
    accent: '#c8e83a',
    image: '/alqy.avif',
    link: 'https://www.alrknalraqy.in/',
  },
  {
    id: 3,
    tag: 'WEBSITE',
    client: 'Mediamind Digital',
    year: '2025',
    desc: 'Dubai-based media & digital marketing · smart tech, meaningful connections, future-forward networking since 2020.',
    bg: '#1a1a2e',
    accent: '#c8e83a',
    image: '/mm.avif',
    dark: true,
    link: 'https://www.mediaminddigital.ae/',
  },
  {
    id: 4,
    tag: 'WEBSITE',
    client: 'Secondwave',
    year: '2025',
    desc: 'Kerala-based multimedia & digital marketing · creative storytelling, visual impact, brand amplification.',
    bg: '#C85A1E',
    accent: '#fff',
    image: 'swave.avif',
    dark: true,
    link: 'https://www.secondwave.in/',
  },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const canFinePointerHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

function ProjectCard({ project, index }) {
  const wrapRef = useRef(null)
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const viewProjectRef = useRef(null)

  const hoverTlRef = useRef(null)
  const rotateXTo = useRef(null)
  const rotateYTo = useRef(null)

  useEffect(() => {
    const reduced = prefersReducedMotion()
    const hoverCapable = canFinePointerHover()

    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, { transformPerspective: 1000, willChange: 'transform' })

      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: reduced ? 0 : 80,
          scale: reduced ? 1 : 0.9,
          rotateX: reduced ? 0 : 10,
          clipPath: 'inset(100% 0% 0% 0%)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: reduced ? 0.4 : 1.1,
          ease: 'power4.out',
          delay: reduced ? 0 : (index % 2) * 0.12,
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )

      if (!reduced) {
        gsap.fromTo(
          wrapRef.current,
          { y: 28 },
          {
            y: -28,
            ease: 'none',
            scrollTrigger: {
              trigger: wrapRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      }

      hoverTlRef.current = gsap
        .timeline({ paused: true, defaults: { duration: 0.45, ease: 'power3.out' } })
        .to(cardRef.current, { y: -15, scale: 1.03, boxShadow: '0 40px 90px rgba(0,0,0,0.22)' }, 0)
        .to(imageRef.current, { scale: 1.08, duration: 0.5 }, 0)
        .to(overlayRef.current, { opacity: 1, duration: 0.35 }, 0)
        .to(viewProjectRef.current, { opacity: 1, x: 0, duration: 0.35 }, 0.08)

      if (hoverCapable && !reduced) {
        rotateXTo.current = gsap.quickTo(cardRef.current, 'rotateX', { duration: 0.5, ease: 'power3' })
        rotateYTo.current = gsap.quickTo(cardRef.current, 'rotateY', { duration: 0.5, ease: 'power3' })
      }
    }, wrapRef)

    return () => {
      ctx.revert()
    }
  }, [index])

  const handleEnter = () => {
    hoverTlRef.current?.play()
  }

  const handleLeave = () => {
    hoverTlRef.current?.reverse()
    rotateXTo.current?.(0)
    rotateYTo.current?.(0)
  }

  const handleMouseMove = (e) => {
    if (!rotateXTo.current || !rotateYTo.current || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    rotateYTo.current(relX * 10)
    rotateXTo.current(relY * -10)
  }

  return (
    <div ref={wrapRef}>
      <div
        ref={cardRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMouseMove}
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          background: project.bg,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'block', flex: 1 }}
        >
          <div style={{ padding: '20px 20px 12px', flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img
              ref={imageRef}
              src={project.image}
              alt={project.client}
              style={{
                width: '100%',
                height: '320px',
                objectFit: 'cover',
                borderRadius: 12,
                display: 'block',
              }}
            />
            <div
              ref={overlayRef}
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${project.accent}33, transparent 65%)`,
                opacity: 0,
                borderRadius: 12,
                pointerEvents: 'none',
              }}
            />
          </div>
        </a>

        <div
          style={{
            padding: '16px 24px 24px',
            borderTop: `1px solid rgba(${project.dark ? '255,255,255,0.1' : '0,0,0,0.06'})`,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: project.accent,
              color: ['#c8e83a', '#fff'].includes(project.accent) ? '#1a1a1a' : '#fff',
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: '0.1em',
              padding: '4px 10px',
              borderRadius: 20,
              marginBottom: 10,
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
          >
            {project.tag}
          </span>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: project.dark ? '#fff' : '#1a1a1a',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              marginBottom: 4,
              lineHeight: 1.3,
            }}
          >
            <strong>{project.client}</strong>{' '}
            <span style={{ fontWeight: 400, color: project.dark ? 'rgba(255,255,255,0.5)' : '#888' }}>
              ({project.year}) —
            </span>
          </div>
          <p
            style={{
              fontSize: 13,
              color: project.dark ? 'rgba(255,255,255,0.6)' : '#555',
              lineHeight: 1.5,
              margin: 0,
              fontFamily: "'Georgia', serif",
            }}
          >
            {project.desc}
          </p>

          <a
            ref={viewProjectRef}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: 1,
              transform: 'translateX(0px)',
              color: project.dark ? '#c8e83a' : '#1a1a1a',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.05em',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            VIEW PROJECT
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

function ShowMoreButton() {
  const btnRef = useRef(null)
  const fillRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!canFinePointerHover() || prefersReducedMotion()) return

      const btn = btnRef.current

      const xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' })
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' })

      const handleMove = (e) => {
        const rect = btn.getBoundingClientRect()
        const relX = e.clientX - rect.left - rect.width / 2
        const relY = e.clientY - rect.top - rect.height / 2
        xTo(relX * 0.25)
        yTo(relY * 0.3)
      }

      const handleEnter = () => {
        gsap.to(btn, { scale: 1.05, color: '#1a1a1a', duration: 0.4, ease: 'power3.out' })
        gsap.to(fillRef.current, { scaleX: 1, duration: 0.5, ease: 'power3.out' })
        gsap.to(arrowRef.current, { rotate: 90, duration: 0.45, ease: 'back.out(1.8)' })
      }

      const handleLeave = () => {
        xTo(0)
        yTo(0)
        gsap.to(btn, { scale: 1, color: '#ffffff', duration: 0.4, ease: 'power3.out' })
        gsap.to(fillRef.current, { scaleX: 0, duration: 0.4, ease: 'power3.out' })
        gsap.to(arrowRef.current, { rotate: 0, duration: 0.4, ease: 'power3.out' })
      }

      btn.addEventListener('mousemove', handleMove)
      btn.addEventListener('mouseenter', handleEnter)
      btn.addEventListener('mouseleave', handleLeave)

      return () => {
        btn.removeEventListener('mousemove', handleMove)
        btn.removeEventListener('mouseenter', handleEnter)
        btn.removeEventListener('mouseleave', handleLeave)
      }
    }, btnRef)

    return () => ctx.revert()
  }, [])

  return (
    <Link href="/works" passHref>
      <button
        ref={btnRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'transparent',
          border: '2px solid rgba(255,255,255,0.25)',
          color: '#fff',
          padding: '16px 40px',
          borderRadius: 50,
          fontSize: 'clamp(13px, 1.2vw, 15px)',
          fontWeight: 700,
          letterSpacing: '0.06em',
          cursor: 'pointer',
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <span
          ref={fillRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: '#c8e83a',
            borderRadius: 50,
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
            zIndex: 0,
          }}
        />
        <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
          SHOW MORE WORKS
          <svg
            ref={arrowRef}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{ display: 'block' }}
          >
            <path
              d="M9 3v12M3 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </Link>
  )
}

export default function FeaturedWorkSection() {
  const titleRef = useRef(null)
  const btnWrapRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = prefersReducedMotion()
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: reduced ? 0 : 40, filter: reduced ? 'blur(0px)' : 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: reduced ? 0.4 : 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      if (btnWrapRef.current) {
        gsap.fromTo(
          btnWrapRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: btnWrapRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(raf)
  }, [isMobile])

  return (
    <section
      style={{
        background: '#111111',
        padding: isMobile ? '60px 0px 80px' : '100px 32px 120px',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          ref={titleRef}
          style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 'clamp(36px, 7vw, 96px)',
            fontWeight: 900,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: isMobile ? '40px' : '72px',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            padding: isMobile ? '0 20px' : '0',
          }}
        >
          Featured Work
        </h2>

        {isMobile ? (
          <div style={{ position: 'relative', overflow: 'visible' }}>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                padding: '0 20px 20px',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              className="mobile-scroll"
            >
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  style={{
                    minWidth: '280px',
                    maxWidth: '280px',
                    scrollSnapAlign: 'start',
                    flexShrink: 0,
                  }}
                >
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
            <style jsx>{`
              .mobile-scroll::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '8px',
                padding: '0 20px',
              }}
            >
              {projects.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: i === 0 ? '#c8e83a' : 'rgba(255,255,255,0.2)',
                    transition: 'background 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
              gap: 24,
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        <div
          ref={btnWrapRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: isMobile ? '48px' : '64px',
            padding: isMobile ? '0 20px' : '0',
          }}
        >
          <ShowMoreButton />
        </div>
      </div>
    </section>
  )
}