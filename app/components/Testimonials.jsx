'use client'

const testimonials = [
  {
    id: 1,
    bg: '#d4e84a',
    textColor: '#1a1a1a',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
          <path d="M0 14L7 3L14 14L7 25Z" fill="#1a1a1a"/>
          <path d="M11 14L18 3L25 14L18 25Z" fill="#1a1a1a" opacity="0.55"/>
          <path d="M22 14L29 3L36 14L29 25Z" fill="#1a1a1a" opacity="0.28"/>
        </svg>
        <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: '#1a1a1a' }}>Mercer</span>
      </div>
    ),
    quote: 'It has been a pleasure to work with the FLYDEVS team! They have been agile and flexible to deliver beyond expectations and within timelines. They have been quick to incorporate feedback and add value to the final deliverable.',
    name: 'Rupali Gupta',
    role: 'ASEAN Talent Solutions Consulting Leader, Mercer Singapore',
  },
  {
    id: 2,
    bg: '#1a1a1a',
    textColor: '#fff',
    logo: (
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="4" fill="#fff" opacity="0.1"/>
            {[...Array(5)].map((_, row) =>
              [...Array(5)].map((_, col) => (
                <circle key={`${row}-${col}`} cx={8 + col * 6} cy={8 + row * 6} r={2} fill="#fff" opacity={0.6 + (row + col) * 0.05}/>
              ))
            )}
          </svg>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '0.06em' }}>PRIVADO</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.25em' }}>C A P I T A L</div>
          </div>
        </div>
      </div>
    ),
    quote: 'I had a great experience working with FLYDEVS\'s team on my website. The team demonstrated a complete understanding of my website goals, providing valuable direction that greatly enhanced its effectiveness. Ajit\'s responsiveness was remarkable, always addressing my queries promptly.',
    name: 'Sumit Pachisia',
    role: 'Partner',
  },
  {
    id: 3,
    bg: '#f5f5f0',
    textColor: '#1a1a1a',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          background: '#1a1a1a', color: '#fff',
          fontWeight: 900, fontSize: 14,
          width: 40, height: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 6, letterSpacing: '-0.02em', flexShrink: 0,
        }}>TH</div>
        <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', color: '#1a1a1a' }}>
          <strong>Turbo</strong>Hire
        </span>
      </div>
    ),
    quote: 'FLYDEVS is without doubt one of the best website development teams I have ever worked with. Ajit, who leads the team, will not only invest himself into the scope of the project but will think on part of his client\'s as a business owner and entrepreneur.',
    name: 'Shoan Shinde',
    role: 'CMO',
  },
  {
    id: 4,
    bg: '#d4e84a',
    textColor: '#1a1a1a',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          background: '#1a1a1a', color: '#fff',
          fontWeight: 900, fontSize: 11,
          width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 6, flexShrink: 0, lineHeight: 1.2, textAlign: 'center',
          padding: 4,
        }}>Great Place</div>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a' }}>to Work</span>
      </div>
    ),
    quote: 'The FLYDEVS team brought tremendous energy and creativity to our brand refresh. Their ability to understand our culture and translate it into compelling visuals was impressive. Highly recommend them for any branding initiative.',
    name: 'Ananya Rao',
    role: 'Head of People, Great Place to Work India',
  },
  {
    id: 5,
    bg: '#1a1a1a',
    textColor: '#fff',
    logo: (
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 26, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
          <span style={{ color: '#d4e84a' }}>TEDx</span>Dharavi
        </span>
      </div>
    ),
    quote: 'Working with FLYDEVS was an exceptional experience. They captured the spirit of TEDx perfectly in our digital assets. Their attention to detail and turnaround time were beyond what we expected from any creative agency.',
    name: 'Priya Menon',
    role: 'Organizer, TEDxDharavi',
  },
  {
    id: 6,
    bg: '#f5f5f0',
    textColor: '#1a1a1a',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#d4e84a', flexShrink: 0 }} />
        <span style={{ fontSize: 22, fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.02em' }}>MakeStories</span>
      </div>
    ),
    quote: 'The FLYDEVS team exceeded every expectation. From the first conversation to the final delivery, they were professional, proactive, and deeply invested in the success of our product. A true creative partner.',
    name: 'Ishaan Nair',
    role: 'Co-Founder, MakeStories',
  },
]

export default function TestimonialsSection() {
  return (
    <section style={{
      background: '#f5f5f0',
      padding: '80px 60px 100px',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      {/* Badge */}
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

      {/* Headline */}
      <h2 style={{
        fontSize: 'clamp(40px, 6vw, 72px)',
        fontWeight: 800, color: '#1a1a1a',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        textAlign: 'center', marginBottom: 64,
      }}>
        What our clients<br />say about us
      </h2>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
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
            {t.logo}

            <p style={{
              fontSize: 14.5,
              color: t.textColor === '#fff' ? 'rgba(255,255,255,0.8)' : '#333',
              lineHeight: 1.7,
              flex: 1,
              marginBottom: 32,
            }}>
              {t.quote}
            </p>

            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: t.textColor, marginBottom: 3 }}>
                {t.name}
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