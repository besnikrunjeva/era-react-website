import { ProductCard } from '@/components/ui/product-card'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Box } from 'lucide-react'

import gotaImg from '@/assets/products/gota.webp'
import kupaImg from '@/assets/products/kupa.webp'

const products = {
  al: [
    { image: gotaImg, name: 'Gota Letre',  description: 'Gota me printim të personalizuar. Madhësi: 3.5oz, 7oz, 12oz.', href: '/products/gota' },
    { image: kupaImg, name: 'Kupa Pasta',  description: 'Kupa për pasta dhe noodle me printim të plotë. Madhësi S, M, L.', href: '/products/kupa-pasta' },
  ],
  en: [
    { image: gotaImg, name: 'Paper Cups',  description: 'Custom-printed cups. Sizes: 3.5oz, 7oz, 12oz.', href: '/products/gota' },
    { image: kupaImg, name: 'Pasta Cups',  description: 'Full-print pasta and noodle cups. Sizes S, M, L.', href: '/products/kupa-pasta' },
  ],
}

export function FeaturedProducts({ lang = 'al' }) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
            <Box className="size-3.5" />
            {lang === 'al' ? 'Personalizo në 3D' : 'Customize in 3D'}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {lang === 'al'
              ? 'Shiko ambalazhën tënde para se ta porosisësh'
              : 'See your packaging before you order'}
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            {lang === 'al'
              ? 'Çdo produkt mund të personalizohet me logon dhe ngjyrat tuaja. Shiko rezultatin në 3D para se të bësh porosinë.'
              : 'Every product can be customized with your logo and colors. Preview the result in 3D before placing your order.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {products[lang].map((product, i) => (
            <ProductCard key={product.name} {...product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-md border border-[#4ca706] px-6 py-2.5 text-sm font-medium text-[#4ca706] hover:bg-[#4ca706] hover:text-white transition-colors"
          >
            {lang === 'al' ? 'Shiko të gjitha produktet' : 'View all products'}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
