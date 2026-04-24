'use client'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'

export default function Counter({ value, duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  
  // Extract number and suffix (e.g., "95%" -> 95, "%")
  const numValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.replace(/[0-9.]/g, '')
  const prefix = value.startsWith('+') ? '+' : ''
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 80,
    restDelta: 0.001
  })

  useEffect(() => {
    if (inView && !isNaN(numValue)) {
      motionValue.set(numValue)
    }
  }, [inView, motionValue, numValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(value.includes('.') ? 1 : 0) + suffix
      }
    })
  }, [springValue, value, prefix, suffix])

  return <span ref={ref}>{isNaN(numValue) ? value : '0'}</span>
}
