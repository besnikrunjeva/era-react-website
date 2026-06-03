import { useState, useRef, useCallback, Suspense, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, ForkKnifeCrossed, ShoppingBag, Building2, Upload, Download, X, Check, RotateCcw, ScanEye, Camera } from 'lucide-react'
import '@google/model-viewer'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, useGLTF, useEnvironment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { CanvasTexture, SRGBColorSpace } from 'three'
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { useNormalizedScene } from '@/lib/useNormalizedScene'

const BASE = import.meta.env.BASE_URL
const MODEL_URL = `${BASE}models/mbajtese.glb`

useGLTF.preload(MODEL_URL)

// UV map is 232×1056 — tall strip. 2x upscale is enough for sharp logos.
// Adjust FRONT_Y / BACK_Y if logos land in the wrong spot.
const CANVAS  = { W: 464, H: 2112 }
const FRONT_Y = 0.18   // centre of front face in UV space (0–1)
const BACK_Y  = 0.72   // centre of back outer face in UV space (0–1)

const LOGO_SIZE_FACTOR = { small: 0.55, medium: 1.0, large: 1.45 }

const USE_CASES = [
  { label: 'Kafene',     Icon: Coffee           },
  { label: 'Restorante', Icon: ForkKnifeCrossed },
  { label: 'Fast-food',  Icon: ShoppingBag      },
  { label: 'Hotele',     Icon: Building2        },
]

const isCutlery   = name => name?.toLowerCase().includes('cutlery')
const isPrintable = name => name?.toLowerCase().includes('package') || name?.toLowerCase().includes('dizajn')

function GradientBackground() {
  const texture = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 512; c.height = 512
    const ctx = c.getContext('2d')
    const grad = ctx.createRadialGradient(256, 307, 0, 256, 307, 330)
    grad.addColorStop(0,    '#edfae0')
    grad.addColorStop(0.65, '#f8f8f8')
    grad.addColorStop(1,    '#f8f8f8')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 512, 512)
    return new CanvasTexture(c)
  }, [])
  return <primitive object={texture} attach="background" />
}

function IBLSetup() {
  const texture = useEnvironment({ preset: 'studio' })
  const { scene } = useThree()
  useEffect(() => {
    scene.environment = texture
    return () => { scene.environment = null }
  }, [scene, texture])
  return null
}

function MbajtesesModel({ cupTexture }) {
  const pivot = useNormalizedScene(MODEL_URL)

  useEffect(() => {
    pivot.traverse(child => {
      if (!child.isMesh) return
      child.geometry = toCreasedNormals(child.geometry, Math.PI / 6)
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach(m => {
        if (!m) return
        if (isCutlery(m.name)) {
          // keep original cutlery colour
          m.needsUpdate = true
          return
        }
        m.color.set('#ffffff')
        m.roughness   = 0.75
        m.metalness   = 0
        m.map         = (isPrintable(m.name) && cupTexture) ? cupTexture : null
        m.needsUpdate = true
      })
    })
  }, [pivot, cupTexture])

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.05} floatIntensity={0.2}>
        <primitive object={pivot} />
      </Float>
    </group>
  )
}

function ModelCanvas({ orbitRef, cupTexture }) {
  return (
    <Canvas
      camera={{ position: [0, 2.2, 3.2], fov: 44 }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
    >
      <GradientBackground />
      <Suspense fallback={null}>
        <IBLSetup />
      </Suspense>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 8, 5]}   intensity={2.2} color="#ffffff" />
      <directionalLight position={[-4, 4, -2]} intensity={0.7} color="#ffffff" />
      <directionalLight position={[0, -2, 4]}  intensity={0.25} color="#ffffff" />
      <Suspense fallback={null}>
        <MbajtesesModel cupTexture={cupTexture} />
      </Suspense>
      <OrbitControls
        ref={orbitRef}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 3.2}
      />
    </Canvas>
  )
}

