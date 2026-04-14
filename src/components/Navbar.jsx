'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 160) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          padding: '1.3rem 3rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s',
          background: scrolled ? 'rgba(2,4,8,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.3rem', fontWeight: 600,
            letterSpacing: '0.15em', color: 'var(--gold)',
            textDecoration: 'none',
          }}
        >
          A·N
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0 }} className="hidden-mobile">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover-underline"
                style={{
                  fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: active === l.href.slice(1) ? 'var(--gold)' : 'var(--muted)',
                  transition: 'color 0.3s',
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href={portfolioData.personal.resume}
            className="btn-primary"
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.72rem' }}
          >
            <span>Resume ↓</span>
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{
              background: 'none', border: 'none', display: 'flex',
              flexDirection: 'column', gap: 5, padding: 4,
              zIndex: 600,
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <motion.span
                key={i}
                animate={mobileOpen ? {
                  rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                  y: i === 0 ? 7 : i === 2 ? -7 : 0,
                  opacity: i === 1 ? 0 : 1,
                } : {}}
                style={{ width: 22, height: 1.5, background: 'var(--text)', display: 'block', borderRadius: 2 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 450,
              background: 'rgba(2,4,8,0.98)',
              backdropFilter: 'blur(30px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem', fontWeight: 600,
                  color: 'var(--text)', textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
