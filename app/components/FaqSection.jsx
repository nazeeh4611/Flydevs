'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: "What are FLYDEVS's areas of expertise as a design & development agency?",
    answer: "We specialize in brand identity, web design, and full-stack development. Our team handles everything from strategy and UX to production-ready front-end and back-end builds, so you get one team accountable for the whole experience.",
  },
  {
    id: 2,
    question: 'What is the design & development process you follow at FLYDEVS?',
    answer: "We move through discovery, design, and build in tight loops, sharing work early and often so feedback shapes the product before it's locked in. Typically: discovery & strategy, wireframes & UI design, development, QA, and launch.",
  },
  {
    id: 3,
    question: 'How is FLYDEVS different from other agencies?',
    answer: 'We stay small and senior on purpose. Every project is led by people who designed and shipped the work themselves, not handed off to juniors after the pitch. That means faster decisions, fewer handoffs, and a final product that matches the original vision.',
  },
  {
    id: 4,
    question: 'What are the models of engagement that you have?',
    answer: 'We work on fixed-scope projects, monthly retainers, and embedded team extensions, depending on what your timeline and budget call for. We\'ll recommend the model that fits once we understand your goals.',
  },
  {
    id: 5,
    question: 'How does FLYDEVS go about providing Branding services?',
    answer: "We start with positioning and audience research, then build out visual identity, voice, and guidelines that hold up across every touchpoint, from your website to your pitch deck.",
  },
  {
    id: 6,
    question: 'How does FLYDEVS ensure my digital solution reflects my brand?',
    answer: "Every design decision is traced back to a brand principle we define together up front. Nothing ships because it looks nice; it ships because it reinforces who you are.",
  },
]

export default function FaqSection() {
  const [openId, setOpenId] = useState(2)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      style={{
        background: '#1a1a1a',
        borderRadius: 32,
        padding: 'clamp(60px, 8vw, 90px) clamp(20px, 4vw, 60px) clamp(80px, 10vw, 100px)',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 40,
        position: 'relative',
        margin: '0 20px',
      }}
    >
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: '1.5px solid rgba(255,255,255,0.85)',
            borderRadius: 999,
            padding: '6px 18px',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#fff',
            marginBottom: 28,
          }}
        >
          <span style={{ color: '#ff5a1f' }}>?</span> FAQ
        </div>

        <h2
          style={{
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: 0,
            marginBottom: 'clamp(32px, 4vw, 48px)',
          }}
        >
          Answers to
          <br />
          common questions
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {faqs.map((f) => {
          const isOpen = openId === f.id
          return (
            <div
              key={f.id}
              style={{
                background: '#262626',
                borderRadius: 18,
                padding: '24px 28px',
                cursor: 'pointer',
                transition: 'background 0.25s ease',
              }}
              onClick={() => toggle(f.id)}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(16px, 1.4vw, 18px)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.35,
                  }}
                >
                  {f.question}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: isOpen ? '#d4e84a' : 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.25s ease, background 0.25s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path
                      d="M1 1L7 7L13 1"
                      stroke={isOpen ? '#1a1a1a' : '#fff'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div
                style={{
                  maxHeight: isOpen ? 200 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <p
                  style={{
                    marginTop: 16,
                    marginBottom: 0,
                    fontSize: 'clamp(14px, 1.1vw, 14.5px)',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.65)',
                    paddingRight: 'clamp(0px, 4vw, 40px)',
                  }}
                >
                  {f.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}