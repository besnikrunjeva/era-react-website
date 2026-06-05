import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, useTexture } from '@react-three/drei'
import { useRef, Suspense, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion, useInView } from 'framer-motion'
import { Cuboid } from 'lucide-react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import { useNormalizedScene } from '@/lib/useNormalizedScene'
import { LightingRig } from '@/components/ui/lighting-rig'

const BASE = import.meta.env.BASE_URL

const FEATURED = [
  {
    id: 'gota',
    slug: '/products/gota',
    al: 'Gota Letre',
    en: 'Paper Cups',
    variantLabel: '3.5oz · 7oz · 12oz',
    active: true,
    models: [
      { glb: `${BASE}models/gota-3.5oz.glb`, texture: `${BASE}textures/gota-3.5oz.png` },
      { glb: `${BASE}models/gota-7oz.glb`,   texture: `${BASE}textures/gota-7oz.png` },
      { glb: `${BASE}models/gota-12oz.glb`,  texture: `${BASE}textures/gota-12oz.png` },
    ],
  },
  {
    id: 'kupa-supe',
    slug: '/products/kupa-supe',
    al: 'Kupa Supe',
    en: 'Soup Cups',
    variantLabel: 'Standarde',
    active: true,
    models: [
      { glb: `${BASE}models/kupa-supe.glb`, texture: `${BASE}textures/kupa-supe.png` },
    ],
  },
  {
    id: 'akullore',
    slug: '/products/akullore',
    al: 'Kupa Akullore',
    en: 'Ice Cream Cups',
    variantLabel: 'S · M',
    active: true,
    models: [
      { glb: `${BASE}models/akullore-m.glb`, texture: `${BASE}textures/akullore-m.png` },
      { glb: `${BASE}models/akullore-s.glb`, texture: `${BASE}textures/akullore-s.png` },
    ],
  },
  {
    id: 'mbajtese',
    slug: '/products/mbajtese',
    al: 'Mbajtëse Lugësh',
    en: 'Spoon Holders',
    variantLabel: 'Standard',
    active: true,
    rotationOffset: [Math.PI / 2, 0, 0],
    spinAxis: 'z',
    models: [
      { glb: `${BASE}models/mbajtese.glb`, texture: `${BASE}textures/mbajtese.png` },
    ],
  },
  {
    id: 'leter-tavoline',
    slug: '/products/leter-tavoline',
    al: 'Letër Tavoline',
    en: 'Table Paper',
    variantLabel: 'Roll',
    active: true,
    rotationOffset: [Math.PI / 2, 0, 0],
    boomerang: true,
    models: [
      { glb: `${BASE}models/leter-tavoline.glb`, texture: `${BASE}textures/leter-tavoline.png` },
    ],
  },
]

useGLTF.preload(`${BASE}models/gota-3.5oz.glb`)
useGLTF.preload(`${BASE}models/gota-7oz.glb`)
useGLTF.preload(`${BASE}models/gota-12oz.glb`)
useGLTF.preload(`${BASE}models/kupa-supe.glb`)
useGLTF.preload(`${BASE}models/akullore-m.glb`)
useGLTF.preload(`${BASE}models/akullore-s.glb`)
useGLTF.preload(`${BASE}models/mbajtese.glb`)
useGLTF.preload(`${BASE}models/leter-tavoline.glb`)

useTexture.preload(`${BASE}textures/gota-3.5oz.png`)
useTexture.preload(`${BASE}textures/gota-7oz.png`)
useTexture.preload(`${BASE}textures/gota-12oz.png`)
useTexture.preload(`${BASE}textures/kupa-supe.png`)
useTexture.preload(`${BASE}textures/akullore-m.png`)
useTexture.preload(`${BASE}textures/akullore-s.png`)
useTexture.preload(`${BASE}textures/mbajtese.png`)
useTexture.preload(`${BASE}textures/leter-tavoline.png`)

const DESIGN_MAT = /dizajn|^package$/i

