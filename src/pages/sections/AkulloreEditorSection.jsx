import { useState, useRef, useCallback, Suspense, useTransition, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Coffee, IceCream, ShoppingBag, Building2,
  Download, RotateCcw, Camera,
} from 'lucide-react'
import { UploadZone, ARButton, LogoSizePicker, useIsDesktop } from '@/pages/sections/EditorShared'
import '@google/model-viewer'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, useGLTF, useEnvironment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { CanvasTexture, SRGBColorSpace } from 'three'
import { useNormalizedScene } from '@/lib/useNormalizedScene'

const BASE = import.meta.env.BASE_URL

const MODEL_URL = {
  S: `${BASE}models/akullore-s.glb`,
  M: `${BASE}models/akullore-m.glb`,
}

useGLTF.preload(MODEL_URL.S)
useGLTF.preload(MODEL_URL.M)

const SIZES = [
  { id: 'S', al: 'E vogël', desc: 'Small' },
  { id: 'M', al: 'Mesme',   desc: 'Medium' },
]

const USE_CASES = [
  { label: 'Akullore',   Icon: IceCream         },
  { label: 'Kafene',     Icon: Coffee           },
  { label: 'Fast-food',  Icon: ShoppingBag      },
  { label: 'Hotele',     Icon: Building2        },
]

// UV texture is a wide landscape wrap (≈5:1). Same ratio for both S and M.
const CANVAS = { W: 1024, H: 207 }

const LOGO_SIZE_FACTOR = { small: 0.55, medium: 1.0, large: 1.45 }

const isPrintable = name => name?.toLowerCase().includes('dizajn')

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

function AkulloreModel({ size, cupTexture }) {
  const pivot = useNormalizedScene(MODEL_URL[size])

  useEffect(() => {
    pivot.traverse(child => {
      if (!child.isMesh) return
      // Keep Blender's baked smooth normals — do NOT re-compute with toCreasedNormals
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach(m => {
        if (!m) return
        m.color.set('#ffffff')
        m.roughness   = 0.7
        m.metalness   = 0
        m.map         = (isPrintable(m.name) && cupTexture) ? cupTexture : null
        m.needsUpdate = true
      })
    })
  }, [pivot, cupTexture])

  return (
    <Float speed={1.6} rotationIntensity={0.06} floatIntensity={0.25}>
      <primitive object={pivot} />
    </Float>
  )
}

function ModelCanvas({ size, orbitRef, cupTexture }) {
  return (
    <Canvas
      camera={{ position: [0, 0.1, 3.8], fov: 44 }}
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
        <AkulloreModel size={size} cupTexture={cupTexture} />
      </Suspense>
      <OrbitControls
        ref={orbitRef}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI * 0.72}
      />
    </Canvas>
  )
}

