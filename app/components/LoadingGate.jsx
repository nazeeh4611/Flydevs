'use client'

import { useCallback, useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'

/** Shows the intro screen once per browser, decided by the inline script in page.js. */
export default function LoadingGate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (document.documentElement.dataset.intro === '1') setShow(true)
  }, [])

  // Once the intro screen is painted it covers the page, so drop the pre-paint cover
  useEffect(() => {
    if (show) delete document.documentElement.dataset.intro
  }, [show])

  const done = useCallback(() => {
    try {
      localStorage.setItem('hasVisited', 'true')
    } catch {}
    setShow(false)
  }, [])

  return show ? <LoadingScreen onComplete={done} /> : null
}
