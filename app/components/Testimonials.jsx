'use client'

import { useState } from 'react'
import { SectionHeading } from './ui'
import Reveal from './Reveal'

const testimonials = [
  { company: 'ZOYO Bath Fittings', quote: 'Working with this team completely changed how we approach our online presence. They understood our vision from day one and delivered a result that felt truly custom to our brand.', reviewer: 'Farah Al Mansoori', role: 'Marketing Manager, ZOYO Bath Fittings' },
  { company: 'WaveScation', quote: 'The attention to detail and speed of execution was unlike anything we had experienced before. Every request was handled with patience and real expertise.', reviewer: 'Michael Tan', role: 'Founder, WaveScation' },
  { company: 'Alrkn Alraqy Hotel Management', quote: 'From the first meeting to the final launch, communication was clear and consistent. They took our ideas and elevated them beyond what we imagined.', reviewer: 'Yusuf Al Karim', role: 'Operations Director, Alrkn Alraqy Hotel Management' },
  { company: 'Simpolo Trading LLC', quote: 'A genuinely collaborative process. They challenged our assumptions in the best way and the final product performs far better than our previous platform.', reviewer: 'Rahul Deshmukh', role: 'General Manager, Simpolo Trading LLC' },
  { company: 'Hatfak Huna Mobile Phones & Accessories Trading LLC', quote: 'Professional, responsive, and genuinely invested in our success. It rarely feels like working with an external team, more like an extension of our own.', reviewer: 'Omar Al Suwaidi', role: 'CEO, Hatfak Huna Mobile Phones & Accessories Trading LLC' },
  { company: 'Blue Diamond', quote: 'They took the time to understand our customers and built something that actually reflects how our business operates day to day.', reviewer: 'Sara Al Hashimi', role: 'Brand Manager, Blue Diamond' },
  { company: 'Jungle Home', quote: 'Exceptional creativity paired with technical precision. Every milestone was delivered on time and exceeded our expectations.', reviewer: 'Daniel Cruz', role: 'Creative Director, Jungle Home' },
  { company: 'FBB Store', quote: 'They listened closely to our goals and translated them into a clean, effective experience that our customers immediately noticed.', reviewer: 'Aisha Rahman', role: 'E-commerce Lead, FBB Store' },
  { company: 'Eventra', quote: 'A true partner from concept to launch. Their strategic input shaped decisions well beyond just design and development.', reviewer: 'Karim Fathi', role: 'Founder, Eventra' },
  { company: 'Media Mind Digital', quote: 'Reliable, sharp, and easy to work with. They anticipated challenges before they became problems and kept the project moving smoothly.', reviewer: 'Lina Haddad', role: 'Account Director, Media Mind Digital' },
  { company: 'Nova Interiors', quote: 'The team brought a level of polish and craftsmanship to our project that immediately set us apart from competitors in our space.', reviewer: 'Hassan Al Bloushi', role: 'Managing Partner, Nova Interiors' },
  { company: 'Orbit Logistics', quote: 'Every deliverable felt thoughtfully considered. They balanced our tight timelines with a level of quality we did not expect at this speed.', reviewer: 'Nadia Petrova', role: 'Operations Head, Orbit Logistics' },
]

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

function TestimonialCard({ t, featured = false }) {
  return (
    <figure
      className={`flex h-full flex-col rounded-[20px] border p-6 sm:p-7 ${
        featured ? 'on-dark border-ink bg-ink text-white' : 'border-ink/[0.08] bg-card text-ink'
      }`}
    >
      <span aria-hidden className={`text-5xl font-bold leading-none ${featured ? 'text-lime' : 'text-ink/25'}`}>
        &ldquo;
      </span>
      <blockquote className={`mt-2 flex-1 ${featured ? 'text-xl leading-8 tracking-[-0.01em]' : 'text-[15px] leading-7 text-body'}`}>
        {t.quote}
      </blockquote>
      <figcaption className={`mt-8 flex items-center gap-3 border-t pt-5 ${featured ? 'border-white/10' : 'border-ink/[0.08]'}`}>
        <span
          aria-hidden
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
            featured ? 'bg-lime text-ink' : 'bg-raised text-ink'
          }`}
        >
          {initials(t.reviewer)}
        </span>
        <span className="min-w-0">
          <span className="block text-[15px] font-medium">{t.reviewer}</span>
          <span className={`block truncate text-[13px] ${featured ? 'text-white/55' : 'text-muted'}`}>{t.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false)
  const [first, ...rest] = testimonials
  const visible = showAll ? rest : rest.slice(0, 4)

  return (
    <section className="py-20 md:py-28" aria-labelledby="testimonials-title">
      <div className="shell">
        <SectionHeading
          eyebrow="Testimonials"
          title={<span id="testimonials-title">What our clients say about working with us</span>}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <Reveal className="md:col-span-2 lg:row-span-2 lg:col-span-1">
            <TestimonialCard t={first} featured />
          </Reveal>
          {visible.map((t, i) => (
            <Reveal key={t.reviewer} delay={(i % 3) * 60}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        {rest.length > 4 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex h-12 items-center rounded-full border border-ink/15 bg-card px-6 text-[15px] font-medium transition-colors duration-150 hover:border-ink/35"
            >
              {showAll ? 'Show fewer' : `Show all ${testimonials.length} reviews`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
