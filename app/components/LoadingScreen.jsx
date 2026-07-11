'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const QUOTES = [
  {
    stat: '74%',
    text: 'of people are likely to return to a website if it is optimized for mobile.',
    source: 'Adobe',
  },
  {
    stat: '88%',
    text: 'of online consumers are less likely to return to a site after a bad experience.',
    source: 'Amazon Web Services',
  },
  {
    stat: '0.05',
    text: 'seconds is all it takes for users to form an opinion about your website.',
    source: 'Google',
  },
  {
    stat: '38%',
    text: 'of people will stop engaging with a website if the content or layout is unattractive.',
    source: 'Adobe',
  },
  {
    stat: '5x',
    text: 'more effective — that\u2019s the ROI companies see for every dollar invested in UX.',
    source: 'Forrester',
  },
  {
    stat: '1 in 2',
    text: 'people say design is the number one reason they trust a website.',
    source: 'Blue Corona',
  },
]

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [quote, setQuote] = useState(QUOTES[0])

  const containerRef = useRef(null)
  const numberRef = useRef(null)
  const lineRef = useRef(null)
  const quoteRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)])

    let currentProgress = 0

    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 3) + 2

      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)

        clearInterval(interval)

        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.inOut',
          },
          onComplete: () => {
            if (onComplete) {
              onComplete()
            }
          },
        })

        tl.to(lineRef.current, {
          scaleX: 1,
          duration: 0.6,
        })
          .to(
            [quoteRef.current, numberRef.current, labelRef.current],
            {
              opacity: 0,
              y: -20,
              duration: 0.6,
              stagger: 0.05,
            },
            '-=0.3'
          )
          .to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            pointerEvents: 'none',
          })

        return
      }

      setProgress(currentProgress)
    }, 90)

    return () => {
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-center px-8 md:px-20"
      style={{ backgroundColor: '#d3e84a' }}
    >
      <div ref={quoteRef} className="max-w-4xl">
        <p className="italic text-xl md:text-2xl text-black mb-4">
          Did you know?
        </p>

        <p className="text-4xl md:text-6xl leading-[1.1] font-medium text-black">
          <span className="font-extrabold">{quote.stat}</span> {quote.text}
        </p>

        <p className="mt-6 text-lg md:text-xl font-bold text-black">
          [{quote.source}]
        </p>
      </div>

      <div className="mt-16 w-full h-px bg-black/20 overflow-hidden">
        <div
          ref={lineRef}
          className="h-full bg-black origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div className="absolute bottom-10 right-8 md:right-16 flex items-end gap-3">
        <span
          ref={labelRef}
          className="text-lg md:text-2xl font-semibold text-black mb-2 md:mb-4"
        >
          Loading
        </span>
        <div
          ref={numberRef}
          className="flex items-start leading-none text-black"
        >
          <span className="text-[6rem] md:text-[9rem] font-black tracking-tighter">
            {String(progress).padStart(2, '0')}
          </span>
          <span className="text-3xl md:text-5xl font-black mt-2 md:mt-4">
            %
          </span>
        </div>
      </div>
    </div>
  )
}