// Applies texture only to printable surfaces (dizajn* or Package material)
function TextureApplier({ pivot, texturePath }) {
  const texture = useTexture(texturePath)

  useEffect(() => {
    texture.flipY = false
    texture.colorSpace = THREE.SRGBColorSpace
    texture.needsUpdate = true

    pivot.traverse(child => {
      if (!child.isMesh) return
      if (Array.isArray(child.material)) {
        child.material = child.material.map(m => {
          if (!m || !DESIGN_MAT.test(m.name)) return m
          const c = m.clone()
          c.map = texture
          c.needsUpdate = true
          return c
        })
      } else {
        if (!child.material || !DESIGN_MAT.test(child.material.name)) return
        child.material = child.material.clone()
        child.material.map = texture
        child.material.needsUpdate = true
      }
    })
  }, [pivot, texture])

  return null
}

function SpinningModel({ glb, texture: texturePath, rotationOffset, spinAxis = 'y', boomerang = false }) {
  const pivot = useNormalizedScene(glb)
  const ref   = useRef()

  useFrame(({ clock }) => {
    if (boomerang) {
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.14
    } else {
      ref.current.rotation[spinAxis] += 0.004
    }
  })

  return (
    <group rotation={rotationOffset ?? [0, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.3}>
        <group ref={ref}>
          <primitive object={pivot} />
          {texturePath && (
            <Suspense fallback={null}>
              <TextureApplier pivot={pivot} texturePath={texturePath} />
            </Suspense>
          )}
        </group>
      </Float>
    </group>
  )
}

function ModelCanvas({ models, rotationOffset, spinAxis, boomerang }) {
  const [idx, setIdx]         = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (models.length <= 1) return
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % models.length)
        setVisible(true)
      }, 250)
    }, 3000)
    return () => clearInterval(id)
  }, [models.length])

  const current = models[idx]

  return (
    <div
      className="h-40 w-full overflow-hidden rounded-xl bg-[#0a1208]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 250ms ease' }}
    >
      <Suspense fallback={
        <div className="h-full w-full flex items-center justify-center">
          <div className="size-6 rounded-full border-2 border-[#4ca706]/30 border-t-[#4ca706] animate-spin" />
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 46 }}
          gl={{ antialias: true }}
          dpr={[1, 1.5]}
        >
          <color attach="background" args={['#0a1208']} />
          <LightingRig />
          <Suspense fallback={null}>
            <SpinningModel
              key={current.glb}
              glb={current.glb}
              texture={current.texture}
              rotationOffset={rotationOffset}
              spinAxis={spinAxis}
              boomerang={boomerang}
            />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  )
}

const UNITS_PER_YEAR = 3_900_000
const MS_PER_YEAR    = 365.25 * 24 * 60 * 60 * 1000
const RATE_PER_MS    = UNITS_PER_YEAR / MS_PER_YEAR
function getTotal() {
  const start = new Date(new Date().getFullYear(), 0, 1).getTime()
  return (Date.now() - start) * RATE_PER_MS
}

function LiveCounter({ lang }) {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: false, margin: '-40px' })
  const raw      = useMotionValue(getTotal())
  const spring   = useSpring(raw, { stiffness: 80, damping: 20, restDelta: 0.01 })
  const display  = useTransform(spring, v => Math.floor(v).toLocaleString('de-DE'))
  const [progress, setProgress] = useState(() => getTotal() % 1)

  useEffect(() => {
    if (!inView) return
    const id = setInterval(() => {
      const total = getTotal()
      raw.set(total)
      setProgress(total % 1)
    }, 80)
    return () => clearInterval(id)
  }, [inView, raw])

  return (
    <div ref={ref} className="flex flex-col gap-4 rounded-2xl border border-[#4ca706]/20 bg-[#4ca706]/[0.04] p-5">
      {/* Live pill */}
      <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-3 py-1">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ca706] opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-[#4ca706]" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4ca706]">
          {lang === 'al' ? 'Prodhim aktiv' : 'Live production'}
        </span>
      </div>

      {/* Counter */}
      <div>
        <motion.span
          className="block font-extrabold tabular-nums leading-none text-[#4ca706]"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
        >
          {display}
        </motion.span>
        <p className="mt-1.5 text-xs text-white/40">
          {lang === 'al'
            ? `njësi të prodhuara · ${new Date().getFullYear()}`
            : `units produced · ${new Date().getFullYear()}`}
        </p>
      </div>

      {/* Progress bar */}
      <div>
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.07]">
          <div
            className="h-full rounded-full bg-[#4ca706]"
            style={{ width: `${progress * 100}%`, transition: 'width 80ms linear' }}
          />
        </div>
        <p className="mt-2 text-[11px] text-white/30">
          ~1 {lang === 'al' ? 'njësi çdo 8 sekonda' : 'unit every 8 seconds'}
        </p>
      </div>
    </div>
  )
}

