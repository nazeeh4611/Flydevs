'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  const containerRef = useRef(null)
  const textRef = useRef(null)
  const lineRef = useRef(null)
  const quoteRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    let currentProgress = 0

    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 6) + 2

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
            [textRef.current, quoteRef.current, labelRef.current],
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
    }, 55)

    return () => {
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#f7f5f2] flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center px-6 max-w-2xl">
        <div
          ref={quoteRef}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg text-center mb-6">
            Companies that invest in UX see a lower customer acquisition cost
            and increased revenues through better digital experiences.
          </p>

          <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-10">
            Forrester
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div
            ref={textRef}
            className="text-7xl md:text-8xl font-light tracking-tight text-black"
          >
            {String(progress).padStart(3, '0')}
            <span className="text-3xl ml-1">%</span>
          </div>

          <div className="w-32 md:w-56 h-px bg-gray-300 overflow-hidden">
            <div
              ref={lineRef}
              className="h-full bg-black origin-left"
              style={{
                transform: 'scaleX(0)',
              }}
            />
          </div>
        </div>

        <p
          ref={labelRef}
          className="mt-10 text-[10px] uppercase tracking-[0.3em] text-gray-400"
        >
          Loading Experience
        </p>
      </div>
    </div>
  )
}