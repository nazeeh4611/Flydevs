'use client'

const services = [
  {
    id: 1,
    title: 'Web Development',
    desc: 'Through clean code and seamless UX, we engineer immersive digital solutions that intrigue audiences and drive action.',
    items: ['Custom Web Applications', 'Webflow Development', 'Marketing Landing Pages', 'Responsive Design', 'Third Party Integration'],
    image: '/web.avif',
    icon: (
      <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
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
    image: '/softdev.avif',
    icon: (
      <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
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
    image: '/appdev.avif',
    icon: (
      <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
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
    image: 'digimarket.avif',
    icon: (
      <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
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
    image: '/volp.avif',
    icon: (
      <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
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
    image: '/branding.avif',
    icon: (
      <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
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
      marginTop: '20px',
      background: '#d4e84a',
      padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px) clamp(60px, 8vw, 100px)',
      borderRadius: 24,
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .service-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(26,26,26,0.07);
          border: 1px solid rgba(26,26,26,0.05);
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(26,26,26,0.15);
        }
        .service-card-image-wrapper {
          overflow: hidden;
          position: relative;
        }
        .service-card-image {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          width: 100%;
          aspect-ratio: 16 / 10;
          background-size: cover;
          background-position: center;
          transform: scale(0.85);
        }
        .service-card:hover .service-card-image {
          transform: scale(1);
        }
        .service-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(26,26,26,0.12);
          margin-top: -32px;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .service-card:hover .service-card-icon {
          transform: scale(1.05) translateY(-4px);
        }
        .service-card-content {
          padding: 0 clamp(20px, 4vw, 40px) clamp(30px, 4vw, 40px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .service-card-title {
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 12px;
        }
        .service-card-desc {
          font-size: clamp(13px, 1.2vw, 14.5px);
          color: #5a5a5a;
          line-height: 1.65;
        }
        .service-card-divider {
          height: 1px;
          background: rgba(26,26,26,0.08);
          width: 100%;
        }
        .service-card-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin: 0;
          padding: 0;
        }
        .service-card-items li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(12.5px, 1.1vw, 13.5px);
          color: #222;
          font-weight: 500;
          line-height: 1.4;
        }
        .cta-bar {
          background: #1a1a1a;
          border-radius: 20px;
          padding: clamp(32px, 5vw, 52px) clamp(24px, 4vw, 56px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 32px;
          gap: 30px;
        }
        .cta-title {
          font-size: clamp(20px, 2.5vw, 34px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 10px;
        }
        .cta-desc {
          font-size: clamp(13px, 1.1vw, 14px);
          color: rgba(255,255,255,0.5);
          max-width: 480px;
          line-height: 1.6;
        }
        .cta-button {
          background: #fff;
          color: #1a1a1a;
          border: none;
          border-radius: 999px;
          padding: 16px 32px;
          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
          letter-spacing: 0.03em;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 24px rgba(255,255,255,0.2);
        }
        .cta-button-icon {
          width: 32px;
          height: 32px;
          background: #d4e84a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .cta-button:hover .cta-button-icon {
          transform: translateX(3px);
        }
        @media (max-width: 1024px) {
          .services-grid {
            gap: 20px;
          }
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .cta-bar {
            flex-direction: column;
            align-items: flex-start !important;
            text-align: left;
          }
          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .service-card-icon {
            width: 56px;
            height: 56px;
          }
          .service-card-icon svg {
            width: 26px;
            height: 26px;
          }
          .cta-button {
            padding: 14px 24px;
          }
          .cta-button-icon {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        border: '1.5px solid #1a1a1a', borderRadius: 999,
        padding: '6px 18px', fontSize: 'clamp(11px, 1vw, 12px)', fontWeight: 600,
        letterSpacing: '0.08em', color: '#1a1a1a', marginBottom: 'clamp(24px, 4vw, 32px)',
      }}>
        <div style={{ width: 8, height: 8, background: '#1a1a1a', borderRadius: '50%' }} />
        SERVICES
      </div>

      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 64px)',
        fontWeight: 800, color: '#1a1a1a',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        marginBottom: 'clamp(40px, 6vw, 60px)',
        maxWidth: 700,
      }}>
        You have the ambition,<br />we have the expertise
      </h2>

      <div className="services-grid">
        {services.map(s => (
          <div key={s.id} className="service-card">
            <div className="service-card-image-wrapper">
              <div 
                className="service-card-image" 
                style={{ backgroundImage: `url(${s.image})` }}
              />
            </div>

            <div className="service-card-content">
              <div className="service-card-icon">
                {s.icon}
              </div>

              <div>
                <div className="service-card-title">
                  {s.title}
                </div>
                <div className="service-card-desc">
                  {s.desc}
                </div>
              </div>

              <div className="service-card-divider" />

              <ul className="service-card-items">
                {s.items.map(item => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-bar">
        <div>
          <h3 className="cta-title">
            Are you interested in a quoted project?
          </h3>
          <p className="cta-desc">
            If you have specific ideas, requirements, or questions about our services or process, feel free to share them and we can provide assistance accordingly.
          </p>
        </div>
        <button className="cta-button">
          SEND INQUIRY
          <div className="cta-button-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
}