function UploadZone({ onUpload, uploadedFile, onRemove }) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFile = useCallback(file => { if (file) onUpload(file) }, [onUpload])

  if (uploadedFile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 rounded-xl border border-[#c8ddb8] bg-[#f0f9e8] px-3 py-2.5"
      >
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#4ca706]">
          <Check className="size-3.5 text-white" strokeWidth={2.5} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-bold text-gray-800">{uploadedFile.name}</p>
          <p className="text-[9px] text-[#7ec050]">Ngarkuar me sukses</p>
        </div>
        <button onClick={onRemove} className="shrink-0 text-gray-300 transition-colors hover:text-red-400">
          <X className="size-4" />
        </button>
      </motion.div>
    )
  }

  return (
    <div
      onDragOver={e => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]) }}
      onClick={() => inputRef.current?.click()}
      className="flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-4 py-8 transition-all duration-200"
      style={{ borderColor: dragging ? '#4ca706' : '#c8ddb8', background: dragging ? '#f0f9e8' : '#f8fff4' }}
    >
      <input ref={inputRef} type="file" accept=".svg,.png,.pdf,.ai,.jpg,.jpeg" className="hidden" onChange={e => handleFile(e.target.files[0])} />
      <div className="flex size-12 items-center justify-center rounded-full bg-[#f0f9e8]">
        <Upload className="size-5 text-[#4ca706]" />
      </div>
      <div className="text-center">
        <p className="text-[13px] font-bold text-gray-700">Ngarko logon tënde</p>
        <p className="mt-1 text-[10px] text-gray-400">SVG, PNG, PDF ose AI</p>
      </div>
      <div className="flex gap-1.5">
        {['SVG', 'PNG', 'PDF', 'AI'].map(f => (
          <span key={f} className="rounded-md px-2 py-0.5 text-[9px] font-bold bg-white border border-gray-200 text-gray-400">{f}</span>
        ))}
      </div>
    </div>
  )
}

