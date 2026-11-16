'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Asterisk } from 'lucide-react'
import { ButtonLink } from './ui'

const WORDS = ['websites', 'software', 'apps', 'VoIP', 'brands']
const SERVICES = ['Websites', 'Custom software', 'Mobile apps', 'VoIP systems', 'Branding', 'UI/UX design', 'Digital marketing', 'Support & care']

/** Cycles through what we ship, rolling each word in with a lime marker sweep. */
function RotatingWord() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block whitespace-nowrap align-bottom">
      <span className="sr-only">{WORDS.join(', ')}</span>
      <span aria-hidden key={i} className="relative isolate inline-block px-[0.12em]">
        <span className="word-roll inline-block">{WORDS[i]}</span>
        <span className="marker-sweep absolute inset-x-0 inset-y-[0.06em] -z-10 rounded-[0.12em] bg-lime" />
      </span>
    </span>
  )
}

/** Splits text into letters the cursor can push heavier. */
function Letters({ text }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.split(' ').map((word, wi, arr) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {[...word].map((ch, ci) => (
              <span key={ci} data-letter className="inline-block">
                {ch}
              </span>
            ))}
            {wi < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </span>
    </>
  )
}

function Line({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span className="line-up block" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  )
}

export default function HeroSection() {
  const headRef = useRef(null)
  const sectionRef = useRef(null)
  const logoRef = useRef(null)

  // The logo leans gently toward the cursor
  useEffect(() => {
    const section = sectionRef.current
    const logo = logoRef.current
    if (!section || !logo) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        logo.style.transform = `translate3d(${x * -24}px, ${y * -18}px, 0) rotate(${x * 4}deg)`
      })
    }
    const onLeave = () => {
      logo.style.transform = ''
    }
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Letters near the cursor swell toward a heavier weight (Inter is a variable font)
  useEffect(() => {
    const head = headRef.current
    if (!head) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const letters = [...head.querySelectorAll('[data-letter]')]
    const BASE = 700
    const MAX = 900
    const RADIUS = 220
    let raf = 0
    let pointer = null

    const render = () => {
      raf = 0
      for (const el of letters) {
        let w = BASE
        if (pointer) {
          const r = el.getBoundingClientRect()
          const dx = pointer.x - (r.left + r.width / 2)
          const dy = pointer.y - (r.top + r.height / 2)
          const d = Math.hypot(dx, dy)
          if (d < RADIUS) w = BASE + (MAX - BASE) * (1 - d / RADIUS) ** 2
        }
        el.style.fontWeight = String(Math.round(w))
      }
    }
    const onMove = (e) => {
      pointer = { x: e.clientX, y: e.clientY }
      if (!raf) raf = requestAnimationFrame(render)
    }
    const onLeave = () => {
      pointer = null
      if (!raf) raf = requestAnimationFrame(render)
    }

    head.addEventListener('pointermove', onMove)
    head.addEventListener('pointerleave', onLeave)
    return () => {
      head.removeEventListener('pointermove', onMove)
      head.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[72px]">
      <div className="shell flex flex-1 flex-col justify-center py-10 md:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:gap-8">
          <h1
            ref={headRef}
            className="order-2 text-[clamp(2.75rem,6vw,7rem)] font-bold leading-[0.94] tracking-[-0.055em] text-ink lg:order-1"
          >
            <Line delay={80}>
              <span className="text-muted">
                <Letters text="You bring the idea." />
              </span>
            </Line>
            <Line delay={180}>
              <Letters text="We design, build" />
            </Line>
            <Line delay={280}>
              <Letters text="and ship" /> <RotatingWord />
            </Line>
          </h1>

          {/* Big logo mark, solid black */}
          <div className="rise order-1 flex justify-start lg:order-2 lg:justify-end" style={{ animationDelay: '250ms' }}>
            <div
              ref={logoRef}
              className="relative aspect-square w-[140px] transition-transform duration-500 ease-out sm:w-[200px] lg:w-full lg:max-w-[440px]"
            >
              <Image
                src="/fd.avif"
                alt="Flydevs logo mark"
                fill
                priority
                sizes="(min-width: 1024px) 440px, 200px"
                className="scale-[1.45] object-contain [filter:brightness(0)]"
              />
            </div>
          </div>
        </div>

        <div
          className="rise mt-12 flex flex-col gap-8 border-t border-ink/10 pt-8 md:mt-14 lg:flex-row lg:items-center lg:justify-between"
          style={{ animationDelay: '420ms' }}
        >
          <p className="max-w-[36rem] text-lg leading-8 text-body">
            Flydevs is the design and engineering team growing businesses in Kochi, Dubai and beyond call on — from
            first sketch to launch, and long after.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <ButtonLink href="/work" variant="secondary" arrow={false}>
              See our work
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Services band */}
      <div className="rise border-y border-ink bg-ink py-5 text-white" style={{ animationDelay: '650ms' }}>
        <div className="overflow-hidden">
          <ul className="marquee-track" aria-label="What we build">
            {[0, 1].map((k) =>
              SERVICES.map((s) => (
                <li
                  key={`${k}-${s}`}
                  aria-hidden={k === 1}
                  className="flex shrink-0 items-center whitespace-nowrap text-[clamp(1.25rem,2.4vw,2rem)] font-medium tracking-[-0.02em]"
                >
                  <span className="px-6 md:px-8">{s}</span>
                  <Asterisk size={22} strokeWidth={2} className="text-lime" aria-hidden />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
