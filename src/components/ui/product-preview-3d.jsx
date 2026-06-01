import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows, Center } from '@react-three/drei'
import * as THREE from 'three'

const TEX_W = 2048
const TEX_H = 512

function Model({ modelPath, scale = 2.5, logoUrl }) {
  const { scene } = useGLTF(modelPath)
  const texRef          = useRef(null)
  const designMatsRef   = useRef([])

  useEffect(() => {
    // Build canvas texture once
    const canvas = document.createElement('canvas')
    canvas.width  = TEX_W
    canvas.height = TEX_H
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, TEX_W, TEX_H)

    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace  = THREE.SRGBColorSpace
    tex.needsUpdate = true
    texRef.current  = { tex, ctx }
    designMatsRef.current = []

    scene.traverse(child => {
      if (!child.isMesh) return
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach((mat, i) => {
        const isDesign = mat.name.includes('DESIGN')
        const newMat = new THREE.MeshStandardMaterial({
          color:     '#ffffff',
          map:       isDesign ? tex : null,
          roughness: 0.3,
          metalness: 0.05,
        })
        if (Array.isArray(child.material)) child.material[i] = newMat
        else child.material = newMat
        if (isDesign) designMatsRef.current.push(newMat)
      })
    })
  }, [scene])

  useEffect(() => {
    if (!texRef.current) return
    const { tex, ctx } = texRef.current

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, TEX_W, TEX_H)

    const update = () => {
      tex.needsUpdate = true
      designMatsRef.current.forEach(m => { m.map = tex; m.needsUpdate = true })
    }

    if (!logoUrl) { update(); return }

    const img = new Image()
    img.onload = () => {
      const halfW = TEX_W / 2
      const maxW  = halfW * 0.72
      const maxH  = TEX_H * 0.72
      const ratio = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight)
      const w  = img.naturalWidth  * ratio
      const h  = img.naturalHeight * ratio
      const y  = (TEX_H - h) / 2
      const x1 = (halfW - w) / 2
      const x2 = halfW + (halfW - w) / 2
      ctx.drawImage(img, x1, y, w, h)
      ctx.drawImage(img, x2, y, w, h)
      update()
    }
    img.src = logoUrl
  }, [logoUrl])

  return <primitive object={scene} scale={scale} dispose={null} />
}

function LoadingFallback() {
  return (
    <mesh>
      <cylinderGeometry args={[0.5, 0.4, 1.2, 32]} />
      <meshStandardMaterial color="#e5e7eb" />
    </mesh>
  )
}

export function ProductPreview3D({
  modelPath,
  modelScale  = 2.5,
  autoRotate  = true,
  logoUrl     = null,
  className   = '',
  background  = 'transparent',
}) {
  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        style={{ background }}
        gl={{ antialias: true, alpha: background === 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-4, 6, 3]} intensity={0.6} color="#fff8f0" castShadow />
        <directionalLight position={[4, 2, -4]} intensity={0.15} color="#c8d8ff" />
        <directionalLight position={[0, -3, -5]} intensity={0.2} color="#ffffff" />
        <Environment preset="studio" environmentIntensity={0.3} />

        <Suspense fallback={<LoadingFallback />}>
          <Center>
            <Model modelPath={modelPath} scale={modelScale} logoUrl={logoUrl} />
          </Center>
        </Suspense>

        <ContactShadows position={[0, -1.8, 0]} opacity={0.25} scale={6} blur={2} far={3} />

        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/gota-7oz.glb')
useGLTF.preload('/models/kupa-pasta.glb')
useGLTF.preload('/models/akullore.glb')
useGLTF.preload('/models/leter-tavoline.glb')
useGLTF.preload('/models/mbajtese-luge.glb')
