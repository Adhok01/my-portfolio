'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function Background3D() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    let THREE, renderer, scene, camera, points, ico1, ico2
    let targetX = 0, targetY = 0, t = 0
    let animId

    const init = async () => {
      THREE = (await import('three')).default || await import('three')
      const canvas = canvasRef.current
      if (!canvas) return

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(window.innerWidth, window.innerHeight)

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 5

      // Particles
      const count = 2500
      const geo = new THREE.BufferGeometry()
      const pos = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 22
        pos[i * 3 + 1] = (Math.random() - 0.5) * 22
        pos[i * 3 + 2] = (Math.random() - 0.5) * 15
        const r = Math.random()
        if (r > 0.7) { colors[i*3]=0.78; colors[i*3+1]=0.66; colors[i*3+2]=0.3 }
        else if (r > 0.4) { colors[i*3]=0; colors[i*3+1]=0.83; colors[i*3+2]=1 }
        else { colors[i*3]=0.2; colors[i*3+1]=0.25; colors[i*3+2]=0.35 }
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      const mat = new THREE.PointsMaterial({ size: 0.022, vertexColors: true, transparent: true, opacity: 0.55 })
      points = new THREE.Points(geo, mat)
      scene.add(points)

      // Wireframe icosahedra
      const icoGeo = new THREE.IcosahedronGeometry(1.8, 1)
      ico1 = new THREE.Mesh(icoGeo, new THREE.MeshBasicMaterial({ color: 0xc9a84c, wireframe: true, transparent: true, opacity: 0.04 }))
      scene.add(ico1)

      const ico2Geo = new THREE.IcosahedronGeometry(3.2, 1)
      ico2 = new THREE.Mesh(ico2Geo, new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.025 }))
      scene.add(ico2)

      const onMouse = (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.5
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.5
      }
      window.addEventListener('mousemove', onMouse)

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize)

      const animate = () => {
        animId = requestAnimationFrame(animate)
        t += 0.003
        points.rotation.y += 0.0003
        points.rotation.x += 0.0001
        ico1.rotation.y = t * 0.4
        ico1.rotation.x = t * 0.2
        ico2.rotation.y = -t * 0.2
        ico2.rotation.z = t * 0.1
        camera.position.x += (targetX - camera.position.x) * 0.05
        camera.position.y += (-targetY - camera.position.y) * 0.05
        camera.lookAt(scene.position)
        renderer.render(scene, camera)
      }
      animate()
    }

    init()
    return () => {
      if (animId) cancelAnimationFrame(animId)
      if (renderer) renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
        opacity: theme === 'light' ? 0.3 : 1,
        filter: theme === 'light' ? 'invert(1)' : 'none',
        transition: 'opacity 0.8s, filter 0.8s'
      }}
    />
  )
}
