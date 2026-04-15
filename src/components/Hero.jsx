'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const { personal, stats, marqueeItems } = portfolioData

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

export default function Hero() {
  const tiltRef = useRef(null)
  const tiltInner = useRef(null)
  const roles = ['AI Product Management', 'AI Engineer', 'ANALYTICS', 'Data Scientist']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // 3D Tilt
  useEffect(() => {
    const wrap = tiltRef.current
    const inner = tiltInner.current
    if (!wrap || !inner) return
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 28
      const y = -((e.clientY - r.top) / r.height - 0.5) * 28
      inner.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    }
    const onLeave = () => { inner.style.transform = 'rotateY(0) rotateX(0)' }
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', onLeave)
    return () => {
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 2.5 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '6rem 3rem 0',
        position: 'relative', zIndex: 1, overflow: 'hidden',
      }}
    >
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 102, 255, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'pulse_slow 4s ease-in-out infinite',
      }} />

      <div style={{
        maxWidth: 1300, width: '100%',
        display: 'grid', gridTemplateColumns: '1fr',
        gap: '4rem', alignItems: 'center',
      }} className="hero-grid">

        {/* Left */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            marginBottom: '2rem',
          }}>
            <div style={{ width: 40, height: 1, background: 'var(--gold)' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem', letterSpacing: '0.3em',
              color: 'var(--gold)', textTransform: 'uppercase',
            }}>Portfolio · 2025</span>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#00D4FF',
              boxShadow: '0 0 10px #00D4FF',
              display: 'inline-block',
              animation: 'pulse_slow 2s infinite',
            }} />
          </motion.div>

          <motion.h1 variants={itemVariants} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 6vw, 7.5rem)',
            fontWeight: 700, lineHeight: 0.95,
            letterSpacing: '-0.02em', marginBottom: '0.5rem',
            color: '#0066FF',
            textTransform: 'uppercase',
            textShadow: '0 0 15px rgba(0, 106, 255, 0.8), 0 0 30px rgba(0, 106, 255, 0.4), 0 0 45px rgba(0, 106, 255, 0.2)',
            animation: 'glowPulse 3s ease-in-out infinite alternate',
          }}>
            Hi, I'm
            <br />
            <span style={{ fontWeight: 800 }}>Adhokshaja</span>
          </motion.h1>

          <motion.div variants={itemVariants} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.4rem', color: '#ffffff',
            letterSpacing: '0.15em', margin: '1.5rem 0',
            minHeight: '3rem',
            display: 'flex', alignItems: 'center',
            overflow: 'hidden'
          }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 25, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -25, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  display: 'inline-block',
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                  transformOrigin: 'center center',
                  fontWeight: 500,
                }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants} style={{
            fontSize: '1.1rem', color: 'var(--muted)',
            lineHeight: 1.8, maxWidth: 600, marginBottom: '3rem',
          }}>
            {personal.tagline} Sitting at the intersection of <span style={{ color: '#ffffff' }}>AI, analytics, and business storytelling.</span>
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a href={personal.resume} target="_blank" rel="noreferrer" className="btn-primary"><span>⬇ Resume</span></a>
            <a href="#contact" className="btn-primary"><span>Get In Touch</span></a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem', marginTop: '4rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '2.5rem',
            maxWidth: 600,
          }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2.4rem', fontWeight: 700,
                  color: '#ffffff', lineHeight: 1,
                }}>{s.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.4rem', lineHeight: 1.4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Socials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 1 }}
          style={{
            position: 'absolute',
            right: '3rem',
          top: '48%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.2rem',
          alignItems: 'center',
          zIndex: 10
        }}
        className="hero-socials"
      >
        {/* Vertical line with glow */}
        <div style={{ 
          width: '1px', 
          height: '60px', 
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))',
          boxShadow: '0 0 10px rgba(0, 106, 255, 0.2)'
        }} />
          
          {[
            { Icon: Github, href: personal.github, label: 'GitHub' },
            { Icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
            { Icon: XIcon, href: personal.x, label: 'X' },
            { Icon: Instagram, href: personal.instagram, label: 'Instagram' }
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              whileHover={{ 
                y: -5, 
                color: '#ffffff',
                textShadow: '0 0 8px rgba(255,255,255,0.8)'
              }}
              style={{
                color: 'rgba(255,255,255,0.6)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
              }}
            >
              {typeof social.Icon === 'function' ? <social.Icon /> : <social.Icon size={24} strokeWidth={1.5} />}
            </motion.a>
          ))}

          <div style={{ 
            width: '1px', 
            height: '60px', 
            background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.3))',
            boxShadow: '0 0 10px rgba(0, 106, 255, 0.2)'
          }} />
        </motion.div>
      </div>

      {/* Marquee */}
      <div style={{
        width: '100%', marginTop: '5rem',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '1.5rem 0', overflow: 'hidden',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 25s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1rem', fontStyle: 'italic',
              color: 'var(--muted)', letterSpacing: '0.05em',
              display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0,
            }}>
              {item}
              <span style={{ fontSize: '0.4rem', color: 'var(--gold)', fontStyle: 'normal' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes glowPulse {
          from { text-shadow: 0 0 15px rgba(0, 106, 255, 0.6), 0 0 30px rgba(0, 106, 255, 0.3); }
          to { text-shadow: 0 0 25px rgba(0, 106, 255, 0.9), 0 0 50px rgba(0, 106, 255, 0.5), 0 0 70px rgba(0, 106, 255, 0.3); }
        }
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @media (max-width: 900px) { 
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-socials { 
            position: relative !important;
            flex-direction: row !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            margin-top: 3rem;
            width: 100%;
            justify-content: center;
          }
          .hero-socials div { display: none; }
        }
      `}</style>
    </section>
  )
}
