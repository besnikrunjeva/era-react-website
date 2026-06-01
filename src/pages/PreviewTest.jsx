import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProductPreview3D } from '@/components/ui/product-preview-3d'
import { LogoUploadSplash } from '@/components/ui/logo-upload-splash'

export default function PreviewTest() {
  const [logo, setLogo] = useState(null)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-2xl font-bold text-gray-900">3D Preview</h1>

      <div className="relative w-full max-w-md h-[500px] rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <ProductPreview3D modelPath="/models/gota-7oz.glb" autoRotate logoUrl={logo} />

        <AnimatePresence>
          {!logo && (
            <LogoUploadSplash onUpload={(url) => setLogo(url)} />
          )}
        </AnimatePresence>
      </div>

      {logo && (
        <button
          onClick={() => setLogo(null)}
          className="text-xs text-gray-400 underline hover:text-gray-600"
        >
          Hiq logon
        </button>
      )}
    </div>
  )
}
