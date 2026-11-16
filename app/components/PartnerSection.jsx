'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Globe, Code2, Smartphone, Megaphone, PhoneCall, PenTool, Layout, LifeBuoy, Check } from 'lucide-react'
import { Eyebrow } from './ui'

const slides = [
  { title: 'Websites', subtitle: 'Fast, responsive sites that turn visitors into enquiries', points: ['Business & corporate sites', 'E-commerce stores', 'Landing pages'], Icon: Globe, bg: '#1a1a1a', fg: '#ffffff', chip: '#d4e84a' },
  { title: 'Custom software', subtitle: 'Systems shaped around how your business actually runs', points: ['CRM & ERP', 'Business automation', 'APIs & integrations'], Icon: Code2, bg: '#d4e84a', fg: '#1a1a1a', chip: '#1a1a1a' },
  { title: 'Mobile apps', subtitle: 'iOS and Android apps people keep coming back to', points: ['Flutter & React Native', 'Native iOS & Android', 'Store launch'], Icon: Smartphone, bg: '#efebe4', fg: '#1a1a1a', chip: '#1a1a1a' },
  { title: 'Digital marketing', subtitle: 'Campaigns that grow your audience and bring in leads', points: ['SEO', 'Social & paid ads', 'Analytics & reporting'], Icon: Megaphone, bg: '#2c2b28', fg: '#ffffff', chip: '#d4e84a' },
  { title: 'VoIP systems', subtitle: 'Business phone infrastructure that cuts running costs', points: ['Cloud PBX & softswitch', 'SIP trunking', 'Dialers & billing'], Icon: PhoneCall, bg: '#d4e84a', fg: '#1a1a1a', chip: '#1a1a1a' },
  { title: 'Branding', subtitle: 'An identity that holds together everywhere it appears', points: ['Logo & identity', 'Brand guidelines', 'Social media kit'], Icon: PenTool, bg: '#1a1a1a', fg: '#ffffff', chip: '#d4e84a' },
  { title: 'UI/UX design', subtitle: 'Interfaces that feel obvious the first time someone uses them', points: ['Wireframes & prototypes', 'Design systems', 'Usability reviews'], Icon: Layout, bg: '#efebe4', fg: '#1a1a1a', chip: '#1a1a1a' },
  { title: 'Support & care', subtitle: 'Real people looking after your product after launch', points: ['Maintenance & updates', 'Performance tuning', '24/7 for enterprise'], Icon: LifeBuoy, bg: '#2c2b28', fg: '#ffffff', chip: '#d4e84a' },
]

const partners = [
  { name: 'FBB Store', src: '/p1.avif' },
  { name: 'Jungle Home', src: '/p2.avif', dark: true },
  { name: 'Blue Diamond', src: '/p3.avif' },
  { name: 'Hatfak Huna Mobile Phones & Accessories Trading LLC', src: '/p4.avif' },
  { name: 'Simpolo Trading LLC', src: '/p5.avif' },
  { name: 'Alrkn Alraqy Hotel Management', src: '/p6.avif' },
  { name: 'Wavescation', src: '/p7.avif' },
  { name: 'Eventra', src: '/p8.avif' },
  { name: 'Media Mind Digital', src: '/p9.avif' },
  { name: 'ZOYO Bath Fittings', src: '/p10.avif' },
]

