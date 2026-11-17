'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { ButtonLink, Eyebrow } from './ui'

const faqs = [
  {
    question: 'What does Flydevs specialise in?',
    answer:
      'Brand identity, web design and full-stack development. We handle everything from strategy and UX to production-ready front-end and back-end builds, so one team is accountable for the whole experience.',
  },
  {
    question: 'What process do you follow?',
    answer:
      "We move through discovery, design and build in tight loops, sharing work early so feedback shapes the product before it's locked in. Typically: discovery and strategy, wireframes and UI design, development, QA and launch.",
  },
  {
    question: 'How are you different from other agencies?',
    answer:
      'We stay small and senior on purpose. Every project is led by the people who design and ship the work, not handed to juniors after the pitch. That means faster decisions, fewer handoffs and a result that matches the original vision.',
  },
  {
    question: 'How can we work together?',
    answer:
      "Fixed-scope projects, monthly retainers or an embedded team extension, depending on your timeline and budget. We'll recommend the model that fits once we understand your goals.",
  },
  {
    question: 'How do you approach branding?',
    answer:
      'We start with positioning and audience research, then build the visual identity, voice and guidelines that hold up across every touchpoint, from your website to your pitch deck.',
  },
  {
    question: 'How do you make sure the product reflects our brand?',
    answer:
      "Every design decision traces back to a brand principle we define together up front. Nothing ships because it looks nice; it ships because it reinforces who you are.",
  },
]

function FaqItem({ faq, open, onToggle }) {
  const id = useId()
  return (
    <div className="border-b border-white/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="text-lg font-medium tracking-[-0.01em] text-white">{faq.question}</span>
          <span
            aria-hidden
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[background-color,transform] duration-200 ${
              open ? 'rotate-45 bg-lime text-ink' : 'bg-white/[0.06] text-white'
            }`}
          >
            <Plus size={18} strokeWidth={1.75} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pr-12 text-[15px] leading-7 text-white/65">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-5 md:px-8" aria-labelledby="faq-title">
      <div className="on-dark mx-auto max-w-[1400px] rounded-[28px] bg-ink py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Eyebrow dark>FAQ</Eyebrow>
            <h2
              id="faq-title"
              className="mt-4 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white"
            >
              Answers to common questions
            </h2>
            <p className="mt-4 max-w-sm text-[17px] leading-7 text-white/65">
              Something else on your mind? We reply within one working day.
            </p>
            <ButtonLink href="/contact" variant="lime" className="mt-8">
              Ask us directly
            </ButtonLink>
          </div>

          <div className="border-t border-white/10">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.question}
                faq={f}
                open={openIndex === i}
                onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
