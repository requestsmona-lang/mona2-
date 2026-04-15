'use client'

import { useEffect, useState } from 'react'

export function IntroAnimation() {
  // 'intro'   — showing the full-screen overlay with breathing logo
  // 'leaving' — overlay is transitioning out (logo scales up, overlay fades)
  // 'done'    — overlay is removed from DOM
  const [phase, setPhase] = useState<'intro' | 'leaving' | 'done'>('intro')

  useEffect(() => {
    // Only play on true browser page load/refresh, not on SPA navigation.
    // sessionStorage persists for the tab session but is cleared on hard reload.
    const already = sessionStorage.getItem('mona_intro_played')
    if (already) {
      setPhase('done')
      return
    }

    // Mark as played immediately so back-navigation or logo clicks skip it
    sessionStorage.setItem('mona_intro_played', '1')

    // Breathing phase: ~1 s, then begin exit transition
    const exitTimer = setTimeout(() => {
      setPhase('leaving')
    }, 1100)

    // Remove from DOM after exit transition completes (~700 ms)
    const doneTimer = setTimeout(() => {
      setPhase('done')
    }, 1800)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Fade the whole overlay out during 'leaving'
        opacity: phase === 'leaving' ? 0 : 1,
        transition: phase === 'leaving' ? 'opacity 700ms ease-in-out' : 'none',
        pointerEvents: phase === 'leaving' ? 'none' : 'all',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-logo, serif)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          color: '#fff',
          letterSpacing: '0.08em',
          userSelect: 'none',
          // Breathing animation during 'intro', gentle scale-up during 'leaving'
          animation: phase === 'intro' ? 'mona-breathe 1.6s ease-in-out infinite' : 'none',
          transform: phase === 'leaving' ? 'scale(1.08)' : 'scale(1)',
          transition: phase === 'leaving' ? 'transform 700ms ease-in-out' : 'none',
        }}
      >
        Mona
      </span>

      <style>{`
        @keyframes mona-breathe {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 1;    }
        }
      `}</style>
    </div>
  )
}
