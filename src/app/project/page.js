'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import Link from 'next/link'
import { Suspense } from 'react'
import Cursor from '@/components/Cursor'
import Background3D from '@/components/Background3D'

function ProjectDetailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get('id')
  
  const project = portfolioData.projects.find(p => p.slug === id)

  if (!project) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#020408', color: '#fff' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', marginBottom: '1rem' }}>Project Not Found</h1>
        <button 
          onClick={() => router.push('/')}
          style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1rem 2rem', cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace" }}
        >
          Return Home
        </button>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#020408', color: '#fff' }}>
      <Cursor />
      <Background3D />
      
      <div style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              marginBottom: '4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            <span>←</span> Back to Projects
          </motion.button>

          <header style={{ marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ 
                fontFamily: "'JetBrains Mono', monospace", 
                fontSize: '0.7rem', 
                color: 'var(--gold)', 
                letterSpacing: '0.3em', 
                textTransform: 'uppercase',
                marginBottom: '1rem',
                opacity: 0.6
              }}>
                {project.category}
              </div>
              <h1 style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                fontWeight: 300, 
                lineHeight: 1.1,
                marginBottom: '2rem'
              }}>
                {project.title}
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '1rem 2rem',
                    borderRadius: '0', // Keep it clean
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  <span>Live Demo ↗</span>
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    padding: '1rem 2rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                  onMouseOut={(e) => e.target.style.background = 'transparent'}
                >
                  GitHub Repository
                </a>
              )}
            </motion.div>
          </header>

          <main>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 style={{ 
                  fontFamily: "'JetBrains Mono', monospace", 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em', 
                  color: 'var(--gold)',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '0.5rem'
                }}>
                  Overview
                </h2>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.8, 
                  color: 'var(--muted)',
                  fontWeight: 300
                }}>
                  {project.long}
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 style={{ 
                  fontFamily: "'JetBrains Mono', monospace", 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em', 
                  color: 'var(--gold)',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '0.5rem'
                }}>
                  Technology Stack
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {project.tools.map(tool => (
                    <span key={tool} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff'
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.section>
            </div>
          </main>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --gold: #0066FF;
          --muted: rgba(255,255,255,0.6);
        }
      `}</style>
    </div>
  )
}

export default function ProjectPage() {
  return (
    <Suspense fallback={<div style={{ height: '100vh', background: '#020408' }} />}>
      <ProjectDetailContent />
    </Suspense>
  )
}