function TemplateFlow({ selectedSize, onSizeChange, fullDesignFile, onFullDesignUpload, onFullDesignRemove }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
        <div className="flex items-center gap-2.5 border-b border-gray-100 bg-gray-50 px-3 py-2.5">
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#c8ddb8] bg-[#f0f9e8] text-[8px] font-black text-[#4ca706]">1</div>
          <div>
            <div className="text-[10px] font-bold text-gray-500">Zgjidh madhësinë dhe shkarko templatein</div>
            <div className="text-[9px] text-gray-400">Ndikon edhe pamjen 3D të kupës</div>
          </div>
        </div>
        <div className="p-3">
          <div className="mb-2.5 flex gap-2">
            {SIZES.map(s => (
              <button
                key={s.id}
                onClick={() => onSizeChange(s.id)}
                className={`flex-1 rounded-lg border py-2 text-center transition-all duration-150 ${selectedSize === s.id ? 'border-[#4ca706] bg-[#f0f9e8]' : 'border-gray-100 bg-gray-50 hover:border-[#4ca706]/40'}`}
              >
                <div className={`text-[12px] font-black ${selectedSize === s.id ? 'text-[#4ca706]' : 'text-gray-600'}`}>{s.id}</div>
                <div className="mt-0.5 text-[8px] text-gray-400">{s.al}</div>
              </button>
            ))}
          </div>
          <button
            onClick={() => alert('Templatet do të jenë të disponueshme me editotin 3D.')}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-[10px] font-bold text-gray-600 transition-all hover:border-[#4ca706]/40 hover:text-[#4ca706]"
          >
            <Download className="size-3.5" />
            Shkarko Template — {selectedSize}
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
            <div className="text-[9px] text-gray-400">Skedari vendoset direkt mbi kupën 3D</div>
          </div>
        </div>
        <div className="p-3">
          <UploadZone
            onUpload={onFullDesignUpload}
            uploadedFile={fullDesignFile}
            onRemove={onFullDesignRemove}
            label="Ngarko dizajnin e përfunduar"
            subLabel="Do të shfaqet direkt në kupën 3D"
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

export function AkulloreEditorSection({ lang = 'al' }) {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_AR_API_URL ?? 'http://localhost:8000'}/health`).catch(() => {})
  }, [])

  const [selectedSize, setSelectedSize]     = useState('S')
  const [uploadTab, setUploadTab]           = useState('logo')
  const [logoFile, setLogoFile]             = useState(null)
  const [logoSize, setLogoSize]             = useState('medium')
  const [fullDesignFiles, setFullDesignFiles] = useState({ S: null, M: null })
  const [cupTexture, setCupTexture]         = useState(null)
  const [showDragHint, setShowDragHint]     = useState(true)
  const [arLoading, setArLoading]           = useState(false)
  const orbitRef       = useRef(null)
  const mvContainerRef = useRef(null)
  const mvRef          = useRef(null)
  const logoCanvasRef  = useRef(null)
  const [, startSizeTransition] = useTransition()
  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!mvContainerRef.current) return
    if (!mvRef.current) {
      const mv = document.createElement('model-viewer')
      mv.setAttribute('ar', '')
      mv.setAttribute('ar-modes', 'webxr quick-look')
      mv.setAttribute('ar-scale', 'fixed')
      mv.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;'
      mvContainerRef.current.appendChild(mv)
      mvRef.current = mv
    }
    const modelId = `akullore-${selectedSize.toLowerCase()}`
    mvRef.current.setAttribute('src', MODEL_URL[selectedSize])
    mvRef.current.setAttribute('ios-src', `${BASE}models/${modelId}.usdz`)
  }, [selectedSize])

  const handleARClick = useCallback(async () => {
    const mv = mvRef.current
    if (!mv) return

    if (!logoCanvasRef.current) { mv.activateAR(); return }

    setArLoading(true)
    try {
      const png = await new Promise((resolve, reject) => {
        logoCanvasRef.current.toBlob(b => b ? resolve(b) : reject(new Error('toBlob failed')), 'image/jpeg', 0.85)
      })
      const fd = new FormData()
      fd.append('canvas', png, 'canvas.jpg')
      fd.append('model', `akullore-${selectedSize.toLowerCase()}`)
      const res = await fetch(
        `${import.meta.env.VITE_AR_API_URL ?? 'http://localhost:8000'}/generate-ar`,
        { method: 'POST', body: fd },
      )
      if (!res.ok) throw new Error(`Backend ${res.status}`)
      const blob = await res.blob()
      const url  = URL.createObjectURL(blob)
      mv.setAttribute('ios-src', url)
      mv.setAttribute('src', url)
      mv.activateAR()
    } catch (err) {
      console.error('[AR] generation failed, falling back:', err)
      mv.activateAR()
    } finally {
      setArLoading(false)
    }
  }, [selectedSize])

  // Rebuild texture whenever file, size, or logo settings change
  useEffect(() => {
    const file = uploadTab === 'logo' ? logoFile : fullDesignFiles[selectedSize]
    if (!file) { setCupTexture(null); logoCanvasRef.current = null; return }

    const objectUrl = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const { W, H } = CANVAS
      const c = document.createElement('canvas')
      c.width = W; c.height = H
      const ctx = c.getContext('2d')

      if (uploadTab === 'template') {
        ctx.drawImage(img, 0, 0, W, H)
      } else {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, W, H)

        const factor = LOGO_SIZE_FACTOR[logoSize]
        const s = Math.min(Math.round(H * 0.72 * factor), Math.round(W / 2 * 0.75))
        const imgAR = img.naturalWidth / img.naturalHeight
        let drawW, drawH
        if (imgAR >= 1) { drawW = s; drawH = Math.round(s / imgAR) }
        else             { drawH = s; drawW = Math.round(s * imgAR) }

        const y = (H - drawH) / 2
        // Front: left half, back: right half (landscape UV wrap)
        ctx.drawImage(img, W / 4 - drawW / 2, y, drawW, drawH)
        ctx.drawImage(img, 3 * W / 4 - drawW / 2, y, drawW, drawH)
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
  }, [logoFile, fullDesignFiles, uploadTab, selectedSize, logoSize])

  const viewerContent = (
    <>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-44 w-44 rounded-full opacity-60 blur-3xl" style={{ background: 'rgba(76,167,6,0.12)' }} />
      </div>
      <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[9px] font-bold text-gray-400 shadow-sm">
        {SIZES.find(s => s.id === selectedSize)?.al}
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
          <ModelCanvas size={selectedSize} orbitRef={orbitRef} cupTexture={cupTexture} />
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

  const arButton = <ARButton onClick={handleARClick} loading={arLoading} label="Shiko kupën tënde në AR" />

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

        {/* Left: intro + desktop viewer */}
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
              Kupa akullore me <span className="text-[#4ca706]">printim</span><br />profesional
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
              Kupa akullore me <span className="text-[#4ca706]">printim</span><br />profesional
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
              ⬡ Personalizo kupën tënde
            </span>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">

            {/* Step 1: Size */}
            <div className="px-5 py-5">
              <div className="mb-3 flex items-start gap-2.5">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4ca706] text-[10px] font-black text-white mt-0.5">1</div>
                <div>
                  <p className="text-[12px] font-black text-gray-800">Zgjidh madhësinë e kupës</p>
                  <p className="mt-0.5 text-[10px] text-gray-400">Ndikon çmimin dhe madhësinë e printimit</p>
                </div>
              </div>
              <div className="flex gap-2">
                {SIZES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => startSizeTransition(() => setSelectedSize(s.id))}
                    className={`flex-1 rounded-xl border-2 py-3 text-center transition-all duration-150 ${
                      selectedSize === s.id ? 'border-[#4ca706] bg-[#f0f9e8] shadow-sm' : 'border-gray-200 bg-white hover:border-[#4ca706]/50'
                    }`}
                  >
                    <div className={`text-[13px] font-black ${selectedSize === s.id ? 'text-[#4ca706]' : 'text-gray-700'}`}>{s.al}</div>
                    <div className={`mt-0.5 text-[10px] font-semibold ${selectedSize === s.id ? 'text-[#7ec050]' : 'text-gray-400'}`}>{s.id}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Logo / Template */}
            <div className="px-5 py-5">
              <div className="mb-3 flex items-start gap-2.5">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4ca706] text-[10px] font-black text-white mt-0.5">2</div>
                <div>
                  <p className="text-[12px] font-black text-gray-800">Shto logon ose dizajnin tënd</p>
                  <p className="mt-0.5 text-[10px] text-gray-400">ERA e vendos dhe pozicionon automatikisht në kupë</p>
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
                {uploadTab === 'logo' ? 'ERA e vendos logon automatikisht. Ngarko skedarin tënd.' : 'Shkarko templatein, vizatoje me dizajnerin tënd, ngarko rezultatin.'}
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
                      <a href="mailto:info@eraprintpack.com?subject=Logo%20për%20Kupa%20Akullore" className="mt-1 block text-center text-[9px] font-bold text-gray-400 transition-colors hover:text-[#4ca706]">
                        Nuk ke skedar gati? Dërgona logon me email →
                      </a>
                    )}
                    {logoFile && (
                      <div className="flex flex-col gap-2">
                        <LogoSizePicker logoSize={logoSize} setLogoSize={setLogoSize} />
                        <p className="rounded-lg border border-[#e8f3df] bg-[#f8fdf4] px-3 py-2 text-[9px] leading-relaxed text-gray-500">
                          <span className="font-bold text-[#4ca706]">Logo vendoset</span> në të dy anët e kupës.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
                {uploadTab === 'template' && (
                  <motion.div key="template" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                    <TemplateFlow
                      selectedSize={selectedSize}
                      onSizeChange={s => startSizeTransition(() => setSelectedSize(s))}
                      fullDesignFile={fullDesignFiles[selectedSize]}
                      onFullDesignUpload={f => setFullDesignFiles(prev => ({ ...prev, [selectedSize]: f }))}
                      onFullDesignRemove={() => setFullDesignFiles(prev => ({ ...prev, [selectedSize]: null }))}
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

      {/* Sticky CTA pill — mobile, after logo upload */}
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
              <div className="text-[9px] font-semibold text-gray-400">Akullore {selectedSize} · logoja jote</div>
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
                href={`mailto:info@eraprintpack.com?subject=${encodeURIComponent('Porosi Kupa Akullore — ' + selectedSize)}&body=${encodeURIComponent('Përshëndetje,\n\nDëshiroj të porosis Kupa Akullore:\n• Madhësia: ' + selectedSize + '\n• Sasia: 5,000 copë\n\nMund të na jepni ofertë?')}`}
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
