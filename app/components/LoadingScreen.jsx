'use client'

import { useEffect, useState } from 'react'

const QUOTES = [
  { stat: '74%', text: 'of people are likely to return to a website if it works well on mobile', source: 'Adobe' },
  { stat: '88%', text: 'of online shoppers are less likely to return after a bad experience', source: 'Amazon Web Services' },
  { stat: '0.05 s', text: 'is all it takes for people to form an opinion about your website', source: 'Google' },
  { stat: '38%', text: 'of people stop engaging with a website if the layout is unattractive', source: 'Adobe' },
  { stat: '1 in 2', text: 'people say design is the main reason they trust a website', source: 'Blue Corona' },
]

const DURATION = 2200

export default function LoadingScreen({ onComplete }) {
  const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)])
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let raf
    let leaveTimer
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION)
      // ease-out so the count slows near 100
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setLeaving(true)
        leaveTimer = setTimeout(() => onComplete?.(), 500)
      }
    }
    raf = requestAnimationFrame(tick)
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(leaveTimer)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Loading, ${progress}%`}
      className={`fixed inset-0 z-[100] flex flex-col justify-center bg-lime px-6 text-ink transition-opacity duration-500 ease-out md:px-20 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="max-w-4xl">
        <p className="text-lg text-ink/70 md:text-xl">Did you know?</p>
        <p className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.03em]">
          <span className="font-bold">{quote.stat}</span> {quote.text}
        </p>
        <p className="mt-6 text-base text-ink/60">Source: {quote.source}</p>
      </div>

      <div className="mt-16 h-px w-full bg-ink/20">
        <div className="h-full origin-left bg-ink" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <div className="absolute bottom-8 right-6 flex items-end gap-3 md:right-20">
        <span className="mb-3 text-base text-ink/70 md:mb-5 md:text-lg">Loading</span>
        <span className="text-[5rem] font-medium leading-none tracking-[-0.05em] tabular-nums md:text-[8rem]">
          {String(progress).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
