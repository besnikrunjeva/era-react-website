import { useState, useRef, useCallback, Suspense, useTransition, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Coffee, ForkKnifeCrossed, ShoppingBag, Building2,
  Upload, Download, X, Check, RotateCcw, Mail, ScanEye,
} from 'lucide-react'
import '@google/model-viewer'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, useGLTF, useEnvironment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { CanvasTexture, TextureLoader, SRGBColorSpace } from 'three'
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { useNormalizedScene } from '@/lib/useNormalizedScene'

const BASE = import.meta.env.BASE_URL

useGLTF.preload(`${BASE}models/gota-3.5oz.glb`)
useGLTF.preload(`${BASE}models/gota-7oz.glb`)
useGLTF.preload(`${BASE}models/gota-12oz.glb`)

// ─── Static data ───────────────────────────────────────────────────────────────

const SIZES = [
  { id: '3.5oz', ml: '100ml', al: 'E vogël',  use: 'Espresso'  },
  { id: '7oz',   ml: '200ml', al: 'Mesme',    use: 'Kafeje'    },
  { id: '12oz',  ml: '350ml', al: 'E madhe',  use: 'Kapuçino'  },
]

const USE_CASES = [
  { label: 'Kafene',     Icon: Coffee            },
  { label: 'Restorante', Icon: ForkKnifeCrossed  },
  { label: 'Fast-food',  Icon: ShoppingBag       },
  { label: 'Hotele',     Icon: Building2         },
]

const MODEL_URL = {
  '3.5oz': `${BASE}models/gota-3.5oz.glb`,
  '7oz':   `${BASE}models/gota-7oz.glb`,
  '12oz':  `${BASE}models/gota-12oz.glb`,
}

const isDesignMat = name => {
  if (!name) return false
  const u = name.toUpperCase()
  return u.includes('DESIGN') || u.includes('DIZAJN')
}

// Actual flat print area dimensions per size (mm)
const CUP_PHYS = {
  '3.5oz': { w: 154, h: 53  },
  '7oz':   { w: 182, h: 73  },
  '12oz':  { w: 230, h: 112 },
}

// Canvas pixel dimensions matching each cup's UV aspect ratio
const CUP_CANVAS = {
  '3.5oz': { W: 1024, H: Math.round(1024 * 53  / 154) },  // 352
  '7oz':   { W: 1024, H: Math.round(1024 * 73  / 182) },  // 411
  '12oz':  { W: 1024, H: Math.round(1024 * 112 / 230) },  // 499
}

// Full cup heights for 3D viewer proportional scaling
const CUP_HEIGHT = { '3.5oz': 56.0, '7oz': 79.5, '12oz': 114.8 }

const LOGO_SIZE_FACTOR = { small: 0.55, medium: 1.0, large: 1.45 }

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

function GotaCup({ url, cupTexture, size }) {
  const pivot     = useNormalizedScene(url)
  const viewScale = CUP_HEIGHT[size] / CUP_HEIGHT['12oz']

  useEffect(() => {
    pivot.traverse(child => {
      if (!child.isMesh) return
      child.geometry = toCreasedNormals(child.geometry, Math.PI / 6)
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach(m => {
        if (!m) return
        m.color.set('#ffffff')
        m.roughness   = 0.85
        m.metalness   = 0
        m.map         = (isDesignMat(m.name) && cupTexture) ? cupTexture : null
        m.needsUpdate = true
      })
    })
  }, [pivot, cupTexture])

  return (
    <group scale={viewScale}>
      <Float speed={1.6} rotationIntensity={0.06} floatIntensity={0.25}>
        <primitive object={pivot} />
      </Float>
    </group>
  )
}

