'use client'

import { useEffect, useState } from 'react'

// Phase timeline (first visit):  hold → reveal → done
// Phase timeline (refresh):       hold → fade → done
type Phase = 'hold' | 'reveal' | 'fade' | 'done'

export function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>('hold')

  useEffect(() => {
    const isFirstVisit = !sessionStorage.getItem('mona_visited')
    sessionStorage.setItem('mona_visited', '1')

    if (isFirstVisit) {
      // First visit: blink (900ms) then zoom-reveal (800ms)
      const revealTimer = setTimeout(() => setPhase('reveal'), 900)
      const doneTimer   = setTimeout(() => setPhase('done'),   1750)
      return () => {
        clearTimeout(revealTimer)
        clearTimeout(doneTimer)
      }
    } else {
      // Refresh: blink (900ms) then soft fade-out (400ms), no zoom
      const fadeTimer = setTimeout(() => setPhase('fade'), 900)
      const doneTimer = setTimeout(() => setPhase('done'), 1300)
      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(doneTimer)
      }
    }
  }, [])

  if (phase === 'done') return null

  const isRevealing = phase === 'reveal'
  const isFading    = phase === 'fade'

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: (isRevealing || isFading) ? 'none' : 'all',
        backgroundColor: '#000',
        opacity: (isRevealing || isFading) ? 0 : 1,
        transition: isRevealing
          ? 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)'
          : isFading
          ? 'opacity 400ms ease-in-out'
          : 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-logo, serif)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          color: '#fff',
          letterSpacing: '0.08em',
          userSelect: 'none',
          display: 'block',
          animation: !isRevealing ? 'mona-breathe 1.4s ease-in-out infinite' : 'none',
          transform: isRevealing ? 'scale(5)' : 'scale(1)',
          transition: isRevealing
            ? 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
            : 'none',
        }}
      >
        Mona
      </span>

      <style>{`
        @keyframes mona-breathe {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 1;   }
        }
      `}</style>
    </div>
  )
}
