import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, ImagePlus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LogoUploadSplash({ onUpload, className }) {
  const inputRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    onUpload?.(url, file)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'absolute inset-0 z-30 flex items-center justify-center',
        className
      )}
    >
      {/* Frosted glass card */}
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/60 bg-white/40 px-8 py-8 text-center shadow-xl backdrop-blur-md">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10">
          <ImagePlus className="size-6 text-[#4ca706]" />
        </div>

        {/* Text */}
        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-gray-800">
            Ngarko logon tënde
          </p>
          <p className="text-xs text-gray-400">
            PNG ose SVG · rekomandohet sfond transparent
          </p>
        </div>

        {/* Dashed upload button */}
        <button
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-md border border-dashed border-[#4ca706]/60 bg-white/60 px-5 py-2.5 text-xs font-semibold text-[#4ca706] transition-all hover:border-[#4ca706] hover:bg-[#4ca706]/5 active:scale-95"
        >
          <Upload className="size-3.5" />
          Zgjidh skedarin
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/svg+xml,image/jpeg"
          className="hidden"
          onChange={handleFile}
        />
      </div>
    </motion.div>
  )
}
