'use client'

import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    bg: '#d4e84a',
    textColor: '#1a1a1a',
    name: 'ZOYO Bath Fittings',
    src: '/p1.avif',
    quote: 'Working with this team completely changed how we approach our online presence. They understood our vision from day one and delivered a result that felt truly custom to our brand.',
    reviewer: 'Farah Al Mansoori',
    role: 'Marketing Manager, ZOYO Bath Fittings',
  },
  {
    id: 2,
    bg: '#1a1a1a',
    textColor: '#fff',
    name: 'WaveScation',
    src: '/p2.avif',
    quote: 'The attention to detail and speed of execution was unlike anything we had experienced before. Every request was handled with patience and real expertise.',
    reviewer: 'Michael Tan',
    role: 'Founder, WaveScation',
  },
  {
    id: 3,
    bg: '#f5f5f0',
    textColor: '#1a1a1a',
    name: 'Alrkn Alraqy Hotel Management',
    src: '/p3.avif',
    quote: 'From the first meeting to the final launch, communication was clear and consistent. They took our ideas and elevated them beyond what we imagined.',
    reviewer: 'Yusuf Al Karim',
    role: 'Operations Director, Alrkn Alraqy Hotel Management',
  },
  {
    id: 4,
    bg: '#d4e84a',
    textColor: '#1a1a1a',
    name: 'Simpolo Trading LLC',
    src: '/p4.avif',
    quote: 'A genuinely collaborative process. They challenged our assumptions in the best way and the final product performs far better than our previous platform.',
    reviewer: 'Rahul Deshmukh',
    role: 'General Manager, Simpolo Trading LLC',
  },
  {
    id: 5,
    bg: '#1a1a1a',
    textColor: '#fff',
    name: 'Hatfak Huna Mobile Phones & Accessories Trading LLC',
    src: '/p5.avif',
    quote: 'Professional, responsive, and genuinely invested in our success. It rarely feels like working with an external team, more like an extension of our own.',
    reviewer: 'Omar Al Suwaidi',
    role: 'CEO, Hatfak Huna Mobile Phones & Accessories Trading LLC',
  },
  {
    id: 6,
    bg: '#f5f5f0',
    textColor: '#1a1a1a',
    name: 'Blue Diamond',
    src: '/p6.avif',
    quote: 'They took the time to understand our customers and built something that actually reflects how our business operates day to day.',
    reviewer: 'Sara Al Hashimi',
    role: 'Brand Manager, Blue Diamond',
  },
  {
    id: 7,
    bg: '#d4e84a',
    textColor: '#1a1a1a',
    name: 'Jungle Home',
    src: '/p7.avif',
    quote: 'Exceptional creativity paired with technical precision. Every milestone was delivered on time and exceeded our expectations.',
    reviewer: 'Daniel Cruz',
    role: 'Creative Director, Jungle Home',
  },
  {
    id: 8,
    bg: '#1a1a1a',
    textColor: '#fff',
    name: 'FBB Store',
    src: '/p8.avif',
    quote: 'They listened closely to our goals and translated them into a clean, effective experience that our customers immediately noticed.',
    reviewer: 'Aisha Rahman',
    role: 'E-commerce Lead, FBB Store',
  },
  {
    id: 9,
    bg: '#f5f5f0',
    textColor: '#1a1a1a',
    name: 'Eventra',
    src: '/p9.avif',
    quote: 'A true partner from concept to launch. Their strategic input shaped decisions well beyond just design and development.',
    reviewer: 'Karim Fathi',
    role: 'Founder, Eventra',
  },
  {
    id: 10,
    bg: '#d4e84a',
    textColor: '#1a1a1a',
    name: 'Media Mind Digital',
    src: '/p10.avif',
    quote: 'Reliable, sharp, and easy to work with. They anticipated challenges before they became problems and kept the project moving smoothly.',
    reviewer: 'Lina Haddad',
    role: 'Account Director, Media Mind Digital',
  },
  {
    id: 11,
    bg: '#1a1a1a',
    textColor: '#fff',
    name: 'Nova Interiors',
    src: '/p11.avif',
    quote: 'The team brought a level of polish and craftsmanship to our project that immediately set us apart from competitors in our space.',
    reviewer: 'Hassan Al Bloushi',
    role: 'Managing Partner, Nova Interiors',
  },
  {
    id: 12,
    bg: '#f5f5f0',
    textColor: '#1a1a1a',
    name: 'Orbit Logistics',
    src: '/p12.avif',
    quote: 'Every deliverable felt thoughtfully considered. They balanced our tight timelines with a level of quality we did not expect at this speed.',
    reviewer: 'Nadia Petrova',
    role: 'Operations Head, Orbit Logistics',
  },
]

export default function TestimonialsSection() {
  return (
    <section style={{
      background: '#f5f5f0',
      padding: 'clamp(60px, 8vw, 80px) clamp(20px, 4vw, 60px) clamp(80px, 10vw, 100px)',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: '1.5px solid #1a1a1a', borderRadius: 999,
          padding: '6px 18px', fontSize: 12, fontWeight: 600,
          letterSpacing: '0.08em', color: '#1a1a1a',
        }}>
          <div style={{ width: 8, height: 8, background: '#1a1a1a', borderRadius: '50%' }} />
          TESTIMONIALS
        </div>
      </div>

      <h2 style={{
        fontSize: 'clamp(40px, 6vw, 72px)',
        fontWeight: 800, color: '#1a1a1a',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        textAlign: 'center', marginBottom: 64,
      }}>
        What our clients<br />say about us
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 20,
      }}>
        {testimonials.map(t => (
          <div key={t.id} style={{
            background: t.bg,
            borderRadius: 20,
            padding: '36px 32px 32px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                overflow: 'hidden', flexShrink: 0,
                background: t.textColor === '#fff' ? 'rgba(255,255,255,0.1)' : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Image src={t.src} alt={t.name} width={44} height={44} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <span style={{
                fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em',
                color: t.textColor, lineHeight: 1.2,
              }}>
                {t.name}
              </span>
            </div>

            <p style={{
              fontSize: 'clamp(14px, 1.2vw, 14.5px)',
              color: t.textColor === '#fff' ? 'rgba(255,255,255,0.8)' : '#333',
              lineHeight: 1.7,
              flex: 1,
              marginBottom: 32,
            }}>
              {t.quote}
            </p>

            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: t.textColor, marginBottom: 3 }}>
                {t.reviewer}
              </div>
              <div style={{
                fontStyle: 'italic',
                fontSize: 13,
                color: t.textColor === '#fff' ? 'rgba(255,255,255,0.55)' : '#666',
              }}>
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}