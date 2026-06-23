'use client'

/**
 * FeaturedWorkSection
 * --------------------------------------------------------------------------
 * Animation system overview (all built with gsap.context() + ScrollTrigger,
 * cleaned up on unmount, transform-driven wherever possible):
 *
 *  - Title:        blur + fade + rise reveal on scroll-in.
 *  - Card entry:   mask reveal (clip-path) + 3D pop-in (y/scale/rotateX),
 *                  staggered by column, power4.out.
 *  - Parallax:     a separate, untransformed wrapper drifts y on scrub so it
 *                  never fights the entry tween (which lives on the card
 *                  itself, one level deeper).
 *  - Hover:        a single paused timeline drives lift/scale/shadow,
 *                  mockup zoom, gradient overlay and copy reveal together.
 *  - Tilt:         quickTo-based 3D tilt that follows the cursor, reset on
 *                  mouse leave.
 *  - Blob:         continuous rotation tween started/stopped on hover.
 *  - Button:       magnetic pull + fill-sweep + arrow rotation + scale.
 *
 *  prefers-reduced-motion and coarse/touch pointers are respected — heavy
 *  motion (tilt, magnetism, parallax, 3D pop) is skipped or flattened for
 *  those users.
 * --------------------------------------------------------------------------
 */

import { useEffect, useRef } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ---------------------------------------------------------------------------
// DATA (unchanged)
// ---------------------------------------------------------------------------
const projects = [
  {
    id: 1,
    tag: 'WEBSITE',
    client: 'Great Manager Institute',
    year: '2023 - Present',
    desc: 'AI Powered Leadership Development and Assessment Platform.',
    bg: '#f5f5f0',
    accent: '#c8e83a',
    mockupBg: '#fff',
    mockupLines: ['AI Powered Leadership', 'Development and', 'Assessment Platform'],
    pill: 'Coming Soon!',
  },
  {
    id: 2,
    tag: 'WEBSITE',
    client: 'Equizen',
    year: '2024 - Present',
    desc: 'Elevating User Experience and Facilitating Meaningful Connections.',
    bg: '#dce8f0',
    accent: '#c8e83a',
    mockupBg: '#fff',
    mockupLines: ['Tailored Financial', 'Solutions for Every Goal'],
    pill: null,
  },
  {
    id: 3,
    tag: 'BRANDING',
    client: 'Impelsys Scholar',
    year: '2022 - 2023',
    desc: 'A business that cares about your technological growth.',
    bg: '#1a1a2e',
    accent: '#c8e83a',
    mockupBg: '#f0f0f0',
    mockupLines: ['Scholar 3.0 Platform', 'AI Cloud Solutions'],
    pill: null,
    dark: true,
  },
  {
    id: 4,
    tag: 'BRANDING',
    client: 'focusU',
    year: '2021 - Present',
    desc: 'Brand identity and strategy for a leading corporate training company.',
    bg: '#C85A1E',
    accent: '#fff',
    mockupBg: '#fff',
    mockupLines: ['Brand Identity.', 'Strategy & Launch'],
    pill: null,
    dark: true,
  },
  {
    id: 5,
    tag: 'WEBSITE',
    client: 'TurboHire',
    year: '2023',
    desc: 'Intelligent hiring platform with AI-powered candidate matching.',
    bg: '#f7f5ee',
    accent: '#c8e83a',
    mockupBg: '#fff',
    mockupLines: ['Hire Smarter,', 'Faster with AI'],
    pill: null,
  },
  {
    id: 6,
    tag: 'PUBLICATION',
    client: 'The Kids Carnival',
    year: '2022',
    desc: 'Creative educational magazine for children across India.',
    bg: '#f5c842',
    accent: '#7c3aed',
    mockupBg: '#fff',
    mockupLines: ['The kids', 'CARNIVAL'],
    pill: null,
  },
  {
    id: 7,
    tag: 'WEBSITE',
    client: 'MakeStories',
    year: '2023 - Present',
    desc: 'Web stories platform empowering publishers with visual storytelling.',
    bg: '#0f172a',
    accent: '#b5e319',
    mockupBg: '#1e293b',
    mockupLines: ['Create. Publish.', 'Grow with Stories'],
    pill: null,
    dark: true,
  },
  {
    id: 8,
    tag: 'BRANDING',
    client: 'Mercer India',
    year: '2024',
    desc: 'Digital transformation campaign for a global consulting leader.',
    bg: '#f0ede8',
    accent: '#c8e83a',
    mockupBg: '#fff',
    mockupLines: ['People. Strategy.', 'Results.'],
    pill: null,
  },
]

// ---------------------------------------------------------------------------
// Small helpers for respecting user/device preferences
// ---------------------------------------------------------------------------
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const canFinePointerHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