function GotaCanvas({ size, orbitRef, cupTexture }) {
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
        <GotaCup url={MODEL_URL[size]} cupTexture={cupTexture} size={size} />
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

// ─── Drag-and-drop upload zone ─────────────────────────────────────────────────

function UploadZone({ onUpload, uploadedFile, onRemove, label, subLabel, formats }) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFile = useCallback((file) => {
    if (!file) return
    onUpload(file)
  }, [onUpload])

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
      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]) }}
      onClick={() => inputRef.current?.click()}
      className="flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-4 py-8 transition-all duration-200"
      style={{ borderColor: dragging ? '#4ca706' : '#c8ddb8', background: dragging ? '#f0f9e8' : '#f8fff4' }}
    >
      <input ref={inputRef} type="file" accept=".svg,.png,.pdf,.ai,.jpg,.jpeg" className="hidden" onChange={(e) => handleFile(e.target.files[0])} />
      <div className="flex size-12 items-center justify-center rounded-full bg-[#f0f9e8]">
        <Upload className="size-5 text-[#4ca706]" />
      </div>
      <div className="text-center">
        <p className="text-[13px] font-bold text-gray-700">{label}</p>
        <p className="mt-1 text-[10px] text-gray-400">{subLabel}</p>
      </div>
      <div className="flex gap-1.5">
        {formats.map(f => (
          <span key={f} className="rounded-md px-2 py-0.5 text-[9px] font-bold bg-white border border-gray-200 text-gray-400">{f}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Template flow (Flow B) ────────────────────────────────────────────────────

function TemplateFlow({ selectedSize, onSizeChange, fullDesignFile, onFullDesignUpload, onFullDesignRemove }) {
  const TEMPLATE_DIMS = {
    '3.5oz': '154 × 53 mm',
    '7oz':   '182 × 73 mm',
    '12oz':  '230 × 112 mm',
  }

  return (
    <div className="flex flex-col gap-2">

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
        <div className="flex items-center gap-2.5 border-b border-gray-100 bg-gray-50 px-3 py-2.5">
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#c8ddb8] bg-[#f0f9e8] text-[8px] font-black text-[#4ca706]">1</div>
          <div>
            <div className="text-[10px] font-bold text-gray-500">Zgjidh madhësinë dhe shkarko templatein</div>
            <div className="text-[9px] text-gray-400">Ndikon edhe pamjen 3D të gotës</div>
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
                <div className="mt-0.5 text-[8px] text-gray-400">{TEMPLATE_DIMS[s.id]}</div>
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
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-200 bg-white text-[8px] font-black text-gray-400">2</div>
          <span className="text-[10px] font-bold text-gray-500">Ngarko dizajnin e plotë</span>
        </div>
        <div className="p-3">
          <UploadZone
            onUpload={onFullDesignUpload}
            uploadedFile={fullDesignFile}
            onRemove={onFullDesignRemove}
            label="Ngarko dizajnin e përfunduar"
            subLabel="Do të shfaqet direkt në gotën 3D"
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

// ─── Main exported component ───────────────────────────────────────────────────

export function GotaEditorSection({ lang = 'al' }) {
  const [selectedSize, setSelectedSize]       = useState('7oz')
  const [uploadTab, setUploadTab]             = useState('logo')
  const [logoFile, setLogoFile]               = useState(null)
  const [logoSize, setLogoSize]               = useState('medium')
  const [fullDesignFiles, setFullDesignFiles] = useState({ '3.5oz': null, '7oz': null, '12oz': null })
  const [cupTexture, setCupTexture]           = useState(null)
  const [showDragHint, setShowDragHint]       = useState(true)
  const orbitRef                              = useRef(null)
  const mvContainerRef                        = useRef(null)
  const mvRef                                 = useRef(null)
  const mvCompareRef                          = useRef(null)

  // Keep model-viewer src in sync with selected size
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
    mvRef.current.setAttribute('src', `/models/gota-${selectedSize}.glb`)
    mvRef.current.setAttribute('ios-src', `/models/gota-${selectedSize}.usdz`)

    if (!mvCompareRef.current) {
      const mvc = document.createElement('model-viewer')
      mvc.setAttribute('ar', '')
      mvc.setAttribute('ar-modes', 'webxr quick-look')
      mvc.setAttribute('ar-scale', 'fixed')
      mvc.setAttribute('src', `${BASE}models/gota-compare.usdz`)
      mvc.setAttribute('ios-src', `${BASE}models/gota-compare.usdz`)
      mvc.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;'
      mvContainerRef.current.appendChild(mvc)
      mvCompareRef.current = mvc
    }
  }, [selectedSize])

  const handleARClick = useCallback(() => {
    if (mvRef.current) mvRef.current.activateAR()
  }, [])

  const handleARCompare = useCallback(() => {
    if (mvCompareRef.current) mvCompareRef.current.activateAR()
  }, [])

  // Rebuild texture whenever upload or selected size changes
  useEffect(() => {
    const file = uploadTab === 'logo' ? logoFile : fullDesignFiles[selectedSize]
    if (!file) { setCupTexture(null); return }

    const objectUrl = URL.createObjectURL(file)

    if (uploadTab === 'logo') {
      const img = new Image()
      img.onload = () => {
        const { W, H } = CUP_CANVAS[selectedSize]
        const c   = document.createElement('canvas')
        c.width   = W
        c.height  = H
        const ctx = c.getContext('2d')
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, W, H)

        // Scale logo to same physical mm across sizes, capped to fit each half
        const base  = CUP_PHYS['3.5oz']
        const curr  = CUP_PHYS[selectedSize]
        const scale = Math.min(base.w / curr.w, base.h / curr.h)
        const s     = Math.min(Math.round(H * 0.72 * scale * LOGO_SIZE_FACTOR[logoSize]), Math.round(W / 2 * 0.75))
        const y     = (H - s) / 2
        // Draw centered on front (left half) and back (right half)
        ctx.drawImage(img, W / 4 - s / 2, y, s, s)
        ctx.drawImage(img, 3 * W / 4 - s / 2, y, s, s)

        const tex = new CanvasTexture(c)
        tex.colorSpace = SRGBColorSpace
        tex.flipY = false
        setCupTexture(tex)
        URL.revokeObjectURL(objectUrl)
      }
      img.onerror = () => URL.revokeObjectURL(objectUrl)
      img.src = objectUrl
    } else {
      new TextureLoader().load(objectUrl, tex => {
        tex.colorSpace = SRGBColorSpace
        tex.flipY = false
        setCupTexture(tex)
        URL.revokeObjectURL(objectUrl)
      })
    }
  }, [logoFile, fullDesignFiles, uploadTab, selectedSize, logoSize])
  const [, startSizeTransition]               = useTransition()

  const buildEmailLink = () => {
    const body = [
      'Përshëndetje,',
      '',
      'Dëshiroj të porosis Gota Letre:',
      `• Madhësia: ${selectedSize}`,
      logoFile                      ? `• Logo: ${logoFile.name} (e bashkëngjitur)` : '',
      fullDesignFiles[selectedSize] ? `• Dizajn i plotë: ${fullDesignFiles[selectedSize].name} (e bashkëngjitur)` : '',
      '• Sasia: 10,000 cope (ose kombinim 5,000 + 5,000)',
      '',
      'Mund të na jepni ofertë?',
    ].filter(Boolean)
    return `mailto:info@eraprintpack.com?subject=${encodeURIComponent('Porosi Gota Letre — ' + selectedSize)}&body=${encodeURIComponent(body.join('\n'))}`
  }

  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[1fr_380px]">

        {/* ── Left: intro + viewer placeholder ── */}
        <div className="flex flex-col border-gray-100 lg:border-r">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="px-5 pt-6 pb-5 md:px-8 md:pt-8"
          >
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#c8ddb8] bg-[#f0f9e8] px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#4ca706]">
              ⬡ Editor 3D
            </span>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-4xl">
              Gota me <span className="text-[#4ca706]">printim</span><br />profesional
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

          {/* 3D Viewer */}
          <div
            className="relative mx-5 mb-2 flex min-h-[300px] flex-1 items-center justify-center overflow-hidden rounded-2xl md:mx-8 md:mb-2 lg:min-h-[460px]"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, #edfae0 0%, #f8f8f8 65%)', border: '1.5px solid #f0f0f0' }}
            onPointerDown={() => setShowDragHint(false)}
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-44 w-44 rounded-full opacity-60 blur-3xl" style={{ background: 'rgba(76,167,6,0.12)' }} />
            </div>

            {/* Size tag */}
            <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[9px] font-bold text-gray-400 shadow-sm">
              {selectedSize} · {SIZES.find(s => s.id === selectedSize)?.ml}
            </div>

            {/* Live badge */}
            <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-[#c8ddb8] bg-[#f0f9e8] px-2.5 py-1 text-[9px] font-bold text-[#4ca706]">
              <span className="size-1.5 animate-pulse rounded-full bg-[#4ca706]" />
              Live Preview
            </div>

            {/* Canvas */}
            <div className="absolute inset-0">
              <Suspense fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <div className="size-8 animate-spin rounded-full border-2 border-[#4ca706]/20 border-t-[#4ca706]" />
                </div>
              }>
                <GotaCanvas size={selectedSize} orbitRef={orbitRef} cupTexture={cupTexture} />
              </Suspense>
            </div>

            {/* Drag hint */}
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

            {/* Hidden model-viewer host */}
            <div ref={mvContainerRef} aria-hidden="true" />

            {/* Viewer controls */}
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center">
              <button
                onClick={() => orbitRef.current?.reset()}
                title="Rinis rrotullimin"
                className="flex size-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-colors hover:text-[#4ca706]"
              >
                <RotateCcw className="size-3.5" />
              </button>
            </div>
          </div>

          {/* AR CTAs */}
          <div className="mx-5 mb-6 flex flex-col items-center gap-3 md:mx-8 md:mb-8">
            <button
              onClick={handleARClick}
              className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#3d9005] via-[#4ca706] to-[#5db508] px-5 py-3.5 shadow-lg shadow-[#4ca706]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#4ca706]/50 active:scale-[0.97]"
            >
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <ScanEye className="size-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-[13px] font-black leading-none text-white">Shiko gotën tënde në AR</div>
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

            <button
              onClick={handleARCompare}
              className="flex items-center gap-1.5 rounded-full border border-[#c8ddb8] bg-[#f0f9e8] px-4 py-2 text-[10px] font-bold text-[#4ca706] transition-all hover:bg-[#e4f5d4]"
            >
              <ScanEye className="size-3" />
              Krahaso 3 madhësitë bashkë
            </button>
          </div>
        </div>

        {/* ── Right: sticky config panel ── */}
        <div className="flex flex-col lg:sticky lg:top-14 lg:max-h-[calc(100vh-3.5rem)] lg:overflow-y-auto lg:self-start">

          <div className="flex items-center justify-between border-b border-[#e8f3df] bg-[#f8fdf4] px-5 py-3">
            <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#4ca706]">
              ⬡ Personalizo gotën tënde
            </span>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">

            {/* Step 1: Size */}
            <div className="px-5 py-5">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4ca706] text-[10px] font-black text-white">1</div>
                <p className="text-[12px] font-black text-gray-800">Zgjidh madhësinë</p>
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
                    <div className={`mt-0.5 text-[10px] font-semibold ${selectedSize === s.id ? 'text-[#7ec050]' : 'text-gray-400'}`}>{s.ml}</div>
                    <div className={`text-[9px] ${selectedSize === s.id ? 'text-[#a3d070]' : 'text-gray-300'}`}>{s.use}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Logo / Template */}
            <div className="px-5 py-5">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4ca706] text-[10px] font-black text-white">2</div>
                <p className="text-[12px] font-black text-gray-800">Ngarko logon ose dizajnin</p>
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
                      <a href="mailto:info@eraprintpack.com?subject=Logo%20për%20Gota%20Letre&body=Përshëndetje%2C%0A%0ADëshiroj%20të%20porosis%20gota%20dhe%20do%20ta%20dërgoj%20logon%20me%20email." className="mt-1 block text-center text-[9px] font-bold text-gray-400 transition-colors hover:text-[#4ca706]">
                        Nuk ke skedar gati? Dërgona logon me email →
                      </a>
                    )}
                    {logoFile && (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold text-gray-400 shrink-0">Madhësia:</span>
                          <div className="flex flex-1 gap-1.5">
                            {[
                              { id: 'small',  label: 'S' },
                              { id: 'medium', label: 'M' },
                              { id: 'large',  label: 'L' },
                            ].map(opt => (
                              <button
                                key={opt.id}
                                onClick={() => setLogoSize(opt.id)}
                                className={`flex-1 rounded-lg border-2 py-1.5 text-[11px] font-black transition-all duration-150 ${
                                  logoSize === opt.id
                                    ? 'border-[#4ca706] bg-[#f0f9e8] text-[#4ca706]'
                                    : 'border-gray-200 bg-white text-gray-400 hover:border-[#4ca706]/40'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <p className="rounded-lg border border-[#e8f3df] bg-[#f8fdf4] px-3 py-2 text-[9px] leading-relaxed text-gray-500">
                          <span className="font-bold text-[#4ca706]">Logo vendoset</span> në të dy anët e gotës.
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

          {/* CTA */}
          <div className="border-t-2 border-[#e8f3df] bg-white px-5 py-5">
            <a
              href={buildEmailLink()}
              className="flex w-full flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#4ca706] py-4 text-white shadow-xl shadow-[#4ca706]/25 transition-all hover:bg-[#3d9005] active:scale-[0.98]"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="size-5" />
                <span className="text-[15px] font-black">Merr ofertë falas</span>
              </div>
              <span className="text-[10px] font-medium text-white/80">info@eraprintpack.com</span>
            </a>
            <p className="mt-3 text-center text-[9px] text-gray-400">Përgjigje brenda 24 orësh · Pa detyrime</p>
          </div>

        </div>
      </div>
    </section>
  )
}
