'use client'

import { useEffect, useState } from 'react'

// Phase timeline:
// 'hold'    — black screen, logo breathes (0 → 900ms)
// 'reveal'  — logo scales up dramatically, background fades out (900ms → 1700ms)
// 'done'    — overlay removed from DOM
type Phase = 'hold' | 'reveal' | 'done'

export function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>('hold')

  useEffect(() => {
    // Only play on true browser page load/refresh
    const already = sessionStorage.getItem('mona_intro_played')
    if (already) {
      setPhase('done')
      return
    }
    sessionStorage.setItem('mona_intro_played', '1')

    const revealTimer = setTimeout(() => setPhase('reveal'), 900)
    const doneTimer  = setTimeout(() => setPhase('done'),   1750)

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'done') return null

  const isRevealing = phase === 'reveal'

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
        pointerEvents: isRevealing ? 'none' : 'all',
        // Background fades out during reveal
        backgroundColor: '#000',
        opacity: isRevealing ? 0 : 1,
        transition: isRevealing
          ? 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)'
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
          // During hold: subtle breath animation
          // During reveal: scale up toward viewer
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
