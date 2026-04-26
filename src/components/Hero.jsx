'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import Counter from '@/components/Counter'
import Butterfly from '@/components/Butterfly'

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
        padding: '6rem 3rem 0 8rem',
        position: 'relative', zIndex: 1, overflow: 'hidden',
        backgroundColor: '#020408',
        backgroundImage: 'url("/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        filter: 'brightness(0.7)',
      }}
    >
      {/* Heavy dark overlay for constant high contrast */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(2, 4, 8, 0.95) 0%, rgba(2, 4, 8, 0.6) 40%, transparent 100%)',
        zIndex: 1
      }} />
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Radial glow removed for sharpness */}
      <Butterfly />

      <div style={{
        maxWidth: 1300, width: '100%',
        display: 'grid', gridTemplateColumns: '1fr',
        gap: '4rem', alignItems: 'center',
      }} className="hero-grid">

        {/* Left */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div variants={itemVariants} style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            marginBottom: '2rem',
          }}>
            <div style={{ width: 40, height: 1, background: 'var(--gold)' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem', letterSpacing: '0.4em',
              color: '#ffffff', textTransform: 'uppercase',
              fontWeight: 700,
            }}>Portfolio · <Counter value="2026" /></span>
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
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-0.02em', marginBottom: '0.5rem',
            color: '#0066FF',
            textTransform: 'uppercase',
            textShadow: '0 0 10px rgba(0, 102, 255, 0.8), 0 0 20px rgba(0, 102, 255, 0.4), 0 0 40px rgba(0, 102, 255, 0.2)',
            animation: 'none',
          }}>
            Hi, I'm
            <br />
            <span style={{ fontWeight: 800, textShadow: '0 0 15px rgba(0, 102, 255, 1), 0 0 30px rgba(0, 102, 255, 0.6)' }}>Adhokshaja</span>
          </motion.h1>

          <motion.div variants={itemVariants} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.5rem', color: '#ffffff',
            letterSpacing: '0.15em', margin: '1.5rem 0',
            minHeight: '3rem',
            display: 'flex', alignItems: 'center',
            overflow: 'hidden',
            fontWeight: 700
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
            fontSize: '1.25rem', color: '#ffffff',
            lineHeight: 1.6, maxWidth: 650, marginBottom: '3rem',
            fontWeight: 500,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}>
            {personal.tagline} Sitting at the intersection of <span style={{ color: 'var(--gold2)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'rgba(0, 212, 255, 0.3)' }}>AI, analytics, and business storytelling.</span>
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
                  fontSize: '2.6rem', fontWeight: 800,
                  color: '#ffffff', lineHeight: 1,
                  textShadow: '0 4px 12px rgba(0,0,0,0.4)',
                }}><Counter value={s.num} /></div>
                <div style={{ fontSize: '0.85rem', color: '#ffffff', marginTop: '0.4rem', lineHeight: 1.4, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{s.label}</div>
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
            left: '3rem',
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
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,1))',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
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
                color: '#ffffff',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
              }}
            >
              {typeof social.Icon === 'function' ? <social.Icon /> : <social.Icon size={24} strokeWidth={1.5} />}
            </motion.a>
          ))}

          <div style={{ 
            width: '1px', 
            height: '60px', 
            background: 'linear-gradient(to top, transparent, rgba(255,255,255,1))',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          }} />
        </motion.div>
      </div>

      <div style={{
        width: '100%', marginTop: '5rem',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '1.5rem 0', overflow: 'hidden',
        position: 'relative', zIndex: 2,
      }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
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
        </motion.div>
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
            left: auto !important;
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
