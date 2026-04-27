'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Butterfly() {
  const x = useMotionValue(50)
  const y = useMotionValue(50)
  const rotate = useSpring(0, { damping: 20, stiffness: 100 })
  
  const containerRef = useRef(null)

  useEffect(() => {
    let startTime = Date.now()
    let frameId

    const animate = () => {
      const time = (Date.now() - startTime) / 1000
      
      // Complex wandering path using multiple sine waves of different frequencies
      // This creates a non-repetitive "loopy" movement
      const nx = 50 + Math.sin(time * 0.5) * 20 + Math.sin(time * 1.2) * 10 + Math.cos(time * 2.5) * 5
      const ny = 50 + Math.cos(time * 0.4) * 15 + Math.sin(time * 1.5) * 12 + Math.sin(time * 3.1) * 4
      
      // Calculate delta for rotation
      const dx = nx - x.get()
      const dy = ny - y.get()
      
      if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)
        rotate.set(angle + 90)
      }

      x.set(nx)
      y.set(ny)

      frameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(frameId)
  }, [x, y, rotate])

  const leftStr = useTransform(x, v => `${v}%`)
  const topStr = useTransform(y, v => `${v}%`)

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}>
      {/* Lagging Tail Particles for motion blur effect */}
      <TailParticle targetX={x} targetY={y} size={10} delay={0.03} opacity={0.8} />
      <TailParticle targetX={x} targetY={y} size={8} delay={0.06} opacity={0.6} />
      <TailParticle targetX={x} targetY={y} size={6} delay={0.09} opacity={0.4} />
      <TailParticle targetX={x} targetY={y} size={4} delay={0.12} opacity={0.3} />
      <TailParticle targetX={x} targetY={y} size={2} delay={0.15} opacity={0.2} />

      {/* The Butterfly */}
      <motion.div
        style={{
          position: 'absolute',
          fontSize: '2.5rem',
          left: leftStr,
          top: topStr,
          rotate,
          x: '-50%',
          y: '-50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 0 20px #00D4FF) drop-shadow(0 0 10px #ffffff)'
        }}
      >
        <motion.div
          animate={{ 
            scaleX: [1, 0.4, 1], // Real wing flapping effect
            scaleY: [1, 1.1, 1],
            y: [0, -5, 0] // Vertical "hop" during flapping
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.15, // High frequency flap
            ease: "easeInOut" 
          }}
        >
          🦋
        </motion.div>
      </motion.div>
    </div>
  )
}

function TailParticle({ targetX, targetY, size, delay, opacity }) {
  // Use springs with higher stiffness for a tighter trail
  const sx = useSpring(targetX, { damping: 25, stiffness: 80 })
  const sy = useSpring(targetY, { damping: 25, stiffness: 80 })

  // Force re-renders based on parent x/y
  useEffect(() => {
    const unsubscribeX = targetX.on('change', (v) => {
      setTimeout(() => sx.set(v), delay * 1000)
    })
    const unsubscribeY = targetY.on('change', (v) => {
      setTimeout(() => sy.set(v), delay * 1000)
    })
    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [targetX, targetY, sx, sy, delay])

  const left = useTransform(sx, v => `${v}%`)
  const top = useTransform(sy, v => `${v}%`)

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #00D4FF, #ffffff)',
        left,
        top,
        x: '-50%',
        y: '-50%',
        opacity: opacity,
        filter: 'blur(1px)',
        boxShadow: '0 0 15px #00D4FF, 0 0 5px #ffffff',
      }}
    />
  )
}