// ---------------------------------------------------------------------------
// MockupCard — visuals are 100% unchanged, just exposes a data-hook so the
// parent card's GSAP context can target the accent blob for continuous spin.
// ---------------------------------------------------------------------------
function MockupCard({ project }) {
  return (
    <div
      style={{
        background: project.mockupBg,
        borderRadius: 10,
        padding: 16,
        height: '100%',
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Browser bar */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
        {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
          <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
        ))}
      </div>
      {/* Headline lines */}
      <div>
        {project.mockupLines.map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: i === 0 ? 13 : 11,
              fontWeight: i === 0 ? 800 : 600,
              color: project.dark && project.mockupBg === '#1e293b' ? '#fff' : '#1a1a1a',
              lineHeight: 1.3,
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
          >
            {line}
          </div>
        ))}
      </div>
      {/* Fake content rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 4 }}>
        {[80, 60, 90, 50].map((w, i) => (
          <div
            key={i}
            style={{
              height: 5,
              width: `${w}%`,
              background: project.dark && project.mockupBg === '#1e293b' ? 'rgba(255,255,255,0.15)' : '#e5e7eb',
              borderRadius: 3,
            }}
          />
        ))}
      </div>
      {/* Accent blob — data-blob lets the card's hover timeline find & spin it */}
      <div
        data-blob="true"
        style={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: project.accent,
          opacity: 0.85,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 8,
          fontWeight: 800,
          color: project.dark ? '#1a1a1a' : '#fff',
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          textAlign: 'center',
          lineHeight: 1.2,
          padding: 4,
        }}
      >
        {project.pill || '→'}
      </div>
      {/* Fake image placeholder */}
      <div
        style={{
          marginTop: 'auto',
          height: 48,
          borderRadius: 6,
          background:
            project.dark && project.mockupBg === '#1e293b'
              ? 'rgba(255,255,255,0.08)'
              : `${project.accent}22`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <rect width="24" height="18" rx="3" fill={project.accent} opacity="0.3" />
          <circle cx="7" cy="7" r="2.5" fill={project.accent} opacity="0.7" />
          <path d="M0 12 L6 7 L11 11 L16 6 L24 12 V18 H0Z" fill={project.accent} opacity="0.5" />
        </svg>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ProjectCard
// ---------------------------------------------------------------------------
function ProjectCard({ project, index }) {
  // wrapRef: untransformed outer node — owns the scroll-linked parallax drift
  // cardRef: the actual visual card — owns mask reveal, hover lift, tilt
  const wrapRef = useRef(null)
  const cardRef = useRef(null)
  const mockupAreaRef = useRef(null)
  const overlayRef = useRef(null)
  const viewProjectRef = useRef(null)

  const hoverTlRef = useRef(null)
  const blobTweenRef = useRef(null)
  const rotateXTo = useRef(null)
  const rotateYTo = useRef(null)

  useEffect(() => {
    const reduced = prefersReducedMotion()
    const hoverCapable = canFinePointerHover()

    const ctx = gsap.context(() => {
      // Perspective so rotateX/rotateY on entry & tilt actually read as 3D
      gsap.set(cardRef.current, { transformPerspective: 1000, willChange: 'transform' })

      // --- ENTRANCE + MASK REVEAL --------------------------------------
      // clip-path sweeps open from the bottom edge while the card pops in
      // with y/scale/rotateX — together they read as the card "emerging"
      // upward from behind a mask, not just fading in.
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
          delay: reduced ? 0 : (index % 2) * 0.12, // column-based stagger
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )

      // --- PARALLAX ------------------------------------------------------
      // Lives on the outer wrapper (not the card) so it never collides with
      // the entrance tween above. Scrubbed directly to scroll position.
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

      // --- HOVER TIMELINE --------------------------------------------------
      // One timeline, paused, played forward on enter / reversed on leave —
      // lift, shadow, mockup zoom, gradient overlay and copy reveal all in sync.
      hoverTlRef.current = gsap
        .timeline({ paused: true, defaults: { duration: 0.45, ease: 'power3.out' } })
        .to(cardRef.current, { y: -15, scale: 1.03, boxShadow: '0 40px 90px rgba(0,0,0,0.22)' }, 0)
        .to(mockupAreaRef.current, { scale: 1.08 }, 0)
        .to(overlayRef.current, { opacity: 1, duration: 0.35 }, 0)
        .to(viewProjectRef.current, { opacity: 1, x: 0, duration: 0.35 }, 0.08)

      // --- 3D TILT setup ---------------------------------------------------
      // quickTo gives cheap, interruption-friendly tweens for fast mousemove.
      if (hoverCapable && !reduced) {
        rotateXTo.current = gsap.quickTo(cardRef.current, 'rotateX', { duration: 0.5, ease: 'power3' })
        rotateYTo.current = gsap.quickTo(cardRef.current, 'rotateY', { duration: 0.5, ease: 'power3' })
      }
    }, wrapRef)

    // Cleanup: kills every tween/ScrollTrigger created inside the context above
    return () => {
      ctx.revert()
      blobTweenRef.current?.kill()
    }
  }, [index])

  // --- Hover & tilt event handlers ---------------------------------------
  const handleEnter = () => {
    hoverTlRef.current?.play()

    // Continuous accent-blob spin while hovered
    const blob = cardRef.current?.querySelector('[data-blob]')
    if (blob) {
      blobTweenRef.current?.kill()
      blobTweenRef.current = gsap.to(blob, { rotate: 360, duration: 3, repeat: -1, ease: 'none' })
    }
  }

  const handleLeave = () => {
    hoverTlRef.current?.reverse()

    blobTweenRef.current?.kill()
    const blob = cardRef.current?.querySelector('[data-blob]')
    if (blob) gsap.to(blob, { rotate: 0, duration: 0.5, ease: 'power3.out' })

    // Smoothly return tilt to neutral
    rotateXTo.current?.(0)
    rotateYTo.current?.(0)
  }

  const handleMouseMove = (e) => {
    if (!rotateXTo.current || !rotateYTo.current || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 .. 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5 // -0.5 .. 0.5
    rotateYTo.current(relX * 10) // -5deg .. 5deg
    rotateXTo.current(relY * -10) // -5deg .. 5deg
  }

  return (
    // Parallax wrapper — no visual styling of its own, purely a transform target
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
        }}
      >
        {/* Mockup image area */}
        <div ref={mockupAreaRef} style={{ padding: '24px 24px 16px', flex: 1, minHeight: 240, position: 'relative' }}>
          <MockupCard project={project} />
          {/* Soft gradient overlay — fades in on hover instead of a flat tint */}
          <div
            ref={overlayRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${project.accent}33, transparent 65%)`,
              opacity: 0,
              borderRadius: 10,
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Info area */}
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
              color: ['#c8e83a', '#b5e319', '#f5c842', '#fff'].includes(project.accent)
                ? '#1a1a1a'
                : '#fff',
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

          {/* "VIEW PROJECT" — slides in from the left & fades, driven by hoverTl */}
          <div
            ref={viewProjectRef}
            style={{
              marginTop: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: 0,
              transform: 'translateX(-8px)',
              color: project.dark ? '#c8e83a' : '#1a1a1a',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.05em',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
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
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ShowMoreButton — magnetic pull + fill sweep + arrow rotation + scale
// ---------------------------------------------------------------------------
function ShowMoreButton({ onClick }) {
  const btnRef = useRef(null)
  const fillRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!canFinePointerHover() || prefersReducedMotion()) return

      const btn = btnRef.current

      // MAGNETIC PULL: button eases toward the cursor within its own bounds
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' })
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' })

      const handleMove = (e) => {
        const rect = btn.getBoundingClientRect()
        const relX = e.clientX - rect.left - rect.width / 2
        const relY = e.clientY - rect.top - rect.height / 2
        xTo(relX * 0.25)
        yTo(relY * 0.3)
      }

      // SCALE + FILL SWEEP + ARROW ROTATION, coordinated on enter/leave
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
    <button
      ref={btnRef}
      onClick={onClick}
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
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: '0.06em',
        cursor: 'pointer',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Fill layer — scales in from the left behind the label on hover */}
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
  )
}

// ---------------------------------------------------------------------------
// FeaturedWorkSection
// ---------------------------------------------------------------------------
export default function FeaturedWorkSection() {
  const titleRef = useRef(null)
  const btnWrapRef = useRef(null)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? projects : projects.slice(0, 4)

  // --- TITLE REVEAL: fade + rise + blur-to-sharp on scroll-in -------------
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

      // Small fade/rise entrance for the button wrapper itself
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

  // --- Re-measure ScrollTriggers once the grid grows from "Show More" -----
  // New cards mount with their own ScrollTrigger; refreshing ensures it
  // evaluates against accurate post-layout positions so they animate in
  // immediately instead of waiting on a stale measurement.
  useEffect(() => {
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(raf)
  }, [showAll])

  return (
    <section
      style={{
        background: '#111111',
        padding: '100px 32px 120px',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Title */}
        <h2
          ref={titleRef}
          style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 900,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: 72,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          Featured Work
        </h2>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
            gap: 24,
          }}
        >
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div ref={btnWrapRef} style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
            <ShowMoreButton onClick={() => setShowAll(true)} />
          </div>
        )}
      </div>
    </section>
  )
}