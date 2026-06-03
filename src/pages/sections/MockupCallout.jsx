import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { useNormalizedScene } from '@/lib/useNormalizedScene'
import { LightingRig } from '@/components/ui/lighting-rig'

/* ─── model catalogue ─────────────────────────────────────── */
const BASE = import.meta.env.BASE_URL

const MODELS = [
  { id: 'gota',     url: `${BASE}models/gota.glb`,     al: 'Gota Letre',      en: 'Paper Cups'     },
  { id: 'akullore', url: `${BASE}models/akullore.glb`,  al: 'Kupa Akullore',   en: 'Ice Cream Cups'  },
  { id: 'mbajtese', url: `${BASE}models/mbajtese.glb`,  al: 'Mbajtëse Lugësh', en: 'Spoon Holders'   },
]

useGLTF.preload(`${BASE}models/gota.glb`)
useGLTF.preload(`${BASE}models/akullore.glb`)
useGLTF.preload(`${BASE}models/mbajtese.glb`)

/* ─── single spinning model ───────────────────────────────── */
function ActiveModel({ url }) {
  const pivot = useNormalizedScene(url)
  const ref   = useRef()
  useFrame(() => { ref.current.rotation.y += 0.005 })
  return (
    <group ref={ref}>
      <primitive object={pivot} />
    </group>
  )
}

function Scene({ activeUrl }) {
  return (
    <>
      <LightingRig />
      <Suspense fallback={null}>
        <ActiveModel key={activeUrl} url={activeUrl} />
      </Suspense>
    </>
  )
}

/* ─── section ─────────────────────────────────────────────── */
export function MockupCallout({ lang = 'al' }) {
  const [active, setActive] = useState('gota')
  const activeModel = MODELS.find(m => m.id === active)

  return (
    <section className="relative overflow-hidden bg-[#080c08] py-20 px-4">

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 -right-20 -translate-y-1/2 h-[560px] w-[560px] rounded-full opacity-[0.13] blur-[130px]"
          style={{ background: '#4ca706' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 w-fit rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4ca706]">
              <Sparkles className="size-3" />
              {lang === 'al' ? 'Vetëm tek ERA' : 'Only at ERA'}
            </span>

            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
              {lang === 'al' ? (
                <>Para se të porosisësh,<br /><span className="text-[#4ca706]">shih saktësisht</span><br />si do të duket ambalazha jote</>
              ) : (
                <>Before you order,<br /><span className="text-[#4ca706]">see exactly</span><br />how your packaging will look</>
              )}
            </h2>

            <p className="text-base text-white/45 leading-relaxed max-w-[420px]">
              {lang === 'al'
                ? 'Ngarko logon tënde dhe shih atë live në gotën 3D — tani, pa pritur. Ose aktivizo AR dhe vendose gotën e personalizuar direkt në tavolinën tënde, me madhësinë e vërtetë.'
                : 'Upload your logo and see it live on the 3D cup — instantly, no waiting. Or activate AR and place your custom cup right on your table, true to size.'}
            </p>

            <Link
              to="/products/gota"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#4ca706] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d8f05]"
            >
              <Sparkles className="size-4" />
              {lang === 'al' ? 'Provo konfiguratorin 3D' : 'Try the 3D configurator'}
            </Link>

            <p className="text-xs text-white/25">
              {lang === 'al' ? 'Pa detyrime · Përgjigje brenda 24 orësh' : 'No commitment · Reply within 24h'}
            </p>
          </motion.div>

          {/* Canvas + selector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex flex-col gap-3"
          >
            <div className="h-[340px] lg:h-[440px] w-full rounded-2xl overflow-hidden border border-[#4ca706]/10 bg-[#0a1208]">
              <Suspense fallback={
                <div className="h-full w-full flex items-center justify-center">
                  <div className="size-8 rounded-full border-2 border-[#4ca706]/30 border-t-[#4ca706] animate-spin" />
                </div>
              }>
                <Canvas
                  camera={{ position: [0, 0, 3.5], fov: 46 }}
                  gl={{ antialias: true, alpha: true }}
                  dpr={[1, 1.5]}
                >
                  <color attach="background" args={['#0a1208']} />
                  <Scene activeUrl={activeModel.url} />
                </Canvas>
              </Suspense>
            </div>

            {/* Selector */}
            <div className="flex rounded-xl border border-white/[0.06] bg-white/[0.03] p-1 gap-1">
              {MODELS.map(m => (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`flex-1 rounded-lg py-2.5 text-[11px] font-semibold transition-all duration-200 ${
                    active === m.id
                      ? 'bg-[#4ca706] text-white shadow-sm'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {lang === 'al' ? m.al : m.en}
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
