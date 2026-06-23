'use client'

const services = [
  {
    id: 1,
    title: 'Web Development',
    desc: 'Through clean code and seamless UX, we engineer immersive digital solutions that intrigue audiences and drive action.',
    items: ['Custom Web Applications', 'Webflow Development', 'Marketing Landing Pages', 'Responsive Design', 'Third Party Integration'],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="2" y="6" width="40" height="28" rx="4" stroke="#1a1a1a" strokeWidth="2.2"/>
        <path d="M2 12h40" stroke="#1a1a1a" strokeWidth="2.2"/>
        <circle cx="7.5" cy="9" r="1.5" fill="#1a1a1a"/>
        <circle cx="12.5" cy="9" r="1.5" fill="#1a1a1a"/>
        <circle cx="17.5" cy="9" r="1.5" fill="#1a1a1a"/>
        <path d="M15 22l-5 4 5 4M29 22l5 4-5 4" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 30l4-8" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M10 38h24" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Software Development',
    desc: 'We craft scalable, secure software solutions tailored to your business needs — from MVPs to enterprise-grade platforms.',
    items: ['SaaS Product Development', 'API Design & Integration', 'Cloud Infrastructure', 'A/B Testing & QA', 'Maintenance & Support'],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="4" width="36" height="36" rx="6" stroke="#1a1a1a" strokeWidth="2.2"/>
        <path d="M14 16l-6 6 6 6M30 16l6 6-6 6" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 28l6-12" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'App Development',
    desc: 'We build fluid, high-performance mobile applications for iOS and Android that users love to engage with every day.',
    items: ['iOS & Android Apps', 'Flutter Cross-Platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications & Analytics'],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="12" y="2" width="20" height="40" rx="5" stroke="#1a1a1a" strokeWidth="2.2"/>
        <path d="M12 8h20M12 36h20" stroke="#1a1a1a" strokeWidth="2.2"/>
        <circle cx="22" cy="39" r="1.5" fill="#1a1a1a"/>
        <rect x="18" y="14" width="8" height="8" rx="2" stroke="#1a1a1a" strokeWidth="1.8"/>
        <path d="M17 27h10" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Digital Marketing',
    desc: 'We grow your brand\'s online presence with data-driven strategies that attract, engage, and convert your target audience.',
    items: ['SEO & Google Insights', 'Social Media Management', 'Paid Ads & Campaigns', 'Email Marketing', 'Content Strategy & Copy'],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M4 34L14 20l8 8 8-12 10 18" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="10" r="4" stroke="#1a1a1a" strokeWidth="2.2"/>
        <path d="M36 6V2M36 18v-4M40 10h4M28 10h4" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'VoIP Solutions',
    desc: 'We deliver enterprise-grade VoIP systems that modernize communication infrastructure and reduce operational costs significantly.',
    items: ['Cloud PBX Setup', 'SIP Trunking', 'Call Centre Integration', 'Video Conferencing', '24/7 Technical Support'],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M8 8c0 0 4-2 8 4s4 10 2 12l-4 4c0 0 8 12 16 14l4-4c2-2 6-2 10 2s4 8 2 10c0 0-4 4-10 2C20 50 2 24 2 12c-1-6 6-4 6-4z" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 6c4 0 10 4 10 10M28 12c1.5 0 4 1.5 4 4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Branding Assets',
    desc: 'We incorporate your brand\'s core values and unique voice into assets that resonate with global audiences across every touchpoint.',
    items: ['Logo Design & Brand Identity', 'Brand Guidelines', 'Social Media Kit', 'Rebranding', 'Brand Naming & Copy Writing'],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="4" width="36" height="28" rx="4" stroke="#1a1a1a" strokeWidth="2.2"/>
        <circle cx="14" cy="16" r="4" stroke="#1a1a1a" strokeWidth="2"/>
        <path d="M4 26l10-8 8 6 6-4 12 8" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 38h24M16 34v4M28 34v4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const CheckIcon = () => (
  <span style={{
    width: 18, height: 18, borderRadius: '50%',
    background: '#d4e84a',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, marginTop: 1,
  }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
)

export default function ServicesSection() {
  return (
    <section style={{
      background: '#d4e84a',
      padding: '80px 60px 100px',
      borderRadius: 24,
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        border: '1.5px solid #1a1a1a', borderRadius: 999,
        padding: '6px 18px', fontSize: 12, fontWeight: 600,
        letterSpacing: '0.08em', color: '#1a1a1a', marginBottom: 32,
      }}>
        <div style={{ width: 8, height: 8, background: '#1a1a1a', borderRadius: '50%' }} />
        SERVICES
      </div>

      {/* Headline */}
      <h2 style={{
        fontSize: 'clamp(36px, 5vw, 64px)',
        fontWeight: 800, color: '#1a1a1a',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        marginBottom: 60, maxWidth: 700,
      }}>
        You have the ambition,<br />we have the expertise
      </h2>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
      }}>
        {services.map(s => (
          <div key={s.id} style={{
            background: '#fff', borderRadius: 20,
            padding: '36px 30px 32px',
            display: 'flex', flexDirection: 'column', gap: 18,
            position: 'relative', overflow: 'hidden',
          }}>
            <div>{s.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {s.title}
            </div>
            <div style={{ fontSize: 13.5, color: '#555', lineHeight: 1.6 }}>
              {s.desc}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {s.items.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#222', fontWeight: 500, lineHeight: 1.4 }}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            {/* accent dot */}
            <div style={{
              position: 'absolute', bottom: 24, right: 24,
              width: 40, height: 40, borderRadius: '50%', background: '#d4e84a',
            }} />
          </div>
        ))}
      </div>

      {/* CTA Bar */}
      <div style={{
        background: '#1a1a1a', borderRadius: 20,
        padding: '52px 56px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        marginTop: 32, gap: 40,
      }}>
        <div>
          <h3 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 10 }}>
            Are you interested in a quoted project?
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 480, lineHeight: 1.6 }}>
            If you have specific ideas, requirements, or questions about our services or process, feel free to share them and we can provide assistance accordingly.
          </p>
        </div>
        <button style={{
          background: '#fff', color: '#1a1a1a',
          border: 'none', borderRadius: 999,
          padding: '16px 32px', fontSize: 14, fontWeight: 700,
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          gap: 12, whiteSpace: 'nowrap', letterSpacing: '0.03em', flexShrink: 0,
        }}>
          SEND INQUIRY
          <div style={{
            width: 32, height: 32, background: '#d4e84a',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
}