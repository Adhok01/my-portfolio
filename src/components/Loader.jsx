'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0) // 0=loading, 1=revealing name, 2=exit

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase(1), 200)
      setTimeout(() => setPhase(2), 1000)
    }
  }, [progress])

  const letters = 'ADHOKSHAJA NAGARHALLI'.split('')

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            background: '#020408',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Grid background */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
          }} />

          {/* Name reveal */}
          <div style={{ display: 'flex', gap: '0.04em', marginBottom: '3rem', overflow: 'hidden', flexWrap: 'wrap', justifyContent: 'center', padding: '0 2rem' }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.03, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  background: 'linear-gradient(135deg, #0066FF, #00D4FF, #0066FF)',
                  backgroundSize: '200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 10px rgba(0, 102, 255, 0.4)',
                  animation: 'shimmer 3s linear infinite',
                }}
              >
                {l === ' ' ? '\u00A0' : l}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{
            width: 'min(300px, 60vw)',
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 1,
            overflow: 'hidden',
            marginBottom: '1.5rem',
          }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #c9a84c, #00d4ff, #c9a84c)',
                backgroundSize: '200%',
                animation: 'shimmer 1s linear infinite',
                borderRadius: 1,
              }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: '#5a6680',
              textTransform: 'uppercase',
            }}
          >
            {progress < 100 ? `Loading ${Math.floor(Math.min(progress, 100))}%` : 'Welcome'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
