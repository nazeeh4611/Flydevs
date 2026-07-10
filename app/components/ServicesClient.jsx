// app/components/ServicesClient.js
'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { Globe, Phone, Code2, Megaphone, Smartphone, Check, ArrowRight, ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Web Development',
    desc: "Build modern, responsive, and high-performance websites tailored to your business requirements through our collaboration with FlyDevs Global. We create scalable web solutions that enhance user experience, strengthen your online presence, and support long-term business growth.",
    items: [
      'Corporate Websites',
      'Business Websites',
      'E-commerce Development',
      'Custom Web Applications',
      'Landing Pages',
      'CMS Development',
      'UI/UX Focused Design',
      'Website Maintenance & Support',
      'Performance Optimization',
      'SEO-Friendly Development',
    ],
    icon: <Globe size={28} strokeWidth={2} color="#1a1a1a" />,
  },
  {
    id: 2,
    title: 'VoIP Solutions',
    desc: 'Delivering complete end-to-end VoIP infrastructure designed for businesses of all sizes. Our solutions provide reliable communication systems with high-quality voice services, advanced routing, and enterprise-grade security.',
    items: [
      'VoIP Infrastructure Setup',
      'Softswitch Installation & Configuration',
      'Class 4 Switch Solutions',
      'Class 5 Switch Solutions',
      'VoIP Dialers',
      'SIP Trunk Configuration',
      'Call Routing Solutions',
      'Billing Systems Integration',
      'VoIP Server Management',
      'Monitoring & Technical Support',
    ],
    icon: <Phone size={28} strokeWidth={2} color="#1a1a1a" />,
  },
  {
    id: 3,
    title: 'Software Development',
    desc: 'Develop custom software solutions that improve efficiency, automate business processes, and support digital transformation. We build scalable, secure, and high-performance applications for businesses across industries.',
    items: [
      'Custom Software Development',
      'Enterprise Applications',
      'CRM Development',
      'ERP Solutions',
      'Business Automation Systems',
      'API Development & Integration',
      'Cloud-Based Applications',
      'Database Design & Management',
      'System Integration',
      'Software Maintenance & Support',
    ],
    icon: <Code2 size={28} strokeWidth={2} color="#1a1a1a" />,
  },
  {
    id: 4,
    title: 'Digital Marketing',
    desc: 'Grow your brand with strategic digital marketing solutions that increase visibility, generate qualified leads, and improve customer engagement across multiple online channels.',
    items: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Google Ads (PPC)',
      'Facebook & Instagram Advertising',
      'Content Marketing',
      'Email Marketing',
      'Brand Strategy',
      'Online Reputation Management',
      'Analytics & Performance Reporting',
      'Conversion Rate Optimization (CRO)',
    ],
    icon: <Megaphone size={28} strokeWidth={2} color="#1a1a1a" />,
  },
  {
    id: 5,
    title: 'Mobile App Development',
    desc: 'Build powerful, user-friendly mobile applications for both Android and iOS using modern technologies. We develop secure, scalable, and high-performance apps that deliver seamless user experiences.',
    items: [
      'Android App Development',
      'iOS App Development',
      'Cross-Platform App Development',
      'Flutter Development',
      'React Native Development',
      'UI/UX Design',
      'API Integration',
      'Firebase Integration',
      'App Maintenance & Support',
      'App Store & Play Store Deployment',
    ],
    icon: <Smartphone size={28} strokeWidth={2} color="#1a1a1a" />,
  },
]

const whyChoose = [
  'Trusted Technology Partner Since 2015',
  'Experienced Development Team',
  'End-to-End Digital Solutions',
  'Custom Business-Focused Development',
  'Reliable Technical Support',
  'Modern Technologies & Best Practices',
  'Scalable and Secure Solutions',
  'Customer-Centric Approach',
]

function CheckIcon() {
  return (
    <span
      style={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: '#d4e84a',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: 1,
      }}
    >
      <Check size={10} strokeWidth={2.5} color="#1a1a1a" />
    </span>
  )
}