function TiltCard({ product, lang, i }) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-1, 1], [7, -7]), { stiffness: 400, damping: 28 })
  const rotateY = useSpring(useTransform(x, [-1, 1], [-7, 7]), { stiffness: 400, damping: 28 })

  const handleMouseMove = (e) => {
    if (prefersReduced) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2))
    y.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={prefersReduced ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col gap-3 rounded-2xl border border-[#4ca706]/25 bg-[#111] p-4 transition-colors duration-300 hover:border-[#4ca706]/60"
    >
      <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full border border-[#4ca706]/30 bg-[#4ca706]/15 px-2.5 py-1 text-[10px] font-bold text-[#4ca706]">
        <Cuboid className="size-3" />
        3D
      </span>

      <ModelCanvas
        models={product.models}
        rotationOffset={product.rotationOffset}
        spinAxis={product.spinAxis}
        boomerang={product.boomerang}
      />

      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-sm font-bold text-white leading-snug">
          {lang === 'al' ? product.al : product.en}
        </h3>
        <p className="text-xs text-white/35">{product.variantLabel}</p>
      </div>

      <div className="flex gap-2 mt-1">
        {product.active ? (
          <>
            <Link
              to={product.slug}
              className="flex-1 rounded-lg border border-white/[0.08] py-2 text-center text-[11px] font-semibold text-white/50 transition-colors hover:border-white/20 hover:text-white/80"
            >
              {lang === 'al' ? 'Shiko detajet' : 'View details'}
            </Link>
            <Link
              to={product.slug}
              className="flex-1 rounded-lg bg-[#4ca706]/20 py-2 text-center text-[11px] font-semibold text-[#4ca706] transition-colors hover:bg-[#4ca706]/30"
            >
              {lang === 'al' ? 'Personalizo 3D' : 'Personalise 3D'}
            </Link>
          </>
        ) : (
          <>
            <span
              title={lang === 'al' ? 'Së shpejti' : 'Coming soon'}
              aria-disabled="true"
              className="flex-1 cursor-not-allowed rounded-lg border border-white/[0.06] py-2 text-center text-[11px] font-semibold text-white/20"
            >
              {lang === 'al' ? 'Shiko detajet' : 'View details'}
            </span>
            <span
              title={lang === 'al' ? 'Së shpejti' : 'Coming soon'}
              aria-disabled="true"
              className="flex-1 cursor-not-allowed rounded-lg bg-[#4ca706]/20 py-2 text-center text-[11px] font-semibold text-[#4ca706]/40"
            >
              {lang === 'al' ? 'Personalizo 3D' : 'Personalise 3D'}
            </span>
          </>
        )}
      </div>
    </motion.div>
  )
}

export function Featured3DStrip({ lang = 'al' }) {
  return (
    <section className="bg-[#0f1010] py-20 px-4">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_260px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4ca706]">
              ✦ {lang === 'al' ? 'Editor 3D' : '3D Editor'}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {lang === 'al' ? (
                <>Shiko logon tënde<br /><span className="text-[#4ca706]">para se të porosisësh</span></>
              ) : (
                <>See your logo on the product<br /><span className="text-[#4ca706]">before you order</span></>
              )}
            </h2>

            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-lg">
              {lang === 'al'
                ? 'Personalizo ambalazhin me logon tënde drejtpërdrejt në browser — gota letre, kupa dhe mbajtëse, në 3D, falas.'
                : 'Personalise your packaging with your logo directly in the browser — paper cups, bowls and holders, in 3D, for free.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <LiveCounter lang={lang} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURED.map((product, i) => (
            <TiltCard key={product.id} product={product} lang={lang} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
