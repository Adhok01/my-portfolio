'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0) // 0=loading, 1=revealing name, 2=exit
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient && sessionStorage.getItem('portfolio-loaded')) return null

  useEffect(() => {
    // 8 seconds for progress (8000ms)
    // 50ms interval = 160 steps
    // 100 / 160 = 0.625 increment
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        const next = p + 0.625
        return next >= 100 ? 100 : next
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase(1), 200)
      // Welcome phase for 2 seconds (Total experience = 8 + 2 = 10s)
      setTimeout(() => setPhase(2), 2000)
    }
  }, [progress])

  const letters = 'ADHOKSHAJA'.split('')

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
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
          <div style={{ display: 'flex', gap: '0.04em', marginBottom: '4rem', overflow: 'hidden', flexWrap: 'wrap', justifyContent: 'center', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
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
                  textShadow: '0 0 15px rgba(0, 102, 255, 0.6)',
                  animation: 'shimmer 3s linear infinite',
                }}
              >
                {l === ' ' ? '\u00A0' : l}
              </motion.span>
            ))}
          </div>

          {/* Big Progress Container */}
          <div style={{ position: 'relative', width: 'min(500px, 80vw)', marginBottom: '3rem', zIndex: 2 }}>
            {/* Number Counter */}
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
              marginBottom: '1rem', fontFamily: "'JetBrains Mono', monospace"
            }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 300, color: '#ffffff', lineHeight: 1 }}>
                {Math.floor(progress)}<span style={{ fontSize: '1rem', color: '#0066FF' }}>%</span>
              </span>
            </div>

            {/* Big Progress Bar */}
            <div style={{
              width: '100%',
              height: 4,
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.03)'
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #0066FF, #00D4FF, #0066FF)',
                  backgroundSize: '200%',
                  animation: 'shimmer 1s linear infinite',
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {progress < 100 ? (
              <motion.p
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.3rem',
                  color: '#00D4FF',
                  textTransform: 'uppercase',
                  position: 'relative', zIndex: 2
                }}
              >
                Initialising Experience...
              </motion.p>
            ) : (
              <motion.p
                key="welcome"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  textShadow: '0 0 30px rgba(0, 102, 255, 0.8), 0 0 60px rgba(0, 102, 255, 0.4)',
                  position: 'relative', zIndex: 2
                }}
              >
                Welcome
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
