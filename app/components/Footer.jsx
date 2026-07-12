'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer style={{
        background: '#1a1a1a',
        padding: '60px 20px 40px',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'clamp(30px, 4vw, 50px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: 40,
        }}>
          <div>
            <div
              style={{
                marginBottom: 16,
              }}
            >
              <Image
                src="/fdlogo-1.avif"
                alt="FLYDEVS"
                width={190}
                height={80}
                priority
                style={{
                  width: '190px',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p style={{
              fontSize: 'clamp(13px, 1vw, 14px)',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
              maxWidth: 320,
            }}>
              Transforming forward-thinking ideas into futuristic solutions with robust technology and scalable design.
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 16,
              letterSpacing: '0.05em',
            }}>
              COMPANY
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
              <li><Link href="/about" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>About</Link></li>
              <li><Link href="/work" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>Work</Link></li>
              <li><Link href="/services" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>Services</Link></li>
              <li><Link href="/contact" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 16,
              letterSpacing: '0.05em',
            }}>
              SERVICES
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
              <li><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>Web Development</span></li>
              <li><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>Software Development</span></li>
              <li><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>App Development</span></li>
              <li><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>Digital Marketing</span></li>
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 16,
              letterSpacing: '0.05em',
            }}>
              CONNECT
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
              <li><a href="mailto:flyhomiesinfo@gmail.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>flyhomiesinfo@gmail.com</a></li>
              <li><a href="tel:+971504316900" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>+971 50 431 6900</a></li>
              <li><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Dubai, UAE</span></li>
              <li><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Kochi, Kerala, India</span></li>
            </ul>
          </div>
        </div>

        <div style={{
          maxWidth: 1200,
          margin: '24px auto 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <span style={{
            fontSize: 'clamp(11px, 0.9vw, 13px)',
            color: 'rgba(255,255,255,0.3)',
          }}>
            © {new Date().getFullYear()} FLYDEVS Technologies. All rights reserved.
          </span>
          <div style={{
            display: 'flex',
            gap: 20,
            fontSize: 'clamp(11px, 0.9vw, 13px)',
            color: 'rgba(255,255,255,0.3)',
            flexWrap: 'wrap',
          }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Cookie Policy</span>
          </div>
        </div>
      </footer>

      <div style={{
        background: '#e8f25a',
        padding: 'clamp(16px, 2vw, 24px) 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}>
        <div
          style={{
            display: 'inline-block',
            animation: 'marquee 20s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 800,
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
              display: 'inline-block',
              paddingRight: '2rem',
            }}
          >
            FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM •
          </span>
          <span
            style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 800,
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
              display: 'inline-block',
              paddingRight: '2rem',
            }}
          >
            FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM • FLYDEVS.COM •
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @media (max-width: 768px) {
          footer > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}