function ServicesHero() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const ctaRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.services-hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          '.services-hero-title-line',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: 'power4.out' },
          '-=0.3'
        )
        .fromTo(
          '.services-hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.services-hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.services-hero-stat',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.5'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const button = ctaRef.current
    if (!button || !window.matchMedia('(pointer: fine)').matches) return

    const xTo = gsap.quickTo(button, 'x', { duration: 0.4, ease: 'power3.out' })
    const yTo = gsap.quickTo(button, 'y', { duration: 0.4, ease: 'power3.out' })

    const handleMove = (e) => {
      const rect = button.getBoundingClientRect()
      const relX = e.clientX - rect.left - rect.width / 2
      const relY = e.clientY - rect.top - rect.height / 2
      xTo(relX * 0.3)
      yTo(relY * 0.4)
    }

    const handleLeave = () => {
      xTo(0)
      yTo(0)
    }

    button.addEventListener('mousemove', handleMove)
    button.addEventListener('mouseleave', handleLeave)

    return () => {
      button.removeEventListener('mousemove', handleMove)
      button.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <section ref={heroRef} className="relative bg-[#f7f5f2]">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <div className="services-hero-badge inline-block bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 mb-6 opacity-0">
              <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-600">
                SERVICES
              </span>
            </div>

            <h1 className="font-bold leading-[0.95] tracking-tight text-[clamp(2.5rem,6.5vw,5rem)]">
              <span className="services-hero-title-line block opacity-0">
                Since 2015 —
              </span>
              <span className="services-hero-title-line block opacity-0">
                Trusted Technology
              </span>
              <span className="services-hero-title-line block opacity-0 text-gray-300">
                Partner
              </span>
            </h1>

            <p className="services-hero-subtitle mt-6 max-w-xl text-base md:text-lg text-gray-600 leading-relaxed opacity-0">
              Building reliable, high-performance solutions tailored to the unique needs of B2B and B2C brands since 2015.
            </p>

            <div className="services-hero-cta mt-10 opacity-0">
              <button
                ref={ctaRef}
                className="group bg-black text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-wider flex items-center gap-3"
              >
                <span>GET STARTED</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl border-t border-gray-200 pt-10">
            <div className="services-hero-stat opacity-0">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]">10+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Years of Experience</div>
            </div>
            <div className="services-hero-stat opacity-0">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]">5</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Core Service Lines</div>
            </div>
            <div className="services-hero-stat opacity-0">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]">2</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Partner Agencies</div>
            </div>
            <div className="services-hero-stat opacity-0">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]">24/7</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Technical Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PartnershipSection() {
  return (
    <section
      style={{
        marginTop: '20px',
        background: '#1a1a1a',
        padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 60px)',
        borderRadius: 24,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          border: '1.5px solid #d4e84a',
          borderRadius: 999,
          padding: '6px 18px',
          fontSize: 'clamp(11px, 1vw, 12px)',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: '#d4e84a',
          marginBottom: 'clamp(20px, 3vw, 28px)',
        }}
      >
        <div style={{ width: 8, height: 8, background: '#d4e84a', borderRadius: '50%' }} />
        STRATEGIC PARTNERSHIP
      </div>

      <h2
        style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: 'clamp(16px, 2vw, 20px)',
          maxWidth: 760,
        }}
      >
        Nacrosoft Technology <span style={{ color: '#d4e84a' }}>×</span> FlyDevs Global
      </h2>

      <p
        style={{
          fontSize: 'clamp(14px, 1.2vw, 17px)',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.7,
          maxWidth: 640,
        }}
      >
        Combining Nacrosoft&apos;s technical expertise in VoIP and software development with FlyDevs&apos; design capabilities to deliver comprehensive digital solutions.
      </p>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section
      style={{
        marginTop: '20px',
        background: '#d4e84a',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px) clamp(60px, 8vw, 100px)',
        borderRadius: 24,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .svc-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(26,26,26,0.07);
          border: 1px solid rgba(26,26,26,0.05);
          cursor: default;
        }
        .svc-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(26,26,26,0.15);
        }
        .svc-card-header {
          padding: clamp(28px, 3vw, 36px) clamp(20px, 4vw, 40px) 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .svc-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #f7f5f2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .svc-card:hover .svc-card-icon {
          transform: scale(1.05) translateY(-4px);
          background: #d4e84a;
        }
        .svc-card-number {
          font-size: 13px;
          font-weight: 700;
          color: rgba(26,26,26,0.2);
          letter-spacing: 0.05em;
        }
        .svc-card-content {
          padding: clamp(20px, 3vw, 28px) clamp(20px, 4vw, 40px) clamp(30px, 4vw, 40px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .svc-card-title {
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 12px;
        }
        .svc-card-desc {
          font-size: clamp(13px, 1.2vw, 14.5px);
          color: #5a5a5a;
          line-height: 1.65;
        }
        .svc-card-divider {
          height: 1px;
          background: rgba(26,26,26,0.08);
          width: 100%;
        }
        .svc-card-items {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 11px 16px;
          margin: 0;
          padding: 0;
        }
        .svc-card-items li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(12px, 1vw, 13px);
          color: #222;
          font-weight: 500;
          line-height: 1.4;
        }
        @media (max-width: 1024px) {
          .svc-grid { gap: 20px; }
        }
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 560px) {
          .svc-card-items { grid-template-columns: 1fr; }
          .svc-card-icon { width: 56px; height: 56px; }
        }
      `}</style>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          border: '1.5px solid #1a1a1a',
          borderRadius: 999,
          padding: '6px 18px',
          fontSize: 'clamp(11px, 1vw, 12px)',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: '#1a1a1a',
          marginBottom: 'clamp(24px, 4vw, 32px)',
        }}
      >
        <div style={{ width: 8, height: 8, background: '#1a1a1a', borderRadius: '50%' }} />
        OUR SERVICES
      </div>

      <h2
        style={{
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: 800,
          color: '#1a1a1a',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: 'clamp(40px, 6vw, 60px)',
          maxWidth: 700,
        }}
      >
        Comprehensive digital solutions tailored to your business needs
      </h2>

      <div className="svc-grid">
        {services.map((s, i) => (
          <div key={s.id} className="svc-card">
            <div className="svc-card-header">
              <div className="svc-card-icon">{s.icon}</div>
              <span className="svc-card-number">{String(i + 1).padStart(2, '0')}</span>
            </div>

            <div className="svc-card-content">
              <div>
                <div className="svc-card-title">{s.title}</div>
                <div className="svc-card-desc">{s.desc}</div>
              </div>

              <div className="svc-card-divider" />

              <ul className="svc-card-items">
                {s.items.map((item) => (
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
    </section>
  )
}

function WhyChooseSection() {
  return (
    <section
      style={{
        marginTop: '20px',
        background: '#1a1a1a',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px)',
        borderRadius: 24,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-top: clamp(32px, 5vw, 48px);
        }
        .why-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 18px 20px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .why-item:hover {
          background: rgba(212,232,74,0.08);
          border-color: rgba(212,232,74,0.3);
        }
        @media (max-width: 700px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          border: '1.5px solid #d4e84a',
          borderRadius: 999,
          padding: '6px 18px',
          fontSize: 'clamp(11px, 1vw, 12px)',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: '#d4e84a',
          marginBottom: 'clamp(24px, 4vw, 32px)',
        }}
      >
        <div style={{ width: 8, height: 8, background: '#d4e84a', borderRadius: '50%' }} />
        WHY CHOOSE US
      </div>

      <h2
        style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          maxWidth: 640,
        }}
      >
        Why Choose Nacrosoft Technology?
      </h2>

      <div className="why-grid">
        {whyChoose.map((point) => (
          <div key={point} className="why-item">
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: '#d4e84a',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Check size={16} strokeWidth={2.5} color="#1a1a1a" />
            </span>
            <span style={{ color: '#fff', fontSize: 'clamp(13.5px, 1.1vw, 15px)', fontWeight: 500 }}>
              {point}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section
      style={{
        marginTop: '20px',
        marginBottom: '20px',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .final-cta-bar {
          background: #d4e84a;
          border-radius: 24px;
          padding: clamp(36px, 6vw, 64px) clamp(24px, 4vw, 60px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }
        .final-cta-title {
          font-size: clamp(24px, 3.5vw, 42px);
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 10px;
        }
        .final-cta-desc {
          font-size: clamp(13px, 1.1vw, 15px);
          color: rgba(26,26,26,0.65);
          max-width: 520px;
          line-height: 1.6;
        }
        .final-cta-button {
          background: #1a1a1a;
          color: #fff;
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
        .final-cta-button:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 24px rgba(26,26,26,0.25);
        }
        .final-cta-button-icon {
          width: 32px;
          height: 32px;
          background: #d4e84a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .final-cta-button:hover .final-cta-button-icon {
          transform: translateX(3px) translateY(-3px);
        }
        @media (max-width: 900px) {
          .final-cta-bar {
            flex-direction: column;
            align-items: flex-start !important;
            text-align: left;
          }
          .final-cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="final-cta-bar">
        <div>
          <h3 className="final-cta-title">Ready to Get Started?</h3>
          <p className="final-cta-desc">
            From VoIP to web development, mobile apps to marketing, we deliver high-quality solutions tailored to your business.
          </p>
        </div>
        <button className="final-cta-button">
          CONTACT US TODAY
          <div className="final-cta-button-icon">
            <ArrowUpRight size={16} color="#1a1a1a" />
          </div>
        </button>
      </div>
    </section>
  )
}

export default function ServicesClient() {
  return (
    <main className="bg-[#f7f5f2] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ServicesHero />
        <PartnershipSection />
        <ServicesGrid />
        <WhyChooseSection />
        <ContactCTA />
      </div>
    </main>
  )
}