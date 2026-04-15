'use client'
import { useState, useEffect } from 'react'
import Cursor from '@/components/Cursor'
import Loader from '@/components/Loader'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Background3D from '@/components/Background3D'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Sync with Loader.jsx (8s loading + 200ms delay + 2s welcome = 10.2s total)
    const t = setTimeout(() => setLoaded(true), 10200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Cursor />
      <ScrollProgress />
      {!loaded && <Loader />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <Background3D />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
