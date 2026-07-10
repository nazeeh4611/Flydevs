// components/ContactSection.tsx
'use client'

export default function ContactSection() {
  return (
    <section
      style={{
        background: '#1a1a1a',
        borderRadius: 32,
        padding: '8px',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        marginTop: 120,
        margin: '0 20px',
      }}
    >
      <div
        style={{
          background: '#e8f25a',
          borderRadius: 26,
          padding: 'clamp(50px, 6vw, 70px) clamp(24px, 5vw, 60px) clamp(60px, 8vw, 90px)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: '1.5px solid #1a1a1a',
            borderRadius: 999,
            padding: '6px 18px',
            fontSize: 'clamp(10px, 1vw, 12px)',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: '#1a1a1a',
            marginBottom: 32,
          }}
        >
          💬 AVAILABLE FOR NEW PROJECTS
        </div>

        <h2
          style={{
            fontSize: 'clamp(32px, 6.5vw, 88px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.3em',
          }}
        >
          <span>Interested in</span>
          <span style={{ width: '100%' }} />
          <span>working</span>
          <button
            style={{
              background: '#1a1a1a',
              color: '#fff',
              border: 'none',
              borderRadius: 999,
              padding: 'clamp(16px, 2vw, 22px) clamp(24px, 3vw, 36px)',
              fontSize: 'clamp(16px, 1.6vw, 18px)',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              cursor: 'pointer',
              lineHeight: 1.2,
            }}
          >
            LET&apos;S
            <br />
            CONNECT!!!
          </button>
          <span>together?</span>
        </h2>
      </div>

      <div
        style={{
          padding: 'clamp(40px, 5vw, 70px) clamp(24px, 5vw, 60px) clamp(40px, 5vw, 60px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(30px, 4vw, 40px)',
        }}
      >
        <div>
          <p
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 3vw, 32px)',
              color: '#fff',
              lineHeight: 1.35,
              margin: 0,
              marginBottom: 24,
            }}
          >
            &quot;Design creates culture.
            <br />
            Culture shapes values.
            <br />
            Values determine the future&quot;
          </p>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', color: 'rgba(255,255,255,0.7)' }}>
            — Robert L. Peters
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, alignItems: 'flex-end' }}>
          <div style={{ textAlign: 'right', width: '100%' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
              Start a conversation
            </div>
            <a
              href="mailto:arg@flydevs.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'underline',
                wordBreak: 'break-all',
              }}
            >
              arg@flydevs.com
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: '#e8f25a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          <div style={{ textAlign: 'right', width: '100%' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
              Call us
            </div>
            <a
              href="tel:+919833572299"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'underline',
              }}
            >
              +91 9833 57 2299
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: '#e8f25a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: '0 clamp(24px, 5vw, 60px) 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'rgba(255,255,255,0.6)' }}>
          ©2024 FLYDEVS Technologies
        </span>
        <div style={{ display: 'flex', gap: 'clamp(16px, 2vw, 28px)', fontSize: 'clamp(12px, 1vw, 14px)', color: '#fff', flexWrap: 'wrap' }}>
          <span style={{ cursor: 'pointer' }}>Instagram</span>
          <span style={{ cursor: 'pointer' }}>LinkedIn</span>
          <span style={{ cursor: 'pointer' }}>Twitter X</span>
          <span style={{ cursor: 'pointer' }}>Dribbble</span>
        </div>
        <a href="#" style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: '#fff', textDecoration: 'underline' }}>
          Company Deck ↓
        </a>
      </div>
    </section>
  )
}