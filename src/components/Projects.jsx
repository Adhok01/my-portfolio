'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import Counter from '@/components/Counter'

function CategoryCard({ category, index, onClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(category.id)}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '2rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      whileHover={{ 
        y: -10, 
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderColor: category.color,
        boxShadow: `0 20px 40px -20px ${category.color}44`
      }}
      className="group"
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{category.icon}</div>
      <h3 style={{ 
        fontFamily: "'Syne', sans-serif", 
        fontSize: '1.5rem', 
        fontWeight: 700, 
        marginBottom: '0.75rem',
        color: 'var(--text)'
      }}>
        {category.title}
      </h3>
      <p style={{ 
        fontSize: '0.9rem', 
        color: 'var(--muted)', 
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>
        {category.desc}
      </p>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        fontSize: '0.75rem', 
        color: category.color,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        Explore Projects 
        <span style={{ transition: 'transform 0.3s' }} className="group-hover:translate-x-1">→</span>
      </div>

      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-20%',
        width: '150px',
        height: '150px',
        background: category.color,
        filter: 'blur(80px)',
        opacity: 0.05,
        pointerEvents: 'none'
      }} />
    </motion.div>
  )
}

function FeaturedProject({ project, onClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      onClick={() => onClick(project.slug)}
      style={{
        width: '100%',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        padding: '3rem',
        marginBottom: '5rem',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '4rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
    >
      <div>
        <div style={{ 
          fontFamily: "'JetBrains Mono', monospace", 
          fontSize: '0.7rem', 
          color: 'var(--gold)', 
          letterSpacing: '0.3em', 
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          Featured Project
        </div>
        <h2 style={{ 
          fontFamily: "'Cormorant Garamond', serif", 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          fontWeight: 300, 
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          {project.title}
        </h2>
        <p style={{ 
          color: 'var(--muted)', 
          fontSize: '1.1rem', 
          lineHeight: 1.8, 
          marginBottom: '2rem',
          maxWidth: '90%'
        }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.5rem' }}>
          {project.tools.map(tool => (
            <span key={tool} className="tag-pill">{tool}</span>
          ))}
        </div>
        <div className="btn-primary">
          <span>View Impact Report</span>
        </div>
      </div>
      
      <div style={{ 
        position: 'relative',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '16px',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontFamily: "'Syne', sans-serif", 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: 'var(--text)',
            marginBottom: '0.5rem'
          }}>
            <Counter value={project.impact.split(' ')[0]} />
          </div>
          <div style={{ 
            fontFamily: "'JetBrains Mono', monospace", 
            fontSize: '0.75rem', 
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {project.impact.split(' ').slice(1).join(' ')}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const router = useRouter()
  const featuredProject = portfolioData.projects.find(p => p.featured) || portfolioData.projects[0]

  const handleCategoryClick = (id) => {
    router.push(`/projects/${id}`)
  }

  const handleProjectClick = (slug) => {
    router.push(`/project?id=${slug}`)
  }

  return (
    <section id="projects" style={{ padding: '10rem 3rem', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ marginBottom: '1rem' }}>05 // Expertise</div>
            <h2 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              fontWeight: 300,
              lineHeight: 1
            }}>
              Project Domains
            </h2>
          </motion.div>
        </div>

        <FeaturedProject project={featuredProject} onClick={handleProjectClick} />

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '2rem' 
        }}>
          {portfolioData.projectCategories.map((cat, i) => (
            <CategoryCard 
              key={cat.id} 
              category={cat} 
              index={i} 
              onClick={handleCategoryClick} 
            />
          ))}
        </div>

      </div>
    </section>
  )
}