function TemplateFlow({ fullDesignFile, onFullDesignUpload, onFullDesignRemove }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
        <div className="flex items-center gap-2.5 border-b border-gray-100 bg-gray-50 px-3 py-2.5">
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#c8ddb8] bg-[#f0f9e8] text-[8px] font-black text-[#4ca706]">1</div>
          <div>
            <div className="text-[10px] font-bold text-gray-500">Shkarko templatein</div>
            <div className="text-[9px] text-gray-400">232 × 1056 mm — sipërfaqja e printimit</div>
          </div>
        </div>
        <div className="p-3">
          <button
            onClick={() => alert('Templatet do të jenë të disponueshme së shpejti.')}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-[10px] font-bold text-gray-600 transition-all hover:border-[#4ca706]/40 hover:text-[#4ca706]"
          >
            <Download className="size-3.5" />
            Shkarko Template — Mbajtëse
          </button>
          <div className="mt-2 flex gap-1.5">
            {['AI', 'PDF', 'PSD'].map(f => (
              <span key={f} className="rounded px-1.5 py-0.5 text-[8px] font-bold bg-[#f5f5f5] text-gray-400">{f}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
        <div className="flex items-center gap-2.5 border-b border-gray-100 bg-gray-50 px-3 py-2.5">
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#c8ddb8] bg-[#f0f9e8] text-[8px] font-black text-[#4ca706]">2</div>
          <div>
            <div className="text-[10px] font-bold text-gray-500">Ngarko dizajnin e plotë</div>
            <div className="text-[9px] text-gray-400">Skedari vendoset direkt mbi mbajtësen 3D</div>
          </div>
        </div>
        <div className="p-3">
          <UploadZone
            onUpload={onFullDesignUpload}
            uploadedFile={fullDesignFile}
            onRemove={onFullDesignRemove}
            label="Ngarko dizajnin e përfunduar"
            subLabel="Do të shfaqet direkt në mbajtëse 3D"
            formats={['PDF', 'AI', 'PNG']}
          />
          <p className="mt-2 text-[9px] leading-relaxed text-gray-400">
            Templati ka <span className="font-semibold text-gray-500">bleed</span> dhe <span className="font-semibold text-gray-500">safe zone</span> të shënuara — dizajno brenda tyre para ngarkimit.
          </p>
        </div>
      </div>
    </div>
  )
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = e => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}

export function MbajtesesEditorSection({ lang = 'al' }) {
  // Warm up Railway backend on mount so AR is ready when user clicks
  useEffect(() => {
    fetch(`${import.meta.env.VITE_AR_API_URL ?? 'http://localhost:8000'}/health`).catch(() => {})
  }, [])

  const [uploadTab, setUploadTab]       = useState('logo')
  const [logoFile, setLogoFile]         = useState(null)
  const [logoSize, setLogoSize]         = useState('medium')
  const [fullDesignFile, setFullDesignFile] = useState(null)
  const [cupTexture, setCupTexture]     = useState(null)
  const [showDragHint, setShowDragHint] = useState(true)
  const [arLoading, setArLoading]   = useState(false)
  const orbitRef       = useRef(null)
  const mvContainerRef = useRef(null)
  const mvRef          = useRef(null)
  const logoCanvasRef  = useRef(null)
  const isDesktop      = useIsDesktop()

  useEffect(() => {
    if (!mvContainerRef.current) return
    if (!mvRef.current) {
      const mv = document.createElement('model-viewer')
      mv.setAttribute('ar', '')
      mv.setAttribute('ar-modes', 'webxr quick-look')
      mv.setAttribute('ar-scale', 'fixed')
      mv.setAttribute('src', MODEL_URL)
      mv.setAttribute('ios-src', `${BASE}models/mbajtese.usdz`)
      mv.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;'
      mvContainerRef.current.appendChild(mv)
      mvRef.current = mv
    }
  }, [])

  const handleARClick = useCallback(async () => {
    const mv = mvRef.current
    if (!mv) { console.warn('[AR] model-viewer not ready'); return }

    setArLoading(true)
    try {
      if (logoCanvasRef.current) {
        const png = await new Promise((resolve, reject) => {
          logoCanvasRef.current.toBlob(b => b ? resolve(b) : reject(new Error('toBlob failed')), 'image/jpeg', 0.85)
        })
        const fd = new FormData()
        fd.append('canvas', png, 'canvas.jpg')
        fd.append('model', 'mbajtese')
        const res = await fetch(
          `${import.meta.env.VITE_AR_API_URL ?? 'http://localhost:8000'}/generate-ar`,
          { method: 'POST', body: fd },
        )
        if (!res.ok) throw new Error(`Backend ${res.status}`)
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        mv.setAttribute('ios-src', url)
        mv.setAttribute('src', url)
      }
      mv.activateAR()
    } catch (err) {
      console.error('[AR] generation failed, falling back:', err)
      mv.activateAR()
    } finally {
      setArLoading(false)
    }
  }, [])

  useEffect(() => {
    const file = uploadTab === 'logo' ? logoFile : fullDesignFile
    if (!file) { setCupTexture(null); logoCanvasRef.current = null; return }

    const objectUrl = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const { W, H } = CANVAS
      const c = document.createElement('canvas')
      c.width = W; c.height = H
      const ctx = c.getContext('2d')

      if (uploadTab === 'template') {
        // Full design — stretch across the entire UV map
        ctx.drawImage(img, 0, 0, W, H)
      } else {
        // Logo mode — white base, logo on front + back outer faces
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, W, H)
        const factor = LOGO_SIZE_FACTOR[logoSize]
        const s = Math.min(Math.round(W * 0.72 * factor), W - 20)
        const imgAR = img.naturalWidth / img.naturalHeight
        let drawW, drawH
        if (imgAR >= 1) { drawW = s; drawH = Math.round(s / imgAR) }
        else            { drawH = s; drawW = Math.round(s * imgAR) }
        const cx = W / 2
        ctx.drawImage(img, cx - drawW / 2, H * FRONT_Y - drawH / 2, drawW, drawH)
        ctx.drawImage(img, cx - drawW / 2, H * BACK_Y  - drawH / 2, drawW, drawH)
      }

      logoCanvasRef.current = c
      const tex = new CanvasTexture(c)
      tex.colorSpace = SRGBColorSpace
      tex.flipY = false
      setCupTexture(tex)
      URL.revokeObjectURL(objectUrl)
    }
    img.onerror = () => URL.revokeObjectURL(objectUrl)
    img.src = objectUrl
  }, [uploadTab, logoFile, logoSize, fullDesignFile])

  const viewerContent = (
    <>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-44 w-44 rounded-full opacity-60 blur-3xl" style={{ background: 'rgba(76,167,6,0.12)' }} />
      </div>
      <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-[#c8ddb8] bg-[#f0f9e8] px-2.5 py-1 text-[9px] font-bold text-[#4ca706]">
        <span className="size-1.5 animate-pulse rounded-full bg-[#4ca706]" />
        Live Preview
      </div>
      <div className="absolute inset-0">
        <Suspense fallback={
          <div className="flex h-full w-full items-center justify-center">
            <div className="size-8 animate-spin rounded-full border-2 border-[#4ca706]/20 border-t-[#4ca706]" />
          </div>
        }>
          <ModelCanvas orbitRef={orbitRef} cupTexture={cupTexture} />
        </Suspense>
      </div>
      <AnimatePresence>
        {showDragHint && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute bottom-14 left-1/2 z-20 -translate-x-1/2"
          >
            <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/90 px-3 py-1.5 text-[9px] font-bold text-gray-400 shadow-sm backdrop-blur-sm">
              <svg viewBox="0 0 16 16" className="size-3 fill-none stroke-current" strokeWidth="1.5">
                <path d="M8 2v3M6 4l2-2 2 2M8 14v-3M6 12l2 2 2-2M2 8h3M4 6l-2 2 2 2M14 8h-3M12 6l2 2-2 2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Rrotullohu me tërheqje
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={mvContainerRef} aria-hidden="true" />
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center">
        <button
          onClick={() => orbitRef.current?.reset()}
          title="Rinis rrotullimin"
          className="flex size-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-colors hover:text-[#4ca706]"
        >
          <RotateCcw className="size-3.5" />
        </button>
      </div>
    </>
  )

  const arButton = (
    <button
      onClick={handleARClick}
      disabled={arLoading}
      className="group relative flex w-full overflow-hidden rounded-full bg-gradient-to-r from-[#3d9005] via-[#4ca706] to-[#5db508] px-5 py-3.5 shadow-lg shadow-[#4ca706]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#4ca706]/50 active:scale-[0.97] disabled:opacity-80 disabled:cursor-not-allowed"
    >
      <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
      <div className="relative flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20">
            {arLoading
              ? <div className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              : <ScanEye className="size-5 text-white" />
            }
          </div>
          <div className="text-left">
            <div className="text-[13px] font-black leading-none text-white">
              {arLoading ? 'Duke përgatitur AR…' : 'Shiko mbajtësen tënde në AR'}
            </div>
            <div className="mt-0.5 text-[10px] text-white/70">Kamera e telefonit · iOS & Android</div>
          </div>
        </div>
        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20">
          <svg className="size-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  )

  return (
    <section className="border-b border-gray-100 bg-white">

      {!isDesktop && (
        <div
          className="sticky top-14 z-20 overflow-hidden"
          style={{ height: '44vh', background: 'radial-gradient(ellipse at 50% 60%, #edfae0 0%, #f8f8f8 65%)', border: '1.5px solid #f0f0f0' }}
          onPointerDown={() => setShowDragHint(false)}
        >
          {viewerContent}
        </div>
      )}

      <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[1fr_380px]">

        {/* Left: intro + viewer (desktop) */}
        <div className="flex flex-col border-gray-100 lg:border-r">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden px-5 pt-6 pb-5 md:px-8 md:pt-8 lg:block"
          >
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#c8ddb8] bg-[#f0f9e8] px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#4ca706]">
              ⬡ Editor 3D
            </span>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-4xl">
              Mbajtëse me <span className="text-[#4ca706]">printim</span><br />profesional
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {USE_CASES.map(({ label, Icon }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-bold text-gray-600"
                >
                  <Icon className="size-3 text-[#4ca706]" />
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="px-5 pt-5 pb-4 lg:hidden">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#c8ddb8] bg-[#f0f9e8] px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#4ca706]">
              ⬡ Editor 3D
            </span>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900">
              Mbajtëse me <span className="text-[#4ca706]">printim</span><br />profesional
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {USE_CASES.map(({ label, Icon }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-bold text-gray-600">
                  <Icon className="size-3 text-[#4ca706]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {isDesktop && (
            <div
              className="relative mx-5 mb-2 flex min-h-[300px] flex-1 items-center justify-center overflow-hidden rounded-2xl md:mx-8 md:mb-2 lg:min-h-[460px]"
              style={{ background: 'radial-gradient(ellipse at 50% 60%, #edfae0 0%, #f8f8f8 65%)', border: '1.5px solid #f0f0f0' }}
              onPointerDown={() => setShowDragHint(false)}
            >
              {viewerContent}
            </div>
          )}

          <div className="hidden lg:flex mx-5 mb-6 flex-col items-center gap-3 md:mx-8 md:mb-8">
            {arButton}
          </div>
        </div>

        {/* Right: config panel */}
        <div className="flex flex-col lg:sticky lg:top-14 lg:max-h-[calc(100vh-3.5rem)] lg:overflow-y-auto lg:self-start">

          <div className="flex items-center border-b border-[#e8f3df] bg-[#f8fdf4] px-5 py-3">
            <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#4ca706]">
              ⬡ Personalizo mbajtësen tënde
            </span>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">

            {/* Upload tab */}
            <div className="px-5 py-5">
              <div className="mb-3 flex items-start gap-2.5">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4ca706] text-[10px] font-black text-white mt-0.5">1</div>
                <div>
                  <p className="text-[12px] font-black text-gray-800">Shto logon ose dizajnin tënd</p>
                  <p className="mt-0.5 text-[10px] text-gray-400">Vendoset automatikisht në mbajtëse</p>
                </div>
              </div>

              <div className="mb-3 flex gap-2">
                {[{ id: 'logo', label: 'Kam logo gati' }, { id: 'template', label: 'Dizajn i plotë' }].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setUploadTab(tab.id)}
                    className={`flex-1 rounded-xl border-2 py-2.5 text-[10px] font-bold transition-all ${
                      uploadTab === tab.id ? 'border-[#4ca706] bg-[#f0f9e8] text-[#4ca706]' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <p className="mb-3 text-[9px] leading-relaxed text-gray-400">
                {uploadTab === 'logo' ? 'ERA e vendos logon automatikisht në të dy anët. Ngarko skedarin tënd.' : 'Shkarko templatein, vizatoje me dizajnerin tënd, ngarko rezultatin.'}
              </p>

              <AnimatePresence mode="wait">
                {uploadTab === 'logo' && (
                  <motion.div key="logo" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }} className="flex flex-col gap-2">
                    <UploadZone
                      onUpload={setLogoFile}
                      uploadedFile={logoFile}
                      onRemove={() => setLogoFile(null)}
                      label="Ngarko logon tënde"
                      subLabel="SVG, PNG, PDF ose AI"
                      formats={['SVG', 'PNG', 'PDF', 'AI']}
                    />
                    {!logoFile && (
                      <a href="mailto:info@eraprintpack.com?subject=Logo%20për%20Mbajtëse" className="mt-1 block text-center text-[9px] font-bold text-gray-400 transition-colors hover:text-[#4ca706]">
                        Nuk ke skedar gati? Dërgona logon me email →
                      </a>
                    )}
                    {logoFile && (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold text-gray-400 shrink-0">Madhësia:</span>
                          <div className="flex flex-1 gap-1.5">
                            {[{ id: 'small', label: 'S' }, { id: 'medium', label: 'M' }, { id: 'large', label: 'L' }].map(opt => (
                              <button
                                key={opt.id}
                                onClick={() => setLogoSize(opt.id)}
                                className={`flex-1 rounded-lg border-2 py-1.5 text-[11px] font-black transition-all duration-150 ${
                                  logoSize === opt.id ? 'border-[#4ca706] bg-[#f0f9e8] text-[#4ca706]' : 'border-gray-200 bg-white text-gray-400 hover:border-[#4ca706]/40'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <p className="rounded-lg border border-[#e8f3df] bg-[#f8fdf4] px-3 py-2 text-[9px] leading-relaxed text-gray-500">
                          <span className="font-bold text-[#4ca706]">Logo vendoset</span> në të dy anët e mbajtëses.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
                {uploadTab === 'template' && (
                  <motion.div key="template" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                    <TemplateFlow
                      fullDesignFile={fullDesignFile}
                      onFullDesignUpload={setFullDesignFile}
                      onFullDesignRemove={() => setFullDesignFile(null)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          <div className={`flex flex-col gap-3 px-5 py-5 lg:hidden ${!isDesktop && cupTexture ? 'pb-24' : ''}`}>
            {arButton}
          </div>

        </div>
      </div>

      {/* Sticky CTA pill — mobile, appears after logo upload */}
      <AnimatePresence>
        {!isDesktop && cupTexture && (
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="fixed bottom-4 left-4 right-4 z-30 flex items-center justify-between rounded-2xl border-[1.5px] border-[#4ca706] bg-white px-4 py-3 shadow-xl shadow-[#4ca706]/20 lg:hidden"
          >
            <div>
              <div className="text-[9px] font-semibold text-gray-400">Mbajtëse · logoja jote</div>
              <div className="text-[12.5px] font-black text-gray-900">Gati për ofertë ✓</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleARClick}
                disabled={arLoading}
                className="flex h-[52px] w-[62px] flex-col items-center justify-center gap-0.5 rounded-xl border-[1.5px] border-[#4ca706] text-[#4ca706] active:bg-[#f0f9e8] disabled:opacity-60"
              >
                <div className="relative">
                  {arLoading
                    ? <div className="size-4 animate-spin rounded-full border-2 border-[#4ca706]/30 border-t-[#4ca706]" />
                    : <Camera className="size-4" />
                  }
                  {!arLoading && (
                    <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-[#4ca706]">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#4ca706] opacity-75" />
                    </span>
                  )}
                </div>
                <span className="text-[9px] font-bold leading-none">Shiko live</span>
              </button>
              <a
                href="mailto:info@eraprintpack.com?subject=Porosi%20Mbajtëse&body=Përshëndetje%2C%0A%0ADëshiroj%20të%20porosis%20mbajtëse%20me%20logo%20të%20personalizuar."
                className="flex h-[52px] w-[62px] flex-col items-center justify-center rounded-xl bg-[#4ca706] shadow-md shadow-[#4ca706]/30"
              >
                <span className="text-[11px] font-black text-white">Merr →</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
