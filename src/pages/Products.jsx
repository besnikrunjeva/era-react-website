import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import { InfiniteGrid } from '@/components/ui/infinite-grid'
import { Featured3DStrip } from '@/pages/sections/Featured3DStrip'
import { ProductsGrid } from '@/pages/sections/ProductsGrid'
import { BottomCTA } from '@/pages/sections/BottomCTA'

export default function Products({ lang = 'al' }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Produktet — Gota, Kuti, Etiketa | ERA Print Pack Kosovë'
      : 'Products — Cups, Boxes, Labels | ERA Print Pack Kosovo'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'Shiko gamën e plotë të ambalazheve ERA: gota letre, kupa paste, kuti ushqimore, etiketa dhe më shumë. Printim i personalizuar. Porosi nga 500 copë.'
      : 'Browse ERA\'s full range: paper cups, pasta cups, food boxes, labels and more. Custom printed. Orders from 500 pieces.')
  }, [lang])

  return (
    <>
      {/* Hero */}
      <InfiniteGrid className="min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: 'easeInOut' }}
          className="relative z-10 flex flex-col items-center justify-center gap-5 px-4 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4ca706]/40 bg-[#4ca706]/10 px-4 py-1.5 text-xs font-medium text-[#4ca706] tracking-wide">
            <Package className="size-3.5" />
            {lang === 'al' ? 'Produktet Tona' : 'Our Products'}
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {lang === 'al' ? (
              <>Ambalazhe letre me{' '}<span className="text-[#4ca706]">printim profesional</span></>
            ) : (
              <>Paper packaging with{' '}<span className="text-[#4ca706]">professional printing</span></>
            )}
          </h1>

          <p className="max-w-xl text-base text-gray-500 md:text-lg">
            {lang === 'al'
              ? 'Gota letre, kupa, kuti dhe paketime me logo të personalizuar — prodhuar në Kosovë.'
              : 'Paper cups, bowls, boxes and custom-logo packaging — made in Kosovo.'}
          </p>
        </motion.div>
      </InfiniteGrid>

      {/* Zone A — 3D featured products */}
      <Featured3DStrip lang={lang} />

      {/* Zone B — Photo product grid */}
      <ProductsGrid lang={lang} />

      <BottomCTA lang={lang} />
    </>
  )
}
