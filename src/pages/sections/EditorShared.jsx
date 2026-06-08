import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Upload, Check, X, ScanEye } from 'lucide-react'

// ─── Upload zone ──────────────────────────────────────────────────────────────

export function UploadZone({ onUpload, uploadedFile, onRemove, label, subLabel, formats, lang = 'al' }) {
  const [dragging, setDragging] = useState(false)
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
          <p className="text-[9px] text-[#7ec050]">{lang === 'al' ? 'Ngarkuar me sukses' : 'Uploaded successfully'}</p>
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
      className="relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-4 py-8 transition-all duration-200"
      style={{ borderColor: dragging ? '#4ca706' : '#c8ddb8', background: dragging ? '#f0f9e8' : '#f8fff4' }}
    >
      {/* Transparent overlay input — iOS Safari opens file picker on direct tap, avoids back-navigation bug */}
      <input
        type="file"
        accept=".svg,.png,.pdf,.ai,.jpg,.jpeg"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={e => handleFile(e.target.files[0])}
      />
      <div className="pointer-events-none flex size-12 items-center justify-center rounded-full bg-[#f0f9e8]">
        <Upload className="size-5 text-[#4ca706]" />
      </div>
      <div className="pointer-events-none text-center">
        <p className="text-[13px] font-bold text-gray-700">{label}</p>
        <p className="mt-1 text-[10px] text-gray-400">{subLabel}</p>
      </div>
      <div className="pointer-events-none flex gap-1.5">
        {formats.map(f => (
          <span key={f} className="rounded-md px-2 py-0.5 text-[9px] font-bold bg-white border border-gray-200 text-gray-400">{f}</span>
        ))}
      </div>
    </div>
  )
}

// ─── AR button ────────────────────────────────────────────────────────────────

export function ARButton({ onClick, loading, label, lang = 'al' }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="group relative flex w-full overflow-hidden rounded-full bg-gradient-to-r from-[#3d9005] via-[#4ca706] to-[#5db508] px-5 py-3.5 shadow-lg shadow-[#4ca706]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#4ca706]/50 active:scale-[0.97] disabled:opacity-80 disabled:cursor-not-allowed"
    >
      <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
      <div className="relative flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20">
            {loading
              ? <div className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              : <ScanEye className="size-5 text-white" />
            }
          </div>
          <div className="text-left">
            <div className="text-[13px] font-black leading-none text-white">
              {loading ? (lang === 'al' ? 'Duke përgatitur AR…' : 'Preparing AR…') : label}
            </div>
            <div className="mt-0.5 text-[10px] text-white/70">
              {lang === 'al' ? 'Kamera e telefonit · iOS & Android' : 'Phone camera · iOS & Android'}
            </div>
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
}

// ─── Logo size picker (S / M / L) ─────────────────────────────────────────────

export function LogoSizePicker({ logoSize, setLogoSize, lang = 'al' }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[9px] font-bold text-gray-400 shrink-0">{lang === 'al' ? 'Madhësia:' : 'Size:'}</span>
      <div className="flex flex-1 gap-1.5">
        {[{ id: 'small', label: 'S' }, { id: 'medium', label: 'M' }, { id: 'large', label: 'L' }].map(opt => (
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
  )
}

// ─── Breakpoint hook ──────────────────────────────────────────────────────────

export function useIsDesktop() {
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
