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
      }}
    >
      {/* Yellow CTA banner */}
      <div
        style={{
          background: '#e8f25a',
          borderRadius: 26,
          padding: '70px 60px 90px',
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
            fontSize: 12,
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
            fontSize: 'clamp(40px, 6.5vw, 88px)',
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
              padding: '22px 36px',
              fontSize: 18,
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

      {/* Bottom dark panel */}
      <div
        style={{
          padding: '70px 60px 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
        }}
      >
        {/* Left: quote */}
        <div>
          <p
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 32px)',
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
          <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>
            — Robert L. Peters
          </span>
        </div>

        {/* Right: contact details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, alignItems: 'flex-end' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
              Start a conversation
            </div>
            <a
              href="mailto:arg@flydevs.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 28,
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'underline',
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

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
              Call us
            </div>
            <a
              href="tel:+919833572299"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 28,
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'underline',
              }}
            >
              + 91 9833 57 2299
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

      {/* Footer row */}
      <div
        style={{
          padding: '0 60px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
          ©2024 FLYDEVS Technologies
        </span>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, color: '#fff' }}>
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>Twitter X</span>
          <span>Dribbble</span>
        </div>
        <a href="#" style={{ fontSize: 14, color: '#fff', textDecoration: 'underline' }}>
          Company Deck ↓
        </a>
      </div>

      {/* Marquee strip */}
      <div
        style={{
          background: '#e8f25a',
          padding: '24px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: '#1a1a1a',
            letterSpacing: '-0.01em',
          }}
        >
          FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM •
        </span>
      </div>
    </section>
  )
}