import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Cuboid } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useNormalizedScene } from '@/lib/useNormalizedScene'
import { LightingRig } from '@/components/ui/lighting-rig'

const BASE = import.meta.env.BASE_URL

const FEATURED = [
  {
    id: 'gota',
    slug: '/products/gota',
    glb: `${BASE}models/gota-7oz.glb`,
    al: 'Gota Letre',
    en: 'Paper Cups',
    variants: '3.5oz · 7oz · 12oz',
    active: true,
  },
  {
    id: 'kupa-pasta',
    slug: '/products/kupa-pasta',
    glb: `${BASE}models/kupa-pasta.glb`,
    al: 'Kupa Pasta & Supe',
    en: 'Pasta & Soup Cups',
    variants: 'S · M · L',
  },
  {
    id: 'akullore',
    slug: '/products/akullore',
    glb: `${BASE}models/akullore.glb`,
    al: 'Kupa Akullore',
    en: 'Ice Cream Cups',
    variants: 'H53 · H63',
  },
  {
    id: 'mbajtese',
    slug: '/products/mbajtese',
    glb: `${BASE}models/mbajtese.glb`,
    al: 'Mbajtëse Lugësh',
    en: 'Spoon Holders',
    variants: 'Standard',
    active: true,
    rotationOffset: [-Math.PI / 2, 0, 0],
  },
]

useGLTF.preload(`${BASE}models/gota-7oz.glb`)
useGLTF.preload(`${BASE}models/kupa-pasta.glb`)
useGLTF.preload(`${BASE}models/akullore.glb`)
useGLTF.preload(`${BASE}models/mbajtese.glb`)

function SpinningModel({ glb, rotationOffset }) {
  const pivot = useNormalizedScene(glb)
  const ref   = useRef()
  useFrame(() => { ref.current.rotation.y += 0.004 })
  return (
    <group rotation={rotationOffset ?? [0, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.3}>
        <group ref={ref}>
          <primitive object={pivot} />
        </group>
      </Float>
    </group>
  )
}

function ModelCanvas({ glb, rotationOffset }) {
  return (
    <div className="h-40 w-full overflow-hidden rounded-xl bg-[#0a1208]">
      <Suspense fallback={
        <div className="h-full w-full flex items-center justify-center">
          <div className="size-6 rounded-full border-2 border-[#4ca706]/30 border-t-[#4ca706] animate-spin" />
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 46 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <color attach="background" args={['#0a1208']} />
          <LightingRig />
          <Suspense fallback={null}>
            <SpinningModel glb={glb} rotationOffset={rotationOffset} />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  )
}

export function Featured3DStrip({ lang = 'al' }) {
  return (
    <section className="bg-[#0f1010] py-20 px-4">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
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

          <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-lg">
            {lang === 'al'
              ? 'Personalizo ambalazhin me logon tënde drejtpërdrejt në browser — gota letre, kupa dhe mbajtëse, në 3D, falas.'
              : 'Personalise your packaging with your logo directly in the browser — paper cups, bowls and holders, in 3D, for free.'}
          </p>
        </motion.div>

        {/* Cards grid — 4 mini canvases */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-3 rounded-2xl border border-[#4ca706]/25 bg-[#111] p-4 transition-all duration-300 hover:border-[#4ca706]/60"
            >
              {/* 3D Badge */}
              <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full border border-[#4ca706]/30 bg-[#4ca706]/15 px-2.5 py-1 text-[10px] font-bold text-[#4ca706]">
                <Cuboid className="size-3" />
                3D
              </span>

              <ModelCanvas glb={product.glb} rotationOffset={product.rotationOffset} />

              <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-sm font-bold text-white leading-snug">
                  {lang === 'al' ? product.al : product.en}
                </h3>
                <p className="text-xs text-white/35">{product.variants}</p>
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
          ))}
        </div>
      </div>
    </section>
  )
}
