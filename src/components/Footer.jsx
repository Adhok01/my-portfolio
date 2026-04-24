'use client'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '3rem',
      position: 'relative', zIndex: 1,
      background: 'rgba(5,12,20,0.8)',
    }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>

        {/* Top row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '2rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          marginBottom: '2rem',
        }}>
          <a href="#" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.3rem', fontWeight: 600,
            letterSpacing: '0.15em', color: 'var(--gold)',
            textDecoration: 'none',
          }}>
            A·N
          </a>

          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', flexWrap: 'wrap' }}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none', color: 'var(--muted)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '0.5rem 1.1rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = 'var(--muted)' }}
          >
            LinkedIn →
          </a>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            © 2026 <span style={{ color: '#0066FF', textTransform: 'uppercase', textShadow: '0 0 10px rgba(0, 106, 255, 0.4)' }}>{portfolioData.personal.name}</span>
          </p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
            Built with Next.js · Framer Motion · GSAP · Three.js
          </p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            Bengaluru, India
          </p>
        </div>
      </div>
    </footer>
  )
}