function ServiceSlide({ slide, offset, step, onSelect, index, total }) {
  const abs = Math.abs(offset)
  const visible = abs <= 2
  const scale = abs === 0 ? 1 : abs === 1 ? 0.9 : 0.8
  const { Icon } = slide
  const chipText = slide.chip === '#1a1a1a' ? '#ffffff' : '#1a1a1a'

  return (
    <button
      type="button"
      onClick={onSelect}
      tabIndex={offset === 0 ? 0 : -1}
      aria-hidden={offset !== 0}
      aria-label={`${slide.title} — ${slide.subtitle}`}
      className="absolute left-1/2 top-1/2 flex h-[440px] w-[290px] flex-col overflow-hidden rounded-[24px] p-6 text-left transition-[transform,opacity] duration-500 ease-out sm:w-[320px]"
      style={{
        transform: `translate(calc(-50% + ${offset * step}px), -50%) scale(${scale})`,
        opacity: visible ? (abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25) : 0,
        zIndex: 10 - abs,
        pointerEvents: visible ? 'auto' : 'none',
        background: slide.bg,
        color: slide.fg,
        boxShadow: abs === 0 ? '0 24px 60px rgba(26,26,26,0.18)' : '0 8px 24px rgba(26,26,26,0.06)',
        border: slide.bg === '#efebe4' ? '1px solid rgba(26,26,26,0.08)' : 'none',
      }}
    >
      <span className="flex items-start justify-between">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: slide.chip, color: chipText }}
        >
          <Icon size={26} strokeWidth={1.5} aria-hidden />
        </span>
        <span className="font-mono text-xs tabular-nums opacity-55">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </span>

      {/* Oversized outline of the same icon as the card's visual */}
      <span aria-hidden className="pointer-events-none absolute -right-10 top-16 opacity-[0.08]">
        <Icon size={220} strokeWidth={1} />
      </span>

      <span className="mt-auto block text-[30px] font-bold leading-[1.02] tracking-[-0.04em]">{slide.title}</span>
      <span className="mt-3 block text-[15px] leading-6 opacity-75">{slide.subtitle}</span>

      <span className="mt-6 block space-y-2 border-t pt-5" style={{ borderColor: `${slide.fg}24` }}>
        {slide.points.map((pt) => (
          <span key={pt} className="flex items-center gap-2.5 text-sm">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ background: `${slide.fg}1a` }}
            >
              <Check size={12} strokeWidth={2.25} aria-hidden />
            </span>
            {pt}
          </span>
        ))}
      </span>
    </button>
  )
}

export default function PartnerSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [step, setStep] = useState(230)
  const timer = useRef(null)

  const go = useCallback((dir) => {
    setActive((i) => (i + dir + slides.length) % slides.length)
  }, [])

  // Card spacing follows viewport width so side cards never cover the centre one
  useEffect(() => {
    const update = () => setStep(Math.min(240, Math.max(150, window.innerWidth * 0.2)))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduced) return
    timer.current = setInterval(() => go(1), 3200)
    return () => clearInterval(timer.current)
  }, [paused, go])

  // Shortest signed distance on a loop, so the carousel wraps cleanly
  const offsetOf = (i) => {
    let d = i - active
    const n = slides.length
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  return (
    <section id="what-we-do" className="scroll-mt-16 py-20 md:py-28" aria-labelledby="clients-title">
      <div className="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2
            id="clients-title"
            className="mt-4 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]"
          >
            One team for everything your business{' '}
            <span className="text-muted">runs on</span>
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-card transition-colors duration-150 hover:border-ink/35"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-card transition-colors duration-150 hover:border-ink/35"
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div
        className="relative mt-12 h-[500px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Our services"
      >
        {slides.map((slide, i) => (
          <ServiceSlide
            key={slide.title}
            slide={slide}
            index={i}
            total={slides.length}
            offset={offsetOf(i)}
            step={step}
            onSelect={() => setActive(i)}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-1.5" role="tablist" aria-label="Choose service">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={s.title}
            onClick={() => setActive(i)}
            className="flex h-6 items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                i === active ? 'w-6 bg-ink' : 'w-1.5 bg-ink/20'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Logo strip */}
      <p className="shell mt-20 text-center text-[15px] text-body">
        Trusted by entrepreneurs, change-makers and companies doing good
      </p>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track gap-4" aria-label="Client logos">
          {[...partners, ...partners].map((p, i) => (
            <li
              key={`${p.src}-${i}`}
              aria-hidden={i >= partners.length}
              className={`flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border px-5 ${p.dark ? 'border-ink bg-ink' : 'border-ink/[0.08] bg-card'}`}
            >
              <Image
                src={p.src}
                alt={i < partners.length ? p.name : ''}
                width={160}
                height={64}
                className="max-h-12 w-auto object-contain"
                draggable={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
